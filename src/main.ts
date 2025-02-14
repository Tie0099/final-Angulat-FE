import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; 

const config = {
  ...appConfig,
  providers: [
    {
      provide: 'APP_ROUTES',
      useValue: routes,  // กำหนดให้ใช้ routing
    },
  ],
};
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
