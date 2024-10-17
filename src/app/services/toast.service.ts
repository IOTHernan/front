import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  observe<T>(
    { success, loading, error }: { success?: string, loading?: string, error?: string },
  ): (source: Observable<T>) => Observable<T> {
    return (source: Observable<T>) => {
      return source.pipe(
        tap({
          next: (value) => {
            if (success) {
              this.toastr.success(success);
            }
          },
          error: (error) => {
            if (error) {
              this.toastr.error(error);
            }
          }
        })
      );
    };
  }
}
