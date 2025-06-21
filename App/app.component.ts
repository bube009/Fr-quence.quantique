import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importez IonicModule si non déjà importé

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // Marque ce composant comme standalone
  imports: [IonicModule], // Importez les modules nécessaires ici pour un composant standalone
})
export class AppComponent {
  constructor() {}
}
