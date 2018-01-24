import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { KurseService } from '../../kurse.service';
import { User } from '../user';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
    providers: [KurseService]
})
export class UserDetailComponent implements OnInit {

    private user: User;
    //private kursteilnahmen: KursTeilnahme[];
    constructor(private route: ActivatedRoute, private kurseService: KurseService, private router: Router) {
    }

    ngOnInit() {
        //this.kurseService.getKursTeilnahmen().then(kursTeilnahmen => this.kursTeilnahmen = kursTeilnahmen);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getUserById(+params.get('userID')))
            .subscribe(user => this.user = user);
    }

    save(): void {
        this.kurseService.saveUser(this.user).then(() => this.router.navigate(['/']));
    }

    goToUser(user: User): void {
        this.router.navigate(['/user', user.userID]);
    }

    /*delete(): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.kurseService.deleteUser(this.user.userID).then(() => this.router.navigate(['/']));
            }
        })

    }*/

}