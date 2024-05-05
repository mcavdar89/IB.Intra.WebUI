import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { finalize } from 'rxjs';
import { AppService } from '../services/app.service';
import { LoaderService } from '../services/loader.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loadingInterceptor', req);
  debugger;

  let loader= inject(LoaderService);
  loader.showLoader();
  return next(req).pipe(
    finalize(() => {
      loader.hideLoader();
    })
  );
};
