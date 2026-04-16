import { Component, OnInit } from '@angular/core';
import { RestserviceService } from 'src/app/restservice.service';

@Component({
  selector: 'app-otherservices',
  templateUrl: './otherservices.component.html',
  styleUrls: ['./otherservices.component.css']
})
export class OtherservicesComponent implements OnInit {

  Allimages: any[] = [];

  constructor(private _rest: RestserviceService) { }

  ngOnInit(): void {
    this.Allmages();
  }

  Allmages() {
    this._rest.AllImages().subscribe((data: any) => {
      this.Allimages = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    });
  }

}
