import { defineConfig } from 'cypress';

export default defineConfig({ // ✅ ES Modules `export default`
  e2e: {
    baseUrl: 'http://localhost:5173/',
  },
});