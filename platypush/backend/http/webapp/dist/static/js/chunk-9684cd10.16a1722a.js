(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9684cd10"],{"0cc1":function(e,t,n){"use strict";n("b0c0"),n("b64b"),n("ac1f"),n("1276");var r=n("7a23"),s=Object(r["K"])("data-v-7eb04934");Object(r["u"])("data-v-7eb04934");var a={key:1,class:"torrent-transfers fade-in"},c={key:0,class:"no-content"},o={class:"col-8 left side"},l={class:"col-2 right side"},i={class:"col-2 right side"},u={key:0,class:"modal-body torrent-info"},d={key:0,class:"row"},b=Object(r["h"])("div",{class:"attr"},"Name",-1),f={key:1,class:"row"},h=Object(r["h"])("div",{class:"attr"},"State",-1),j={class:"row"},v=Object(r["h"])("div",{class:"attr"},"Progress",-1),O={class:"row"},m=Object(r["h"])("div",{class:"attr"},"DL rate",-1),p={class:"row"},C=Object(r["h"])("div",{class:"attr"},"UL rate",-1),x={class:"row"},w=Object(r["h"])("div",{class:"attr"},"Size",-1),g={key:2,class:"row"},y=Object(r["h"])("div",{class:"attr"},"Remaining",-1),I={class:"row"},k=Object(r["h"])("div",{class:"attr"},"URL",-1),_={class:"value nowrap"},T={class:"row"},R=Object(r["h"])("div",{class:"attr"},"Peers",-1),S={key:3,class:"row"},D=Object(r["h"])("div",{class:"attr"},"Started",-1),E={key:4,class:"row"},z=Object(r["h"])("div",{class:"attr"},"Finished",-1),N={key:5,class:"row"},P=Object(r["h"])("div",{class:"attr"},"Save path",-1),q={key:0,class:"modal-body torrent-files"},F={class:"col-1 icon"},L={key:1,class:"fa fa-file"};Object(r["s"])();var M=s((function(e,t,n,M,U,V){var $=Object(r["z"])("Loading"),J=Object(r["z"])("DropdownItem"),A=Object(r["z"])("Dropdown"),B=Object(r["z"])("Modal");return U.loading?(Object(r["r"])(),Object(r["e"])($,{key:0})):(Object(r["r"])(),Object(r["e"])("div",a,[Object.keys(U.transfers).length?Object(r["f"])("",!0):(Object(r["r"])(),Object(r["e"])("div",c,"No torrent transfers in progress")),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(U.transfers,(function(n,a){return Object(r["r"])(),Object(r["e"])("div",{class:["row item",{selected:U.selectedItem===a}],key:a,onClick:function(e){return U.selectedItem=a}},[Object(r["h"])("div",o,[Object(r["h"])("i",{class:["icon fa",{"fa-check":null!=n.finish_date,"fa-play":!n.finish_date&&"downloading"===n.state,"fa-pause":!n.finish_date&&"paused"===n.state,"fa-stop":!n.finish_date&&"stopped"===n.state}]},null,2),Object(r["h"])("div",{class:"title",textContent:Object(r["C"])(n.name||n.hash||n.url)},null,8,["textContent"])]),Object(r["h"])("div",l,[Object(r["h"])("span",{textContent:Object(r["C"])("".concat(n.progress,"%"))},null,8,["textContent"])]),Object(r["h"])("div",i,[Object(r["h"])(A,{title:"Actions","icon-class":"fa fa-ellipsis-h",onClick:function(e){return U.selectedItem=a}},{default:s((function(){return["downloading"===n.state?(Object(r["r"])(),Object(r["e"])(J,{key:0,"icon-class":"fa fa-pause",text:"Pause transfer",onClick:function(e){return V.pause(V.torrentId(n))}},null,8,["onClick"])):Object(r["f"])("",!0),"paused"===n.state?(Object(r["r"])(),Object(r["e"])(J,{key:1,"icon-class":"fa fa-play",text:"Resume transfer",onClick:function(e){return V.resume(V.torrentId(n))}},null,8,["onClick"])):Object(r["f"])("",!0),Object(r["h"])(J,{"icon-class":"fa fa-trash",text:"Remove transfer",onClick:function(e){return V.remove(V.torrentId(n))}},null,8,["onClick"]),Object(r["h"])(J,{"icon-class":"fa fa-folder",text:"View files",onClick:t[1]||(t[1]=function(t){return e.$refs.torrentFiles.isVisible=!0})}),Object(r["h"])(J,{"icon-class":"fa fa-info",text:"Torrent info",onClick:t[2]||(t[2]=function(t){return e.$refs.torrentInfo.isVisible=!0})})]})),_:2},1032,["onClick"])])],10,["onClick"])})),128)),Object(r["h"])(B,{ref:"torrentInfo",title:"Torrent info",width:"80%"},{default:s((function(){return[null!=U.selectedItem&&U.transfers[U.selectedItem]?(Object(r["r"])(),Object(r["e"])("div",u,[U.transfers[U.selectedItem].name?(Object(r["r"])(),Object(r["e"])("div",d,[b,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(U.transfers[U.selectedItem].name)},null,8,["textContent"])])):Object(r["f"])("",!0),U.transfers[U.selectedItem].state?(Object(r["r"])(),Object(r["e"])("div",f,[h,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(U.transfers[U.selectedItem].state)},null,8,["textContent"])])):Object(r["f"])("",!0),Object(r["h"])("div",j,[v,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])("".concat(U.transfers[U.selectedItem].progress||0,"%"))},null,8,["textContent"])]),Object(r["h"])("div",O,[m,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])("".concat(e.convertSize(U.transfers[U.selectedItem].download_rate||0),"/s"))},null,8,["textContent"])]),Object(r["h"])("div",p,[C,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])("".concat(e.convertSize(U.transfers[U.selectedItem].upload_rate||0),"/s"))},null,8,["textContent"])]),Object(r["h"])("div",x,[w,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(e.convertSize(U.transfers[U.selectedItem].size||0))},null,8,["textContent"])]),U.transfers[U.selectedItem].remaining_bytes?(Object(r["r"])(),Object(r["e"])("div",g,[y,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(e.convertSize(U.transfers[U.selectedItem].remaining_bytes))},null,8,["textContent"])])):Object(r["f"])("",!0),Object(r["h"])("div",I,[k,Object(r["h"])("div",_,[Object(r["h"])("a",{href:U.transfers[U.selectedItem].url,target:"_blank",textContent:Object(r["C"])(U.transfers[U.selectedItem].url)},null,8,["href","textContent"])])]),Object(r["h"])("div",T,[R,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(U.transfers[U.selectedItem].peers||0)},null,8,["textContent"])]),U.transfers[U.selectedItem].start_date?(Object(r["r"])(),Object(r["e"])("div",S,[D,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(e.formatDateTime(U.transfers[U.selectedItem].start_date))},null,8,["textContent"])])):Object(r["f"])("",!0),U.transfers[U.selectedItem].finish_date?(Object(r["r"])(),Object(r["e"])("div",E,[z,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(e.formatDateTime(U.transfers[U.selectedItem].finish_date))},null,8,["textContent"])])):Object(r["f"])("",!0),U.transfers[U.selectedItem].save_path?(Object(r["r"])(),Object(r["e"])("div",N,[P,Object(r["h"])("div",{class:"value",textContent:Object(r["C"])(U.transfers[U.selectedItem].save_path)},null,8,["textContent"])])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)]})),_:1},512),Object(r["h"])(B,{ref:"torrentFiles",title:"Torrent files",width:"80%"},{default:s((function(){return[null!=U.selectedItem&&U.transfers[U.selectedItem]?(Object(r["r"])(),Object(r["e"])("div",q,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(V.relativeFiles,(function(t,a){return Object(r["r"])(),Object(r["e"])("div",{class:"row",key:t},[Object(r["h"])("div",F,[n.isMedia&&e.mediaExtensions.has(t.split(".").pop())?(Object(r["r"])(),Object(r["e"])(A,{key:0},{default:s((function(){return[Object(r["h"])(J,{"icon-class":"fa fa-play",text:"Play",onClick:function(t){return e.$emit("play",{url:"file://".concat(U.transfers[U.selectedItem].files[a]),type:"file"})}},null,8,["onClick"])]})),_:1})):(Object(r["r"])(),Object(r["e"])("i",L))]),Object(r["h"])("div",{class:"col-11 name",textContent:Object(r["C"])(t)},null,8,["textContent"])])})),128))])):Object(r["f"])("",!0)]})),_:1},512)]))})),U=(n("d81d"),n("13d5"),n("d3b7"),n("07ac"),n("ddb0"),n("96cf"),n("1da1")),V=n("3a5e"),$=n("3e54"),J=n("18dc"),A=n("714b"),B=n("ab0f"),K=n("524a"),Q={name:"View",emits:["play","play-with-captions"],components:{Dropdown:B["a"],DropdownItem:K["a"],Loading:V["a"],Modal:A["a"]},mixins:[$["a"],J["a"]],props:{pluginName:{type:String,required:!0},isMedia:{type:Boolean,default:!1}},data:function(){return{loading:!1,transfers:{},selectedItem:null}},computed:{relativeFiles:function(){var e,t;return null!=this.selectedItem&&(null===(e=this.transfers[this.selectedItem])||void 0===e||null===(t=e.files)||void 0===t?void 0:t.length)?this.transfers[this.selectedItem].files.map((function(e){return e.split("/").pop()})):[]}},methods:{torrentId:function(e){return(null===e||void 0===e?void 0:e.hash)&&e.hash.length?e.hash:e.url},refresh:function(){var e=this;return Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.t0=Object,t.next=5,e.request("".concat(e.pluginName,".status"));case 5:if(t.t1=t.sent,t.t1){t.next=8;break}t.t1={};case 8:t.t2=t.t1,e.transfers=t.t0.values.call(t.t0,t.t2).reduce((function(t,n){return t[e.torrentId(n)]=n,t}),{});case 10:return t.prev=10,e.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,,10,13]])})))()},pause:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("".concat(t.pluginName,".pause"),{torrent:e});case 2:return n.next=4,t.refresh();case 4:case"end":return n.stop()}}),n)})))()},resume:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("".concat(t.pluginName,".resume"),{torrent:e});case 2:return n.next=4,t.refresh();case 4:case"end":return n.stop()}}),n)})))()},remove:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("".concat(t.pluginName,".remove"),{torrent:e});case 2:return n.next=4,t.refresh();case 4:case"end":return n.stop()}}),n)})))()},onTorrentUpdate:function(e){this.transfers[this.torrentId(e)]=e},onTorrentRemove:function(e){var t=this.torrentId(e);t in this.transfers&&delete this.transfers[t]}},mounted:function(){this.refresh(),this.subscribe(this.onTorrentUpdate,"on-torrent-update","platypush.message.event.torrent.TorrentQueuedEvent","platypush.message.event.torrent.TorrentDownloadedMetadataEvent","platypush.message.event.torrent.TorrentDownloadStartEvent","platypush.message.event.torrent.TorrentDownloadProgressEvent","platypush.message.event.torrent.TorrentResumedEvent","platypush.message.event.torrent.TorrentPausedEvent","platypush.message.event.torrent.TorrentSeedingStartEvent","platypush.message.event.torrent.TorrentStateChangeEvent","platypush.message.event.torrent.TorrentDownloadStopEvent","platypush.message.event.torrent.TorrentDownloadCompletedEvent"),this.subscribe(this.onTorrentRemove,"on-torrent-remove","platypush.message.event.torrent.TorrentRemovedEvent")},destroy:function(){this.unsubscribe("on-torrent-update"),this.unsubscribe("on-torrent-remove")}};n("82ea");Q.render=M,Q.__scopeId="data-v-7eb04934";t["a"]=Q},"69be":function(e,t,n){},"82ea":function(e,t,n){"use strict";n("69be")}}]);
//# sourceMappingURL=chunk-9684cd10.16a1722a.js.map