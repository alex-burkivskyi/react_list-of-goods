(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(3),o=n.n(r),i=n(4),c=n(5),a=n(8),u=n(6),l=n(7),d=n(1),b=n.n(d),p=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function h(t,e,n){var r=Object(l.a)(t);return e===s.ALPHABET&&r.sort((function(t,e){return t.localeCompare(e)})),e===s.LENGTH&&r.sort((function(t,e){return t.length-e.length})),!0===n&&(r=r.reverse()),r.map((function(t){return Object(p.jsx)("li",{className:"Goods__item level-item",children:t})}))}!function(t){t.NONE="NONE",t.ALPHABET="ALPHABET",t.LENGTH="LENGTH"}(s||(s={}));var m=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isStarted:!1,isReversed:!1,sortType:s.NONE},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,r=e.sortType,o=e.isReversed;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"container",children:[!n&&Object(p.jsx)("button",{className:"button is-primary is-rounded",type:"button",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"button is-primary is-rounded",type:"button",onClick:function(){t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(p.jsx)("button",{className:"button is-primary is-rounded",type:"button",onClick:function(){t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(p.jsx)("button",{className:"button is-warning is-rounded",type:"button",onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(p.jsx)("button",{className:"button is-danger is-rounded",type:"button",onClick:function(){t.setState({isReversed:!1,sortType:s.NONE})},children:"Reset"})]})]}),n&&Object(p.jsx)("ul",{className:"Goods level",children:h(j,r,o)})]})}}]),n}(b.a.Component);o.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3967c3dd.chunk.js.map