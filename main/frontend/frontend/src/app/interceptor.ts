import { Injectable, Inject, PLATFORM_ID, inject } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHandlerFn, HttpInterceptorFn } from "@angular/common/http";
import { Observable } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

export const interceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const platformid = inject(PLATFORM_ID);
    let token: string | null = null;

    if (isPlatformBrowser(platformid)) {
        token = localStorage.getItem('token');
    }

    if (token) {
        req = req.clone({
            setHeaders: {Authorization: `Bearer ${token}`}
        });
    }

    return next(req);
}
