import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  templateUrl: './skillcard.component.html',
  styleUrls: ['./skillcard.component.scss']
})
export class SkillcardComponent implements OnInit {
  @Input()
  skill:any
  constructor() { }

  ngOnInit(): void {
  console.log(this.skill)
  }


}
