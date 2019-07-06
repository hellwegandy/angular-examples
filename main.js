(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/components/flipper/flipper.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!../webcore-library/src/lib/components/flipper/flipper.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-container\">\n  <div class=\"flipper\" [@flip]=\"flipSide\">\n    <div class=\"front\" fxFlex=\"100\">\n      <ng-content select=\"wc-flipper-front\"></ng-content>\n    </div>\n    <div class=\"back\">\n      <ng-content select=\"wc-flipper-back\"></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"homepage-container\">\n  <mat-toolbar color=\"primary\" *ngIf=\"showHeader\">\n    <span fxFlex=\"20\">\n      <ng-content select=\"wc-standard-homepage-logo\"></ng-content>\n    </span>\n    <span fxFlex></span>\n    <button mat-flat-button>Sign In</button>\n    <button mat-button [matMenuTriggerFor]=\"mainMenu\"><mat-icon>menu</mat-icon></button>\n    <mat-menu #mainMenu=\"matMenu\" class=\"theme-deeppurple-amber\">\n      <div>\n        <button *ngFor=\"let item of mainMenuItems\" class=\"menu-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}><span>{{ item.name }}</span><mat-icon *ngIf=\"item.icon\">{{ item.icon }}</mat-icon></button>\n      </div>\n      <div *ngIf=\"showNav\" ngStyle.gt-sm=\"display: none\">\n        <div *ngIf=\"flipSide == 'front'\">\n          <hr>\n          <button *ngFor=\"let item of navMenus['front']\" class=\"menu-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}><span>{{ item.name }}</span><mat-icon *ngIf=\"item.icon\">{{ item.icon }}</mat-icon></button>\n        </div>\n        <div *ngIf=\"flipSide == 'back'\">\n          <hr>\n          <button *ngFor=\"let item of navMenus['back']\" class=\"menu-item\" [class.active-route]=\"isActiveRoute(item)\" mat-menu-item routerLink={{item.route}}><span>{{ item.name }}</span><mat-icon *ngIf=\"item.icon\">{{ item.icon }}</mat-icon></button>\n        </div>\n      </div>\n    </mat-menu>\n  </mat-toolbar>\n  <mat-sidenav-container>\n    <mat-sidenav mode=\"side\" opened *ngIf=\"showNav\" ngStyle.lt-md=\"display: none\">\n      <wc-flipper [flipSide]=\"flipSide\">\n        <wc-flipper-front>\n          <div *ngFor=\"let item of navMenus['front']\">\n            <a class=\"nav-item\" [class.active-route]=\"item['active']\" mat-menu-item routerLink={{item.route}} fxLayout=\"column\">\n              <mat-icon class=\"nav-item-icon\">{{ item.icon }}</mat-icon>\n              <span class=\"nav-item-name\">{{item.name | ellipsis: 9}}</span>\n            </a>\n          </div>\n        </wc-flipper-front>\n        <wc-flipper-back>\n          <div *ngFor=\"let item of navMenus['back']\">\n            <a class=\"nav-item\" [class.active-route]=\"item['active']\" mat-menu-item routerLink={{item.route}} fxLayout=\"column\">\n              <mat-icon class=\"nav-item-icon\">{{ item.icon }}</mat-icon>\n              <span class=\"nav-item-name\">{{item.name | ellipsis: 9}}</span>\n            </a>\n          </div>\n        </wc-flipper-back>\n      </wc-flipper>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <ng-content></ng-content>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/alt-homepage/alt-homepage.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/alt-homepage/alt-homepage.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wc-standard-homepage class=\"theme-deeppurple-amber\">\n  <wc-standard-homepage-logo>\n    <b>Alternate Logo</b>\n  </wc-standard-homepage-logo>\n  Welcome to Alternate Home!\n</wc-standard-homepage>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/animations-page/animations-page.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/animations-page/animations-page.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          openCloseHorizontal\n        </mat-card-title>\n        <mat-card-subtitle>\n          <span *ngIf=\"isOpenWidth\">Open</span>\n          <span *ngIf=\"!isOpenWidth\">Closed</span>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div [@openCloseHorizontal]=\"isOpenWidth? 'open' : 'closed'\" style=\"height: 100px\" class=\"light-blue\"></div>\n        <button mat-menu-item (click)=\"toggleOpenWidth()\">\n          <mat-icon>cached</mat-icon>\n        </button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          openCloseVertical\n        </mat-card-title>\n        <mat-card-subtitle>\n          <span *ngIf=\"isOpenHeight\">Open</span>\n          <span *ngIf=\"!isOpenHeight\">Closed</span>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <div [@openCloseVertical]=\"{value: isOpenHeight ? 'open' : 'closed', params:{openHeight: '100px'}}\" class=\"light-blue\"></div>\n        </div>\n        <button mat-menu-item (click)=\"toggleOpenHeight()\">\n          <mat-icon>cached</mat-icon>\n        </button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          slideInOut\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <div [@slideInOut] *ngFor=\"let item of slideInOut\" class=\"slideInOutItem light-blue\">{{item}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <button mat-menu-item (click)=\"addSlideInOut()\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button mat-menu-item (click)=\"removeSlideInOut()\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          slideIn\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <div [@slideIn] *ngFor=\"let item of slideIn\" class=\"slideInOutItem light-blue\">{{item}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <button mat-menu-item (click)=\"addSlideIn()\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button mat-menu-item (click)=\"removeSlideIn()\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          growIn\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <div [@growIn] *ngFor=\"let item of growIn\" class=\"slideInOutItem light-blue\">{{item}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <button mat-menu-item (click)=\"addGrowIn()\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button mat-menu-item (click)=\"removeGrowIn()\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          growInShrinkOut\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <div [@growInShrinkOut] *ngFor=\"let item of growInShrinkOut\" class=\"slideInOutItem light-blue\">{{item}}</div>\n        </div>\n        <div fxLayout=\"row\">\n          <button mat-menu-item (click)=\"addGrowInShrinkOut()\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button mat-menu-item (click)=\"removeGrowInShrinkOut()\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          Flip\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div [@flip]=\"flip\" style=\"height: 100px\" class=\"light-blue\">{{flip}}</div>\n        <div fxLayout=\"row\">\n          <button mat-menu-item (click)=\"toggleFlip()\">\n            <mat-icon>cached</mat-icon>\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/app.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components-page/components-page.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/components-page/components-page.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n\n  <div class=\"card-wrapper\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          Flipper\n        </mat-card-title>\n        <mat-card-subtitle>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <wc-flipper [flipSide]=\"flipSide\">\n          <wc-flipper-front>\n            <div class=\"flip-front\" style=\"height: 100px;\" fxFlex=\"100\">\n              Front\n            </div>\n          </wc-flipper-front>\n          <wc-flipper-back>\n            <div class=\"flip-back\"  style=\"height: 100px;\" fxFlex=\"100\">\n              Back\n            </div>\n          </wc-flipper-back>\n        </wc-flipper>\n        <button mat-menu-item (click)=\"flip()\">\n          <mat-icon>cached</mat-icon>\n        </button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/homepage-dashboard/homepage-dashboard.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/homepage-dashboard/homepage-dashboard.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <a class=\"dashboard-card-wrapper\" *ngFor=\"let cardLink of cardLinks\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"25\" routerLink={{cardLink.route}} mat-button>\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>{{ cardLink.name }}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content><mat-icon>{{ cardLink.icon }}</mat-icon></mat-card-content>\n    </mat-card>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wc-standard-homepage class=\"theme-indigo-pink\">\n  <wc-standard-homepage-logo>\n    Website Logo\n  </wc-standard-homepage-logo>\n  <router-outlet></router-outlet>\n</wc-standard-homepage>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/menu-builder-page/menu-builder-page.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/node_modules/raw-loader!./src/app/menu-builder-page/menu-builder-page.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" fxLayout=\"column\">\n  <mat-card class=\"new-nav-item\" fxLayout=\"row wrap\" [@slideIn] *ngFor=\"let item of menuItems\" fxFlex=\"100\">\n    <mat-form-field fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n      <input matInput placeholder=\"name\" [(ngModel)]=\"item.name\">\n    </mat-form-field>\n    <mat-form-field fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n      <input matInput placeholder=\"icon\" [(ngModel)]=\"item.icon\">\n    </mat-form-field>\n    <mat-form-field fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n      <input matInput placeholder=\"route\" [(ngModel)]=\"item.route\">\n    </mat-form-field>\n  </mat-card>\n  <button mat-raised-button color=\"primary\" (click)=\"addNewItem()\"><mat-icon>add</mat-icon></button>\n  <button mat-button (click)=\"saveMenu()\">Save</button>\n  <button mat-button (click)=\"resetMenu()\" [routerLink]=\"'/app/home'\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../webcore-library/src/lib/animations/webcore-animations.ts":
/*!*******************************************************************!*\
  !*** ../webcore-library/src/lib/animations/webcore-animations.ts ***!
  \*******************************************************************/
/*! exports provided: openCloseHorizontal, openCloseVertical, slideInOut, slideIn, growIn, growInShrinkOut, flip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseHorizontal", function() { return openCloseHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseVertical", function() { return openCloseVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOut", function() { return slideInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growIn", function() { return growIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growInShrinkOut", function() { return growInShrinkOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");

var openCloseHorizontal = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openCloseHorizontal', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '{{openWidth}}', overflow: 'hidden'
    }), { params: { openWidth: '100%' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '{{closedWidth}}', overflow: 'hidden'
    }), { params: { closedWidth: '0' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
    ]),
]);
var openCloseVertical = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openCloseVertical', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{openHeight}}', overflow: 'hidden'
    }), { params: { openHeight: '100%' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{closedHeight}}', overflow: 'hidden'
    }), { params: { closedHeight: '0' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
    ]),
]);
var slideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);
var slideIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
    ])
]);
var growIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('growIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden' }))
    ])
]);
var growInShrinkOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('growInShrinkOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden' }))
    ])
]);
var flip = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flip', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('front', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'rotateY(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('back', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'rotateY(180deg)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')
    ])
]);


/***/ }),

