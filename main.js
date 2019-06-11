(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service.ts":
/*!******************************************************************************************************!*\
  !*** ../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: RouterDataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterDataManagerService", function() { return RouterDataManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var RouterDataManagerService = /** @class */ (function () {
    function RouterDataManagerService(router, route) {
        this.router = router;
        this.route = route;
        this.trackDataValues = [];
    }
    RouterDataManagerService.prototype.trackData = function () {
        var _this = this;
        var trackDataValues = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            trackDataValues[_i] = arguments[_i];
        }
        this.trackDataValues = trackDataValues;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                console.log(_this.traverseRoutesForData(_this.route));
            }
        });
    };
    ;
    RouterDataManagerService.prototype.traverseRoutesForData = function (route) {
        var data = {};
        while (route) {
            for (var _i = 0, _a = this.trackDataValues; _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (route.snapshot.data[name_1]) {
                    data[name_1] = route.snapshot.data[name_1];
                }
            }
            route = route.firstChild;
        }
        return data;
    };
    RouterDataManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RouterDataManagerService);
    return RouterDataManagerService;
}());



/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts":
/*!**************************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts ***!
  \**************************************************************************************/
/*! exports provided: StandardHomepageMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHomepageMenuService", function() { return StandardHomepageMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var StandardHomepageMenuService = /** @class */ (function () {
    function StandardHomepageMenuService() {
        this.navMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    StandardHomepageMenuService.prototype.setNavMenu = function (menu) {
        this.navMenu.next(menu);
    };
    StandardHomepageMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardHomepageMenuService);
    return StandardHomepageMenuService;
}());



/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage.module.ts":
/*!********************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage.module.ts ***!
  \********************************************************************************/
/*! exports provided: StandardHomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHomepageModule", function() { return StandardHomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standard-homepage/standard-homepage.component */ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.ts");
/* harmony import */ var _webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webcore-common/webcore-common.module */ "../webcore-library/src/lib/webcore-common/webcore-common.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");








var StandardHomepageModule = /** @class */ (function () {
    function StandardHomepageModule() {
    }
    StandardHomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageComponent"], _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageLogo"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_4__["WebcoreCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            exports: [
                _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageComponent"],
                _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageLogo"]
            ]
        })
    ], StandardHomepageModule);
    return StandardHomepageModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html":
/*!*******************************************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"homepage-container\">\n  <mat-toolbar color=\"primary\" *ngIf=\"showHeader\">\n    <span fxFlex=\"20\">\n      <ng-content select=\"wc-standard-homepage-logo\"></ng-content>\n    </span>\n    <span fxFlex></span>\n    <button mat-flat-button>Sign In</button>\n    <button mat-button [matMenuTriggerFor]=\"mainMenu\"><mat-icon>menu</mat-icon></button>\n    <mat-menu #mainMenu=\"matMenu\">\n      <div>\n        <button *ngFor=\"let item of mainMenuItems\" class=\"menu-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}><span>{{ item.name }}</span><mat-icon *ngIf=\"item.icon\">{{ item.icon }}</mat-icon></button>\n      </div>\n      <div *ngIf=\"showNav\" ngStyle.gt-sm=\"display: none\">\n        <hr>\n        <button *ngFor=\"let item of navMenuItems\" class=\"menu-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}><span>{{ item.name }}</span><mat-icon *ngIf=\"item.icon\">{{ item.icon }}</mat-icon></button>\n      </div>\n    </mat-menu>\n  </mat-toolbar>\n  <mat-sidenav-container>\n    <mat-sidenav mode=\"side\" opened *ngIf=\"showNav\" ngStyle.lt-md=\"display: none\">\n      <div *ngFor=\"let item of navMenuItems\">\n        <a class=\"nav-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}>\n          <mat-icon>{{ item.icon }}</mat-icon>\n        </a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <ng-content></ng-content>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.scss":
/*!*******************************************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage-container {\n  height: 100%; }\n\nmat-sidenav-container {\n  height: 100%; }\n\nmat-sidenav {\n  text-align: center; }\n\n.menu-item span {\n  vertical-align: middle; }\n\n.menu-item mat-icon {\n  margin-left: 16px;\n  margin-right: 0; }\n\n.nav-item mat-icon {\n  margin-right: 0; }\n\n.active-route {\n  cursor: not-allowed;\n  pointer-events: none;\n  background-color: hotpink; }\n\nhr {\n  border-color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvSWRlYVByb2plY3RzL3dlYmNvcmUvd2ViY29yZS1mcm9udGVuZC93ZWJjb3JlLWxpYnJhcnkvcHJvamVjdHMvd2ViY29yZS1saWJyYXJ5L3NyYy9saWIvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUNGLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViY29yZS1saWJyYXJ5L3NyYy9saWIvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudS1pdGVtIHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVudS1pdGVtIG1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm5hdi1pdGVtICBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmFjdGl2ZS1yb3V0ZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xufVxuXG5ociB7XG4gIGJvcmRlci1jb2xvcjogYmx1ZVxufVxuIl19 */"

