import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add this helper function outside the class
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '0, 0, 0';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience = [
    { icon: 'bi-code-slash', number: '4+ ', label: 'Years Experience', color: '#0d6efd' },
    { icon: 'bi-layers', number: '5 ', label: 'Projects Completed', color: '#0dcaf0' },
    { icon: 'bi-people', number: '20 ', label: 'Happy Clients', color: '#198754' },
    { icon: 'bi-award', number: '8 ', label: 'Certifications', color: '#6610f2' }
  ];

  skills = [
    { name: 'Angular', level: 80, icon: 'bi-diagram-3', color: '#DD0031' },
    { name: 'DBMS', level: 80, icon: 'bi-database', color: '#336791' },
    { name: 'Azure service bus', level: 80, icon: 'bi-bus-front', color: '#0078D4' },
    { name: 'Jira', level: 80, icon: 'bi-kanban', color: '#0052CC' },
    { name: 'Bit Bucket', level: 80, icon: 'bi-git', color: '#2684FF' },
    { name: 'Html', level: 80, icon: 'bi-code-slash', color: '#E34F26' },
    { name: 'Css', level: 80, icon: 'bi-brush', color: '#1572B6' },
    { name: 'Javascript', level: 80, icon: 'bi-filetype-js', color: '#F7DF1E' },
    { name: 'Typescript', level: 80, icon: 'bi-file-earmark-code', color: '#3178C6' },
    { name: 'Kafka', level: 80, icon: 'bi-lightning', color: '#231F20' },
    { name: 'RabbitMQ', level: 80, icon: 'bi-envelope', color: '#FF6600' },
    { name: 'Google Pub Sub', level: 80, icon: 'bi-broadcast', color: '#4285F4' },
    { name: 'PHP', level: 80, icon: 'bi-filetype-php', color: '#777BB4' },
    { name: 'Bootstrap', level: 80, icon: 'bi-bootstrap', color: '#7952B3' },
    { name: 'Node js', level: 80, icon: 'bi-nodejs', color: '#339933' },
    { name: 'Express js', level: 80, icon: 'bi-server', color: '#000000' },
    { name: 'Nest js', level: 80, icon: 'bi-shield', color: '#E0234E' },
    { name: 'MongoDB', level: 80, icon: 'bi-leaf', color: '#47A248' },
    { name: 'MySQL', level: 80, icon: 'bi-database-check', color: '#4479A1' },
    { name: 'Redis', level: 80, icon: 'bi-database-fill', color: '#DC382D' },
    { name: 'RedShift', level: 80, icon: 'bi-database-gear', color: '#8C4FFF' },
    { name: 'AWS Lambda', level: 80, icon: 'bi-cloud-arrow-up', color: '#FF9900' },
    { name: 'GraphQL', level: 80, icon: 'bi-diagram-2', color: '#E10098' },
    { name: 'Azure serverless function', level: 80, icon: 'bi-cloud-lightning', color: '#0078D4' },
    { name: 'GCP serverless function', level: 80, icon: 'bi-cloud-check', color: '#4285F4' },
    { name: 'Python', level: 80, icon: 'bi-filetype-py', color: '#3776AB' },
    { name: 'React', level: 80, icon: 'bi-react', color: '#61DAFB' },
    { name: 'Grafana', level: 80, icon: 'bi-graph-up', color: '#F46800' },
    { name: 'New Relic', level: 80, icon: 'bi-speedometer2', color: '#008C99' },
    { name: 'Sentry', level: 80, icon: 'bi-shield-check', color: '#362D59' },
    { name: 'Debezium', level: 80, icon: 'bi-arrow-repeat', color: '#3B3B3B' },
    { name: 'n8n', level: 80, icon: 'bi-boxes', color: '#FF6B6B' }
  ].map((skill, index) => ({
    ...skill,
    colorRgb: hexToRgb(skill.color)
  }));

  // Group skills into arrays of 9 items each
  get skillGroups() {
    const groups = [];
    for (let i = 0; i < this.skills.length; i += 9) {
      groups.push(this.skills.slice(i, i + 9));
    }
    return groups;
  }
} 