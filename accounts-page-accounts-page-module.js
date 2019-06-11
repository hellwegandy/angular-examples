(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-page-accounts-page-module"],{

/***/ "../webcore-library/src/lib/accounts/accounts-routing.module.ts":
/*!**********************************************************************!*\
  !*** ../webcore-library/src/lib/accounts/accounts-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts/accounts.component */ "../webcore-library/src/lib/accounts/accounts/accounts.component.ts");




var routes = [
    {
        path: '',
        component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"]
    }
];
var AccountsRoutingModule = /** @class */ (function () {
    function AccountsRoutingModule() {
    }
    AccountsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountsRoutingModule);
    return AccountsRoutingModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/accounts/accounts.module.ts":
/*!**************************************************************!*\
  !*** ../webcore-library/src/lib/accounts/accounts.module.ts ***!
  \**************************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts-routing.module */ "../webcore-library/src/lib/accounts/accounts-routing.module.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts/accounts.component */ "../webcore-library/src/lib/accounts/accounts/accounts.component.ts");





var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__["AccountsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]
            ]
        })
    ], AccountsModule);
    return AccountsModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/accounts/accounts/accounts.component.css":
/*!***************************************************************************!*\
  !*** ../webcore-library/src/lib/accounts/accounts/accounts.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnkvc3JjL2xpYi9hY2NvdW50cy9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../webcore-library/src/lib/accounts/accounts/accounts.component.html":
/*!****************************************************************************!*\
  !*** ../webcore-library/src/lib/accounts/accounts/accounts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accounts works!\n</p>\n"

/***/ }),

/***/ "../webcore-library/src/lib/accounts/accounts/accounts.component.ts":
/*!**************************************************************************!*\
  !*** ../webcore-library/src/lib/accounts/accounts/accounts.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "../webcore-library/src/lib/accounts/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.css */ "../webcore-library/src/lib/accounts/accounts/accounts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/accounts-page/accounts-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts-page/accounts-page.module.ts ***!
  \*******************************************************/
/*! exports provided: AccountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsPageModule", function() { return AccountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_library_src_lib_accounts_accounts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/accounts/accounts.module */ "../webcore-library/src/lib/accounts/accounts.module.ts");



var AccountsPageModule = /** @class */ (function () {
    function AccountsPageModule() {
    }
    AccountsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _webcore_library_src_lib_accounts_accounts_module__WEBPACK_IMPORTED_MODULE_2__["AccountsModule"]
            ]
        })
    ], AccountsPageModule);
    return AccountsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=accounts-page-accounts-page-module.js.map