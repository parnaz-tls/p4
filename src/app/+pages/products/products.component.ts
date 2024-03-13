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
    {id:1,title:"chocolate donut", price:20,offPrice:18, img:"../../assets/donuts/pic1.jpg"},
    {id:2,title:"nesscafe donut", price:40 ,offPrice:31, img:"../../assets/donuts/pic2.jpg"},
    {id:3,title:"strawberry donut",price:30,offPrice:38, img:"../../assets/donuts/pic3.jpg"},
    {id:4,title:"nuts donut" ,price:60,offPrice:51, img:"../../assets/donuts/pic4.jpg"}, 
    {id:5,title:"blueberry donut" ,price:40,offPrice:29, img:"../../assets/donuts/pic5.jpg"},
    {id:6,title:"caramell donut" ,price:20,offPrice:10, img:"../../assets/donuts/pic6.jpg"},
    {id:7 ,title:"cupcake" ,price:50, offPrice:48,img:"../../assets/donuts/pic7.jpg"},
  ]
}
