webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/kursmenu/kursmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-line {\r\n    color: black;\r\n}\r\n\r\n.mat-divider {\r\n    border-color: black;\r\n}\r\n\r\n.add-button {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n\r\nh3 {\r\n    font-size: 30px;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\nh2 {\r\n    font-size: 35px;\r\n    border-bottom: 5px solid black\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/kursmenu/kursmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Kursübersicht</h2>\r\n<br />\r\n<mat-spinner *ngIf=\"!kategorien\"></mat-spinner>\r\n<mat-list *ngIf=\"kategorien\">\r\n    <ng-container *ngFor=\"let kategorie of kategorien\">\r\n        <!--Ngcontainer = etwas wiederholen ohne äußeres element-->\r\n        <h3 my-subheader>\r\n            {{kategorie.name}}\r\n        </h3>\r\n        <br />\r\n        <mat-list-item *ngFor=\"let kurs of kategorie.kurse\">\r\n            <h4 mat-line (click)=\"goToKurs(kurs)\">{{kurs.kursID}} - {{kurs.name}}</h4>\r\n            <div mat-line>\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"80\">{{kurs.beschreibung}}</div>\r\n                    <div fxFlex=\"20\"><i class=\"material-icons\">assignment_turned_in</i></div>\r\n                </div>\r\n            </div>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </ng-container>\r\n</mat-list>\r\n<span class=\"add-button\">\r\n    <button mat-mini-fab (click)=\"addKurs()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button>\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/admin/kursmenu/kursmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); //OnInit = Lebenszyklus event
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var KursmenuComponent = (function () {
    //KurseService injizieren
    function KursmenuComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
    }
    KursmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
    };
    KursmenuComponent.prototype.goToKurs = function (kurs) {
        this.router.navigate(['/kurs', kurs.kursID]);
    };
    KursmenuComponent.prototype.addKurs = function () {
        this.router.navigate(['/kurs/add']);
    };
    KursmenuComponent.prototype.goToUser = function (user) {
        this.router.navigate(['/user', user.userID]);
    };
    KursmenuComponent.prototype.addUser = function () {
        this.router.navigate(['/user/add']);
    };
    KursmenuComponent = __decorate([
        core_1.Component({
            selector: 'kurs-menu',
            template: __webpack_require__("../../../../../src/app/admin/kursmenu/kursmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/kursmenu/kursmenu.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService, router_1.Router])
    ], KursmenuComponent);
    return KursmenuComponent;
}());
exports.KursmenuComponent = KursmenuComponent;


/***/ }),

/***/ "../../../../../src/app/admin/usermenu/usermenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-divider {\r\n    border-color: black;\r\n}\r\n\r\n.userlist {\r\n    margin-right: 150px;\r\n    margin-bottom: 30px;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.mat-grid-tile {\r\n    text-align: left;\r\n    -webkit-box-pack: start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n    border: 1px solid black;\r\n}\r\n\r\nimg {\r\n    border: 2px solid black !important;\r\n}\r\n\r\n.headContent {\r\n    margin-right: 150px;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    border-left: 2px solid black;\r\n    border-right: 2px solid black;\r\n}\r\n\r\nh2 {\r\n    text-align: left;\r\n    font-size: x-large;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/usermenu/usermenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headContent\">\r\n    <h2>User übersicht</h2>\r\n</div>\r\n<br />\r\n<mat-grid-list cols=\"6\" rowHeight=\"50px\" gutterSize=\"1px\" class=\"userlist\" *ngFor=\"let user of users\">\r\n    <mat-grid-tile colspan=\"2\" rowspan=\"4\" class=\"userProfile\">\r\n        <span>\r\n            <img src=\"../../../assets/img/default-user-image.png\" />\r\n        </span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userId\">\r\n        UserID:\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userId\">\r\n        {{user.userID}}\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"emptyArea\">\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"viewKurse\">\r\n        <mat-icon>assignment</mat-icon>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userForname\">\r\n        Vorname:\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userForname\">\r\n        {{user.vorname}}\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"emptyArea\">\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"saveUser\">\r\n        <mat-icon>done</mat-icon>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userName\">\r\n        Nachname:\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userName\">\r\n        {{user.nachname}}\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"emptyArea\">\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"deleteUser\">\r\n        <mat-icon>delete</mat-icon>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userEmail\">\r\n        Email:\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\" class=\"userEmail\">\r\n        {{user.email}}\r\n    </mat-grid-tile> \r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/admin/usermenu/usermenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); //OnInit = Lebenszyklus event
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var UsermenuComponent = (function () {
    //KurseService injizieren
    function UsermenuComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
    }
    UsermenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsermenuComponent.prototype.goToUser = function (user) {
        this.router.navigate(['/user', user.userID]);
    };
    UsermenuComponent.prototype.addUser = function () {
        this.router.navigate(['/user/add']);
    };
    UsermenuComponent = __decorate([
        core_1.Component({
            selector: 'user-menu',
            template: __webpack_require__("../../../../../src/app/admin/usermenu/usermenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/usermenu/usermenu.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService, router_1.Router])
    ], UsermenuComponent);
    return UsermenuComponent;
}());
exports.UsermenuComponent = UsermenuComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurs_detail_component_1 = __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts");
var add_kurs_component_1 = __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.ts");
var user_detail_component_1 = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
var usermenu_component_1 = __webpack_require__("../../../../../src/app/admin/usermenu/usermenu.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var kursmenu_component_1 = __webpack_require__("../../../../../src/app/admin/kursmenu/kursmenu.component.ts");
//routen definieren
var routes = [
    //Zu jeder Route die ich routen möchte vergebe ich einen Pfad und eine Komponente
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'admin/kursmenu', component: kursmenu_component_1.KursmenuComponent },
    { path: 'kurs/add', component: add_kurs_component_1.AddKursComponent },
    { path: 'kurs/:kursID', component: kurs_detail_component_1.KursDetailComponent },
    { path: 'user/:userID', component: user_detail_component_1.UserDetailComponent },
    { path: 'admin/usermenu', component: usermenu_component_1.UsermenuComponent }
];
//Modul konfigurieren
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-box {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-toolbar class=\"toolbar-box\" color=\"black\">\r\n    <button mat-button class=\"menuTrigger\" [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item routerLink=\"admin/kursmenu\" routerLinkActive=\"mat-button-active\">\r\n            <mat-icon>assignment_ind</mat-icon>\r\n            <span>Kurs-Liste</span>\r\n        </button>\r\n        <button mat-menu-item routerLink=\"admin/usermenu\" routerLinkActive=\"mat-button-active\">\r\n            <mat-icon>account_box</mat-icon>\r\n            <span>User-Liste</span>\r\n        </button>\r\n        <button mat-menu-item disabled>\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Einstellungen</span>\r\n        </button>\r\n        <button mat-menu-item disabled>\r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Abmelden</span>\r\n        </button>\r\n    </mat-menu>\r\n        {{title}}\r\n    </mat-toolbar>\r\n</div>\r\n\r\n<router-outlet></router-outlet> <!-- Platzhalter f�r entsprechende Inhalte -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Meine Lernapp';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js"); //Um Eintr�ge �ndern zu k�nnen
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var progress_spinner_1 = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var menu_component_1 = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
var kurs_detail_component_1 = __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts"); //Das Modul wird hier referenziert
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var delete_dialog_component_1 = __webpack_require__("../../../../../src/app/delete-dialog.component.ts");
var add_kurs_component_1 = __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.ts");
var user_detail_component_1 = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
var usermenu_component_1 = __webpack_require__("../../../../../src/app/admin/usermenu/usermenu.component.ts");
var kursmenu_component_1 = __webpack_require__("../../../../../src/app/admin/kursmenu/kursmenu.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                kurs_detail_component_1.KursDetailComponent,
                delete_dialog_component_1.DeleteDialogComponent,
                add_kurs_component_1.AddKursComponent,
                user_detail_component_1.UserDetailComponent,
                usermenu_component_1.UsermenuComponent,
                kursmenu_component_1.KursmenuComponent,
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent
            ],
            entryComponents: [delete_dialog_component_1.DeleteDialogComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatToolbarModule,
                http_1.HttpModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatListModule,
                progress_spinner_1.MatProgressSpinnerModule,
                app_routing_module_1.AppRoutingModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatGridListModule
            ],
            exports: [],
            providers: [kurse_service_1.KurseService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Eintrag löschen</h2>\r\n<mat-dialog-content>Möchten Sie den Eintrag wirklich löschen?</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Nein</button>\r\n    <button mat-button [mat-dialog-close]=\"true\">Ja</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'delete-dialog',
            template: __webpack_require__("../../../../../src/app/delete-dialog.component.html")
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;


/***/ }),

/***/ "../../../../../src/app/kurse.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
//Aufgabe: Komplette Kommunikation zur API (Backend) kapseln
var KurseService = (function () {
    //Ein fertiges HttpModul-Objekt hereinbekommen
    //private legt automatisch ein Feld an
    function KurseService(http) {
        this.http = http;
    }
    KurseService.prototype.getKategorien = function () {
        return this.http.get('api/kategorien')
            .toPromise() //ich ruf was ab, dann ist fertig und da und kann nicht geändert werden
            .then(function (r) { return r.json(); });
    };
    KurseService.prototype.getKurs = function (kursID) {
        return this.http.get("api/kurse/" + kursID) //backtape weil wir ein TemplateString benutzen
            .toPromise()
            .then(function (r) { return r.json(); });
    };
    KurseService.prototype.getUserById = function (UserID) {
        return this.http.get("api/users/" + UserID)
            .toPromise()
            .then(function (r) { return r.json(); });
    };
    KurseService.prototype.saveKurs = function (kurs) {
        if (kurs.kursID) {
            return this.http.put("api/kurse/" + kurs.kursID, kurs) //backtape weil wir ein TemplateString benutzen
                .toPromise()
                .then(function (r) { return r.json(); });
        }
        else {
            return this.http.post('api/kurse', kurs)
                .toPromise()
                .then(function (r) { return r.json(); }); //Antwort verarbeiten: Json des Bodys parsen und in Kurs casten
        }
    };
    KurseService.prototype.saveUser = function (user) {
        if (user.userID) {
            return this.http.put("api/users/" + user.userID, user)
                .toPromise()
                .then(function (r) { return r.json(); });
        }
        else {
            return this.http.post('api/users', user)
                .toPromise()
                .then(function (r) { return r.json(); });
        }
    };
    KurseService.prototype.deleteKurs = function (kursID) {
        return this.http.delete("api/kurse/" + kursID)
            .toPromise()
            .then(function () { return null; });
    };
    KurseService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .toPromise() //
            .then(function (r) { return r.json(); });
    };
    KurseService = __decorate([
        core_1.Injectable() //damit wir die klasse injizieren können
        ,
        __metadata("design:paramtypes", [http_1.Http])
    ], KurseService);
    return KurseService;
}());
exports.KurseService = KurseService;


/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kurs-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n/*.select-fix {\r\n    margin: 30px 0px 10px 0px;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!kategorien\"></mat-spinner>\r\n<form *ngIf=\"kategorien\" class=\"kurs-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"kurs.name\" maxlength=\"100\" name=\"name\" />\r\n        <mat-hint align=\"end\">{{kurs.name.length}} / 100</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"kurs.beschreibung\" maxlength=\"250\" name=\"beschreibung\"></textarea>\r\n        <mat-hint align=\"end\">/ 250</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-select class=\"full-widht select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"kurs.kategorieID\" name=\"kategorieID\">\r\n            <mat-option *ngFor=\"let kategorie of kategorien\" [value]=\"kategorie.kategorieID\">{{kategorie.name}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n        <button mat-button (click)=\"save()\">speichern</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var kurs_1 = __webpack_require__("../../../../../src/app/kurse/kurs.ts");
var AddKursComponent = (function () {
    function AddKursComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
        this.kurs = new kurs_1.Kurs();
    }
    AddKursComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
    };
    AddKursComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveKurs(this.kurs).then(function () { return _this.router.navigate(['/']); });
    };
    AddKursComponent = __decorate([
        core_1.Component({
            selector: 'app-add-kurs',
            template: __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.css")]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService,
            router_1.Router])
    ], AddKursComponent);
    return AddKursComponent;
}());
exports.AddKursComponent = AddKursComponent;


/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kurs-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n    font-size: large;\r\n}\r\n\r\n/*.select-fix {\r\n    margin: 30px 0px 10px 0px;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!kurs || !kategorien\"></mat-spinner>\r\n<form *ngIf=\"kurs && kategorien\" class=\"kurs-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"kurs.name\" maxlength=\"100\" name=\"name\" />\r\n        <mat-hint align=\"right\">{{kurs.name.length}} / 100</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"kurs.beschreibung\" maxlength=\"250\" name=\"beschreibung\"></textarea>\r\n        <mat-hint align=\"end\">/ 250</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-select class=\"full-widht select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"kurs.kategorieID\" name=\"kategorie\">\r\n            <mat-option *ngFor=\"let kategorie of kategorien\" [value]=\"kategorie.kategorieID\">{{kategorie.name}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n        <button mat-button (click)=\"save()\">speichern</button>\r\n        <button mat-button (click)=\"delete()\">delete</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js"); //um die in der URL �bergebene ID abzurufen
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var delete_dialog_component_1 = __webpack_require__("../../../../../src/app/delete-dialog.component.ts");
var KursDetailComponent = (function () {
    function KursDetailComponent(route, kurseService, router, dialog) {
        this.route = route;
        this.kurseService = kurseService;
        this.router = router;
        this.dialog = dialog;
    }
    KursDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
        this.route.paramMap
            .switchMap(function (params) { return _this.kurseService.getKurs(+params.get('kursID')); })
            .subscribe(function (kurs) { return _this.kurs = kurs; }); //den Kurs den ich zur�ckbekommen habe auf den aktuellen Kurs setzen
    };
    KursDetailComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveKurs(this.kurs).then(function () { return _this.router.navigate(['/admin/kursmenu']); }); //navigiert anschlie�end auf die Startseite
    };
    KursDetailComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.kurseService.deleteKurs(_this.kurs.kursID).then(function () { return _this.router.navigate(['/']); });
            }
        });
    };
    KursDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-kurs-detail',
            template: __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            kurse_service_1.KurseService,
            router_1.Router,
            material_1.MatDialog])
    ], KursDetailComponent);
    return KursDetailComponent;
}());
exports.KursDetailComponent = KursDetailComponent;


/***/ }),

