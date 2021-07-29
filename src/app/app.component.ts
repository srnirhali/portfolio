import { Component  } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Projects } from './projects';
import { Educations } from './education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  projects= Projects;
  showFiller = false;
  educations =Educations;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,  ){
    this.matIconRegistry.addSvgIcon(
      'insta',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/insta.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'school',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/school.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'project',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/project.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'coding',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/coding.svg')
    );
  }
  
  

}
