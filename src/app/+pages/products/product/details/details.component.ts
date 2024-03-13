import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  pid:Number = 0;
  ngOnInit(): void {
      this.pid = Number(this.route.snapshot.paramMap.get('pid'));
      console.log(this.pid);
  }

  route=inject(ActivatedRoute);
}
