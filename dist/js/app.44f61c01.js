(function(e){function t(t){for(var o,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("span",[e._v(e._s(e.time))]),n("router-view")],1)},i=[],a={data:function(){return{time:""}},created:function(){var e=(new Date).getHours();this.time=e>=22?"夜深了，早点休息！":e>=18?"天冷了，照顾好自己！":e>=13?"下午好！":e>=12?"中午吃点好吃的！":e>=8?"一日之计在于晨！":e>5?"早起是治家之本！":"夜深了，早点休息！"}},u=a,c=(n("5c0b"),n("2877")),s=Object(c["a"])(u,r,i,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home c pd",attrs:{id:"home"}},[n("h1",[e._v("每天来点冷笑话！")]),n("ol",e._l(e.info,function(t,o){return n("li",{key:t._id},[e._v(e._s(o+1+"."+t.introduction))])}))])},p=[],m=(n("ac6a"),n("4f7f"),n("5df3"),n("1c4c"),n("386d"),n("4917"),n("3b2b"),n("28a5"),n("bc3a")),g=n.n(m),v={apiDomain:""===location.hostname,util:{isEmptyObject:function(e){for(var t in e)return!1;return!0}},cookie:function(e,t,n){if("undefined"==typeof t){var o=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),i=0;i<r.length;i++){var a=r[i].trim();if(a.substring(0,e.length+1)==e+"="){o=decodeURIComponent(a.substring(e.length+1));break}}return o}n=n||{},null===t&&(t="",n.expires=-1);var u,c="";n.expires&&("number"==typeof n.expires||n.expires.toUTCString)&&("number"==typeof n.expires?(u=new Date,u.setTime(u.getTime()+24*n.expires*60*60*1e3)):u=n.expires,c="; expires="+u.toUTCString());var s=n.path?"; path="+n.path:"",l=n.domain?"; domain="+n.domain:"",f=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),c,s,l,f].join("")},getUrl:function(e,t){if(t){e+="?";for(var n=0;n<t.length;n++)e+=n+"="+t[n]+"&";e.substr(0,-1)}var o=this.apiDomain;return o&&(e=o+e),e},sstorage:function(){if(!("sessionStorage"in window))return null;if(1===arguments.length){var e=sessionStorage.getItem(arguments[0]),t=null;try{t=JSON.parse(e)}catch(o){t=e}return t}if(2===arguments.length){var n=null;if(arguments[1]instanceof Object||arguments[1]instanceof Array)try{n=JSON.stringify(arguments[1]),sessionStorage.setItem(arguments[0],n)}catch(o){throw new Error("储存localStorage失败！")}else"string"===typeof arguments[1]||"boolean"===typeof arguments[1]?sessionStorage.setItem(arguments[0],arguments[1]):null===arguments[1]&&sessionStorage.removeItem(arguments[0])}},lstorage:function(){if(!("localStorage"in window))return null;if(1===arguments.length){var e=localStorage.getItem(arguments[0]),t=null;try{t=JSON.parse(e)}catch(o){t=e}return t}if(2===arguments.length){var n=null;if(arguments[1]instanceof Object||arguments[1]instanceof Array)try{n=JSON.stringify(arguments[1]),localStorage.setItem(arguments[0],n)}catch(o){throw new Error("储存localStorage失败！")}else"string"===typeof arguments[1]||"boolean"===typeof arguments[1]?localStorage.setItem(arguments[0],arguments[1]):null===arguments[1]&&localStorage.removeItem(arguments[0])}},isArr:function(e){return e instanceof Array},isObj:function(e){return e instanceof Object},isFun:function(e){return e instanceof Function},urlPara:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return n?decodeURIComponent(n[2]):null},len:function(e){if(!this.isObj(e))throw new Error("len()方法中，所传值应该为一个对象");var t=0;for(var n in e)t++;return t},contain:function(e,t){var n=e.length;if("undefined"===typeof t)throw new Error("待检测元素不能为空");while(n--)if(e[n]===t)return!0;return!1},toast:function(e,t){var n=null,o=t||"middle";if(clearTimeout(n),document.querySelector(".yl_toast")){var r=document.querySelector(".yl_toast");document.body.removeChild(r)}var i=document.createElement("div"),a='<span style="text-align:center;font-size:.3rem;">'.concat(e,"</span>");i.innerHTML=a,i.innerHTML="".concat(e),i.setAttribute("class","yl_toast"),i.className+="bottom"===o?" yl_toast_bottom":" yl_toast_middle",document.body.appendChild(i),n=setTimeout(function(){if(document.querySelector(".yl_toast")){var e=document.querySelector(".yl_toast");document.body.removeChild(e)}},1700)},domain:"http://mingyi.free.idcfengye.com",get:function(e){g.a.get(this.domain+e.url,{params:e.data?e.data:{}}).then(function(t){e.over&&e.over(),e.success&&e.success(t.data)}).catch(function(t){e.over&&e.over(),e.fail&&e.fail(t)})},dedupe:function(e){return Array.from(new Set(e))},regCity:/^[\u4e00-\u9fa5]{2,30}/,regTel:/^1[\d]{10}$/,wx:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)},android:window.navigator.userAgent.indexOf("Android")>-1||window.navigator.userAgent.indexOf("Adr")>-1,ios:!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},h=v,b={data:function(){return{info:[]}},created:function(){this.getJoke()},methods:{getJoke:function(){var e=this;h.get({url:"/student/list",success:function(t){e.info=t},fail:function(){e.info=["小时候的一个雨夜，哥哥和弟弟在床上聊天，越聊越亲，我俩感觉应该更亲近一些，然后我俩就结拜成把兄弟了……","系统休息中！"]}})}}},y=b,w=(n("afba"),Object(c["a"])(y,d,p,!1,null,"7e68dfab",null));w.options.__file="Home.vue";var S=w.exports;o["a"].use(f["a"]);var _=new f["a"]({routes:[{path:"/",name:"home",component:S}]}),O=n("2f62");o["a"].use(O["a"]);var x=new O["a"].Store({state:{download:!1,top:!0,bottom:!0,selectedAddr:{}},mutations:{changeSelectedAddr:function(e,t){e.selectedAddr=t},downloadShow:function(e){e.download=!0},downloadHide:function(e){e.download=!1},topShow:function(e){e.top=!0},topHide:function(e){e.top=!1},bottomShow:function(e){e.bottom=!0},bottomHide:function(e){e.bottom=!1}},actions:{}});n("a24a");new o["a"]({router:_,store:x,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},a24a:function(e,t,n){},afba:function(e,t,n){"use strict";var o=n("e2b4"),r=n.n(o);r.a},e2b4:function(e,t,n){}});
//# sourceMappingURL=app.44f61c01.js.map