/***/ "../webcore-library/src/lib/components/flipper/flipper.component.scss":
/*!****************************************************************************!*\
  !*** ../webcore-library/src/lib/components/flipper/flipper.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flipper {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.front {\n  z-index: 2;\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n\n.back {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvSWRlYVByb2plY3RzL3B5dGhvbi93ZWJjb3JlL3dlYmNvcmUtZnJvbnRlbmQvd2ViY29yZS1saWJyYXJ5L3Byb2plY3RzL3dlYmNvcmUtbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvZmxpcHBlci9mbGlwcGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViY29yZS1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9mbGlwcGVyL2ZsaXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3dlYmNvcmUtbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvZmxpcHBlci9mbGlwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsaXAtY29udGFpbmVyIHtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLy8gc2V0IHRoZSBwZXJzcGVjdGl2ZSBzbyBldmVyeXRoaW5nIHJvdGF0ZXMgY29uc2lzdGVudGx5XG59XG5cbi5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgLy8gcHJlc2VydmUgM2Qgd2hlbiByb3RhdGluZ1xufVxuXG4uZnJvbnQsIC5iYWNrIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBoaWRlIHRoZSBiYWNrIG9mIHRoZSBwYW5lc1xufVxuXG4uZnJvbnQge1xuICB6LWluZGV4OiAyOyAvLyBwbGFjZSBmcm9udCBhYm92ZSBiYWNrXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgLy8gc3RhcnQgYXQgMCBkZWdcbn1cblxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8vIHVzZSBhYnNvbHV0ZSBwb3NpdGlvbiB0byBtYXRjaCBmcm9udCBwYW5lIHNpemluZ1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyAvLyBzdGFydCByb3RhdGVkIDE4MCBkZWdcbn1cbiIsIi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250LCAuYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZyb250IHtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn0iXX0= */"

