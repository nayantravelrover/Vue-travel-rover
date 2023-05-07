(()=>{"use strict";var e={2156:(e,t,a)=>{var r=a(9302),n=a(1947),i=a(7813),o=a(9835);function s(e,t,a,r,n,i){const s=(0,o.up)("router-view"),l=(0,o.up)("q-page"),p=(0,o.up)("q-page-container"),c=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(c,{view:"hHh Lpr fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1})])),_:1})])),_:1})}const l=(0,o.aZ)({name:"App"});var p=a(1639),c=a(249),d=a(2133),u=a(9885),m=a(9984),_=a.n(m);const h=(0,p.Z)(l,[["render",s]]),g=h;_()(l,"components",{QLayout:c.Z,QPageContainer:d.Z,QPage:u.Z});var f=a(1502),y=a(3340),v=a(8339);const b=[{path:"/itinarypreview",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,7007))},{path:"/itinarybuilder",name:"ItineraryCreator",component:()=>Promise.all([a.e(736),a.e(64),a.e(330)]).then(a.bind(a,1330))},{path:"/destination",name:"DestinationPage",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5883)),props:!0},{path:"/comparison",component:()=>Promise.all([a.e(736),a.e(64),a.e(323)]).then(a.bind(a,6323))},{path:"/destinationweb",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,3958))},{path:"/appbar",component:()=>Promise.all([a.e(736),a.e(64),a.e(376)]).then(a.bind(a,4376))},{path:"/editcardw",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,2798))},{path:"/viewitinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,6363))},{path:"/profilepage2",component:()=>Promise.all([a.e(736),a.e(64),a.e(337)]).then(a.bind(a,1337))},{path:"/profilepage",component:()=>Promise.all([a.e(736),a.e(64),a.e(997)]).then(a.bind(a,7997))},{path:"/profilepageweb",name:"ProfilePageWeb",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5130))},{path:"/likeditinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,275))},{path:"/vieweditinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5299))},{path:"/itinerarybuilder",name:"ItineraryBuilder",component:()=>Promise.all([a.e(736),a.e(64),a.e(512)]).then(a.bind(a,5512))},{path:"/compare",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,9609))},{path:"/customitinerary",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,6694))},{path:"/blogspage",component:()=>Promise.all([a.e(64),a.e(752)]).then(a.bind(a,752))},{path:"/blogshomepage",component:()=>Promise.all([a.e(64),a.e(149)]).then(a.bind(a,6149))},{path:"/",redirect:"/home",name:"Home",component:()=>Promise.all([a.e(736),a.e(64),a.e(539)]).then(a.bind(a,5539)),children:[{path:"",name:"home",component:()=>Promise.all([a.e(736),a.e(64),a.e(969)]).then(a.bind(a,2969))}]},{path:"/:catchAll(.*)*",component:()=>a.e(862).then(a.bind(a,1862))}],w=b,x=(0,y.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("")});return t}));async function P(e,t){const r=e(g);r.use(n.Z,t);const o="function"===typeof f["default"]?await(0,f["default"])({}):f["default"],{storeKey:s}=await Promise.resolve().then(a.bind(a,1502)),l=(0,i.Xl)("function"===typeof x?await x({store:o}):x);return o.$router=l,{app:r,store:o,storeKey:s,router:l}}var k=a(6827);const j={config:{},plugins:{Notify:k.Z}},O="";async function C({app:e,router:t,store:a,storeKey:r},n){let i=!1;const o=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},s=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===i&&c<n.length;c++)try{await n[c]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:l,publicPath:O})}catch(p){return p&&p.url?void s(p.url):void console.error("[Quasar] boot error:",p)}!0!==i&&(e.use(t),e.use(a,r),e.mount("#q-app"))}P(r.ri,j).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(a.bind(a,1569))]).then((t=>{const a=r(t).filter((e=>"function"===typeof e));C(e,a)}))}))},1569:(e,t,a)=>{a.r(t),a.d(t,{api:()=>o,default:()=>s});var r=a(3340),n=a(9981),i=a.n(n);const o=i().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=o}))},1502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(9665);var r=a(3340),n=a(3100);const i=(0,r.h)((function(){const e=(0,n.MT)({modules:{},state:{user_logged_in:!0,is_agent:!1,itinerary_preview:{place_name:"Leh Ladakh",place_description:"Kerala, also known as 'God's Own Country', is a tropical paradise located in South India. It is known for its palm-lined beaches, serene backwaters, lush green hills, and traditional culture.",place_img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",itinerary_name:"3 Days in Kerala",tour_highlights:"Day 1: Explore Kochi and enjoy a Kathakali performance. Day 2: Experience the backwaters of Alleppey on a houseboat. Day 3: Relax on the beach in Kovalam.",days:[{images:"https://source.unsplash.com/random/200x200/?mountain",description:"Day 1: Nainital\n\nExplore the beautiful hill town of Nainital. Enjoy the breathtaking views of the lake and surrounding mountains. Go shopping at the local market or take a stroll in the nearby park.\n\n"},{images:"https://source.unsplash.com/random/200x200/?cave",description:"Day 2: Tiger's Nest Cave\n\nTrek up to the Tiger's Nest Cave, an ancient cave temple located high up in the Garhwal Himalayas. Enjoy the serenity and breathtaking views along the way.\n\n"},{images:"https://source.unsplash.com/random/200x200/?temple",description:"Day 3: Rishikesh\n\nSpend the day in Rishikesh, the 'yoga capital of the world'. Visit the holy Ganges River and explore the ashrams and temples.\n\n"},{images:"https://source.unsplash.com/random/200x200/?raft",description:"Day 4: Rafting\n\nGo on a white water rafting adventure in Rishikesh. Enjoy the thrilling rapids and stunning views of the Himalayas.\n\n"},{images:"https://source.unsplash.com/random/200x200/?safari",description:"Day 5: Jim Corbett National Park\n\nVisit the Jim Corbett National Park and spot some of India's famous wildlife. Go for a jungle safari and explore the enchanting forests.\n\n"}],places_to_visit:"Kochi, Alleppey, Kovalam",accomodation_arrangements:"Stay in a traditional houseboat in Alleppey.",travel_arrangements:"Transportation provided for all days.",inclusions:"Accommodation, transportation, meals as per itinerary.",exclusions:"Flights, personal expenses.",terms_and_conditions:"Naggar",cancellations_policy:"Naggar",things_to_carry:"Naggar",tour_rates:"Naggar",start_dates:[],number_of_days:0,extra_sections:[],places_to_visit_img:[{images:["https://source.unsplash.com/random/200x200/?landscape","https://source.unsplash.com/random/200x200/?cave","https://source.unsplash.com/random/200x200/?temple","https://source.unsplash.com/random/200x200/?raft","https://source.unsplash.com/random/200x200/?safari"]}],accomodation_arrangements_img:[{images:["https://source.unsplash.com/random/200x200/?hotel","https://source.unsplash.com/random/200x200/?hotel","https://source.unsplash.com/random/200x200/?hotel","https://source.unsplash.com/random/200x200/?hotel"]}],travel_arrangements_img:"download.jpeg",user_mobile_number:"",user_name:""}},mutations:{itinerary_preview_update(e,t){e.itinerary_preview=t},place_name_update(e,t){e.itinerary_preview.place_name=t},place_description_update(e,t){e.itinerary_preview.place_description=t},itinerary_name_update(e,t){e.itinerary_preview.itinerary_name=t},places_to_visit_update(e,t){e.itinerary_preview.places_to_visit=t},accomodation_arrangements_update(e,t){e.itinerary_preview.accomodation_arrangements=t},travel_arrangements_update(e,t){e.itinerary_preview.travel_arrangements=t},inclusions_update(e,t){e.itinerary_preview.inclusions=t},exclusions_update(e,t){e.itinerary_preview.exclusions=t},terms_and_conditions_update(e,t){e.itinerary_preview.terms_and_conditions=t},cancellations_policy_update(e,t){e.itinerary_preview.cancellations_policy=t},things_to_carry_update(e,t){e.itinerary_preview.things_to_carry=t},travel_arrangements_img_update(e,t){e.itinerary_preview.travel_arrangements_img=t},inclusions_img_update(e,t){e.itinerary_preview.inclusions_img=t},exclusions_img_update(e,t){e.itinerary_preview.exclusions_img=t},terms_and_conditions_img_update(e,t){e.itinerary_preview.terms_and_conditions_img=t},cancellations_policy_img_update(e,t){e.itinerary_preview.cancellations_policy_img=t},things_to_carry_img_update(e,t){e.itinerary_preview.things_to_carry_img=t},tour_rates_update(e,t){e.itinerary_preview.tour_rates=t},start_dates_update(e,t){e.itinerary_preview.start_dates=t},number_of_days_update(e,t){e.itinerary_preview.number_of_days=t},number_of_days_update(e,t){e.itinerary_preview.number_of_days=t},place_img_update(e,t){e.itinerary_preview.place_img=t},day_content_update(e,t){e.itinerary_preview.days[t.index_day].description=t.value},day_img_update(e,t){e.itinerary_preview.days[t.index_day].images=t.value},itinerary_update(e,t){e.itinerary_preview=t},day_add(e,t){e.itinerary_preview.days.push({description:"",images:[]})},tour_highlights_update(e,t){e.itinerary_preview.tour_highlights=t},user_logged_in_update(e,t){e.user_logged_in=t},is_agent_update(e,t){e.is_agent=t},places_to_visit_1_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[0]=t},places_to_visit_2_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[1]=t},places_to_visit_3_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[2]=t},places_to_visit_4_img_update(e,t){e.itinerary_preview.places_to_visit_img[0].images[3]=t},accomodation_arrangements_1_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[0]=t},accomodation_arrangements_2_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[1]=t},accomodation_arrangements_3_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[2]=t},accomodation_arrangements_4_img_update(e,t){e.itinerary_preview.accomodation_arrangements_img[0].images[3]=t}},actions:{},getters:{},strict:!1});return e}))}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,n,i)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,n,i]=e[c],s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var p=n();void 0!==p&&(t=p)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var i=Object.create(null);a.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o["default"]=()=>r,a.d(i,o),i}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"637fe335",149:"db59ee54",323:"0e49a3b2",330:"a024f4ba",337:"b0d37110",376:"8db86bb2",512:"987a46af",539:"ae662f72",752:"f37e7a1f",862:"eeb12f42",969:"97e4f7de",997:"e01b7b5c"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+(64===e?"chunk-common":e)+"."+{64:"0907673e",149:"7ead15b2",323:"4d782b85",330:"c3f9f566",337:"bba123e1",512:"58147683",752:"982fc36b",969:"f673d421",997:"5f476462"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="travel-rover-vue-frontend:";a.l=(r,n,i,o)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var p=document.getElementsByTagName("script"),c=0;c<p.length;c++){var d=p[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var u=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),t)return t(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=a=>{if(i.onerror=i.onload=null,"load"===a.type)r();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,i.parentNode.removeChild(i),n(l)}};return i.onerror=i.onload=o,i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){n=o[r],i=n.getAttribute("data-href");if(i===e||i===t)return n}},r=r=>new Promise(((n,i)=>{var o=a.miniCssF(r),s=a.p+o;if(t(o,s))return n();e(r,s,null,n,i)})),n={143:0};a.f.miniCss=(e,t)=>{var a={64:1,149:1,323:1,330:1,337:1,512:1,752:1,969:1,997:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((a,r)=>n=e[t]=[a,r]));r.push(n[2]=i);var o=a.p+a.u(t),s=new Error,l=r=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[o,s,l]=r,p=0;if(o.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var c=l(a)}for(t&&t(r);p<o.length;p++)i=o[p],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},r=globalThis["webpackChunktravel_rover_vue_frontend"]=globalThis["webpackChunktravel_rover_vue_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(2156)));r=a.O(r)})();