import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public globalS: GlobalService) { }

  public title = {
    spanish:'Conocimientos, Habilidades y Destrezas',
    english:'Knowledge, Abilities and Skills'
  }
  public numberImg = 1;
  public subtitle = {
    spanish:'Desarrollador Front-end',
    english:'Front-end Developer'
  }
  ngOnInit(): void {
    this.incrementNumber()
  }

  incrementNumber(){
    const self = this;
    setTimeout(function(){
      if(self.numberImg === 5){
        self.numberImg = 1
      }else if(self.numberImg < 6){
        self.numberImg = self.numberImg + 1
      }
      self.incrementNumber();
    },5000)
  }

  public skills = [{
    name:{
      english:'JavaScript Programming',
      spanish:'Programación en JavaScript',
    },
    percentage:100,
    icon:'fab fa-js-square'
  },{
    name:{
      english:'AngularJS Skills',
      spanish:'Dominio de AngularJS',
    },
    percentage:95,
    icon:'fab fa-angular'
  },
  {
    name:{
      spanish:'Dominio de VueJS',
      english:'VueJS Skills',
    },
    percentage:90,
    icon:'fab fa-vuejs'
  },
  {
    name:{
      spanish:'Dominio de HTML3/CSS3',
      english:'HTML3/CSS3 Skills'
    },
    percentage:100,
    icon:'fab fa-html5'
  },
  {
    name:{
      spanish:'Preprocesadores como LESS y SASS',
      english:'Preprocessors like LESS / SCSS',
    },
    percentage:80,
    icon:'fab fa-css3-alt'
  },
  {
    name:{
      spanish:'Bootstrap, MaterialDesign, W3Css, FontAwesome',
      english:'Bootstrap, MaterialDesign, W3Css, FontAwesome',
    },
    percentage:100,
    icon:'fab fa-bootstrap'
  },
  {
    name:{
      spanish:'Highcharts, ChartJS',
      english:'Highcharts, ChartJS',
    },
    percentage:90,
    icon:'fas fa-chart-line'
  },
  {
    name:{
      spanish:'Uso de Azure DevOps, Repositorios',
      english:'Use of Azure DevOps, Repositories',
    },
    percentage:95,
    icon:'fab fa-git-alt'
  },
  {
    name:{
      spanish:'Versionamiento de Codigo con GIT',
      english:'Code versioning with GIT',
    },
    percentage:90,
    icon:'fab fa-git-alt'
  },
  {
    name:{
      spanish:'Metodologias Ágiles como SCRUM y Kanban',
      english:'Agile methodologies like SCRUM and Kanban',
    },
    percentage:85,
    icon:'fas fa-users'
  },
  {
    name:{
      spanish:'Consumo de APIs, Dominio de Axios para HTTP',
      english:'API Consumption, Axios Domain for HTTP',
    },
    percentage:95,
    icon:'fas fa-network-wired'
  },
  {
    name:{
      spanish:'MySQL, NodeJS, ExpressJS',
      english:'MySQL, NodeJS, ExpressJS',
    },
    percentage:45,
    icon:'fas fa-database'
  }
  ]
}
