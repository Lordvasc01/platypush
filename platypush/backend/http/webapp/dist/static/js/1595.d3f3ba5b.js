"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[1595],{1595:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var n=s(6252),o=s(3577);const a={class:"date-time"},r=["textContent"],i=["textContent"];function h(e,t,s,h,u,w){return(0,n.wg)(),(0,n.iD)("div",a,[w._showDate?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"date",textContent:(0,o.zw)(e.formatDate(e.now))},null,8,r)):(0,n.kq)("",!0),w._showTime?((0,n.wg)(),(0,n.iD)("div",{key:1,class:"time",textContent:(0,o.zw)(e.formatTime(e.now,w._showSeconds))},null,8,i)):(0,n.kq)("",!0)])}var u=s(2628),w={name:"DateTime",mixins:[u.Z],props:{showDate:{required:!1,default:!0},showTime:{required:!1,default:!0},showSeconds:{required:!1,default:!0}},computed:{_showTime(){return this.parseBoolean(this.showTime)},_showDate(){return this.parseBoolean(this.showDate)},_showSeconds(){return this.parseBoolean(this.showSeconds)}},data:function(){return{now:new Date}},methods:{refreshTime(){this.now=new Date}},mounted:function(){this.refreshTime(),setInterval(this.refreshTime,1e3)}},d=s(3744);const c=(0,d.Z)(w,[["render",h],["__scopeId","data-v-ca42eb9c"]]);var l=c}}]);
//# sourceMappingURL=1595.d3f3ba5b.js.map