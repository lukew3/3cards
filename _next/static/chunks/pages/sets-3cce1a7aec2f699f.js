(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{7648:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sets",function(){return t(408)}])},408:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var s=t(7568),a=t(4051),r=t.n(a),c=t(5893),o=t(9008),i=t.n(o),d=t(7386),l=t.n(d),u=t(7294),h=t(1163),f=t(1664),_=t.n(f),p=t(7356),g=t.n(p),m=t(4006),v=function(n){return(0,c.jsx)(_(),{href:"".concat((0,m.Z)(),"/set?tx_id=").concat(n.set.tx_id),children:(0,c.jsx)("a",{children:(0,c.jsxs)("div",{className:g().cont,children:[(0,c.jsx)("p",{className:g().title,children:n.set.title}),(0,c.jsxs)("div",{className:g().cont_right,children:[(0,c.jsxs)("p",{children:[n.set.card_count," cards"]}),(0,c.jsx)(_(),{href:"".concat((0,m.Z)(),"/sets?owner=").concat(n.set.owner_address),children:(0,c.jsx)("a",{className:g().short_address,children:(0,c.jsxs)("p",{children:["Created By: ",function(){var e=n.set.owner_address;return e.substring(0,5)+".."+e.substring(e.length-4)}()]})})}),(0,c.jsxs)("p",{children:["Created On: ",new Date(1e3*n.set.timestamp).toLocaleString()]})]})]})})})},w=t(4342),x=t.n(w),j=function(){var n=l().init({host:"arweave.net",port:443,protocol:"https"}),e=(0,h.useRouter)(),t=(0,u.useState)([]),a=t[0],o=t[1],d=(0,u.useState)(!0),f=d[0],p=d[1],g=function(){var e=(0,s.Z)(r().mark((function e(){var t,s,a,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:10,t=new URLSearchParams(window.location.search),s=t.get("owner")?'owners: ["'.concat(t.get("owner"),'"]'):"",a=t.get("after")?'after: "'.concat(t.get("after"),'"'):"",c="{\n      transactions(\n        first: ".concat(10,"\n        ").concat(a,"\n        ").concat(s,'\n        tags: [\n          {\n            name: "Content-Type",\n            values: ["application/json"]\n          },\n          {\n            name: "App-Name",\n            values: ["3cards"]\n          }\n        ]\n      ) {\n        edges {\n          node {\n            id\n            owner {\n              address\n            }\n            block {\n              timestamp\n            }\n            tags {\n              name\n              value\n            }\n          }\n        }\n      }\n    }'),n.api.post("/graphql",{query:c}).then((function(n){var e=[];n.data.data.transactions.edges.forEach((function(n){var t,s,a,r=(null===(t=n.node.tags.find((function(n){return"Title"===n.name})))||void 0===t?void 0:t.value)||"Unnamed Set";e.push({tx_id:n.node.id,timestamp:(null===(s=n.node.block)||void 0===s?void 0:s.timestamp)||Date.now()/1e3,owner_address:n.node.owner.address,title:r.length>50?r.slice(0,47)+"...":r,card_count:(null===(a=n.node.tags.find((function(n){return"Card-Count"===n.name})))||void 0===a?void 0:a.value)||"?"})})),o(e),p(!1),console.log(e)})).catch((function(n){o([]),p(!1),console.log(n)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){setTimeout((function(){console.log("Loading sets"),g()}),0)}),[e.asPath]),(0,c.jsxs)("div",{className:x().container,children:[(0,c.jsx)(i(),{children:(0,c.jsx)("title",{children:"Find Sets - 3cards"})}),(0,c.jsxs)("main",{className:x().main,children:[(0,c.jsx)("h3",{children:"Find Sets"}),f?(0,c.jsx)("div",{className:"lds-dual-ring"}):0===a.length?(0,c.jsx)("div",{children:"No sets found"}):(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:a.map((function(n,e){return(0,c.jsx)(v,{id:e,set:n},e)}))}),(0,c.jsxs)("div",{className:x().page_control,children:[(0,c.jsx)("p",{children:"<"}),(0,c.jsx)(_(),{href:"".concat((0,m.Z)()).concat(function(){var n={};a.length>0&&(n.after=a[a.length-1].tx_id);var e=new URLSearchParams;try{e=new URLSearchParams(window.location.search)}catch(s){}e.get("owner")&&(n.owner=e.get("owner"));var t=new URLSearchParams(n);return t.toString()?"?".concat(t.toString()):""}()),children:(0,c.jsx)("p",{children:">"})})]})]})]})}},7356:function(n){n.exports={cont:"SetInfo_cont__QQswK",title:"SetInfo_title__3IzZf",cont_right:"SetInfo_cont_right__5kis0"}},4342:function(n){n.exports={container:"Sets_container__Fhacz",main:"Sets_main__T6Wk3",page_control:"Sets_page_control__QIw_o"}},1163:function(n,e,t){n.exports=t(387)}},function(n){n.O(0,[797,774,888,179],(function(){return e=7648,n(n.s=e);var e}));var e=n.O();_N_E=e}]);