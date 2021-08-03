import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import emailjs, { EmailJSResponseStatus,init } from 'emailjs-com';
init("user_vwoA2XUGg9qjC8Xh5N3k0");
@Injectable({ providedIn: 'root' })
export  class FileService {
  env = environment
  constructor(private http: HttpClient,) {}

 

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

  sendMessage(form: any){
    console.log(form.value)
    return this.http.post(environment.basApiUrl+'sendmail', form)
    .pipe(
      tap( // Log the result or error
        data => console.log(form, data),  
      )
    );
  }

  sendMessageEmailjs(form:any) {
    var isSucess = false;
     emailjs.send(this.env.userId,this.env.templateID , form )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        isSucess= true
      }, (error) => {
        console.log(error.text);
      });
    }
   
}