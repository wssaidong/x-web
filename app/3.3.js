webpackJsonp([3],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(177)

	/* script */
	__vue_exports__ = __webpack_require__(179)

	/* template */
	var __vue_template__ = __webpack_require__(180)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\github_code\\vue2-demo\\src\\pages\\home\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3d770dd8"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3d770dd8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3d770dd8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(161)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../../node_modules/_vue-loader@9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-3d770dd8&scoped=true!../../../node_modules/_less-loader@2.2.3@less-loader/index.js!../../../node_modules/_vue-loader@9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../../node_modules/_vue-loader@9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-3d770dd8&scoped=true!../../../node_modules/_less-loader@2.2.3@less-loader/index.js!../../../node_modules/_vue-loader@9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(168);

	exports.default = {
	    computed: (0, _vuex.mapState)({ user: function user(state) {
	            return state.user;
	        } })
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('v-header', {
	    attrs: {
	      "title": "首页"
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "slot": "left",
	      "to": "/"
	    },
	    slot: "left"
	  }, [_vm._v("首页")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "slot": "right",
	      "to": "/signout"
	    },
	    slot: "right"
	  }, [_vm._v("退出")])], 1), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "padding": "50px"
	    }
	  }, [_vm._v(_vm._s(_vm.user.name) + "欢迎回家")])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3d770dd8", module.exports)
	  }
	}

/***/ })

});