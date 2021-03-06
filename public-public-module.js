(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-public-module"],{

/***/ "UFnY":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "Cesd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ "iTR/");
/* harmony import */ var src_Material_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Material/material */ "p5R8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");





































const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        children: [
            {
                path: 'shop',
                component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]
            }
        ]
    }
];
class PublicModule {
}
PublicModule.??fac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: PublicModule });
PublicModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_Material_material__WEBPACK_IMPORTED_MODULE_4__["MaterialDesign"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](PublicModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "iTR/":
/*!***********************************************!*\
  !*** ./src/app/public/shop/shop.component.ts ***!
  \***********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "Cesd");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function ShopComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ShopComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", !product_r3.url ? "https://firebasestorage.googleapis.com/v0/b/personal-project-tekweb.appspot.com/o/banner%2Fimage-comming-soon.png?alt=media&token=95ed4c9b-2bb9-4648-986b-ae0cf0892a78" : product_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r3.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rp ", ctx_r5.formatRupiah(product_r3.price), "");
} }
function ShopComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShopComponent_div_31_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ShopComponent_div_31_div_2_Template, 10, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isGetData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.isGetData);
} }
class ShopComponent {
    constructor(service, home) {
        this.service = service;
        this.home = home;
        this.isHome = false;
        this.products = [];
    }
    ngOnInit() {
        this.getData();
        this.isUser = this.service.isAppToken();
        console.log(this.isUser);
        this.home.isHome = false;
    }
    getData() {
        this.service.get().subscribe(res => {
            this.products = res;
        });
    }
    query(where) {
        this.service.query(where).valueChanges().subscribe(res => {
            this.isGetData = true;
            this.products = res;
            console.log(this.products);
            this.isGetData = false;
        }, e => {
            this.isGetData = false;
            alert("Error " + e);
        });
    }
    formatRupiah(angka) {
        var number_string = angka.toString(), sisa = number_string.length % 3, rupiah = number_string.substr(0, sisa), ribuan = number_string.substr(sisa).match(/\d{3}/g);
        if (ribuan) {
            var separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        return rupiah;
    }
}
ShopComponent.??fac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"])); };
ShopComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 32, vars: 9, consts: [[1, "example-container", "uk-padding-small", "uk-margin-right"], ["mode", "side", "opened", "", 1, "sidenav-left", 3, "position", "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [1, "sidenav", "uk-width-small@l"], [1, "uk-margin-medium-top"], [3, "click"], ["align", "right", "matLine", ""], ["align", "left"], [2, "font-weight", "bold"], [1, "uk-margin-top", 2, "font-weight", "bold"], ["mode", "side", 1, "example-sidenav", 3, "position", "fixedInViewport", "fixedTopGap", "fixedBottomGap"], [2, "padding", "10px", "background-color", "#fff"], [4, "ngFor", "ngForOf"], ["style", "height: 300px;", "style", "padding: 100px;", "class", "uk-flex uk-flex-center uk-flex-middle uk-margin-large-left", 4, "ngIf"], ["class", "uk-card uk-card-default uk-margin-left uk-margin-bottom", 4, "ngIf"], [1, "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-margin-large-left", 2, "padding", "100px"], ["diameter", "100"], [1, "uk-card", "uk-card-default", "uk-margin-left", "uk-margin-bottom"], [1, "uk-card-header"], ["width", "270", "height", "270", 3, "src"], [1, "uk-card-title"], [1, "uk-text-meta"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopComponent_Template_mat_list_item_click_5_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopComponent_Template_mat_list_item_click_12_listener() { return ctx.query("tshirt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopComponent_Template_mat_list_item_click_15_listener() { return ctx.query("hoodie"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Hoddie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopComponent_Template_mat_list_item_click_22_listener() { return ctx.query("pants"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Pants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopComponent_Template_mat_list_item_click_25_listener() { return ctx.query("lpants"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Long Pants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "mat-sidenav", 10, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-sidenav-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ShopComponent_div_31_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("position", "start")("fixedInViewport", true)("fixedTopGap", 60)("fixedBottomGap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("position", "end")("fixedInViewport", true)("fixedTopGap", 60)("fixedBottomGap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: ["div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 20px;\n  left: 0;\n  right: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZmZmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICB9XHJcbiBcclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=public-public-module.js.map