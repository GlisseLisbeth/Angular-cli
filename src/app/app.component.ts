import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sintonía';
  arrPoema = [
    {persona:'escritor', texto: 'Sincero el paisaje'},
    {persona:'escritor', texto: 'sin fotografías'},
    {persona:'escritor', texto: 'sin planear el viaje'},
    {persona:'escritor', texto: 'sin contar los días'},
    {persona:'escritor', texto: 'sintiendo la brisa'},
    {persona: 'escritor', texto: 'sin ninguna prisa'}
    ]
}
