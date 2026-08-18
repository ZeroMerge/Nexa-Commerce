import './styles/app.css';
import { useState } from 'react';
import { VersionProvider, IS_V2 } from './app/VersionContext';
import { Sidebar } from './components/layout/Sidebar';
import { OverviewPage } from './pages/OverviewPage';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <VersionProvider>
      <div className="app-shell">
        <Sidebar activeItem={activePage} onNavigate={setActivePage} />
        <main className="main-area">
          {IS_V2 ? (
            // ── v2.0 topbar ──────────────────────────────────────────────────
            <header className="topbar">
              <div className="topbar-left">
                <h1 className="topbar-title">Dashboard</h1>
                <p className="topbar-sub">Plan, prioritize, and accomplish your tasks with ease.</p>
              </div>
              <div className="topbar-actions">
                <button className="btn-action btn-action--primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Add Project
                </button>
                <button className="btn-action btn-action--outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  Import Data
                </button>
              </div>
            </header>
          ) : (
            // ── v1.4 topbar ──────────────────────────────────────────────────
            <header className="topbar">
              <h1 className="topbar-title">Dashboard</h1>
              <div className="topbar-actions">
                <button className="btn-period">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Time period: <span>Last 30 days</span>
                </button>
              </div>
            </header>
          )}

          <div className="page-content">
            <OverviewPage />
          </div>
        </main>
      </div>
    </VersionProvider>
  );
}

export default App;
