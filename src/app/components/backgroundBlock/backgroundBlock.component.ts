import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backgroundBlock',
  templateUrl: './backgroundBlock.component.html',
  styleUrls: ['./backgroundBlock.component.css']
})
export class BackgroundBlockComponent implements OnInit {

  @Input() blocks: any;

  constructor() { }

  ngOnInit() {
  }

}
