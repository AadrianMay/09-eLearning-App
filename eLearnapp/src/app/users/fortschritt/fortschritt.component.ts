import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

import { Abfrage } from '../../Abfragen/abfrage';
import { KurseService } from '../../kurse.service';


@Component({
    selector: 'app-fortschritt',
    templateUrl: './fortschritt.component.html',
    styleUrls: ['./fortschritt.component.css'],
    providers: [KurseService]
})
/** fortschritt component*/
export class FortschrittComponent implements OnInit {

    private abfragen: Abfrage[];

    /** fortschritt ctor */
    constructor(
        private route: ActivatedRoute,
        private kurseService: KurseService,
        private router: Router,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.kurseService.getAbfragen().then(abfragen => this.abfragen = abfragen);
    }
}