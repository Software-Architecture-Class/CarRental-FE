import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Car } from './car.model';
import * as temporary from './cars-temporary-data';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAllCars() {
    return new Observable((observer: Observer<Car[]>) => {
      setTimeout(() => {
        observer.next(temporary.cars);
      }, 2000)
    })
  }
}