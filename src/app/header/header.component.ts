import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input("media_query") mobileQueryMax: boolean;

  @Output() navtoggle = new EventEmitter();
  @Output() pass = new EventEmitter<string>();

  mailnoti = 50;
  noti = 5;

  constructor() { 
    this.mobileQueryMax = true;
  }

  ngOnInit(): void {
  }

  OnclickSidenavtoggle()
  {
    this.navtoggle.emit();
    this.pass.emit("Wiriya");
  }

}
