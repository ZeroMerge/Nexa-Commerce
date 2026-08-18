import React, { useState, useEffect } from 'react';

// ─── V1 Data ─────────────────────────────────────────────────────────────────
const REVENUE_DATA = [
  { date: '1 Jul', margin: 19000, revenue: 21000 },
  { date: '2 Jul', margin: 29000, revenue: 31000 },
  { date: '3 Jul', margin: 21000, revenue: 26000 },
  { date: '4 Jul', margin: 27000, revenue: 48000 },
  { date: '5 Jul', margin: 49000, revenue: 39000 },
  { date: '6 Jul', margin: 52187, revenue: 41000 },
  { date: '7 Jul', margin: 18000, revenue: 24000 },
  { date: '8 Jul', margin: 32000, revenue: 37000 },
  { date: '9 Jul', margin: 28000, revenue: 32000 },
  { date: '10 Jul', margin: 36000, revenue: 40000 },
  { date: '11 Jul', margin: 38000, revenue: 43000 },
  { date: '12 Jul', margin: 55000, revenue: 50000 },
];

const CATEGORIES = [
  { label: 'Living room', pct: 25, color: '#7C3AED' },
  { label: 'Kids',        pct: 17, color: '#3B82F6' },
  { label: 'Office',      pct: 13, color: '#A855F7' },
  { label: 'Bedroom',     pct: 12, color: '#38BDF8' },
  { label: 'Kitchen',     pct:  9, color: '#D946EF' },
  { label: 'Bathroom',    pct:  8, color: '#F472B6' },
  { label: 'Dining room', pct:  6, color: '#F43F5E' },
  { label: 'Decor',       pct:  5, color: '#FBBF24' },
  { label: 'Lighting',    pct:  3, color: '#10B981' },
  { label: 'Outdoor',     pct:  2, color: '#4ADE80' },
];

const COUNTRIES = [
  { name: 'Poland',  pct: 19, active: true  },
  { name: 'Austria', pct: 15, active: true  },
  { name: 'Spain',   pct: 13, active: true  },
  { name: 'Romania', pct: 12, active: true  },
  { name: 'France',  pct: 11, active: true  },
  { name: 'Italy',   pct: 11, active: true  },
  { name: 'Germany', pct: 10, active: false },
  { name: 'Ukraine', pct:  9, active: false },
];

// ─── V2 Data ─────────────────────────────────────────────────────────────────
const ANALYTICS = [
  { day: 'S', h: 0.40 },
  { day: 'M', h: 0.55 },
  { day: 'T', h: 0.74 },
  { day: 'W', h: 0.48 },
  { day: 'T', h: 0.62 },
  { day: 'F', h: 0.38 },
  { day: 'S', h: 0.28 },
];

