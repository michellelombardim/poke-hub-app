import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run battle-simulator:serve',
        production: 'npx nx run battle-simulator:serve-static',
      },
      ciWebServerCommand: 'npx nx run battle-simulator:serve-static',
      ciBaseUrl: 'http://localhost:4202',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
