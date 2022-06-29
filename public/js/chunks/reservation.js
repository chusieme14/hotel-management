(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    filter: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      search_sub: '',
      departments: []
    };
  },
  methods: {
    getAllDepartment: function getAllDepartment() {
      var _this = this;

      axios.get("/admin/departments").then(function (_ref) {
        var data = _ref.data;
        _this.departments = data.data;
      });
    }
  },
  created: function created() {
    this.getAllDepartment();
  },
  watch: {
    "filter.created_at": function filterCreated_at(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.created_at = [val[1], val[0]];
        }
      }
    },
    "filter.sub_start_date": function filterSub_start_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_start_date = [val[1], val[0]];
        }
      }
    },
    "filter.sub_end_date": function filterSub_end_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_end_date = [val[1], val[0]];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    payload: {},
    show: {}
  },
  data: function data() {
    return {
      istaken: false,
      departments: [],
      shifts: [{
        id: 1,
        text: 'Morning'
      }, {
        id: 2,
        text: 'Nigth'
      }],
      status: [{
        id: 0,
        text: 'Deactivate'
      }, {
        id: 1,
        text: 'Active'
      }]
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      if (!this.$refs.form.validate()) return;

      if (this.payload.id) {
        axios.get("/admin/check-email?email=".concat(this.payload.email, "&id=").concat(this.payload.id)).then(function (_ref) {
          var data = _ref.data;

          if (data) {
            _this.istaken = true;
            setTimeout(function () {
              _this.istaken = false;
            }, 3000);
            return;
          }

          _this.$emit('save', _this.payload);
        });
      } else {
        axios.get("/admin/check-email?email=".concat(this.payload.email)).then(function (_ref2) {
          var data = _ref2.data;

          if (data) {
            _this.istaken = true;
            setTimeout(function () {
              _this.istaken = false;
            }, 3000);
            return;
          }

          _this.$emit('save', _this.payload);
        });
      }
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (!val || this.$refs.form) {
          this.$refs.form.resetValidation();
        } else {
          if (!this.payload.id) this.payload.status = 1;
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/check_ins/form.vue");
/* harmony import */ var _filter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue */ "./resources/js/src/pages/check_ins/filter.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminForm: _form_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AdminFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      admin: {},
      showForm: false,
      isdelete: false,
      admins: [],
      payload: {},
      details: {},
      data: {
        title: "Check-in",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
      },
      options: {
        itemsPerPage: 15
      },
      total: 0,
      headers: [// {
      //     text: 'Id',
      //     align: 'start',
      //     sortable: true,
      //     value: 'id',
      // },
      {
        text: 'Room number',
        align: 'start',
        sortable: true,
        value: 'room'
      }, {
        text: 'Client name',
        align: 'start',
        sortable: true,
        value: 'client_name'
      }, {
        text: 'Contact number',
        align: 'start',
        sortable: false,
        value: 'contact_number'
      }, {
        text: 'Extra persons',
        align: 'start',
        sortable: true,
        value: 'extra_persons'
      }, {
        text: 'Extra hours',
        align: 'start',
        sortable: false,
        value: 'extra_hours'
      }, {
        text: 'Start date',
        align: 'start',
        sortable: false,
        value: 'start_date'
      }, {
        text: 'End date',
        align: 'start',
        sortable: false,
        value: 'end_date'
      }, {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status'
      }, {
        text: 'Regular bill',
        align: 'start',
        sortable: false,
        value: 'regular_bill'
      }, {
        text: 'Total bill',
        align: 'start',
        sortable: false,
        value: 'total_paid'
      } // {
      //     text: 'Action',
      //     align: 'start',
      //     sortable: true,
      //     value: 'action',
      // },
      ]
    };
  },
  created: function created() {
    this.getLoginUser();
  },
  methods: {
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    getLoginUser: function getLoginUser() {
      var _this = this;

      axios.get("/admin/get-user").then(function (_ref) {
        var data = _ref.data;
        _this.admin = data;
      });
    },
    cancel: function cancel() {
      this.clear();
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this2 = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/check-ins?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.admins = data.data;
        _this2.total = data.total;
        _this2.data.isFetching = false;
      });
    },
    save: function save() {
      var _this3 = this;

      if (this.payload.id) {
        delete this.payload.created_at;
        delete this.payload.updated_at;
        axios.put("/admin/users/".concat(this.payload.id), this.payload).then(function (_ref3) {
          var data = _ref3.data;

          _this3.fetchPage();

          _this3.clear();
        });
        return;
      }

      axios.post("/admin/users", this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this3.fetchPage();

        _this3.clear();
      });
    },
    showEdit: function showEdit(val) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object.assign(_this4.payload, val);

              case 2:
                _this4.showForm = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showDelete: function showDelete(val) {
      Object.assign(this.payload, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove ".concat(this.payload.fullname, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this5 = this;

      axios["delete"]("/admin/users/".concat(this.payload.id)).then(function (_ref5) {
        var data = _ref5.data;

        _this5.fetchPage();

        _this5.clear();
      });
    },
    clear: function clear() {
      this.payload.first_name = '';
      this.payload.last_name = '';
      this.payload.email = '';
      this.payload.status = 1;
      this.payload.shift = null;
      this.payload.password = '';
      this.details = {};
      this.showForm = false;
      this.isdelete = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    filter: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isstart: false,
      search_sub: '',
      roomtypes: [],
      status: [{
        id: 1,
        name: 'Waitting'
      }, {
        id: 2,
        name: 'Cancelled'
      }]
    };
  },
  methods: {
    getRoomTypes: function getRoomTypes() {
      var _this = this;

      axios.get("/admin/room-types").then(function (_ref) {
        var data = _ref.data;
        _this.roomtypes = data.data;
      });
    }
  },
  created: function created() {
    this.getRoomTypes();
  },
  watch: {
    "filter.created_at": function filterCreated_at(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.created_at = [val[1], val[0]];
        }
      }
    },
    "filter.sub_start_date": function filterSub_start_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_start_date = [val[1], val[0]];
        }
      }
    },
    "filter.sub_end_date": function filterSub_end_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_end_date = [val[1], val[0]];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    payload: {},
    show: {}
  },
  data: function data() {
    return {
      isstart: false,
      isend: false,
      istaken: false,
      roomtypes: [],
      shifts: [{
        id: 1,
        text: 'Morning'
      }, {
        id: 2,
        text: 'Nigth'
      }],
      status: [{
        id: 0,
        text: 'Deactivate'
      }, {
        id: 1,
        text: 'Active'
      }]
    };
  },
  methods: {
    getRoomType: function getRoomType() {
      var _this = this;

      axios.get("/admin/room-types").then(function (_ref) {
        var data = _ref.data;
        _this.roomtypes = data.data;
      });
    },
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.$emit('save', this.payload);
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (!val || this.$refs.form) {
          this.$refs.form.resetValidation();
        } else {
          this.getRoomType();
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/reservations/form.vue");
/* harmony import */ var _filter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue */ "./resources/js/src/pages/reservations/filter.vue");
/* harmony import */ var _rooms_form_checkin_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rooms/form/checkin.vue */ "./resources/js/src/pages/rooms/form/checkin.vue");
/* harmony import */ var _roomlist_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roomlist.vue */ "./resources/js/src/pages/reservations/roomlist.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminForm: _form_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AdminFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckinForm: _rooms_form_checkin_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    RoomList: _roomlist_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(["USER_DETAILS"])),
  data: function data(vm) {
    return {
      selectedReservation: {},
      selectedRoom: {},
      testpayload: {},
      showForm: false,
      isform: false,
      isroom: false,
      isdelete: false,
      admins: [],
      payload: {
        start_date: vm.$moment().format('YYYY-MM-DD')
      },
      details: {},
      data: {
        title: "Reservations",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
      },
      options: {
        itemsPerPage: 15
      },
      total: 0,
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Client name',
        align: 'start',
        sortable: true,
        value: 'client_name'
      }, {
        text: 'Contact number',
        align: 'start',
        sortable: true,
        value: 'contact_number'
      }, {
        text: 'Start date',
        align: 'start',
        sortable: false,
        value: 'start_date'
      }, {
        text: 'End date',
        align: 'start',
        sortable: false,
        value: 'end_date'
      }, {
        text: 'Room type',
        align: 'start',
        sortable: false,
        value: 'room_type'
      }, {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status'
      }, {
        text: 'Action',
        align: 'start',
        sortable: true,
        value: 'action'
      }]
    };
  },
  created: function created() {//   this.getLoginUser()
  },
  methods: {
    checkIn: function checkIn() {
      var _this = this;

      this.testpayload.user_id = this.USER_DETAILS.id;
      console.log(this.testpayload, "test val");
      axios.post("/admin/check-ins", this.testpayload).then(function (_ref) {
        var data = _ref.data;

        _this.clear();

        _this.$router.push({
          name: 'rooms'
        });
      });
    },
    showRoomForm: function showRoomForm(item) {
      Object.assign(this.selectedReservation, item);
      console.log(this.selectedReservation, "room,dsssssss");
      this.isroom = true;
    },
    showCheckinForm: function showCheckinForm(item) {
      this.isroom = false;
      this.selectedRoom = item;
      var start = this.$moment("".concat(this.selectedReservation.start_date)).format('YYYY-MM-DD h:mm a');
      var end = this.$moment("".concat(this.selectedReservation.end_date)).format('YYYY-MM-DD h:mm a');
      this.testpayload = {
        room_id: item.id,
        room_type: item.room_type.type,
        room_number: item.number,
        room_rate: item.room_type.price,
        room_extra_person: item.room_type.extra_person_rate,
        room_extra_hour: item.room_type.extra_hour_rate,
        room_guest_name: this.selectedReservation.client_name,
        room_guest_contact: '',
        room_guest_address: '',
        room_guest_extra_person: 0,
        room_guest_start: start,
        room_guest_end: end,
        room_total_days: 1,
        reservation_id: this.selectedReservation.id
      };
      console.log(this.selectedRoom, "room,");
      this.isform = true;
    },
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    // getLoginUser(){
    //   axios.get(`/admin/get-user`).then(({data})=>{
    //     this.admin = data
    //   })
    // },
    cancel: function cancel() {
      this.clear();
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this2 = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/reservations?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.admins = data.data;
        _this2.total = data.total;
        _this2.data.isFetching = false;
      });
    },
    save: function save() {
      var _this3 = this;

      if (this.payload.id) {
        delete this.payload.created_at;
        delete this.payload.updated_at;
        axios.put("/admin/reservations/".concat(this.payload.id), this.payload).then(function (_ref3) {
          var data = _ref3.data;

          _this3.fetchPage();

          _this3.clear();
        });
        return;
      }

      axios.post("/admin/reservations", this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this3.fetchPage();

        _this3.clear();
      });
    },
    showEdit: function showEdit(val) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object.assign(_this4.payload, val);

              case 2:
                _this4.showForm = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showDelete: function showDelete(val) {
      Object.assign(this.payload, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to cancel ".concat(this.payload.client_name, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this5 = this;

      axios["delete"]("/admin/reservations/".concat(this.payload.id)).then(function (_ref5) {
        var data = _ref5.data;

        _this5.fetchPage();

        _this5.clear();
      });
    },
    clear: function clear() {
      this.payload.first_name = '';
      this.payload.last_name = '';
      this.payload.email = '';
      this.payload.status = 1;
      this.payload.shift = null;
      this.payload.password = '';
      this.details = {};
      this.selectedReservation = {};
      this.selectedRoom = {};
      this.showForm = false;
      this.isform = false;
      this.isroom = false;
      this.isdelete = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {},
    selectedReservation: {}
  },
  data: function data() {
    return {
      rooms: [],
      selectedRoom: {}
    };
  },
  methods: {
    getRooms: function getRooms() {
      var _this = this;

      axios.get("/admin/rooms?room_type=".concat(this.selectedReservation.room_type_id)).then(function (_ref) {
        var data = _ref.data;
        _this.rooms = data.data;
      });
    },
    checkin: function checkin() {
      if (!this.$refs.form.validate()) return;
      this.$emit('checkin', this.selectedRoom);
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (val) {
          this.getRooms();
        } else {
          this.$refs.form.resetValidation();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "filter-main-container" },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "d-block mb-12", attrs: { xs12: "", sm12: "" } },
            [
              _c("label", [_vm._v("Department")]),
              _vm._v(" "),
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.departments,
                  "item-text": "name",
                  "item-value": "id",
                  "hide-details": "",
                  filled: "",
                  dense: "",
                  required: "",
                  clearable: "",
                },
                model: {
                  value: _vm.filter.department_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.filter, "department_id", $$v)
                  },
                  expression: "filter.department_id",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _vm._v(_vm._s(_vm.payload.id ? "Edit" : "Add") + " User"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form", attrs: { "lazy-validation": "" } },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" First name "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.first_name || ""
                                },
                              ],
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "first_name", $$v)
                              },
                              expression: "payload.first_name",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Last name"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.last_name || ""
                                },
                              ],
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "last_name", $$v)
                              },
                              expression: "payload.last_name",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Email"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.email || ""
                                },
                              ],
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "email", $$v)
                              },
                              expression: "payload.email",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Password"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.payload.id
                                ? ""
                                : [
                                    function () {
                                      return !!_vm.payload.password || ""
                                    },
                                  ],
                              filled: "",
                              dense: "",
                              type: "password",
                            },
                            model: {
                              value: _vm.payload.password,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "password", $$v)
                              },
                              expression: "payload.password",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Shift"),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.shift || ""
                                },
                              ],
                              "item-value": "id",
                              items: _vm.shifts,
                              "item-text": "text",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.shift,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "shift", $$v)
                              },
                              expression: "payload.shift",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Status"),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              "item-value": "id",
                              items: _vm.status,
                              "item-text": "text",
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.status,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "status", $$v)
                              },
                              expression: "payload.status",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "error" },
              on: {
                click: function ($event) {
                  return _vm.$emit("cancel")
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "success" }, on: { click: _vm.save } },
            [_vm._v("Save")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: -1, tile: "", top: "", color: "red accent-2" },
          model: {
            value: _vm.istaken,
            callback: function ($$v) {
              _vm.istaken = $$v
            },
            expression: "istaken",
          },
        },
        [_vm._v("\n        Email already exist in admin table\n    ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "1", "max-height": "90vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data, hide: ["addNew"] },
            on: {
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
              resetFilters: _vm.resetFilter,
              filterRecord: _vm.fetchPage,
            },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("admin-filter", { attrs: { filter: _vm.data.filter } }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "cursor-pointer table-fix-height",
            attrs: {
              headers: _vm.headers,
              items: _vm.admins,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
            },
            scopedSlots: _vm._u([
              {
                key: "item.room",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.room.number) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.status",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.status == 1 ? "Unpaid" : "Paid") +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.updated_at",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm._formatDate(item.updated_at)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-row",
                      [
                        _c("table-action", {
                          attrs: { item: item },
                          on: {
                            editItem: _vm.showEdit,
                            deleteItem: _vm.showDelete,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("admin-form", {
            attrs: { payload: _vm.payload, show: _vm.showForm },
            on: { cancel: _vm.cancel, save: _vm.save },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("confirm-dialog", {
        attrs: { details: _vm.details, show: _vm.isdelete },
        on: { cancel: _vm.cancel, confirm: _vm.remove },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "filter-main-container" },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "d-block mr-3", attrs: { sm6: "" } },
            [
              _c("label", [_vm._v("Status")]),
              _vm._v(" "),
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.status,
                  "item-text": "name",
                  "item-value": "id",
                  "hide-details": "",
                  filled: "",
                  dense: "",
                  required: "",
                  clearable: "",
                },
                model: {
                  value: _vm.filter.status,
                  callback: function ($$v) {
                    _vm.$set(_vm.filter, "status", $$v)
                  },
                  expression: "filter.status",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "d-block", attrs: { sm6: "" } },
            [
              _c("label", [_vm._v("Room type")]),
              _vm._v(" "),
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.roomtypes,
                  "item-text": "type",
                  "item-value": "id",
                  "hide-details": "",
                  filled: "",
                  dense: "",
                  required: "",
                  clearable: "",
                },
                model: {
                  value: _vm.filter.room_type_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.filter, "room_type_id", $$v)
                  },
                  expression: "filter.room_type_id",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticClass: "mt-2", attrs: { xs12: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "d-block", attrs: { sm6: "" } },
            [
              _c("label", [_vm._v("Start date")]),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    "close-on-content-click": false,
                    "nudge-right": 0,
                    transition: "scale-transition",
                    "offset-y": "",
                    "position-y": "1",
                    "min-width": "auto",
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    filled: "",
                                    dense: "",
                                    readonly: "",
                                  },
                                  model: {
                                    value: _vm.filter.start_date,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.filter, "start_date", $$v)
                                    },
                                    expression: "filter.start_date",
                                  },
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          ),
                        ]
                      },
                    },
                  ]),
                  model: {
                    value: _vm.isstart,
                    callback: function ($$v) {
                      _vm.isstart = $$v
                    },
                    expression: "isstart",
                  },
                },
                [
                  _vm._v(" "),
                  _c("v-date-picker", {
                    on: {
                      input: function ($event) {
                        _vm.isstart = false
                      },
                    },
                    model: {
                      value: _vm.filter.start_date,
                      callback: function ($$v) {
                        _vm.$set(_vm.filter, "start_date", $$v)
                      },
                      expression: "filter.start_date",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _vm._v(_vm._s(_vm.payload.id ? "Edit" : "Add") + " Reservation"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form", attrs: { "lazy-validation": "" } },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.client_name || ""
                                },
                              ],
                              outlined: "",
                              dense: "",
                              label: "Client name",
                              placeholder: "Client name",
                            },
                            model: {
                              value: _vm.payload.client_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "client_name", $$v)
                              },
                              expression: "payload.client_name",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.contact_number || ""
                                },
                              ],
                              outlined: "",
                              dense: "",
                              label: "Contact number",
                              placeholder: "Contact number",
                              type: "number",
                            },
                            model: {
                              value: _vm.payload.contact_number,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "contact_number", $$v)
                              },
                              expression: "payload.contact_number",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 0,
                                transition: "scale-transition",
                                "offset-y": "",
                                "position-y": "1",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                rules: [
                                                  function () {
                                                    return (
                                                      !!_vm.payload
                                                        .start_date || ""
                                                    )
                                                  },
                                                ],
                                                label: "Start date",
                                                placeholder: "Start date",
                                                outlined: "",
                                                dense: "",
                                                readonly: "",
                                              },
                                              model: {
                                                value: _vm.payload.start_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.payload,
                                                    "start_date",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "payload.start_date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.isstart,
                                callback: function ($$v) {
                                  _vm.isstart = $$v
                                },
                                expression: "isstart",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    _vm.isstart = false
                                  },
                                },
                                model: {
                                  value: _vm.payload.start_date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.payload, "start_date", $$v)
                                  },
                                  expression: "payload.start_date",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 0,
                                transition: "scale-transition",
                                "offset-y": "",
                                "position-y": "1",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                rules: [
                                                  function () {
                                                    return (
                                                      !!_vm.payload.end_date ||
                                                      ""
                                                    )
                                                  },
                                                ],
                                                label: "End date",
                                                placeholder: "End date",
                                                outlined: "",
                                                dense: "",
                                                readonly: "",
                                              },
                                              model: {
                                                value: _vm.payload.end_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.payload,
                                                    "end_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "payload.end_date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.isend,
                                callback: function ($$v) {
                                  _vm.isend = $$v
                                },
                                expression: "isend",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.payload.start_date },
                                on: {
                                  input: function ($event) {
                                    _vm.isend = false
                                  },
                                },
                                model: {
                                  value: _vm.payload.end_date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.payload, "end_date", $$v)
                                  },
                                  expression: "payload.end_date",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              "item-value": "id",
                              rules: [
                                function () {
                                  return !!_vm.payload.room_type_id || ""
                                },
                              ],
                              items: _vm.roomtypes,
                              "item-text": "type",
                              "hide-details": "auto",
                              outlined: "",
                              dense: "",
                              label: "Room type",
                              placeholder: "Room type",
                            },
                            model: {
                              value: _vm.payload.room_type_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "room_type_id", $$v)
                              },
                              expression: "payload.room_type_id",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "error" },
              on: {
                click: function ($event) {
                  return _vm.$emit("cancel")
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "success" }, on: { click: _vm.save } },
            [_vm._v("Save")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: -1, tile: "", top: "", color: "red accent-2" },
          model: {
            value: _vm.istaken,
            callback: function ($$v) {
              _vm.istaken = $$v
            },
            expression: "istaken",
          },
        },
        [_vm._v("\n        Email already exist in admin table\n    ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "1", "max-height": "90vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data },
            on: {
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
              resetFilters: _vm.resetFilter,
              filterRecord: _vm.fetchPage,
              addNew: _vm.addNew,
            },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("admin-filter", { attrs: { filter: _vm.data.filter } }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "cursor-pointer table-fix-height",
            attrs: {
              headers: _vm.headers,
              items: _vm.admins,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
            },
            scopedSlots: _vm._u([
              {
                key: "item.start_date",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm._formatDate(item.start_date)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.end_date",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm._formatDate(item.end_date)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.status",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.status == 1 ? "Waiting" : "Cancelled") +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.room_type",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.room_type.type) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { color: "success", left: "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                color: "success",
                                                icon: "",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.showRoomForm(item)
                                                },
                                              },
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [
                                              _vm._v(
                                                "\n                                    check\n                                "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(
                              "\n                        Check in\n                    "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("table-action", {
                          attrs: {
                            item: item,
                            disable:
                              item.status == 2 ? ["edit", "delete"] : [""],
                          },
                          on: {
                            editItem: _vm.showEdit,
                            deleteItem: _vm.showDelete,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("admin-form", {
            attrs: { payload: _vm.payload, show: _vm.showForm },
            on: { cancel: _vm.cancel, save: _vm.save },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("confirm-dialog", {
        attrs: { details: _vm.details, show: _vm.isdelete },
        on: { cancel: _vm.cancel, confirm: _vm.remove },
      }),
      _vm._v(" "),
      _c("checkin-form", {
        attrs: {
          dialog: _vm.isform,
          selectedRoom: _vm.selectedRoom,
          payload: _vm.testpayload,
        },
        on: { checkin: _vm.checkIn, close: _vm.cancel },
      }),
      _vm._v(" "),
      _c("room-list", {
        attrs: {
          show: _vm.isroom,
          selectedReservation: _vm.selectedReservation,
        },
        on: { cancel: _vm.cancel, checkin: _vm.showCheckinForm },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", width: "400" },
      model: {
        value: _vm.show,
        callback: function ($$v) {
          _vm.show = $$v
        },
        expression: "show",
      },
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("Select Room")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                { ref: "form", attrs: { "lazy-validation": "" } },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.rooms,
                      rules: [
                        function () {
                          return !!_vm.selectedRoom || ""
                        },
                      ],
                      "item-text": "number",
                      "return-object": "",
                      outlined: "",
                      dense: "",
                      label: "Room",
                      placeholder: "Room",
                      "hide-details": "auto",
                    },
                    model: {
                      value: _vm.selectedRoom,
                      callback: function ($$v) {
                        _vm.selectedRoom = $$v
                      },
                      expression: "selectedRoom",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "error" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("cancel")
                    },
                  },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "success" }, on: { click: _vm.checkin } },
                [_vm._v("Check in")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/check_ins/filter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/pages/check_ins/filter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=4675b9c4& */ "./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/check_ins/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=4675b9c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/filter.vue?vue&type=template&id=4675b9c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_4675b9c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/check_ins/form.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/pages/check_ins/form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=14945be0& */ "./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/check_ins/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=14945be0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/form.vue?vue&type=template&id=14945be0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_14945be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/check_ins/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/pages/check_ins/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=27a4a436& */ "./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/check_ins/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=27a4a436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/check_ins/index.vue?vue&type=template&id=27a4a436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27a4a436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/reservations/filter.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/pages/reservations/filter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=2ad3eac8& */ "./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/reservations/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=2ad3eac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/filter.vue?vue&type=template&id=2ad3eac8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_2ad3eac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/reservations/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/pages/reservations/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=2ae478e8& */ "./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/reservations/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=2ae478e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/form.vue?vue&type=template&id=2ae478e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2ae478e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/reservations/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/pages/reservations/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cf6a4f44& */ "./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/reservations/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=cf6a4f44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/index.vue?vue&type=template&id=cf6a4f44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf6a4f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/reservations/roomlist.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/pages/reservations/roomlist.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roomlist.vue?vue&type=template&id=930520c6& */ "./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6&");
/* harmony import */ var _roomlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roomlist.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _roomlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/reservations/roomlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roomlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./roomlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/roomlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roomlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./roomlist.vue?vue&type=template&id=930520c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/reservations/roomlist.vue?vue&type=template&id=930520c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roomlist_vue_vue_type_template_id_930520c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);