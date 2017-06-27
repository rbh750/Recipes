import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loadedFeature = 'recipe';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyCDKe03pLZOdoAkEorYcq9HYjmDClW_780",
            authDomain: "ng-recipe-book-ea063.firebaseapp.com"
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

}
