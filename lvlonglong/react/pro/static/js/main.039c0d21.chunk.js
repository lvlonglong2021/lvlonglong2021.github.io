(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5],{37:function(e,t,n){e.exports=n(55)},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(12),l=n(13),s=n(16),u=n(14),d=n(15),h=n(20),m=n(8),p=n(9),b=n(2),g=n.n(b),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getChildContext",value:function(){return{history:this.props.history,location:this.props.location}}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:"/guide"})}}),r.a.createElement(m.b,{path:"/guide",component:Object(p.a)((function(){return Promise.all([n.e(1),n.e(21),n.e(18)]).then(n.bind(null,437))}))}),r.a.createElement(m.b,{path:"/login",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,428))}))}),r.a.createElement(m.b,{path:"/search",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13),n.e(15)]).then(n.bind(null,429))}))}),r.a.createElement(m.b,{path:"/main",component:Object(p.a)((function(){return Promise.all([n.e(1),n.e(2),n.e(12),n.e(17)]).then(n.bind(null,436))}))}),r.a.createElement(m.b,{path:"/scan",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(20)]).then(n.bind(null,430))}))}),r.a.createElement(m.b,{path:"/detail/:goodId",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,431))}))}),r.a.createElement(m.b,{render:function(){return r.a.createElement(m.a,{to:"/guide"})}})))}}]),t}(a.Component);f.childContextTypes={history:g.a.object,location:g.a.object};var v=n(11),j=n(32),y=n(33),E=n.n(y),O=n(34),L=n(19).default.fromJS({banner:[],count:2020,goodList:[],goodType:[],searchList:[]}),w=Object(O.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"changeCount":return e.update("count",(function(e){return e+t.payload}));case"getBanner":return e.set("banner",t.payload);case"getGoodList":return e.set("goodList",t.payload);case"getGoodType":return e.set("goodType",t.payload);case"changeGoodListReverse":var n=e.toJS().goodList;return n.reverse(),e.set("goodList",n);case"getSearchList":return e.set("searchList",t.payload);case"changeSearchListReverse":return e.set("searchList",e.toJS().searchList.reverse());default:return e}}}),k=Object(v.c)(w,Object(v.a)(j.a,E.a)),C=n(26),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{store:k},r.a.createElement(h.a,{basename:""},r.a.createElement(m.b,{component:f})))}}]),t}(a.Component);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),console.log("this")},9:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(30),c=n.n(o),i=function(){return r.a.createElement("div",null,"loading")};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return c()({loader:e,loading:t})}}},[[37,6,8]]]);
//# sourceMappingURL=main.039c0d21.chunk.js.map