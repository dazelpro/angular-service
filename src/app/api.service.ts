import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get(link: string){
        return this.http.get(link).toPromise();
    }

    getDataHero() {
        return this.http.get(`https://api.dazelpro.com/mobile-legends/hero`);
    }

    getDataHeroLayla() {
        return this.http.get(`https://api.dazelpro.com/mobile-legends/hero/21`);
    }

    getDataHeroMarksman() {
        return this.http.get(`https://api.dazelpro.com/mobile-legends/role?roleName=Marksman`);
    }
}
