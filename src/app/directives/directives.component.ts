import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'mahesh';
  age: number = 23;
  fruits: string[] = ['kiwi', 'melon', 'berry'];
  i:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  callMe(){
    console.log('im invoked' +this.i);
    this.i++;
  }

}
