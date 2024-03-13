import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { ProductsComponent } from './+pages/products/products.component';
import { ServicesComponent } from './+pages/services/services.component';
import { AboutComponent } from './+pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
