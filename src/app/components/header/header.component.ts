import { Component, OnInit } from '@angular/core';
import {FileService} from 'src/app/file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }
  download() {
    
    this.fileService.getResume("assets/Shivam_Nirhali_Resume.pdf").subscribe((response: any) => { 
			let blob:any = new Blob([response], { type: 'application/pdf' });
      fileSaver.saveAs(blob,'Shivam_Nirhali_Resume.pdf')
		}), (error: any) => console.log('Error downloading the file'), 
                 () => console.info('File downloaded successfully');
  }
}
