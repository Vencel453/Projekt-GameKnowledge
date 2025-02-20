import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string | null = null;

        if(isPlatformBrowser(this.platformId)){
            token = localStorage.getItem('token');
        }

        if (token) {
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
        }
        return next.handle(req);
    }
}
