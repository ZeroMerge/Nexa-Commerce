// ─── Version Context ────────────────────────────────────────────────────────
// Single source of truth for the build version.
// VITE_APP_VERSION is injected at build time via the .env.v1 / .env.v2 files
// and the --mode flag passed to Vite.  Nothing else in the codebase should
// read import.meta.env directly.

import React, { createContext, useContext } from 'react';

export type AppVersion = 'v1.4' | 'v2.0';

const raw = import.meta.env.VITE_APP_VERSION as string | undefined;

// Graceful fallback so `npm run dev` (no mode) still works.
export const APP_VERSION: AppVersion =
  raw === 'v2.0' ? 'v2.0' : 'v1.4';

export const IS_V2 = APP_VERSION === 'v2.0';

// ── Context (optional – lets deeply-nested components read the version) ──────
const VersionContext = createContext<AppVersion>(APP_VERSION);

export const VersionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <VersionContext.Provider value={APP_VERSION}>{children}</VersionContext.Provider>
);

export const useVersion = (): AppVersion => useContext(VersionContext);
