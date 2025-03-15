//Szükséges importok
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";


//Notfound HTTP Interceptor amely bizonyos hibák esetén egy egyedi oldalra navigál
export const notFoundInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);  //Router injektálása az útvonal választáshoz
    
    //Hibák mely esetén navigálni kell
    return next(req).pipe(
        catchError((error) => {
            if (error.status === 404) {
                router.navigate(['/notfound']);
            }else if (error.status === 401){
                router.navigate(['/notauthorizated']);
            }
            return throwError(() => error);
        })
    );
};