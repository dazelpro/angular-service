import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-service';

    constructor(private api: ApiService){
        
    }

    async panggilSemuaHero() {
        await this.api.getDataHero().subscribe((data) => {
            console.log(data)
        })
    }

    async panggilHeroLayla() {
        await this.api.getDataHeroLayla().subscribe((data) => {
            console.log(data)
        })
    }

    async panggilHeroMarksman() {
        await this.api.getDataHeroMarksman().subscribe((data) => {
            console.log(data)
        })
    }
}
