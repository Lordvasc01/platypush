(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[7643],{4964:function(e,t,n){var r=n(5112),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},647:function(e,t,n){var r=n(1702),a=n(7908),i=Math.floor,o=r("".charAt),s=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,p){var h=n+e.length,g=r.length,v=l;return void 0!==d&&(d=a(d),v=u),s(p,v,(function(a,s){var u;switch(o(s,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,h);case"<":u=d[c(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>g){var p=i(l/10);return 0===p?a:p<=g?void 0===r[p-1]?o(s,1):r[p-1]+o(s,1):a}u=r[l-1]}return void 0===u?"":u}))}},3929:function(e,t,n){var r=n(7854),a=n(7850),i=r.TypeError;e.exports=function(e){if(a(e))throw i("The method doesn't accept regular expressions");return e}},6091:function(e,t,n){var r=n(6530).PROPER,a=n(7293),i=n(1361),o="​᠎";e.exports=function(e){return a((function(){return!!i[e]()||o[e]()!==o||r&&i[e].name!==e}))}},8862:function(e,t,n){var r=n(2109),a=n(7854),i=n(5005),o=n(2104),s=n(1702),c=n(7293),u=a.Array,l=i("JSON","stringify"),d=s(/./.exec),p=s("".charAt),h=s("".charCodeAt),g=s("".replace),v=s(1..toString),f=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,b=function(e,t,n){var r=p(n,t-1),a=p(n,t+1);return d(m,e)&&!d(y,a)||d(y,e)&&!d(m,r)?"\\u"+v(h(e,0),16):e},k=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&r({target:"JSON",stat:!0,forced:k},{stringify:function(e,t,n){for(var r=0,a=arguments.length,i=u(a);r<a;r++)i[r]=arguments[r];var s=o(l,null,i);return"string"==typeof s?g(s,f,b):s}})},8757:function(e,t,n){"use strict";var r=n(2109),a=n(7854),i=n(6916),o=n(1702),s=n(4488),c=n(614),u=n(7850),l=n(1340),d=n(8173),p=n(7066),h=n(647),g=n(5112),v=n(1913),f=g("replace"),m=RegExp.prototype,y=a.TypeError,b=o(p),k=o("".indexOf),w=o("".replace),x=o("".slice),D=Math.max,A=function(e,t,n){return n>e.length?-1:""===t?n:k(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,a,o,p,g,_,C,q,O=s(this),P=0,E=0,L="";if(null!=e){if(n=u(e),n&&(r=l(s("flags"in m?e.flags:b(e))),!~k(r,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(a=d(e,f),a)return i(a,e,O,t);if(v&&n)return w(l(O),e,t)}o=l(O),p=l(e),g=c(t),g||(t=l(t)),_=p.length,C=D(1,_),P=A(o,p,0);while(-1!==P)q=g?l(t(p,P,o)):h(p,o,P,[],void 0,t),L+=x(o,E,P)+q,E=P+_,P=A(o,p,P+C);return E<o.length&&(L+=x(o,E)),L}})},5306:function(e,t,n){"use strict";var r=n(2104),a=n(6916),i=n(1702),o=n(7007),s=n(7293),c=n(9670),u=n(614),l=n(9303),d=n(7466),p=n(1340),h=n(4488),g=n(1530),v=n(8173),f=n(647),m=n(7651),y=n(5112),b=y("replace"),k=Math.max,w=Math.min,x=i([].concat),D=i([].push),A=i("".indexOf),_=i("".slice),C=function(e){return void 0===e?e:String(e)},q=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),P=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var i=O?"$":"$0";return[function(e,n){var r=h(this),i=void 0==e?void 0:v(e,b);return i?a(i,e,r,n):a(t,p(r),e,n)},function(e,a){var o=c(this),s=p(e);if("string"==typeof a&&-1===A(a,i)&&-1===A(a,"$<")){var h=n(t,o,s,a);if(h.done)return h.value}var v=u(a);v||(a=p(a));var y=o.global;if(y){var b=o.unicode;o.lastIndex=0}var q=[];while(1){var O=m(o,s);if(null===O)break;if(D(q,O),!y)break;var P=p(O[0]);""===P&&(o.lastIndex=g(s,d(o.lastIndex),b))}for(var E="",L=0,M=0;M<q.length;M++){O=q[M];for(var T=p(O[0]),N=k(w(l(O.index),s.length),0),S=[],H=1;H<O.length;H++)D(S,C(O[H]));var R=O.groups;if(v){var I=x([T],S,N,s);void 0!==R&&D(I,R);var $=p(r(a,void 0,I))}else $=f(T,s,N,S,R,a);N>=L&&(E+=_(s,L,N)+$,L=N+T.length)}return E+_(s,L)}]}),!P||!q||O)},6755:function(e,t,n){"use strict";var r=n(2109),a=n(1702),i=n(1236).f,o=n(7466),s=n(1340),c=n(3929),u=n(4488),l=n(4964),d=n(1913),p=a("".startsWith),h=a("".slice),g=Math.min,v=l("startsWith"),f=!d&&!v&&!!function(){var e=i(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!f&&!v},{startsWith:function(e){var t=s(u(this));c(e);var n=o(g(arguments.length>1?arguments[1]:void 0,t.length)),r=s(e);return p?p(t,r,n):h(t,n,n+r.length)===r}})},3210:function(e,t,n){"use strict";var r=n(2109),a=n(3111).trim,i=n(6091);r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},7643:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});n(8309),n(7941),n(2707);var r=n(6252),a=n(9963),i=n(3577),o={class:"row plugin execute-container"},s={class:"command-container"},c=(0,r._)("div",{class:"title"},"Execute Action",-1),u={class:"request-type-container"},l=["checked"],d=(0,r._)("label",{for:"action-structured-input"},"Structured request",-1),p=["checked"],h=(0,r._)("label",{for:"action-raw-input"},"Raw request",-1),g={class:"autocomplete"},v=["disabled"],f=["disabled"],m=(0,r._)("i",{class:"fas fa-play"},null,-1),y=[m],b={key:0,class:"doc-container"},k=(0,r._)("div",{class:"title"}," Action documentation ",-1),w=["innerHTML"],x=["textContent"],D={key:1,class:"options"},A={key:0,class:"params",ref:"params"},_=["disabled","placeholder","onUpdate:modelValue","onFocus"],C={key:0,class:"attr-doc-container mobile"},q={class:"title"},O=(0,r.Uk)(" Attribute: "),P=["textContent"],E=["innerHTML"],L=["textContent"],M={key:0,class:"extra-params",ref:"extraParams"},T={class:"col-5"},N=["disabled","onUpdate:modelValue"],S={class:"col-5"},H=["disabled","onUpdate:modelValue"],R={class:"col-2 buttons"},I=["onClick"],$=(0,r._)("i",{class:"fas fa-trash"},null,-1),j=[$],U={key:1,class:"add-param"},V=(0,r._)("i",{class:"fas fa-plus"},null,-1),F=[V],J={key:1,class:"attr-doc-container widescreen"},Z={class:"title"},z=(0,r.Uk)(" Attribute: "),B=["textContent"],W=["innerHTML"],K=["textContent"],Y={class:"output-container"},G=["textContent"],Q=["innerHTML"],X=["innerHTML"],ee={class:"first-row"},te=["disabled"],ne=(0,r._)("i",{class:"fas fa-play"},null,-1),re=[ne],ae={key:0,class:"output-container"},ie=["textContent"],oe=["innerHTML"],se=["innerHTML"],ce={class:"procedures-container"},ue=(0,r._)("div",{class:"title"},"Execute Procedure",-1),le=["onClick"],de={class:"head"},pe=["textContent"],he={class:"btn-container col-no-margin-1"},ge=["disabled"],ve=(0,r._)("i",{class:"fas fa-play"},null,-1),fe=[ve],me={key:0,class:"params"},ye=["disabled","placeholder","onUpdate:modelValue"];function be(e,t,n,m,$,V){var ne=(0,r.up)("Loading");return(0,r.wg)(),(0,r.iD)("div",o,[$.loading?((0,r.wg)(),(0,r.j4)(ne,{key:0})):(0,r.kq)("",!0),(0,r._)("div",s,[c,(0,r._)("form",{class:"action-form",ref:"actionForm",autocomplete:"off",onSubmit:t[8]||(t[8]=(0,a.iM)((function(){return V.executeAction&&V.executeAction.apply(V,arguments)}),["prevent"]))},[(0,r._)("div",u,[(0,r._)("input",{type:"radio",id:"action-structured-input",checked:$.structuredInput,onChange:t[0]||(t[0]=function(e){return V.onInputTypeChange(!0)})},null,40,l),d,(0,r._)("input",{type:"radio",id:"action-raw-input",checked:!$.structuredInput,onChange:t[1]||(t[1]=function(e){return V.onInputTypeChange(!1)})},null,40,p),h]),(0,r._)("div",{class:(0,i.C_)(["request structured-request",$.structuredInput?"":"hidden"])},[(0,r._)("div",g,[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{ref:"actionName",type:"text",class:"action-name",placeholder:"Action Name",disabled:$.running,"onUpdate:modelValue":t[2]||(t[2]=function(e){return $.action.name=e}),onChange:t[3]||(t[3]=function(e){return $.actionChanged=!0}),onBlur:t[4]||(t[4]=function(){return V.updateAction&&V.updateAction.apply(V,arguments)})},null,40,v),[[a.nr,$.action.name]])])]),(0,r._)("button",{type:"submit",class:"run-btn btn-primary",disabled:$.running,title:"Run"},y,8,f),$.selectedDoc?((0,r.wg)(),(0,r.iD)("div",b,[k,$.htmlDoc?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"doc html",innerHTML:$.selectedDoc},null,8,w)):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"doc raw",textContent:(0,i.zw)($.selectedDoc)},null,8,x))])):(0,r.kq)("",!0),$.action.name in $.actions&&(Object.keys($.action.args).length||$.action.supportsExtraArgs)?((0,r.wg)(),(0,r.iD)("div",D,[Object.keys($.action.args).length||$.action.supportsExtraArgs?((0,r.wg)(),(0,r.iD)("div",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys($.action.args),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param",key:e},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-param-value",disabled:$.running,placeholder:e,"onUpdate:modelValue":function(t){return $.action.args[e].value=t},onFocus:function(t){return V.selectAttrDoc(e)},onBlur:t[5]||(t[5]=function(){return V.resetAttrDoc&&V.resetAttrDoc.apply(V,arguments)})},null,40,_),[[a.nr,$.action.args[e].value]])]),$.selectedAttrDoc&&$.selectedAttr===e?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",q,[O,(0,r._)("div",{class:"attr-name",textContent:(0,i.zw)($.selectedAttr)},null,8,P)]),$.htmlDoc?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"doc html",innerHTML:$.selectedAttrDoc},null,8,E)):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"doc raw",textContent:(0,i.zw)($.selectedAttrDoc)},null,8,L))])):(0,r.kq)("",!0)])})),128)),Object.keys($.action.extraArgs).length?((0,r.wg)(),(0,r.iD)("div",M,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys($.action.extraArgs),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param extra-param",key:e},[(0,r._)("label",T,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-extra-param-name",disabled:$.running,placeholder:"Name","onUpdate:modelValue":function(t){return $.action.extraArgs[e].name=t}},null,8,N),[[a.nr,$.action.extraArgs[e].name]])]),(0,r._)("label",S,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-extra-param-value",disabled:$.running,placeholder:"Value","onUpdate:modelValue":function(t){return $.action.extraArgs[e].value=t}},null,8,H),[[a.nr,$.action.extraArgs[e].value]])]),(0,r._)("label",R,[(0,r._)("button",{type:"button",class:"action-extra-param-del",title:"Remove parameter",onClick:function(t){return V.removeParameter(e)}},j,8,I)])])})),128))],512)):(0,r.kq)("",!0),$.action.supportsExtraArgs?((0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("button",{type:"button",title:"Add a parameter",onClick:t[6]||(t[6]=function(){return V.addParameter&&V.addParameter.apply(V,arguments)})},F)])):(0,r.kq)("",!0)],512)):(0,r.kq)("",!0),$.selectedAttrDoc?((0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("div",Z,[z,(0,r._)("div",{class:"attr-name",textContent:(0,i.zw)($.selectedAttr)},null,8,B)]),$.htmlDoc?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"doc html",innerHTML:$.selectedAttrDoc},null,8,W)):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"doc raw",textContent:(0,i.zw)($.selectedAttrDoc)},null,8,K))])):(0,r.kq)("",!0),(0,r._)("div",Y,[null!=$.error||null!=$.response?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"title",textContent:(0,i.zw)(null!=$.error?"Error":"Output")},null,8,G)):(0,r.kq)("",!0),null!=$.response?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"response",innerHTML:$.response},null,8,Q)):null!=$.error?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"error",innerHTML:$.error},null,8,X)):(0,r.kq)("",!0)])])):(0,r.kq)("",!0)],2),(0,r._)("div",{class:(0,i.C_)(["request raw-request",$.structuredInput?"hidden":""])},[(0,r._)("div",ee,[(0,r._)("label",null,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return $.rawRequest=e}),placeholder:"Raw JSON request"},null,512),[[a.nr,$.rawRequest]])]),(0,r._)("button",{type:"submit",disabled:$.running,class:"run-btn btn-primary",title:"Run"},re,8,te)]),null!=$.response||null!=$.error?((0,r.wg)(),(0,r.iD)("div",ae,[(0,r._)("div",{class:"title",textContent:(0,i.zw)(null!=$.error?"Error":"Output")},null,8,ie),null!=$.error?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"error",innerHTML:$.error},null,8,oe)):null!=$.response?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"response",innerHTML:$.response},null,8,se)):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],2)],544)]),(0,r._)("div",ce,[ue,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys($.procedures).sort(),(function(n){return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["procedure",$.selectedProcedure.name===n?"selected":""]),key:n,onClick:function(e){return V.updateProcedure(n,e)}},[(0,r._)("form",{ref_for:!0,ref:"procedureForm",autocomplete:"off",onSubmit:t[11]||(t[11]=(0,a.iM)((function(){return V.executeProcedure&&V.executeProcedure.apply(V,arguments)}),["prevent"]))},[(0,r._)("div",de,[(0,r._)("div",{class:"name col-no-margin-11",textContent:(0,i.zw)(n)},null,8,pe),(0,r._)("div",he,[$.selectedProcedure.name===n?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"submit",class:"run-btn btn-default",disabled:$.running,title:"Run",onClick:t[9]||(t[9]=(0,a.iM)((function(t){return e.$emit("submit")}),["stop"]))},fe,8,ge)):(0,r.kq)("",!0)])]),$.selectedProcedure.name===n?((0,r.wg)(),(0,r.iD)("div",me,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.keys($.selectedProcedure.args),(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"param",key:e},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"text",class:"action-param-value",onClick:t[10]||(t[10]=function(e){return e.stopPropagation()}),disabled:$.running,placeholder:e,"onUpdate:modelValue":function(t){return $.selectedProcedure.args[e]=t}},null,8,ye),[[a.nr,$.selectedProcedure.args[e]]])])])})),128))])):(0,r.kq)("",!0)],544)],10,le)})),128))])])}var ke=n(4648),we=n(8534);n(5666),n(2479),n(1539),n(9720),n(4916),n(3123),n(4723),n(6755),n(3210),n(5306),n(8757),n(7042),n(8862),n(9714);function xe(e,t,n){var r;function a(e){if(!e)return!1;i(e),r>=e.length&&(r=0),r<0&&(r=e.length-1),e[r].classList.add("autocomplete-active")}function i(e){for(var t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}function o(t){for(var n=document.getElementsByClassName("autocomplete-items"),r=0;r<n.length;r++)t!==n[r]&&t!==e&&n[r].parentNode.removeChild(n[r])}e.addEventListener("input",(function(){var a,i,s,c=this.value;if(o(),!c)return!1;for(r=-1,a=document.createElement("DIV"),a.setAttribute("id",this.id+"autocomplete-list"),a.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(a),s=0;s<t.length;s++)t[s].substr(0,c.length).toUpperCase()===c.toUpperCase()&&(i=document.createElement("DIV"),i.innerHTML="<strong>"+t[s].substr(0,c.length)+"</strong>",i.innerHTML+=t[s].substr(c.length),i.innerHTML+="<input type='hidden' value='"+t[s]+"'>",i.addEventListener("click",(function(t){e.value=this.getElementsByTagName("input")[0].value,n&&n(t,e.value),o()})),a.appendChild(i))})),e.addEventListener("keydown",(function(e){9===e.keyCode&&o()})),e.addEventListener("keydown",(function(e){var t=document.getElementById(this.id+"autocomplete-list");t&&(t=t.getElementsByTagName("div")),40===e.keyCode?(r++,a(t)):38===e.keyCode?(r--,a(t)):13===e.keyCode&&r>-1&&t&&t.length&&(e.preventDefault(),t[r].click(),this.focus())})),document.addEventListener("click",(function(e){o(e.target)}))}var De=xe,Ae=n(2628),_e=n(1232),Ce={name:"Execute",components:{Loading:_e.Z},mixins:[Ae.Z],data:function(){return{loading:!1,running:!1,structuredInput:!0,actionChanged:!1,selectedDoc:void 0,selectedAttr:void 0,selectedAttrDoc:void 0,selectedProcedure:{name:void 0,args:{}},response:void 0,error:void 0,htmlDoc:!1,rawRequest:void 0,actions:{},plugins:{},procedures:{},action:{name:void 0,args:{},extraArgs:[],supportsExtraArgs:!1}}},methods:{refresh:function(){var e=this;return(0,we.Z)(regeneratorRuntime.mark((function t(){var n,r,a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.request("inspect.get_procedures");case 4:return e.procedures=t.sent,t.next=7,e.request("inspect.get_all_plugins",{html_doc:!1});case 7:e.plugins=t.sent;case 8:return t.prev=8,e.loading=!1,t.finish(8);case 11:for(n=0,r=Object.values(e.plugins);n<r.length;n++)for(a=r[n],a.html_doc&&(e.htmlDoc=!0),i=0,o=Object.values(a.actions);i<o.length;i++)s=o[i],s.name=a.name+"."+s.name,s.supportsExtraArgs=!!s.has_kwargs,delete s.has_kwargs,e.actions[s.name]=s;c=e,De(e.$refs.actionName,Object.keys(e.actions).sort(),(function(t,n){e.action.name=n,c.updateAction()}));case 14:case"end":return t.stop()}}),t,null,[[1,,8,11]])})))()},updateAction:function(){if(this.action.name in this.actions||(this.selectedDoc=void 0),this.actionChanged&&this.action.name in this.actions){this.loading=!0;try{this.action=(0,ke.Z)((0,ke.Z)({},this.actions[this.action.name]),{},{args:Object.entries(this.actions[this.action.name].args).reduce((function(e,t){return e[t[0]]=(0,ke.Z)((0,ke.Z)({},t[1]),{},{value:t[1].default}),e}),{}),extraArgs:[]})}finally{this.loading=!1}this.selectedDoc=this.parseDoc(this.action.doc),this.actionChanged=!1,this.response=void 0,this.error=void 0}},parseDoc:function(e){if(null===e||void 0===e||!e.length||this.htmlDoc)return e;var t=0,n=0;return e.split("\n").reduce((function(e,r){return 2===++t&&(n=r.match(/^(\s*)/)[1].length),r.trim().startsWith(".. code-block")||(e+=r.slice(n).replaceAll("``","")+"\n"),e}),"")},updateProcedure:function(e,t){"submit"!==t.target.getAttribute("type")&&(this.selectedProcedure.name!==e?e in this.procedures?this.selectedProcedure={name:e,args:(this.procedures[e].args||[]).reduce((function(e,t){return e[t]=void 0,e}),{})}:console.warn("Procedure not found: "+e):this.selectedProcedure={name:void 0,args:{}})},addParameter:function(){this.action.extraArgs.push({name:void 0,value:void 0})},removeParameter:function(e){this.action.extraArgs.pop(e)},selectAttrDoc:function(e){this.response=void 0,this.error=void 0,this.selectedAttr=e,this.selectedAttrDoc=this.parseDoc(this.action.args[e].doc)},resetAttrDoc:function(){this.response=void 0,this.error=void 0,this.selectedAttr=void 0,this.selectedAttrDoc=void 0},onInputTypeChange:function(e){this.structuredInput=e,this.response=void 0,this.error=void 0},onResponse:function(e){this.response="<pre>"+JSON.stringify(e,null,2)+"</pre>",this.error=void 0},onError:function(e){this.response=void 0,this.error=e},onDone:function(){this.running=!1},executeAction:function(){if((this.action.name||this.rawRequest)&&!this.running)if(this.running=!0,this.structuredInput){var e=(0,ke.Z)((0,ke.Z)({},Object.entries(this.action.args).reduce((function(e,t){if(null!=t[1].value){var n=t[1].value;try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}e[t[0]]=n}return e}),{})),this.action.extraArgs.reduce((function(e,t){var n=e[t.value];try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}return e[t.name]=n,e}),{}));this.request(this.action.name,e).then(this.onResponse).catch(this.onError).finally(this.onDone)}else try{var t=JSON.parse(this.rawRequest);this.execute(t).then(this.onResponse).catch(this.onError).finally(this.onDone)}catch(n){this.notify({error:!0,title:"Invalid JSON request",text:n.toString()})}},executeProcedure:function(e){if(this.selectedProcedure.name&&!this.running){e.stopPropagation(),this.running=!0;var t=(0,ke.Z)({},Object.entries(this.selectedProcedure.args).reduce((function(e,t){if(null!=t[1]){var n=t[1];try{n=JSON.parse(n)}catch(r){console.debug("Not a valid JSON value"),console.debug(n)}e[t[0]]=n}return e}),{}));this.request("procedure."+this.selectedProcedure.name,t).then(this.onResponse).catch(this.onError).finally(this.onDone)}}},mounted:function(){this.refresh()}},qe=n(3744);const Oe=(0,qe.Z)(Ce,[["render",be]]);var Pe=Oe}}]);
//# sourceMappingURL=7643-legacy.cebc7792.js.map