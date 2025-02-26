import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="logo">
        <h2>JaB</h2>
      </div>
      <nav class="nav-menu">
        <ul>
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f8f9fa;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .nav-menu ul {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    
    .nav-menu a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    
    .nav-menu a:hover {
      color: #007bff;
    }
    
    .active {
      color: #007bff !important;
      font-weight: 600;
    }
  `]
})
export class HeaderComponent {} 