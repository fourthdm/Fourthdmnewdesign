import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestserviceService } from 'src/app/restservice.service';

@Component({
  selector: 'app-otherservices',
  templateUrl: './otherservices.component.html',
  styleUrls: ['./otherservices.component.css']
})
export class OtherservicesComponent implements OnInit {

  Allimages: any[] = [];

  addimageform: FormGroup;

  image: File | null = null;

  constructor(private _rest: RestserviceService) {
    this.addimageform = new FormGroup({
      image: new FormControl(null)
    });

  }

  ngOnInit(): void {
    this.Dataimages();
  }

  onFileselectimage(event: any) {
    this.image = event.target.files[0];
  }

  onSubmit() {
    if (this.addimageform.invalid) {
      alert('Please fill in all required fields!');
      return;
    }
    const formData = new FormData();
    // Append all form values
    Object.keys(this.addimageform.controls).forEach(key => {
      formData.append(key, this.addimageform.get(key)?.value);
    });

    // Append file if selected
    if (this.image) {
      formData.append('image', this.image);
    }
    // ✅ Send POST request to Node API
    this._rest.Addimages(formData).subscribe({
      next: (response: any) => {
        if (response.success) {
          // alert('✅ Job added successfully and machine assigned!');
          this.addimageform.reset();
          this.Allimages = response.data
          this.ngOnInit();
        } else {
          alert('⚠️ ' + response.message);
        }
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error while adding job: ' + (err.error?.message || err.message));
      }
    });
  }

  Dataimages() {
    this._rest.getimageData().subscribe((res: any) => {
      this.Allimages = res.data;
      console.log(res);
    });
  }


}
