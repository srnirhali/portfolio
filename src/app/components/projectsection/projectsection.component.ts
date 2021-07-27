import { Component, OnInit } from '@angular/core';
import { Projects } from '../../projects';
@Component({
  selector: 'app-projectsection',
  templateUrl: './projectsection.component.html',
  styleUrls: ['./projectsection.component.scss']
})
export class ProjectsectionComponent implements OnInit {
  projects= Projects;
  projectsarr: any[] = [];
  total = 1;
  start = 0;
  per=2
  end=this.per
  
  constructor() { }

  ngOnInit(): void {
    this.total = Math.ceil (this.projects.length/this.per);

    for (let index = 0; index < this.total; index++) {
      console.log('this.projectsarr')
      this.projectsarr[index] = this.projects.slice(this.start,this.end)
      this.start=this.end
      this.end = this.end + this.per
    }
    console.log(this.projectsarr)
  }

}
