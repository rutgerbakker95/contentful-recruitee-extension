(function(e){function t(t){for(var i,c,s=t[0],a=t[1],l=t[2],d=0,f=[];d<s.length;d++)c=s[d],o[c]&&f.push(o[c][0]),o[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},r=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("034f"),n("2877")),s={},a=Object(c["a"])(s,o,r,!1,null,null,null),l=a.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"left"}},[e.selectedTitle?n("div",{staticClass:"selected-vacancy"},[e._v("\n    "+e._s(e.selectedTitle)+"\n    "),n("button",{staticClass:"selected-vacancy__delete",on:{click:e.removeVacancy}},[e._v("X")])]):e._e(),e._v("\n\n  "+e._s(e.selectedInfo)+"\n\n  "),e._l(e.info,function(t,i){return n("article",{key:i,on:{click:function(t){return e.handler(t,i)}}},[n("h1",[e._v(e._s(t.title))]),e._v("\n    "+e._s(t.status)+"\n  ")])}),e.selected?n("button",{on:{click:e.addVacancy}},[e._v("Voeg toe")]):e._e()],2)},f=[],h=(n("ac6a"),n("36ea")),v=n("bc3a"),p=n.n(v),b={name:"Index",data:function(){return{extension:null,info:null,activeClass:"is-selected",title:"",selectedTitle:"",selectedInfo:null,selectedIndex:null,selected:!1,isAdded:!1,init:!0}},methods:{handler:function(e,t){this.removeActiveStates(),this.selected=!0,this.title=e.currentTarget.querySelector("h1").innerText,this.selectedIndex=t,e.currentTarget.classList.add(this.activeClass)},removeActiveStates:function(){var e=this,t=document.querySelectorAll("article");t.forEach(function(t){t.classList.remove(e.activeClass)})},removeVacancy:function(){this.removeActiveStates(),this.selectedTitle="",this.title="",this.selected=!1,this.selectedInfo=null,this.extension&&this.extension.field.removeValue()},addVacancy:function(){var e=this;this.selectedTitle=this.title,this.selectedInfo=this.info[this.selectedIndex],this.init&&this.extension&&this.extension.field.setValue(this.selectedInfo).then(function(t){console.log(t),e.isAdded=!0}).catch(function(e){console.log(e)}),this.isAdded&&this.extension&&this.extension.field.onValueChanged(this.selectedInfo)},getData:function(){var e=this,t=p.a.create({baseURL:"https://acmecompany1.recruitee.com/api/",headers:{"Content-Type":"application/json"}});t.get("offers",{}).then(function(t){e.info=t.data.offers})}},mounted:function(){var e=this;Object(h["init"])(function(t){e.extension=t,e.extension.window.startAutoResizer()}),this.getData()}},y=b,m=(n("b15f"),Object(c["a"])(y,d,f,!1,null,"18466aaa",null)),_=m.exports;i["a"].use(u["a"]);var x=new u["a"]({mode:"history",routes:[{path:"/",name:"Index",component:_}]});i["a"].config.productionTip=!1,new i["a"]({router:x,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},"6ecc":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="6ecc"},b15f:function(e,t,n){"use strict";var i=n("b69e"),o=n.n(i);o.a},b69e:function(e,t,n){}});
//# sourceMappingURL=app.6178ae1c.js.map