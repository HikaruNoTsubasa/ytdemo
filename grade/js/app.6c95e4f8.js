(function(e){function t(t){for(var s,c,o=t[0],d=t[1],u=t[2],i=0,l=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&l.push(n[c][0]),n[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var d=a[o];0!==n[d]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/grade/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var f=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",[a("ol",{staticClass:"list"},e._l(e.hotnews,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(t.name)+"同修， 發心《"+e._s(t.work)+"》 "+e._s(t.count)+"， 📅"+e._s(t.time)+" ")])})),0),a("form",{attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.readyData.name,expression:"readyData.name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.readyData.name},on:{input:function(t){t.target.composing||e.$set(e.readyData,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.readyData.work,expression:"readyData.work"}],attrs:{type:"text",placeholder:"發心修誦"},domProps:{value:e.readyData.work},on:{input:function(t){t.target.composing||e.$set(e.readyData,"work",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.readyData.count,expression:"readyData.count"}],attrs:{type:"text",placeholder:"次數"},domProps:{value:e.readyData.count},on:{input:function(t){t.target.composing||e.$set(e.readyData,"count",t.target.value)}}}),a("button",{on:{click:e.postGSheet}},[e._v("送出")])])])])},r=[],c=(a("99af"),a("b0c0"),a("a9e3"),a("4fad"),a("3835")),o=a("6c36"),d={name:"app",mixins:[],data:function(){return{gQuery:null,hotnews:[],readyData:{name:"",work:"",count:"",time:""},urlPre:""}},props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},computed:{formReset:function(){return this.readyData={}}},methods:{initData:function(e){var t=this,a={baseUrl:"https://spreadsheets.google.com/tq?",key:"1TMZHX9LRmb6ROdXsysHY5hKFubWuM2klz51xLOGYSLE",gid:2141876951,sql:"select * order by A desc limit 5"},s="".concat(a.baseUrl,"key=").concat(a.key,"&gid=").concat(a.gid),n=new e.visualization.Query(s);n.setQuery(a.sql),n.send((function(e){for(var a=0,s=Object.entries(e.R.eg);a<s.length;a++){var n=Object(c["a"])(s[a],2),r=n[0],o=n[1];t.$set(t.hotnews,r,{time:null,name:null,work:null,count:null}),t.hotnews[r].time=o.c[0].f,t.hotnews[r].name=o.c[1].v,t.hotnews[r].work=o.c[2].v,t.hotnews[r].count=Number(o.c[3].v).toLocaleString()}}))},postGSheet:function(){var e=this,t={method:"post",url:"https://script.google.com/macros/s/1TMZHX9LRmb6ROdXsysHY5hKFubWuM2klz51xLOGYSLE/exec",headers:{"Access-Control-Allow-Origin":"*"},data:{method:"write",time:"2019-09-15T20:05:30",name:this.readyData.name,work:this.readyData.work,count:this.readyData.count}};this.$axios(t).then((function(){e.formReset(),e.initData()})).catch((function(t){console.log(t),e.initData()}))}},created:function(){var e=this;Object(o["a"])(this.version,this.settings).then((function(t){e.gQuery=t})).then((function(){e.initData(e.gQuery)}))},mounted:function(){},destroyed:function(){}},u=d,f=(a("5c0b"),a("2877")),i=Object(f["a"])(u,n,r,!1,null,null,null),l=i.exports,j=a("8c4f");s["default"].use(j["a"]);var b=[{path:"/",redirect:"/Home"}],p=new j["a"]({routes:b});p.beforeEach((function(e,t,a){a()}));var m=p,h=a("c1df"),y=a.n(h),v=a("bc3a"),g=a.n(v),k=a("cb43"),w=a("5f5b");a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].prototype.$moment=y.a,s["default"].prototype.$axios=g.a,s["default"].use(w["a"]),s["default"].use(k["default"]),new s["default"]({router:m,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.6c95e4f8.js.map