(function(e){function t(t){for(var i,r,a=t[0],c=t[1],l=t[2],h=0,p=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],i=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},s={app:0},n=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},1:function(e,t){},2:function(e,t){},"51f2":function(e,t,o){e.exports=o.p+"img/search.c3b231c9.svg"},5450:function(e,t,o){"use strict";o("9a6b")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Search"),o("Map")],1)},n=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"Search",class:{expanded:e.searchFocused}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchText},on:{focus:function(t){e.searchFocused=!0},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._m(0),e.searchFocused&&!e.navigationMode?o("div",{attrs:{id:"searchResults"}},[e._l(e.dynamicResults,(function(t){return o("div",{key:t.name,staticClass:"searchResult"},[o("div",{staticClass:"resultName"},[e._v(e._s(t.name))]),o("div",{staticClass:"resultSubtext"},[e._v(e._s(t.subtext))])])})),e._v(" Not finding what you want? ")],2):e._e(),e.navigationMode?o("navigation",{on:{close:e.closeNavigation}}):e._e()],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"search-submit"},[i("img",{attrs:{src:o("51f2")}})])}],c=o("b85c"),l=(o("caad"),o("2532"),o("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navigation"},[o("button",{on:{click:e.closeNavigation}},[e._v("X")])])}),u=[],h={name:"Navigation",methods:{closeNavigation:function(e){this.$emit("close")}}},p=h,d=(o("e7c1"),o("2877")),v=Object(d["a"])(p,l,u,!1,null,"5596201d",null),f=v.exports,m={name:"Search",components:{Navigation:f},props:{msg:String},data:function(){return{searchFocused:!1,searchText:"",results:[{name:"Palace Island",subtext:"island"},{name:"Royal Fungal Gardens",subtext:"area of interest"},{name:"The Royal Palace",subtext:"building"},{name:"The Royal Palace Port, East",subtext:"port"},{name:"The Royal Palace Port, West",subtext:"port"},{name:"Trash Intake facility",subtext:"building"}],navigationMode:!1}},computed:{dynamicResults:function(){var e=[];if(""==this.searchText)return e;var t,o=Object(c["a"])(this.results);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.name.includes(this.searchText)&&e.push(i)}}catch(s){o.e(s)}finally{o.f()}return e}},methods:{searchFocus:function(e){console.log(e)},closeNavigation:function(){this.navigationMode=!1}}},b=m,w=(o("8b63"),Object(d["a"])(b,r,a,!1,null,"6dc9a407",null)),y=w.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"MapContainer"}},[o("canvas",{attrs:{id:"MapCanvasMain",resize:"true"},on:{mousedown:e.mouseDown,wheel:e.mouseWheel,mousemove:e.hover}}),o("div",{attrs:{id:"debugInfo"},on:{click:e.reset}},[o("strong",[e._v("Debug Info")]),e._v(": "),o("br"),e._v(" Zoom Level: "+e._s(Math.round(100*e.zoomLevel)/100)+" "),o("br"),e._v(" Mouse: "+e._s(e.hit)+" ")])])},x=[],_=o("2222"),S=o("e97d"),j=o.n(S),P=o("6a15"),C={name:"Map",props:{msg:String},components:{},data:function(){return{path:null,scope:null,zoomLevel:null,hit:"nothing",previouslySelected:{item:null,color:null,width:null,shadowColor:null,shadowBlur:null}}},methods:{reset:function(){this.scope.project.activeLayer.removeChildren()},pathCreate:function(e){return e.activate(),new _["Path"]({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})},createTool:function(e){return e.activate(),new _["Tool"]},isSelectable:function(e){var t,o=Object(c["a"])(P["selectable-prefixes"]);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(e.includes(i))return!0}}catch(s){o.e(s)}finally{o.f()}return!1},hover:function(e){null!=this.previouslySelected.item&&(this.previouslySelected.item.strokeColor=this.previouslySelected.color,this.previouslySelected.item.strokeWidth=this.previouslySelected.width,this.previouslySelected.item.shadowColor=this.previouslySelected.shadowColor,this.previouslySelected.item.shadowBlur=this.previouslySelected.shadowBlur);var t=new _["Point"](e.offsetX,e.offsetY),o=this.scope.view.viewToProject(t),i=this.scope.project.activeLayer.children[0].hitTest(o);null!=i&&this.isSelectable(i.item.name)?(this.previouslySelected.item=i.item,this.previouslySelected.color=i.item.strokeColor,this.previouslySelected.width=i.item.strokeWidth,this.previouslySelected.shadowBlur=i.item.shadowBlur,this.previouslySelected.shadowColor=i.item.shadowBlur,i.item.strokeWidth=.2,i.item.strokeColor="#2e2e2e",i.item.shadowColor="#2e2e2e",i.item.shadowBlur=5,this.hit=i.item.name):this.hit="nothing"},mouseDown:function(){var e=this;this.tool=this.createTool(this.scope),this.tool.onMouseDown=function(){},this.tool.onMouseDrag=function(t){var o=t.point.subtract(t.downPoint);e.scope.view.center=e.scope.view.center.subtract(o),e.name=e.scope.view.center},this.tool.onMouseUp=function(){}},mouseWheel:function(e){var t=this.scope.view.zoom,o=this.scope.view.zoom;if(t=e.deltaY>0?1.05*this.scope.view.zoom:.95*this.scope.view.zoom,t>8||t<.1)e.preventDefault();else{var i=o/t,s=new _["Point"](e.offsetX,e.offsetY),n=this.scope.view.viewToProject(s),r=n,a=this.scope.view.center,c=r.subtract(a),l=r.subtract(c.multiply(i)).subtract(a);this.scope.view.zoom=t,this.scope.view.center=this.scope.view.center.add(l),e.preventDefault(),this.scope.view.zoom>3?(this.scope.project.activeLayer.children[0].children[2].visible=!0,this.scope.project.activeLayer.children[0].children[3].visible=!0):this.scope.view.zoom>1.12?(this.scope.project.activeLayer.children[0].children[2].visible=!0,this.scope.project.activeLayer.children[0].children[3].visible=!1):(this.scope.project.activeLayer.children[0].children[2].visible=!1,this.scope.project.activeLayer.children[0].children[3].visible=!1),this.scope.view.draw(),this.zoomLevel=this.scope.view.zoom}}},mounted:function(){this.scope=new _["PaperScope"],this.scope.setup("MapCanvasMain"),this.scope.view.zoom=.5,this.scope.view.center=new _["Point"](1129,923),this.zoomLevel=this.scope.view.zoom;var e=this;this.scope.project.importSVG(j.a,{onLoad:function(t){e.scope.project.activeLayer.children[0].children[3].visible=!1,e.scope.project.activeLayer.children[0].children[2].visible=!1}})}},M=C,T=(o("5450"),Object(d["a"])(M,g,x,!1,null,"90307c3a",null)),O=T.exports,k={name:"App",components:{Search:y,Map:O}},L=k,z=(o("034f"),Object(d["a"])(L,s,n,!1,null,null,null)),N=z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(N)}}).$mount("#app")},"6a15":function(e){e.exports=JSON.parse('{"places":[],"selectable-prefixes":["building","garea","statue","field","fountain"],"search-terms":[{"name":"","subtext":""},{"name":"","subtext":""},{"name":"","subtext":""},{"name":"","subtext":""},{"name":"","subtext":""}]}')},"85ec":function(e,t,o){},"8b63":function(e,t,o){"use strict";o("b0ba")},9201:function(e,t,o){},"9a6b":function(e,t,o){},b0ba:function(e,t,o){},e7c1:function(e,t,o){"use strict";o("9201")},e97d:function(e,t,o){e.exports=o.p+"img/clarance_islands_arranged_3.69fceed2.svg"}});
//# sourceMappingURL=app.2446d618.js.map