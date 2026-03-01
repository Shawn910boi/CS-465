import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService, Trip } from './services/trip-data.service';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.component.html'
})
export class TripListComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }
}