const TEAM = [
  { name: 'Alexandra Deff',       task: 'Github Project Repository',               status: 'Completed',  avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Edwin Adenike',        task: 'Integrate User Authentication System',    status: 'In Progress', avatar: 'https://i.pravatar.cc/150?u=edwin' },
  { name: 'Isaac Oluwatemilorun', task: 'Develop Search and Filter Functionality', status: 'Pending',    avatar: 'https://i.pravatar.cc/150?u=isaac' },
  { name: 'David Oshodi',         task: 'Responsive Layout for Homepage',          status: 'In Progress', avatar: 'https://i.pravatar.cc/150?u=david' },
];

const PROJECTS = [
  { name: 'Develop API Endpoints',  due: 'Nov 26, 2024', color: '#6366F1' },
  { name: 'Onboarding Flow',        due: 'Nov 28, 2024', color: '#F59E0B' },
  { name: 'Build Dashboard',        due: 'Nov 30, 2024', color: '#10B981' },
  { name: 'Optimize Page Load',     due: 'Dec 5, 2024',  color: '#F97316' },
  { name: 'Cross-Browser Testing',  due: 'Dec 6, 2024',  color: '#8B5CF6' },
];

const STATUS_COLORS: Record<string, string> = {
  'Completed':   '#10B981',
  'In Progress': '#F59E0B',
  'Pending':     '#9CA3AF',
};

// ─── Shared sub-components ────────────────────────────────────────────────────

const DonutChart: React.FC = () => {
  const cx = 60, cy = 60, r = 44;
  const circ = 2 * Math.PI * r;
  let cumPct = 0;
  const segments = CATEGORIES.map((cat, i) => {
    const dash = (cat.pct / 100) * circ;
    const rotation = (cumPct / 100) * 360 - 90;
    cumPct += cat.pct;
    return { ...cat, dash, rotation, i };
  });

  return (
    <svg width="130" height="130" viewBox="0 0 120 120">
      {segments.map((seg) => (
        <circle
          key={seg.label}
          cx={cx} cy={cy} r={r}
          fill="transparent"
          stroke={seg.color}
          strokeWidth="20"
          strokeDasharray={`${circ} ${circ}`}
          strokeDashoffset={circ - seg.dash}
          transform={`rotate(${seg.rotation} ${cx} ${cy})`}
          className="donut-segment"
          style={{ ['--i' as string]: seg.i, ['--circ' as string]: circ }}
        />
      ))}
      <circle cx={cx} cy={cy} r="34" fill="white" />
    </svg>
  );
};

const BarChart: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const maxVal = Math.max(...REVENUE_DATA.map(d => Math.max(d.margin, d.revenue)));
  const W = 720, H = 230;
  const padX = 42, padY = 16, padBottom = 26;
  const drawW = W - padX * 2;
  const drawH = H - padY - padBottom;
  const slotW = drawW / REVENUE_DATA.length;
  const barW = slotW * 0.28;
  const barGap = slotW * 0.04;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <filter id="tipShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.12" />
        </filter>
      </defs>
      {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
        const y = padY + drawH - ratio * drawH;
        return (
          <g key={i}>
            <line x1={padX} y1={y} x2={W - padX} y2={y}
              stroke="#EAECEF" strokeWidth="1"
              strokeDasharray={ratio > 0 ? '4 4' : ''} />
            <text x={padX - 7} y={y + 4} textAnchor="end" fill="#9CA3AF" fontSize="10">
              {ratio === 0 ? '0' : `${Math.round(ratio * maxVal / 1000)} K`}
            </text>
          </g>
        );
      })}
      {REVENUE_DATA.map((d, i) => {
        const slotX = padX + i * slotW + slotW / 2;
        const mH = (d.margin / maxVal) * drawH;
        const rH = (d.revenue / maxVal) * drawH;
        const isHl = hoveredIdx !== null ? hoveredIdx === i : d.date === '6 Jul';
        const mX = slotX - barW - barGap / 2;
        const rX = slotX + barGap / 2;
        const baseY = padY + drawH;
        return (
          <g key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{ cursor: 'pointer' }}>
            <rect x={slotX - slotW / 2} y={padY} width={slotW} height={drawH} fill="transparent" />
            <rect x={mX} y={baseY - mH} width={barW} height={mH}
              fill="#3B82F6" rx="3" opacity={isHl ? 1 : 0.72}
              className="chart-bar chart-bar-margin"
              style={{ ['--i' as string]: i, transformOrigin: `0 ${baseY}px`, transition: 'opacity 0.2s' }} />
            <rect x={rX} y={baseY - rH} width={barW} height={rH}
              fill="#F97316" rx="3" opacity={isHl ? 1 : 0.72}
              className="chart-bar chart-bar-revenue"
              style={{ ['--i' as string]: i, transformOrigin: `0 ${baseY}px`, transition: 'opacity 0.2s' }} />
            <text x={slotX} y={H - 6} textAnchor="middle"
              fill={isHl ? '#111827' : '#9CA3AF'}
              fontSize="10" fontWeight={isHl ? '700' : '400'}
              style={{ transition: 'all 0.2s' }}>
              {d.date}
            </text>
            {isHl && (
              <g style={{ animation: hoveredIdx !== null ? 'fadeIn 0.15s ease both' : 'fadeUp 0.5s ease 0.5s both', pointerEvents: 'none' }}>
                <rect x={slotX - 43} y={baseY - mH - 50} width="86" height="40"
                  rx="6" fill="white" filter="url(#tipShadow)" />
                <text x={slotX - 32} y={baseY - mH - 35} fill="#6B7280" fontSize="8" fontWeight="600">● Gross margin</text>
                <text x={slotX - 32} y={baseY - mH - 19} fill="#111827" fontSize="11" fontWeight="700">${d.margin.toLocaleString()}</text>
                <text x={slotX + 12} y={baseY - mH - 19} fill="#059669" fontSize="8" fontWeight="700">↑ 2.5%</text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};

// ─── V2 sub-components ────────────────────────────────────────────────────────

const AnalyticsChart: React.FC = () => {
  const W = 280, H = 110, pad = 16, barW = 24;
  const barGap = (W - pad * 2 - barW * ANALYTICS.length) / (ANALYTICS.length - 1);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {ANALYTICS.map((d, i) => {
        const x = pad + i * (barW + barGap);
        const bH = d.h * (H - 28);
        const y = H - 16 - bH;
        const isHighest = d.h === 0.74;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={bH} rx="6"
              fill={isHighest ? '#22C55E' : '#E5E7EB'}
              className={`analytics-bar${isHighest ? ' analytics-bar-highlight' : ''}`}
              style={{ ['--i' as string]: i }} />
            {isHighest && (
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fill="#111827" fontSize="9" fontWeight="700">74%</text>
            )}
            <text x={x + barW / 2} y={H - 2} textAnchor="middle" fill="#9CA3AF" fontSize="9">{d.day}</text>
          </g>
        );
      })}
    </svg>
  );
};

const DonutProgress: React.FC<{ pct: number }> = ({ pct }) => {
  const size = 140, stroke = 16;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E5E7EB" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#22C55E" strokeWidth={stroke}
        strokeDasharray={`${circ} ${circ}`} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} className="progress-ring" />
      <text x={size / 2} y={size / 2 + 5} textAnchor="middle" fill="#111827" fontSize="18" fontWeight="800">{pct}%</text>
      <text x={size / 2} y={size / 2 + 18} textAnchor="middle" fill="#9CA3AF" fontSize="8">Project Ended</text>
    </svg>
  );
};

