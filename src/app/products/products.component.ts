import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products=[
    {title:"chocolate donut", price:20, img:"../../assets/donuts/pic1.jpg"},
    {title:"nesscafe donut", price:40 , img:"../../assets/donuts/pic2.jpg"},
    {title:"strawberry donut",price:30, img:"../../assets/donuts/pic3.jpg"},
    {title:"nuts donut" ,price:60, img:"../../assets/donuts/pic4.jpg"}, 
    {title:"blueberry donut" ,price:40, img:"../../assets/donuts/pic5.jpg"},
    {title:"caramell donut" ,price:20, img:"../../assets/donuts/pic6.jpg"},
    {title:"cupcake" ,price:50, img:"../../assets/donuts/pic7.jpg"},
  ]
}
