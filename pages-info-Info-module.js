(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-Info-module"],{

/***/ "BILa":
/*!***************************************************************!*\
  !*** ./src/app/components/line-chart/line-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "8d86");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");





class LineChartComponent {
    constructor() {
        // options
        this.legend = false;
        this.showLabels = false;
        this.animations = true;
        this.xAxis = false;
        this.yAxis = true;
        this.showYAxisLabel = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCardinal"].tension(0);
        this.colorScheme = {
            domain: ['#0060f5']
        };
    }
    ngOnInit() {
        this.populateChartData(this.data);
        this.view = [innerWidth / 1.3, 400];
    }
    populateChartData(_data) {
        const data = _data.value;
        this.currency = data.currency;
        let chartData = [];
        data.data.forEach(chartPoint => {
            let date = new Date(chartPoint.time * 1000);
            chartData.push({
                name: date.toDateString(),
                value: chartPoint.value
            });
        });
        this.chartData = [
            {
                "name": data.currency,
                "series": chartData
            }
        ];
    }
    onResize(event) {
        this.view = [event.target.innerWidth / 1.35, 400];
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
    onActivate(data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { data: "data" }, decls: 3, vars: 12, consts: [["fxFlex", "grow", 1, "line-chart-card", "mat-elevation-z0"], ["autoScale", "true", 3, "curve", "view", "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "xAxisLabel", "yAxisLabel", "timeline", "results", "resize", "select", "activate", "deactivate"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-charts-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function LineChartComponent_Template_ngx_charts_line_chart_resize_2_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("select", function LineChartComponent_Template_ngx_charts_line_chart_select_2_listener($event) { return ctx.onSelect($event); })("activate", function LineChartComponent_Template_ngx_charts_line_chart_activate_2_listener($event) { return ctx.onActivate($event); })("deactivate", function LineChartComponent_Template_ngx_charts_line_chart_deactivate_2_listener($event) { return ctx.onDeactivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("curve", ctx.curve)("view", ctx.view)("scheme", ctx.colorScheme)("legend", ctx.legend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxis", ctx.xAxis)("yAxis", ctx.yAxis)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("timeline", ctx.timeline)("results", ctx.chartData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"]], styles: [".line-chart-card[_ngcontent-%COMP%] {\n  height: 410px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLWNoYXJ0LWNhcmR7XG4gICAgaGVpZ2h0OiA0MTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "NK5z":
/*!*******************************************!*\
  !*** ./src/app/pages/info/Info.module.ts ***!
  \*******************************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var app_components_cc_signals_cc_signals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/cc-signals/cc-signals.component */ "vISb");
/* harmony import */ var app_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components/line-chart/line-chart.component */ "BILa");
/* harmony import */ var _ui_ui_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/ui-material.module */ "G/6P");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/ui.module */ "oRDy");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-routing.module */ "ZFnD");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info.component */ "bRGV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class InfoModule {
}
InfoModule.ɵfac = function InfoModule_Factory(t) { return new (t || InfoModule)(); };
InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: InfoModule });
InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ui_ui_material_module__WEBPACK_IMPORTED_MODULE_6__["UiMaterialModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_8__["InfoRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](InfoModule, { declarations: [_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"], app_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"], app_components_cc_signals_cc_signals_component__WEBPACK_IMPORTED_MODULE_4__["CcSignalsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ui_ui_material_module__WEBPACK_IMPORTED_MODULE_6__["UiMaterialModule"],
        _info_routing_module__WEBPACK_IMPORTED_MODULE_8__["InfoRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"]] }); })();


/***/ }),

/***/ "ZFnD":
/*!***************************************************!*\
  !*** ./src/app/pages/info/info-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function() { return InfoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.component */ "bRGV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"] }];
class InfoRoutingModule {
}
InfoRoutingModule.ɵfac = function InfoRoutingModule_Factory(t) { return new (t || InfoRoutingModule)(); };
InfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InfoRoutingModule });
InfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InfoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bRGV":
/*!**********************************************!*\
  !*** ./src/app/pages/info/info.component.ts ***!
  \**********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var app_core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/store/actions/quotes.actions */ "PyLj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store */ "PcjG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/data/data.service */ "h5qW");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/line-chart/line-chart.component */ "BILa");
