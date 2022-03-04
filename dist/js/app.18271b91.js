(function(e){function t(t){for(var n,a,o=t[0],_=t[1],c=t[2],u=0,h=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,o=1;o<i.length;o++){var _=i[o];0!==s[_]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/minis-calculator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],_=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=_;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},3105:function(e,t,i){"use strict";i("3e26")},"3e26":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[e.isPageLoad?i("div",{staticClass:"minis__wrapper"},[e.isDesktop?i("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){e.isFullscreen=!e.isFullscreen}},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),i("LayoutContent",{style:{filter:e.openedModalName?"blur(2px)":"none"},attrs:{appWidth:e.appWidth,appHeight:e.appHeight,isDesktop:e.isDesktop,history:e.history,translate:e.translate},on:{openModal:function(t){e.openedModalName=t},addToHistory:e.addToHistory,clearHistory:e.clearHistory}}),i("AppModal",{model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?i("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){e.isFullscreen=!e.isFullscreen}}}):e._e()],1),e.isDesktop?i("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?i("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[e._v("Minis")]):e._e()],1):i("Icon",{staticClass:"loader",attrs:{type:"loader",size:100,rotate:""}})],1)},r=[],a=i("5530"),o=i("1da1"),_=i("3835"),c=(i("96cf"),i("07ac"),i("d3b7"),i("159b"),i("4fad"),i("2ef0")),l=i.n(c),u=i("2f62"),h={name:"App",data:function(){return{isPageLoad:!1}},watch:{translateOfMinis:{deep:!0,immediate:!0,handler:function(e){Object.values(e).length&&(document.title=this.translate("title"))}},themeMain:{deep:!0,handler:"themeMainInit"},themeSpecial:{deep:!0,handler:"themeSpecialInit"},themesJSON:{deep:!0,handler:"themesJSONInit"}},computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["translate","translateOfMinis","themeMain","themeSpecialName","themeSpecial"])),Object(u["d"])({minisTheme:function(e){return e.minis.minisTheme},minisLang:function(e){return e.minis.minisLang},themesJSON:function(e){return e.minis.themesJSON},minisJSON:function(e){return e.minis.minisJSON},translateJSON:function(e){return e.minis.translateJSON}})),methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])({switchTheme:function(e,t){return e("switchTheme",t)},switchLang:function(e,t){return e("switchLang",t)},initMinis:function(e,t){return e("initMinis",t)}})),{},{themeMainInit:function(){if(!this.themeMain)return this.switchTheme("main");Object.entries(this.themeMain.colors).forEach((function(e){var t=Object(_["a"])(e,2),i=t[0],n=t[1];document.body.style.setProperty("--".concat(i),n)}))},themeSpecialInit:function(){if(!this.themeSpecial)return this.switchTheme("special");document.body.style.setProperty("--special-color",this.themeSpecial.normal)},themesJSONInit:function(){Object.entries(this.themesJSON.default||[]).forEach((function(e){var t=Object(_["a"])(e,2),i=t[0],n=t[1];document.body.style.setProperty("--".concat(i,"-color"),n)}))},isExistMinisData:function(){return l.a.size(this.themesJSON)&&l.a.size(this.minisJSON)&&l.a.size(this.translateJSON)},getMinisOptions:function(){var e=this,t="https://adequm.github.io/minis";return new Promise(function(){var i=Object(o["a"])(regeneratorRuntime.mark((function i(n){var s,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch("".concat(t,"/translateJSON.json")).then((function(e){return e.json()}));case 3:return s=i.sent,i.next=6,fetch("".concat(t,"/minisJSON.json")).then((function(e){return e.json()}));case 6:return r=i.sent,i.next=9,fetch("".concat(t,"/themesJSON.json")).then((function(e){return e.json()}));case 9:a=i.sent,n({translateJSON:s,minisJSON:r,themesJSON:a}),i.next=16;break;case 13:i.prev=13,i.t0=i["catch"](0),setTimeout(Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isExistMinisData()&&(e.themeMainInit(),e.themeSpecialInit(),e.themesJSONInit(),e.isPageLoad=!0),t.next=3,e.getMinisOptions();case 3:i=t.sent,n(i);case 5:case"end":return t.stop()}}),t)}))),2e3);case 16:case"end":return i.stop()}}),i,null,[[0,13]])})));return function(e){return i.apply(this,arguments)}}())}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMinisOptions();case 2:i=t.sent,e.initMinis(i),e.isPageLoad=!0;case 5:case"end":return t.stop()}}),t)})))()}},d={data:function(){return{minContainerWidth:300,minContainerHeight:560,containerWidth:null,containerHeight:null,innerHeight:null,innerWidth:null,startResizeX:null,startResizeY:null,startResizeWidth:null,startResizeHeight:null,resizeHash:null,onInputFocus:!1,isFullscreen:!1}},watch:{isFullscreen:"resizeContainer",innerHeight:"resizeContainer",innerWidth:"resizeContainer"},computed:{isWidthMore768:function(e){return e.innerWidth>=768},isDesktop:function(e){return e.isWidthMore768&&!e.isFullscreen},appWidth:function(e){return e.isDesktop?e.containerWidth:e.innerWidth},appHeight:function(e){return e.isDesktop?e.containerHeight:e.innerHeight},maxContainerWidth:function(e){return e.innerWidth-180},maxContainerHeight:function(e){return e.innerHeight-100},isMinContainerWidth:function(e){return e.containerWidth===e.minContainerWidth},isMaxContainerWidth:function(e){return e.containerWidth===e.maxContainerWidth},isMinContainerHeight:function(e){return e.containerHeight===e.minContainerHeight},isMaxContainerHeight:function(e){return e.containerHeight===e.maxContainerHeight}},methods:{resizeContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.containerWidth,i=this.minContainerWidth,n=this.maxContainerWidth,s=this.containerHeight,r=this.minContainerHeight,a=this.maxContainerHeight;this.containerWidth=l.a.clamp(e.containerWidth||t,i,n),this.containerHeight=l.a.clamp(e.containerHeight||s,r,a)},setContainerSize:function(e){var t=this,i=e.pageX,n=e.pageY;requestAnimationFrame((function(){if(!l.a.isNull(t.startResizeX)&&!l.a.isNull(t.startResizeWidth)&&!l.a.isNull(t.startResizeY)&&!l.a.isNull(t.startResizeHeight)){var e=2*(i-t.startResizeX)+t.startResizeWidth,s=2*(n-t.startResizeY)+t.startResizeHeight;t.resizeContainer({containerWidth:e,containerHeight:s})}}))},startResize:function(e){this.startResizeX=e.pageX,this.startResizeY=e.pageY,this.startResizeWidth=this.containerWidth,this.startResizeHeight=this.containerHeight,document.addEventListener("mousemove",this.setContainerSize),document.addEventListener("mouseup",this.stopResize),window.addEventListener("mouseleave",this.stopResize),window.addEventListener("click",this.stopResize),window.addEventListener("contextmenu",this.stopResize)},stopResize:function(){this.startResizeX=null,this.startResizeY=null,this.startResizeWidth=null,this.startResizeHeight=null,document.removeEventListener("mousemove",this.setContainerSize),document.removeEventListener("mouseup",this.stopResize),window.removeEventListener("mouseleave",this.stopResize),window.removeEventListener("click",this.stopResize),window.removeEventListener("contextmenu",this.stopResize)},autoResize:function(){var e=this.isMinContainerWidth&&this.isMinContainerHeight;this.resizeContainer({containerWidth:e?this.maxContainerWidth:this.minContainerWidth,containerHeight:e?this.maxContainerHeight:this.minContainerHeight})}},beforeMount:function(){var e=this,t=function(){e.innerWidth=document.body.offsetWidth,e.onInputFocus||(e.innerHeight=innerHeight)};t(),window.addEventListener("resize",t),setInterval(t,1e3)}},m=(i("ac1f"),i("1276"),i("cb29"),i("99af"),i("e9c4"),{watch:{themeHash:{immediate:!0,handler:function(){var e=this,t=new Image,i=location.pathname.split("/")[1];t.src="/".concat(i,"/icon.svg"),t.addEventListener("load",(function(){[16,32].forEach((function(i){var n=document.createElement("canvas");n.height=i,n.width=i;var s=n.getContext("2d");s.beginPath(),s.drawImage(t,0,0,i,i),s.globalCompositeOperation="source-in",s.rect(0,0,i,i),s.fillStyle=e.themeSpecial.normal,s.fill();var r=document.querySelector('link[sizes="'.concat(i,"x").concat(i,'"]'));r.setAttribute("href",n.toDataURL())}))}))}}},computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["themeSpecial","themeMain"])),{},{themeHash:function(){return JSON.stringify(this.themeSpecial)+JSON.stringify(this.themeMain)}})}),p=i("aa8c"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[i("Icon",{attrs:{type:"settings"},on:{click:function(t){return t.preventDefault(),e.$emit("input",!e.value)}}}),i("Icon",{attrs:{type:e.themeIcon},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),i("Icon",{attrs:{type:"heart"},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),i("Icon",{attrs:{type:"globe"},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),i("Icon",{attrs:{type:"maximize-2"},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}})],1)},v=[],g={name:"SettingsDesktop",components:{Icon:p["a"]},props:{themeIcon:String,value:Boolean}},O=g,E=(i("3105"),i("2877")),b=Object(E["a"])(O,f,v,!1,null,"26cf57fa",null),M=b.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[i("Icon",{attrs:{type:e.themeIcon,size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),i("Icon",{attrs:{type:"heart",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),i("Icon",{attrs:{type:"globe",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),e.isWidthMore768?i("Icon",{attrs:{type:"minimize-2",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}}):e._e()],1)},w=[],k={name:"SettingsMobile",components:{Icon:p["a"]},props:{themeIcon:String,value:Boolean,isWidthMore768:Boolean}},y=k,D=(i("eeda"),Object(E["a"])(y,j,w,!1,null,"1b910b6b",null)),C=D.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.value?i("div",{staticClass:"modal"},[i("div",{staticClass:"modal__background",on:{click:function(t){return e.$emit("input",null)}}}),i("div",{staticClass:"modal__content"},[e._t("default")],2)]):e._e()},S=[],W={name:"AppModal",props:{value:String}},I=W,L=(i("a349"),Object(E["a"])(I,P,S,!1,null,"1aa9905c",null)),R=L.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"calculator",staticClass:"minis__content",style:{minHeight:e.appHeight+"px"}},[i("div",{staticClass:"calculator__display"},[e.isDesktop?e._e():i("div",{staticClass:"settings__button",on:{click:function(t){return e.$emit("openModal","settings")}}},[i("Icon",{attrs:{type:"settings"}})],1),i("div",{ref:"calculator__history",staticClass:"calculator__history"},[i("div",{staticClass:"calculator__history_container"},e._l(e.history,(function(t,n){var s=t[0],r=t[1];return i("span",{key:n+"|"+e.value,domProps:{textContent:e._s(e.getHistoryPoint(s,r,n))},on:{click:function(t){e.value=s}}})})),0)]),i("div",{ref:"calculator__current",staticClass:"calculator__current",class:{equal:e.historyLast==e.value},style:{opacity:e.value.length?"1":".25",fontSize:e.fontSize+"em"},attrs:{"data-brackets":e.endsBrackets},domProps:{textContent:e._s("error"==e.extendedValue?e.translate("error"):e.extendedValue||0)}})]),i("div",{staticClass:"calculator__buttons"},[i("div",{staticClass:"calculator__wrap-row"},[i("div",{staticClass:"calculator__button",domProps:{textContent:e._s(e.value?"C":"AC")},on:{click:e.clear}}),i("div",{staticClass:"calculator__button",on:{click:function(t){return e.historyBack()}}},[i("Icon",{attrs:{type:"delete"}})],1),i("div",{staticClass:"calculator__button",on:{click:function(t){return e.percent()}}},[i("Icon",{attrs:{type:"percent"}})],1)]),i("div",{staticClass:"calculator__wrap-column"},e._l(e.signs,(function(t,n){return i("div",{key:t,staticClass:"calculator__button",on:{click:function(i){return e.addSign(t)}}},[i("Icon",{attrs:{type:n}})],1)})),0),e._l([7,8,9,4,5,6,1,2,3],(function(t){return i("div",{key:"num_"+t,staticClass:"calculator__button",domProps:{textContent:e._s(t)},on:{click:function(i){e.addSign(t.toString())}}})})),i("div",{staticClass:"calculator__button",on:{click:e.addDot}},[e._v(".")]),i("div",{staticClass:"calculator__button",on:{click:function(t){return e.addSign("0")}}},[e._v("0")]),i("div",{staticClass:"calculator__button",on:{click:e.plusMinus}},[e._v("±")]),i("div",{staticClass:"calculator__button calculator__button-equal",on:{click:e.equal}})],2)])},T=[],z=i("6478"),N=z["a"],B=(i("e133"),Object(E["a"])(N,x,T,!1,null,null,null)),A=B.exports,H={components:{LayoutContent:A,AppModal:R,SettingsDesktop:M,SettingsMobile:C,Icon:p["a"]},mixins:[h,d,m],data:function(){return{isClosedSettings:!0,openedModalName:null}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)}},computed:Object(a["a"])({},Object(u["d"])(["history"])),methods:Object(a["a"])({},Object(u["c"])(["clearHistory","addToHistory"]))},K=H,U=(i("5c0b"),Object(E["a"])(K,s,r,!1,null,null,null)),q=U.exports,J=i("9483");Object(J["a"])("".concat("/minis-calculator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});i("fb6a");var $=i("0e44"),F=i("0759"),X=i.n(F),Y=(i("5319"),i("b64b"),{state:function(){return{minisLang:"ru",minisThemeMain:null,minisThemeSpecial:null,translateJSON:{},themesJSON:{},minisJSON:{}}}});Y.getters={translateOfMinis:function(e){var t,i=e.translateJSON,n=e.minisLang,s=location.pathname.split("/")[1].replace("minis-","");return(null===i||void 0===i||null===(t=i[n])||void 0===t?void 0:t[s])||{}},translate:function(e,t){var i=e.translateJSON,n=e.minisLang,s=t.translateOfMinis,r=l.a.get(null===i||void 0===i?void 0:i[n],"default.error","%err%");return function(e){return l.a.get(s,e,r)}},themeMain:function(e){var t,i,n=e.themesJSON,s=e.minisThemeMain,r=null===n||void 0===n||null===(t=n.main)||void 0===t?void 0:t[s];return r?n.main[s]:null===n||void 0===n||null===(i=n.main)||void 0===i?void 0:i.dark},themeSpecialName:function(e){var t,i,n,s=e.themesJSON,r=e.minisThemeSpecial,a=null===s||void 0===s||null===(t=s.special)||void 0===t||null===(i=t.colors)||void 0===i?void 0:i[r];return a?r:null===s||void 0===s||null===(n=s.special)||void 0===n?void 0:n.default},themeSpecial:function(e,t){var i,n,s=e.themesJSON,r=t.themeSpecialName;return null===s||void 0===s||null===(i=s.special)||void 0===i||null===(n=i.colors)||void 0===n?void 0:n[r]}},Y.mutations={switchTheme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",i="main"==t?"minisThemeMain":"minisThemeSpecial",s="main"==t?e.themesJSON.main:e.themesJSON.special.colors,r=Object.keys(s),a=r.indexOf(e[i]),o=(a+1)%r.length;n["a"].set(e,i,r[o])},switchLang:function(e){var t=Object.keys(e.translateJSON),i=t.indexOf(e.minisLang),s=(i+1)%t.length;n["a"].set(e,"minisLang",t[s])},initMinis:function(e,t){var i=t.translateJSON,s=t.minisJSON,r=t.themesJSON;n["a"].set(e,"minisJSON",s),n["a"].set(e,"translateJSON",i),n["a"].set(e,"themesJSON",r)}};var V=Y,G={};n["a"].use(u["a"]),G.state=function(){return{history:[]}},G.mutations={addToHistory:function(e,t){var i=e.history.slice(-9).concat([t]);n["a"].set(e,"history",i)},clearHistory:function(e){n["a"].set(e,"history",[])}};var Q=["minis.minisThemeMain","minis.minisThemeSpecial","minis.minisLang","minis.themesJSON","minis.translateJSON","minis.minisJSON"],Z=["history"],ee=location.pathname.split("/")[1];G.modules={minis:V},G.plugins=[X()({predicate:function(){return[].concat(Q,Z)}}),Object($["a"])({paths:Q,key:"minis"}),Object($["a"])({paths:Z,key:ee})];var te=new u["a"].Store(G);n["a"].config.productionTip=!1,new n["a"]({store:te,render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},6478:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("466d"),core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a15b"),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("cb29"),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b680"),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("8a79"),core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__),core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("2ca0"),core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__),core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__),_app_Icon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("aa8c");__webpack_exports__["a"]={name:"LayoutContent",components:{Icon:_app_Icon__WEBPACK_IMPORTED_MODULE_16__["a"]},props:{appWidth:Number,appHeight:Number,isDesktop:Boolean,translate:Function,history:Array},data:function(){return{value:"",fontSize:1,limit:30,signs:{divide:"/",x:"*",minus:"-",plus:"+"}}},watch:{value:function(e){this.changeFontSize(),e.length<=this.limit||(this.value=this.value.slice(0,this.limit))},appWidth:"changeFontSize"},computed:{historyLast:function(){var e=this.history.slice(-1)[0];return e&&e[1]},extendedValue:function(){return this.value.replace(/\+/g," + ").replace(/\-/g," - ").replace(/\*/g," * ").replace(/\//g," / ")},brackets:function(){var e=this.value.match(/\(/g)||[],t=this.value.match(/\)/g)||[],i=e.length,n=t.length;return{starts:i,ends:n,isClosed:i===n}},endsBrackets:function(){var e=this.brackets,t=e.starts,i=e.ends;return new Array(t-i).fill(")").join("")}},methods:{checkFontSize:function(){var e=this.$refs.calculator,t=this.$refs.calculator__current;return e.clientWidth-t.clientWidth-50},changeFontSize:function(e){var t=this;this.$nextTick((function(){var e=t.checkFontSize();if(e<=0){if(t.fontSize<=.1)return;t.fontSize=+(t.fontSize-.1).toFixed(1),t.changeFontSize()}else if(e>100){if(t.fontSize>=1)return;t.fontSize=+(t.fontSize+.1).toFixed(1),t.changeFontSize()}}))},getHistoryPoint:function(e,t,i){return this.historyLast==this.value&&i==this.history.length-1?e:"".concat(e," = ").concat(t)},addSign:function(e){"error"==this.value&&(this.value="");var t=!isNaN(+e),i=!this.value,n="-"==e,s=!!/(\/|\*|\+)/.exec(e),r=!!/\d+\.\d+$/.exec(this.value),a=!!/(\/|\*|\+|\-)$/.exec(this.value),o=this.value.endsWith("("),_=this.value.endsWith(")"),c=!!/\d$/.exec(this.value),l=this.value.endsWith(".");if("("==e&&(c||_)&&(this.value+="*"),(!t||!_)&&(!this.brackets.isClosed||")"!=e)&&(!i&&!o||!s)&&(!this.value.endsWith("0")||!t||r)&&(!n||!this.value.endsWith("-"))&&(t||!l)){if(!i&&a&&s){if("-"==this.value)return;return this.historyBack(),this.addSign(e)}this.value+=e}},addDot:function(){"error"==this.value&&(this.value="");var e=this.value.split(/(\/|\*|\+|\-)/g).slice(-1)[0];e||(this.value+="0"),e.includes(".")||(this.value+=".")},plusMinus:function(){"error"==this.value&&(this.value=""),this.value||(this.value+="0"),this.value=this.value.startsWith("-")?this.value.slice(1):"-".concat(this.value)},percent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=this.value.toString().replace(/^\d*(\.|)/,"").length;this.value&&"error"!=this.value&&(this.limit<=t+e||/\d$/.exec(this.value)&&(this.value=(parseFloat(this.value)/Math.pow(10,e)).toFixed(t+e)))},clear:function(){this.value?(this.value="",this.historyBack(!0)):this.$emit("clearHistory")},historyBack:function(e){"error"!=this.value?this.value=e?"":this.value.slice(0,-1):this.value=""},equal:function equal(){if("error"!=this.value&&(this.value=this.value.replace(/(\-|\+|\*|\/|\.|\()*$/,""),this.value)){this.value+=this.endsBrackets;var equation=this.value.match(/\d|\.|\-|\+|\*|\/|\(|\)/g).join(""),answer=parseFloat(eval(equation).toFixed(10));equation.replace(/(\(|\))/g,"")!=answer&&(answer.toString().endsWith("Infinity")||isNaN(answer)?this.value="error":(this.value=answer.toString(),this.$refs.calculator__history.scrollTop=1e3,this.$emit("addToHistory",[equation,answer])))}},keydown:function(e){var t=e.key,i=e.shiftKey;switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"+":case"-":case"*":case"/":case"(":case")":this.addSign(t);break;case".":case",":this.addDot();break;case"%":this.percent();break;case"Backspace":this.historyBack(i);break;case"Enter":this.equal();break;case"Escape":this.$emit("switchSettings");break}}},beforeMount:function(){document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}}},"71b9":function(e,t,i){},"9c0c":function(e,t,i){},a349:function(e,t,i){"use strict";i("cfeb")},aa8c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"icon",attrs:{"area-text":e.text,side:e.side}},[i("svg",{class:{rotate:e.rotate},attrs:{fill:"none",width:e.size||e.width,height:e.size||e.height,stroke:e.color,"stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){return e.$emit("click",t)}}},[i("use",{attrs:{href:"./feather-sprite.svg#"+e.type}}),e.text?i("div",{domProps:{textContent:e._s(e.text)}}):e._e()])])},s=[],r=(i("a9e3"),{name:"Icon",props:{type:String,size:[Number,String],text:String,side:{type:String,default:"left"},width:{type:Number,default:24},height:{type:Number,default:24},strokeWidth:{type:Number,default:2},rotate:{type:Boolean,default:!1},color:{type:String,default:"currentColor"}}}),a=r,o=(i("c3d2"),i("2877")),_=Object(o["a"])(a,n,s,!1,null,"c93d6dca",null);t["a"]=_.exports},c3d2:function(e,t,i){"use strict";i("71b9")},cfeb:function(e,t,i){},e001:function(e,t,i){},e133:function(e,t,i){"use strict";i("eed6")},eed6:function(e,t,i){},eeda:function(e,t,i){"use strict";i("e001")}});
//# sourceMappingURL=app.18271b91.js.map