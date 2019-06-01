import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User management';
  showFiller = false;
  time = '';
  constructor(private datePipe: DatePipe) {
    setInterval(() => {
      this.time = this.datePipe.transform(new Date, "dd-MM-yyyy,h:mm:ss a");
    }, 1000);
  }


}
