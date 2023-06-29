import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private dialog: MatDialog) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.router.navigateByUrl('/login');
            this.openErrorDialog(error.message);
            break;
          default:
            this.openErrorDialog(error.message);
            break;
        }
        return EMPTY;
      })
    );
  }

  private openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: {
        errorMessage: errorMessage,
      },
    });
  }
}
