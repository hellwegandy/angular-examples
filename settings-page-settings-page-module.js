(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-page-settings-page-module"],{

/***/ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/settings/settings/settings.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!../webcore-library/src/lib/settings/settings/settings.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../webcore-library/src/lib/settings/settings-routing.module.ts":
/*!**********************************************************************!*\
  !*** ../webcore-library/src/lib/settings/settings-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "../webcore-library/src/lib/settings/settings/settings.component.ts");




var routes = [
    {
        path: '',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/settings/settings.module.ts":
/*!**************************************************************!*\
  !*** ../webcore-library/src/lib/settings/settings.module.ts ***!
  \**************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "../webcore-library/src/lib/settings/settings/settings.component.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "../webcore-library/src/lib/settings/settings-routing.module.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/settings/settings/settings.component.css":
/*!***************************************************************************!*\
  !*** ../webcore-library/src/lib/settings/settings/settings.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnkvc3JjL2xpYi9zZXR0aW5ncy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../webcore-library/src/lib/settings/settings/settings.component.ts":
/*!**************************************************************************!*\
  !*** ../webcore-library/src/lib/settings/settings/settings.component.ts ***!
  \**************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/settings/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "../webcore-library/src/lib/settings/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings-page/settings-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/settings-page/settings-page.module.ts ***!
  \*******************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_library_src_lib_settings_settings_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/settings/settings.module */ "../webcore-library/src/lib/settings/settings.module.ts");



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _webcore_library_src_lib_settings_settings_module__WEBPACK_IMPORTED_MODULE_2__["SettingsModule"]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-page-settings-page-module.js.map