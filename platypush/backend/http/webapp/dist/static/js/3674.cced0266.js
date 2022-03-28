"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[3674],{3674:function(t,i,e){e.r(i),e.d(i,{default:function(){return m}});var s=e(6252);function n(t,i,e,n,o,r){const a=(0,s.up)("Loading"),g=(0,s.up)("LightPlugin");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o.loading?((0,s.wg)(),(0,s.j4)(a,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(g,{"plugin-name":"light.hue",config:e.config,lights:t.lights,groups:t.groups,scenes:t.scenes,animations:t.animations,"initial-group":r.initialGroup,"loading-groups":t.loadingGroups,"color-converter":o.colorConverter,onGroupToggle:r.toggleGroup,onLightChanged:r.onLightChanged,onLightToggle:r.toggleLight,onSetLight:r.setLight,onSetGroup:r.setGroup,onSelectScene:r.setScene,onStartAnimation:r.startAnimation,onStopAnimation:r.stopAnimation,onRefresh:i[0]||(i[0]=t=>r.refresh(!0))},null,8,["config","lights","groups","scenes","animations","initial-group","loading-groups","color-converter","onGroupToggle","onLightChanged","onLightToggle","onSetLight","onSetGroup","onSelectScene","onStartAnimation","onStopAnimation"])],64)}var o=e(1845),r={name:"Utils",data(){return{lights:{},groups:{},scenes:{},animations:{},loadingLights:{},loadingGroups:{}}},computed:{groupsByName(){return this.groups?Object.entries(this.groups).reduce(((t,[i,e])=>(t[e.name||i]={...e,id:i},t)),{}):{}}},methods:{_getGroups(t){const i=t.filter((t=>null!=t));if(!i.length)return Object.values(this.groups);const e=this;return i.map((t=>t instanceof Object?t:e.groups[t]))},_getLights(t){const i=t.filter((t=>null!=t));if(!i.length)return Object.values(this.lights);const e=this;return i.map((t=>t instanceof Object?t:e.lights[t]))},setGroupsLoading(t){const i=this;this._getGroups(t).forEach((t=>{i.loadingGroups[t.id]=!0,t.lights&&i.setLightsLoading(t.lights)}))},unsetGroupsLoading(t){const i=this;this._getGroups(t).forEach((t=>{t.id in i.loadingGroups&&delete i.loadingGroups[t.id],t.lights&&i.setLightsLoading(t.lights)}))},setLightsLoading(t){const i=this;this._getLights(t).forEach((t=>{i.loadingLights[t.id]=!0}))},unsetLightsLoading(t){const i=this;this._getLights(t).forEach((t=>{t.id in i.loadingLights&&delete i.loadingLights[t.id]}))},async groupAction(t,i,...e){this.setGroupsLoading(e);try{return await this.request(t,i)}finally{this.unsetGroupsLoading(e)}},async lightAction(t,i,...e){this.setLightsLoading(e);try{return await this.request(t,i)}finally{this.unsetLightsLoading(e)}}}};const a=r;var g=a,h=e(4212),u=e(2628),l=e(1232),c={name:"LightHue",components:{Loading:l.Z,LightPlugin:o["default"]},mixins:[u.Z,g],props:{config:{type:Object,default:()=>{}}},data(){return{loading:!1,colorConverter:new h.N({hue:[0,65535],sat:[0,255],bri:[0,255],ct:[150,500]})}},computed:{initialGroup(){if(!this.config.groups||!Object.keys(this.config.groups).length)return null;const t=this.config.groups[0];return t in this.groups?this.groups[t].id:t in this.groupsByName?this.groupsByName[t].id:null}},methods:{async getLights(){return await this.request("light.hue.get_lights")},async getGroups(){return Object.entries(await this.request("light.hue.get_groups")).filter((t=>!t[1].recycle&&"room"===t[1].type.toLowerCase())).reduce(((t,[i,e])=>(t[i]=e,t)),{})},async getScenes(){return Object.entries(await this.request("light.hue.get_scenes")).filter((t=>!t[1].recycle&&"lightscene"===t[1].type.toLowerCase())).reduce(((t,[i,e])=>(t[i]=e,t)),{})},async getAnimations(){return await this.request("light.hue.get_animations")},async toggleGroup(t){let i=Object.values(this.groups),e={groups:i.map((t=>t.name))};null!=t&&(i=[t],e={groups:[t.name]}),await this.groupAction("light.hue.toggle",e,...i),await this.refresh(!0)},async toggleLight(t){const i=[t],e=null!=t?{lights:[t.name]}:{};await this.lightAction("light.hue.toggle",e,...i),await this.refresh(!0)},async setLight(t){let i=Object.keys(this.lights);const e=t.light,s={};e&&(s.lights=[e.name],i=[e]);const n=this,o=Object.entries(t.value).map((([t,e])=>{let o=null;switch(s.value=e,t){case"brightness":o="light.hue.bri";break;case"temperature":o="light.hue.ct";break;case"xy":o="light.hue.xy";break}if(o)return n.lightAction(o,s,...i)})).filter((t=>null!=t));await Promise.all(o),await this.refresh(!0)},async setGroup(t){if(!t.groupId)return this.setLight(t);const i=this.groups[t.groupId],e={groups:[i.name]},s=this,n=Object.entries(t.value).map((([t,n])=>{let o=null;switch(e.value=n,t){case"brightness":o="light.hue.bri";break;case"temperature":o="light.hue.ct";break;case"xy":o="light.hue.xy";break}if(o)return s.groupAction(o,e,i)})).filter((t=>null!=t));await Promise.all(n),await this.refresh(!0)},async setScene(t){await this.groupAction("light.hue.scene",{name:this.scenes[t.sceneId].name,groups:[this.groups[t.groupId].name]},this.groups[t.groupId]),await this.refresh(!0)},async refresh(t){t||(this.loading=!0);try{[this.lights,this.groups,this.scenes,this.animations]=await Promise.all([this.getLights(),this.getGroups(),this.getScenes(),this.getAnimations()])}finally{t||(this.loading=!1)}},async startAnimation(t){await this.request("light.hue.animate",{lights:t.lights,...t.animation}),await this.refresh(!0)},async stopAnimation(){await this.request("light.hue.stop_animation"),await this.refresh(!0)},onLightChanged(t){this.lights[t.id].state={...this.lights[t.id].state,...t.state}}},mounted(){this.refresh()}},p=e(3744);const d=(0,p.Z)(c,[["render",n]]);var m=d}}]);
//# sourceMappingURL=3674.cced0266.js.map