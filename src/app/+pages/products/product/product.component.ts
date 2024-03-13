import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() title:string='ProductName';
  @Input() price:number=0;
  @Input() offPrice:number=0;
  @Input() img='ProductImage';
  @Input() id:Number=0;

}
