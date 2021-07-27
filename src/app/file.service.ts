import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

 

  getResume(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get("assets/Shivam_Nirhali_Resume.pdf", {responseType: 'blob'})
      .pipe(
        tap( // Log the result or error
          data => console.log(filename, data),  
        )
      );
  }
   
}