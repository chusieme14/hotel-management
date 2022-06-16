(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alumni"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    payload: {}
  },
  data: function data() {
    return {
      courses: [],
      booleanOptions: [{
        id: 0,
        name: 'No'
      }, {
        id: 1,
        name: 'Yes'
      }],
      attainmentOptions: [{
        id: 1,
        name: 'Baccalaureate Degree'
      }, {
        id: 2,
        name: 'Masteral'
      }, {
        id: 3,
        name: 'Doctorate'
      }]
    };
  },
  methods: {
    getCourses: function getCourses() {
      var _this = this;

      var params = ''; // if(this.data.keyword)
      //     params = params + '&keyword=' + this.data.keyword

      axios.get("/admin/courses?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.courses = data.data;
      });
    },
    next: function next() {
      if (!this.$refs.form.validate()) return;
      this.$emit('next');
    }
  },
  mounted: function mounted() {
    this.getCourses();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    payload: {}
  },
  data: function data() {
    return {
      booleanOptions: [{
        id: 0,
        name: 'No'
      }, {
        id: 1,
        name: 'Yes'
      }],
      employmentStatus: ['Contractual', 'Permanent', 'Self-employed', 'Casual', 'Not Applicable'],
      countries: []
    };
  },
  methods: {
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.$emit('save');
    },
    getCountries: function getCountries() {
      var _this = this;

      axios.get("/admin/countries").then(function (_ref) {
        var data = _ref.data;
        _this.countries = data.data;
      });
    }
  },
  mounted: function mounted() {
    this.getCountries();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    payload: {}
  },
  data: function data() {
    return {
      civil_status: ['Single', 'Married', 'Separated', 'Widowed'],
      genders: ['Male', 'Famale', 'Transgender', 'Non-binary', 'Prefer not to respond']
    };
  },
  methods: {
    next: function next() {
      if (!this.$refs.form.validate()) return;
      this.$emit('next');
    },
    triggerUpload: function triggerUpload() {
      this.$refs.file_input.click();
    },
    onFileChange: function onFileChange(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var imageFile, imageURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageFile = file[0];

                if (!(file.length > 0)) {
                  _context.next = 12;
                  break;
                }

                if (imageFile.type.match('image.*')) {
                  _context.next = 7;
                  break;
                }

                _this.errorDialog = true;
                _this.errorText = 'Please choose an image file';
                _context.next = 12;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _this.avatar_blob = imageURL;
                _context.next = 11;
                return _this.createImageBase64(imageFile);

              case 11:
                _this.payload.image_base64 = _context.sent;

              case 12:
                console.log(_this.payload.image_base64);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {}
  },
  data: function data() {
    return {
      graduates: [],
      data: {
        title: "Graduates",
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
        text: 'Student number',
        align: 'start',
        sortable: true,
        value: 'student_number'
      }, {
        text: 'First name',
        align: 'start',
        sortable: true,
        value: 'first_name'
      }, {
        text: 'Last name',
        align: 'start',
        sortable: true,
        value: 'last_name'
      }, {
        text: 'Middle name',
        align: 'start',
        sortable: true,
        value: 'middle_name'
      }, {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email'
      }, {
        text: 'Contact number',
        align: 'start',
        sortable: true,
        value: 'contact_number'
      }, {
        text: 'Batch',
        align: 'start',
        sortable: true,
        value: 'batch'
      }, {
        text: 'Section',
        align: 'start',
        sortable: true,
        value: 'section'
      }, {
        text: 'Course',
        align: 'start',
        sortable: true,
        value: 'course'
      }, {
        text: 'Valid',
        align: 'start',
        sortable: true,
        value: 'status'
      }, {
        text: 'Reason',
        align: 'start',
        sortable: true,
        value: 'reason'
      }]
    };
  },
  methods: {
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    fetchPage: function fetchPage() {
      var _this = this;

      var session = localStorage.getItem("session");
      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      params = params + '&session=' + session;
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/graduates/temp-uploads?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        console.log(data.data);
        _this.graduates = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (val) {// this.getTempUpload()
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _csv_form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv-form.vue */ "./resources/js/src/pages/alumni/csv-form.vue");
/* harmony import */ var _components_personal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/personal.vue */ "./resources/js/src/pages/alumni/components/personal.vue");
/* harmony import */ var _components_educational_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/educational.vue */ "./resources/js/src/pages/alumni/components/educational.vue");
/* harmony import */ var _components_employment_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employment.vue */ "./resources/js/src/pages/alumni/components/employment.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ConForm: _csv_form_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Personal: _components_personal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Educational: _components_educational_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Employment: _components_employment_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    show: {
      type: Boolean
    },
    details: {},
    selected_item: {},
    isedit: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      e1: 1,
      ismultiple: false,
      payload: {
        image_base64: null,
        prof_exam_passed: 'No',
        detail: {}
      }
    };
  },
  methods: {
    next: function next() {
      this.e1 += 1;
    },
    prev: function prev() {
      this.e1 -= 1;
    },
    fetchGraduate: function fetchGraduate() {
      var _this = this;

      console.log(this.$route.params.graduates_id, "this.$router.params.graduates_id");
      axios.get("/admin/graduates/".concat(this.$route.params.graduates_id)).then(function (_ref) {
        var data = _ref.data;
        _this.payload = data;
        if (!_this.payload.detail) _this.payload.detail = {};
        if (_this.payload.avatar) _this.payload.image_base64 = _this.payload.avatar;
      });
    },
    closeDialog: function closeDialog() {
      var _this2 = this;

      var session = localStorage.getItem("session");
      axios["delete"]("/admin/graduates/temp-uploads/".concat(session, "/remove")).then(function (_ref2) {
        _objectDestructuringEmpty(_ref2);

        _this2.ismultiple = false;
        localStorage.removeItem("session");
      });
    },
    saveMultiple: function saveMultiple() {
      var _this3 = this;

      var session = localStorage.getItem("session");
      axios.get("/admin/graduates/temp-uploads/".concat(session, "/save")).then(function (_ref3) {
        var data = _ref3.data;
        _this3.ismultiple = false;
        localStorage.removeItem("session");
      });
    },
    preventReload: function preventReload() {
      window.onbeforeunload = function () {
        return "Are you sure you want to refresh the window?, selected file will be removed!";
      };

      this.isimport = false;
    },
    triggerInputFile: function triggerInputFile() {
      this.$refs.fileInput.click();
      this.preventReload();
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
      this.uploadFile();
    },
    uploadFile: function uploadFile() {
      var _this4 = this;

      var session = new Date().getTime();
      var payload = new FormData();
      payload.append('file', this.file);
      payload.append('session', session);
      axios.post("/admin/graduates/upload-file", payload).then(function (_ref4) {
        var data = _ref4.data;

        if (data.message == 'success') {
          localStorage.setItem('session', session);
          _this4.ismultiple = true;
        }

        _this4.file = null;
        _this4.$refs.fileInput.value = null;
      });
    },
    getCourses: function getCourses() {
      var _this5 = this;

      var params = ''; // if(this.data.keyword)
      //     params = params + '&keyword=' + this.data.keyword

      axios.get("/admin/courses?".concat(params)).then(function (_ref5) {
        var data = _ref5.data;
        _this5.courses = data.data;
      });
    },
    onFileChange: function onFileChange(file) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var imageFile, imageURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageFile = file[0];

                if (!(file.length > 0)) {
                  _context.next = 12;
                  break;
                }

                if (imageFile.type.match('image.*')) {
                  _context.next = 7;
                  break;
                }

                _this6.errorDialog = true;
                _this6.errorText = 'Please choose an image file';
                _context.next = 12;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _this6.avatar_blob = imageURL;
                _context.next = 11;
                return _this6.createImageBase64(imageFile);

              case 11:
                _this6.payload.image_base64 = _context.sent;

              case 12:
                console.log(_this6.payload.image_base64, "this.payload.image_base64");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cancel: function cancel() {
      this.reset();
      this.$router.push({
        name: 'graduates'
      });
    },
    save: function save() {
      var _this7 = this;

      console.log(this.payload, "save payload");
      axios.put("/admin/graduates/".concat(this.payload.id), this.payload).then(function (_ref6) {
        var data = _ref6.data;

        _this7.$router.push({
          name: 'graduates'
        });
      });
    },
    reset: function reset() {
      this.isfetching = true;
      this.payload.image_base64 = null;
      this.$refs.form.resetValidation();
    }
  },
  created: function created() {
    this.fetchGraduate();
  },
  mounted: function mounted() {
    if (localStorage.getItem("session")) {
      this.ismultiple = true;
    }
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.fetchGraduate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      data: {
        title: "Employment history",
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
        sortable: false,
        value: 'id'
      }, {
        text: 'Company name',
        align: 'start',
        sortable: false,
        value: 'company_name'
      }, {
        text: 'Employment date',
        align: 'start',
        sortable: false,
        value: 'employment_date'
      }, {
        text: 'City',
        align: 'start',
        sortable: false,
        value: 'c_city'
      }, {
        text: 'Country',
        align: 'start',
        sortable: false,
        value: 'country'
      }],
      histories: []
    };
  },
  methods: {
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;
      var params = 'graduate_id=' + this.$route.params.graduates_id;
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/graduates-employment-history?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.histories = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      courses: [],
      search_sub: '',
      gun_types: [],
      ammunitions: []
    };
  },
  mounted: function mounted() {
    this.getCourses();
  },
  methods: {
    getCourses: function getCourses() {
      var _this = this;

      var params = ''; // if(this.data.keyword)
      //     params = params + '&keyword=' + this.data.keyword

      axios.get("/admin/courses?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.courses = data.data;
      });
    }
  },
  props: {
    filter: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
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
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csv_form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-form.vue */ "./resources/js/src/pages/alumni/csv-form.vue");
/* harmony import */ var _components_personal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/personal.vue */ "./resources/js/src/pages/alumni/components/personal.vue");
/* harmony import */ var _components_educational_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/educational.vue */ "./resources/js/src/pages/alumni/components/educational.vue");
/* harmony import */ var _components_employment_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employment.vue */ "./resources/js/src/pages/alumni/components/employment.vue");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ConForm: _csv_form_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Personal: _components_personal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Educational: _components_educational_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Employment: _components_employment_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    show: {
      type: Boolean
    },
    details: {},
    selected_item: {},
    isedit: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      e1: 1,
      ismultiple: false,
      payload: {
        image_base64: null,
        prof_exam_passed: 'No',
        detail: {}
      }
    };
  },
  methods: {
    next: function next() {
      this.e1 += 1;
    },
    prev: function prev() {
      this.e1 -= 1;
    },
    closeDialog: function closeDialog() {
      var _this = this;

      var session = localStorage.getItem("session");
      axios["delete"]("/admin/graduates/temp-uploads/".concat(session, "/remove")).then(function (_ref) {
        _objectDestructuringEmpty(_ref);

        _this.ismultiple = false;
        localStorage.removeItem("session");
      });
    },
    saveMultiple: function saveMultiple() {
      var _this2 = this;

      var session = localStorage.getItem("session");
      axios.get("/admin/graduates/temp-uploads/".concat(session, "/save")).then(function (_ref2) {
        var data = _ref2.data;
        _this2.ismultiple = false;
        localStorage.removeItem("session");

        _this2.$router.push({
          name: 'graduates'
        });
      });
    },
    preventReload: function preventReload() {
      window.onbeforeunload = function () {
        return "Are you sure you want to refresh the window?, selected file will be removed!";
      };

      this.isimport = false;
    },
    triggerInputFile: function triggerInputFile() {
      this.$refs.fileInput.click();
      this.preventReload();
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
      this.uploadFile();
    },
    uploadFile: function uploadFile() {
      var _this3 = this;

      var session = new Date().getTime();
      var payload = new FormData();
      payload.append('file', this.file);
      payload.append('session', session);
      axios.post("/admin/graduates/upload-file", payload).then(function (_ref3) {
        var data = _ref3.data;

        if (data.message == 'success') {
          localStorage.setItem('session', session);
          _this3.ismultiple = true;
        }

        _this3.file = null;
        _this3.$refs.fileInput.value = null;
      });
    },
    cancel: function cancel() {
      this.reset();
      this.$router.push({
        name: 'graduates'
      });
    },
    save: function save() {
      var _this4 = this;

      console.log(this.payload, "save payload");
      this.payload.section = this.payload.section.toUpperCase();
      axios.post("/admin/graduates", this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this4.$router.push({
          name: 'graduates'
        });
      });
    },
    reset: function reset() {
      this.isfetching = true;
      this.payload.image_base64 = null;
    }
  },
  mounted: function mounted() {
    if (localStorage.getItem("session")) {
      this.ismultiple = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue */ "./resources/js/src/pages/alumni/filter.vue");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GunFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isedit: false,
      isdelete: false,
      selectedItem: {},
      details: {},
      payload: {},
      showForm: false,
      data: {
        title: "Graduates",
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
      graduates: [],
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Image',
        align: 'start',
        sortable: false,
        value: 'image'
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'fullname'
      }, {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email'
      }, {
        text: 'Student number',
        align: 'start',
        sortable: true,
        value: 'student_number'
      }, {
        text: 'Batch',
        align: 'start',
        sortable: true,
        value: 'batch'
      }, {
        text: 'Section',
        align: 'start',
        sortable: true,
        value: 'section'
      }, {
        text: 'Course',
        align: 'start',
        sortable: false,
        value: 'course'
      }, {
        text: 'Action',
        align: 'start',
        sortable: false,
        value: 'action'
      }]
    };
  },
  methods: {
    viewGraduate: function viewGraduate(val) {
      this.$router.push({
        name: 'profile',
        params: {
          graduates_id: val.id
        }
      });
    },
    addNew: function addNew() {
      this.$router.push({
        name: 'graduates-create'
      });
    },
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/graduates?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.graduates = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    },
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    cancel: function cancel() {
      this.isdelete = false;
      this.isedit = false;
      this.showForm = false;
    },
    save: function save(val) {
      var _this2 = this;

      console.log(val, "save");
      axios.post("/admin/graduates", val).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();

        _this2.showForm = false;
      });
    },
    update: function update(val) {
      var _this3 = this;

      axios.put("/admin/graduates/".concat(val.id), val).then(function (_ref3) {
        var data = _ref3.data;

        _this3.fetchPage();

        _this3.isedit = false;
        _this3.showForm = false;
      });
    },
    showEdit: function showEdit(val) {
      this.$router.push({
        name: 'profile',
        params: {
          graduates_id: val.id
        }
      });
    },
    showDelete: function showDelete(val) {
      Object.assign(this.selectedItem, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove ".concat(this.selectedItem.fullname, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this4 = this;

      axios["delete"]("/admin/graduates/".concat(this.selectedItem.id)).then(function (_ref4) {
        var data = _ref4.data;

        _this4.fetchPage();

        _this4.cancel();
      });
    },
    printPdf: function printPdf(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/admin/graduates/generate-pdf/".concat(item.id), {
                  responseType: "blob"
                });

              case 2:
                res = _context.sent;
                console.log("🚀 ~ file: index.vue ~ line 217 ~ printPdf ~ res", res);

                if (!(res.status != 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    menus: function menus() {
      return [{
        // text: this._lang('client.view.profile'),
        text: 'Profile',
        route: "profile",
        icon: "person"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Points',
        route: "graduate-profile",
        icon: "mdi-seal"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Employment history',
        route: "graduate-employment-history",
        icon: "mdi-clipboard-list-outline"
      } // {
      //     // text: this._lang('client.view.subscriptions'),
      //     text:'Documents',
      //     route: "client-document",
      //     icon: "mdi-file-document",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Bookings',
      //     route: "client-booking",
      //     icon: "mdi-bookmark-check-outline",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Credit',
      //     route: "client-credit",
      //     icon: "mdi-credit-card-outline",
      // },
      ];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Baccalaureate', 'Masteral', 'Doctorate'],
        // title:{
        //     text: "Highest Educational Attainment"
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isattainment: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getAttainment: function getAttainment() {
      var _this = this;

      this.isattainment = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-attainment?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isattainment = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getAttainment();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Single', 'Married', 'Separated', 'Widowed'],
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      // civil_status:[],
      iscivil: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getCivilStatus: function getCivilStatus() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.iscivil = false;
                _this.hasdata = false;
                params = '';

                if (_this.department_id) {
                  localStorage.setItem('department_id', _this.department_id);
                  localStorage.removeItem('course_id');
                  params = params + '&department_id=' + _this.department_id;
                }

                if (_this.course_id) {
                  localStorage.setItem('course_id', _this.course_id);
                  params = params + '&course_id=' + _this.course_id;
                }

                if (_this.batch) {
                  localStorage.setItem('batch', _this.batch);
                  params = params + '&batch=' + _this.batch;
                }

                _context.next = 8;
                return axios.get("/admin/get-civil-statistics?".concat(params)).then(function (_ref) {
                  var data = _ref.data;
                  _this.series = data;

                  _this.series.forEach(function (element) {
                    if (element > 0) _this.hasdata = true;
                  });

                  _this.iscivil = true;
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context2.sent;
              _context2.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context2.sent;
              _context2.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context2.sent;
              _context2.next = 11;
              return _this4.getDepartments();

            case 11:
              _context2.next = 13;
              return _this4.getCourses();

            case 13:
              _context2.next = 15;
              return _this4.getCivilStatus();

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "civil_status":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Yes', 'No'],
        // title:{
        //     text: "Relevance of the Curriculum",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      iscurriculum: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getCurriculum: function getCurriculum() {
      var _this = this;

      this.iscurriculum = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-curriculum?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.iscurriculum = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getCurriculum();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Contractual', 'Permanent', 'Self-employed', 'Casual'],
        // title:{
        //     text: "Employment status",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isemploymentstatus: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getEmploymentStatus: function getEmploymentStatus() {
      var _this = this;

      this.isemploymentstatus = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-employment-status?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isemploymentstatus = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getEmploymentStatus();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Employed', 'Unemployed'],
        // title:{
        //     text: "Employment",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isemployment: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getEmployment: function getEmployment() {
      var _this = this;

      this.isemployment = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-employment?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isemployment = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getEmployment();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Male', 'Female', 'Transgender', 'Non-binary', 'Prefer not to respond'],
        // title:{
        //     text: "Gender"
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isgender: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getGender: function getGender() {
      var _this = this;

      this.isgender = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-gender?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isgender = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getGender();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['below 5,000', '5,000 - 10,000', '10,000 - 15,000', '15,000 - 20,000', '20,000 - 25,000', 'above 25,000'],
        // title:{
        //     text: "Gross Monthly Income",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isincome: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getIncome: function getIncome() {
      var _this = this;

      this.isincome = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-income?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isincome = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getIncome();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Yes', 'No'],
        // title:{
        //     text: "Promotion",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      ispromotion: true,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getPromotion: function getPromotion() {
      var _this = this;

      this.ispromotion = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-promotion?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.ispromotion = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getPromotion();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {}
  },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['City', 'Municipalty'],
        // title:{
        //     text: "Location of Residents",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isresidence: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getResidence: function getResidence() {
      var _this = this;

      this.isresidence = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-residence?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isresidence = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getResidence();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Less than a month', '1 - 6 months', '7 - 11 months', '1 - 2 years', '2 - 3 years', '3 - 4 years'],
        // title:{
        //     text: "Time to Get the Job",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      istime_jobs: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getTimeJobs: function getTimeJobs() {
      var _this = this;

      this.istime_jobs = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-time-jobs?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.istime_jobs = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getTimeJobs();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Local', 'Abroad'],
        // title:{
        //     text: "Place of work",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      iswork: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getWork: function getWork() {
      var _this = this;

      this.iswork = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-work?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.iswork = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getWork();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    menus: function menus() {
      return [{
        // text: this._lang('client.view.profile'),
        text: 'Civil-status',
        route: "civil-status",
        icon: "mdi-account-group-outline"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Gender',
        route: "gender",
        icon: "mdi-gender-male-female-variant"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Location of Residents',
        route: "residents",
        icon: "mdi-map-marker-check"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Employment',
        route: "employment",
        icon: "mdi-briefcase"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Employment status',
        route: "employment-status",
        icon: "mdi-sass"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Place of work',
        route: "place-work",
        icon: "mdi-domain"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Educational Attainment',
        route: "educational-attainment",
        icon: "mdi-school"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Gross Monthly Income',
        route: "gross-monthly-income",
        icon: "mdi-cash"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Time to Get the Job',
        route: "time-get-job",
        icon: "mdi-map-clock"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Relevance of the Curriculum',
        route: "relevance-curriculum",
        icon: "mdi-book-search"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Promotion',
        route: "promotion",
        icon: "mdi-transfer-up"
      } // {
      //     // text: this._lang('client.view.subscriptions'),
      //     text:'Documents',
      //     route: "client-document",
      //     icon: "mdi-file-document",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Bookings',
      //     route: "client-booking",
      //     icon: "mdi-bookmark-check-outline",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Credit',
      //     route: "client-credit",
      //     icon: "mdi-credit-card-outline",
      // },
      ];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-form-action[data-v-78ecdc47] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-form-action[data-v-e21478b0] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-images[data-v-3c6574fc] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-3c6574fc] {\n  cursor: pointer;\n}\n.class-form-action[data-v-3c6574fc] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-images[data-v-d7e19592] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-d7e19592] {\n  cursor: pointer;\n}\n.image-text-field[data-v-d7e19592] {\n  margin-top: -19px !important;\n}\n.custom-card-action[data-v-d7e19592] {\n  display: flex;\n  justify-content: flex-end;\n}\n.main-container[data-v-d7e19592] {\n  max-height: 87vh;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-images[data-v-50cde6f1] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-50cde6f1] {\n  cursor: pointer;\n}\n.image-text-field[data-v-50cde6f1] {\n  margin-top: -19px !important;\n}\n.custom-card-action[data-v-50cde6f1] {\n  display: flex;\n  justify-content: flex-end;\n}\n.main-container[data-v-50cde6f1] {\n  max-height: 84vh;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    { ref: "form" },
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
                  staticClass: "image-text-field",
                  attrs: { cols: "12", sm: "12" },
                },
                [
                  _c(
                    "v-row",
                    { staticClass: "mb-3" },
                    [
                      _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                        _c("h2", [_vm._v("Educational Informations")]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "7", md: "5" },
                        },
                        [
                          _c("label", [_vm._v("High educational attainment ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.attainmentOptions,
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              "item-text": "name",
                              "item-value": "id",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.attainment,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "attainment", $$v)
                              },
                              expression: "payload.detail.attainment",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5", md: "3" },
                        },
                        [
                          _c("label", [_vm._v(" Prof. Exam Passed  ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.booleanOptions,
                              "item-text": "name",
                              "item-value": "id",
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.prof_exam_passed,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.payload.detail,
                                  "prof_exam_passed",
                                  $$v
                                )
                              },
                              expression: "payload.detail.prof_exam_passed",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [_vm._v(" Award(s) ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { dense: "", filled: "" },
                            model: {
                              value: _vm.payload.detail.awards,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "awards", $$v)
                              },
                              expression: "payload.detail.awards",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5", md: "7" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Course  "),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.course_id || ""
                                },
                              ],
                              items: _vm.courses,
                              "item-text": "name",
                              "item-value": "id",
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.course_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "course_id", $$v)
                              },
                              expression: "payload.course_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5", md: "2" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Section  "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.section || ""
                                },
                              ],
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.section,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "section", $$v)
                              },
                              expression: "payload.section",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5", md: "3" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Year Graduated "),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.batch || ""
                                },
                              ],
                              items: _vm.years,
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.batch,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "batch", $$v)
                              },
                              expression: "payload.batch",
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
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "class-form-action" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-2",
                  attrs: { color: "error" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("prev")
                    },
                  },
                },
                [_vm._v("Previous")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "success" }, on: { click: _vm.next } },
                [_vm._v("Next")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    { ref: "form" },
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
                  staticClass: "image-text-field",
                  attrs: { cols: "12", sm: "12" },
                },
                [
                  _c(
                    "v-row",
                    { staticClass: "mb-3" },
                    [
                      _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                        _c("h2", [_vm._v("Employment Informations")]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "2" },
                        },
                        [
                          _c("label", [_vm._v("Employed ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.booleanOptions,
                              "item-text": "name",
                              "item-value": "id",
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.employed,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "employed", $$v)
                              },
                              expression: "payload.detail.employed",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5" },
                        },
                        [
                          _c("label", [_vm._v(" Employment date ")]),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": true,
                                transition: "scale-transition",
                                "offset-y": "",
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
                                                readonly: "",
                                                dense: "",
                                                filled: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.payload.detail
                                                    .employment_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.payload.detail,
                                                    "employment_date",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "payload.detail.employment_date",
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
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { "no-title": "", scrollable: "" },
                                model: {
                                  value: _vm.payload.detail.employment_date,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.payload.detail,
                                      "employment_date",
                                      $$v
                                    )
                                  },
                                  expression: "payload.detail.employment_date",
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
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "5" },
                        },
                        [
                          _c("label", [_vm._v(" Company name ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.company_name,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.payload.detail,
                                  "company_name",
                                  $$v
                                )
                              },
                              expression: "payload.detail.company_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "3" },
                        },
                        [
                          _c("label", [_vm._v("Status of Employment ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.employmentStatus,
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.employment_status,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.payload.detail,
                                  "employment_status",
                                  $$v
                                )
                              },
                              expression: "payload.detail.employment_status",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "9" },
                        },
                        [
                          _c("label", [_vm._v(" Address ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.c_address,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "c_address", $$v)
                              },
                              expression: "payload.detail.c_address",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c("label", [_vm._v(" City ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.c_city,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "c_city", $$v)
                              },
                              expression: "payload.detail.c_city",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c("label", [_vm._v(" Country ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.countries,
                              "item-value": "id",
                              "item-text": "name",
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.country_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "country_id", $$v)
                              },
                              expression: "payload.detail.country_id",
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
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "class-form-action" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-2",
                  attrs: { color: "error" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("prev")
                    },
                  },
                },
                [_vm._v("Preview")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    { ref: "form" },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "class-images",
                      attrs: { cols: "12", sm: "12" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "graduate-image-container" },
                        [
                          _c("v-avatar", { attrs: { size: "250" } }, [
                            _c("img", {
                              attrs: {
                                src: _vm.payload.image_base64
                                  ? _vm.payload.image_base64
                                  : "/sample/no-image.png",
                              },
                              on: { click: _vm.triggerUpload },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file_input",
                            staticClass: "hidden",
                            attrs: {
                              type: "file",
                              accept: "image/x-png,image/gif,image/jpeg",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.onFileChange($event.target.files)
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "mb-3" },
                    [
                      _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                        _c("h2", [_vm._v("Personal Informations")]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
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
                              "hide-details": "auto",
                              dense: "",
                              filled: "",
                            },
                            model: {
                              value: _vm.payload.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "first_name", $$v)
                              },
                              expression: "payload.first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Last name "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.last_name || ""
                                },
                              ],
                              "hide-details": "auto",
                              dense: "",
                              filled: "",
                            },
                            model: {
                              value: _vm.payload.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "last_name", $$v)
                              },
                              expression: "payload.last_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [_vm._v("Middle name ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { dense: "", filled: "" },
                            model: {
                              value: _vm.payload.middle_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "middle_name", $$v)
                              },
                              expression: "payload.middle_name",
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
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "3" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Student number "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.student_number || ""
                                },
                              ],
                              dense: "",
                              filled: "",
                            },
                            model: {
                              value: _vm.payload.student_number,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "student_number", $$v)
                              },
                              expression: "payload.student_number",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Email "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.email || ""
                                },
                              ],
                              dense: "",
                              filled: "",
                            },
                            model: {
                              value: _vm.payload.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "email", $$v)
                              },
                              expression: "payload.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "3" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Contact number "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.contact_number || ""
                                },
                              ],
                              dense: "",
                              filled: "",
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "2" },
                        },
                        [
                          _c("label", [_vm._v("Civil status ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.civil_status,
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.civil_status,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.payload.detail,
                                  "civil_status",
                                  $$v
                                )
                              },
                              expression: "payload.detail.civil_status",
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
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "3" },
                        },
                        [
                          _c("label", [_vm._v("Birthday ")]),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": true,
                                transition: "scale-transition",
                                "offset-y": "",
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
                                                readonly: "",
                                                dense: "",
                                                filled: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.payload.detail.birthday,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.payload.detail,
                                                    "birthday",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "payload.detail.birthday",
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
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { "no-title": "", scrollable: "" },
                                model: {
                                  value: _vm.payload.detail.birthday,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.payload.detail,
                                      "birthday",
                                      $$v
                                    )
                                  },
                                  expression: "payload.detail.birthday",
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
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [_vm._v(" Location of Residence ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { filled: "", dense: "" },
                            model: {
                              value: _vm.payload.detail.residence,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "residence", $$v)
                              },
                              expression: "payload.detail.residence",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "2" },
                        },
                        [
                          _c("label", [_vm._v(" Gender ")]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.genders,
                              "hide-details": "auto",
                              "menu-props": { "background-color": "#777" },
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.detail.gender,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload.detail, "gender", $$v)
                              },
                              expression: "payload.detail.gender",
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
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "class-form-action" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-2",
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
                { attrs: { color: "success" }, on: { click: _vm.next } },
                [_vm._v("Next")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58& ***!
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
  return _vm.show
    ? _c(
        "v-card",
        [
          _c("v-card-title"),
          _vm._v(" "),
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
                scopedSlots: _vm._u(
                  [
                    {
                      key: "custom_filter",
                      fn: function () {
                        return [
                          _c("gun-filter", {
                            attrs: { filter: _vm.data.filter },
                          }),
                        ]
                      },
                      proxy: true,
                    },
                  ],
                  null,
                  false,
                  3669381223
                ),
              }),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "table-fix-height",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.graduates,
                  "single-select": false,
                  search: _vm.data.keyword,
                  "server-items-length": _vm.total,
                  "footer-props": _vm.footerPages,
                  options: _vm.options,
                  "items-per-page": _vm.options.itemsPerPage,
                  loading: _vm.data.isFetching,
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
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.status",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          !item.status
                            ? _c(
                                "v-btn",
                                { attrs: { icon: "", color: "error" } },
                                [_c("v-icon", [_vm._v("mdi-close")])],
                                1
                              )
                            : _c(
                                "v-btn",
                                { attrs: { icon: "", color: "success" } },
                                [_c("v-icon", [_vm._v("mdi-check")])],
                                1
                              ),
                        ]
                      },
                    },
                  ],
                  null,
                  false,
                  1125010116
                ),
              }),
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
                      return _vm.$emit("close")
                    },
                  },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "success" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("save")
                    },
                  },
                },
                [_vm._v("Save")]
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { attrs: { height: "92vh" } },
    [
      _c("v-card-title", [
        _c("span", { staticClass: "text-h5" }, [
          _vm._v("Graduate Informations"),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "main-container" },
        [
          _c(
            "v-stepper",
            {
              model: {
                value: _vm.e1,
                callback: function ($$v) {
                  _vm.e1 = $$v
                },
                expression: "e1",
              },
            },
            [
              _c(
                "v-stepper-header",
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 1, step: "1" } },
                    [
                      _vm._v(
                        "\n                    Personal Information\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 2, step: "2" } },
                    [
                      _vm._v(
                        "\n                    Educational Information\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 3, step: "3" } },
                    [
                      _vm._v(
                        "\n                    Employment Information\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c("personal", {
                        attrs: { payload: _vm.payload },
                        on: { cancel: _vm.cancel, next: _vm.next },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "2" } },
                    [
                      _c("educational", {
                        attrs: { payload: _vm.payload },
                        on: {
                          cancel: _vm.cancel,
                          next: _vm.next,
                          prev: _vm.prev,
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
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "3" } },
                    [
                      _c("employment", {
                        attrs: { payload: _vm.payload },
                        on: {
                          cancel: _vm.cancel,
                          save: _vm.save,
                          prev: _vm.prev,
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
          },
          model: {
            value: _vm.ismultiple,
            callback: function ($$v) {
              _vm.ismultiple = $$v
            },
            expression: "ismultiple",
          },
        },
        [
          _c("con-form", {
            attrs: { show: _vm.ismultiple },
            on: { close: _vm.closeDialog, save: _vm.saveMultiple },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c& ***!
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
    { attrs: { elevation: "1", "max-height": "92vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data, hide: ["filter", "addNew"] },
            on: { refresh: _vm.fetchPage, search: _vm.fetchPage },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("gun-filter", { attrs: { filter: _vm.data.filter } }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.histories,
              "max-height": "100%",
              "single-select": false,
              search: _vm.data.keyword,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              loading: _vm.data.isFetching,
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
                key: "item.country",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.country.name) +
                        "\n            "
                    ),
                  ]
                },
              },
            ]),
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "filter-main-container" }, [
    _c(
      "div",
      [
        _c(
          "v-flex",
          { attrs: { xs12: "" } },
          [
            _c(
              "v-flex",
              {
                staticClass: "d-block mb-5 mr-3",
                attrs: { xs12: "", sm6: "" },
              },
              [
                _c("label", [_vm._v("Batch")]),
                _vm._v(" "),
                _c("v-autocomplete", {
                  attrs: {
                    items: _vm.years,
                    "hide-details": "auto",
                    "menu-props": { "background-color": "#777" },
                    filled: "",
                    dense: "",
                    clearable: "",
                  },
                  model: {
                    value: _vm.filter.batch,
                    callback: function ($$v) {
                      _vm.$set(_vm.filter, "batch", $$v)
                    },
                    expression: "filter.batch",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { staticClass: "d-block mb-5", attrs: { xs12: "", sm6: "" } },
              [
                _c("label", [_vm._v("Course")]),
                _vm._v(" "),
                _c("v-autocomplete", {
                  attrs: {
                    items: _vm.courses,
                    "item-text": "code",
                    "item-value": "id",
                    "hide-details": "auto",
                    filled: "",
                    dense: "",
                    required: "",
                    clearable: "",
                  },
                  model: {
                    value: _vm.filter.course_id,
                    callback: function ($$v) {
                      _vm.$set(_vm.filter, "course_id", $$v)
                    },
                    expression: "filter.course_id",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { attrs: { height: "92vh" } },
    [
      _c(
        "v-card-title",
        [
          _c("span", { staticClass: "text-h5" }, [
            _vm._v("Graduate Informations"),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "success" },
              on: {
                click: function ($event) {
                  return _vm.triggerInputFile()
                },
              },
            },
            [_vm._v("Multiple add")]
          ),
          _vm._v(" "),
          _c("input", {
            ref: "fileInput",
            attrs: {
              type: "file",
              accept:
                ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
              hidden: "",
            },
            on: {
              change: function ($event) {
                return _vm.handleFileUpload()
              },
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "main-container" },
        [
          _c(
            "v-stepper",
            {
              model: {
                value: _vm.e1,
                callback: function ($$v) {
                  _vm.e1 = $$v
                },
                expression: "e1",
              },
            },
            [
              _c(
                "v-stepper-header",
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 1, step: "1" } },
                    [
                      _vm._v(
                        "\n                    Personal Information\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 2, step: "2" } },
                    [
                      _vm._v(
                        "\n                    Educational Information\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 3, step: "3" } },
                    [
                      _vm._v(
                        "\n                    Employment Information\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c("personal", {
                        attrs: { payload: _vm.payload },
                        on: { cancel: _vm.cancel, next: _vm.next },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "2" } },
                    [
                      _c("educational", {
                        attrs: { payload: _vm.payload },
                        on: {
                          cancel: _vm.cancel,
                          next: _vm.next,
                          prev: _vm.prev,
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
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "3" } },
                    [
                      _c("employment", {
                        attrs: { payload: _vm.payload },
                        on: {
                          cancel: _vm.cancel,
                          save: _vm.save,
                          prev: _vm.prev,
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
          },
          model: {
            value: _vm.ismultiple,
            callback: function ($$v) {
              _vm.ismultiple = $$v
            },
            expression: "ismultiple",
          },
        },
        [
          _c("con-form", {
            attrs: { show: _vm.ismultiple },
            on: { close: _vm.closeDialog, save: _vm.saveMultiple },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { attrs: { elevation: "1", "max-height": "92vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data },
            on: {
              addNew: _vm.addNew,
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
                    _c("gun-filter", { attrs: { filter: _vm.data.filter } }),
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
              items: _vm.graduates,
              "max-height": "100%",
              "single-select": false,
              search: _vm.data.keyword,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              loading: _vm.data.isFetching,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
              "click:row": _vm.viewGraduate,
            },
            scopedSlots: _vm._u([
              {
                key: "item.image",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-avatar",
                      { attrs: { size: "40" } },
                      [
                        _c("v-img", {
                          attrs: {
                            src: item.avatar
                              ? item.avatar
                              : "/sample/no-image.png",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "item.section",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.section.toUpperCase()) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.course",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.course.code) +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("content-view", { attrs: { menus: _vm.menus } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Highest Educational Attainment\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getAttainment(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getAttainment },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getAttainment },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isattainment && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Civil Status\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getCivilStatus(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCivilStatus },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCivilStatus },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iscivil && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Relevance of the Curriculum\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getCurriculum(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCurriculum },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCurriculum },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iscurriculum && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Employment status\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getEmploymentStatus(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmploymentStatus },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmploymentStatus },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isemploymentstatus && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Employment\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getEmployment(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmployment },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmployment },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isemployment && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Gender\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getGender(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getGender },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getGender },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isgender && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Gross Monthly Income\n       "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getIncome(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getIncome },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getIncome },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isincome && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Promotion\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getPromotion(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getPromotion },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getPromotion },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.ispromotion && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Location of Residents\n         "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getResidence(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getResidence },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getResidence },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isresidence
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Time to Get the Job\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getTimeJobs(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getTimeJobs },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getTimeJobs },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.istime_jobs && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc& ***!
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
    "v-card",
    [
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Place of work\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getWork(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getWork },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getWork },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iswork && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498& ***!
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
  return _c("content-view-statistics", { attrs: { menus: _vm.menus } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/alumni/components/educational.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/educational.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./educational.vue?vue&type=template&id=78ecdc47&scoped=true& */ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true&");
/* harmony import */ var _educational_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./educational.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _educational_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78ecdc47",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/components/educational.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./educational.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=style&index=0&id=78ecdc47&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_style_index_0_id_78ecdc47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./educational.vue?vue&type=template&id=78ecdc47&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/educational.vue?vue&type=template&id=78ecdc47&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_educational_vue_vue_type_template_id_78ecdc47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/components/employment.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/employment.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employment.vue?vue&type=template&id=e21478b0&scoped=true& */ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true&");
/* harmony import */ var _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e21478b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/components/employment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=style&index=0&id=e21478b0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_style_index_0_id_e21478b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=template&id=e21478b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/employment.vue?vue&type=template&id=e21478b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_e21478b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/components/personal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/personal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.vue?vue&type=template&id=3c6574fc&scoped=true& */ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true&");
/* harmony import */ var _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c6574fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/components/personal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=style&index=0&id=3c6574fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_3c6574fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal.vue?vue&type=template&id=3c6574fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/components/personal.vue?vue&type=template&id=3c6574fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_3c6574fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-form.vue?vue&type=template&id=1795fc58& */ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&");
/* harmony import */ var _csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv-form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/csv-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./csv-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./csv-form.vue?vue&type=template&id=1795fc58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=d7e19592&scoped=true& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7e19592",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=d7e19592&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/emp-history.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/pages/alumni/emp-history.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emp-history.vue?vue&type=template&id=689a9f1c& */ "./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c&");
/* harmony import */ var _emp_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emp-history.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _emp_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/emp-history.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emp_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./emp-history.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/emp-history.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emp_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./emp-history.vue?vue&type=template&id=689a9f1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/emp-history.vue?vue&type=template&id=689a9f1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emp_history_vue_vue_type_template_id_689a9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=3bdc1a65& */ "./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=3bdc1a65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=50cde6f1&scoped=true& */ "./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50cde6f1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=50cde6f1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f8f2b75& */ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2f8f2b75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=7bd93c52& */ "./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=7bd93c52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attainment.vue?vue&type=template&id=1d2fea5e& */ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&");
/* harmony import */ var _attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attainment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/attainment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attainment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attainment.vue?vue&type=template&id=1d2fea5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./civil-status.vue?vue&type=template&id=d6d3ff72& */ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&");
/* harmony import */ var _civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./civil-status.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/civil-status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./civil-status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./civil-status.vue?vue&type=template&id=d6d3ff72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curriculum.vue?vue&type=template&id=012ea0b6& */ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&");
/* harmony import */ var _curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/curriculum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./curriculum.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./curriculum.vue?vue&type=template&id=012ea0b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employment-status.vue?vue&type=template&id=46502948& */ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&");
/* harmony import */ var _employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employment-status.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/employment-status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment-status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment-status.vue?vue&type=template&id=46502948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employment.vue?vue&type=template&id=7ec867e7& */ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&");
/* harmony import */ var _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/employment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=template&id=7ec867e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender.vue?vue&type=template&id=c89b2488& */ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&");
/* harmony import */ var _gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/gender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gender.vue?vue&type=template&id=c89b2488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income.vue?vue&type=template&id=d2572eb8& */ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&");
/* harmony import */ var _income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/income.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./income.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./income.vue?vue&type=template&id=d2572eb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.vue?vue&type=template&id=521cc5f8& */ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&");
/* harmony import */ var _promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/promotion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./promotion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./promotion.vue?vue&type=template&id=521cc5f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./residence.vue?vue&type=template&id=68238a4a& */ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&");
/* harmony import */ var _residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./residence.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/residence.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./residence.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./residence.vue?vue&type=template&id=68238a4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-job.vue?vue&type=template&id=44c2b610& */ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&");
/* harmony import */ var _time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-job.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["render"],
  _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/time-job.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./time-job.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./time-job.vue?vue&type=template&id=44c2b610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.vue?vue&type=template&id=070676cc& */ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&");
/* harmony import */ var _work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/work.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./work.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./work.vue?vue&type=template&id=070676cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=f5e50498& */ "./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=f5e50498& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);