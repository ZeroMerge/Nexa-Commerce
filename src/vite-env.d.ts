/// <reference types="vite/client" />

// Typed declarations for all custom Vite env variables used in this project.
// Any new VITE_* variable should be declared here to get full TypeScript support.

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Permit lucide-react (ships its own types in newer versions but older installs may need this)
declare module 'lucide-react';
