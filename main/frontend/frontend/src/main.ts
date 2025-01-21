import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomepageComponent } from './app/homepage/homepage.component';

bootstrapApplication(AppComponent,{
  ...appConfig,
    providers: [
      provideHttpClient(),
      HttpClientModule,
      ...(appConfig.providers || [])
    ]
}).catch((err) => console.error(err));
