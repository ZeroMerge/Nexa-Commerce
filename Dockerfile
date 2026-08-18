FROM node:18-alpine AS builder
WORKDIR /app


COPY package*.json ./
RUN npm ci --prefer-offline

COPY . .

ARG BUILD_MODE=v1
RUN npm run build:${BUILD_MODE}

FROM nginx:alpine AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
