(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--8-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--8-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--8-3!./src/assets/styles/app.less?vue&type=style&index=0&lang=less":function(e,t){},"./src/assets/images/ferret.png":function(e,t,n){e.exports=n.p+"static/img/ferret.18a616b.png"},"./src/assets/styles/app.less?vue&type=style&index=0&lang=less":function(e,t,n){"use strict";var s=n("./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--8-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--8-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--8-3!./src/assets/styles/app.less?vue&type=style&index=0&lang=less");n.n(s).a},"./src/main.js":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/babel-runtime/core-js/object/assign.js"),o=n.n(s),a=n("./node_modules/vue/dist/vue.runtime.esm.js"),i=n("./node_modules/vuex/dist/vuex.esm.js"),r=n("./node_modules/peerjs/lib/peer.js"),l=n.n(r),c=n("electron"),d={name:"Menu",data:function(){return{window:c.remote.getCurrentWindow()}}},u=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p={name:"app",components:{Menu:Object(u.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[n("button",{on:{click:function(t){e.window.close()}}},[n("i",{staticClass:"fa fa-times"})]),e._v(" "),n("button",{on:{click:function(t){e.window.minimize()}}},[n("i",{staticClass:"fa fa-minus"})])])},[],!1,null,null,null).exports}},m=(n("./src/assets/styles/app.less?vue&type=style&index=0&lang=less"),Object(u.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("main",[t("Menu"),this._v(" "),t("transition",{attrs:{appear:"",mode:"out-in",name:"slide-fade"}},[t("router-view")],1)],1)])},[],!1,null,null,null).exports),v=n("./node_modules/vue-router/dist/vue-router.esm.js"),f={name:"MyCode",methods:{copyCode:function(){console.log("test"),this.$refs.share_id.select(),document.execCommand("copy"),this.copied=!0}},data:function(){return{copied:!1}}},b=Object(u.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my_code"},[n("label",[e._v("SHARE ID:")]),n("br"),e._v(" "),n("p",{staticClass:"small"},[e._v("Send this to anyone you'd like to share with.")]),e._v(" "),e.$root.$data.store.state.peerId?n("input",{ref:"share_id",staticClass:"share_id",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.$root.$data.store.state.peerId}}):n("input",{staticClass:"share_id",attrs:{type:"text",value:"Connecting...",readonly:"readonly"}}),e._v(" "),n("button",{class:this.copied?"copy blue":"copy",on:{click:function(t){e.copyCode()}}},[n("i",{staticClass:"fa fa-copy"})])])},[],!1,null,null,null).exports,_={name:"UploadFile",methods:{prepFile:function(){var e=this.$refs.file,t=e.files[0],n=new Blob(e.files,{type:t.type});this.$root.$data.store.commit("setFile",{blob:n,file:t})}}},h=Object(u.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Select File")]),e._v(" "),n("p",{staticClass:"small"},[e._v("You can also drag and drop files below.")]),e._v(" "),n("input",{ref:"file",attrs:{type:"file"},on:{change:function(t){e.prepFile()}}})])},[],!1,null,null,null).exports,$={name:"Share",methods:{send:function(){for(var e=0;e<this.$root.$data.store.state.connections.length;e+=1){var t=this.$root.$data.store.state.connections[e];this.$root.$data.store.commit("sending"),t.send({file:this.$root.$data.store.state.blob,filename:this.$root.$data.store.state.file.name,filetype:this.$root.$data.store.state.file.type})}}}},y=Object(u.a)($,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"share"},[n("button",{staticClass:"send bottom_button",on:{click:function(t){e.send()}}},[e._v("SHARE")])])},[],!1,null,null,null).exports,g={name:"Home",components:{MyCode:b,Share:y,UploadFile:h}},C=Object(u.a)(g,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("img",{staticClass:"logo",attrs:{src:n("./src/assets/images/ferret.png"),alt:"LOGO",width:"180"}}),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("label",{staticStyle:{"text-align":"center",width:"100%"}},[e._v("What would you like to do?")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"send",on:{click:function(t){e.$router.push("/send")}}},[e._v("Send")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"send",on:{click:function(t){e.$router.push("/receive")}}},[e._v("Receive")])])},[],!1,null,null,null).exports,x={name:"GoHome"},w=Object(u.a)(x,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"go_home"},[n("button",{on:{click:function(t){e.$router.push("/")}}},[n("i",{staticClass:"fa fa-arrow-left"}),e._v(" Back")])])},[],!1,null,null,null).exports,j={name:"Send",components:{GoHome:w,MyCode:b,Share:y,UploadFile:h,Loader:Object(u.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader loader--style6",attrs:{title:"5"}},[t("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30","xml:space":"preserve"}},[t("rect",{attrs:{x:"0",y:"13",width:"4",height:"5",fill:"#333"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),this._v(" "),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),this._v(" "),t("rect",{attrs:{x:"10",y:"13",width:"4",height:"5",fill:"#333"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),this._v(" "),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),this._v(" "),t("rect",{attrs:{x:"20",y:"13",width:"4",height:"5",fill:"#333"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),this._v(" "),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])])},[],!1,null,null,null).exports},destroyed:function(){for(var e=0;e<this.$root.$data.store.state.connections.length-1;e+=1){this.$root.$data.store.state.connections[e].close()}this.$root.$data.store.commit("cleanup")}},E=Object(u.a)(j,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative onehundred"},[n("GoHome"),e._v(" "),n("h3",[e._v("Send a File")]),e._v(" "),n("p",{staticClass:"small blue"},[e._v("Connected Peers: "+e._s(e.$root.$data.store.state.connections.length))]),e._v(" "),n("br"),e._v(" "),n("MyCode"),e._v(" "),n("br"),e._v(" "),n("UploadFile"),e._v(" "),n("br"),e._v(" "),e.$root.$data.store.state.sending?n("Loader"):e._e(),e._v(" "),e.$root.$data.store.state.file&&e.$root.$data.store.state.connections.length>0&&!e.$root.$data.store.state.sending?n("Share"):e.$root.$data.store.state.file?e.$root.$data.store.state.sending?n("button",{staticClass:"send disabled bottom_button"},[e._v("SENDING")]):n("button",{staticClass:"send disabled bottom_button",attrs:{disabled:""}},[e._v("WAITING FOR CONNECTION(S)")]):n("button",{staticClass:"send disabled bottom_button",attrs:{disabled:""}},[e._v(" SELECT A FILE")])],1)},[],!1,null,null,null).exports;var S={name:"ConnectTo",data:function(){return{connection:null}},methods:{connect:function(){var e=this;this.connection=this.$root.$data.store.state.peer.connect(this.$refs.partnerId.value),this.connection.on("open",function(){e.connection.on("data",function(t){var n,s,o,a=new Blob([t.file],{type:t.filetype}),i=URL.createObjectURL(a);n=i,s=t.filename,(o=document.createElement("a")).download=s,o.href=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),e.connection.send({status:"received"})}),e.$root.$data.store.commit("connected")})}},destroyed:function(){this.connection&&(this.connection.close(),this.$root.$data.store.commit("disconnected"))}},I={name:"Receive",components:{ConnectTo:Object(u.a)(S,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("CONNECT TO:")]),n("br"),e._v(" "),n("p",{staticClass:"small"},[e._v("Enter a share ID to receive files from.")]),e._v(" "),n("input",{ref:"partnerId",attrs:{type:"text",placeholder:"SOMEONES SHARE ID..."},on:{keyup:function(t){e.$root.$data.store.commit("setPartnerId",e.$refs.partnerId.value)}}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),e.$root.$data.store.state.connected?n("button",{staticClass:"send green disabled bottom_button",on:{click:function(t){e.connect()}}},[n("i",{staticClass:"fa fa-spin fa-spinner"}),e._v(" WAITING FOR FILES")]):n("button",{staticClass:"send bottom_button",on:{click:function(t){e.connect()}}},[e._v("CONNECT")])])},[],!1,null,null,null).exports,GoHome:w}},O=Object(u.a)(I,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative onehundred"},[n("GoHome"),e._v(" "),n("h3",[e._v("Receive a File")]),e._v(" "),e.$root.$data.store.state.connected?n("p",{staticClass:"small blue"},[e._v("File pipeline open, awaiting files...")]):e._e(),e._v(" "),n("br"),e._v(" "),n("ConnectTo"),e._v(" "),n("br")],1)},[],!1,null,null,null).exports;a.a.use(v.a);var k=new v.a({mode:"history",base:"/vuejs-starterkit",routes:[{path:"/",name:"home",component:C},{path:"/send",name:"send",component:E},{path:"/receive",name:"receive",component:O}]});a.a.config.productionTip=!1,a.a.use(i.a),new a.a({el:"#app",functional:!0,router:k,created:function(){var e=this;this.store.commit("connect"),this.store.state.peer.on("open",function(t){e.store.commit("setPeerId",t),e.store.state.peer.on("connection",function(t){t.on("data",function(t){console.log("got data",t),t.status&&"received"===t.status&&e.store.commit("received")}),t.on("close",function(){e.store.commit("dropConn",t)}),e.store.commit("addConn",t)})})},data:function(){var e=localStorage.getItem("localState")?JSON.parse(localStorage.getItem("localState")):{};return{connectionCount:0,store:new i.a.Store({state:o()({sending:!1,peerId:null,peer:null,blob:null,file:null,connected:!1,received:0,connections:[]},e),mutations:{setPeerId:function(e,t){e.peerId=t},setPartnerId:function(e,t){e.partnerId=t},connect:function(e){e.peer=new l.a},sending:function(e){e.sending=!0},setFile:function(e,t){e.file=t.file,e.blob=t.blob},addConn:function(e,t){var n=e.connections;n.push(t),e.connections=n},connected:function(e){e.connected=!0},disconnected:function(e){e.connected=!1},cleanup:function(e){e.connections=[],e.file=null,e.blob=null,e.received=0,e.sending=!1},received:function(e){e.received+=1,e.received>=e.connections.length&&(e.sending=!1)},dropConn:function(e,t){var n=e.connections;e.connections=n.filter(function(e){return e.peer!==t.peer})}}})}},render:function(e){return e(m)}})},electron:function(e,t){e.exports=require("electron")}},[["./src/main.js","manifest","vendors"]]]);
//# sourceMappingURL=app.4926df85e8bfbd517a6f.js.map