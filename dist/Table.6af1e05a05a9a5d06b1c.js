(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[388],{12629:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});n(15144);var r=n(2307),a=(n(75314),n(11187)),o=(n(54277),n(74048)),c=(n(77785),n(59361)),l=n(63038),s=n.n(l),i=n(67294),u=(n(73935),n(65117)),f=n(87757),d=n.n(f),p=n(48926),m=n.n(p),g=/^https?/,y=function CecIcon(e){var t=e.type,n=e.defaultUrl,r=e.className,a=e.style,o=(0,i.useRef)(null),c=(0,i.useState)(),l=s()(c,2),u=l[0],f=l[1],p=g.test(t);(0,i.useEffect)((function(){p||y().then((function(e){f(e)}))}),[]);var y=function(){var e=m()(d().mark((function _callee(){var e,r;return d().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return e=t+".svg",a.next=3,fetch(n+e);case 3:return r=a.sent,a.abrupt("return",r.text());case 5:case"end":return a.stop()}}),_callee)})));return function fetchSvg(){return e.apply(this,arguments)}}(),h=r?"cec-icon"+" ".concat(r):"cec-icon";return p?i.createElement("img",{src:t,style:a,className:r}):i.createElement("span",{ref:o,className:h,style:a,dangerouslySetInnerHTML:{__html:u||""}})};y.setDefaultUrl=function(e){y.defaultProps||(y.defaultProps={}),y.defaultProps.defaultUrl=e};const h=y;var v=n(97499);var k=n(59713),b=n.n(k),N=n(319),O=n.n(N),w=n(50008),P=n.n(w);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h.setDefaultUrl("http://localhost:8089/icon/");var E={name:"\u5c0f\u660e",age:12,favoriteFoods:["apple","dumpling"],habits:[{name:"skating","zh-CN":"\u6ed1\u51b0"}],parents:{0:{relationShip:"Dad",name:"\u5c0f\u660e\u4ed6\u7238"},Mom:"\u5c0f\u660e\u4ed6\u5988"}};(0,v.NA)(E,"name"),(0,v.NA)(E,"favoriteFoods[0]"),(0,v.NA)(E,'habits[0]["zh-CN"]'),(0,v.NA)(E,"habits[1].name"),(0,v.NA)(E,"parents.Mom"),(0,v.NA)(E,"parents[0].name");const T=function Table(){var e=(0,i.useState)(!0),t=s()(e,2),n=t[0],l=t[1],f=(0,i.useState)(!1),d=s()(f,2),p=(d[0],d[1],[{title:"Name",dataIndex:"name",key:"name",render:function render(e){return i.createElement("a",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function render(e){return i.createElement(i.Fragment,null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),i.createElement(c.Z,{color:t,key:e,onClick:g},e.toUpperCase())})))}},{title:"Action",key:"action",render:function render(e,t){return i.createElement(o.default,{size:"middle"},i.createElement("a",null,"Invite ",t.name),i.createElement("a",null,"Delete"))}}]),m=[{id:4,parentId:1,key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{id:3,parentId:1,key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{id:1,parentId:0,key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{id:10,parentId:3,key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];(0,v.TU)(m,(function(e,t){})),function listToTree(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parentId",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=e.reduce((function(e,t){return e[t.id]=t,e}),{});e.filter((function(e){return a[e[n]]&&(a[e[n]].children||(a[e[n]][t]=[]),a[e[n]][t].push(e)),e[n]===r}))}(m),(0,v.$k)(m,(function(e){return 3===e.name})),function filterTree(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";"object"!==P()(e)?console.warn("the tree is not object"):(Array.isArray(e),function filter(e){return e.map((function(e){return _objectSpread({},e)})).filter((function(e){return e[n]&&e[n].length&&(e[n]=filter(e[n])),e[n]&&!e[n].length&&delete e[n],e[n]&&e[n]||t(e)}))}(O()(e)))}("2",(function(e){return 1===e.name})),(0,u.useDidRecover)((function(){a.default.success("\u8fdb\u5165\u7f13\u5b58")})),(0,i.useEffect)((function(){a.default.success("\u521d\u59cb\u5316"),setTimeout((function(){l(!1)}),1e3)}),[]);var g=function handleClickTag(e){var t=function getPosition(e){for(var t=0,n=0;e;){if("BODY"==e.tagName){var r=e.scrollLeft||document.documentElement.scrollLeft,a=e.scrollTop||document.documentElement.scrollTop;t+=e.offsetLeft-r+e.clientLeft,n+=e.offsetTop-a+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}}(null===e||void 0===e?void 0:e.target);t.x,t.y;document.body};return i.createElement(i.Fragment,null,i.createElement(r.Z,{columns:p,rowKey:"key",dataSource:m,loading:n}))}}}]);