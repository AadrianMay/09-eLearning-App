﻿import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router } from '@angular/router';

import { KurseService } from '../../kurse.service';
import { Kategorie } from '../../Kategorien/kategorie';
import { Kurs } from '../../kurse/kurs';
import { User } from '../../users/user';

@Component({
    selector: 'user-menu', //was ist das HTML Element was ich nutzen will um etwas darzustellen
    templateUrl: './usermenu.component.html',
    styleUrls: ['./usermenu.component.css'],
    providers: [KurseService]
})
export class UsermenuComponent implements OnInit {

    private users: User[];
    //KurseService injizieren
    constructor(private kurseService: KurseService, private router: Router) {

    }

    ngOnInit(): void {
        this.kurseService.getUsers().then(users => this.users = users);
    }

    goToUser(user: User): void {
        this.router.navigate(['/user', user.userID]);
    }

    addUser(): void {
        this.router.navigate(['/user/add'])
    }
}