(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\src\personal\BCBGroup\bcbgroup-crypto-quotes-client\src\main.ts */"zUnb");


/***/ }),

/***/ "0ESU":
/*!*******************************************************!*\
  !*** ./src/app/core/store/reducers/quotes.reducer.ts ***!
  \*******************************************************/
/*! exports provided: INIT_STATE, reducer, getSocketStatus, getQuotes, getTradingSignals, getDailyHistoryQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_STATE", function() { return INIT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocketStatus", function() { return getSocketStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuotes", function() { return getQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradingSignals", function() { return getTradingSignals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDailyHistoryQuote", function() { return getDailyHistoryQuote; });
/* harmony import */ var _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/quotes.actions */ "PyLj");

// The initial state when application loads
const INIT_STATE = {
    socketConnected: false,
    cryptoQuotes: new Map(),
    dailyHistory: new Map(),
    tradingSignals: new Map()
};
function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SOCKET_CONNECTED"]: {
            return handleSetSocketConnect(state, action);
        }
        case _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["SET_QUOTES"]: {
            return handleSetQuotes(state, action);
        }
        case _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QUOTES_API"]: {
            return handleUpdateQuotesFromAPI(state, action);
        }
        case _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HISTORY_API"]: {
            return handleUpdateHistoryFromAPI(state, action);
        }
        case _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TRADING_SIGNAL_API"]: {
            return handleUpdateTradingSignalsFromAPI(state, action);
        }
        default:
            return state;
    }
}
function handleUpdateHistoryFromAPI(state, action) {
    let result = new Map();
    const history = {
        symbol: action.payload.symbol,
        currency: action.payload.currency,
        length: action.payload.length,
        data: action.payload.data
    };
    result.set(action.payload.symbol, history);
    return Object.assign(Object.assign({}, state), { dailyHistory: result });
}
function handleUpdateTradingSignalsFromAPI(state, action) {
    let result = new Map();
    const signals = {
        symbol: action.payload.symbol,
        time: action.payload.time,
        signals: action.payload.signals
    };
    result.set(signals.symbol, signals);
    return Object.assign(Object.assign({}, state), { tradingSignals: result });
}
function handleUpdateQuotesFromAPI(state, action) {
    let result = new Map();
    Object.keys(action.payload).forEach(symbol => {
        let currenciesMap = new Map();
        const currencies = action.payload[symbol];
        Object.keys(currencies).forEach(currency => {
            const amount = currencies[currency];
            const quote = {
                symbol: symbol,
                currency: currency,
                price: parseInt(amount),
                notes: 'API_RETRIEVED'
            };
            currenciesMap.set(currency, quote);
        });
        result.set(symbol, currenciesMap);
    });
    return Object.assign(Object.assign({}, state), { cryptoQuotes: result });
}
function handleSetSocketConnect(state, action) {
    return Object.assign(Object.assign({}, state), { socketConnected: action.payload });
}
function handleSetQuotes(state, action) {
    return Object.assign(Object.assign({}, state), { cryptoQuotes: action.payload });
}
const getSocketStatus = (state) => state.socketConnected;
const getQuotes = (state) => state.cryptoQuotes;
const getTradingSignals = (state) => state.tradingSignals;
const getDailyHistoryQuote = (state) => state.dailyHistory;


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    api: {
        url: 'http://localhost:3000'
    },
    socket: {
        url: 'http://localhost:3001',
        config: {}
    }
};


/***/ }),

/***/ "E6OC":
/*!**************************************************!*\
  !*** ./src/app/core/data/data-stream.service.ts ***!
  \**************************************************/
