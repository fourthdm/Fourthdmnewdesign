import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newfourthdm';

  
  rootelement!: HTMLElement;

  // scroll = document.getElementById('scroll');
  // rootelement = document.documentElement;

  constructor() { }
  ngOnInit(): void {
    this.rootelement = document.documentElement;
  }

  // scrollToTop() {
  //   this.rootelement.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
