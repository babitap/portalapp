(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,a){e.exports=a(90)},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return V}));a(44),a(45);var r=a(0),n=a.n(r),s=a(16),i=a.n(s),c=(a(50),a(9)),l=(a(55),a(56),a(42)),o=a(2),u=a(92),d=function(e){return n.a.createElement(u.a,{className:"card-bkg"},n.a.createElement(u.a.Img,{variant:"top",src:e.card.img,width:"100",height:"200"}),n.a.createElement(u.a.Body,null,n.a.createElement(u.a.Title,{className:"style-f"},e.card.title),n.a.createElement(u.a.Text,{className:"style-f"},n.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",e.card.location)))},E=a(13),f=a.n(E),m=a(18),L=a(24),p=a.n(L),h={getCarousel:function(){return p.a.get("".concat("http://demo3136867.mockable.io","/carousel")).then((function(e){return e.data})).catch((function(e){console.log(e)}))},getFeatured:function(e){return p.a.get("".concat("http://demo3136867.mockable.io","/featured")).then((function(e){return e.data})).catch((function(e){console.log(e)}))}};function D(){return(D=Object(m.a)(f.a.mark((function e(t,a){var r,n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.getCarousel();case 3:r=e.sent,n=r.data.map((function(e,t){return e})),s=""!=a?r.data.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})):n,t({type:"FETCH_CAROUSEL_DATA_LIST_SUCCEEDED",payload:{carouselDataList:n,filteredList:s,searchValue:a}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"FETCH_CAROUSEL_DATA_LIST_FAILED"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var v=function(e){return function(t,a){return t({type:"FETCH_CAROUSEL_DATA_LIST_STARTED",payload:{carouselDataList:[],filteredList:[],searchValue:e}}),function(e,t){return D.apply(this,arguments)}(t,e)}};function T(){return(T=Object(m.a)(f.a.mark((function e(t,a){var r,n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1,e.next=4,h.getFeatured(1);case 4:r=e.sent,n=r.data.map((function(e,t){return e})),s=""!=a?r.data.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})):n,t({type:"FETCH_FEATURED_DATA_LIST_SUCCEEDED",payload:{featureDataList:n,filteredList:s,searchValue:a}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"FETCH_FEATURED_DATA_LIST_FAILED"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var g=function(e){return function(t,a){return t({type:"FETCH_FEATURED_DATA_LIST_STARTED",payload:{featureDataList:[],filteredList:[],searchValue:e}}),function(e,t){return T.apply(this,arguments)}(t,e)}},_=a(39),y=a.n(_),A=(a(87),a(88),function(){var e=Object(r.useRef)(""),t=Object(c.c)((function(e){return e.carouselData})),a=Object(c.c)((function(e){return e.featureData})),s=Object(c.b)(),i=n.a.useCallback(function(e,t){var a;return function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];var i=this;a&&clearTimeout(a),a=setTimeout((function(){a=null,e.apply(i,n)}),t)}}((function(){var t=null===e||void 0===e?void 0:e.current.value;s(v(null===e||void 0===e?void 0:e.current.value)),s(g(t))}),400),[]);Object(r.useEffect)((function(){s(v(null===e||void 0===e?void 0:e.current.value)),s(g(null===e||void 0===e?void 0:e.current.value))}),[]);return t.isListLoading?n.a.createElement("h3",{className:"loading-indicator"}):n.a.createElement("div",{className:"container-new"},n.a.createElement("div",{className:"search-container"},n.a.createElement("div",{className:"form-group search-s"},n.a.createElement("input",{type:"search",placeholder:"Search for... ",ref:e,className:"form-control",onChange:function(e){return i(e.target.value)}}))),n.a.createElement("div",{className:"content-new"},n.a.createElement("div",{className:"panel-div"},n.a.createElement("p",{className:"style-p"},n.a.createElement("strong",null,"Popular around ")," you "),n.a.createElement(y.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,autoPlaySpeed:1500,autoPlay:!0},t.filteredList&&(null===t||void 0===t?void 0:t.filteredList.length)>0&&t.filteredList.map((function(e,t){return n.a.createElement("div",{className:"card-img"},n.a.createElement(d,{card:e}))})))),n.a.createElement("div",{className:"panel-div"},n.a.createElement("p",{className:"style-p"},n.a.createElement("strong",null," Featured")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card-deck"},a.filteredList&&a.filteredList.map((function(e,t){return n.a.createElement("div",{className:"card"},n.a.createElement(d,{card:e}))})))))))}),b=function(){return document.body.style.backgroundColor="#fff",n.a.createElement(A,null)},C=function(){Object(c.b)();return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/home",component:b}),n.a.createElement(o.a,{path:"*",component:b}))))},O=a(11),S=a(40),F=a.n(S),j=a(5),w=Object(O.c)({carouselData:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CAROUSEL_DATA_LIST_STARTED":return Object(j.a)(Object(j.a)({},t),{},{carouselDataList:[],filteredList:[],isListLoading:!0,isListError:!1,listErrorMessage:"",searchValue:a.payload.searchValue});case"FETCH_CAROUSEL_DATA_LIST_SUCCEEDED":var r,n="";return r=""!=(n=a.payload.searchValue.toLowerCase())?a.payload.carouselDataList.filter((function(e){return e.title.toLowerCase().includes(n)})):a.payload.carouselDataList,console.log("filteredValues reducer",r),Object(j.a)(Object(j.a)({},t),{},{carouselDataList:a.payload.carouselDataList,filteredList:r,isListLoading:!1,isListError:!1,listErrorMessage:"",searchValue:a.payload.searchValue});case"FETCH_CAROUSEL_DATA_LIST_FAILED":return Object(j.a)(Object(j.a)({},t),{},{carouselDataList:[],filteredList:[],isListLoading:!1,isListError:!0,listErrorMessage:null===(e=a.payload)||void 0===e?void 0:e.listErrorMessage,searchValue:""});default:return t}},featureData:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_FEATURED_DATA_LIST_STARTED":return Object(j.a)(Object(j.a)({},t),{},{featureDataList:[],filteredList:[],isListLoading:!0,isListError:!1,listErrorMessage:"",searchValue:a.payload.searchValue});case"FETCH_FEATURED_DATA_LIST_SUCCEEDED":var r,n="";return r=""!=(n=a.payload.searchValue.toLowerCase())?a.payload.featureDataList.filter((function(e){return e.title.toLowerCase().includes(n)})):a.payload.featureDataList,console.log("filteredValues reducer",r),Object(j.a)(Object(j.a)({},t),{},{featureDataList:a.payload.featureDataList,filteredList:r,isListLoading:!1,isListError:!1,listErrorMessage:"",searchValue:a.payload.searchValue});case"FETCH_FEATURED_DATA_LIST_FAILED":return Object(j.a)(Object(j.a)({},t),{},{featureDataList:[],filteredList:[],isListLoading:!1,isListError:!0,listErrorMessage:null===(e=a.payload)||void 0===e?void 0:e.listErrorMessage,searchValue:""});default:return t}}}),k=a(41),I={carouselData:{carouselDataList:[],featureDataList:[],filteredList:[],totalItems:0,isListLoading:!1,isListError:!1,isListErrorMessage:"",searchValue:""},featureData:{featureDataList:[],filteredList:[],totalItems:0,isListLoading:!1,isListError:!1,isListErrorMessage:"",searchValue:""}};var V=Object(O.d)(w,I,Object(O.a)(k.a,F.a)),N=document.createElement("link");N.rel="stylesheet",document.head.appendChild(N),i.a.render(n.a.createElement(n.a.StrictMode,{className:"app-container"},n.a.createElement(c.a,{store:V},n.a.createElement(C,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.aaacc266.chunk.js.map