import { Component, inject, OnInit } from '@angular/core';
import { GutenbergService } from '../../services/gutenberg-service/gutenberg-service';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  imports: [MatCardModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent implements OnInit {

  //gutenbergServ = inject(GutenbergService);

  // constructor(){
  //   this.gutenbergServ.getBooks();  //chiamo la funzione getBooks() che stamperà i libri nella console (nella pagina list)
  // }

  //books: Book[] = [];

  //Copilot barra ricerca:  https://copilot.microsoft.com/shares/tU3g7GMKLF6tTSMzZKqYM
  constructor(
    public gutenbergServ: GutenbergService,
    private route: ActivatedRoute
  ) { }

 ngOnInit() { 
  this.route.queryParams.subscribe(params => { 
    const search = params['search'] ?? ''; 
    this.gutenbergServ.getBooks(search); 
  }); 
}
}
