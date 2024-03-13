import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin-navigation.component.html',
  styleUrl: './admin-navigation.component.scss'
})
export class AdminNavigationComponent {

}
