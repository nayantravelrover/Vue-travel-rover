"use strict";(globalThis["webpackChunktravel_rover_vue_frontend"]=globalThis["webpackChunktravel_rover_vue_frontend"]||[]).push([[119],{119:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(9835);function n(e,t,r,n,i,o){const s=(0,a.up)("ItineraryPreview");return(0,a.wg)(),(0,a.j4)(s,{class:"q-pa-md",id:"preview"})}var i=r(106),o=r(7449);r(6827);const s={name:"ItineraryPreviewOpenToInternet",components:{ItineraryPreview:i["default"]},mounted(){try{window.location.href;var e=window.location.href.split("?")[1],t=new URLSearchParams(e),r=t.get("pk");(0,o.JG)({itinerary_pk:r}).then((e=>{if(200==e["data"]["status"]){let t=JSON.parse(e["data"]["itinerary_preview"]);this.$store.commit("itinerary_preview_update",t)}else alert("There is some internal issues going on.")})).catch((e=>{alert(r),alert(e)}))}catch(a){console.log(a)}},computed:{itinarary_data:function(){return console.log(this.$store.state.itinerary_preview),this.$store.state.itinerary_preview},nonEmptyImagesCountPlacesToVisit(){return console.log(this.itinarary_data["place_name"]),this.itinarary_data.places_to_visit_img[0].images.filter((e=>""!==e)).length},nonEmptyImagesCountAccomodationArrangement(){return this.itinarary_data.accomodation_arrangements_img[0].images.filter((e=>""!==e)).length}}};var c=r(1639),l=r(6663),p=r(9984),_=r.n(p);const d=(0,c.Z)(s,[["render",n],["__scopeId","data-v-b603ae9c"]]),m=d;_()(s,"components",{QScrollArea:l.Z})}}]);