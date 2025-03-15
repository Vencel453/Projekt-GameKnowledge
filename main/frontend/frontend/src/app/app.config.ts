// Angular konfigurációs importok és egyéb szükséges HTTP interceptorok hozzáadása
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptor';
import { notFoundInterceptor } from '../interceptor.notfound';

// Fő konfigurációs objektum
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),  //Teljesítmény optimalizálás
    provideRouter(routes),  //Útvonalak biztosítása
    provideClientHydration(), //Gyorsabb SSR 
    provideHttpClient(withInterceptors([notFoundInterceptor])), //HTTP kliens biztosítása interceptorokkal
    provideHttpClient(withInterceptorsFromDi()),  //HTTP kliens biztosítása Dependency Injection alapú interceptorokkal
    provideAnimations(), //Animációk támogatása
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} //AuthInterceptor hozzáadása hogy kezelje az autentikációs fejléceket
  ],
};
