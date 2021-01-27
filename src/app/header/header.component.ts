import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mailnoti = 50;
  noti = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
