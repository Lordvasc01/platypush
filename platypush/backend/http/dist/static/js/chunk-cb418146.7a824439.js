(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb418146"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14db":function(t,e,n){},"38cf":function(t,e,n){var a=n("23e7"),s=n("1148");a({target:"String",proto:!0},{repeat:s})},"670a":function(t,e,n){"use strict";n("14db")},7726:function(t,e,n){"use strict";var a=n("7a23"),s=Object(a["K"])("data-v-70d7a7df");Object(a["u"])("data-v-70d7a7df");var c={class:"media-container"},o={class:"view-container"},l={class:"controls-container"};Object(a["s"])();var u=s((function(t,e,n,s,u,i){var r=Object(a["z"])("Controls");return Object(a["r"])(),Object(a["e"])("div",c,[Object(a["h"])("div",o,[Object(a["y"])(t.$slots,"default")]),Object(a["h"])("div",l,[Object(a["h"])(r,{status:n.status,track:n.track,buttons:n.buttons,onPlay:e[1]||(e[1]=function(e){return t.$emit("play",e)}),onPause:e[2]||(e[2]=function(e){return t.$emit("pause",e)}),onStop:e[3]||(e[3]=function(e){return t.$emit("stop")}),onPrevious:e[4]||(e[4]=function(e){return t.$emit("previous")}),onNext:e[5]||(e[5]=function(e){return t.$emit("next")}),onSeek:e[6]||(e[6]=function(e){return t.$emit("seek",e)}),onSetVolume:e[7]||(e[7]=function(e){return t.$emit("set-volume",e)}),onConsume:e[8]||(e[8]=function(e){return t.$emit("consume",e)}),onRepeat:e[9]||(e[9]=function(e){return t.$emit("repeat",e)}),onRandom:e[10]||(e[10]=function(e){return t.$emit("random",e)}),onSearch:e[11]||(e[11]=function(e){return t.$emit("search",e)})},null,8,["status","track","buttons"])])])})),i=(n("38cf"),Object(a["K"])("data-v-ea63d9a0"));Object(a["u"])("data-v-ea63d9a0");var r={class:"row"},b=Object(a["h"])("div",{class:"col-3"},null,-1),d={class:"col-6"},p={class:"buttons"},j=Object(a["h"])("i",{class:"icon fa fa-step-backward"},null,-1),O=Object(a["h"])("i",{class:"icon fa fa-stop"},null,-1),v=Object(a["h"])("i",{class:"icon fa fa-step-forward"},null,-1),f=Object(a["h"])("div",{class:"col-3"},null,-1),m={class:"row"},h={class:"col-9 volume-container"},k={class:"col-1"},y=Object(a["h"])("i",{class:"icon fa fa-volume-up"},null,-1),g={class:"col-11 volume-slider"},C={class:"col-3 list-controls"},x=Object(a["h"])("i",{class:"icon fa fa-utensils"},null,-1),$=Object(a["h"])("i",{class:"icon fa fa-random"},null,-1),w=Object(a["h"])("i",{class:"icon fa fa-redo"},null,-1),T={class:"row"},S={class:"col-s-2 col-m-1 time"},_={class:"col-s-8 col-m-10"},P={class:"col-s-2 col-m-1 time"},I={class:"controls"},R={class:"playback-controls mobile tablet col-2"},M={key:0,class:"icon play-pause fa fa-pause"},N={key:1,class:"icon play-pause fa fa-play"},J={class:"track-container col-s-8 col-m-8 col-l-3"},z={key:0,class:"track-info"},K={key:0,class:"title"},V={key:1,class:"artist"},q={class:"playback-controls desktop col-6"},A={class:"row buttons"},D=Object(a["h"])("i",{class:"icon fa fa-step-backward"},null,-1),E={key:0,class:"icon play-pause fa fa-pause"},H={key:1,class:"icon play-pause fa fa-play"},B=Object(a["h"])("i",{class:"icon fa fa-stop"},null,-1),F=Object(a["h"])("i",{class:"icon fa fa-step-forward"},null,-1),G={class:"row"},L={class:"col-1 time"},Q={class:"col-10"},U={class:"col-1 time"},W={class:"col-2 pull-right mobile tablet right-buttons"},X={class:"col-3 pull-right desktop"},Y={class:"row list-controls"},Z=Object(a["h"])("i",{class:"icon fa fa-utensils"},null,-1),tt=Object(a["h"])("i",{class:"icon fa fa-random"},null,-1),et=Object(a["h"])("i",{class:"icon fa fa-redo"},null,-1),nt={class:"row volume-container"},at={class:"col-2"},st=Object(a["h"])("i",{class:"icon fa fa-volume-up"},null,-1),ct={class:"col-10"};Object(a["s"])();var ot=i((function(t,e,n,s,c,o){var l,u,i,ot,lt,ut=Object(a["z"])("Slider");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",{class:["extension fade-in",{hidden:!c.expanded}]},[Object(a["h"])("div",r,[b,Object(a["h"])("div",d,[Object(a["h"])("div",p,[c.buttons_.previous?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:e[1]||(e[1]=function(e){return t.$emit("previous")}),title:"Play previous track"},[j])):Object(a["f"])("",!0),c.buttons_.stop&&"stop"!==n.status.state?(Object(a["r"])(),Object(a["e"])("button",{key:1,onClick:e[2]||(e[2]=function(e){return t.$emit("stop")}),title:"Stop playback"},[O])):Object(a["f"])("",!0),c.buttons_.next?(Object(a["r"])(),Object(a["e"])("button",{key:2,onClick:e[3]||(e[3]=function(e){return t.$emit("next")}),title:"Play next track"},[v])):Object(a["f"])("",!0)])]),f]),Object(a["h"])("div",m,[Object(a["h"])("div",h,[Object(a["h"])("div",k,[Object(a["h"])("button",{disabled:null==n.status.muted,onClick:e[4]||(e[4]=function(e){return t.$emit(n.status.muted?"unmute":"mute")})},[y],8,["disabled"])]),Object(a["h"])("div",g,[Object(a["h"])(ut,{value:n.status.volume,range:n.volumeRange,disabled:null==n.status.volume,onMouseup:e[5]||(e[5]=function(e){return t.$emit("set-volume",e.target.value)})},null,8,["value","range","disabled"])])]),Object(a["h"])("div",C,[c.buttons_.consume?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:e[6]||(e[6]=function(e){return t.$emit("consume",!n.status.consume)}),class:{enabled:n.status.consume},title:"Toggle consume mode"},[x],2)):Object(a["f"])("",!0),c.buttons_.random?(Object(a["r"])(),Object(a["e"])("button",{key:1,onClick:e[7]||(e[7]=function(e){return t.$emit("random",!n.status.random)}),class:{enabled:n.status.random},title:"Toggle shuffle"},[$],2)):Object(a["f"])("",!0),c.buttons_.repeat?(Object(a["r"])(),Object(a["e"])("button",{key:2,onClick:e[8]||(e[8]=function(e){return t.$emit("repeat",!n.status.repeat)}),class:{enabled:n.status.repeat},title:"Toggle repeat"},[w],2)):Object(a["f"])("",!0)])]),Object(a["h"])("div",T,[Object(a["h"])("div",S,[Object(a["h"])("span",{class:"elapsed-time",textContent:Object(a["C"])(null==c.elapsed||"play"!==n.status.state&&"pause"!==n.status.state?"-:--":t.convertTime(c.elapsed))},null,8,["textContent"])]),Object(a["h"])("div",_,[Object(a["h"])(ut,{value:c.elapsed,range:[0,o.duration],disabled:!o.duration||"stop"===n.status.state,onMouseup:e[9]||(e[9]=function(e){return t.$emit("seek",e.target.value)})},null,8,["value","range","disabled"])]),Object(a["h"])("div",P,[Object(a["h"])("span",{class:"total-time",textContent:Object(a["C"])(o.duration&&"stop"!==n.status.state?t.convertTime(o.duration):"-:--")},null,8,["textContent"])])])],2),Object(a["h"])("div",I,[Object(a["h"])("div",R,[Object(a["h"])("button",{onClick:e[10]||(e[10]=function(e){return t.$emit("play"===n.status.state?"pause":"play")}),title:"play"===n.status.state?"Pause":"Play"},["play"===n.status.state?(Object(a["r"])(),Object(a["e"])("i",M)):(Object(a["r"])(),Object(a["e"])("i",N))],8,["title"])]),Object(a["h"])("div",J,[n.track&&"stop"!==(null===(l=n.status)||void 0===l?void 0:l.state)?(Object(a["r"])(),Object(a["e"])("div",z,["play"===n.status.state||"pause"===n.status.state?(Object(a["r"])(),Object(a["e"])("div",K,[n.track.album?(Object(a["r"])(),Object(a["e"])("a",{key:0,href:t.$route.fullPath,textContent:Object(a["C"])((null===(u=n.track.title)||void 0===u?void 0:u.length)?n.track.title:"[No Title]"),onClick:e[11]||(e[11]=Object(a["J"])((function(e){return t.$emit("search",{artist:n.track.artist,album:n.track.album})}),["prevent"]))},null,8,["href","textContent"])):n.track.url?(Object(a["r"])(),Object(a["e"])("a",{key:1,href:n.track.url,textContent:Object(a["C"])((null===(i=n.track.title)||void 0===i?void 0:i.length)?n.track.title:"[No Title]")},null,8,["href","textContent"])):(Object(a["r"])(),Object(a["e"])("span",{key:2,textContent:Object(a["C"])((null===(ot=n.track.title)||void 0===ot?void 0:ot.length)?n.track.title:"[No Title]")},null,8,["textContent"]))])):Object(a["f"])("",!0),!(null===(lt=n.track.artist)||void 0===lt?void 0:lt.length)||"play"!==n.status.state&&"pause"!==n.status.state?Object(a["f"])("",!0):(Object(a["r"])(),Object(a["e"])("div",V,[Object(a["h"])("a",{href:t.$route.fullPath,textContent:Object(a["C"])(n.track.artist),onClick:e[12]||(e[12]=Object(a["J"])((function(e){return t.$emit("search",{artist:n.track.artist})}),["prevent"]))},null,8,["href","textContent"])]))])):Object(a["f"])("",!0)]),Object(a["h"])("div",q,[Object(a["h"])("div",A,[c.buttons_.previous?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:e[13]||(e[13]=function(e){return t.$emit("previous")}),title:"Play previous track"},[D])):Object(a["f"])("",!0),Object(a["h"])("button",{onClick:e[14]||(e[14]=function(e){return t.$emit("play"===n.status.state?"pause":"play")}),title:"play"===n.status.state?"Pause":"Play"},["play"===n.status.state?(Object(a["r"])(),Object(a["e"])("i",E)):(Object(a["r"])(),Object(a["e"])("i",H))],8,["title"]),c.buttons_.stop&&"stop"!==n.status.state?(Object(a["r"])(),Object(a["e"])("button",{key:1,onClick:e[15]||(e[15]=function(e){return t.$emit("stop")}),title:"Stop playback"},[B])):Object(a["f"])("",!0),c.buttons_.next?(Object(a["r"])(),Object(a["e"])("button",{key:2,onClick:e[16]||(e[16]=function(e){return t.$emit("next")}),title:"Play next track"},[F])):Object(a["f"])("",!0)]),Object(a["h"])("div",G,[Object(a["h"])("div",L,[Object(a["h"])("span",{class:"elapsed-time",textContent:Object(a["C"])(null==c.elapsed||"play"!==n.status.state&&"pause"!==n.status.state?"-:--":t.convertTime(c.elapsed))},null,8,["textContent"])]),Object(a["h"])("div",Q,[Object(a["h"])(ut,{value:c.elapsed,range:[0,o.duration],disabled:!o.duration||"stop"===n.status.state,onMouseup:e[17]||(e[17]=function(e){return t.$emit("seek",e.target.value)})},null,8,["value","range","disabled"])]),Object(a["h"])("div",U,[Object(a["h"])("span",{class:"total-time",textContent:Object(a["C"])(o.duration&&"stop"!==n.status.state?t.convertTime(o.duration):"-:--")},null,8,["textContent"])])])]),Object(a["h"])("div",W,[Object(a["h"])("button",{onClick:e[18]||(e[18]=function(t){return c.expanded=!c.expanded}),title:c.expanded?"Show more controls":"Hide extra controls"},[Object(a["h"])("i",{class:["fas",["fa-chevron-".concat(c.expanded?"down":"up")]]},null,2)],8,["title"])]),Object(a["h"])("div",X,[Object(a["h"])("div",Y,[c.buttons_.consume?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:e[19]||(e[19]=function(e){return t.$emit("consume")}),class:{enabled:n.status.consume},title:"Toggle consume mode"},[Z],2)):Object(a["f"])("",!0),c.buttons_.random?(Object(a["r"])(),Object(a["e"])("button",{key:1,onClick:e[20]||(e[20]=function(e){return t.$emit("random")}),class:{enabled:n.status.random},title:"Toggle shuffle"},[tt],2)):Object(a["f"])("",!0),c.buttons_.repeat?(Object(a["r"])(),Object(a["e"])("button",{key:2,onClick:e[21]||(e[21]=function(e){return t.$emit("repeat")}),class:{enabled:n.status.repeat},title:"Toggle repeat"},[et],2)):Object(a["f"])("",!0)]),Object(a["h"])("div",nt,[Object(a["h"])("div",at,[Object(a["h"])("button",{disabled:null==n.status.muted,onClick:e[22]||(e[22]=function(e){return t.$emit(n.status.muted?"unmute":"mute")})},[st],8,["disabled"])]),Object(a["h"])("div",ct,[Object(a["h"])(ut,{value:n.status.volume,range:n.volumeRange,disabled:null==n.status.volume,onMouseup:e[23]||(e[23]=function(e){return t.$emit("set-volume",e.target.value)})},null,8,["value","range","disabled"])])])])])],64)})),lt=(n("b64b"),n("3e54")),ut=n("18dc"),it=n("8285"),rt={name:"Controls",components:{Slider:it["a"]},mixins:[lt["a"],ut["a"]],emits:["search","previous","next","play","pause","stop","seek","consume","random","repeat","set-volume","mute","unmute"],props:{track:{type:Object},status:{type:Object,default:function(){}},buttons:{type:Object,default:function(){return{previous:!0,next:!0,stop:!0,consume:!0,random:!0,repeat:!0}}},volumeRange:{type:Array,default:function(){return[0,100]}}},data:function(){var t,e,n,a=(null===(t=Object.keys(this.buttons))||void 0===t?void 0:t.length)?this.buttons:{previous:!0,next:!0,stop:!0,consume:!0,random:!0,repeat:!0};return{expanded:!1,lastSync:0,elapsed:(null===(e=this.status)||void 0===e?void 0:e.elapsed)||(null===(n=this.status)||void 0===n?void 0:n.position),buttons_:a}},computed:{duration:function(){var t,e;return null!=(null===(t=this.status)||void 0===t?void 0:t.duration)?this.status.duration:null===(e=this.track)||void 0===e?void 0:e.duration}},methods:{getTime:function(){return(new Date).getTime()/1e3}},mounted:function(){var t=this,e=this;this.lastSync=this.getTime(),this.$watch((function(){return t.track}),(function(n){var a;n&&"play"===(null===(a=e.status)||void 0===a?void 0:a.state)||(e.lastSync=t.getTime())})),this.$watch((function(){return t.status}),(function(){e.lastSync=t.getTime()})),setInterval((function(){var n,a,s,c;"stop"!==(null===(n=e.status)||void 0===n?void 0:n.state)&&(e.elapsed=(null===(a=e.status)||void 0===a?void 0:a.elapsed)||(null===(s=e.status)||void 0===s?void 0:s.position)||0,"play"===(null===(c=e.status)||void 0===c?void 0:c.state)&&(e.elapsed+=Math.round(t.getTime()-e.lastSync)))}),1e3)}};n("670a");rt.render=ot,rt.__scopeId="data-v-ea63d9a0";var bt=rt,dt={name:"View",components:{Controls:bt},emits:["play","pause","stop","next","previous","set-volume","seek","consume","random","repeat","search"],props:{pluginName:{type:String,required:!0},status:{type:Object,default:function(){}},track:{type:Object},buttons:{type:Object}}};n("e192");dt.render=u,dt.__scopeId="data-v-70d7a7df";e["a"]=dt},"841c":function(t,e,n){"use strict";var a=n("d784"),s=n("825a"),c=n("1d80"),o=n("129f"),l=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var c=s(t),u=String(this),i=c.lastIndex;o(i,0)||(c.lastIndex=0);var r=l(c,u);return o(c.lastIndex,i)||(c.lastIndex=i),null===r?-1:r.index}]}))},c4cd:function(t,e,n){},e192:function(t,e,n){"use strict";n("c4cd")}}]);
//# sourceMappingURL=chunk-cb418146.7a824439.js.map