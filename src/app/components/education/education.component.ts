import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public globalS: GlobalService) { }
  public numberImg = 1;
  ngOnInit(): void {
    this.incrementNumber()
  }
  
  public experiences = [
    {
      icon:'fas fa-graduation-cap',
      title:{
        spanish:'Ingeniero en Computación',
        english:'Computer Engineer'
      },
      school:{
        spanish:'Universidad Valle del Momboy',
        english:'Universidad Valle del Momboy'
      },
      place:{
        spanish:'San Rafael de Carvajal, Trujillo, Venezuela',
        english:'San Rafael de Carvajal, Trujillo, Venezuela',
      },
      culmination:{
        spanish:'Noviembre 2019',
        english:'November 2019'
      },
      credential:{
        spanish:'Titulo equivalente a Bachelor of Science in Computer Science en Estados Unidos. Credencial emitida por International Education Evaluations Inc. disponible aqui',
        english:'Degree equivalent to Bachelor of Science in Computer Science in the United States. Credential issued by International Education Evaluations Inc. available here'
      },
      additional:{
        spanish:'Reconocimiento por el promedio de notas mas alto de la promoción de Ingenieros',
        english:'Recognition for the highest GPA in the Engineers Class'
      },
      thesis:{
        spanish:'Proyecto de Investigación sólido disponible aqui',
        english:'Solid research project available here',
        url:'http://geraldalarcon.com.ve/SistemaAcademico.pdf'
      }
    },
    {
      icon:'fas fa-school',
      title:{
        spanish:'Bachiller en Ciencias',
        english:'High School Diploma'
      },
      school:{
        spanish:'Colegio Privado "República de Venezuela"',
        english:'Colegio Privado "República de Venezuela"'
      },
      place:{
        spanish:'Valera, Trujillo, Venezuela',
        english:'Valera, Trujillo, Venezuela',
      },
      culmination:{
        spanish:'Julio 2016',
        english:'Julio 2016'
      },
      credential:{
        spanish:'Educación Secundaria',
        english:'Educación Secundaria'
      }
    }
  ]
  public title = {
    spanish:'Información Academica',
    english:'Academic Information'
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
