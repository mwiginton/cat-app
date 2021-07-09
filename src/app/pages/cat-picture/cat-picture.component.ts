import { Component, OnInit } from '@angular/core';
import { CatPictureService } from 'src/app/services/cat-picture.service';

@Component({
  selector: 'app-cat-picture',
  templateUrl: './cat-picture.component.html',
  styleUrls: ['./cat-picture.component.css']
})
export class CatPictureComponent implements OnInit {

  imageToShow: any;
  catImg: any;
  isImageLoading: boolean;
  constructor(
    private catPicture: CatPictureService,
  ) { }

  ngOnInit(): void {
    // this.getImageFromService()
    this.getCat();
  }

  getCat() {
    this.catPicture.getCat().subscribe(
      (res: any) => {
          console.log("RES");
          this.catImg = res;
      },
      (err: any) => {
          console.error(err);
      }
  );
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.catPicture.getCatPicture().subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
  }

}
