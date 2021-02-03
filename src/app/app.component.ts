import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingmobile';

  name = 'wiriya';

  position = ['Admin', 'HR', 'IT'];

  passalert(message: any){
    console.log(message);
  }
}
