(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[17],{208:function(t,e,n){"use strict";var a,c,o,r,i,u,s,l,h=n(115),p=n.n(h),f=n(209),b=n(12),d=n(13),m=n(210),g=(n(211),n(128)),y=n(64),O=(a=function(){function t(){Object(b.a)(this,t),Object(f.a)(this,"carList",c,this),Object(f.a)(this,"getCarList",o,this),Object(f.a)(this,"delSelect",r,this),Object(f.a)(this,"changeOneCount",i,this),Object(f.a)(this,"changeOneCountNum",u,this),Object(f.a)(this,"changeOneChecked",s,this),Object(f.a)(this,"changeQuan",l,this)}return Object(d.a)(t,[{key:"carTotal",get:function(){var t=0;return this.carList.forEach((function(e){t+=e.count})),t}},{key:"carNum",get:function(){var t=0;return this.carList.forEach((function(e){e.checked&&(t+=e.count)})),t}},{key:"total",get:function(){var t=0;return this.carList.forEach((function(e){e.checked&&(t+=e.count*e.good.price)})),t}},{key:"quan",get:function(){var t=!0;return this.carList.forEach((function(e){e.checked||(t=!1)})),t},set:function(t){this.carList=this.carList.map((function(e){return e.checked=t,e}))}}]),t}(),c=Object(m.a)(a.prototype,"carList",[g.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(m.a)(a.prototype,"getCarList",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(y.a.get(e));case 2:n=a.sent,t.carList=n.data.result;case 4:case"end":return a.stop()}}))}}}),r=Object(m.a)(a.prototype,"delSelect",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){y.a.post("/react/delSelect").then((function(e){t.carList=t.carList.filter((function(t){return!t.checked}))}))}}}),i=Object(m.a)(a.prototype,"changeOneCount",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,n){y.a.post("/react/changeCount",{goodId:e,flag:n}).then((function(a){t.carList=t.carList.map((function(t){return t.goodId==e&&(t.count+=n?1:-1),t}))}))}}}),u=Object(m.a)(a.prototype,"changeOneCountNum",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,n){y.a.post("/react/changeCount",{goodId:e,count:n}).then((function(a){t.carList=t.carList.map((function(t){return t.goodId==e&&(t.count=1*n),t}))}))}}}),Object(m.a)(a.prototype,"carTotal",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"carTotal"),a.prototype),s=Object(m.a)(a.prototype,"changeOneChecked",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,n){y.a.post("/react/changeChecked",{checked:e,goodId:n}).then((function(a){t.carList=t.carList.map((function(t){return t.goodId==n&&(t.checked=e),t}))}))}}}),Object(m.a)(a.prototype,"carNum",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"carNum"),a.prototype),Object(m.a)(a.prototype,"total",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"total"),a.prototype),Object(m.a)(a.prototype,"quan",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"quan"),a.prototype),l=Object(m.a)(a.prototype,"changeQuan",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){y.a.post("/react/changeChecked",{checked:e}).then((function(n){t.quan=e}))}}}),a);e.a=new O},328:function(t,e,n){},329:function(t,e,n){},342:function(t,e,n){},436:function(t,e,n){"use strict";n.r(e);var a,c=n(12),o=n(13),r=n(16),i=n(14),u=n(15),s=(n(328),n(0)),l=n.n(s),h=n(8),p=n(9),f=(n(152),n(153)),b=n.n(f),d=(n(329),n(20)),m=[{txt:"\u9996\u9875",path:"/main/home",name:"home",icon:"icon-dianying"},{txt:"\u5546\u54c1",path:"/main/classify",name:"classify",icon:"icon-yingyuan"},{txt:"\u8d2d\u7269\u8f66",path:"/main/cart",name:"cart",icon:"icon-gouwuche1"},{txt:"\u6211",path:"/main/mine",name:"mine",icon:"icon-tubiaozhizuomoban"}],g=(s.Component,n(330),n(333)),y=n.n(g),O=(n(342),n(2)),j=n.n(O),v=n(64),k=n(208),w=n(177),L=Object(w.a)(a=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(n=Object(r.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={selectedTab:"home"},n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=window.location.hash;console.log(t);var e=t.split("#/main/")[1];this.setState({selectedTab:e})}},{key:"render",value:function(){var t=this;console.log(this);var e=k.a.carTotal;return l.a.createElement("div",{className:"foot"},l.a.createElement(y.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},m.map((function(n,a){return l.a.createElement(y.a.Item,{title:n.txt,key:a,icon:l.a.createElement("div",{style:{width:"22px",height:"22px"},className:"iconfont "+n.icon}),selectedIcon:l.a.createElement("div",{style:{width:"22px",height:"22px"},className:"iconfont "+n.icon}),selected:t.state.selectedTab==n.name,badge:a==m.length-2&&e,onPress:function(){t.setState({selectedTab:n.name}),v.c.push(n.path)},"data-seed":"logId"})}))))}}]),e}(s.Component))||a;L.contextTypes={history:j.a.object,location:j.a.object},n.d(e,"default",(function(){return C}));var C=function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"box"},l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/main/home",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(7),n.e(19)]).then(n.bind(null,432))}))}),l.a.createElement(h.b,{path:"/main/classify",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,433))}))}),l.a.createElement(h.b,{path:"/main/cart",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(14)]).then(n.bind(null,434))}))}),l.a.createElement(h.b,{path:"/main/mine",component:Object(p.a)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,435))}))}),l.a.createElement(h.b,{render:function(){return l.a.createElement(h.a,{to:"/main/home"})}})),l.a.createElement(L,this.props))}}]),e}(s.Component)},64:function(t,e,n){"use strict";n(114);var a=n(5),c=n(16),o=n(14),r=n(118),i=n(15),u=n(12),s=n(13),l=function(){function t(e,n){Object(u.a)(this,t),this.names=e,this.age=n}return Object(s.a)(t,[{key:"say",value:function(){}},{key:"todo",value:function(){}}]),t}();l.hobby=["eat","sleep"],(function(t){function e(t,n,a){var r;return Object(u.a)(this,e),(r=Object(c.a)(this,Object(o.a)(e).call(this,t,n))).score=a,r}return Object(i.a)(e,t),Object(s.a)(e,[{key:"goto",value:function(){}},{key:"say",value:function(){return Object(r.a)(Object(o.a)(e.prototype),"say",this).call(this)}}]),e}(l)).hobby=["read","music"];n(105);var h=n(106),p=n.n(h),f=n(72),b=n.n(f),d="http://47.104.79.233:1910/",m="";function g(t){p.a.hide(),p.a.fail(t,1)}function y(t){p.a.hide(),p.a.success(t,1)}b.a.defaults.baseURL=d,b.a.defaults.headers.common.token=m,b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b.a.interceptors.request.use((function(t){var e,n;return e=e||"\u8bf7\u6c42\u4e2d...",n=n||1,p.a.hide(),p.a.loading(e,n,(function(){console.log("Load complete !!!")})),m=sessionStorage.token?sessionStorage.token:"",t.headers.token=m,t}),(function(t){var e;return e="\u8bf7\u6c42\u5931\u8d25-\u7f51\u7edc\u5f02\u5e38",p.a.hide(),p.a.offline(e,1),Promise.reject(t)})),b.a.interceptors.response.use((function(t){return console.log(t),"3000"==t.data.code&&O.push("/login"),t.data.type?y(t.data.msg):0==t.data.type?g(t.data.msg):y(t.data.msg),t}),(function(t){return g("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(t)})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return b.a})),n.d(e,"b",(function(){return d}));var O=new a.b}}]);
//# sourceMappingURL=17.7d65f53f.chunk.js.map