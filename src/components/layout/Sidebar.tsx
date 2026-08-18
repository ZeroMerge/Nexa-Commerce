import React from 'react';

const ICON_DASHBOARD = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>;
const ICON_CART = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
const ICON_STORE = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ICON_MAP = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
const ICON_USERS = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ICON_TAG = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const ICON_LEDGER = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const ICON_DOLLAR = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const ICON_SETTINGS = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>;
const ICON_MOON = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const ICON_LOGOUT = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const ICON_CHEVRON_LEFT = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const ICON_CHEVRON_RIGHT = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;



const NAV_GROUPS = [
  {
    label: 'MARKETING',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <ICON_DASHBOARD /> },
      { id: 'marketplace', label: 'Marketplace', icon: <ICON_STORE /> },
      { id: 'orders', label: 'Orders', icon: <ICON_CART /> },
      { id: 'tracking', label: 'Tracking', icon: <ICON_MAP />, sub: true },
      { id: 'customers', label: 'Customers', icon: <ICON_USERS /> },
      { id: 'discounts', label: 'Discounts', icon: <ICON_TAG /> },
    ],
  },
  {
    label: 'PAYMENTS',
    items: [
      { id: 'ledger', label: 'Ledger', icon: <ICON_LEDGER /> },
      { id: 'taxes', label: 'Taxes', icon: <ICON_DOLLAR /> },
    ],
  },
  {
    label: 'SYSTEM',
    items: [
      { id: 'settings', label: 'Settings', icon: <ICON_SETTINGS /> },
    ],
  },
];

interface SidebarProps {
  activeItem: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate }) => {
  return (
    <>
      {/* Sidebar panel */}
      <nav className="nav-panel">
        <div className="nav-panel-header">
          <div className="nav-panel-brand">
            <div className="nav-panel-brand-icon">O</div>
            Flup
          </div>
          <button className="nav-panel-collapse">
            <ICON_CHEVRON_LEFT />
          </button>
        </div>

        <div className="nav-panel-body">
          {NAV_GROUPS.map((group) => (
            <div className="nav-panel-section" key={group.label}>
              <span className="nav-panel-section-label">{group.label}</span>
              {group.items.map((item) => (
                <button
                  key={item.id}
                  className={`nav-panel-link${activeItem === item.id ? ' active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  <span className="nav-panel-link-inner">
                    <span className="nav-panel-link-icon">{item.icon}</span>
                    {item.label}
                  </span>
                  {item.sub && <ICON_CHEVRON_RIGHT />}
                </button>
              ))}
            </div>
          ))}

          <div className="nav-panel-section">
            <div className="dark-mode-row">
              <span className="dark-mode-label">
                <ICON_MOON /> Dark mode
              </span>
              <div className="toggle-pill">
                <div className="toggle-thumb" />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-panel-footer">
          <div className="nav-panel-user">
            <div className="nav-panel-user-avatar">
              <img src="https://i.pravatar.cc/150?u=harper" alt="Harper" />
            </div>
            <div>
              <div className="nav-panel-user-name">Harper Nelson</div>
              <div className="nav-panel-user-role">Admin Manager</div>
            </div>
          </div>
          <button className="nav-panel-logout">
            <ICON_LOGOUT /> Log out
          </button>
        </div>
      </nav>
    </>
  );
};
