(()=>{"use strict";var e={2156:(e,t,a)=>{var i=a(1957),r=a(1947),n=a(499),o=a(9835);function s(e,t,a,i,r,n){const s=(0,o.up)("router-view"),l=(0,o.up)("q-page"),p=(0,o.up)("q-page-container"),d=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(d,{view:"hHh Lpr fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1})])),_:1})])),_:1})}const l=(0,o.aZ)({name:"App"});var p=a(1639),d=a(249),c=a(2133),u=a(9885),m=a(9984),_=a.n(m);const h=(0,p.Z)(l,[["render",s]]),f=h;_()(l,"components",{QLayout:d.Z,QPageContainer:c.Z,QPage:u.Z});var g=a(1502),y=a(3340),b=a(8339);const w=[{path:"/itinarypreview",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,3640))},{path:"/itinarybuilder",name:"ItineraryCreator",component:()=>Promise.all([a.e(736),a.e(64),a.e(225)]).then(a.bind(a,2225))},{path:"/destination",name:"DestinationPage",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,4171)),props:!0},{path:"/comparison",component:()=>Promise.all([a.e(736),a.e(64),a.e(323)]).then(a.bind(a,6323))},{path:"/destinationweb",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5403))},{path:"/appbar",component:()=>Promise.all([a.e(736),a.e(64),a.e(376)]).then(a.bind(a,4376))},{path:"/editcardw",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5434))},{path:"/viewitinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,2835))},{path:"/profilepageweb",name:"ProfilePageWeb",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5637))},{path:"/likeditinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,9675))},{path:"/createditinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,840))},{path:"/itinerarybuilder",name:"ItineraryBuilder",component:()=>Promise.all([a.e(736),a.e(64),a.e(512)]).then(a.bind(a,5512))},{path:"/compare",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,3242))},{path:"/purchaseditinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5136))},{path:"/blogspage",component:()=>Promise.all([a.e(64),a.e(752)]).then(a.bind(a,752))},{path:"/blogshomepage",component:()=>Promise.all([a.e(64),a.e(149)]).then(a.bind(a,6149))},{path:"/itinerarylink",component:()=>Promise.all([a.e(736),a.e(64),a.e(581)]).then(a.bind(a,581))},{path:"/embracing_blog",component:()=>Promise.all([a.e(736),a.e(64),a.e(598)]).then(a.bind(a,4598))},{path:"/agent_or_diy",component:()=>Promise.all([a.e(736),a.e(64),a.e(437)]).then(a.bind(a,2311))},{path:"/popularity_zostel",component:()=>Promise.all([a.e(736),a.e(64),a.e(105)]).then(a.bind(a,4105))},{path:"/workation",component:()=>Promise.all([a.e(736),a.e(64),a.e(817)]).then(a.bind(a,5817))},{path:"/",redirect:"/home",name:"Home",component:()=>Promise.all([a.e(736),a.e(64),a.e(535)]).then(a.bind(a,3535)),children:[{path:"",name:"home",component:()=>Promise.all([a.e(736),a.e(64),a.e(311)]).then(a.bind(a,4311))}]},{path:"/:catchAll(.*)*",component:()=>a.e(862).then(a.bind(a,1862))}],v=w,x=(0,y.BC)((function(){const e=b.r5,t=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function P(e,t){const i=e(f);i.use(r.Z,t);const o="function"===typeof g.Z?await(0,g.Z)({}):g.Z,{storeKey:s}=await Promise.resolve().then(a.bind(a,1502)),l=(0,n.Xl)("function"===typeof x?await x({store:o}):x);return o.$router=l,{app:i,store:o,storeKey:s,router:l}}var H=a(6827);const M={config:{},plugins:{Notify:H.Z}},j="";async function D({app:e,router:t,store:a,storeKey:i},r){let n=!1;const o=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===n&&d<r.length;d++)try{await r[d]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:l,publicPath:j})}catch(p){return p&&p.url?void s(p.url):void console.error("[Quasar] boot error:",p)}!0!==n&&(e.use(t),e.use(a,i),e.mount("#q-app"))}P(i.ri,M).then((e=>{const[t,i]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(a.bind(a,1569))]).then((t=>{const a=i(t).filter((e=>"function"===typeof e));D(e,a)}))}))},1569:(e,t,a)=>{a.r(t),a.d(t,{api:()=>o,default:()=>s});var i=a(3340),r=a(9981),n=a.n(r);const o=n().create({baseURL:"https://api.example.com"}),s=(0,i.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=o}))},1502:(e,t,a)=>{a.d(t,{Z:()=>n});a(9665);var i=a(3340),r=a(3100);const n=(0,i.h)((function(){const e=(0,r.MT)({modules:{},state:{user_logged_in:!0,is_agent:!1,itinerary_preview:{place_name:"Leh Ladakh",place_description:"Kerala, also known as 'God's Own Country', is a tropical paradise located in South India. It is known for its palm-lined beaches, serene backwaters, lush green hills, and traditional culture.",place_img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",itinerary_name:"3 Days in Kerala",tour_highlights:"Day 1: Explore Kochi and enjoy a Kathakali performance. Day 2: Experience the backwaters of Alleppey on a houseboat. Day 3: Relax on the beach in Kovalam.",days:[{images:"https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",description:"Day 1: Nainital\n\nExplore the beautiful hill town of Nainital. Enjoy the breathtaking views of the lake and surrounding mountains. Go shopping at the local market or take a stroll in the nearby park.\n\n"},{images:"https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",description:"Day 2: Tiger's Nest Cave\n\nTrek up to the Tiger's Nest Cave, an ancient cave temple located high up in the Garhwal Himalayas. Enjoy the serenity and breathtaking views along the way.\n\n"},{images:"https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",description:"Day 3: Rishikesh\n\nSpend the day in Rishikesh, the 'yoga capital of the world'. Visit the holy Ganges River and explore the ashrams and temples.\n\n"},{images:"https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",description:"Day 4: Rafting\n\nGo on a white water rafting adventure in Rishikesh. Enjoy the thrilling rapids and stunning views of the Himalayas.\n\n"},{images:"https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",description:"Day 5: Jim Corbett National Park\n\nVisit the Jim Corbett National Park and spot some of India's famous wildlife. Go for a jungle safari and explore the enchanting forests.\n\n"}],places_to_visit:"Kochi, Alleppey, Kovalam",accomodation_arrangements:"Stay in a traditional houseboat in Alleppey.",travel_arrangements:"Transportation provided for all days.",inclusions:"Accommodation, transportation, meals as per itinerary.",exclusions:"Flights, personal expenses.",terms_and_conditions:"Naggar",cancellations_policy:"Naggar",things_to_carry:"Naggar",tour_rates:"Naggar",start_dates:[],number_of_days:0,extra_sections:[],places_to_visit_img:[{images:["https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"]}],accomodation_arrangements_img:[{images:["https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"]}],travel_arrangements_img:"download.jpeg",user_mobile_number:"",user_name:"",payment_link:"",inclusions_headers:"",exclusions_headers:""}},mutations:{itinerary_preview_update(e,t){e.itinerary_preview=t},place_name_update(e,t){e.itinerary_preview.place_name=t},place_description_update(e,t){e.itinerary_preview.place_description=t},itinerary_name_update(e,t){e.itinerary_preview.itinerary_name=t},places_to_visit_update(e,t){e.itinerary_preview.places_to_visit=t},accomodation_arrangements_update(e,t){e.itinerary_preview.accomodation_arrangements=t},travel_arrangements_update(e,t){e.itinerary_preview.travel_arrangements=t},inclusions_update(e,t){e.itinerary_preview.inclusions=t},exclusions_update(e,t){e.itinerary_preview.exclusions=t},terms_and_conditions_update(e,t){e.itinerary_preview.terms_and_conditions=t},cancellations_policy_update(e,t){e.itinerary_preview.cancellations_policy=t},things_to_carry_update(e,t){e.itinerary_preview.things_to_carry=t},travel_arrangements_img_update(e,t){e.itinerary_preview.travel_arrangements_img=t},inclusions_img_update(e,t){e.itinerary_preview.inclusions_img=t},exclusions_img_update(e,t){e.itinerary_preview.exclusions_img=t},terms_and_conditions_img_update(e,t){e.itinerary_preview.terms_and_conditions_img=t},cancellations_policy_img_update(e,t){e.itinerary_preview.cancellations_policy_img=t},things_to_carry_img_update(e,t){e.itinerary_preview.things_to_carry_img=t},tour_rates_update(e,t){e.itinerary_preview.tour_rates=t},start_dates_update(e,t){e.itinerary_preview.start_dates=t},number_of_days_update(e,t){e.itinerary_preview.number_of_days=t},number_of_days_update(e,t){e.itinerary_preview.number_of_days=t},place_img_update(e,t){e.itinerary_preview.place_img=t},day_content_update(e,t){e.itinerary_preview.days[t.index_day].description=t.value},day_img_update(e,t){e.itinerary_preview.days[t.index_day].images=t.value},itinerary_update(e,t){e.itinerary_preview=t},day_add(e,t){e.itinerary_preview.days.push({description:"",images:[]})},tour_highlights_update(e,t){e.itinerary_preview.tour_highlights=t},user_logged_in_update(e,t){e.user_logged_in=t},is_agent_update(e,t){e.is_agent=t},places_to_visit_1_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[0]=t},places_to_visit_2_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[1]=t},places_to_visit_3_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[2]=t},places_to_visit_4_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[3]=t},accomodation_arrangements_1_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[0]=t},accomodation_arrangements_2_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[1]=t},accomodation_arrangements_3_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[2]=t},accomodation_arrangements_4_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[3]=t},inclusions_headers_update(e,t){e.itinerary_preview.inclusions_headers=t},exclusions_headers_update(e,t){e.itinerary_preview.exclusions_headers=t}},actions:{},getters:{},strict:!1});return e}))}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,(()=>{var e=[];a.O=(t,i,r,n)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,r,n]=e[d],s=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](i[l])))?i.splice(l--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var p=r();void 0!==p&&(t=p)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,r,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var n=Object.create(null);a.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>i[e]));return o["default"]=()=>i,a.d(n,o),n}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"6e009649",105:"35264c82",149:"874fb5c0",225:"a702a4a9",311:"3f95bc49",323:"84d8ebb5",376:"a6fb91b5",437:"78edd2c9",512:"79480c20",535:"15894904",581:"6b0568ad",598:"dc386729",752:"d2f4dbcb",817:"8674ad65",862:"6bd00b31"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+(64===e?"chunk-common":e)+"."+{64:"7944f539",105:"4eba934c",149:"7ead15b2",225:"0c6fe827",311:"b795a02e",323:"4d782b85",437:"4eba934c",512:"58147683",581:"4637ce88",598:"4eba934c",752:"982fc36b",817:"4eba934c"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="travel-rover-vue-frontend:";a.l=(i,r,n,o)=>{if(e[i])e[i].push(r);else{var s,l;if(void 0!==n)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var c=p[d];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+n){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=i),e[i]=[r];var u=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,i,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=a=>{if(n.onerror=n.onload=null,"load"===a.type)i();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=o,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var r=a[i],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){r=o[i],n=r.getAttribute("data-href");if(n===e||n===t)return r}},i=i=>new Promise(((r,n)=>{var o=a.miniCssF(i),s=a.p+o;if(t(o,s))return r();e(i,s,null,r,n)})),r={143:0};a.f.miniCss=(e,t)=>{var a={64:1,105:1,149:1,225:1,311:1,323:1,437:1,512:1,581:1,598:1,752:1,817:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=i(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,i)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((a,i)=>r=e[t]=[a,i]));i.push(r[2]=n);var o=a.p+a.u(t),s=new Error,l=i=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,s,l]=i,p=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(t&&t(i);p<o.length;p++)n=o[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},i=globalThis["webpackChunktravel_rover_vue_frontend"]=globalThis["webpackChunktravel_rover_vue_frontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[736],(()=>a(2156)));i=a.O(i)})();