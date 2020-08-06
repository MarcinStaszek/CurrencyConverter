import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router) { }

  routeHidden = true;

  ngOnInit(): void {
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        if (e.url === '/') {
            this.routeHidden = true;
        } else {
            this.routeHidden = false;
        }
      }
    });
  }
}
