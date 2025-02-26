import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="projects">
      <div class="projects-header">
        <h2>My Projects</h2>
        <app-button variant="primary">New Project</app-button>
      </div>
      
      <div class="project-grid">
        @for (project of projects; track project.id) {
          <div class="project-card">
            <h3>{{project.name}}</h3>
            <p>{{project.description}}</p>
            <div class="project-footer">
              <span class="status" [class]="project.status">{{project.status}}</span>
              <app-button variant="secondary">View Details</app-button>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .projects-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      padding: 1.5rem;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .project-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
    }

    .active {
      background: #e8f5e9;
      color: #2e7d32;
    }

    .completed {
      background: #e3f2fd;
      color: #1565c0;
    }

    .pending {
      background: #fff3e0;
      color: #f57c00;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Modernizing the company website with new features',
      status: 'active'
    },
    {
      id: 2,
      name: 'Mobile App',
      description: 'Developing a new mobile application',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Database Migration',
      description: 'Migrating data to new cloud infrastructure',
      status: 'completed'
    }
  ];
} 