/*! exports provided: DataStreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStreamService", function() { return DataStreamService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class DataStreamService {
    /**
     * This class manages the connection to the quotes server socket and populate the
     * application state with the latest values
     */
    constructor(store) {
        this.store = store;
        this.cryptoQuotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Map());
        this.connected$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        // Connect to the server socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socket.url, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socket.config);
        // Manage client connections
        this.socket.on('connect', () => this.onSocketConnected());
        // Manage client disconnections
        this.socket.on('disconnect', (reason) => this.onSocketDisconnect(reason));
        // Manage quotes received from server
        this.socket.on('quote', (quote) => {
            this.onUpdateQuote(quote);
        });
        // Handel errors
        this.socket.on('error', (error) => console.error(error));
    }
    /**
     * Handel when the client is connected to the server socket
     * @returns {none}
     */
    onSocketConnected() {
        console.debug('Connected to stream');
        return this.connected$.next(true);
    }
    /**
     * Handel when the client is disconnected from the server socket
     * @param { string } reason The reason given for the disconnection
     */
    onSocketDisconnect(_reason) {
        console.debug(`Disconnected from stream: ${_reason}`);
        if (_reason === 'io server disconnect') {
            // The disconnection was initiated by the server,
            // you need to reconnect manually
            this.socket.connect();
        }
        // else the socket will automatically try to reconnect
        return this.connected$.next(false);
    }
    /**
     * Initiate disconnection from the socket
     */
    disconnectStream() {
        this.socket.disconnect();
        this.connected$.next(false);
    }
    /**
     * Update the quote state with latest price
     * Usually this is from the socket connections
     * @param { Quote } _quote the quote value from the socket
     */
    onUpdateQuote(_quote) {
        // Get all quotes
        let state;
        this.store.subscribe(s => state = s);
        const quotes = state.ui.cryptoQuotes;
        this.cryptoQuotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](quotes);
        const newPrice = _quote.price;
        let amounts;
        let newQuote = {
            symbol: _quote.symbol,
            currency: _quote.currency,
            price: newPrice,
            direction: 'UNCHANGED',
            notes: _quote.notes || undefined
        };
        var getDirection = function (_oldPrice, _newPrice) {
            let direction = _newPrice > _oldPrice ? 'UP' : 'DOWN';
            if (_newPrice == _oldPrice) {
                direction = 'UNCHANGED';
            }
            return direction;
        };
        // If quote in stream state
        if (quotes.has(_quote.symbol)) {
            console.debug(`Quote found in stream state. ${_quote.symbol}`);
            amounts = quotes.get(_quote.symbol);
            if (amounts.get(_quote.currency)) {
                const savedQuote = amounts.get(_quote.currency);
                const direction = getDirection(savedQuote.price, newPrice);
                newQuote.direction = direction;
            }
            amounts.set(_quote.currency, newQuote);
        }
        else {
            console.debug(`Quote not found in stream state adding ${_quote.symbol}.`);
            amounts = new Map().set(_quote.currency, newQuote);
        }
        quotes.set(_quote.symbol, amounts);
        console.debug(quotes);
        return this.cryptoQuotes$.next(quotes);
    }
}
DataStreamService.ɵfac = function DataStreamService_Factory(t) { return new (t || DataStreamService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
DataStreamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataStreamService, factory: DataStreamService.ɵfac });


/***/ }),

/***/ "G/6P":
/*!******************************************!*\
  !*** ./src/app/ui/ui-material.module.ts ***!
  \******************************************/
/*! exports provided: UiMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaterialModule", function() { return UiMaterialModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












const MODULES = [
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]
];
class UiMaterialModule {
}
UiMaterialModule.ɵfac = function UiMaterialModule_Factory(t) { return new (t || UiMaterialModule)(); };
UiMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: UiMaterialModule });
UiMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[...MODULES], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](UiMaterialModule, { imports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]], exports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]] }); })();


/***/ }),

/***/ "NeGc":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store */ "PcjG");
/* harmony import */ var _core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store/actions/quotes.actions */ "PyLj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _core_data_data_stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/data-stream.service */ "E6OC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