/* harmony import */ var app_components_cc_signals_cc_signals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/cc-signals/cc-signals.component */ "vISb");














function InfoComponent_div_12_app_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-line-chart", 10);
} if (rf & 2) {
    const historyData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", historyData_r4);
} }
function InfoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InfoComponent_div_12_app_line_chart_1_Template, 1, 1, "app-line-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const historyDataMap_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, historyDataMap_r2));
} }
function InfoComponent_div_14_app_cc_signals_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cc-signals", 10);
} if (rf & 2) {
    const signalData_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", signalData_r7.value);
} }
function InfoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InfoComponent_div_14_app_cc_signals_1_Template, 1, 1, "app-cc-signals", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const signalsDataMap_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, signalsDataMap_r5));
} }
class InfoComponent {
    constructor(dataService, store, route) {
        this.dataService = dataService;
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const props = {
            symbol: routeParams.get('symbol'),
            currency: routeParams.get('currency'),
            length: 30
        };
        this.currency = props.currency;
        this.symbol = props.symbol;
        this.history$ = this.store
            .select(_core_store__WEBPACK_IMPORTED_MODULE_2__["getDailyHistoryQuote"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((history) => history));
        this.dataService.getDailyHistoryQuote(props.symbol, props.currency, props.length)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((history) => new app_core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHistoryFromAPI"](history)))
            .subscribe(this.store);
        this.signals$ = this.store
            .select(_core_store__WEBPACK_IMPORTED_MODULE_2__["getTradingSignals"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((signals) => signals));
        this.dataService.getTradingSignals(props.symbol)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((signals) => new app_core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateTradingSignalsFromAPI"](signals)))
            .subscribe(this.store);
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_core_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 16, vars: 8, consts: [[1, "info-container"], [2, "height", "100%", "padding-top", "20px", "padding-bottom", "20px"], ["fxFlex", "grow"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [2, "flex", "1 1 auto"], [2, "margin", "0px"], ["mat-icon-button", "", "routerLink", "/"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], [4, "ngIf"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, InfoComponent_div_12_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, InfoComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.symbol, "-", ctx.currency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 4, ctx.history$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 6, ctx.signals$));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], app_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"], app_components_cc_signals_cc_signals_component__WEBPACK_IMPORTED_MODULE_13__["CcSignalsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]], styles: [".info-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-left: 100px;\n  margin-right: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxJbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJJbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIC8vIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "vISb":
/*!***************************************************************!*\
  !*** ./src/app/components/cc-signals/cc-signals.component.ts ***!
  \***************************************************************/
/*! exports provided: CcSignalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcSignalsComponent", function() { return CcSignalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");





class CcSignalsComponent {
    constructor() {
        this.view = [200, 150];
        this.legend = false;
        this.showText = false;
        this.angleSpan = 180;
        this.startAngle = -90;
        this.max = 1;
        this.showAxis = false;
        this.colorScheme = {
            domain: ['#0060f5']
        };
    }
    ngOnInit() {
        if (this.data) {
            const signals = this.data.signals || undefined;
            if (signals) {
                signals.forEach(signal => {
                    switch (signal.name) {
                        case 'inOutVar':
                            this.inOutVar = signal.sentiment;
                            this.inOutVarChartData = [{ name: "inOutVar", value: signal.score }];
                            break;
                        case 'largetxsVar':
                            this.largetxsVar = signal.sentiment;
                            this.largetxsVarChartData = [{ name: "largetxsVar", value: signal.score }];
                            break;
                        case 'addressesNetGrowth':
                            this.addressesNetGrowth = signal.sentiment;
                            this.addressesNetGrowthChartData = [{ name: "addressesNetGrowth", value: signal.score }];
                            break;
                        case 'concentrationVar':
                            this.concentrationVar = signal.sentiment;
                            this.concentrationVarChartData = [{ name: "concentrationVar", value: signal.score }];
                            break;
                    }
                });
                this.calcSentiment();
            }
        }
    }
    calcSentiment() {
        var sentimentValue = function (_type) {
            switch (_type) {
                case 'neutral':
                    return 0;
                case 'bearish':
                    return -1;
                case 'bullish':
                    return 1;
                default:
                    return 0;
            }
        };
        const calcValue = sentimentValue(this.addressesNetGrowth) +
            sentimentValue(this.concentrationVar) +
            sentimentValue(this.inOutVar) +
            sentimentValue(this.largetxsVar);
        if (calcValue > 0) {
            this.overviewSignal = 'Bullish';
        }
        else if (calcValue < 0) {
            this.overviewSignal = 'Bearish';
        }
        else {
            this.overviewSignal = 'Neutral';
        }
    }
}
CcSignalsComponent.ɵfac = function CcSignalsComponent_Factory(t) { return new (t || CcSignalsComponent)(); };
CcSignalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CcSignalsComponent, selectors: [["app-cc-signals"]], inputs: { data: "data" }, decls: 57, vars: 51, consts: [[1, "signals-card", "mat-elevation-z0"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch"], [3, "view", "scheme", "results", "showText", "legend", "angleSpan", "startAngle", "max", "showAxis"]], template: function CcSignalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Onchain Signals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sentiment is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "In/out of the money is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-charts-gauge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This momentum signal calculates the net change of in/out of the money addresses, if the number of \"In the Money\" addresses is increasing this would be a bullish signal. In the money means addresses that would make a profit on the tokens they hold because they acquired the tokens at a lower price.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Large transactions is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ngx-charts-gauge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Momentum signal that is bullish when the short term trend of the number of txs > $100k is greater than the long term average.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Addresses Net Growth is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ngx-charts-gauge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Momentum signal that gives an indication of the tokens underlying network health by measuring the amount of new addresses minus the addresses that have their balances emptied. It is bullish when more addresses are being created than emptied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Concentration is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ngx-charts-gauge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "The Concentration signal is based on the accumulation (bullish) or reduction (bearish) of addresses with more than 0.1% of the circulating supply.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.overviewSignal.toLowerCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overviewSignal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inOutVar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inOutVar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.inOutVarChartData)("showText", ctx.showText)("legend", ctx.legend)("angleSpan", ctx.angleSpan)("startAngle", ctx.startAngle)("max", ctx.max)("showAxis", ctx.showAxis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.largetxsVar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.largetxsVar, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.largetxsVarChartData)("showText", ctx.showText)("legend", ctx.legend)("angleSpan", ctx.angleSpan)("startAngle", ctx.startAngle)("max", ctx.max)("showAxis", ctx.showAxis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.addressesNetGrowth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.addressesNetGrowth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.addressesNetGrowthChartData)("showText", ctx.showText)("legend", ctx.legend)("angleSpan", ctx.angleSpan)("startAngle", ctx.startAngle)("max", ctx.max)("showAxis", ctx.showAxis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.concentrationVar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.concentrationVar, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.concentrationVarChartData)("showText", ctx.showText)("legend", ctx.legend)("angleSpan", ctx.angleSpan)("startAngle", ctx.startAngle)("max", ctx.max)("showAxis", ctx.showAxis);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeComponent"]], styles: ["mat-accordion[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.bullish[_ngcontent-%COMP%] {\n  color: #3dd966 !important;\n}\n\n.bearish[_ngcontent-%COMP%] {\n  color: #ff7878 !important;\n}\n\n.neutral[_ngcontent-%COMP%] {\n  color: #9dbfff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYy1zaWduYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKIiwiZmlsZSI6ImNjLXNpZ25hbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtYWNjb3JkaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnVsbGlzaCB7XHJcbiAgICBjb2xvcjogIzNkZDk2NiAhaW1wb3J0YW50O1xyXG59XHJcbi5iZWFyaXNoIHtcclxuICAgIGNvbG9yOiAjZmY3ODc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5ldXRyYWwge1xyXG4gICAgY29sb3I6ICM5ZGJmZmYgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-info-Info-module.js.map