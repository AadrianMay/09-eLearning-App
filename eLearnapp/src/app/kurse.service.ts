import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Kategorie } from "./Kategorien/kategorie";
import { Kurs } from './kurse/kurs';
import { Abfrage } from './abfragen/abfrage';
import { User } from './users/user';

//Aufgabe: Komplette Kommunikation zur API (Backend) kapseln
@Injectable() //damit wir die klasse injizieren können
export class KurseService {

    //Ein fertiges HttpModul-Objekt hereinbekommen
    //private legt automatisch ein Feld an
    constructor(private http: Http) {

    }

    getKategorien(): Promise<Kategorie[]> {
        return this.http.get('api/kategorien')
            .toPromise() //ich ruf was ab, dann ist fertig und da und kann nicht geändert werden
            .then(r => r.json() as Kategorie[]);
    }

    getKurs(kursID: number): Promise<Kurs> {
        return this.http.get(`api/kurse/${kursID}`) //backtape weil wir ein TemplateString benutzen
            .toPromise()
            .then(r => r.json() as Kurs);
    }

    getAbfrage(AbfrageID: number): Promise<Abfrage> {
        return this.http.get(`api/abfragen/${AbfrageID}`)
            .toPromise()
            .then(r => r.json() as Abfrage);
    }

    getAbfragen(): Promise<Abfrage[]> {
        return this.http.get('api/abfragen')
            .toPromise() //
            .then(r => r.json() as Abfrage[]);
    }

    getUserById(UserID: number): Promise<User> {
        return this.http.get(`api/users/${UserID}`)
            .toPromise()
            .then(r => r.json() as User);
    }

    saveKurs(kurs: Kurs): Promise<Kurs> {
        if (kurs.kursID) {
            return this.http.put(`api/kurse/${kurs.kursID}`, kurs) //backtape weil wir ein TemplateString benutzen
                .toPromise()
                .then(r => r.json() as Kurs);
        }
        else {
            return this.http.post('api/kurse', kurs)
                .toPromise()
                .then(r => r.json() as Kurs); //Antwort verarbeiten: Json des Bodys parsen und in Kurs casten
        }
    }

    saveUser(user: User): Promise<User> {
        if (user.userID) {
            return this.http.put(`api/users/${user.userID}`, user)
                .toPromise()
                .then(r => r.json() as User);
        }
        else {
            return this.http.post('api/users', user)
                .toPromise()
                .then(r => r.json() as User);
        }
    }

    deleteKurs(kursID: number): Promise<void> {
        return this.http.delete(`api/kurse/${kursID}`)
            .toPromise()
            .then(() => null);
    }

    getUsers(): Promise<User[]> {
        return this.http.get('api/users')
            .toPromise() //
            .then(r => r.json() as User[]);
    }

}
