(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{5436:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/set",function(){return n(9102)}])},9102:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(5893),c=n(9008),s=n.n(c),a=n(7386),i=n.n(a),d=n(7294),o=n(3826),l=n.n(o),_=function(t){return(0,r.jsxs)("div",{className:l().term,children:[(0,r.jsx)("p",{children:t.card[0]}),(0,r.jsx)("div",{className:l().term_div}),(0,r.jsx)("p",{className:l().term_definition,children:t.card[1]})]})},u=n(2654),h=n.n(u),f=function(t){var e=t.cards.length,n=(0,d.useState)(0),c=n[0],s=n[1],a=(0,d.useState)(!0),i=a[0],o=a[1],l=function(t){var n=document.getElementById("Cards_cards_list");if(n){var r=n.scrollWidth/e;n.scrollTo(t*r,0)}},_=function(){c-1>=0&&(l(c-1),s(c-1)),o(!0)},u=function(){c+1<e&&(l(c+1),s(c+1)),o(!0)},f=function(){o(!i)},m=function(t){"ArrowLeft"===t.key?_():"ArrowRight"===t.key?u():"ArrowUp"===t.key&&f()},x=function(t){var n=t.target.scrollWidth/e,r=Math.ceil(t.target.scrollLeft/n);s(r)};return(0,d.useEffect)((function(){return window.addEventListener("keydown",m),function(){window.removeEventListener("keydown",m)}}),[c,i]),(0,d.useEffect)((function(){var t=document.getElementById("Cards_cards_list");if(t)return x({target:t}),window.addEventListener("keydown",m),t.addEventListener("scroll",x),function(){t.removeEventListener("keydown",m)}}),[]),(0,r.jsxs)("div",{className:h().cards,children:[(0,r.jsx)("input",{type:"checkbox",className:h().show_term_checkbox,checked:!i,onChange:f}),(0,r.jsx)("div",{id:"Cards_cards_list",className:h().cards_list,children:t.cards.map((function(t,e){return(0,r.jsxs)("div",{className:h().card,onClick:f,children:[(0,r.jsx)("div",{className:h().card_front,children:t[0]}),(0,r.jsx)("div",{className:h().card_back,children:t[1]})]},"cards-card-".concat(e))}))}),(0,r.jsxs)("div",{className:h().controls,children:[(0,r.jsx)("button",{onClick:_,children:"<"}),(0,r.jsxs)("p",{children:[c+1,"/",e]}),(0,r.jsx)("button",{onClick:u,children:">"})]})]})},m=n(4400),x=n.n(m),v=n(1859),p=function(t){return(0,r.jsxs)("div",{className:x().set_content,children:[(0,r.jsx)(f,{cards:t.cards}),(0,r.jsx)("h4",{className:x().title,children:t.title}),(0,r.jsx)("div",{className:x().terms,children:t.cards.map((function(t,e){return(0,r.jsx)(_,{id:e,card:t},e)}))})]})},w=function(){i().init({host:"arweave.net",port:443,protocol:"https"});var t,e=(0,d.useState)({title:"",cards:[]}),n=e[0],c=e[1],a=(0,d.useState)(!0),o=a[0],l=a[1];try{var _=new URLSearchParams(window.location.search);t=_.get("tx_id")||""}catch(u){t=""}return(0,d.useEffect)((function(){(0,v.M)(t).then((function(t){c(t)})).catch((function(t){console.log(t)})).finally((function(){l(!1)}))}),[]),(0,r.jsxs)("div",{className:x().container,children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"View Set - 3cards"})}),(0,r.jsxs)("main",{className:x().main,children:[(0,r.jsx)("h3",{children:"View Set"}),o?(0,r.jsx)("div",{className:"lds-dual-ring"}):0===n.cards.length?(0,r.jsx)("p",{children:"Set not found"}):(0,r.jsx)(p,{cards:n.cards,title:n.title})]})]})}},2654:function(t){t.exports={cards:"CardsApplet_cards__UMf7t",cards_list:"CardsApplet_cards_list__mABvx",card:"CardsApplet_card__HmwTH",show_term_checkbox:"CardsApplet_show_term_checkbox__Qjz7t",card_front:"CardsApplet_card_front__5gnhj",card_back:"CardsApplet_card_back__hMTK_",controls:"CardsApplet_controls__k_5wX"}},3826:function(t){t.exports={term:"Card_term___wT74",term_div:"Card_term_div__LJfDP"}},4400:function(t){t.exports={container:"Set_container__32u4w",main:"Set_main__ycWBh",set_content:"Set_set_content__9UkEm",title:"Set_title__os3k3",terms:"Set_terms__SKWmP"}}},function(t){t.O(0,[774,888,179],(function(){return e=5436,t(t.s=e);var e}));var e=t.O();_N_E=e}]);