/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StandardHomepageLogo, StandardHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHomepageLogo", function() { return StandardHomepageLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHomepageComponent", function() { return StandardHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");




var StandardHomepageLogo = /** @class */ (function () {
    function StandardHomepageLogo() {
    }
    StandardHomepageLogo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-standard-homepage-logo',
            template: '<ng-content></ng-content>'
        })
    ], StandardHomepageLogo);
    return StandardHomepageLogo;
}());

var StandardHomepageComponent = /** @class */ (function () {
    function StandardHomepageComponent(router, standardHomepageMenuService) {
        this.router = router;
        this.standardHomepageMenuService = standardHomepageMenuService;
    }
    StandardHomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNav = true;
        this.showHeader = true;
        this.currentRoute = this.router.url;
        this.router.events.subscribe(function (navEvent) {
            if (navEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.currentRoute = navEvent.url;
            }
        });
        this.standardHomepageMenuService.navMenu.subscribe(function (menuItems) {
            _this.navMenuItems = menuItems;
        });
    };
    StandardHomepageComponent.prototype.isActiveRoute = function (item) {
        return this.currentRoute === item.route;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(StandardHomepageLogo),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", StandardHomepageLogo)
    ], StandardHomepageComponent.prototype, "_logo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('navMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StandardHomepageComponent.prototype, "navMenuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mainMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StandardHomepageComponent.prototype, "mainMenuItems", void 0);
    StandardHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-standard-homepage',
            template: __webpack_require__(/*! ./standard-homepage.component.html */ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html"),
            styles: [__webpack_require__(/*! ./standard-homepage.component.scss */ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"]])
    ], StandardHomepageComponent);
    return StandardHomepageComponent;
}());



/***/ }),

/***/ "../webcore-library/src/lib/webcore-common/webcore-common.module.ts":
/*!**************************************************************************!*\
  !*** ../webcore-library/src/lib/webcore-common/webcore-common.module.ts ***!
  \**************************************************************************/
/*! exports provided: WebcoreCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcoreCommonModule", function() { return WebcoreCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");




var WebcoreCommonModule = /** @class */ (function () {
    function WebcoreCommonModule() {
    }
    WebcoreCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ]
        })
    ], WebcoreCommonModule);
    return WebcoreCommonModule;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accounts-page/accounts-page.module": [
		"./src/app/accounts-page/accounts-page.module.ts",
		"accounts-page-accounts-page-module"
	],
	"./settings-page/settings-page.module": [
		"./src/app/settings-page/settings-page.module.ts",
		"settings-page-settings-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/alt-homepage/alt-homepage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/alt-homepage/alt-homepage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wc-standard-homepage class=\"theme-deeppurple-amber\" [navMenu]=\"sidenavMenu\" [mainMenu]=\"mainMenu\">\n  <wc-standard-homepage-logo>\n    <b>Alternate Logo</b>\n  </wc-standard-homepage-logo>\n  Welcome to Alternate Home!\n</wc-standard-homepage>\n"

/***/ }),

/***/ "./src/app/alt-homepage/alt-homepage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/alt-homepage/alt-homepage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvYWx0LWhvbWVwYWdlL2FsdC1ob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alt-homepage/alt-homepage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/alt-homepage/alt-homepage.component.ts ***!
  \********************************************************/
