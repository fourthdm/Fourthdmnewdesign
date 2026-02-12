import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
scrollToTopBtn = document.getElementById("scrollToTopBtn");
  rootElement = document.documentElement;

  scroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // this.rootElement.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });
  }

  closeNavbar() {
    // Close the navbar by toggling the collapse class
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }
}
