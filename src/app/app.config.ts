import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { routes } from './app.routes';
import { MatMenuModule} from '@angular/material/menu';
import { provideHttpClient } from '@angular/common/http';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    MatSidenavModule,
    MatMenuModule,
  ]
};

ModuleRegistry.registerModules([AllCommunityModule]);
