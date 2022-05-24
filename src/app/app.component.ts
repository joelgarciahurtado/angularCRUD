import { Component } from '@angular/core';

import { Evento } from './models/evento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventoArray: Evento[] = [
    { id: 1, titulo: "Enrique Morente en directo", lugar: "Palau Sant Jordi", fecha: "13-09-2023" },
    { id: 2, titulo: "Estopa", lugar: "Razzmatazz", fecha: "22-08-2022" },
    { id: 3, titulo: "Cecilio G", lugar: "Estadi Olímpic", fecha: "07-11-2022" }
  ];

  selectedEvento: Evento = new Evento();

  openForEdit(evento: Evento) {
    this.selectedEvento = evento;
  }

  addOrEdit() {
    if (this.selectedEvento.id === 0) {
      this.selectedEvento.id = this.eventoArray.length + 1;
      this.eventoArray.push(this.selectedEvento);
    }
    this.selectedEvento = new Evento();
  }

  delete() {
    if (confirm('Estás seguro que deseas eliminar el evento?')) {
      this.eventoArray = this.eventoArray.filter(x => x != this.selectedEvento);
      this.selectedEvento = new Evento();
    }
  }

}
