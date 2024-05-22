import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent {
  data = [
    { nombre: 'Nombre01', descripcion: 'Descripción 1', edad: 25 },
    { nombre: 'Nombre02', descripcion: 'Descripción 2', edad: 30 },
    { nombre: 'Nombre03', descripcion: 'Descripción 3', edad: 35 }
  ];

  updateDescription(item: any, event: Event) {
    const keyboardEvent = event as KeyboardEvent; 
    if (keyboardEvent.key === 'Enter') {
      keyboardEvent.preventDefault();
      console.log(item.descripcion);
      (keyboardEvent.target as HTMLElement).blur();
    }
  }
}
