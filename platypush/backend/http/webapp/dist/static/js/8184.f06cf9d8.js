"use strict";(self["webpackChunkplatypush"]=self["webpackChunkplatypush"]||[]).push([[8184,5528],{5528:function(a,t,e){e.r(t),e.d(t,{default:function(){return ha}});var s=e(6252),n=e(9963);const i={class:"camera"},r={class:"camera-container"},l={class:"frame-container",ref:"frameContainer"},o={key:0,class:"no-frame"},c=["src"],u={class:"controls"},p={class:"left"},h=["disabled"],d=(0,s._)("i",{class:"fa fa-play"},null,-1),m=[d],g=["disabled"],_=(0,s._)("i",{class:"fa fa-stop"},null,-1),f=[_],y=["disabled"],C=(0,s._)("i",{class:"fas fa-camera"},null,-1),w=[C],v={class:"right"},b=(0,s._)("i",{class:"fas fa-volume-mute"},null,-1),S=[b],k=(0,s._)("i",{class:"fas fa-volume-up"},null,-1),z=[k],x=(0,s._)("i",{class:"fas fa-cog"},null,-1),F=[x],U={class:"audio-container"},$={key:0,autoplay:"",preload:"none",ref:"player"},D=["src"],M=(0,s.Uk)(" Your browser does not support audio elements "),V={key:0,class:"url"},q={class:"row"},P=(0,s._)("span",{class:"name"},"Stream URL",-1),A=["value"],L={class:"params"},O={class:"row"},j=(0,s._)("span",{class:"name"},"Device",-1),G={class:"row"},I=(0,s._)("span",{class:"name"},"Width",-1),R={class:"row"},T=(0,s._)("span",{class:"name"},"Height",-1),Z={class:"row"},W=(0,s._)("span",{class:"name"},"Horizontal Flip",-1),H={class:"row"},Y=(0,s._)("span",{class:"name"},"Vertical Flip",-1),E={class:"row"},X=(0,s._)("span",{class:"name"},"Rotate",-1),B={class:"row"},J=(0,s._)("span",{class:"name"},"Scale-X",-1),K={class:"row"},N=(0,s._)("span",{class:"name"},"Scale-Y",-1),Q={class:"row"},aa=(0,s._)("span",{class:"name"},"Frames per second",-1),ta={class:"row"},ea=(0,s._)("span",{class:"name"},"Grayscale",-1);function sa(a,t,e,d,_,C){const b=(0,s.up)("Slot"),k=(0,s.up)("Modal");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",l,[a.streaming||a.capturing||a.captured?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",o,"The camera is not active")),(0,s._)("img",{class:"frame",src:a.url,ref:"frame",alt:""},null,8,c)],512),(0,s._)("div",u,[(0,s._)("div",p,[a.streaming?((0,s.wg)(),(0,s.iD)("button",{key:1,type:"button",onClick:t[1]||(t[1]=(...t)=>a.stopStreaming&&a.stopStreaming(...t)),disabled:a.capturing,title:"Stop video"},f,8,g)):((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",onClick:t[0]||(t[0]=(...a)=>C.startStreaming&&C.startStreaming(...a)),disabled:a.capturing,title:"Start video"},m,8,h)),a.streaming?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:2,type:"button",onClick:t[2]||(t[2]=(...a)=>C.capture&&C.capture(...a)),disabled:a.streaming||a.capturing,title:"Take a picture"},w,8,y))]),(0,s._)("div",v,[a.audioOn?((0,s.wg)(),(0,s.iD)("button",{key:1,type:"button",onClick:t[4]||(t[4]=(...t)=>a.stopAudio&&a.stopAudio(...t)),title:"Stop audio"},z)):((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",onClick:t[3]||(t[3]=(...t)=>a.startAudio&&a.startAudio(...t)),title:"Start audio"},S)),(0,s._)("button",{type:"button",onClick:t[5]||(t[5]=t=>a.$refs.paramsModal.show()),title:"Settings"},F)])])]),(0,s._)("div",U,[a.audioOn?((0,s.wg)(),(0,s.iD)("audio",$,[(0,s._)("source",{src:`/sound/stream?t=${(new Date).getTime()}`,type:"audio/x-wav;codec=pcm"},null,8,D),M],512)):(0,s.kq)("",!0)]),a.url?.length?((0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("label",q,[P,(0,s._)("input",{name:"url",type:"text",value:C.fullURL,disabled:"disabled"},null,8,A)])])):(0,s.kq)("",!0),(0,s.Wm)(k,{ref:"paramsModal",title:"Camera Parameters"},{default:(0,s.w5)((()=>[(0,s._)("div",L,[(0,s._)("label",O,[j,(0,s.wy)((0,s._)("input",{name:"device",type:"text","onUpdate:modelValue":t[6]||(t[6]=t=>a.attrs.device=t),onChange:t[7]||(t[7]=(...t)=>a.onDeviceChanged&&a.onDeviceChanged(...t))},null,544),[[n.nr,a.attrs.device]])]),(0,s._)("label",G,[I,(0,s.wy)((0,s._)("input",{name:"width",type:"text","onUpdate:modelValue":t[8]||(t[8]=t=>a.attrs.resolution[0]=t),onChange:t[9]||(t[9]=(...t)=>a.onSizeChanged&&a.onSizeChanged(...t))},null,544),[[n.nr,a.attrs.resolution[0]]])]),(0,s._)("label",R,[T,(0,s.wy)((0,s._)("input",{name:"height",type:"text","onUpdate:modelValue":t[10]||(t[10]=t=>a.attrs.resolution[1]=t),onChange:t[11]||(t[11]=(...t)=>a.onSizeChanged&&a.onSizeChanged(...t))},null,544),[[n.nr,a.attrs.resolution[1]]])]),(0,s._)("label",Z,[W,(0,s.wy)((0,s._)("input",{name:"horizontal_flip",type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=t=>a.attrs.horizontal_flip=t),onChange:t[13]||(t[13]=(...t)=>a.onFlipChanged&&a.onFlipChanged(...t))},null,544),[[n.e8,a.attrs.horizontal_flip]])]),(0,s._)("label",H,[Y,(0,s.wy)((0,s._)("input",{name:"vertical_flip",type:"checkbox","onUpdate:modelValue":t[14]||(t[14]=t=>a.attrs.vertical_flip=t),onChange:t[15]||(t[15]=(...t)=>a.onFlipChanged&&a.onFlipChanged(...t))},null,544),[[n.e8,a.attrs.vertical_flip]])]),(0,s._)("label",E,[X,(0,s.wy)((0,s._)("input",{name:"rotate",type:"text","onUpdate:modelValue":t[16]||(t[16]=t=>a.attrs.rotate=t),onChange:t[17]||(t[17]=(...t)=>a.onSizeChanged&&a.onSizeChanged(...t))},null,544),[[n.nr,a.attrs.rotate]])]),(0,s._)("label",B,[J,(0,s.wy)((0,s._)("input",{name:"scale_x",type:"text","onUpdate:modelValue":t[18]||(t[18]=t=>a.attrs.scale_x=t),onChange:t[19]||(t[19]=(...t)=>a.onSizeChanged&&a.onSizeChanged(...t))},null,544),[[n.nr,a.attrs.scale_x]])]),(0,s._)("label",K,[N,(0,s.wy)((0,s._)("input",{name:"scale_y",type:"text","onUpdate:modelValue":t[20]||(t[20]=t=>a.attrs.scale_y=t),onChange:t[21]||(t[21]=(...t)=>a.onSizeChanged&&a.onSizeChanged(...t))},null,544),[[n.nr,a.attrs.scale_y]])]),(0,s._)("label",Q,[aa,(0,s.wy)((0,s._)("input",{name:"fps",type:"text","onUpdate:modelValue":t[22]||(t[22]=t=>a.attrs.fps=t),onChange:t[23]||(t[23]=(...t)=>a.onFpsChanged&&a.onFpsChanged(...t))},null,544),[[n.nr,a.attrs.fps]])]),(0,s._)("label",ta,[ea,(0,s.wy)((0,s._)("input",{name:"grayscale",type:"checkbox","onUpdate:modelValue":t[24]||(t[24]=t=>a.attrs.grayscale=t),onChange:t[25]||(t[25]=(...t)=>a.onGrayscaleChanged&&a.onGrayscaleChanged(...t))},null,544),[[n.e8,a.attrs.grayscale]])]),(0,s.Wm)(b)])])),_:1},512)])}var na=e(2628),ia={name:"CameraMixin",mixins:[na.Z],props:{cameraPlugin:{type:String,required:!0}},data(){return{streaming:!1,capturing:!1,captured:!1,audioOn:!1,url:null,attrs:{}}},computed:{params(){return{resolution:this.attrs.resolution,device:this.attrs.device?.length?this.attrs.device:null,horizontal_flip:parseInt(0+this.attrs.horizontal_flip),vertical_flip:parseInt(0+this.attrs.vertical_flip),rotate:parseFloat(this.attrs.rotate),scale_x:parseFloat(this.attrs.scale_x),scale_y:parseFloat(this.attrs.scale_y),fps:parseFloat(this.attrs.fps),grayscale:parseInt(0+this.attrs.grayscale)}}},methods:{getUrl(a,t){return"/camera/"+a+"/"+t+"?"+Object.entries(this.params).filter((a=>null!=a[1]&&(""+a[1]).length>0)).map((([a,t])=>a+"="+t)).join("&")},_startStreaming(a){this.streaming||(this.streaming=!0,this.capturing=!1,this.captured=!1,this.url=this.getUrl(a,"video."+this.attrs.stream_format))},stopStreaming(){this.streaming&&(this.streaming=!1,this.capturing=!1,this.url=null)},_capture(a){this.capturing||(this.streaming=!1,this.capturing=!0,this.captured=!0,this.url=this.getUrl(a,"photo.jpg")+"&t="+(new Date).getTime())},onFrameLoaded(){this.capturing&&(this.capturing=!1)},onDeviceChanged(){},onFlipChanged(){},onSizeChanged(){const a=a=>a*Math.PI/180,t=a(this.params.rotate);this.$refs.frameContainer.style.width=Math.round(this.params.scale_x*Math.abs(this.params.resolution[0]*Math.cos(t)+this.params.resolution[1]*Math.sin(t)))+"px",this.$refs.frameContainer.style.height=Math.round(this.params.scale_y*Math.abs(this.params.resolution[0]*Math.sin(t)+this.params.resolution[1]*Math.cos(t)))+"px"},onFpsChanged(){},onGrayscaleChanged(){},startAudio(){this.audioOn=!0},async stopAudio(){this.audioOn=!1,await this.request("sound.stop_recording")}},created(){const a=this.$root.config[`camera.${this.cameraPlugin}`]||{};this.attrs={resolution:a.resolution||[640,480],device:a.device,horizontal_flip:a.horizontal_flip||0,vertical_flip:a.vertical_flip||0,rotate:a.rotate||0,scale_x:a.scale_x||1,scale_y:a.scale_y||1,fps:a.fps||16,grayscale:a.grayscale||0,stream_format:a.stream_format||"mjpeg"}},mounted(){this.$refs.frame.addEventListener("load",this.onFrameLoaded),this.onSizeChanged(),this.$watch((()=>this.attrs.resolution),this.onSizeChanged),this.$watch((()=>this.attrs.horizontal_flip),this.onSizeChanged),this.$watch((()=>this.attrs.vertical_flip),this.onSizeChanged),this.$watch((()=>this.attrs.rotate),this.onSizeChanged),this.$watch((()=>this.attrs.scale_x),this.onSizeChanged),this.$watch((()=>this.attrs.scale_y),this.onSizeChanged)}};const ra=ia;var la=ra,oa=e(9642),ca={name:"Camera",components:{Modal:oa.Z},mixins:[la],props:{cameraPlugin:{type:String,required:!0}},computed:{fullURL(){return`${window.location.protocol}//${window.location.host}${this.url}`}},methods:{startStreaming(){this._startStreaming(this.cameraPlugin)},capture(){this._capture(this.cameraPlugin)}}},ua=e(3744);const pa=(0,ua.Z)(ca,[["render",sa]]);var ha=pa},8184:function(a,t,e){e.r(t),e.d(t,{default:function(){return c}});var s=e(6252);function n(a,t,e,n,i,r){const l=(0,s.up)("Camera");return(0,s.wg)(),(0,s.j4)(l,{"camera-plugin":"cv"})}var i=e(5528),r={name:"CameraCv",components:{Camera:i["default"]}},l=e(3744);const o=(0,l.Z)(r,[["render",n]]);var c=o}}]);
//# sourceMappingURL=8184.f06cf9d8.js.map