import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import {Injectable, PLATFORM_ID, inject} from "@angular/core";
import { Authservice } from "./authservice";
import { catchError, Observable, tap, throwError } from "rxjs";
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
                    const authHeader = event.headers.get('Authorization');
                    if (authHeader && this.authService.isLoggedIn()) {
                    if(authHeader){
                        const newToken = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
                        console.log("Uj token:", newToken);
                       this.authService.login(
                        newToken,
                        localStorage.getItem('username') || '',
                        JSON.parse(localStorage.getItem('isAdmin') || 'false')
                       );
                    }
                }}
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.error && error.error.message === "The user is not logged in or the token is faulty!"){
                    this.authService.logout();
                }
                return throwError(error);
            })
        );
    }
}
