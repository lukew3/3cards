(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{7648:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sets",function(){return t(6042)}])},6042:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var s=t(7568),r=t(4051),a=t.n(r),i=t(5893),o=t(9008),c=t.n(o),d=t(7386),u=t.n(d),l=t(7294),_=t(1163),h=t(1664),f=t.n(h),p=t(4401),m=t.n(p),x=function(n){return(0,i.jsx)(f(),{href:"/set?tx_id=".concat(n.set.tx_id),children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{className:m().cont,children:[(0,i.jsx)("p",{className:m().title,children:n.set.title}),(0,i.jsxs)("div",{className:m().cont_right,children:[(0,i.jsx)(f(),{href:"/sets?owner=".concat(n.set.owner_address),children:(0,i.jsx)("a",{className:m().short_address,children:(0,i.jsxs)("p",{children:["Created By: ",function(){var e=n.set.owner_address;return e.substring(0,5)+".."+e.substring(e.length-4)}()]})})}),(0,i.jsxs)("p",{children:["Created On: ",new Date(1e3*n.set.timestamp).toLocaleString()]})]})]})})})},v=t(5399),j=t.n(v),w=function(){var n=u().init({host:"arweave.net",port:443,protocol:"https"}),e=(0,_.useRouter)(),t=(0,l.useState)([]),r=t[0],o=t[1],d=function(){var t=(0,s.Z)(a().mark((function t(){var s,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.query.owner?'owners: ["'.concat(e.query.owner,'"]'):"",r="{\n      transactions(\n        first: 10\n        ".concat(s,'\n        tags: [\n          {\n            name: "Content-Type",\n            values: ["application/json"]\n          },\n          {\n            name: "App-Name",\n            values: ["3cards"]\n          }\n        ]\n      ) {\n        edges {\n          node {\n            id\n            owner {\n              address\n            }\n            block {\n              timestamp\n            }\n            tags {\n              name\n              value\n            }\n          }\n        }\n      }\n    }'),n.api.post("/graphql",{query:r}).then((function(n){var e=[];n.data.data.transactions.edges.forEach((function(n){var t,s;e.push({tx_id:n.node.id,timestamp:(null===(t=n.node.block)||void 0===t?void 0:t.timestamp)||0,owner_address:n.node.owner.address,title:(null===(s=n.node.tags.find((function(n){return"Title"===n.name})))||void 0===s?void 0:s.value)||"Unnamed Set"})})),o(e),console.log(e)})).catch((function(n){o([]),console.log(n)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){setTimeout((function(){console.log("Loading sets"),d()}),0)}),[e.asPath]),(0,i.jsxs)("div",{className:j().container,children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Find Sets - 3cards"}),(0,i.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:j().main,children:[(0,i.jsx)("h3",{children:"Find Sets"}),(0,i.jsx)("div",{className:j().terms,children:r.map((function(n,e){return(0,i.jsx)(x,{id:e,set:n},e)}))})]})]})}},5399:function(n){n.exports={container:"Create_container___ggYn",main:"Create_main__RCqeV",title_input:"Create_title_input__YVpVY",terms:"Create_terms__8ve4n",addItem:"Create_addItem__xL3hK",publish_button:"Create_publish_button__iTGRI"}},4401:function(n){n.exports={cont:"SetInfo_cont__UNrHQ",title:"SetInfo_title__j0vcl",cont_right:"SetInfo_cont_right__5_IhH"}},9008:function(n,e,t){n.exports=t(5443)},1163:function(n,e,t){n.exports=t(387)}},function(n){n.O(0,[797,774,888,179],(function(){return e=7648,n(n.s=e);var e}));var e=n.O();_N_E=e}]);