(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{369:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller","aria-hidden":"true"}},[t._v("#")]),t._v(" Controller "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Controller } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v5.1.3/packages/common/src/mvc/decorators/class/controller.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/class/controller.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("Controller")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("path"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/common/mvc/interfaces/PathParamsType.html"}},[a("span",{staticClass:"token"},[t._v("PathParamsType")])]),t._v(" | "),a("a",{attrs:{href:"/api/common/mvc/interfaces/IControllerOptions.html"}},[a("span",{staticClass:"token"},[t._v("IControllerOptions")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" ...dependencies"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{staticClass:"token"},[t._v("Type")])]),t._v("<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token keyword"},[t._v("any")]),t._v(">"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Declare a new controller with his Rest path. His methods annotated will be collected to build the routing list.\nThis routing listing will be built with the "),a("code",[t._v("express.Router")]),t._v(" object.")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript extra-class"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/calendars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" provide CalendarCtrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NextFunction\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="Controller.md";s.default=e.exports}}]);