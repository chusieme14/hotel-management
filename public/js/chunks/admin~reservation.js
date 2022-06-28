(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin~reservation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    dialog: {},
    payload: {},
    selectedRoom: {}
  },
  data: function data() {
    return {
      date_end: false,
      date_start: false,
      time_end_picker: false,
      time_start_picker: false,
      start_time: {},
      end_time: {},
      receipt_dialog: true
    };
  },
  methods: {
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.$emit('checkin');
    },
    saveDateEnd: function saveDateEnd() {
      this.payload.room_guest_end = this.$moment("".concat(this.end_time.date, " ").concat(this.end_time.time)).format('YYYY-MM-DD h:mm a');
      this.time_end_picker = false;
      this.date_end = false;
    },
    saveDateStart: function saveDateStart() {
      this.payload.room_guest_start = this.$moment("".concat(this.start_time.date, " ").concat(this.start_time.time)).format('YYYY-MM-DD h:mm a');
      this.time_start_picker = false;
      this.date_start = false;
    }
  },
  computed: {
    computeAdditional: function computeAdditional() {
      if (this.selectedRoom.room_type.id) {
        console.log(this.selectedRoom.room_type.extra_person_rate, "this.selectedRoom.room_type.extra_person_rate");
        console.log(this.payload.room_guest_extra_person, "this.payload.room_guest_extra_person");
        return this.payload.total_ads = this.selectedRoom.room_type.extra_person_rate * this.payload.room_guest_extra_person;
      }

      return 0;
    },
    totalDays: function totalDays() {
      var start = this.$moment(this.payload.room_guest_start).unix();
      var end = this.$moment(this.payload.room_guest_end).unix();
      var totalDays = (end - start) / 86400;
      console.log(start, "start kalmbre");
      console.log(end, "end kalmbre");
      console.log(totalDays, "totalDays kalmbre");
      if (totalDays > 0 && totalDays < 1) return this.payload.room_total_days = 1;

      if (this.payload.from == "reservation") {
        return this.payload.room_total_days = Math.ceil(totalDays);
      }

      return this.payload.room_total_days = Math.round(totalDays);
    }
  },
  watch: {
    dialog: {
      handler: function handler(val) {
        if (val) {
          console.log(this.payload, "payload kunu");
          this.start_time.time = this.$moment(this.payload.room_guest_start).format('h:mm');
          this.end_time.time = this.$moment(this.payload.room_guest_end).format('h:mm');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-total-main[data-v-31f304e6] {\n  display: flex;\n  justify-content: center;\n}\n.class-total-main div[data-v-31f304e6] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  letter-spacing: 1.5px;\n}\n.class-total-main div h4[data-v-31f304e6] {\n  font-size: 24px !important;\n  margin-bottom: 5px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.dialog
        ? _c(
            "v-dialog",
            {
              attrs: { persistent: "", width: "1200" },
              model: {
                value: _vm.dialog,
                callback: function ($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog",
              },
            },
            [
              _c(
                "v-form",
                { ref: "form", attrs: { "lazy-validation": "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _vm._v(
                          "CHECK IN FOR ROOM " +
                            _vm._s(_vm.payload.room_number || "")
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
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
                                              _vm._v(
                                                "\r\n                                    GUEST'S INFORMATION\r\n                                "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "col-text-field",
                                              attrs: { cols: "12", sm: "12" },
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v("Guest name"),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules: [
                                                            function () {
                                                              return (
                                                                !!_vm.payload
                                                                  .room_guest_name ||
                                                                ""
                                                              )
                                                            },
                                                          ],
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.payload
                                                              .room_guest_name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.payload,
                                                              "room_guest_name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "payload.room_guest_name",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Guest's contact number"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.payload
                                                              .room_guest_contact,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.payload,
                                                              "room_guest_contact",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "payload.room_guest_contact",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Guest's address"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-textarea", {
                                                        attrs: {
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.payload
                                                              .room_guest_address,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.payload,
                                                              "room_guest_address",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "payload.room_guest_address",
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
                                "v-col",
                                { attrs: { cols: "6" } },
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
                                              _vm._v(
                                                "\r\n                                    ROOM INFORMATION\r\n                                "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "col-text-field",
                                              attrs: { cols: "12", sm: "12" },
                                            },
                                            [
                                              _c(
                                                "div",
                                                [
                                                  _c("label", [_vm._v("Type")]),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      readonly: "",
                                                      filled: "",
                                                      dense: "",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.payload.room_type,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.payload,
                                                          "room_type",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "payload.room_type",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v("Room rate"),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm._formatNumber(
                                                              _vm.payload
                                                                .room_rate
                                                            ),
                                                          readonly: "",
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Extra Hour Rate"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm._formatNumber(
                                                              _vm.payload
                                                                .room_extra_hour
                                                            ),
                                                          readonly: "",
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Extra Person Rate"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm._formatNumber(
                                                              _vm.payload
                                                                .room_extra_person
                                                            ),
                                                          readonly: "",
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Enter Extra Persons"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          type: "number",
                                                          filled: "",
                                                          dense: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.payload
                                                              .room_guest_extra_person,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.payload,
                                                              "room_guest_extra_person",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "payload.room_guest_extra_person",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c(
                                                        "v-dialog",
                                                        {
                                                          ref: "dialog",
                                                          attrs: {
                                                            persistent: "",
                                                            width: "290px",
                                                          },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key: "activator",
                                                                fn: function (
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  var attrs =
                                                                    ref.attrs
                                                                  return [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Start Date"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-text-field",
                                                                      _vm._g(
                                                                        _vm._b(
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                filled:
                                                                                  "",
                                                                                dense:
                                                                                  "",
                                                                                rules:
                                                                                  [
                                                                                    function () {
                                                                                      return (
                                                                                        _vm
                                                                                          .$moment(
                                                                                            _vm
                                                                                              .payload
                                                                                              .room_guest_end
                                                                                          )
                                                                                          .unix() >
                                                                                          _vm
                                                                                            .$moment(
                                                                                              _vm
                                                                                                .payload
                                                                                                .room_guest_start
                                                                                            )
                                                                                            .unix() ||
                                                                                        "start date must be less than end date"
                                                                                      )
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            model:
                                                                              {
                                                                                value:
                                                                                  _vm
                                                                                    .payload
                                                                                    .room_guest_start,
                                                                                callback:
                                                                                  function (
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.payload,
                                                                                      "room_guest_start",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                expression:
                                                                                  "payload.room_guest_start",
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
                                                            ],
                                                            null,
                                                            false,
                                                            596016347
                                                          ),
                                                          model: {
                                                            value:
                                                              _vm.date_start,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.date_start =
                                                                $$v
                                                            },
                                                            expression:
                                                              "date_start",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _vm.time_start_picker
                                                            ? _c(
                                                                "v-time-picker",
                                                                {
                                                                  attrs: {
                                                                    format:
                                                                      "ampm",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .start_time
                                                                        .time,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.start_time,
                                                                          "time",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "start_time.time",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                        icon: "",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.time_start_picker = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            " mdi-calendar "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-spacer"
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.date_start = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        cancel\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.saveDateStart()
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        OK\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              )
                                                            : _c(
                                                                "v-date-picker",
                                                                {
                                                                  attrs: {
                                                                    scrollable:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .start_time
                                                                        .date,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.start_time,
                                                                          "date",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "start_time.date",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                        icon: "",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.time_start_picker = true
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            " mdi-timer "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-spacer"
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.date_start = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        cancel\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.saveDateStart()
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        OK\r\n                                                    "
                                                                      ),
                                                                    ]
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
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c(
                                                        "v-dialog",
                                                        {
                                                          ref: "dialog",
                                                          attrs: {
                                                            persistent: "",
                                                            width: "290px",
                                                          },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key: "activator",
                                                                fn: function (
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  var attrs =
                                                                    ref.attrs
                                                                  return [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "End Date"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-text-field",
                                                                      _vm._g(
                                                                        _vm._b(
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                filled:
                                                                                  "",
                                                                                dense:
                                                                                  "",
                                                                                rules:
                                                                                  [
                                                                                    function () {
                                                                                      return (
                                                                                        _vm
                                                                                          .$moment(
                                                                                            _vm
                                                                                              .payload
                                                                                              .room_guest_end
                                                                                          )
                                                                                          .unix() >
                                                                                          _vm
                                                                                            .$moment(
                                                                                              _vm
                                                                                                .payload
                                                                                                .room_guest_start
                                                                                            )
                                                                                            .unix() ||
                                                                                        "end date must be greater than start date"
                                                                                      )
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            model:
                                                                              {
                                                                                value:
                                                                                  _vm
                                                                                    .payload
                                                                                    .room_guest_end,
                                                                                callback:
                                                                                  function (
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.payload,
                                                                                      "room_guest_end",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                expression:
                                                                                  "payload.room_guest_end",
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
                                                            ],
                                                            null,
                                                            false,
                                                            22026784
                                                          ),
                                                          model: {
                                                            value: _vm.date_end,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.date_end = $$v
                                                            },
                                                            expression:
                                                              "date_end",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _vm.time_end_picker
                                                            ? _c(
                                                                "v-time-picker",
                                                                {
                                                                  attrs: {
                                                                    format:
                                                                      "ampm",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .end_time
                                                                        .time,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.end_time,
                                                                          "time",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "end_time.time",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                        icon: "",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.time_end_picker = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            " mdi-calendar "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-spacer"
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.date_end = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        cancel\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.saveDateEnd()
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        OK\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              )
                                                            : _c(
                                                                "v-date-picker",
                                                                {
                                                                  attrs: {
                                                                    scrollable:
                                                                      "",
                                                                    min: _vm
                                                                      .payload
                                                                      .room_guest_start,
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .end_time
                                                                        .date,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.end_time,
                                                                          "date",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "end_time.date",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                        icon: "",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.time_end_picker = true
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            " mdi-timer "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-spacer"
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.date_end = false
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        cancel\r\n                                                    "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        text: "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.saveDateEnd()
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                        OK\r\n                                                    "
                                                                      ),
                                                                    ]
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
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Total Days checked in"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm.payload
                                                              .room_total_days,
                                                          filled: "",
                                                          dense: "",
                                                          readonly: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v("Initial total"),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm._formatNumber(
                                                              _vm.totalDays *
                                                                _vm.payload
                                                                  .room_rate
                                                            ),
                                                          filled: "",
                                                          dense: "",
                                                          readonly: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex child-flex",
                                                  staticStyle: {
                                                    padding: "0px !important",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Extra person total"
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm.computeAdditional,
                                                          filled: "",
                                                          dense: "",
                                                          readonly: "",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c("label", [
                                                        _vm._v("Total Bill"),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          value:
                                                            _vm._formatNumber(
                                                              _vm.totalDays *
                                                                _vm.payload
                                                                  .room_rate +
                                                                _vm.computeAdditional
                                                            ),
                                                          filled: "",
                                                          dense: "",
                                                          readonly: "",
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
                          _c(
                            "v-col",
                            {
                              staticClass: "col-text-field",
                              attrs: { align: "end" },
                            },
                            [
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
                                  staticClass: "ml-2",
                                  attrs: { color: "success" },
                                  on: { click: _vm.save },
                                },
                                [_vm._v("Check In")]
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
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/rooms/form/checkin.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/pages/rooms/form/checkin.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin.vue?vue&type=template&id=31f304e6&scoped=true& */ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true&");
/* harmony import */ var _checkin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& */ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31f304e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/rooms/form/checkin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=style&index=0&id=31f304e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_style_index_0_id_31f304e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkin.vue?vue&type=template&id=31f304e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/rooms/form/checkin.vue?vue&type=template&id=31f304e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkin_vue_vue_type_template_id_31f304e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);