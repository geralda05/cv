import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import * as moment from 'moment';
@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public globalS: GlobalService) { }
  public title = {
    spanish:'Experiencia Laboral',
    english:'Work Experience'
  }
  public experiences = [
    {
      title:{
        spanish:'Ingeniero de Software',
        english:'Software Engineer'
      },
      company:{
        spanish:'Tecnoandina SPA',
        english:'Tecnoandina SPA',
        web:'https://tecnoandina.cl'
      },
      start:{
        spanish: 'Julio 2019',
        english: 'July 2019'
      },
      dateStart: moment.utc('07-01-2019'),
      dateEnd: null,
      description:{
        spanish: 'Programación de funcionalidades en AngularJS para aplicaciones web para monitoreo en tiempo real de datos de una REST API, maquetación de gráficos y componentes usados con fines estadísticos. Conocimientos obtenidos: JavaScript, AngularJS, HTML, CSS, SASS, Node.js, Express.js, Bootstrap, Highcharts, ChartJS, Consumo de REST API, Axios, GIT, Uso de Azure DevOps, Kanban',
        english: 'Programming of functionalities in AngularJS for web applications for real-time monitoring of data from a REST API, graphics layout and components used for statistical purposes. Knowledge obtained: JavaScript, AngularJS, HTML, CSS, SASS, Node.js, Express.js, Bootstrap, Highcharts, ChartJS, Consumption of REST API, Axios, GIT, Use of Azure DevOps, Kanban',
      },
      time: ['07-01-2019', ''],
      place:{
        spanish:'Las Condes, Region Metropolitana, Chile',
        english:'Las Condes, Metropolitan Region, Chile'
      }
    },
    {
      title:{
        spanish:'Desarrollador Web Front-end',
        english:'Front-end Web Developer'
      },
      company:{
        spanish:'C.A. de Ingeniería al Servicio Tecnosocial',
        english:'C.A. ISERT',
        web:'http://caisert.com.ve',
      },
      start:{
        spanish: 'Mayo 2018',
        english: 'May 2018'
      },
      dateStart: moment.utc('05-01-2018'),
      dateEnd: moment.utc('08-01-2019'),
      description:{
        spanish: 'Responsable de diseñar y programar funcionalidad de sistemas automatizados y aplicaciones destinados al uso de corporaciones y usuarios en general utilizando metodología SCRUM. Desarrollo front-end de tienda virtual básica, landing page animada y sistema robusto basado en Docker para gestión de horas e información médica de una aseguradora. Conocimientos obtenidos: JavaScript, Vue.js, HTML, CSS, LESS, Node.js, Express.js, Bootstrap, WordPress Básico, Consumo de REST API, Axios, W3CSS, Material Design',
        english: 'Responsible for designing and programming functionality of automated systems and applications intended for use by corporations and users in general using SCRUM methodology. Front-end development of a basic virtual store, an animated landing page and a robust Docker-based system for managing hours and medical information for an insurer. Knowledge obtained: JavaScript, Vue.js, HTML, CSS, LESS, Node.js, Express.js, Bootstrap, WordPress Basic, Consumption of REST API, Axios, W3CSS, Material Design',
      },
      time: ['05-01-2018', '08-01-2019'],
      place:{
        spanish:'Valera, Trujillo, Venezuela',
        english:'Valera, Trujillo Venezuela'
      }
    }
  ]

  takeLanguage(){
    if(this.globalS.language === 'spanish'){
      return 'es'
    }else{
      return 'en'
    }
  }

  formatDate(startDate, endDate = ''){
    let end = moment.utc(endDate);
    if(endDate == ''){
      end = moment()
    }
    const start = moment.utc(startDate)
    let label = 'año';
    let labelMeses = 'mes'
    let secondLabel = 'es'
    if(this.globalS.language === 'english'){
      label = 'year'
      labelMeses = 'month'
      secondLabel = 's'
    }
    if(end.diff(start, 'years') < 1){
      let info = end.diff(start, 'months')+' '+label;
      if(end.diff(start, 'months') > 1){
        return info+secondLabel
      }else{
        return info
      }
    }else{
      let info = end.diff(start, 'years')+' '+label;
      if(end.diff(start, 'years') > 1){
        return info+'s'
      }else{
        const prefix = ( end.diff(start, 'months') - (end.diff(start, 'years') * 12));
        if(prefix == 0){
          return info
        }else{
          if(prefix === 1){
            return info+', '+prefix+' '+labelMeses
          }else{
            return info+', '+prefix+' '+labelMeses+secondLabel
          }

        }

      }
    }
  }

  public numberImg = 3;
  ngOnInit(): void {
    this.incrementNumber()
  }

  incrementNumber(){
    const self = this;
    setTimeout(function(){
      if(self.numberImg === 4){
        self.numberImg = 1
      }else if(self.numberImg < 5){
        self.numberImg = self.numberImg + 1
      }
      self.incrementNumber();
    },5000)
  }

}
