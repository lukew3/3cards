(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7278:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/set",function(){return c(8466)}])},3673:function(f,b,a){"use strict";var g=a(7568),c=a(4051),h=a.n(c),i=a(5893),d=a(1664),j=a.n(d),e=a(7911),k=a.n(e),l=a(7294),m=function(a){var b,c=(b=(0,g.Z)(h().mark(function b(){var c;return h().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!a.loggedIn){b.next=4;break}null===(c=window.arweaveWallet)|| void 0===c||c.disconnect(),a.setAddress(""),b.next=11;break;case 4:if(void 0!=window.arweaveWallet){b.next=8;break}alert("Arconnect not installed. Go to https://arconnnect.io to get started."),b.next=11;break;case 8:return b.next=10,window.arweaveWallet.connect(["ACCESS_ADDRESS","SIGN_TRANSACTION"]);case 10:window.arweaveWallet.getActiveAddress().then(function(b){a.setAddress(b)}).catch(function(a){console.log(a)});case 11:case"end":return b.stop()}},b)})),function(){return b.apply(this,arguments)});return(0,l.useEffect)(function(){setTimeout(function(){var b;null===(b=window.arweaveWallet)|| void 0===b||b.getActiveAddress().then(function(b){b&&a.setAddress(b)}).catch(function(){a.setAddress("")})},0)}),(0,i.jsx)("div",{className:k().login_text,onClick:c,children:a.loggedIn?"Logout":"Login"})};b.Z=function(){var a=(0,l.useState)(""),b=a[0],c=a[1];return(0,i.jsxs)("nav",{className:k().nav_cont,children:[(0,i.jsx)(j(),{href:"/",children:(0,i.jsx)("h1",{className:k().title_link,children:"3cards"})}),(0,i.jsxs)("div",{className:k().nav_right,children:[(0,i.jsx)(j(),{href:"/sets",children:(0,i.jsx)("p",{children:"Find Sets"})}),function(){if(""!==b)return(0,i.jsx)(j(),{href:{pathname:"/sets",query:{owner:b}},children:(0,i.jsx)("p",{children:"My Sets"})})}(),(0,i.jsx)(j(),{href:"/create",children:(0,i.jsx)("p",{children:"Create Set"})}),(0,i.jsx)(m,{loggedIn:Boolean(b),setAddress:c})]})]})}},8466:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return q}});var h=a(5893),c=a(9008),i=a.n(c),d=a(7386),j=a.n(d),k=a(1163),l=a(7294),m=a(3673),e=a(1658),n=a.n(e),o=function(a){return(0,h.jsxs)("div",{className:n().term,children:[(0,h.jsx)("div",{className:n().term_header,children:(0,h.jsx)("div",{children:a.id+1})}),(0,h.jsxs)("div",{className:n().term_input,children:[(0,h.jsx)("input",{type:"text",placeholder:"Term",value:a.termPair[0],disabled:!0}),(0,h.jsx)("input",{type:"text",placeholder:"Definition",value:a.termPair[1],disabled:!0})]})]})},f=a(5399),p=a.n(f),q=function(){var a,n=j().init({}),b=(0,l.useState)("My Set"),e=b[0],q=b[1],c=(0,l.useState)(!1),r=c[0],s=c[1],d=(0,l.useState)([["",""],["",""],["",""]]),f=d[0],t=d[1],g=(0,k.useRouter)(),u=(null===(a=g.query.tx_id)|| void 0===a?void 0:a.toString())||"";return setTimeout(function(){r||(console.log("Loading terms"),""!=u&&n.transactions.get(u).then(function(a){s(!0),t(JSON.parse(a.get("data",{decode:!0,string:!0}))),a.tags.forEach(function(a){console.log(a),"Title"==a.get("name",{decode:!0,string:!0})&&q(a.get("value",{decode:!0,string:!0}))})}).catch(function(a){console.log(a)}))},0),(0,h.jsxs)("div",{className:p().container,children:[(0,h.jsxs)(i(),{children:[(0,h.jsx)("title",{children:"View Set - 3cards"}),(0,h.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsx)(m.Z,{}),(0,h.jsxs)("main",{className:p().main,children:[(0,h.jsx)("h3",{children:"View Set"}),(0,h.jsx)("h4",{children:e}),(0,h.jsx)("div",{className:p().terms,children:f.map(function(b,a){return(0,h.jsx)(o,{id:a,termPair:f[a]},a)})})]})]})}},5399:function(a){a.exports={container:"Create_container___ggYn",main:"Create_main__RCqeV",title_input:"Create_title_input__YVpVY",terms:"Create_terms__8ve4n",addItem:"Create_addItem__xL3hK",publish_button:"Create_publish_button__iTGRI"}},7911:function(a){a.exports={nav_cont:"Nav_nav_cont__ATXUg",title_link:"Nav_title_link__x_aST",nav_right:"Nav_nav_right__0XlU_",login_text:"Nav_login_text__YBgOy"}},1658:function(a){a.exports={term:"Term_term__66Hxs",term_header:"Term_term_header__u0vGY",term_ops:"Term_term_ops__UOErV",term_input:"Term_term_input__cKNXt"}}},function(a){a.O(0,[289,386,774,888,179],function(){var b;return a(a.s=7278)}),_N_E=a.O()}])