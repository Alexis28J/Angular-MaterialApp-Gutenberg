import { Component, inject } from '@angular/core';
import { GutenbergService } from '../../services/gutenberg-service/gutenberg-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  imports: [MatCardModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {

  gutenbergServ = inject(GutenbergService);

  // constructor(){
  //   this.gutenbergServ.getBooks();  //chiamo la funzione getBooks() che stamperà i libri nella console (nella pagina list)
  // }
}
