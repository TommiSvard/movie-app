import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  constructor(private route: Router) { }

  goBack(): void {
    this.route.navigate(['/movie-search']);
  }
}
