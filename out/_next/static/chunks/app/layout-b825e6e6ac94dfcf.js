(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{46435:function(e,n,o){Promise.resolve().then(o.bind(o,20124)),Promise.resolve().then(o.bind(o,48024)),Promise.resolve().then(o.bind(o,14446)),Promise.resolve().then(o.bind(o,6110)),Promise.resolve().then(o.bind(o,22960)),Promise.resolve().then(o.bind(o,69281)),Promise.resolve().then(o.bind(o,26003)),Promise.resolve().then(o.bind(o,92774)),Promise.resolve().then(o.bind(o,81285)),Promise.resolve().then(o.bind(o,27063)),Promise.resolve().then(o.bind(o,5748)),Promise.resolve().then(o.bind(o,71866)),Promise.resolve().then(o.bind(o,6552)),Promise.resolve().then(o.bind(o,72875)),Promise.resolve().then(o.bind(o,2251)),Promise.resolve().then(o.bind(o,19671)),Promise.resolve().then(o.bind(o,79647)),Promise.resolve().then(o.bind(o,41661)),Promise.resolve().then(o.bind(o,13820)),Promise.resolve().then(o.bind(o,22739)),Promise.resolve().then(o.bind(o,71519)),Promise.resolve().then(o.bind(o,13815)),Promise.resolve().then(o.bind(o,45590)),Promise.resolve().then(o.bind(o,7740)),Promise.resolve().then(o.bind(o,80292)),Promise.resolve().then(o.bind(o,98553)),Promise.resolve().then(o.bind(o,11105)),Promise.resolve().then(o.bind(o,73331)),Promise.resolve().then(o.bind(o,70608)),Promise.resolve().then(o.bind(o,63811)),Promise.resolve().then(o.t.bind(o,8385,23)),Promise.resolve().then(o.t.bind(o,53054,23)),Promise.resolve().then(o.bind(o,29775)),Promise.resolve().then(o.bind(o,85800))},29775:function(e,n,o){"use strict";let t=(0,o(24732).Z)({breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}},palette:{primary:{main:"#00796b"},secondary:{main:"#9bddcd"},background:{default:"#fff"}},typography:{fontFamily:"Roboto, Arial, san-serif"},fontSize:25});n.default=t},85800:function(e,n,o){"use strict";o.d(n,{AuthProvider:function(){return l},a:function(){return a}});var t=o(57437),r=o(2265),s=o(44785);let i=(0,r.createContext)({login:e=>{},logout:()=>{}}),l=e=>{let{children:n}=e,[o,l]=(0,r.useState)(null),[a,m]=(0,r.useState)({}),[d,h]=(0,r.useState)({}),[b,u]=(0,r.useState)({}),[v]=(0,r.useState)(!0),P=(0,r.useCallback)(function(e){s.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),l(e)},[]),c=(0,r.useCallback)(function(){s.Z.remove("authTokens"),localStorage.removeItem("auth"),l(null)},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth"),n=localStorage.getItem("cliente"),o=localStorage.getItem("pedido"),t=localStorage.getItem("caja");e&&l(JSON.parse(e)),n&&m(JSON.parse(n)),o&&h(JSON.parse(o)),t&&u(JSON.parse(t))},[]);let f=(0,r.useMemo)(()=>({auth:o,cliente:a,setCliente:m,pedido:d,setPedido:h,caja:b,setCaja:u,loading:v,login:P,logout:c}),[o,a,d,b,P,c]);return(0,t.jsx)(i.Provider,{value:f,children:n})},a=()=>(0,r.useContext)(i)},53054:function(){}},function(e){e.O(0,[3151,4797,6461,2976,2971,7023,1744],function(){return e(e.s=46435)}),_N_E=e.O()}]);