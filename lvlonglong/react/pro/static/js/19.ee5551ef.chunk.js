(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[19],{408:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);n(358);var a,r=n(360),c=n.n(r),o=(n(113),n(126)),s=n.n(o),i=(n(361),n(363)),l=n.n(i),u=(n(73),n(75)),p=n.n(u),h=n(12),d=n(13),m=n(16),f=n(14),g=n(15),v=(n(408),n(0)),y=n.n(v),b=n(67),E=(n(64),n(20)),w=n(26),x=n(97),k=Object(w.b)((function(e){return{count:e.getIn(["data","count"]),banner:e.getIn(["data","banner"])}}))(a=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={banner:[]},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){!this.props.banner.length>0&&this.props.dispatch(Object(x.d)({url:"/vue/maizuo/mv",cb:function(){}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.count,a=t.dispatch,r=t.banner;return console.log(this.props),y.a.createElement("div",null,y.a.createElement(b.a,{title:"\u9996\u9875"}),y.a.createElement(p.a,null),y.a.createElement(l.a,{autoplay:!0,infinite:!0},r.map((function(t,n){return y.a.createElement(E.b,{to:"/",key:n,style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},y.a.createElement("img",{src:t.poster,alt:"",style:{width:"100%",height:300,verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize"))}}))}))),y.a.createElement(c.a,{defaultActiveKey:"0",className:"my-accordion",onChange:this.onChange},y.a.createElement(c.a.Panel,{header:"Title 1"},y.a.createElement(s.a,{className:"my-list"},y.a.createElement(s.a.Item,{onClick:function(){return a(Object(x.a)(20))}},"content 1 ----",n),y.a.createElement(s.a.Item,null,"content 2"),y.a.createElement(s.a.Item,null,"content 3"))),y.a.createElement(c.a.Panel,{header:"Title 2",className:"pad"},"this is panel content2 or other"),y.a.createElement(c.a.Panel,{header:"Title 3",className:"pad"},"text text text text text text text text text text text text text text text")))}}]),t}(v.Component))||a;t.default=k},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n(82);var a=n(83),r=n.n(a),c=(n(84),n(85)),o=n.n(c),s=(n(86),n(87)),i=n.n(s),l=(n(65),n(66)),u=n.n(l),p=n(12),h=n(13),d=n(16),m=n(14),f=n(15),g=(n(68),n(0)),v=n.n(g),y=n(64),b=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleGoBack",value:function(e){y.c.go(-1)}},{key:"handleGoSearch",value:function(){y.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,r=t.search;return v.a.createElement("div",null,v.a.createElement(i.a,{mode:"light",icon:a&&v.a.createElement(u.a,{type:"left"}),onLeftClick:function(){return e.handleGoBack(a)},rightContent:[!r&&v.a.createElement(u.a,{onClick:this.handleGoSearch,key:"0",type:"search",style:{marginRight:"16px"}}),v.a.createElement(x,{scan:this.props.scan,login:this.props.login,key:1})]},n))}}]),t}(g.Component),E=o.a.Item,w=function(e){return v.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""})},x=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={visible:!1},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){console.log(e.props.value),n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?y.c.push("/login"):"scan"==e.props.value?y.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];r.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"I am description, description, description",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.scan,n=e.login;return v.a.createElement(o.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!t&&v.a.createElement(E,{key:"4",value:"scan",icon:w("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"\u626b\u4e00\u626b"),v.a.createElement(E,{key:"5",value:"photo",icon:w("PKAgAqZWJVNwKsAJSmXd"),style:{whiteSpace:"nowrap"}},"\u62cd\u7167"),!n&&v.a.createElement(E,{key:"6",value:"login",icon:w("uQIYTFeRrjPELImDRrPt")},v.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},v.a.createElement(u.a,{type:"ellipsis"}))}}]),t}(g.Component)},68:function(e,t,n){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"c",(function(){return h}));var a=n(115),r=n.n(a),c=n(64);function o(e){return{type:"changeCount",payload:e}}function s(e){var t,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.url,n=e.cb,o.next=3,r.a.awrap(c.a.get(t));case 3:return a=o.sent,n(),o.abrupt("return",{type:"getBanner",payload:a.data.result});case 6:case"end":return o.stop()}}))}function i(e){var t,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.url,n=e.params,o.next=3,r.a.awrap(c.a.get(t,{params:n}));case 3:return a=o.sent,o.abrupt("return",{type:"getGoodList",payload:a.data.result});case 5:case"end":return o.stop()}}))}function l(e){var t,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.url,n=e.params,o.next=3,r.a.awrap(c.a.get(t,{params:n}));case 3:return a=o.sent,o.abrupt("return",{type:"getGoodType",payload:a.data.result});case 5:case"end":return o.stop()}}))}function u(){return{type:"changeGoodListReverse"}}function p(e){var t,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.url,n=e.params,o.next=3,r.a.awrap(c.a.get(t,{params:n}));case 3:return a=o.sent,o.abrupt("return",{type:"getSearchList",payload:a.data.result});case 5:case"end":return o.stop()}}))}function h(){return{type:"changeSearchListReverse"}}}}]);
//# sourceMappingURL=19.ee5551ef.chunk.js.map