/***/ }),

/***/ "../webcore-library/src/lib/components/flipper/flipper.component.ts":
/*!**************************************************************************!*\
  !*** ../webcore-library/src/lib/components/flipper/flipper.component.ts ***!
  \**************************************************************************/
/*! exports provided: FlipperFront, FlipperBack, FlipperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipperFront", function() { return FlipperFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipperBack", function() { return FlipperBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipperComponent", function() { return FlipperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/webcore-animations */ "../webcore-library/src/lib/animations/webcore-animations.ts");



var FlipperFront = /** @class */ (function () {
    function FlipperFront() {
    }
    FlipperFront = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-flipper-front',
            template: '<ng-content></ng-content>'
        })
    ], FlipperFront);
    return FlipperFront;
}());

var FlipperBack = /** @class */ (function () {
    function FlipperBack() {
    }
    FlipperBack = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-flipper-back',
            template: '<ng-content></ng-content>'
        })
    ], FlipperBack);
    return FlipperBack;
}());

var FlipperComponent = /** @class */ (function () {
    function FlipperComponent() {
        this.flipSide = 'front';
    }
    FlipperComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FlipperComponent.prototype, "flipSide", void 0);
    FlipperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-flipper',
            animations: [_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["flip"]],
            template: __webpack_require__(/*! raw-loader!./flipper.component.html */ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/components/flipper/flipper.component.html"),
            styles: [__webpack_require__(/*! ./flipper.component.scss */ "../webcore-library/src/lib/components/flipper/flipper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlipperComponent);
    return FlipperComponent;
}());



/***/ }),

/***/ "../webcore-library/src/lib/components/flipper/flipper.module.ts":
/*!***********************************************************************!*\
  !*** ../webcore-library/src/lib/components/flipper/flipper.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlipperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipperModule", function() { return FlipperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flipper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipper.component */ "../webcore-library/src/lib/components/flipper/flipper.component.ts");




var FlipperModule = /** @class */ (function () {
    function FlipperModule() {
    }
    FlipperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperComponent"], _flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperFront"], _flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperBack"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperComponent"], _flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperFront"], _flipper_component__WEBPACK_IMPORTED_MODULE_3__["FlipperBack"]]
        })
    ], FlipperModule);
    return FlipperModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis-pipe.module.ts":
