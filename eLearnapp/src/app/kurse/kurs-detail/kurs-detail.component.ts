import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //um die in der URL übergebene ID abzurufen

import 'rxjs/add/operator/switchMap';

import { KurseService } from '../../kurse.service';
import { Kurs } from '../kurs';
import { Kategorie } from '../../Kategorien/kategorie';
import { Abfrage } from '../../Abfragen/abfrage';
import { DeleteDialogComponent } from '../../delete-dialog.component';

@Component({
    selector: 'app-kurs-detail',
    templateUrl: './kurs-detail.component.html',
    styleUrls: ['./kurs-detail.component.css']
})
export class KursDetailComponent implements OnInit {

    private abfrage: Abfrage;
    private kurs: Kurs;
    private kategorien: Kategorie[];

    constructor(
        private route: ActivatedRoute,
        private kurseService: KurseService,
        private router: Router,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.kurseService.getKategorien().then(kategorien => this.kategorien = kategorien);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getKurs(+params.get('kursID')))
            .subscribe(kurs => this.kurs = kurs); //den Kurs den ich zurückbekommen habe auf den aktuellen Kurs setzen
    }

    starten(): void {
        this.kurseService.getAbfrage(this.abfrage.AbfrageID).then(() => this.router.navigate(['/users/fortschritt'])); //navigiert anschließend auf die Startseite
    }

    save(): void {
        this.kurseService.saveKurs(this.kurs).then(() => this.router.navigate(['/admin/kursmenu'])); //navigiert anschließend auf die Startseite
    }

    delete(): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.kurseService.deleteKurs(this.kurs.kursID).then(() => this.router.navigate(['/']));
            }
        })

    }
}


