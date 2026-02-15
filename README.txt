1. Creo un progetto Angular con il commando:  ng new nome-progetto --directory ./
  - Ho scelto Sass (SCSS) come stile
  - Poi ho scritto "no" all'opzione "Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?"
  - Poi ho scelto "None" all'opzione "Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai"

2. Ho installato Angular Material con il commando:  ng add @angular/material
   (https://material.angular.dev/guide/getting-started)
   - Ho scritto "yes"
   - Poi ho scelto il tema "Azure/Blue"

3. Ho creato un componente header dentro la cartella components, poi abbiamo rinominato il selector, su header-component.ts,
da "app-header-component" a solo "app-header"

4. Ho preso un componente da Angular material, un toolbar (Basic Toolbar)
https://material.angular.dev/components/toolbar/overview

5. Su header-component.html, ho incollato il codice del toolbar di Angular material (e ho eliminato le classi e i label che non mi servivano).
Poi, sono andato su header-component.ts e su imports di @components, ho inserito MatToolbarModule, MatIconModule e MatButtonModule affinchè non mi dia errore.

6. Su header-components.scss, ho incollato la proprietà basica che ci da l'esempio Basic toolbar.

7. Su app.html, ho eliminato tutto tranne <router-outlet />. Sucessivamente ho aggiunto  il selector di header-component (<app-header></app-header>).
   ATTENZIONE:  Su app.ts deve essere importato HeaderComponent. Normalmente Visual Code lo fa in automatico ma non sempre è il caso. 
   import { HeaderComponent } from "./components/header-component/header-component"; 

8. ng g c /components/HomeComponent e ng g c /components/ListComponent per creare i componenti Home e List.

9. Su home-component.ts e list-component.ts, abbiamo inserito (rinominato) "selector: 'app-home'" e "selector: 'app-list'" rispettivamente.

10. Su app.routes.ts, ho inserito le rotte per per Home e List.

11. ng g s /services/gutenberg-service/GutenbergService per creare un servizio che prenda i libri dall'API https://gutendex.com/books/.

12. Su gutenberg-service.ts, ho incollato l'url dell'API dentro la classe GutenbergService. 

13. Poi ho creato un metodo getBooks() e ho fatto una fetch all'API cioè una richiesta per prendere i dati.

14. Su list-component.ts, ho iniettato il servizio GutenbergService e ho creato un costruttore per chiamare il metodo getBooks() e stampare i risultati nella console.
(FARE IL CONSOLE.LOG è OPZIONALE)

15. Ho convertito i dati JSON dell'API in un'interfaccia TypeScript e l'ho incollato su book.ts (che ho creato manualmente dentro la cartella model).
    Ho rinominato l'interfaccia da Result a Book.
    (Per convertire i dati JSON dell'API in un'interfaccia TypeScript, basta copiare il JSON e incollarlo su questo sito: 
    https://transform.tools/json-to-typescript)

16. Su gutenberg-service.ts, ho creato la variabile books di tipo Book[] e ho modificato il metodo getBooks() per assegnare i risultati dell'API a questa variabile.
    Poi ho creato un construttore per chiamare il metodo getBooks() quando il servizio viene istanziato cioè quando viene creato o usato per la prima volta.
    Istanziare un servizio significa creare un'istanza di quella classe, cioè un oggetto che rappresenta quel servizio. In Angular, i servizi vengono istanziati quando vengono iniettati in un componente o in un altro servizio. 
    Quindi, quando usi il servizio GutenbergService in un componente (ad esempio, ListComponent), Angular crea un'istanza di GutenbergService e chiama il suo costruttore.
    Di conseguenza, su list-component.ts, ho commentato la chiamata al metodo getBooks(). Non ne ho più bisogno.

17. Su list-component.html, ho creato una card per ogni carta di Yu-Gi-Oh! usando @for per iterare sulla variabile cards del servizio. 
  Ho usato i dati delle carte (ad esempio name, type, desc) per popolare le card. Poi ho incollaro il codice del card component di Angular material per stilizzare le card.
  https://material.angular.dev/components/card/overview

ATTENZIONE!: Su list-component.ts, ho aggiunto a imports di @components MatCardModule per far funzionare le card di Angular material.

18. Di nuovo su list-component.html, ho aggiunto un'immagine per ogni carta usando il tag <img> e ho usato l'url dell'immagine fornito dall'API (card.card_images[0].image_url) per mostrare l'immagine della carta.
    Poi ho stilizzato l'immagine usando CSS per farla adattare alla card.