import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { KurseService } from '../kurse.service';
import { User } from '../users/user';
import { FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [KurseService]
})

export class LoginComponent implements OnInit {
    //KurseService injizieren
    //private users: User[];
    private user: User = new User();
    private users: User[];

    constructor(
        private kurseService: KurseService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
       this.kurseService.getUsers().then(users => this.users = users);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getUserById(+params.get('userID')))
            .subscribe(user => this.user = user);
    }

    goOn(): void {
        this.router.navigate(['/admin/kursmenu'])
    }

    login(passwort: string, email: string): void {
        var valid = false;
        console.log(this.users.length);
        for (var i = 0; i < this.users.length; i++) {
            console.log(this.users[i].email);
            console.log(this.users[i].passwort);
            if (this.users[i].passwort == passwort && this.users[i].email == email) {
                valid = true;
                //TODO set session user 
                //write current id to database ( this,users[i].id) table currentUser
            }

        }
        if (valid == true) {
            this.router.navigate(['admin/kursmenu'])
        }
        else {
            this.router.navigate(['/'])
        }
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
}