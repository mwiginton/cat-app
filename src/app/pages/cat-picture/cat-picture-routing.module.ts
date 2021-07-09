import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatPictureComponent } from './cat-picture.component';

const routes: Routes = [
    {
        path: '',
        component: CatPictureComponent,
        // data: { icon: 'home', name: 'Home', disabled: true, tags: ['login'] }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatPictureRoutingModule {}
