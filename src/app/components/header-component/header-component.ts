import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from "@angular/router";
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    RouterLink, 
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconButton
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})

export class HeaderComponent {

 searchTerm = ''; 

 constructor(private router: Router) {} 

 onSearch() { 
 const term = this.searchTerm.trim(); 
 if (!term) return; 
 this.router.navigate(['/list'], { 
  queryParams: { search: term },
  });
 }

}
