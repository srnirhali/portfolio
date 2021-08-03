import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/file.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import { environment } from 'src/environments/environment';
import emailjs, { EmailJSResponseStatus,init } from 'emailjs-com';
init("user_vwoA2XUGg9qjC8Xh5N3k0");

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  env = environment
  profileForm = new FormGroup({email : new FormControl('', [
    Validators.required,
    Validators.email,
  ]), name : new FormControl(''), message : new FormControl('')})
  
  constructor(private fileService :FileService,public dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  get email() { return this.profileForm.get('email'); }

  onSubmit(){
    this.fileService.sendMessage(this.profileForm.value).subscribe((response: any) => { 
			console.log(response)
    }), (error: any) => console.log('Error downloading the file'), 
                 () => console.info('File downloaded successfully');
  
 
console.log(this.fileService.sendMessage(this.profileForm))
  }
  onSubmitform(){
    
    emailjs.send(this.env.userId,this.env.templateID , this.profileForm.value )
    .then((result: EmailJSResponseStatus) => {
      const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }, (error) => {
      console.log(error.text);
    });
  }
}
