import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/skills';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills= Skills;
  skillsarr: any[] = [];
  total = 1;
  start = 0;
  per=4
  end=this.per
  strss='60%'
  constructor() { }

  ngOnInit(): void {
    this.total = Math.ceil (this.skills.length/this.per);

   

    for (let index = 0; index < this.total; index++) {
      
      this.skillsarr[index] = this.skills.slice(this.start,this.end)
      this.start=this.end
      this.end = this.end + this.per
    }
    
  }

}
