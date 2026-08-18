import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout: React.FC<{ children: React.ReactNode, activePage: string, onNavigate: (id: string) => void }> = ({ children, activePage, onNavigate }) => {
  return (
    <div className="app-layout">
      <Sidebar activeItem={activePage} onNavigate={onNavigate} />
      <div className="app-content-area bg-bg-color">
        <Header />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};
