import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  mobileQuerMax: MediaQueryList;
  
  private _mobileQueryListener:()=>void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    )
  {
    this._mobileQueryListener=()=>changeDetectorRef.detectChanges();
    this.mobileQuerMax = media.matchMedia('(max-width:600px)');
    this.mobileQuerMax.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuerMax.removeListener(this._mobileQueryListener);
  }

  passalert(message: any){
    console.log(message);
  }
}
