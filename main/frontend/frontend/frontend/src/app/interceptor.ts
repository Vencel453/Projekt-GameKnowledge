import { HttpInterceptorFn } from "@angular/common/http";

export const Interceptor: HttpInterceptorFn = (req, next) => {

        const token = localStorage.getItem('token');
        if (token){
            const clonedrequest = req.clone({
                setHeaders: { Authorization: `Bearer ${token}`}
            });

            return next(clonedrequest);
        } else {
            console.warn("Nincs token mentve");
        }
        return next(req);
};