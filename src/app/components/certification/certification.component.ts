import {GlobalService} from '../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  constructor(public globalS: GlobalService) { }

  public titleCourses = {
    spanish:'Cursos y Capacitaciones Realizadas',
    english:'Courses and Trainings'
  }
  public titleMemberships = {
    spanish:'Membresías y Afiliaciones',
    english:'Memberships, Societies and Affiliations'
  }
  public courses = [{
    name:{
      spanish: 'Computación Básica y Avanzada',
      english: 'Computer Science I and II',
    },
    time:{
      spanish: '2 años',
      english: '2 years'
    },
    place:{
      spanish:'CBILAB Valera',
      english:'CBILAB Valera'
    },
    cover:{
      spanish:'Conocimientos de Informática, Herramientas de Microsoft, Programación Básica y Diseño',
      english:'Knowledge of Informatics, Microsoft Tools, Basic Programming and Design',
    },
  },{
    name:{
      spanish: 'Diplomado de Emprendedores',
      english: 'Entrepreneurship Certification',
    },
    time:{
      spanish: '3 semanas',
      english: '3 weeks'
    },
    place:{
      spanish:'Univ. Valle del Momboy',
      english:'Univ. Valle del Momboy'
    },
    cover:{
      spanish:'Contenidos de visión y objetivos empresariales, perseverancia y desarrollo de planes o modelos de negocio',
      english:'Knowledge about business vision and objectives, perseverance and development of business models or plans',
    },
  },{
    name:{
      spanish: 'Diplomado de Marketing Digital',
      english: 'Digital Marketing Certification',
    },
    time:{
      spanish: '3 semanas',
      english: '3 weeks'
    },
    place:{
      spanish:'Univ. Valle del Momboy',
      english:'Univ. Valle del Momboy'
    },
    cover:{
      spanish:'Como crear campañas publicitarias exitosas, redes sociales, uso de plataformas publicitarias, Ads, entre otros',
      english:'Content about successful advertising campaigns, social networks, use of advertising technology tools, Ads, among others',
    },
  }]

  public memberships = [{
    name:{
      spanish:'Sociedad Chilena de la Ciencia de Computación',
      english:'Chilean Society of Computer Science',
    },
    web:'http://sccc.cl',
    year:2020,
    place:'Santiago de Chile',
    cover:{
      spanish:'Sociedad dedicada a promover la investigación y el desarrollo científico dentro de Chile',
      english:'Society for the stimulus of scientific research and development in Chile'
    }
  },{
    name:{
      spanish:'New York Technology Alliance',
      english:'New York Technology Alliance',
    },
    web:'http://nytech.org',
    year:2020,
    place:'New York',
    cover:{
      spanish:'Destaca por promover la comunidad tecnologica y el ecosistema creando un mejor futuro para todos',
      english:'It stands out for promoting the technological community and the ecosystem creating a better future for all'
    }
  },{
    name:{
      spanish:'Association of Computing Machinery',
      english:'Association of Computing Machinery',
    },
    web:'http://acm.org',
    year:2020,
    place:'New York',
    cover:{
      spanish:'Siendo la sociedad informática mas grande del mundo, promueve el diálogo, comparte recursos y aborda los desafíos del rubro',
      english:'Being the largest information society in the world, it promotes dialogue, shares resources and addresses the challenges of the field'
    }
  },{
    name:{
      spanish:'Sociedad Argentina de Informática',
      english:'Argentine Society of Informatics',
    },
    web:'http://sadio.org.ar',
    year:2020,
    place:'Buenos Aires',
    cover:{
      spanish:'Promueve la colaboración y divulgación del conocimiento de las ciencias informáticas en Latinoamérica',
      english:'Promote the collaboration and dissemination of knowledge of computer science in Latin America'
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

}
