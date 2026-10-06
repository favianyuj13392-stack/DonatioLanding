import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://donatio.darkosync.com',
  integrations: [react()],
});
