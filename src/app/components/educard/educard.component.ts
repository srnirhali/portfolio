import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-educard',
  templateUrl: './educard.component.html',
  styleUrls: ['./educard.component.scss']
})
export class EducardComponent implements OnInit {
  @Input()
  edu: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
