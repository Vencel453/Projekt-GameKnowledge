import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import {Injectable, Inject, PLATFORM_ID, inject} from "@angular/core";
import { Authservice } from "./authservice";
import { Observable, tap } from "rxjs";
import { isPlatformBrowser } from "@angular/common";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: Authservice) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const platformid = inject(PLATFORM_ID);
        let token: string | null = null;

        if (isPlatformBrowser(platformid)){
            token = localStorage.getItem('token');
        }

        if(token){
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
        }

        return next.handle(req).pipe(
            tap(event => {
                if(event instanceof HttpResponse){
                    const newToken = event.headers.get('New-Token');
                    if(newToken){
                        localStorage.setItem('token', newToken);
                        this.authService.login(newToken, localStorage.getItem('username') || '', JSON.parse(localStorage.getItem('isAdmin') || 'false'));
                    }
                }
            })
        );
    }
}
