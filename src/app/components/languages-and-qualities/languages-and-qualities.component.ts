import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'languages-and-qualities',
  templateUrl: './languages-and-qualities.component.html',
  styleUrls: ['./languages-and-qualities.component.scss']
})
export class LanguagesAndQualitiesComponent implements OnInit {

  constructor(public globalS: GlobalService) { }

  public title = {
    spanish:'Cualidades Generales',
    english:'General Qualities'
  }
  public personal = {
    spanish:'Cualidades Personales',
    english:'Personal Qualities',
  }
  public language = {
    spanish:'Idiomas Hablados',
    english:'Spoken Languages',
  }
  public languages = [{
    title:{
      spanish:'Español',
      english:'Spanish',
    },
    type:{
      spanish:'Idioma nativo',
      english:'Native'
    },
    level:{
      spanish:'Completo',
      english:'Complete'
    },
    reading:{
      spanish:'Lectura',
      english:'Reading',
      value:100
    },
    listening:{
      spanish:'Auditivo',
      english:'Listening',
      value:100
    },
    written:{
      spanish:'Escrito',
      english:'Written',
      value:100
    },
    oral:{
      spanish:'Oral',
      english:'Oral',
      value:100
    }
  },{
    title:{
      spanish:'Inglés',
      english:'English',
    },
    type:{
      spanish:'2do. Idioma',
      english:'2nd. Lang.'
    },
    level:{
      spanish:'Avanzado',
      english:'Advanced'
    },
    reading:{
      spanish:'Lectura',
      english:'Reading',
      value:90
    },
    listening:{
      spanish:'Auditivo',
      english:'Listening',
      value:70
    },
    written:{
      spanish:'Escrito',
      english:'Written',
      value:90
    },
    oral:{
      spanish:'Oral',
      english:'Oral',
      value:80
    }
  }]
  public numberImg = 1;
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

  public personalQualities = [{
    text:{
      spanish:'Puntual y Responsable',
      english:'Punctual and Responsible',
    },
    icon: 'fas fa-user-clock'
  },{
    text:{
      english:'Excellent inter and intrapersonal relationships',
      spanish:'Excelentes relaciones inter e intrapersonales',
    },
    icon: 'fas fa-users'
  },{
    text:{
      spanish:'Facilidad de adaptación a cualquier entorno',
      english:'Ease of adaptation to any environment',
    },
    icon: 'fas fa-check'
  },{
    text:{
      spanish:'Disponibilidad inmediata para relocación a cualquier ubicación',
      english:'Immediate availability for relocation to any location',
    },
    icon: 'fas fa-street-view'
  }]

  public workQualities = [{
    text:{
      spanish:'Capacidad para trabajar bajo presión',
      english:'Capacity to work under pressure',
    },
    icon: 'fas fa-stopwatch'
  },{
    text:{
      spanish:'Adaptabilidad a horarios flexibles',
      english:'Adaptability to flexible schedules',
    },
    icon: 'fas fa-calendar'
  },{
    text:{
      spanish:'Habilidad para aprender programas rapidamente',
      english:'Ability to learn programs quickly',
    },
    icon: 'fas fa-user-check'
  },{
    text:{
      spanish:'Capacidad de trabajo en Equipo',
      english:'Capacity for teamwork',
    },
    icon: 'fas fa-people-carry'
  },{
    text:{
      spanish:'Sentido de pertenencia empresarial',
      english:'Business sense of belonging',
    },
    icon: 'fas fa-business-time'
  }]
}
