import { Injectable, signal } from '@angular/core';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root',
})

export class GutenbergService {
  
  private readonly booksUrl = 'https://gutendex.com/books/';

  books = signal<Book[]>([]);

  //Il costruttore è un metodo speciale che viene chiamato quando viene creata un'istanza della classe. 
  //In questo caso, il costruttore chiama la funzione getBooks() per ottenere i dati dei libri non appena il servizio viene istanziato (ad esempio, quando un componente lo utilizza). 
  //Ciò significa che quando un componente utilizza questo servizio, i dati dei libri saranno già disponibili e aggiornati.
  constructor(){      
    this.getBooks();   // caricamento iniziale senza filtro
  }

  // getBooks(){
  //   fetch(this.booksUrl)  //il fetch è una funzione che permette di fare richieste HTTP, in questo caso una GET alla URL specificata
  //   .then(resp => resp.json())  //trasforma la risposta in formato JSON
  //   //.then(result => console.log(result)) //La risposta viene convertita in formato JSON e poi stampata nella console.
  //   .then(result => this.books.set(result.results));  //La risposta viene convertita in formato JSON e poi viene usata per aggiornare il segnale books con i dati ottenuti. In questo modo, ogni componente che utilizza il segnale books sarà automaticamente aggiornato con i nuovi dati.
  //   //.set(result.results) è un metodo che aggiorna il valore del segnale books con i dati ottenuti dalla risposta JSON. In questo caso, result.results contiene l'array di libri restituito dall'API di Gutenberg.
  // }
   getBooks(search?: string) { 
    const url = search && search.trim() 
    ? `${this.booksUrl}?search=${encodeURIComponent(search)}` 
    : this.booksUrl;

    fetch(url) 
    .then(resp => resp.json()) 
    .then(result => this.books.set(result.results ?? [])) 
    .catch(err => { console.error('Errore nel caricamento libri', err); 
    this.books.set([]); 
  }); }
}


//Copilot:  https://copilot.microsoft.com/chats/H75N58a9RdBCV3WK1LoS5