const useTimer = () => {
  const [running, setRunning] = useState(true);
  const [seconds, setSeconds] = useState(5048);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return { time: `${h}:${m}:${s}`, running, toggle: () => setRunning(r => !r) };
};

// ─── V1 Overview ─────────────────────────────────────────────────────────────

const OverviewV1: React.FC = () => (
  <>
    <div className="kpi-row">
      <div className="kpi-card">
        <div className="kpi-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
          Total customers
        </div>
        <div className="kpi-value">567,899 <span className="kpi-trend up">↑ 2.5%</span></div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          Total revenue
        </div>
        <div className="kpi-value">$3,465 M <span className="kpi-trend up">↑ 0.5%</span></div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Total orders
        </div>
        <div className="kpi-value">1,136 M <span className="kpi-trend down">↓ 0.2%</span></div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
          Total returns
        </div>
        <div className="kpi-value">1,789 <span className="kpi-trend up">↑ 0.12%</span></div>
      </div>
      <button className="kpi-card-add">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span className="kpi-card-add-label">Add data</span>
      </button>
    </div>

    <div className="card">
      <div className="chart-header">
        <span className="chart-title">Product sales</span>
        <div className="chart-legend">
          <div className="legend-item"><div className="legend-dot" style={{ background: '#3B82F6' }} /> Gross margin</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: '#F97316' }} /> Revenue</div>
        </div>
      </div>
      <BarChart />
    </div>

    <div className="bottom-grid">
      <div className="card">
        <div className="chart-header">
          <span className="chart-title">Sales by product category</span>
        </div>
        <div className="donut-grid">
          <div className="donut-legend">
            {CATEGORIES.map((cat) => (
              <div className="donut-legend-item" key={cat.label}>
                <div className="donut-legend-dot" style={{ background: cat.color }} />
                {cat.label} – {cat.pct}%
              </div>
            ))}
          </div>
          <DonutChart />
        </div>
      </div>

      <div className="card">
        <div className="chart-header">
          <span className="chart-title">Sales by countries</span>
        </div>
        <div className="country-list">
          {COUNTRIES.map((c, i) => (
            <div className="country-row" key={c.name} style={{ ['--i' as string]: i }}>
              <div className="country-name">
                <div className="country-dot" style={{ background: c.active ? '#059669' : '#9CA3AF' }} />
                {c.name}
              </div>
              <div className="country-pct">{c.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

// ─── V2 Overview ─────────────────────────────────────────────────────────────

const OverviewV2: React.FC = () => {
  const { time, running, toggle } = useTimer();
  return (
    <div className="v2-grid">
      {/* stat cards */}
      <div className="v2-stats-row">
        {[
          { label: 'Total Projects',   value: '24', sub: 'Increased from last month', green: true },
          { label: 'Ended Projects',   value: '10', sub: 'Increased from last month', green: false },
          { label: 'Running Projects', value: '12', sub: 'Increased from last month', green: false },
          { label: 'Pending Projects', value:  '2', sub: 'On Discuss',               green: false, muted: true },
        ].map((s, i) => (
          <div key={i} className={`v2-stat-card${s.green ? ' v2-stat-card--green' : ''}`}>
            <div className="v2-stat-label">{s.label}</div>
            <div className="v2-stat-value">{s.value}</div>
            <div className={`v2-stat-sub${s.green ? ' v2-stat-sub--light' : s.muted ? ' v2-stat-sub--muted' : ''}`}>
              {!s.muted && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              )}
              {s.sub}
            </div>
            <button className="v2-stat-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </button>
          </div>
        ))}
      </div>

      {/* middle row */}
      <div className="v2-mid-row">
        <div className="v2-card v2-analytics-card">
          <div className="v2-card-header"><span className="v2-card-title">Project Analytics</span></div>
          <AnalyticsChart />
        </div>
        <div className="v2-card v2-reminder-card">
          <div className="v2-card-header"><span className="v2-card-title">Reminders</span></div>
          <div className="v2-reminder-body">
            <div className="v2-reminder-event">Meeting with Arc Company</div>
            <div className="v2-reminder-time">Time : 02:00 pm – 04:00 pm</div>
            <button className="v2-reminder-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              Start Meeting
            </button>
          </div>
        </div>
        <div className="v2-card v2-projects-card">
          <div className="v2-card-header">
            <span className="v2-card-title">Project</span>
            <button className="v2-new-btn">+ New</button>
          </div>
          <div className="v2-project-list">
            {PROJECTS.map((p, i) => (
              <div className="v2-project-item" key={i}>
                <div className="v2-project-dot" style={{ background: p.color }} />
                <div className="v2-project-info">
                  <div className="v2-project-name">{p.name}</div>
                  <div className="v2-project-due">Due date: {p.due}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="v2-bot-row">
        <div className="v2-card v2-team-card">
          <div className="v2-card-header">
            <span className="v2-card-title">Team Collaboration</span>
            <button className="v2-add-member-btn">+ Add Member</button>
          </div>
          <div className="v2-team-list">
            {TEAM.map((m, i) => (
              <div className="v2-team-row" key={i}>
                <img src={m.avatar} alt={m.name} className="v2-team-avatar" />
                <div className="v2-team-info">
                  <div className="v2-team-name">{m.name}</div>
                  <div className="v2-team-task">Working on <em>{m.task}</em></div>
                </div>
                <span className="v2-status-badge" style={{ color: STATUS_COLORS[m.status], background: STATUS_COLORS[m.status] + '18' }}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="v2-card v2-progress-card">
          <div className="v2-card-header"><span className="v2-card-title">Project Progress</span></div>
          <div className="v2-progress-body">
            <DonutProgress pct={41} />
            <div className="v2-progress-legend">
              <div className="v2-legend-item"><span className="v2-legend-dot" style={{ background: '#22C55E' }} />Completed</div>
              <div className="v2-legend-item"><span className="v2-legend-dot" style={{ background: '#F59E0B' }} />In Progress</div>
              <div className="v2-legend-item"><span className="v2-legend-dot v2-legend-dot--hatched" />Pending</div>
            </div>
          </div>
        </div>
        <div className="v2-card v2-timer-card">
          <div className="v2-card-header">
            <span className="v2-card-title v2-card-title--light">Time Tracker</span>
          </div>
          <div className="v2-timer-display">{time}</div>
          <div className="v2-timer-controls">
            <button className="v2-timer-btn v2-timer-btn--pause" onClick={toggle}>
              {running
                ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                : <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              }
            </button>
            <button className="v2-timer-btn v2-timer-btn--stop">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Unified Export ───────────────────────────────────────────────────────────
// The version guard happens here — at render time the dead branch is still
// included in the bundle (both versions compile together), but Vite's
// build-time constant folding + tree-shaking will eliminate the unused branch
// when building with --mode v1 or --mode v2.

import { IS_V2 } from '../app/VersionContext';

export const OverviewPage: React.FC = () =>
  IS_V2 ? <OverviewV2 /> : <OverviewV1 />;
