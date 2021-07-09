import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cat-picture',
        loadChildren: () => import('./pages/cat-picture/cat-picture.module').then((m) => m.CatPictureModule)
    },
    {
        path: '',
        redirectTo: '/cat-picture',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

