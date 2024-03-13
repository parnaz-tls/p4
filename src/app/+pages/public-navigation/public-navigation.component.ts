import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-navigation',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './public-navigation.component.html',
  styleUrl: './public-navigation.component.scss'
})
export class PublicNavigationComponent {

}
