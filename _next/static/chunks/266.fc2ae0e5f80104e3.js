"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{3266:function(f,b,a){a.r(b);var g=a(7568),c=a(4051),h=a.n(c),i=a(5893),j=a(9396),d=a(7386),k=a.n(d),e=a(7911),l=a.n(e);b.default=function(b){k().init({});var c,a=new j.Z({name:"3cards",logo:"https://user-images.githubusercontent.com/47042841/179059165-24a274d4-9262-4709-a702-22df7101ea93.svg"},"arweave.app");a.on("connect",function(a){b.setAddress(a),console.log("connected at address: "+a)}),a.on("disconnect",function(){b.setAddress(""),console.log("disconnected")});var e,d=(c=(0,g.Z)(h().mark(function c(){return h().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:b.loggedIn?a.disconnect():(a.connect(),console.log("made it here"));case 1:case"end":return c.stop()}},c)})),function(){return c.apply(this,arguments)});return(0,g.Z)(h().mark(function a(){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!b.loggedIn){a.next=4;break}null===(c=window.arweaveWallet)|| void 0===c||c.disconnect(),b.setAddress(""),a.next=11;break;case 4:if(void 0!=window.arweaveWallet){a.next=8;break}alert("Arconnect not installed. Go to https://arconnnect.io to get started."),a.next=11;break;case 8:return a.next=10,window.arweaveWallet.connect(["ACCESS_ADDRESS","SIGN_TRANSACTION"]);case 10:window.arweaveWallet.getActiveAddress().then(function(a){b.setAddress(a)}).catch(function(a){console.log(a)});case 11:case"end":return a.stop()}},a)})),(0,i.jsx)("div",{className:l().login_text,onClick:d,children:b.loggedIn?"Logout":"Login"})}}}])