class LayoutComponent {
    constructor(breakpointObserver, store, dataStreamService) {
        this.breakpointObserver = breakpointObserver;
        this.store = store;
        this.dataStreamService = dataStreamService;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
        this.socketStatus$ = this.store
            .select(_core_store__WEBPACK_IMPORTED_MODULE_1__["getSocketStatus"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((connected) => (connected ? 'connected' : 'disconnected')));
        this.dataStreamService.connected$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((connected) => new _core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_2__["SetSocketConnected"](connected)))
            .subscribe(this.store);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_data_stream_service__WEBPACK_IMPORTED_MODULE_6__["DataStreamService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 12, vars: 3, consts: [[1, "sidenav-container"], ["color", "accent-0", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["src", " assets/logo.png", "height", "40", "alt", "BCB Group Logo", "loading", "lazy", 1, "d-inline-block", "align-top"], [2, "flex", "1 1 auto"], [3, "ngClass"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Crypto Quotes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 1, ctx.socketStatus$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #212331;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  width: 100% !important;\n}\n\n.connected[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.connected[_ngcontent-%COMP%]:after {\n  content: \"CONNECTED\";\n}\n\n.disconnected[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.disconnected[_ngcontent-%COMP%]:after {\n  content: \"DISCONNECTED\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Msc0JBQUE7QUFDSDs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtBQUlKIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMzE7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29ubmVjdGVkIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uY29ubmVjdGVkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdDT05ORUNURUQnO1xyXG59XHJcbi5kaXNjb25uZWN0ZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZGlzY29ubmVjdGVkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdESVNDT05ORUNURUQnO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "PcjG":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: reducers, getUIState, getSocketStatus, getQuotes, getDailyHistoryQuote, getTradingSignals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUIState", function() { return getUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocketStatus", function() { return getSocketStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuotes", function() { return getQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDailyHistoryQuote", function() { return getDailyHistoryQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradingSignals", function() { return getTradingSignals; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/quotes.reducer */ "0ESU");


/**
 * The manipulator for the UI State
 */
const reducers = {
    ui: _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
/**
 *  Get the complete state
 * */
const getUIState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ui');
/**
 * Get only the socket connection state
 */
const getSocketStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__["getSocketStatus"]);
/**
 * Get only quotes data
 */
const getQuotes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__["getQuotes"]);
/**
 * Get history for a coin
 */
const getDailyHistoryQuote = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__["getDailyHistoryQuote"]);
/**
 * Get trading signals for a coin
 */
const getTradingSignals = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, _reducers_quotes_reducer__WEBPACK_IMPORTED_MODULE_1__["getTradingSignals"]);


/***/ }),

/***/ "PyLj":
/*!******************************************************!*\
  !*** ./src/app/core/store/actions/quotes.actions.ts ***!
  \******************************************************/
/*! exports provided: SET_QUOTES, UPDATE_QUOTES, SET_SOCKET_CONNECTED, UPDATE_QUOTES_API, UPDATE_HISTORY_API, UPDATE_TRADING_SIGNAL_API, GET_QUOTES_API, GET_QUOTES_API_SUCCESS, GET_API_FAIL, GET_DAILY_HISTORY_API, GET_TRADING_SIGNALS_API, UpdateQuotesFromAPI, UpdateHistoryFromAPI, UpdateTradingSignalsFromAPI, SetSocketConnected, SetQuotes, UpdateQuote, GetDailyHistory, GetTradingSignals, getDailyHistory, getTradingSignals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_QUOTES", function() { return SET_QUOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QUOTES", function() { return UPDATE_QUOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SOCKET_CONNECTED", function() { return SET_SOCKET_CONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QUOTES_API", function() { return UPDATE_QUOTES_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HISTORY_API", function() { return UPDATE_HISTORY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TRADING_SIGNAL_API", function() { return UPDATE_TRADING_SIGNAL_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUOTES_API", function() { return GET_QUOTES_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUOTES_API_SUCCESS", function() { return GET_QUOTES_API_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_API_FAIL", function() { return GET_API_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DAILY_HISTORY_API", function() { return GET_DAILY_HISTORY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRADING_SIGNALS_API", function() { return GET_TRADING_SIGNALS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuotesFromAPI", function() { return UpdateQuotesFromAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHistoryFromAPI", function() { return UpdateHistoryFromAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTradingSignalsFromAPI", function() { return UpdateTradingSignalsFromAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSocketConnected", function() { return SetSocketConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetQuotes", function() { return SetQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuote", function() { return UpdateQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDailyHistory", function() { return GetDailyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTradingSignals", function() { return GetTradingSignals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDailyHistory", function() { return getDailyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradingSignals", function() { return getTradingSignals; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const SET_QUOTES = '[Quotes] Set quotes';
const UPDATE_QUOTES = '[Quotes] Update quotes';
const SET_SOCKET_CONNECTED = '[Quotes] Set socket connected';
const UPDATE_QUOTES_API = '[Quotes API] Update crypto quotes from API response';
const UPDATE_HISTORY_API = '[Quotes API] Update crypto history from API response';
const UPDATE_TRADING_SIGNAL_API = '[Quotes API] Update crypto trading signal from API response';
const GET_QUOTES_API = '[Quotes API] Get crypto quotes';
const GET_QUOTES_API_SUCCESS = '[Quotes API] Get crypto quotes successful';
const GET_API_FAIL = '[Quotes API] Call failed failed';
const GET_DAILY_HISTORY_API = '[Quotes API] Get daily history for symbol';
const GET_TRADING_SIGNALS_API = '[Quotes API] Get trading signals for symbol';
/**
 * Update the quotes with the latest prices
 */
