import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // tambah baris ini

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule // tambah baris ini
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
