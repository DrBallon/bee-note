(this["webpackJsonpbee-note"]=this["webpackJsonpbee-note"]||[]).push([[0],{462:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),i=e.n(o),c=e(22),u=e.n(c),a=e(3),l=e(2),d=e(19);function f(){var t=Object(a.a)(["\n  min-width: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]);return f=function(){return t},t}function s(){var t=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  padding-left: 10px;\n"]);return s=function(){return t},t}function b(){var t=Object(a.a)(["\n  flex: 1;\n"]);return b=function(){return t},t}function h(){var t=Object(a.a)(["\n  height: 100%;\n  width: 1px;\n  background-color: ",";\n  /* border: 3px solid #2d2d2d; */\n  border: 1px solid ",";\n"]);return h=function(){return t},t}function v(){var t=Object(a.a)(["\n  min-width: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]);return v=function(){return t},t}function p(){var t=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: green;\n  display: flex;\n  z-index: 100;\n"]);return p=function(){return t},t}function j(){var t=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return j=function(){return t},t}l.c.div(j());var x=l.c.div(p()),g=l.c.div(v());var O=l.c.div(h(),(function(t){return t.theme.borderColor}),(function(t){return t.theme.borderColor}));function m(t){return Object(r.jsx)(O,{})}l.c.div(b());var w=l.c.div(s()),y=l.c.div(f()),T="\n&::-webkit-scrollbar {\n  /*\u6eda\u52a8\u6761\u6574\u4f53\u6837\u5f0f*/\n  width: 20px; /*\u9ad8\u5bbd\u5206\u522b\u5bf9\u5e94\u6a2a\u7ad6\u6eda\u52a8\u6761\u7684\u5c3a\u5bf8*/\n  height: 1px;\n}\n&::-webkit-scrollbar-thumb {\n  /*\u6eda\u52a8\u6761\u91cc\u9762\u5c0f\u65b9\u5757*/\n  /* box-shadow: inset 0 0 5px $; */\n  background: #535353;\n}\n&::-webkit-scrollbar-track {\n  /*\u6eda\u52a8\u6761\u91cc\u9762\u8f68\u9053*/\n  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  background: #ededed; */\n}\n",k=e(6),N=e(95);function C(){var t=Object(a.a)(["\n  height: ",";\n  width: ",";\n"]);return C=function(){return t},t}function E(){var t=Object(a.a)(["\n  height: ",";\n  width: ",";\n  background-color: ",";\n  border: 1px solid black;\n  box-sizing: border-box;\n"]);return E=function(){return t},t}var D=l.c.div(E(),(function(t){var n=t.theme,e=t.height;return e||n.navigatorButtonWidth+"px"}),(function(t){var n=t.theme,e=t.width;return e||n.navigatorButtonWidth+"px"}),(function(t){return t.theme.themeColorDark})),S=l.c.div(C(),(function(t){return t.theme.navigatorButtonWidth+"px"}),(function(t){return t.theme.navigatorButtonWidth+"px"}));var z=Object(k.b)(null,null)((function(t){var n=t.clickEvent,e=(t.width,t.height,t.path),o=t.placeHolder,i=void 0!==o&&o,c=t.size;return i?Object(r.jsx)(S,{}):Object(r.jsx)(D,{width:c,height:c,onClick:function(){return n&&n()},children:Object(r.jsx)(N.Icon,{path:e,size:c})})})),R="ADD_NOTE",W="GET_NOTES",L="TOGGLE_NOTE",J="SWITCH_CURRENT_NOTE",_="CHANGE_FILTER",B="EDIT_NOTE",I="DEL_NOTE",H="CREATE_ROOT",G=function(t){return{type:I,payload:{title:t.title}}},F=function(t){return{type:J,payload:{title:t.title}}},M=function(t){return{type:_,payload:{filter:t.filter}}},A=e(24),U=e(38);function P(t,n){var e="",r="#".repeat(n);return e+="".concat(r," ").concat(t.title,"\n"),e+="".concat(t.content,"\n"),t.sub.forEach((function(t){e+=P(t,n+1)})),e}var $=function(t){return t.noteData.curNoteTitle},q=function(t){return t.noteData.root},K=function(t){return t.noteData.filter};function Q(t,n){var e=null;return t.sub.forEach((function(t){if(t.title===n&&(e=t),e)return e;e=Q(t,n)})),e}function V(t,n){var e=[];return(t.title.includes(n)||t.content.includes(n))&&e.push(t),t.sub.length>0&&t.sub.forEach((function(t){e=[].concat(Object(A.a)(e),Object(A.a)(V(t,n)))})),e}var X=Object(U.a)([function(t){return t.noteData.foldTitles}],(function(t){return t})),Y=Object(U.a)([$,q,K],(function(t,n,e){if(""!==e)return V(n,e);if(t===n.title)return n;if(0===n.sub.length)return{title:"",content:"",sub:[]};var r=Q(n,t);return r||{title:"",content:"",sub:[]}})),Z=Object(U.a)([$,q,K],(function(t,n,e){if(""===t)return"";var r=null;return(r=t===n.title?n:Q(n,t))?P(r,1):""})),tt=e(16);function nt(){var t=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return nt=function(){return t},t}function et(){var t=Object(a.a)(["\n  width: ",";\n  height: ",";\n  padding-left: ",";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 1px 0;\n  &:hover {\n    background-color: ",";\n  }\n"]);return et=function(){return t},t}var rt=l.c.div(et(),(function(t){var n=t.theme;return n?n.navWidth:"200px"}),(function(t){return t.theme.navigatorItemHeight}),(function(t){return t.paddingLeft}),(function(t){return t.theme.themeColorLight})),ot=l.c.div(nt());var it=Object(k.b)((function(t){return{foldTitles:X(t)}}),(function(t){return{delNote:function(n){t(G({title:n}))},addNote:function(n){t({type:R,payload:{parent:n}})},toggle:function(n){return t({type:L,payload:{title:{title:n}.title}})},switchNote:function(n){t(M({filter:""})),t(F({title:n}))}}}))((function(t){var n=t.level,e=t.data,o=void 0===e?{title:"",content:"",sub:[]}:e,c=t.switchNote,u=t.toggle,a=t.foldTitles,l=t.delNote,d=t.addNote,f=a.includes(o.title),s=o.sub.length>0;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsxs)(rt,{paddingLeft:10*n+"px",onClick:function(){c(o.title)},children:[Object(r.jsx)(z,{path:tt.c,placeHolder:!s,clickEvent:function(){return u(o.title)}}),Object(r.jsx)(w,{children:Object(r.jsx)(y,{children:null===o||void 0===o?void 0:o.title})}),Object(r.jsx)(z,{path:tt.b,clickEvent:function(){return t=function(){return l(o.title)},void(confirm("\u662f\u5426\u5220\u9664")&&t());var t}}),Object(r.jsx)(z,{path:tt.d,clickEvent:function(){return d(o)}})]}),Object(r.jsx)(ot,{children:f&&(null===o||void 0===o?void 0:o.sub.map((function(t){return Object(r.jsx)(it,{level:n+1,data:t},t.title)})))})]})})),ct=it;function ut(){var t=Object(a.a)(["\n  background-color: ",";\n  color: white;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  width: 80%;\n  height: 40px;\n  margin: 0 30px;\n  justify-content: center;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  box-sizing: border-box;\n  &:active {\n    border: 2px solid ",";\n  }\n"]);return ut=function(){return t},t}function at(){var t=Object(a.a)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 2px solid ",";\n"]);return at=function(){return t},t}var lt=l.c.div(at(),(function(t){return t.theme.themeColorDark})),dt=l.c.input(ut(),(function(t){return t.theme.borderColor}),(function(t){return t.theme.themeColorLight}));function ft(t,n){var e="";return e+="".concat("#".repeat(n)," ").concat(t.title,"\n"),""!==t.content&&(e+="".concat(t.content,"\n")),t.sub.forEach((function(t){e+=ft(t,n+1)})),e}var st=Object(k.b)((function(t){return{root:t.noteData.root}}),null)((function(t){var n=t.root;return Object(r.jsx)(lt,{children:Object(r.jsx)(dt,{id:"save",type:"button",value:"\u4fdd\u5b58",onClick:function(){var t=n?ft(n,1):"";!function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/plain",r=document.createElement("a");r.style.display="none",document.body.appendChild(r),r.href=window.URL.createObjectURL(new Blob([t],{type:e})),r.setAttribute("download",n),r.click(),window.URL.revokeObjectURL(r.href),document.body.removeChild(r)}(t,"test.md","text/markdown"),console.log(t)}})})}));function bt(){var t=Object(a.a)(["\n  background-color: ",";\n  color: white;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  margin: 0 30px;\n  justify-content: center;\n  border-color: transparent;\n  outline: none;\n  border-radius: 5px;\n  &:active {\n    border-color: transparent;\n  }\n"]);return bt=function(){return t},t}function ht(){var t=Object(a.a)(["\n  /* width: ","; */\n  background-color: ",";\n  color: white;\n  font-size: ",";\n  display: flex;\n  flex: 0 0 ",";\n  flex-direction: column;\n"]);return ht=function(){return t},t}var vt=l.c.div(ht(),(function(t){var n=t.theme;return n?n.navWidth:"200px"}),(function(t){return t.theme.themeColorDark}),(function(t){return t.theme.navFontSize}),(function(t){var n=t.theme;return n?n.navWidth:"200px"})),pt=l.c.button(bt(),(function(t){return t.theme.borderColor})),jt=Object(k.b)((function(t){return{storage:t.noteData.root}}),(function(t){return{createRoot:function(){return t({type:H})}}}))((function(t){var n=t.storage,e=t.createRoot,o=!n||""===n.title;return console.log(o),Object(r.jsxs)(vt,{children:[Object(r.jsx)(st,{}),o?Object(r.jsx)(pt,{onClick:function(){return e()},children:"\u65b0\u5efa"}):Object(r.jsx)(ct,{level:0,data:n})]})})),xt=e(466),gt=e(465),Ot=e(96),mt=e.n(Ot);function wt(){var t=Object(a.a)(["\n  flex: 1;\n  padding-left: 50px;\n  background-color: ",";\n  /* background-color: green; */\n  color: white;\n  overflow-y: auto;\n  ","\n"]);return wt=function(){return t},t}var yt=e(185),Tt={code:{backgroundColor:"#3D3D3D"}},kt={code:function(t){var n=t.language,e=t.value;return n?Object(r.jsx)(xt.a,{style:gt.a,language:n,children:e||"",customStyle:Tt.code}):Object(r.jsx)(xt.a,{style:gt.a,language:"shell",children:e||"",customStyle:Tt.code})}},Nt=l.c.div(wt(),(function(t){return t.theme.themeColorDark}),T);var Ct=function(t){var n=t.content,e=void 0===n?"":n;return Object(r.jsx)(Nt,{children:Object(r.jsx)(mt.a,{renderers:kt,plugins:[yt],children:e})})},Et=e(101),Dt=e.n(Et),St={lineWrapping:!0};var zt=function(t){var n=t.change,e=t.content;return Object(r.jsx)(Dt.a,{options:St,value:e,onChange:n})};function Rt(){var t=Object(a.a)(["\n  border: none;\n  height: 30px;\n  font-size: 20px;\n  &:hover {\n    border: none;\n    outline: none;\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n"]);return Rt=function(){return t},t}function Wt(){var t=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  min-width: ",";\n  background-color: ",";\n  border-radius: 0 5px 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]);return Wt=function(){return t},t}function Lt(){var t=Object(a.a)(["\n  width: 80%;\n  min-height: 15px;\n  margin: 5px 0;\n  align-items: center;\n"]);return Lt=function(){return t},t}function Jt(){var t=Object(a.a)(["\n  width: 20%;\n  height: 15px;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n"]);return Jt=function(){return t},t}function _t(){var t=Object(a.a)(["\n  position: relative;\n  width: 100%;\n  padding: 10px 60px 10px 10px;\n  box-sizing: border-box;\n  background-color: ",";\n  border: transparent 5px solid;\n  border-color: ",";\n  border-radius: 5px;\n  margin-top: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  color: white;\n  font-size: 10px;\n  z-index: 101;\n"]);return _t=function(){return t},t}var Bt=l.c.div(_t(),(function(t){return t.theme.borderColor}),(function(t){var n=t.isRoot,e=t.theme;return n?"gray":e.borderColor})),It=l.c.div(Jt()),Ht=l.c.div(Lt()),Gt=l.c.div(Wt(),(function(t){return t.theme.navigatorButtonWidth+20+"px"}),(function(t){return t.theme.themeColorLight})),Ft=l.c.input(Rt());var Mt=Object(k.b)(null,(function(t){return{delNote:function(n){t(G({title:n}))},editNote:function(n,e,r){var o;t({type:B,payload:{oldTitle:(o={oldTitle:n,newTitle:e,newContent:r}).oldTitle,newTitle:o.newTitle,newContent:o.newContent}})}}}))((function(t){var n=t.data,e=t.editNote,i=(t.isRootNode,t.delNote),c=t.edit,u=Object(o.useState)(!1),a=Object(d.a)(u,2),l=a[0],f=a[1],s=Object(o.useState)(n.content),b=Object(d.a)(s,2),h=b[0],v=b[1],p=Object(o.useState)(n.title),j=Object(d.a)(p,2),x=j[0],O=j[1];return Object(o.useEffect)((function(){v(n.content),O(n.title),f(!1),c({title:"",content:""})}),[n]),Object(o.useEffect)((function(){l&&c({title:x,content:h})}),[h,x,l,c]),Object(r.jsxs)(Bt,{children:[Object(r.jsx)(It,{children:"\u6807\u9898"}),Object(r.jsx)(Ht,{children:l?Object(r.jsx)(Ft,{value:x,onChange:function(t){return O(t.target.value)}}):n.title}),Object(r.jsx)(It,{children:"\u5185\u5bb9"}),Object(r.jsx)(Ht,{children:Object(r.jsx)(g,{children:l?Object(r.jsx)(zt,{change:v,content:h}):n.content})}),Object(r.jsxs)(Gt,{children:[Object(r.jsx)(z,{path:tt.a,clickEvent:function(){f(!l),l?(c({title:"",content:""}),e(n.title,x,h)):c({title:n.title,content:n.content})}}),Object(r.jsx)(z,{path:tt.b,clickEvent:function(){return t=function(){return i(n.title)},void(confirm("\u662f\u5426\u5220\u9664")&&t());var t}})]})]})})),At=e(102),Ut=e.n(At);function Pt(){var t=Object(a.a)(["\n  width: 80%;\n  height: 100%;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 10px;\n  font-size: 10px;\n  background-color: ",";\n  color: white;\n  &:hover {\n    outline: none;\n  }\n"]);return Pt=function(){return t},t}function $t(){var t=Object(a.a)(["\n  width: ",";\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  ","\n"]);return $t=function(){return t},t}function qt(){var t=Object(a.a)(["\n  width: ",";\n  height: 40px;\n  background-color: ",";\n  box-sizing: border-box;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  justify-content: center;\n"]);return qt=function(){return t},t}function Kt(){var t=Object(a.a)(["\n  display: flex;\n  width: ",";\n  background-color: ",";\n  flex-direction: column;\n  align-items: center;\n"]);return Kt=function(){return t},t}var Qt=l.c.div(Kt(),(function(t){var n=t.width;return 0===n?"100%":n+"px"}),(function(t){return t.theme.themeColorDark})),Vt=l.c.div(qt(),(function(t){return 0===t.width?"600px":"100%"}),(function(t){return t.theme.themeColorDark}),(function(t){return t.theme.borderColor})),Xt=l.c.div($t(),(function(t){return 0===t.width?"600px":"100%"}),T),Yt=l.c.input(Pt(),(function(t){return t.theme.themeColorLight}));var Zt=Object(k.b)((function(t){return{list:Y(t),filter:t.noteData.filter}}),(function(t){return{filterChange:function(n){t(F({title:""})),t(M({filter:n}))}}}))((function(t){var n=t.width,e=t.list,o=t.filterChange,c=t.filter,u=t.edit,a=Ut.a.isArray(e)?Object(r.jsx)(i.a.Fragment,{children:e.map((function(t){return Object(r.jsx)(Mt,{edit:u,data:t},t.title)}))}):Object(r.jsxs)(i.a.Fragment,{children:[e&&""!==e.title&&Object(r.jsx)(Mt,{edit:u,data:e,isRootNode:!0}),e&&""!==e.title&&e.sub.map((function(t){return Object(r.jsx)(Mt,{edit:u,data:t},t.title)}))]});return Object(r.jsxs)(Qt,{width:n,children:[Object(r.jsx)(Vt,{width:n,children:Object(r.jsx)(Yt,{placeholder:"\u641c\u7d22",value:c,onChange:function(t){o&&o(t.target.value)}})}),Object(r.jsx)(Xt,{width:n,children:a})]})}));function tn(){var t=Object(a.a)(["\n  flex: auto;\n  background-color: black;\n  position: relative;\n  display: flex;\n"]);return tn=function(){return t},t}function nn(){var t=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return nn=function(){return t},t}var en=Object(l.c)(x)(nn()),rn=l.c.div(tn()),on=600;function cn(t){var n=t.title,e=t.content;return" # ".concat(n,"\n").concat(e)}var un=Object(k.b)((function(t){return{markdown:Z(t)}}),null)((function(t){var n=t.markdown,e=Object(o.useState)({title:"",content:""}),i=Object(d.a)(e,2),c=i[0],u=i[1];return Object(o.useEffect)((function(){}),[c,u]),Object(r.jsxs)(en,{children:[Object(r.jsx)(jt,{}),Object(r.jsx)(m,{}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(Zt,{edit:u,width:on}),Object(r.jsx)(m,{}),Object(r.jsx)(Ct,{content:""!==c.title?cn(c):n||""})]})]})}));function an(){var t=Object(a.a)(['\nBody {\n  font-family:"Times New Roman,Georgia,Serif;";\n  .CodeMirror{\n    font-family:"Times New Roman,Georgia,Serif;";\n    font-size:20px;\n  }\n  .CodeMirror-vscrollbar{\n    ',"\n  }\n}\n"]);return an=function(){return t},t}e(461);var ln=Object(l.b)(an(),T);var dn=Object(k.b)((function(t){return{theme:t.theme}}),null)((function(t){var n=t.theme;return Object(r.jsxs)(l.a,{theme:n,children:[Object(r.jsx)(ln,{}),Object(r.jsx)(un,{})]})})),fn=e(13),sn=e(103),bn=e(104),hn={filter:"",curNoteTitle:"",foldTitles:[],root:{title:"\u6d4b\u8bd5",content:"",sub:[]}};function vn(t,n){var e=t.filter,r=t.curNoteTitle,o=t.foldTitles,i=t.root;return o.includes(n)?{filter:e,curNoteTitle:r,foldTitles:o.filter((function(t){return t!==n})),root:i}:{filter:e,curNoteTitle:r,foldTitles:[].concat(Object(A.a)(o),[n]),root:i}}function pn(t,n){return t.curNoteTitle===n?t:{filter:t.filter,curNoteTitle:n,foldTitles:t.foldTitles,root:t.root}}function jn(t,n){return t.filter===n?t:{filter:n,curNoteTitle:t.curNoteTitle,foldTitles:t.foldTitles,root:t.root}}function xn(t,n){var e=null;return t.title===n?t:(t.sub.forEach((function(t){if(t.title===n&&(e=t),e)return e;e=xn(t,n)})),e)}function gn(t,n){var e=JSON.parse(JSON.stringify(t)),r=xn(e.root,n.oldTitle);return r?(r.title=n.newTitle,r.content=n.newContent,e):t}function On(t,n){var e=JSON.parse(JSON.stringify(t)),r=xn(e.root,n.parent.title);return null===r||void 0===r||r.sub.push({title:(1e5*Math.random()).toString(),content:"",sub:[]}),e}function mn(t,n){if(t.title===n)return{title:"",content:"",sub:[]};var e={title:t.title,content:t.content,sub:[]};return t.sub.forEach((function(t){t.title!==n&&e.sub.push(mn(t,n))})),e}function wn(t,n){var e=mn(JSON.parse(JSON.stringify(t)).root,n.title);return{curNoteTitle:t.curNoteTitle,filter:t.filter,foldTitles:t.foldTitles,root:e}}function yn(t){return localStorage.setItem("note",JSON.stringify(t)),t}function Tn(){var t=localStorage.getItem("note");return t?JSON.parse(t):hn}function kn(t){return{curNoteTitle:t.curNoteTitle,filter:t.filter,foldTitles:t.foldTitles,root:{title:(1e5*Math.random()).toString(),content:"",sub:[]}}}var Nn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case H:return yn(kn(t));case I:return yn(wn(t,n.payload));case R:return yn(On(t,n.payload));case B:return yn(gn(t,n.payload));case _:return yn(jn(t,n.payload.filter));case J:return yn(pn(t,n.payload.title));case L:return yn(vn(t,n.payload.title));case W:default:return Tn()}},Cn="GET_THEME",En={backgroundColor:"blue",borderColor:"black",themeColorDark:"#3D3D3D",themeColorLight:"#5d5d5d",navFontSize:"10px",navigatorButtonWidth:24,navigatorItemHeight:"30px",navWidth:"200px",editorPaneWidth:"500px",sidebarWidth:"150px",StorageNavigatorTopHeight:"30px"},Dn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:En,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Cn:default:return t}},Sn=Object(fn.combineReducers)({config:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type,t},theme:Dn,noteData:Nn}),zn=Object(fn.createStore)(Sn,Object(sn.composeWithDevTools)(Object(fn.applyMiddleware)(bn.a)));u.a.render(Object(r.jsx)(k.a,{store:zn,children:Object(r.jsx)(dn,{})}),document.getElementById("root"))}},[[462,1,2]]]);
//# sourceMappingURL=main.840b6185.chunk.js.map