class UpdateQuotesFromAPI {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_QUOTES_API;
    }
}
/**
 * Update the history with the latest prices
 */
class UpdateHistoryFromAPI {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_HISTORY_API;
    }
}
/**
 * Update the trading signals with the latest prices
 */
class UpdateTradingSignalsFromAPI {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_TRADING_SIGNAL_API;
    }
}
/**
 * Set the Status of the websocket connection state
 */
class SetSocketConnected {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SOCKET_CONNECTED;
    }
}
/**
 * Set the quotes state with the latest prices
 */
class SetQuotes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_QUOTES;
    }
}
/**
 * Update the quotes with the latest prices
 */
class UpdateQuote {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_QUOTES;
    }
}
/**
 * Get history for symbol currency pair
 */
class GetDailyHistory {
    constructor(symbol, currency, length) {
        this.symbol = symbol;
        this.currency = currency;
        this.length = length;
        this.type = GET_DAILY_HISTORY_API;
    }
}
/**
 * Get history for symbol currency pair
 */
class GetTradingSignals {
    constructor(symbol) {
        this.symbol = symbol;
        this.type = GET_TRADING_SIGNALS_API;
    }
}
const getDailyHistory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_DAILY_HISTORY_API, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getTradingSignals = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_TRADING_SIGNALS_API, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/store/actions/quotes.actions */ "PyLj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(store) {
        this.store = store;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
        // Request to get all default quotes update with Application started
        this.store.dispatch({ type: _core_store_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_0__["GET_QUOTES_API"] });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_data_data_stream_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/data/data-stream.service */ "E6OC");
/* harmony import */ var _core_data_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/data/data.service */ "h5qW");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/store */ "PcjG");
/* harmony import */ var _core_store_effects_quotes_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/store/effects/quotes.effects */ "kVQu");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/ui.module */ "oRDy");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");










//import { ChartsModule } from 'ng2-charts';












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [_core_data_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"], _core_data_data_stream_service__WEBPACK_IMPORTED_MODULE_12__["DataStreamService"]], imports: [[
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_16__["UiModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_core_store_effects_quotes_effects__WEBPACK_IMPORTED_MODULE_15__["QuotesEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_core_store__WEBPACK_IMPORTED_MODULE_14__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]], imports: [_ui_ui_module__WEBPACK_IMPORTED_MODULE_16__["UiModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]] }); })();


/***/ }),

