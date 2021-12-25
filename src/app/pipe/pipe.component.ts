import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  fname:string = 'MaHeSh PeRlA';
  date:any = new Date();
  num:number = 23;
  user: any = {tech: 'angular', exp: 10};
  constructor() { }

  ngOnInit(): void {
  }

}
