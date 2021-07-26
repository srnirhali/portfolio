import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor( private fileService: FileService) { }

  ngOnInit(): void {
  }
  download() {
    console.log('test')
    this.fileService.getTextFile("assets/Shivam_Nirhali_Resume.pdf").subscribe((response: any) => { 
			let blob:any = new Blob([response], { type: 'application/pdf' });
      fileSaver.saveAs(blob,'Shivam_Nirhali_Resume.pdf')
		}), (error: any) => console.log('Error downloading the file'), 
                 () => console.info('File downloaded successfully');
  }
}