/*!******************************************************************************!*\
  !*** ../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis-pipe.module.ts ***!
  \******************************************************************************/
/*! exports provided: EllipsisPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipeModule", function() { return EllipsisPipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsis.pipe */ "../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis.pipe.ts");



var EllipsisPipeModule = /** @class */ (function () {
    function EllipsisPipeModule() {
    }
    EllipsisPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["EllipsisPipe"]],
            exports: [_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["EllipsisPipe"]]
        })
    ], EllipsisPipeModule);
    return EllipsisPipeModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis.pipe.ts":
/*!***********************************************************************!*\
  !*** ../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "../webcore-library/src/lib/services/menu-service/menu.service.ts":
/*!************************************************************************!*\
  !*** ../webcore-library/src/lib/services/menu-service/menu.service.ts ***!
  \************************************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webcore-http/webcore-http.service */ "../webcore-library/src/lib/webcore-http/webcore-http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var MenuService = /** @class */ (function () {
    function MenuService(webcoreHttp) {
        this.webcoreHttp = webcoreHttp;
    }
    MenuService.prototype.getMenu = function (menuName) {
        return this.webcoreHttp.get('menus/' + menuName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (menu) { return menu['items']; }));
    };
    MenuService.ctorParameters = function () { return [
        { type: _webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_2__["WebcoreHttpService"] }
    ]; };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_2__["WebcoreHttpService"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

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
        this.dataValues = {};
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
                _this.dataValues = _this.traverseRoutesForData(_this.route);
                console.log(_this.dataValues);
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
    RouterDataManagerService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var StandardHomepageMenuService = /** @class */ (function () {
    function StandardHomepageMenuService() {
        this.navMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.mainMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    StandardHomepageMenuService.prototype.setNavMenu = function (menu) {
        this.navMenu.next(JSON.parse(JSON.stringify(menu)));
    };
    StandardHomepageMenuService.prototype.getNavMenuValue = function () {
        return JSON.parse(JSON.stringify(this.navMenu.getValue()));
    };
    StandardHomepageMenuService.prototype.getNavMenuObservable = function () {
        return this.navMenu.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (menu) { return JSON.parse(JSON.stringify(menu)); }));
    };
    StandardHomepageMenuService.prototype.setMainMenu = function (menu) {
        this.mainMenu.next(JSON.parse(JSON.stringify(menu)));
    };
    StandardHomepageMenuService.prototype.getMainMenuObservable = function () {
        return this.mainMenu.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (menu) { return JSON.parse(JSON.stringify(menu)); }));
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
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_flipper_flipper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/flipper/flipper.module */ "../webcore-library/src/lib/components/flipper/flipper.module.ts");
/* harmony import */ var _pipes_ellipsis_pipe_ellipsis_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/ellipsis-pipe/ellipsis-pipe.module */ "../webcore-library/src/lib/pipes/ellipsis-pipe/ellipsis-pipe.module.ts");
/* harmony import */ var _standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");











var StandardHomepageModule = /** @class */ (function () {
    function StandardHomepageModule() {
    }
    StandardHomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageComponent"], _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageLogo"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_4__["WebcoreCommonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _components_flipper_flipper_module__WEBPACK_IMPORTED_MODULE_8__["FlipperModule"],
                _pipes_ellipsis_pipe_ellipsis_pipe_module__WEBPACK_IMPORTED_MODULE_9__["EllipsisPipeModule"]
            ],
            providers: [_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_10__["StandardHomepageMenuService"]],
            exports: [
                _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageComponent"],
                _standard_homepage_standard_homepage_component__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageLogo"]
            ]
        })
    ], StandardHomepageModule);
    return StandardHomepageModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.scss":
