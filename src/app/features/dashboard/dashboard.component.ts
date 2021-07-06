import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bookList = [
    {
    name: 'Le seigneur des anneaux'
    },
    {
    name: 'Harry Potter'
    },
    {
      name: 'Picsou'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
