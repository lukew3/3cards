(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7278:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/set",function(){return n(8466)}])},8466:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7568),i=n(4051),a=n.n(i),s=n(5893),c=n(9008),o=n.n(c),u=n(7386),d=n.n(u),l=n(1163),m=n(7294),_=n(1658),f=n.n(_),h=function(e){return(0,s.jsxs)("div",{className:f().term,children:[(0,s.jsx)("p",{children:e.termPair[0]}),(0,s.jsx)("div",{className:f().term_div}),(0,s.jsx)("p",{className:f().term_definition,children:e.termPair[1]})]})},p=n(5283),x=n.n(p),v=function(){var e,t=d().init({host:"arweave.net",port:443,protocol:"https"}),n=(0,m.useState)("Unnamed Set"),i=n[0],c=n[1],u=(0,m.useState)(!1),_=u[0],f=u[1],p=(0,m.useState)([["",""],["",""],["",""]]),v=p[0],j=p[1],g=(null===(e=(0,l.useRouter)().query.tx_id)||void 0===e?void 0:e.toString())||"";return setTimeout((0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=7;break}if(console.log("Loading terms"),""!=g){e.next=4;break}return e.abrupt("return");case 4:t.api.get(g).then((function(e){j(e.data),f(!0)})).catch((function(){console.log("Could not load terms")})),n='{\n        transactions(\n          first: 1\n          ids: ["'.concat(g,'"]\n        ) {\n          edges { node { tags { name value } } }\n        }\n      }'),t.api.post("/graphql",{query:n}).then((function(e){var t=e.data.data.transactions.edges[0].node.tags.find((function(e){return"Title"==e.name})).value;c(t)})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)}))),0),(0,s.jsxs)("div",{className:x().container,children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"View Set - 3cards"}),(0,s.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:x().main,children:[(0,s.jsx)("h3",{children:"View Set"}),(0,s.jsx)("h4",{className:x().title,children:i}),(0,s.jsx)("div",{className:x().terms,children:v.map((function(e,t){return(0,s.jsx)(h,{id:t,termPair:v[t]},t)}))})]})]})}},5283:function(e){e.exports={container:"Set_container__S2HYs",main:"Set_main__9hg1n",title:"Set_title___vFTa",terms:"Set_terms__QlzPW"}},1658:function(e){e.exports={term:"Term_term__66Hxs",term_div:"Term_term_div__tMylv"}},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[797,774,888,179],(function(){return t=7278,e(e.s=t);var t}));var t=e.O();_N_E=t}]);