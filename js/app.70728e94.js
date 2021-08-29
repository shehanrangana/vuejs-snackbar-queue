(function(t){function o(o){for(var n,i,c=o[0],l=o[1],s=o[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(o);while(d.length)d.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(n=!1)}n&&(a.splice(o--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},a=[];function i(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)i.d(e,n,function(o){return t[o]}.bind(null,n));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/vuejs-snackbar-queue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=o,c=c.slice();for(var s=0;s<c.length;s++)o(c[s]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";e("85ec")},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=e("b44a"),a=e.n(r),i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",height:"80",src:e("cf05")}}),n("h1",[t._v("Vuejs Snackbar Queue")]),n("div",[n("div",{staticStyle:{margin:"40px auto 60px"}},[n("p",[t._v("Color - "+t._s(t.color))]),n("div",{staticClass:"radio-wrapper"},[n("label",{staticClass:"radio-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color1",name:"radio",value:"#1976D2"},domProps:{checked:t._q(t.color,"#1976D2")},on:{change:function(o){t.color="#1976D2"}}}),n("span",{staticClass:"checkmark",staticStyle:{"background-color":"#1976d2"}})]),n("label",{staticClass:"radio-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color2",name:"radio",value:"#FF5252"},domProps:{checked:t._q(t.color,"#FF5252")},on:{change:function(o){t.color="#FF5252"}}}),n("span",{staticClass:"checkmark",staticStyle:{"background-color":"#ff5252"}})]),n("label",{staticClass:"radio-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color3",name:"radio",value:"#2196F3"},domProps:{checked:t._q(t.color,"#2196F3")},on:{change:function(o){t.color="#2196F3"}}}),n("span",{staticClass:"checkmark",staticStyle:{"background-color":"#2196f3"}})]),n("label",{staticClass:"radio-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color4",name:"radio",value:"#4CAF50"},domProps:{checked:t._q(t.color,"#4CAF50")},on:{change:function(o){t.color="#4CAF50"}}}),n("span",{staticClass:"checkmark",staticStyle:{"background-color":"#4caf50"}})]),n("label",{staticClass:"radio-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color5",name:"radio",value:"#FFC107"},domProps:{checked:t._q(t.color,"#FFC107")},on:{change:function(o){t.color="#FFC107"}}}),n("span",{staticClass:"checkmark",staticStyle:{"background-color":"#ffc107"}})])])]),n("div",{staticStyle:{margin:"40px auto 60px"}},[n("label",{staticStyle:{display:"block","padding-bottom":"12px"},attrs:{for:"timeout"}},[t._v("Timeout - "+t._s(t.timeout)+" seconds")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.timeout,expression:"timeout"}],staticStyle:{width:"200px"},attrs:{type:"range",id:"timeout",name:"timeout",min:"0",max:"30"},domProps:{value:t.timeout},on:{__r:function(o){t.timeout=o.target.value}}})]),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"left",vertical:"top"},11)}}},[t._v(" Top Left ")]),n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"center",vertical:"top"},12)}}},[t._v(" Top Center ")]),n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"right",vertical:"top"},13)}}},[t._v(" Top Right ")])]),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"left",vertical:"bottom"},21)}}},[t._v(" Bottom Left ")]),n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"center",vertical:"bottom"},22)}}},[t._v(" Bottom Center ")]),n("button",{staticClass:"btn-position",on:{click:function(o){return t.openSnackbar({horizontal:"right",vertical:"bottom"},23)}}},[t._v(" Bottom Right ")])])]),t._m(0),n("snackbar-queue")],1)},c=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{position:"absolute",top:"20px",left:"20px"}},[e("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=shehanrangana&repo=vuejs-snackbar-queue&type=star&count=true",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}})])}],l=(e("d3b7"),e("25f0"),{name:"App",data:function(){return{color:"#1976D2",timeout:3,lastPosition:0}},methods:{openSnackbar:function(t,o){var e=this,n=t.horizontal,r=t.vertical;if(o!==this.lastPosition)if(window.innerWidth>=600)this.$snackbar.hideAll();else{var a=o.toString().charAt(0),i=this.lastPosition.toString().charAt(0);a!==i&&this.$snackbar.hideAll()}setTimeout((function(){e.$snackbar.show({message:"Your message here",color:e.color,timeout:1e3*e.timeout,horizontal:n,vertical:r})}),50),this.lastPosition=o}}}),s=l,u=(e("034f"),e("2877")),p=Object(u["a"])(s,i,c,!1,null,null,null),d=p.exports;n["a"].use(a.a,{maxSnacks:5,mobileBreakpoint:600}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,o,e){},cf05:function(t,o,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.70728e94.js.map