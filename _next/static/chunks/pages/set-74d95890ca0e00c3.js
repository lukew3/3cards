(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7278:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/set",function(){return t(5911)}])},5911:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r=t(7568),s=t(4051),a=t.n(s),i=t(5893),c=t(9008),o=t.n(c),d=t(7386),l=t.n(d),u=t(7294),_=t(1658),m=t.n(_),h=function(n){return(0,i.jsxs)("div",{className:m().term,children:[(0,i.jsx)("p",{children:n.termPair[0]}),(0,i.jsx)("div",{className:m().term_div}),(0,i.jsx)("p",{className:m().term_definition,children:n.termPair[1]})]})},f=t(3293),x=t.n(f),p=function(n){var e=n.terms.length,t=(0,u.useState)(0),r=t[0],s=t[1],a=(0,u.useState)(!0),c=a[0],o=a[1];return(0,i.jsxs)("div",{className:x().cards,children:[(0,i.jsx)("div",{className:x().card,onClick:function(){return o(!c)},children:(0,i.jsx)("p",{children:c?n.terms[r][0]:n.terms[r][1]})}),(0,i.jsxs)("div",{className:x().controls,children:[(0,i.jsx)("button",{onClick:function(){r-1>=0&&s(r-1)},children:"<"}),(0,i.jsxs)("p",{children:[r+1,"/",e]}),(0,i.jsx)("button",{onClick:function(){r+1<e&&s(r+1)},children:">"})]})]})},v=t(5283),j=t.n(v),w=function(){var n,e=l().init({host:"arweave.net",port:443,protocol:"https"}),t=(0,u.useState)("Unnamed Set"),s=t[0],c=t[1],d=(0,u.useState)(!1),_=d[0],m=d[1],f=(0,u.useState)([["",""],["",""],["",""]]),x=f[0],v=f[1];try{var w=new URLSearchParams(window.location.search);n=w.get("tx_id")||""}catch(g){n=""}return setTimeout((0,r.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_){t.next=7;break}if(console.log("Loading terms"),""!=n){t.next=4;break}return t.abrupt("return");case 4:e.api.get(n).then((function(n){v(n.data),m(!0)})).catch((function(){console.log("Could not load terms")})),r='{\n        transactions(\n          first: 1\n          ids: ["'.concat(n,'"]\n        ) {\n          edges { node { tags { name value } } }\n        }\n      }'),e.api.post("/graphql",{query:r}).then((function(n){var e=n.data.data.transactions.edges[0].node.tags.find((function(n){return"Title"==n.name})).value;c(e)})).catch((function(n){console.log(n)}));case 7:case"end":return t.stop()}}),t)}))),0),(0,i.jsxs)("div",{className:j().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"View Set - 3cards"}),(0,i.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:j().main,children:[(0,i.jsx)("h3",{children:"View Set"}),(0,i.jsx)(p,{terms:x}),(0,i.jsx)("h4",{className:j().title,children:s}),(0,i.jsx)("div",{className:j().terms,children:x.map((function(n,e){return(0,i.jsx)(h,{id:e,termPair:x[e]},e)}))})]})]})}},3293:function(n){n.exports={cards:"Cards_cards__Tx4uF",card:"Cards_card__Igz_I",controls:"Cards_controls__i_wg8"}},5283:function(n){n.exports={container:"Set_container__S2HYs",main:"Set_main__9hg1n",title:"Set_title___vFTa",terms:"Set_terms__QlzPW"}},1658:function(n){n.exports={term:"Term_term__66Hxs",term_div:"Term_term_div__tMylv"}},9008:function(n,e,t){n.exports=t(5443)}},function(n){n.O(0,[797,774,888,179],(function(){return e=7278,n(n.s=e);var e}));var e=n.O();_N_E=e}]);