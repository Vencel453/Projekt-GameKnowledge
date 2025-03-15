//Szükséges importok
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Bootstrap elemek működőképességét teszik lehetővé
bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
