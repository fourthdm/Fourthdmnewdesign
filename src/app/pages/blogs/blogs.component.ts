import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  constructor() { }

  ngOnInit(): void {

  }

  Scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