/*!*******************************************************************************************************!*\
  !*** ../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage-container {\n  height: 100%;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 57px;\n  text-align: center;\n}\n\n.menu-item span {\n  vertical-align: middle;\n}\n\n.menu-item mat-icon {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.nav-item {\n  padding: 0;\n}\n\n.nav-item mat-icon {\n  margin-top: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.nav-item-name {\n  overflow: hidden;\n  margin-top: -16px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.active-route {\n  cursor: not-allowed;\n  pointer-events: none;\n  background-color: var(--accent) !important;\n}\n\nhr {\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvSWRlYVByb2plY3RzL3B5dGhvbi93ZWJjb3JlL3dlYmNvcmUtZnJvbnRlbmQvd2ViY29yZS1saWJyYXJ5L3Byb2plY3RzL3dlYmNvcmUtbGlicmFyeS9zcmMvbGliL3N0YW5kYXJkLWhvbWVwYWdlL3N0YW5kYXJkLWhvbWVwYWdlL3N0YW5kYXJkLWhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViY29yZS1saWJyYXJ5L3NyYy9saWIvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2Uvc3RhbmRhcmQtaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3dlYmNvcmUtbGlicmFyeS9zcmMvbGliL3N0YW5kYXJkLWhvbWVwYWdlL3N0YW5kYXJkLWhvbWVwYWdlL3N0YW5kYXJkLWhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiA1N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWl0ZW0gc3BhbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZW51LWl0ZW0gbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2LWl0ZW0gIG1hdC1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubmF2LWl0ZW0tbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUtcm91dGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50XG59XG5cbmhyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KVxufVxuIiwiLmhvbWVwYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiA1N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWl0ZW0gc3BhbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZW51LWl0ZW0gbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2LWl0ZW0gbWF0LWljb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uYXYtaXRlbS1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGl2ZS1yb3V0ZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn0iXX0= */"

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
/* harmony import */ var _animations_webcore_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/webcore-animations */ "../webcore-library/src/lib/animations/webcore-animations.ts");





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
        this.navMenus = {
            'front': [],
            'back': []
        };
        this.flipSide = 'front';
    }
    StandardHomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNav = true;
        this.showHeader = true;
        this.currentRoute = this.router.url;
        this.setAndFlipMenu(this.navMenus[this.flipSide]);
        this.router.events.subscribe(function (navEvent) {
            if (navEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.currentRoute = navEvent.url;
                _this.setAndFlipMenu(_this.navMenus[_this.flipSide]);
            }
        });
        this.standardHomepageMenuService.getNavMenuObservable().subscribe(function (menuItems) {
            _this.setAndFlipMenu(menuItems);
        });
        this.standardHomepageMenuService.getMainMenuObservable().subscribe(function (menuItems) {
            _this.mainMenuItems = menuItems;
        });
    };
    StandardHomepageComponent.prototype.setAndFlipMenu = function (menu) {
        var nextSide = this.flipSide == 'front' ? 'back' : 'front';
        this.navMenus[nextSide] = this.markActiveRoute(menu);
        this.flipSide = nextSide;
    };
    StandardHomepageComponent.prototype.isActiveRoute = function (item) {
        return this.currentRoute === item.route;
    };
    StandardHomepageComponent.prototype.markActiveRoute = function (items) {
        var menu = JSON.parse(JSON.stringify(items));
        for (var _i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
            var item = menu_1[_i];
            item['active'] = this.currentRoute == item.route;
        }
        return menu;
    };
    StandardHomepageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(StandardHomepageLogo, { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", StandardHomepageLogo)
    ], StandardHomepageComponent.prototype, "_logo", void 0);
    StandardHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-standard-homepage',
            animations: [_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_4__["flip"]],
            template: __webpack_require__(/*! raw-loader!./standard-homepage.component.html */ "../../node_modules/raw-loader/index.js!../webcore-library/src/lib/standard-homepage/standard-homepage/standard-homepage.component.html"),
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");












var WebcoreCommonModule = /** @class */ (function () {
    function WebcoreCommonModule() {
    }
    WebcoreCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
            ]
        })
    ], WebcoreCommonModule);
    return WebcoreCommonModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/webcore-http/webcore-http.module.ts":
/*!**********************************************************************!*\
  !*** ../webcore-library/src/lib/webcore-http/webcore-http.module.ts ***!
  \**********************************************************************/
/*! exports provided: WebcoreHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcoreHttpModule", function() { return WebcoreHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcore-http.service */ "../webcore-library/src/lib/webcore-http/webcore-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");




var WebcoreHttpModule = /** @class */ (function () {
    function WebcoreHttpModule() {
    }
    WebcoreHttpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _webcore_http_service__WEBPACK_IMPORTED_MODULE_2__["WebcoreHttpService"]
            ]
        })
    ], WebcoreHttpModule);
    return WebcoreHttpModule;
}());



/***/ }),

/***/ "../webcore-library/src/lib/webcore-http/webcore-http.service.ts":
/*!***********************************************************************!*\
  !*** ../webcore-library/src/lib/webcore-http/webcore-http.service.ts ***!
  \***********************************************************************/
/*! exports provided: WebcoreHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcoreHttpService", function() { return WebcoreHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var WebcoreHttpService = /** @class */ (function () {
    function WebcoreHttpService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:4200/api/';
    }
    WebcoreHttpService.prototype.setApiUrl = function (url) {
        this.API_URL = url;
    };
    WebcoreHttpService.prototype.get = function (route) {
        return this.http.get(this.API_URL + route);
    };
    WebcoreHttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WebcoreHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebcoreHttpService);
    return WebcoreHttpService;
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
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/services/menu-service/menu.service */ "../webcore-library/src/lib/services/menu-service/menu.service.ts");
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");




