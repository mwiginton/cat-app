import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CatPictureService {

    constructor(private http: HttpClient) {}

    getCatPicture(): any {
        const url = `https://cataas.com/cat`;
        return this.http.get(url, {responseType: "blob"});

        // const url = `https://thatcopy.pw/catapi/rest/`;
        // return this.http.get(url, {}).pipe(tap((cat) => cat));
        
    }

    getCat() : any {
        const url = `https://aws.random.cat/meow`;
        return this.http.get(url, {}).pipe(tap((cat) => cat));
    }
}
