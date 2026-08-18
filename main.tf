provider "aws" {
  region = "us-east-1"
}

data "aws_vpc" "default" { default = true }
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# 1. Security Group (Firewall)
resource "aws_security_group" "nexa_sg" {
  name        = "nexa-commerce-sg"
  description = "Allow HTTP and SSH"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 2. Latest Ubuntu Image
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

# 3. Blue Server (v1.4)
resource "aws_instance" "blue_server" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.nexa_sg.id]
  user_data              = <<-EOF
                            #!/bin/bash
                            sudo apt-get update
                            sudo apt-get install -y docker.io
                            sudo systemctl start docker
                            sudo systemctl enable docker
                            sudo docker run -d -p 80:80 abundanr/nexa-commerce:v1.4
                            EOF
  tags = { Name = "NEXA-Blue-Server" }
}

# 4. Green Server (v2.0)
resource "aws_instance" "green_server" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.nexa_sg.id]
  user_data              = <<-EOF
                            #!/bin/bash
                            sudo apt-get update
                            sudo apt-get install -y docker.io
                            sudo systemctl start docker
                            sudo systemctl enable docker
                            sudo docker run -d -p 80:80 abundanr/nexa-commerce:v2.0
                            EOF
  tags = { Name = "NEXA-Green-Server" }
}

# 5. Target Groups
resource "aws_lb_target_group" "tg_blue" {
  name     = "nexa-tg-blue"
  port     = 80
  protocol = "HTTP"
  vpc_id   = data.aws_vpc.default.id
}
resource "aws_lb_target_group" "tg_green" {
  name     = "nexa-tg-green"
  port     = 80
  protocol = "HTTP"
  vpc_id   = data.aws_vpc.default.id
}

# 6. Target Group Attachments
resource "aws_lb_target_group_attachment" "blue_attach" {
  target_group_arn = aws_lb_target_group.tg_blue.arn
  target_id        = aws_instance.blue_server.id
  port             = 80
}
resource "aws_lb_target_group_attachment" "green_attach" {
  target_group_arn = aws_lb_target_group.tg_green.arn
  target_id        = aws_instance.green_server.id
  port             = 80
}

# 7. Application Load Balancer
resource "aws_lb" "alb" {
  name               = "nexa-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.nexa_sg.id]
  subnets            = data.aws_subnets.default.ids
}

# 8. THE SWITCH (Listener)
resource "aws_lb_listener" "production_listener" {
  load_balancer_arn = aws_lb.alb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    # To switch to Green, change this to: aws_lb_target_group.tg_green.arn
    target_group_arn = aws_lb_target_group.tg_blue.arn 
  }
}

output "production_url" {
  value = "http://${aws_lb.alb.dns_name}"
}