/***/ "../../../../../src/app/kurse/kurs.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Kurs = (function () {
    function Kurs() {
        this.name = "";
        this.beschreibung = "";
    }
    return Kurs;
}());
exports.Kurs = Kurs;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    color: black !important;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.loginArea {\r\n    position: fixed;\r\n    bottom: 400px;\r\n    right: 875px;\r\n    border: 20px solid darkgray;\r\n    background-color: darkgray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginArea\">\r\n    <h2>Login</h2>\r\n    <div>\r\n        <form class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" maxlength=\"30\" name=\"user.email\" />\r\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </form>\r\n    </div>\r\n    <br /> <br />\r\n    <div>\r\n        <form class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\">\r\n               <input matInput placeholder=\"passwort\" [(ngModel)]=\"user.passwort\" maxlength=\"20\" name=\"user.passwort\" />\r\n                <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\r\n                <mat-hint align=\"end\">{{user.passwort.length}} / 20</mat-hint>\r\n            </mat-form-field>\r\n        </form>\r\n    </div>\r\n    <br />\r\n    <div class=\"login-actions\">\r\n        <button mat-button (click)=\"login(user.passwort, user.email)\">Login</button>\r\n        <a mat-button routerLink=\"../registration\">Registrieren</a>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n    <div>\r\n    <h2>Login</h2>\r\n    <form name=\"form\" ng-submit=\"vm.login()\" role=\"form\">\r\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" required />\r\n            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\r\n        </div>\r\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" required />\r\n            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\r\n        </div>\r\n        <div class=\"form-actions\">\r\n            <button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" class=\"btn btn-primary\">Login</button>\r\n            <img ng-if=\"vm.dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a href=\"#!/register\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); //OnInit = Lebenszyklus event
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/users/user.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var LoginComponent = (function () {
    function LoginComponent(kurseService, router, route) {
        this.kurseService = kurseService;
        this.router = router;
        this.route = route;
        //KurseService injizieren
        //private users: User[];
        this.user = new user_1.User();
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getUsers().then(function (users) { return _this.users = users; });
        this.route.paramMap
            .switchMap(function (params) { return _this.kurseService.getUserById(+params.get('userID')); })
            .subscribe(function (user) { return _this.user = user; });
    };
    LoginComponent.prototype.goOn = function () {
        this.router.navigate(['/admin/kursmenu']);
    };
    LoginComponent.prototype.login = function (passwort, email) {
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
            this.router.navigate(['admin/kursmenu']);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-line {\r\n    color: black;\r\n}\r\n\r\n.mat-divider {\r\n    border-color: black;\r\n}\r\n\r\n.add-button {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Kursübersicht</h2>\r\n<mat-spinner *ngIf=\"!kategorien\"></mat-spinner>\r\n<mat-list *ngIf=\"kategorien\">\r\n    <ng-container *ngFor=\"let kategorie of kategorien\"> <!--Ngcontainer = etwas wiederholen ohne äußeres element-->\r\n        <h3 my-subheader>\r\n            {{kategorie.name}}\r\n        </h3>\r\n        <mat-list-item *ngFor=\"let kurs of kategorie.kurse\">\r\n            <h4 mat-line (click)=\"goToKurs(kurs)\">{{kurs.kursID}} - {{kurs.name}}</h4>\r\n            <div mat-line>\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"80\">{{kurs.beschreibung}}</div>\r\n                    <div fxFlex=\"20\"><i class=\"material-icons\">assignment_turned_in</i></div>\r\n                </div>\r\n            </div>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </ng-container>\r\n</mat-list>\r\n<span class=\"add-button\">\r\n    <button mat-mini-fab (click)=\"addKurs()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button>\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); //OnInit = Lebenszyklus event
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var MenuComponent = (function () {
    //KurseService injizieren
    function MenuComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
    };
    MenuComponent.prototype.goToKurs = function (kurs) {
        this.router.navigate(['/kurs', kurs.kursID]);
    };
    MenuComponent.prototype.addKurs = function () {
        this.router.navigate(['/kurs/add']);
    };
    MenuComponent.prototype.goToUser = function (user) {
        this.router.navigate(['/user', user.userID]);
    };
    MenuComponent.prototype.addUser = function () {
        this.router.navigate(['/user/add']);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'kurs-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService, router_1.Router])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"Vorname\" [formControl]=\"vornameFormControl\" [(ngModel)]=\"user.vorname\" maxlength=\"30\" name=\"vorname\" />\r\n        <mat-error *ngIf=\"vornameFormControl.hasError('required')\">\r\n            Vorname is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-hint align=\"end\">{{user.vorname.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"Nachname\" [formControl]=\"nachnameFormControl\" [(ngModel)]=\"user.nachname\" maxlength=\"30\" name=\"nachname\" />\r\n        <mat-error *ngIf=\"nachnameFormControl.hasError('required')\">\r\n            Nachname is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-hint align=\"end\">{{user.nachname.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"user.email\" maxlength=\"30\" name=\"email\" />\r\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n            Email is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-hint align=\"end\">{{user.email.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\" [(ngModel)]=\"user.passwort\" maxlength=\"30\" name=\"passwort\" />\r\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n            Password is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-hint align=\"end\">{{user.passwort.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <br />\r\n    <button mat-button (click)=\"save()\">registrieren</button>\r\n</form>\r\n\r\n<!--<div class=\"registration\">\r\n    <h2>Registrieren</h2>\r\n    <div>\r\n        <label for=\"vorname\">Vorname: </label>\r\n        <br />\r\n        <input type=\"text\" name=\"vorname\" class=\"register-form\" ng-model=\"user.vorname\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"vorname\">Nachname: </label>\r\n        <br />\r\n        <input type=\"text\" name=\"vorname\" class=\"register-form\" ng-model=\"user.nachname\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"vorname\">Email: </label>\r\n        <br />\r\n        <input type=\"text\" name=\"vorname\" class=\"register-form\" ng-model=\"user.email\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"vorname\">Passwort: </label>\r\n        <br />\r\n        <input type=\"text\" name=\"vorname\" class=\"register-form\" ng-model=\"user.passwort\" />\r\n    </div>\r\n    <div class=\"register-actions\">\r\n        <button (click)=\"goOn()\">Registrieren</button>\r\n    </div>\r\n</div>\r\n\r\n    -->\r\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); //OnInit = Lebenszyklus event
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/users/user.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var RegistrationComponent = (function () {
    function RegistrationComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
        //KurseService injizieren
        this.user = new user_1.User();
        this.vornameFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
        this.nachnameFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
        this.passwordFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        null;
    };
    RegistrationComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveUser(this.user).then(function () { return _this.router.navigate(['/']); });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [kurse_service_1.KurseService, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!user\"></mat-spinner>\r\n<form *ngIf=\"user\" class=\"user-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"vorname\" [(ngModel)]=\"user.vorname\" maxlength=\"30\" name=\"vorname\" />\r\n        <mat-hint align=\"right\">{{user.vorname.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"nachname\" [(ngModel)]=\"user.nachname\" maxlength=\"30\" name=\"nachname\" />\r\n        <mat-hint align=\"right\">{{user.nachname.length}} / 30</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"user.email\" maxlength=\"50\" name=\"email\" />\r\n        <mat-hint align=\"right\">{{user.email.length}} / 50</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"user.passwort\" maxlength=\"20\" name=\"passwort\" />\r\n        <mat-hint align=\"right\">{{user.passwort.length}} / 20</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <div>\r\n        <button mat-button (click)=\"save()\">speichern</button>\r\n        <button mat-button (click)=\"delete()\">delete</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var kurse_service_1 = __webpack_require__("../../../../../src/app/kurse.service.ts");
var UserDetailComponent = (function () {
    //private kursteilnahmen: KursTeilnahme[];
    function UserDetailComponent(route, kurseService, router) {
        this.route = route;
        this.kurseService = kurseService;
        this.router = router;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.kurseService.getKursTeilnahmen().then(kursTeilnahmen => this.kursTeilnahmen = kursTeilnahmen);
        this.route.paramMap
            .switchMap(function (params) { return _this.kurseService.getUserById(+params.get('userID')); })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveUser(this.user).then(function () { return _this.router.navigate(['/']); });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.css")],
            providers: [kurse_service_1.KurseService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, kurse_service_1.KurseService, router_1.Router])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;


/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
        this.email = "";
        this.vorname = "";
        this.nachname = "";
        this.passwort = "";
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map