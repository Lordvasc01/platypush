"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[5193],{5193:function(t,n,o){o.r(n),o.d(n,{default:function(){return b}});var e=o(6252);const r=t=>((0,e.dD)("data-v-30d09191"),t=t(),(0,e.Cn)(),t),s={class:"sound"},a={class:"sound-container"},i={key:0,autoplay:"",preload:"none",ref:"player"},d=["src"],c=(0,e.Uk)(" Your browser does not support audio elements "),u={class:"controls"},l=r((()=>(0,e._)("i",{class:"fa fa-play"},null,-1))),p=(0,e.Uk)("  Start streaming audio "),g=[l,p],k=r((()=>(0,e._)("i",{class:"fa fa-stop"},null,-1))),y=(0,e.Uk)("  Stop streaming audio "),f=[k,y];function w(t,n,o,r,l,p){return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("div",a,[l.recording?((0,e.wg)(),(0,e.iD)("audio",i,[(0,e._)("source",{src:`/sound/stream?t=${(new Date).getTime()}`,type:"audio/x-wav;codec=pcm"},null,8,d),c],512)):(0,e.kq)("",!0)]),(0,e._)("div",u,[l.recording?((0,e.wg)(),(0,e.iD)("button",{key:1,type:"button",onClick:n[1]||(n[1]=(...t)=>p.stopRecording&&p.stopRecording(...t))},f)):((0,e.wg)(),(0,e.iD)("button",{key:0,type:"button",onClick:n[0]||(n[0]=(...t)=>p.startRecording&&p.startRecording(...t))},g))])])}var h=o(2628),m={name:"Sound",mixins:[h.Z],data(){return{recording:!1}},methods:{startRecording(){this.recording=!0},async stopRecording(){this.recording=!1,await this.request("sound.stop_recording")}}},v=o(3744);const _=(0,v.Z)(m,[["render",w],["__scopeId","data-v-30d09191"]]);var b=_}}]);
//# sourceMappingURL=5193.5035fdb1.js.map