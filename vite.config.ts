import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// The --mode flag selects .env.v1 or .env.v2 at build time.
// e.g.  npx vite build --mode v1   →  loads .env.v1
//        npx vite build --mode v2   →  loads .env.v2
export default defineConfig({
  plugins: [react()],
  envDir: '.',      // resolve .env.* from project root
  build: {
    // outDir stays as dist so Docker COPY --from=builder /app/dist works unchanged.
    outDir: 'dist',
  },
});
