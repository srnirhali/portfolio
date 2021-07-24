import { Component, OnInit , Input} from '@angular/core';

import { Projects } from 'src/app/projects';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  pro: any; 
  constructor() { }

  ngOnInit(): void {
  console.log(this.pro)
  }

}
