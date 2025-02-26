import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <h2>About JaB</h2>
      <div class="content">
        <p class="intro">
          JaB is a modern project management solution designed to help teams 
          collaborate effectively and deliver projects successfully.
        </p>
        
        <div class="mission">
          <h3>Our Mission</h3>
          <p>
            To provide teams with the tools they need to work together seamlessly
            and achieve their project goals efficiently.
          </p>
        </div>

        <div class="team">
          <h3>Our Team</h3>
          <div class="team-grid">
            @for (member of team; track member.name) {
              <div class="team-member">
                <h4>{{member.name}}</h4>
                <p>{{member.role}}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .content {
      margin-top: 2rem;
    }

    .intro {
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 3rem;
    }

    .mission {
      margin-bottom: 3rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .team-member {
      padding: 1.5rem;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h4 {
      margin: 0 0 0.5rem 0;
      color: #333;
    }
  `]
})
export class AboutComponent {
  team = [
    { name: 'John Doe', role: 'Founder & CEO' },
    { name: 'Jane Smith', role: 'Lead Developer' },
    { name: 'Mike Johnson', role: 'UX Designer' },
    { name: 'Sarah Williams', role: 'Product Manager' }
  ];
}