var AltHomepageComponent = /** @class */ (function () {
    function AltHomepageComponent(standardHomepageMenuService, menuService) {
        this.standardHomepageMenuService = standardHomepageMenuService;
        this.menuService = menuService;
    }
    AltHomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenu('nav_menu').subscribe(function (menu) { return _this.standardHomepageMenuService.setNavMenu(menu); });
        this.menuService.getMenu('main_menu').subscribe(function (menu) { return _this.standardHomepageMenuService.setMainMenu(menu); });
    };
    AltHomepageComponent.ctorParameters = function () { return [
        { type: _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"] },
        { type: _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    AltHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alt-homepage',
            template: __webpack_require__(/*! raw-loader!./alt-homepage.component.html */ "../../node_modules/raw-loader/index.js!./src/app/alt-homepage/alt-homepage.component.html"),
            styles: [__webpack_require__(/*! ./alt-homepage.component.scss */ "./src/app/alt-homepage/alt-homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"], _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], AltHomepageComponent);
    return AltHomepageComponent;
}());



/***/ }),

/***/ "./src/app/animations-page/animations-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/animations-page/animations-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slideInOutItem {\n  text-align: center;\n  border-radius: 3px;\n}\n\n.light-blue {\n  background-color: var(--primary);\n}\n\n.card-wrapper {\n  padding: 5px 5px 5px 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYmNvcmUtbGlicmFyeS10ZXN0ZXIvc3JjL2FwcC9hbmltYXRpb25zLXBhZ2UvYW5pbWF0aW9ucy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InByb2plY3RzL3dlYmNvcmUtbGlicmFyeS10ZXN0ZXIvc3JjL2FwcC9hbmltYXRpb25zLXBhZ2UvYW5pbWF0aW9ucy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVJbk91dEl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmxpZ2h0LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmNhcmQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/animations-page/animations-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/animations-page/animations-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AnimationsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsPageComponent", function() { return AnimationsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/animations/webcore-animations */ "../webcore-library/src/lib/animations/webcore-animations.ts");