/***/ "h5qW":
/*!*******************************************!*\
  !*** ./src/app/core/data/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DataService {
    constructor(http) {
        this.http = http;
        this.apiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.url;
        this.corsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
    }
    /**
     * Get all the default quotes from te
     * @returns { Observable<Map<string, Map<string, string>>> } The data from the API request
     */
    getAllQuotes() {
        return this.http.get(`${this.apiBase}/api/quotes`, { headers: this.corsHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response));
    }
    /**
     * Get a latest quote for a symbol currency pair
     * @param { string } _symbol The crypto symbol for the coin
     * @param { string } _currency The currency symbol for the coin
     * @returns { Observable<Object> } The data from the API request
     */
    getQuote(_symbol, _currency) {
        return this.http.get(`${this.apiBase}/api/quote/${_symbol}/${_currency}`, { headers: this.corsHeaders });
    }
    /**
     * Get quotes for a list of symbols and currency
     * @param { string[] } _symbols A list of crypto symbols for the coins
     * @param { string[] } _currencies A list or currency symbols for the coins
     * @returns { Observable<Map<string, Map<string, string>>> }The data from the API request
     */
    getQuotes(_symbols, _currencies) {
        const symbols = _symbols.join(',') || ['BTC', 'ETH'];
        const currencies = _currencies.join(',') || ['USD', 'GBP'];
        return this.http.get(`${this.apiBase}/api/quotes?symbols=${symbols}&currencies=${currencies}`, {
            headers: this.corsHeaders
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response));
    }
    /**
     * Get get daily history for a symbol and currency pair
     * @param { string } _symbol The crypto symbol for the coin
     * @param { string } _currency The currency symbol for the coin
     * @param { number } _length the number of days
     * @returns { Observable<Object> }The data from the API request
     */
    getDailyHistoryQuote(_symbol, _currency, _length) {
        let queryStr = `/api/quotes/history/daily/${_symbol}/${_currency}`;
        if (_length) {
            queryStr += `?length=${_length}`;
        }
        return this.http.get(`${this.apiBase}${queryStr}`, { headers: this.corsHeaders });
    }
    /**
     * Get a latest trading signals for a symbol
     * @param { string } _symbol The crypto symbol for the coin
     * @returns { Observable<Object> } The data from the API request
     */
    getTradingSignals(_symbol) {
        const result = this.http.get(`${this.apiBase}/api/trading/signal/${_symbol}`, { headers: this.corsHeaders });
        return result;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });


/***/ }),

/***/ "kVQu":
/*!******************************************************!*\
  !*** ./src/app/core/store/effects/quotes.effects.ts ***!
  \******************************************************/
/*! exports provided: QuotesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesEffects", function() { return QuotesEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/quotes.actions */ "PyLj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/data.service */ "h5qW");







class QuotesEffects {
    constructor(actions$, dataService) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.getAllQuotes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["GET_QUOTES_API"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.dataService.getAllQuotes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((quotes) => ({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QUOTES_API"], payload: quotes })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["GET_API_FAIL"] }))))));
        this.getDailyHistoryQuote$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["GET_DAILY_HISTORY_API"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => {
                const symbol = action.symbol;
                const currency = action.currency;
                const length = action.length;
                return this.dataService.getDailyHistoryQuote(symbol, currency, length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((history) => ({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_HISTORY_API"], payload: history })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["GET_API_FAIL"] })));
            }));
        });
        this.getTradingSignals$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["getTradingSignals"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(action => {
                return this.dataService.getTradingSignals(action.symbol).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((signals) => ({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_TRADING_SIGNAL_API"], payload: signals })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ type: _actions_quotes_actions__WEBPACK_IMPORTED_MODULE_3__["GET_API_FAIL"] })));
            }));
        });
    }
}
QuotesEffects.ɵfac = function QuotesEffects_Factory(t) { return new (t || QuotesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"])); };
QuotesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: QuotesEffects, factory: QuotesEffects.ɵfac });


/***/ }),

/***/ "oRDy":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "NeGc");
/* harmony import */ var _ui_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-material.module */ "G/6P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_material_module__WEBPACK_IMPORTED_MODULE_4__["UiMaterialModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_material_module__WEBPACK_IMPORTED_MODULE_4__["UiMaterialModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/layout/layout.component */ "NeGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'quotes' },
    {
        path: '',
        component: _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: 'quotes',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-quotes-quotes-module */ "pages-quotes-quotes-module").then(__webpack_require__.bind(null, /*! ./pages/quotes/quotes.module */ "Fhd7")).then((m) => m.QuotesModule)
            },
            {
                path: 'info/:symbol/:currency',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-info-Info-module */ "pages-info-Info-module").then(__webpack_require__.bind(null, /*! ./pages/info/Info.module */ "NK5z")).then((m) => m.InfoModule)
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map