/*! exports provided: AltHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltHomepageComponent", function() { return AltHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AltHomepageComponent = /** @class */ (function () {
    function AltHomepageComponent() {
        this.sidenavMenu = [
            {
                route: '/app/home2',
                icon: 'home',
                name: 'Alt Home'
            },
            {
                route: '/app/favorites',
                icon: 'grade',
                name: 'Favorites'
            }
        ];
        this.mainMenu = [
            {
                route: '/app/settings',
                icon: 'settings',
                name: 'Settings'
            },
            {
                route: '/app/account',
                icon: 'account_circle',
                name: 'Account'
            },
            {
                route: '/app/home',
                icon: 'home',
                name: 'Home'
            }
        ];
    }
    AltHomepageComponent.prototype.ngOnInit = function () {
    };
    AltHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alt-homepage',
            template: __webpack_require__(/*! ./alt-homepage.component.html */ "./src/app/alt-homepage/alt-homepage.component.html"),
            styles: [__webpack_require__(/*! ./alt-homepage.component.scss */ "./src/app/alt-homepage/alt-homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AltHomepageComponent);
    return AltHomepageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _alt_homepage_alt_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alt-homepage/alt-homepage.component */ "./src/app/alt-homepage/alt-homepage.component.ts");
/* harmony import */ var _homepage_dashboard_homepage_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage-dashboard/homepage-dashboard.component */ "./src/app/homepage-dashboard/homepage-dashboard.component.ts");
/* harmony import */ var _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-builder-page/menu-builder-page.component */ "./src/app/menu-builder-page/menu-builder-page.component.ts");







var routes = [
    {
        path: "",
        redirectTo: "app",
        pathMatch: "full"
    },
    {
        path: "app",
        data: {
            nav_menu: 'nav_menu_home',
        },
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: "",
                component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
                children: [
                    {
                        path: "home",
                        component: _homepage_dashboard_homepage_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["HomepageDashboardComponent"]
                    },
                    {
                        path: "settings",
                        loadChildren: "./settings-page/settings-page.module#SettingsPageModule"
                    },
                    {
                        path: "account",
                        loadChildren: "./accounts-page/accounts-page.module#AccountsPageModule",
                        data: {
                            nav_menu: 'nav_menu_account',
                        }
                    },
                    {
                        path: "menus",
                        component: _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_6__["MenuBuilderPageComponent"],
                        data: {
                            nav_menu: 'menu_builder',
                        }
                    },
                ]
            },
            {
                path: "home2",
                component: _alt_homepage_alt_homepage_component__WEBPACK_IMPORTED_MODULE_4__["AltHomepageComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service */ "../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(routerDataManager) {
        this.routerDataManager = routerDataManager;
        this.title = 'webcore-library-tester';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.routerDataManager.trackData("nav_menu");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["RouterDataManagerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _webcore_library_src_lib_webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webcore-library/src/lib/webcore-common/webcore-common.module */ "../webcore-library/src/lib/webcore-common/webcore-common.module.ts");
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webcore-library/src/lib/standard-homepage/standard-homepage.module */ "../webcore-library/src/lib/standard-homepage/standard-homepage.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _alt_homepage_alt_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alt-homepage/alt-homepage.component */ "./src/app/alt-homepage/alt-homepage.component.ts");
/* harmony import */ var _homepage_dashboard_homepage_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage-dashboard/homepage-dashboard.component */ "./src/app/homepage-dashboard/homepage-dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-builder-page/menu-builder-page.component */ "./src/app/menu-builder-page/menu-builder-page.component.ts");
/* harmony import */ var _webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service */ "../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service.ts");
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _alt_homepage_alt_homepage_component__WEBPACK_IMPORTED_MODULE_8__["AltHomepageComponent"],
                _homepage_dashboard_homepage_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["HomepageDashboardComponent"],
                _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_11__["MenuBuilderPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _webcore_library_src_lib_webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_5__["WebcoreCommonModule"],
                _webcore_library_src_lib_standard_homepage_standard_homepage_module__WEBPACK_IMPORTED_MODULE_6__["StandardHomepageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]
            ],
            providers: [_webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_12__["RouterDataManagerService"], _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_13__["StandardHomepageMenuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage-dashboard/homepage-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/homepage-dashboard/homepage-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-card-wrapper {\n  padding: 5px;\n}\n\nmat-card {\n  height: 90%;\n}\n\nmat-icon {\n  font-size: 200px;\n  height: 200px;\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYmNvcmUtbGlicmFyeS10ZXN0ZXIvc3JjL2FwcC9ob21lcGFnZS1kYXNoYm9hcmQvaG9tZXBhZ2UtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvaG9tZXBhZ2UtZGFzaGJvYXJkL2hvbWVwYWdlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jYXJkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/homepage-dashboard/homepage-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/homepage-dashboard/homepage-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <a class=\"dashboard-card-wrapper\" *ngFor=\"let cardLink of cardLinks\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\" routerLink={{cardLink.route}} mat-button>\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>{{ cardLink.name }}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content><mat-icon>{{ cardLink.icon }}</mat-icon></mat-card-content>\n    </mat-card>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage-dashboard/homepage-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/homepage-dashboard/homepage-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: HomepageDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageDashboardComponent", function() { return HomepageDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HomepageDashboardComponent = /** @class */ (function () {
    function HomepageDashboardComponent() {
    }
    HomepageDashboardComponent.prototype.ngOnInit = function () {
        this.cardLinks = [
            {
                name: 'Menu Builder',
                icon: 'playlist_add',
                route: '/app/menus'
            },
            {
                name: 'Animations',
                icon: 'cached',
                route: '/app/settings'
            },
            {
                name: 'Augury',
                icon: 'assessment',
                route: '/app/settings'
            },
            {
                name: 'Settings',
                icon: 'settings',
                route: '/app/settings'
            },
            {
                name: 'Components',
                icon: 'picture_in_picture',
                route: '/app/settings'
            }
        ];
    };
    HomepageDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage-dashboard',
            template: __webpack_require__(/*! ./homepage-dashboard.component.html */ "./src/app/homepage-dashboard/homepage-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./homepage-dashboard.component.css */ "./src/app/homepage-dashboard/homepage-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageDashboardComponent);
    return HomepageDashboardComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wc-standard-homepage class=\"theme-indigo-pink\" [mainMenu]=\"mainMenu\">\n  <wc-standard-homepage-logo>\n    Website Logo\n  </wc-standard-homepage-logo>\n  <router-outlet></router-outlet>\n</wc-standard-homepage>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(standardHomepageMenuService) {
        this.standardHomepageMenuService = standardHomepageMenuService;
        this.sidenavMenu = [
            {
                route: '/app/home',
                icon: 'home',
                name: 'Home'
            },
            {
                route: '/app/favorites',
                icon: 'grade',
                name: 'Favorites'
            }
        ];
        this.mainMenu = [
            {
                route: '/app/settings',
                icon: 'settings',
                name: 'Settings'
            },
            {
                route: '/app/account',
                icon: 'account_circle',
                name: 'Account'
            },
            {
                route: '/app/home2',
                icon: 'home',
                name: 'Alt Home'
            }
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.standardHomepageMenuService.setNavMenu(this.sidenavMenu);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_2__["StandardHomepageMenuService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/menu-builder-page/menu-builder-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/menu-builder-page/menu-builder-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvbWVudS1idWlsZGVyLXBhZ2UvbWVudS1idWlsZGVyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu-builder-page/menu-builder-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/menu-builder-page/menu-builder-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  Name:<br>\n  <input type=\"text\" name=\"name\" value=\"Home\">\n  <br>\n  Icon:<br>\n  <input type=\"text\" name=\"icon\" value=\"home\">\n  Route:<br>\n  <input type=\"text\" name=\"route\" value=\"/app/home\">\n  <br><br>\n  <input type=\"submit\" value=\"Set Menu\">\n</form>\n"

/***/ }),

/***/ "./src/app/menu-builder-page/menu-builder-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/menu-builder-page/menu-builder-page.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuBuilderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBuilderPageComponent", function() { return MenuBuilderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MenuBuilderPageComponent = /** @class */ (function () {
    function MenuBuilderPageComponent() {
    }
    MenuBuilderPageComponent.prototype.ngOnInit = function () {
    };
    MenuBuilderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-builder-page',
            template: __webpack_require__(/*! ./menu-builder-page.component.html */ "./src/app/menu-builder-page/menu-builder-page.component.html"),
            styles: [__webpack_require__(/*! ./menu-builder-page.component.css */ "./src/app/menu-builder-page/menu-builder-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuBuilderPageComponent);
    return MenuBuilderPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andy/IdeaProjects/webcore/webcore-frontend/webcore-library/projects/webcore-library-tester/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map