(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[388],{60963:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});n(1025);var r=n(65400),a=(n(15144),n(2307)),o=(n(75314),n(11187)),c=(n(54277),n(74048)),l=(n(77785),n(59361)),i=n(63038),u=n.n(i),s=n(67294),f=n(73935),d=n(65117),m=n(87757),p=n.n(m),v=n(48926),h=n.n(v),g=/^https?/,y=function CecIcon(e){var t=e.type,n=e.defaultUrl,r=e.className,a=e.style,o=(0,s.useRef)(null),c=(0,s.useState)(),l=u()(c,2),i=l[0],f=l[1],d=g.test(t);(0,s.useEffect)((function(){d||m().then((function(e){f(e)}))}),[]);var m=function(){var e=h()(p().mark((function _callee(){var e,r;return p().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return e=t+".svg",a.next=3,fetch(n+e);case 3:return r=a.sent,a.abrupt("return",r.text());case 5:case"end":return a.stop()}}),_callee)})));return function fetchSvg(){return e.apply(this,arguments)}}(),v=r?"cec-icon"+" ".concat(r):"cec-icon";return d?s.createElement("img",{src:t,style:a,className:r}):s.createElement("span",{ref:o,className:v,style:a,dangerouslySetInnerHTML:{__html:i||""}})};y.setDefaultUrl=function(e){y.defaultProps||(y.defaultProps={}),y.defaultProps.defaultUrl=e};const k=y;const b=function Test(e){var t=e.visible,n=e.onClose,r=(0,s.useRef)(null);return s.createElement("div",null,s.createElement("div",{className:"dialog-root"},s.createElement("div",{className:"dialog-wrap",style:{visibility:t?"visible":"hidden"},onClick:function handleClick(e){var t;null!==(t=r.current)&&void 0!==t&&t.contains(e.target)||null===n||void 0===n||n()}},s.createElement("div",{ref:r,className:"dialog",style:{animationName:t?"scale-in-center":"scale-out-center"}},s.createElement("div",{className:"dialog-header"}),"modal"))))};var E=n(97499);var C=n(59713),N=n.n(C),P=n(319),I=n.n(P),O=n(50008),S=n.n(O);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){N()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const w=function Portal(e){var t=e.visible,n=e.getContainer,r=void 0===n?function(){return document.body}:n,a=e.children,o=(0,s.useState)(0),c=u()(o,2),l=c[0],i=c[1];return(0,s.useEffect)((function(){t&&i(l+1)}),[t]),l?(0,f.createPortal)(a,r()):null};var T=n(34575),j=n.n(T),L=n(93913),_=n.n(L),D=n(2205),A=n.n(D),x=n(78585),R=n.n(x),U=n(29754),B=n.n(U);function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=B()(e);if(t){var a=B()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return R()(this,n)}}var F=function(e){A()(InnerCom,e);var t=_createSuper(InnerCom);function InnerCom(){return j()(this,InnerCom),t.apply(this,arguments)}return _()(InnerCom,[{key:"render",value:function render(){return s.createElement("div",null,"123")}}]),InnerCom}(s.PureComponent);k.setDefaultUrl("http://localhost:8089/icon/");var J={name:"\u5c0f\u660e",age:12,favoriteFoods:["apple","dumpling"],habits:[{name:"skating","zh-CN":"\u6ed1\u51b0"}],parents:{0:{relationShip:"Dad",name:"\u5c0f\u660e\u4ed6\u7238"},Mom:"\u5c0f\u660e\u4ed6\u5988"}};(0,E.NA)(J,"name"),(0,E.NA)(J,"favoriteFoods[0]"),(0,E.NA)(J,'habits[0]["zh-CN"]'),(0,E.NA)(J,"habits[1].name"),(0,E.NA)(J,"parents.Mom"),(0,E.NA)(J,"parents[0].name");const K=function Table(){var e=(0,s.useState)(!0),t=u()(e,2),i=t[0],f=t[1],m=(0,s.useState)(!1),p=u()(m,2),v=p[0],h=p[1],g=(0,s.useState)(!1),y=u()(g,2),k=(y[0],y[1],[{title:"Name",dataIndex:"name",key:"name",render:function render(e){return s.createElement("a",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function render(e){return s.createElement(s.Fragment,null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),s.createElement(l.Z,{color:t,key:e,onClick:N},e.toUpperCase())})))}},{title:"Action",key:"action",render:function render(e,t){return s.createElement(c.default,{size:"middle"},s.createElement("a",null,"Invite ",t.name),s.createElement("a",null,"Delete"))}}]),C=[{id:4,parentId:1,key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{id:3,parentId:1,key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{id:1,parentId:0,key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{id:10,parentId:3,key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];(0,E.TU)(C,(function(e,t){})),function listToTree(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parentId",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=e.reduce((function(e,t){return e[t.id]=t,e}),{});e.filter((function(e){return a[e[n]]&&(a[e[n]].children||(a[e[n]][t]=[]),a[e[n]][t].push(e)),e[n]===r}))}(C),(0,E.$k)(C,(function(e){return 3===e.name})),function filterTree(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";"object"!==S()(e)?console.warn("the tree is not object"):(Array.isArray(e),function filter(e){return e.map((function(e){return _objectSpread({},e)})).filter((function(e){return e[n]&&e[n].length&&(e[n]=filter(e[n])),e[n]&&!e[n].length&&delete e[n],e[n]&&e[n]||t(e)}))}(I()(e)))}("2",(function(e){return 1===e.name})),(0,d.useDidRecover)((function(){o.default.success("\u8fdb\u5165\u7f13\u5b58")})),(0,s.useEffect)((function(){o.default.success("\u521d\u59cb\u5316"),setTimeout((function(){f(!1)}),1e3)}),[]);var N=function handleClickTag(e){var t=function getPosition(e){for(var t=0,n=0;e;){if("BODY"==e.tagName){var r=e.scrollLeft||document.documentElement.scrollLeft,a=e.scrollTop||document.documentElement.scrollTop;t+=e.offsetLeft-r+e.clientLeft,n+=e.offsetTop-a+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}}(null===e||void 0===e?void 0:e.target);t.x,t.y;document.body};return s.createElement(s.Fragment,null,s.createElement(a.Z,{columns:k,rowKey:"key",dataSource:C,loading:i}),s.createElement(r.default,{onClick:function handleClickModalOpen(){h(!v),n.e(405).then(n.bind(n,98e3)).then((function(e){(0,e.default)()}))}},"modal"),s.createElement(F,{visible:v}),s.createElement(w,{visible:v},s.createElement(b,{onClose:function onClose(){return h(!1)},visible:v})))}}}]);