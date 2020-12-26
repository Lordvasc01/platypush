(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2091df"],{a84f:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function i(e,t,n,i,u,a){var s=Object(r["z"])("Loading"),o=Object(r["z"])("LightPlugin");return Object(r["r"])(),Object(r["e"])(r["a"],null,[u.loading?(Object(r["r"])(),Object(r["e"])(s,{key:0})):Object(r["f"])("",!0),Object(r["h"])(o,{"plugin-name":"light.hue",config:n.config,lights:e.lights,groups:e.groups,scenes:e.scenes,animations:e.animations,"initial-group":a.initialGroup,"loading-groups":e.loadingGroups,"color-converter":u.colorConverter,onGroupToggle:a.toggleGroup,onLightChanged:a.onLightChanged,onLightToggle:a.toggleLight,onSetLight:a.setLight,onSetGroup:a.setGroup,onSelectScene:a.setScene,onStartAnimation:a.startAnimation,onStopAnimation:a.stopAnimation,onRefresh:t[1]||(t[1]=function(e){return a.refresh(!0)})},null,8,["config","lights","groups","scenes","animations","initial-group","loading-groups","color-converter","onGroupToggle","onLightChanged","onLightToggle","onSetLight","onSetGroup","onSelectScene","onStartAnimation","onStopAnimation"])],64)}n("99af"),n("4de4"),n("d81d"),n("13d5"),n("b0c0"),n("4fad"),n("b64b"),n("d3b7"),n("07ac"),n("3ca3"),n("ddb0");var u=n("5530"),a=n("2909"),s=n("3835"),o=(n("96cf"),n("1da1")),c=n("cf99"),g=(n("4160"),n("159b"),{name:"Utils",data:function(){return{lights:{},groups:{},scenes:{},animations:{},loadingLights:{},loadingGroups:{}}},computed:{groupsByName:function(){return this.groups?Object.entries(this.groups).reduce((function(e,t){var n=Object(s["a"])(t,2),r=n[0],i=n[1];return e[i.name||r]=Object(u["a"])(Object(u["a"])({},i),{},{id:r}),e}),{}):{}}},methods:{_getGroups:function(e){var t=e.filter((function(e){return null!=e}));if(!t.length)return Object.values(this.groups);var n=this;return t.map((function(e){return e instanceof Object?e:n.groups[e]}))},_getLights:function(e){var t=e.filter((function(e){return null!=e}));if(!t.length)return Object.values(this.lights);var n=this;return t.map((function(e){return e instanceof Object?e:n.lights[e]}))},setGroupsLoading:function(e){var t=this;this._getGroups(e).forEach((function(e){t.loadingGroups[e.id]=!0,e.lights&&t.setLightsLoading(e.lights)}))},unsetGroupsLoading:function(e){var t=this;this._getGroups(e).forEach((function(e){e.id in t.loadingGroups&&delete t.loadingGroups[e.id],e.lights&&t.setLightsLoading(e.lights)}))},setLightsLoading:function(e){var t=this;this._getLights(e).forEach((function(e){t.loadingLights[e.id]=!0}))},unsetLightsLoading:function(e){var t=this;this._getLights(e).forEach((function(e){e.id in t.loadingLights&&delete t.loadingLights[e.id]}))},groupAction:function(e,t){var n=arguments,r=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var u,a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(u=n.length,a=new Array(u>2?u-2:0),s=2;s<u;s++)a[s-2]=n[s];return r.setGroupsLoading(a),i.prev=2,i.next=5,r.request(e,t);case 5:return i.abrupt("return",i.sent);case 6:return i.prev=6,r.unsetGroupsLoading(a),i.finish(6);case 9:case"end":return i.stop()}}),i,null,[[2,,6,9]])})))()},lightAction:function(e,t){var n=arguments,r=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var u,a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(u=n.length,a=new Array(u>2?u-2:0),s=2;s<u;s++)a[s-2]=n[s];return r.setLightsLoading(a),i.prev=2,i.next=5,r.request(e,t);case 5:return i.abrupt("return",i.sent);case 6:return i.prev=6,r.unsetLightsLoading(a),i.finish(6);case 9:case"end":return i.stop()}}),i,null,[[2,,6,9]])})))()}}}),h=g,l=n("1804"),p=n("3e54"),f=n("3a5e"),m={name:"LightHue",components:{Loading:f["a"],LightPlugin:c["default"]},mixins:[p["a"],h],props:{config:{type:Object,default:function(){}}},data:function(){return{loading:!1,colorConverter:new l["a"]({hue:[0,65535],sat:[0,255],bri:[0,255],ct:[150,500]})}},computed:{initialGroup:function(){if(!this.config.groups||!Object.keys(this.config.groups).length)return null;var e=this.config.groups[0];return e in this.groups?this.groups[e].id:e in this.groupsByName?this.groupsByName[e].id:null}},methods:{getLights:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.request("light.hue.get_lights");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getGroups:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.request("light.hue.get_groups");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.entries.call(t.t0,t.t1).filter((function(e){return!e[1].recycle&&"room"===e[1].type.toLowerCase()})).reduce((function(e,t){var n=Object(s["a"])(t,2),r=n[0],i=n[1];return e[r]=i,e}),{}));case 5:case"end":return t.stop()}}),t)})))()},getScenes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.request("light.hue.get_scenes");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.entries.call(t.t0,t.t1).filter((function(e){return!e[1].recycle&&"lightscene"===e[1].type.toLowerCase()})).reduce((function(e,t){var n=Object(s["a"])(t,2),r=n[0],i=n[1];return e[r]=i,e}),{}));case 5:case"end":return t.stop()}}),t)})))()},getAnimations:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.request("light.hue.get_animations");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},toggleGroup:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=Object.values(t.groups),i={groups:r.map((function(e){return e.name}))},null!=e&&(r=[e],i={groups:[e.name]}),n.next=5,t.groupAction.apply(t,["light.hue.toggle",i].concat(Object(a["a"])(r)));case 5:return n.next=7,t.refresh(!0);case 7:case"end":return n.stop()}}),n)})))()},toggleLight:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[e],i=null!=e?{lights:[e.name]}:{},n.next=4,t.lightAction.apply(t,["light.hue.toggle",i].concat(r));case 4:return n.next=6,t.refresh(!0);case 6:case"end":return n.stop()}}),n)})))()},setLight:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i,u,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=Object.keys(t.lights),i=e.light,u={},i&&(u.lights=[i.name],r=[i]),o=t,c=Object.entries(e.value).map((function(e){var t=Object(s["a"])(e,2),n=t[0],i=t[1],c=null;switch(u.value=i,n){case"brightness":c="light.hue.bri";break;case"temperature":c="light.hue.ct";break;case"xy":c="light.hue.xy";break}if(c)return o.lightAction.apply(o,[c,u].concat(Object(a["a"])(r)))})).filter((function(e){return null!=e})),n.next=8,Promise.all(c);case 8:return n.next=10,t.refresh(!0);case 10:case"end":return n.stop()}}),n)})))()},setGroup:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i,u,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.groupId){n.next=2;break}return n.abrupt("return",t.setLight(e));case 2:return r=t.groups[e.groupId],i={groups:[r.name]},u=t,a=Object.entries(e.value).map((function(e){var t=Object(s["a"])(e,2),n=t[0],a=t[1],o=null;switch(i.value=a,n){case"brightness":o="light.hue.bri";break;case"temperature":o="light.hue.ct";break;case"xy":o="light.hue.xy";break}if(o)return u.groupAction(o,i,r)})).filter((function(e){return null!=e})),n.next=8,Promise.all(a);case 8:return n.next=10,t.refresh(!0);case 10:case"end":return n.stop()}}),n)})))()},setScene:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.groupAction("light.hue.scene",{name:t.scenes[e.sceneId].name,groups:[t.groups[e.groupId].name]},t.groups[e.groupId]);case 2:return n.next=4,t.refresh(!0);case 4:case"end":return n.stop()}}),n)})))()},refresh:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e||(t.loading=!0),n.prev=1,n.next=4,Promise.all([t.getLights(),t.getGroups(),t.getScenes(),t.getAnimations()]);case 4:r=n.sent,i=Object(s["a"])(r,4),t.lights=i[0],t.groups=i[1],t.scenes=i[2],t.animations=i[3];case 10:return n.prev=10,e||(t.loading=!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,,10,13]])})))()},startAnimation:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("light.hue.animate",Object(u["a"])({lights:e.lights},e.animation));case 2:return n.next=4,t.refresh(!0);case 4:case"end":return n.stop()}}),n)})))()},stopAnimation:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.request("light.hue.stop_animation");case 2:return t.next=4,e.refresh(!0);case 4:case"end":return t.stop()}}),t)})))()},onLightChanged:function(e){this.lights[e.id].state=Object(u["a"])(Object(u["a"])({},this.lights[e.id].state),e.state)}},mounted:function(){this.refresh()}};m.render=i;t["default"]=m}}]);
//# sourceMappingURL=chunk-2d2091df.b017f6d4.js.map