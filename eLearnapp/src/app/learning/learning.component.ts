import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


import { KurseService } from '../kurse.service';
import { Kurs } from '../kurse/kurs';

@Component({
    selector: 'learning', //was ist das HTML Element was ich nutzen will um etwas darzustellen
    templateUrl: './learning.component.html',
    styleUrls: ['./learning.component.css'],
    providers: [KurseService]
})
export class LearningComponent implements OnInit {

    private kurs: Kurs;
    //KurseService injizieren
    constructor(
        private route: ActivatedRoute,
        private kurseService: KurseService,
        private router: Router) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getKurs(+params.get('kursID')))
            .subscribe(kurs => this.kurs = kurs); //den Kurs den ich zurückbekommen habe auf den aktuellen Kurs setzen
    }

}