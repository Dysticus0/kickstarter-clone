import { Component } from '@angular/core';
import { PerTe } from './perTe.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  perTeMock : PerTe[] = [];
  page! : number;

  constructor(){
        //Perte Mock
        this.perTeMock = [
          new PerTe('Titulo 1', './../../assets/ejemplo.png', '37%', ' Owner 1'),
          new PerTe('Titulo 2', './../../assets/ejemplo.png', '183%', ' Owner 2'),
          new PerTe('Titulo 3', './../../assets/ejemplo.png', '63%', ' Owner 3'),
          new PerTe('Titulo 4', './../../assets/ejemplo.png', '23%', ' Owner 4'),
          new PerTe('Titulo 5', './../../assets/ejemplo.png', '86%', ' Owner 5'),
          new PerTe('Titulo 6', './../../assets/ejemplo.png', '50%', ' Owner 6'),
          new PerTe('Titulo 7', './../../assets/ejemplo.png', '63%', ' Owner 7'),
          new PerTe('Titulo 8', './../../assets/ejemplo.png', '93%', ' Owner 8'),
          new PerTe('Titulo 9', './../../assets/ejemplo.png', '923%', ' Owner 9')
        ]
  }

}
