import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public globalS: GlobalService) { }

  public title = {
    spanish:'¿Mas información?',
    english:'More information?'
  }
  ngOnInit(): void {
  }

}
