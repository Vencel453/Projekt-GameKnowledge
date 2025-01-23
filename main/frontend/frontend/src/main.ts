import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  ...appConfig,
    providers: [
      provideHttpClient(withFetch()),
      HttpClientModule,
      ...(appConfig.providers || [])
    ]
}).catch((err) => console.error(err));
