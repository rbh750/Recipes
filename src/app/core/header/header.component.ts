import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.server';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {


    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {

    }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}