var AnimationsPageComponent = /** @class */ (function () {
    function AnimationsPageComponent() {
        this.isOpenWidth = true;
        this.isOpenHeight = true;
        this.slideInOut = [];
        this.slideIn = [];
        this.growIn = [];
        this.growInShrinkOut = [];
        this.flip = 'front';
    }
    AnimationsPageComponent.prototype.ngOnInit = function () {
    };
    // openCloseHorizontal
    AnimationsPageComponent.prototype.toggleOpenWidth = function () {
        this.isOpenWidth = !this.isOpenWidth;
    };
    // openCloseVertical
    AnimationsPageComponent.prototype.toggleOpenHeight = function () {
        this.isOpenHeight = !this.isOpenHeight;
    };
    // end
    // slideInOut
    AnimationsPageComponent.prototype.addSlideInOut = function () {
        this.slideInOut.push(this.slideInOut.length);
    };
    AnimationsPageComponent.prototype.removeSlideInOut = function () {
        this.slideInOut.pop();
    };
    // end
    // slideIn
    AnimationsPageComponent.prototype.addSlideIn = function () {
        this.slideIn.push(this.slideIn.length);
    };
    AnimationsPageComponent.prototype.removeSlideIn = function () {
        this.slideIn.pop();
    };
    // end
    // growIn
    AnimationsPageComponent.prototype.addGrowIn = function () {
        this.growIn.push(this.growIn.length);
    };
    AnimationsPageComponent.prototype.removeGrowIn = function () {
        this.growIn.pop();
    };
    // end
    // growInShrinkOut
    AnimationsPageComponent.prototype.addGrowInShrinkOut = function () {
        this.growInShrinkOut.push(this.growInShrinkOut.length);
    };
    AnimationsPageComponent.prototype.removeGrowInShrinkOut = function () {
        this.growInShrinkOut.pop();
    };
    // end
    // flip
    AnimationsPageComponent.prototype.toggleFlip = function () {
        this.flip = this.flip == 'front' ? 'back' : 'front';
    };
    AnimationsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'animations-page',
            animations: [
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["openCloseVertical"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["openCloseHorizontal"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOut"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["slideIn"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["flip"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["growIn"],
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_2__["growInShrinkOut"]
            ],
            template: __webpack_require__(/*! raw-loader!./animations-page.component.html */ "../../node_modules/raw-loader/index.js!./src/app/animations-page/animations-page.component.html"),
            styles: [__webpack_require__(/*! ./animations-page.component.css */ "./src/app/animations-page/animations-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimationsPageComponent);
    return AnimationsPageComponent;
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
/* harmony import */ var _animations_page_animations_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations-page/animations-page.component */ "./src/app/animations-page/animations-page.component.ts");
/* harmony import */ var _components_page_components_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components-page/components-page.component */ "./src/app/components-page/components-page.component.ts");









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
                        path: "animations",
                        component: _animations_page_animations_page_component__WEBPACK_IMPORTED_MODULE_7__["AnimationsPageComponent"]
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
                        },
                    },
                    {
                        path: "components",
                        component: _components_page_components_page_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsPageComponent"]
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
/* harmony import */ var _webcore_library_src_lib_webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webcore-library/src/lib/webcore-http/webcore-http.service */ "../webcore-library/src/lib/webcore-http/webcore-http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(routerDataManager, webcoreHttp) {
        this.routerDataManager = routerDataManager;
        this.webcoreHttp = webcoreHttp;
        this.title = 'webcore-library-tester';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.webcoreHttp.setApiUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl);
        this.routerDataManager.trackData("nav_menu");
    };
    AppComponent.ctorParameters = function () { return [
        { type: _webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["RouterDataManagerService"] },
        { type: _webcore_library_src_lib_webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_3__["WebcoreHttpService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["RouterDataManagerService"], _webcore_library_src_lib_webcore_http_webcore_http_service__WEBPACK_IMPORTED_MODULE_3__["WebcoreHttpService"]])
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
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-builder-page/menu-builder-page.component */ "./src/app/menu-builder-page/menu-builder-page.component.ts");
/* harmony import */ var _webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service */ "../webcore-library/src/lib/services/router-data-manager-service/router-data-manager.service.ts");
/* harmony import */ var _animations_page_animations_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animations-page/animations-page.component */ "./src/app/animations-page/animations-page.component.ts");
/* harmony import */ var _components_page_components_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components-page/components-page.component */ "./src/app/components-page/components-page.component.ts");
/* harmony import */ var _webcore_library_src_lib_components_flipper_flipper_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webcore-library/src/lib/components/flipper/flipper.module */ "../webcore-library/src/lib/components/flipper/flipper.module.ts");
/* harmony import */ var _webcore_library_src_lib_webcore_http_webcore_http_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webcore-library/src/lib/webcore-http/webcore-http.module */ "../webcore-library/src/lib/webcore-http/webcore-http.module.ts");
/* harmony import */ var _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webcore-library/src/lib/services/menu-service/menu.service */ "../webcore-library/src/lib/services/menu-service/menu.service.ts");


















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
                _menu_builder_page_menu_builder_page_component__WEBPACK_IMPORTED_MODULE_11__["MenuBuilderPageComponent"],
                _animations_page_animations_page_component__WEBPACK_IMPORTED_MODULE_13__["AnimationsPageComponent"],
                _components_page_components_page_component__WEBPACK_IMPORTED_MODULE_14__["ComponentsPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _webcore_library_src_lib_webcore_common_webcore_common_module__WEBPACK_IMPORTED_MODULE_5__["WebcoreCommonModule"],
                _webcore_library_src_lib_webcore_http_webcore_http_module__WEBPACK_IMPORTED_MODULE_16__["WebcoreHttpModule"],
                _webcore_library_src_lib_standard_homepage_standard_homepage_module__WEBPACK_IMPORTED_MODULE_6__["StandardHomepageModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _webcore_library_src_lib_components_flipper_flipper_module__WEBPACK_IMPORTED_MODULE_15__["FlipperModule"]
            ],
            providers: [_webcore_library_src_lib_services_router_data_manager_service_router_data_manager_service__WEBPACK_IMPORTED_MODULE_12__["RouterDataManagerService"], _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_17__["MenuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components-page/components-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components-page/components-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip-front {\n  background-color: var(--primary);\n}\n\n.flip-back {\n  background-color: var(--accent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYmNvcmUtbGlicmFyeS10ZXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzLXBhZ2UvY29tcG9uZW50cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoicHJvamVjdHMvd2ViY29yZS1saWJyYXJ5LXRlc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMtcGFnZS9jb21wb25lbnRzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlwLWZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5mbGlwLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components-page/components-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components-page/components-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ComponentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageComponent", function() { return ComponentsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ComponentsPageComponent = /** @class */ (function () {
    function ComponentsPageComponent() {
        this.flipSide = 'front';
    }
    ComponentsPageComponent.prototype.ngOnInit = function () {
    };
    ComponentsPageComponent.prototype.flip = function () {
        this.flipSide = this.flipSide == 'front' ? 'back' : 'front';
    };
    ComponentsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'components-page',
            template: __webpack_require__(/*! raw-loader!./components-page.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components-page/components-page.component.html"),
            styles: [__webpack_require__(/*! ./components-page.component.css */ "./src/app/components-page/components-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentsPageComponent);
    return ComponentsPageComponent;
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
/* harmony import */ var _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/services/menu-service/menu.service */ "../webcore-library/src/lib/services/menu-service/menu.service.ts");



var HomepageDashboardComponent = /** @class */ (function () {
    function HomepageDashboardComponent(menuService) {
        this.menuService = menuService;
    }
    HomepageDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenu('dashboard').subscribe(function (menu) { return _this.cardLinks = menu; });
    };
    HomepageDashboardComponent.ctorParameters = function () { return [
        { type: _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    HomepageDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage-dashboard',
            template: __webpack_require__(/*! raw-loader!./homepage-dashboard.component.html */ "../../node_modules/raw-loader/index.js!./src/app/homepage-dashboard/homepage-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./homepage-dashboard.component.css */ "./src/app/homepage-dashboard/homepage-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
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
/* harmony import */ var _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/services/menu-service/menu.service */ "../webcore-library/src/lib/services/menu-service/menu.service.ts");
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(standardHomepageMenuService, menuService) {
        this.standardHomepageMenuService = standardHomepageMenuService;
        this.menuService = menuService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenu('nav_menu').subscribe(function (menu) { return _this.standardHomepageMenuService.setNavMenu(menu); });
        this.menuService.getMenu('main_menu').subscribe(function (menu) { return _this.standardHomepageMenuService.setMainMenu(menu); });
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"] },
        { type: _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "../../node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_3__["StandardHomepageMenuService"], _webcore_library_src_lib_services_menu_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
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

module.exports = "mat-form-field {\n\n}\n\n.new-nav-item {\n  padding: 10px 10px 0 5px;\n  margin: 10px 10px 0 10px;\n}\n\n.new-nav-item mat-form-field {\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYmNvcmUtbGlicmFyeS10ZXN0ZXIvc3JjL2FwcC9tZW51LWJ1aWxkZXItcGFnZS9tZW51LWJ1aWxkZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9qZWN0cy93ZWJjb3JlLWxpYnJhcnktdGVzdGVyL3NyYy9hcHAvbWVudS1idWlsZGVyLXBhZ2UvbWVudS1idWlsZGVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcblxufVxuXG4ubmV3LW5hdi1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgNXB4O1xuICBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XG59XG5cbi5uZXctbmF2LWl0ZW0gbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service */ "../webcore-library/src/lib/standard-homepage/standard-homepage-menu.service.ts");
/* harmony import */ var _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webcore-library/src/lib/animations/webcore-animations */ "../webcore-library/src/lib/animations/webcore-animations.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var MenuBuilderPageComponent = /** @class */ (function () {
    function MenuBuilderPageComponent(standardHomepageMenuService) {
        this.standardHomepageMenuService = standardHomepageMenuService;
        this.menuItems = [];
    }
    MenuBuilderPageComponent.prototype.ngOnInit = function () {
        this.resetMenu();
    };
    MenuBuilderPageComponent.prototype.addNewItem = function () {
        this.menuItems.push({
            name: '',
            icon: '',
            route: ''
        });
    };
    MenuBuilderPageComponent.prototype.saveMenu = function () {
        if (this.validateMenu()) {
            this.standardHomepageMenuService.setNavMenu(this.menuItems);
            this.resetMenu();
        }
        else {
            alert('Name or icon missing. Please correct and save again.');
        }
    };
    MenuBuilderPageComponent.prototype.resetMenu = function () {
        var _this = this;
        this.standardHomepageMenuService.getNavMenuObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (menu) { return menu.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (menu) {
            return _this.menuItems = menu;
        });
    };
    MenuBuilderPageComponent.prototype.validateMenu = function () {
        for (var _i = 0, _a = this.menuItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.name || !item.icon) {
                return false;
            }
        }
        return true;
    };
    MenuBuilderPageComponent.ctorParameters = function () { return [
        { type: _webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_2__["StandardHomepageMenuService"] }
    ]; };
    MenuBuilderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-builder-page',
            animations: [
                _webcore_library_src_lib_animations_webcore_animations__WEBPACK_IMPORTED_MODULE_3__["slideIn"]
            ],
            template: __webpack_require__(/*! raw-loader!./menu-builder-page.component.html */ "../../node_modules/raw-loader/index.js!./src/app/menu-builder-page/menu-builder-page.component.html"),
            styles: [__webpack_require__(/*! ./menu-builder-page.component.css */ "./src/app/menu-builder-page/menu-builder-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webcore_library_src_lib_standard_homepage_standard_homepage_menu_service__WEBPACK_IMPORTED_MODULE_2__["StandardHomepageMenuService"]])
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
    apiUrl: 'http://localhost:4200/api'
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

module.exports = __webpack_require__(/*! /home/andy/IdeaProjects/python/webcore/webcore-frontend/webcore-library/projects/webcore-library-tester/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map