"use strict";(globalThis["webpackChunktravel_rover_vue_frontend"]=globalThis["webpackChunktravel_rover_vue_frontend"]||[]).push([[581],{581:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(9835),i=a(6686),n=a.n(i);const o=e=>((0,r.dD)("data-v-4dac373c"),e=e(),(0,r.Cn)(),e),s={key:1,class:"row",style:{"min-height":"100%"}},l={class:"col-12 q-pa-lg",style:{"background-color":"#4B5563"}},c=o((()=>(0,r._)("img",{class:"top-left",src:n(),style:{"max-width":"200px"}},null,-1)));function d(e,t,a,i,n,o){const d=(0,r.up)("ItineraryPreviewFullData"),m=(0,r.up)("q-scroll-area");return e.$q.platform.is.mobile?((0,r.wg)(),(0,r.j4)(d,{key:0,class:"q-pa-sm",id:"preview"})):((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",l,[c,(0,r.Wm)(m,{style:{height:"100vh",margin:"0 auto","max-width":"800px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"q-pa-md",id:"preview"})])),_:1})])]))}a(2309);var m=a(7063),p=a(7449);a(6827);const u={name:"ItineraryPreviewOpenToInternet",components:{ItineraryPreviewFullData:m.Z},mounted(){try{window.location.href;var e=window.location.href.split("?")[1],t=new URLSearchParams(e),a=t.get("pk");(0,p.JG)({itinerary_pk:a}).then((e=>{if(200==e["data"]["status"]){let t=JSON.parse(e["data"]["itinerary_preview"]);this.$store.commit("itinerary_preview_update",t)}else alert("There is some internal issues going on.")})).catch((e=>{alert(a),alert(e)}))}catch(r){console.log(r)}},computed:{itinarary_data:function(){return console.log(this.$store.state.itinerary_preview),this.$store.state.itinerary_preview},nonEmptyImagesCountPlacesToVisit(){return console.log(this.itinarary_data["place_name"]),this.itinarary_data.places_to_visit_img[0].images.filter((e=>""!==e)).length},nonEmptyImagesCountAccomodationArrangement(){return this.itinarary_data.accomodation_arrangements_img[0].images.filter((e=>""!==e)).length}}};var h=a(1639),_=a(6663),g=a(9984),v=a.n(g);const w=(0,h.Z)(u,[["render",d],["__scopeId","data-v-4dac373c"]]),y=w;v()(u,"components",{QScrollArea:_.Z})}}]);