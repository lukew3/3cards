(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7278:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/set",function(){return c(8466)}])},8466:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return p}});var h=a(5893),c=a(9008),i=a.n(c),d=a(7386),j=a.n(d),k=a(1163),l=a(7294),e=a(1658),m=a.n(e),n=function(a){return(0,h.jsxs)("div",{className:m().term,children:[(0,h.jsx)("div",{className:m().term_header,children:(0,h.jsx)("div",{children:a.id+1})}),(0,h.jsxs)("div",{className:m().term_input,children:[(0,h.jsx)("input",{type:"text",placeholder:"Term",value:a.termPair[0],disabled:!0}),(0,h.jsx)("input",{type:"text",placeholder:"Definition",value:a.termPair[1],disabled:!0})]})]})},f=a(5399),o=a.n(f),p=function(){var a,m=j().init({host:"arweave.net",port:443,protocol:"https"}),b=(0,l.useState)("My Set"),e=b[0],p=b[1],c=(0,l.useState)(!1),q=c[0],r=c[1],d=(0,l.useState)([["",""],["",""],["",""]]),f=d[0],s=d[1],g=(0,k.useRouter)(),t=(null===(a=g.query.tx_id)|| void 0===a?void 0:a.toString())||"";return setTimeout(function(){q||(console.log("Loading terms"),""!=t&&m.transactions.get(t).then(function(a){r(!0),s(JSON.parse(a.get("data",{decode:!0,string:!0}))),a.tags.forEach(function(a){console.log(a),"Title"==a.get("name",{decode:!0,string:!0})&&p(a.get("value",{decode:!0,string:!0}))})}).catch(function(a){console.log(a)}))},0),(0,h.jsxs)("div",{className:o().container,children:[(0,h.jsxs)(i(),{children:[(0,h.jsx)("title",{children:"View Set - 3cards"}),(0,h.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsxs)("main",{className:o().main,children:[(0,h.jsx)("h3",{children:"View Set"}),(0,h.jsx)("h4",{children:e}),(0,h.jsx)("div",{className:o().terms,children:f.map(function(b,a){return(0,h.jsx)(n,{id:a,termPair:f[a]},a)})})]})]})}},5399:function(a){a.exports={container:"Create_container___ggYn",main:"Create_main__RCqeV",title_input:"Create_title_input__YVpVY",terms:"Create_terms__8ve4n",addItem:"Create_addItem__xL3hK",publish_button:"Create_publish_button__iTGRI"}},1658:function(a){a.exports={term:"Term_term__66Hxs",term_header:"Term_term_header__u0vGY",term_ops:"Term_term_ops__UOErV",term_input:"Term_term_input__cKNXt"}}},function(a){a.O(0,[468,774,888,179],function(){var b;return a(a.s=7278)}),_N_E=a.O()}])