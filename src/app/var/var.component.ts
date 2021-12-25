import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent implements OnInit {

  a:number = 2;
  b: number = 3;
  fname:string = 'maheshsssss';
  age: number = 23;
  gender: boolean = true;
  interest: null  = null;
  fruits: string[] = ['kiwi', 'melon', 'berry'];
  user:any = {tech: 'angular', exp: '10'};
  undf:any;

  constructor() { }

  ngOnInit(): void {
  }

}
