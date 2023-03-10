import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarDetails } from 'src/app/models/car-details.model';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  data: CarDetails;
  subscription: Subscription;
  hide: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carService: CarApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.carService.getCarDetails(params['name']).subscribe({
        next: (details: CarDetails) => {
          this.data = details;
        },
        error: () => {
          this.router.navigate(['/not-found']);
        }
      })
    });
  }
  
	onClick(): void {
		this.hide = true;
		console.log("jestem")
	}
}
