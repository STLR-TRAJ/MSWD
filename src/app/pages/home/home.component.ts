import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home">
      <h1>Welcome to JaB</h1>
      <p class="intro">
        Your one-stop solution for project management and collaboration.
      </p>
      <div class="features">
        <div class="feature-card">
          <h3>Easy Project Management</h3>
          <p>Create, track, and manage your projects with ease</p>
        </div>
        <div class="feature-card">
          <h3>Team Collaboration</h3>
          <p>Work together seamlessly with your team</p>
        </div>
        <div class="feature-card">
          <h3>Real-time Updates</h3>
          <p>Stay updated with real-time project progress</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro {
      font-size: 1.25rem;
      color: #666;
      margin: 1rem 0 3rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .feature-card {
      padding: 1.5rem;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: #333;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
