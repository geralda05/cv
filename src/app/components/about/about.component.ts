import {GlobalService} from '../../services/global.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'about-info',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(public globalS: GlobalService) { }
  public title = {
    spanish:'Sobre mí',
    english:'About me'
  }
  public description = {
    spanish:'Soy desarrollador de software con '+moment.utc().diff(moment.utc('09-14-2017'), 'years')+' años de experiencia especificamente en Desarrollo Front-end, profesional en constante aprendizaje, me encanta traducir diseños dentro de lenguajes de programación, resolver problemas y optimizar procesos por medio de aplicaciones web hechas dentro de las buenas prácticas para un código limpio. Emprendedor, dinámico y visionario de grandes metas y proyectos. Titulado como Ingeniero en Computación con tan solo 19 años y siendo el promedio de notas más alto de la promoción. Joven, pero responsable, proyectado y con sentido de pertenencia hacia todas las organizaciones a las que he pertenecido.',
    english:'I am a software developer with '+ moment.utc().diff(moment.utc('09-14-2017'), 'years') +' years of experience specifically in Front-end Development, a professional in constant learning, I loves translating designs into programming languages, solve problems and optimize processes ​​through web applications made within good practices for clean code. Entrepreneur, dynamic and visionary of big goals and projects. Graduated as a Computer Engineer with only 19 years old and being the highest grade point average in the class. Young, but responsible, projected and with a sense of belonging to all the organizations to which I have belonged.',
  }
  public agePrefix = {
    spanish:'años',
    english:'years old'
  }
  public age = 0;
  ngOnInit(): void {
    this.age = moment.utc().diff(moment.utc('02-21-2000'), 'years')
  }

}
