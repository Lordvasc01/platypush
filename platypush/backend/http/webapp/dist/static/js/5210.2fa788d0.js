"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[5210],{3567:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(6252),s=n(3577);const o=e=>((0,i.dD)("data-v-8fae7678"),e=e(),(0,i.Cn)(),e),a=["checked"],l=o((()=>(0,i._)("div",{class:"switch"},[(0,i._)("div",{class:"dot"})],-1))),c={class:"label"};function d(e,t,n,o,d,u){return(0,i.wg)(),(0,i.iD)("div",{class:(0,s.C_)(["power-switch",{disabled:n.disabled}]),onClick:t[0]||(t[0]=(...e)=>u.onInput&&u.onInput(...e))},[(0,i._)("input",{type:"checkbox",checked:n.value},null,8,a),(0,i._)("label",null,[l,(0,i._)("span",c,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])],2)}var u={name:"ToggleSwitch",emits:["input"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{onInput(e){if(e.stopPropagation(),this.disabled)return!1;this.$emit("input",e)}}},r=n(3744);const g=(0,r.Z)(u,[["render",d],["__scopeId","data-v-8fae7678"]]);var h=g},4004:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(2628),s={name:"SwitchesMixin",mixins:[i.Z],props:{pluginName:{type:String,required:!0},bus:{type:Object,required:!0},config:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1}},data(){return{loading:!1,initialized:!1,selectedDevice:null,devices:{}}},methods:{onRefreshEvent(e){e===this.pluginName&&this.refresh()},async toggle(e,t){null==t&&(t=e);const n=await this.request(`${this.pluginName}.toggle`,{device:t});this.devices[e].on=n.on},async refresh(){this.loading=!0;try{this.devices=(await this.request(`${this.pluginName}.switch_status`)).reduce(((e,t)=>{const n=t.name?.length?t.name:t.id;return e[n]=t,e}),{})}finally{this.loading=!1}}},mounted(){this.$watch((()=>this.selected),(e=>{e&&!this.initialized&&(this.refresh(),this.initialized=!0)})),this.bus.on("refresh",this.onRefreshEvent)},unmounted(){this.bus.off("refresh",this.onRefreshEvent)}};const o=s;var a=o},8671:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(6252),s=n(9963),o=n(3577);const a=e=>((0,i.dD)("data-v-38eb9831"),e=e(),(0,i.Cn)(),e),l={class:"name col-l-10 col-m-9 col-s-8"},c=a((()=>(0,i._)("i",{class:"fa fa-info"},null,-1))),d=[c],u=["textContent"],r={class:"toggler col-l-2 col-m-3 col-s-4"};function g(e,t,n,a,c,g){const h=(0,i.up)("Loading"),v=(0,i.up)("ToggleSwitch");return(0,i.wg)(),(0,i.iD)("div",{class:"switch",onClick:t[1]||(t[1]=(0,s.iM)(((...e)=>g.onToggle&&g.onToggle(...e)),["stop"]))},[n.loading?((0,i.wg)(),(0,i.j4)(h,{key:0})):(0,i.kq)("",!0),(0,i._)("div",l,[n.hasInfo?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t[0]||(t[0]=(0,s.iM)(((...e)=>g.onInfo&&g.onInfo(...e)),["prevent"]))},d)):(0,i.kq)("",!0),(0,i._)("span",{class:"name-content",textContent:(0,o.zw)(n.name)},null,8,u)]),(0,i._)("div",r,[(0,i.Wm)(v,{disabled:n.loading,value:n.state,onInput:g.onToggle},null,8,["disabled","value","onInput"])])])}var h=n(3567),v=n(1232),p={name:"Switch",components:{Loading:v.Z,ToggleSwitch:h.Z},emits:["toggle","info"],props:{name:{type:String,required:!0},state:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},hasInfo:{type:Boolean,default:!1},id:{type:String}},methods:{onInfo(e){return e.stopPropagation(),this.$emit("info"),!1},onToggle(e){return e.stopPropagation(),this.$emit("toggle"),!1}}},f=n(3744);const w=(0,f.Z)(p,[["render",g],["__scopeId","data-v-38eb9831"]]);var m=w},5210:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(6252),s=n(3577);const o=e=>((0,i.dD)("data-v-5c936ba2"),e=e(),(0,i.Cn)(),e),a={class:"switches wemo-switches"},l={key:1,class:"no-content"},c={key:0,class:"switch-info"},d={class:"row"},u=o((()=>(0,i._)("div",{class:"name"},"Name",-1))),r=["textContent"],g={class:"row"},h=o((()=>(0,i._)("div",{class:"name"},"On",-1))),v=["textContent"],p={class:"row"},f=o((()=>(0,i._)("div",{class:"name"},"IP",-1))),w=["textContent"];function m(e,t,n,o,m,_){const y=(0,i.up)("Loading"),b=(0,i.up)("Switch"),k=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",a,[e.loading?((0,i.wg)(),(0,i.j4)(y,{key:0})):Object.keys(e.devices).length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",l,"No WeMo switches found.")),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.devices,((t,n)=>((0,i.wg)(),(0,i.j4)(b,{loading:e.loading,name:n,state:t.on,onToggle:t=>e.toggle(n),key:n,"has-info":!0,onInfo:t=>{e.selectedDevice=n,e.$refs.switchInfoModal.show()}},null,8,["loading","name","state","onToggle","onInfo"])))),128)),(0,i.Wm)(k,{title:"Device Info",ref:"switchInfoModal"},{default:(0,i.w5)((()=>[e.selectedDevice?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",d,[u,(0,i._)("div",{class:"value",textContent:(0,s.zw)(e.devices[e.selectedDevice].name)},null,8,r)]),(0,i._)("div",g,[h,(0,i._)("div",{class:"value",textContent:(0,s.zw)(e.devices[e.selectedDevice].on)},null,8,v)]),(0,i._)("div",p,[f,(0,i._)("div",{class:"value",textContent:(0,s.zw)(e.devices[e.selectedDevice].ip)},null,8,w)])])):(0,i.kq)("",!0)])),_:1},512)])}var _=n(1232),y=n(4004),b=n(8671),k=n(9642),I={name:"SwitchWemo",components:{Modal:k.Z,Switch:b.Z,Loading:_.Z},mixins:[y.Z]},C=n(3744);const D=(0,C.Z)(I,[["render",m],["__scopeId","data-v-5c936ba2"]]);var Z=D}}]);
//# sourceMappingURL=5210.2fa788d0.js.map