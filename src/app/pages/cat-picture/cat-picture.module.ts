import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { CatPictureRoutingModule } from './cat-picture-routing.module';
import { CatPictureComponent } from './cat-picture.component';

@NgModule({
    declarations: [CatPictureComponent],
    imports: [CommonModule, CatPictureRoutingModule, HttpClientModule, MatButtonModule],
    exports: [CatPictureComponent]
})
export class CatPictureModule {}
