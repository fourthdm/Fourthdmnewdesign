import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm(
      'service_7ugy8vj',       // e.g., service_xxxxxx
      'template_p367rob',      // e.g., template_yyyyyy
      event.target as HTMLFormElement,
      '_iV-VaDzP7_2BoTII'        // e.g., public_zzzzzz
    ).then(
      () => {
        alert('Enquiry sent successfully!');
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send enquiry.');
      }
    );

    (event.target as HTMLFormElement).reset();
  }

}
