import { Component } from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculum-gerald';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    new WOW().init();
  }


}
