import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navtoggle = new EventEmitter();
  @Output() pass = new EventEmitter<string>();

  mailnoti = 50;
  noti = 5;

  constructor() { }

  ngOnInit(): void {
  }

  OnclickSidenavtoggle()
  {
    this.navtoggle.emit();
    this.pass.emit("Wiriya");
  }

}
