import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import Swal from 'sweetalert2';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {

  constructor(public globalS: GlobalService) { }

  public jobTitle = {
    spanish:'Desarrollador Front-end',
    english:'Front-end Developer'
  }
  public PDFbutton = {
    spanish:'Descargar CV resumido en PDF',
    english:'Download Summary CV in PDF',
  }
  public letterbutton = {
    spanish:'Descargar Carta de Presentación',
    english:'Download Cover Letter',
  }
  public whatsappbutton = {
    spanish:'Enviar mensaje por WhatsApp',
    english:'Send WhatsApp message',
  }

  alertNoAvailable(){
    if(this.globalS.language === 'spanish'){
      Swal.fire(
        'Lo siento',
        'Funcionalidad no disponible por el momento',
        'info'
      )
    }else{
      Swal.fire(
        'Sorry',
        'Functionality not available at the moment',
        'info'
      )
    }
  }

  public navItems = [{
    text:{
      spanish:'Sobre mi',
      english:'About me'
    },
    link:'aboutme'
  },{
    text:{
      spanish:'Educación',
      english:'Education'
    },
    link:'academicinfo'
  },{
    text:{
      spanish:'Experiencia Profesional',
      english:'Professional Experience'
    },
    link:'workinfo'
  },{
    text:{
      spanish:'Cursos',
      english:'Courses'
    },
    link:'certifications'
  },{
    text:{
      spanish:'Membresias',
      english:'Memberships'
    },
    link:'certifications'
  },{
    text:{
      spanish:'Habilidades',
      english:'Skills'
    },
    link:'skills'
  },{
    text:{
      spanish:'Cualidades',
      english:'Qualities'
    },
    link:'qualities'
  },{
    text:{
      spanish:'Contacto',
      english:'Contact'
    },
    link:'contact'
  }]
  ngOnInit(): void {
  }

  changeLanguage(){
    if (this.globalS.language === 'spanish') {
      this.globalS.language = 'english'
    } else {
      this.globalS.language = 'spanish'
    }
  }
}
