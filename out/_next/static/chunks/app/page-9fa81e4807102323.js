(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{44887:function(e,t,n){Promise.resolve().then(n.bind(n,9960))},9960:function(e,t,n){"use strict";n.r(t),n.d(t,{Copyright:function(){return b},default:function(){return I}});var r=n(57437),a=n(83719),o=n(31193),s=n(13100),i=n(71733),l=n(79806),u=n(60091),c=n(15656),d=n(48801),x=n(20124),h=n(23983),f=n(25774),m=n(24563),g=n(11810),p=n(19490),j=n(85800),v=n(16463),S=n(27270),y=n(2265),C=n(66648),w=n(87138);let Z=y.forwardRef(function(e,t){return(0,r.jsx)(S.Z,{elevation:6,ref:t,variant:"filled",...e})});function b(e){return(0,r.jsxs)(a.default,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Departamento de Sistemas - ",new Date().getFullYear(),"."]})}let E=async(e,t)=>{try{let n=await fetch("http://172.20.20.3:8001/usuarios/listar/".concat(e,"/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}),r=await n.json();if(!n.ok||!r||(r.length,0))return{error:"Usuario o Clave incorrecta"};return r}catch(e){return console.error("Error en la petici\xf3n: ",e),{error:"Error en la conexi\xf3n"}}};function I(){let e=(0,v.useRouter)(),{login:t,auth:n}=(0,j.a)(),[S,I]=(0,y.useState)(),[N,O]=(0,y.useState)(""),[k,_]=(0,y.useState)(!1),[D,J]=(0,y.useState)(!1),[T,W]=(0,y.useState)(!1),[P,R]=(0,y.useState)(""),U=async n=>{n.preventDefault();let r=await E(P,N);r.error?(W(!0),J(!0),console.log("Error",r.error)):(localStorage.setItem("usuarios",JSON.stringify(r)),_(!0),I(!0),t(r),e.push("../start"))},z=e=>{"clicaway"!==e&&_(!1)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.default,{sx:{height:180},children:[(0,r.jsx)(s.Z,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsx)(i.Z,{position:"static",sx:{bgcolor:"#262626",height:"80px"},children:(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,r.jsx)(a.default,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,marginLeft:"10px"},children:" "}),(0,r.jsx)(u.default,{component:w.default,href:"/components/ingresos",sx:{color:"white"},title:"Control de entredas y salidas de los empleados",children:(0,r.jsx)(m.Z,{sx:{fontSize:40}})})]})})}),(0,r.jsx)(o.default,{sx:{zoom:1.2},children:(0,r.jsx)(c.Z,{in:!0,children:(0,r.jsxs)(d.default,{className:"login",component:"main",maxWidth:"xs",children:[(0,r.jsx)(x.default,{}),(0,r.jsxs)(o.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",height:"auto"},children:[(0,r.jsx)(a.default,{variant:"h6",noWrap:!0,component:"div",sx:{margin:2},children:(0,r.jsx)(C.default,{className:"logo",src:"/logo_miguelgomez.png",width:"230",height:"230",alt:"Logo",priority:!0})}),"saved"==S?(0,r.jsx)(p.Z,{sx:{color:"green"}}):"","error"==S?(0,r.jsx)(g.Z,{sx:{color:"red"}}):"",(0,r.jsxs)(o.default,{component:"form",noValidate:!0,onSubmit:U,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(h.Z,{error:T,id:"usuario",label:"Usuario",margin:"normal",fullWidth:!0,name:"PER_Usuario",value:P,onChange:e=>R(e.target.value)}),(0,r.jsx)(h.Z,{error:T,margin:"normal",required:!0,fullWidth:!0,type:"password",name:"PER_Clave",id:"contrase\xf1a",label:"Contrase\xf1a",value:N,onChange:e=>O(e.target.value)}),(0,r.jsx)(u.default,{type:"submit",variant:"contained",color:"success",sx:{marginTop:2,display:"flex",justifyContent:"center",alignItems:"center",minWidth:398},children:"Iniciar sesi\xf3n"})]}),k?(0,r.jsx)(f.Z,{open:k,autoHideDuration:6e3,onClose:z,children:(0,r.jsx)(Z,{onClose:z,variant:"outlined",severity:"success",sx:{width:"100%"},children:"Usuario identificado."})}):"",D?(0,r.jsx)(f.Z,{open:D,autoHideDuration:6e3,onClose:z,children:(0,r.jsx)(Z,{onClose:z,variant:"outlined",severity:"error",sx:{width:"100%"},children:"El usuario o la contrase\xf1a son incorrectos."})}):""]}),(0,r.jsx)(b,{sx:{mt:5,mb:5}})]})})})]})})}},85800:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return i},a:function(){return l}});var r=n(57437),a=n(2265),o=n(44785);let s=(0,a.createContext)({login:e=>{},logout:()=>{}}),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)(null),[l,u]=(0,a.useState)({}),[c,d]=(0,a.useState)({}),[x,h]=(0,a.useState)({}),[f]=(0,a.useState)(!0),m=(0,a.useCallback)(function(e){o.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),i(e)},[]),g=(0,a.useCallback)(function(){o.Z.remove("authTokens"),localStorage.removeItem("auth"),i(null)},[]);(0,a.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),n=localStorage.getItem("pedido"),r=localStorage.getItem("caja");e&&i(JSON.parse(e)),t&&u(JSON.parse(t)),n&&d(JSON.parse(n)),r&&h(JSON.parse(r))},[]);let p=(0,a.useMemo)(()=>({auth:n,cliente:l,setCliente:u,pedido:c,setPedido:d,caja:x,setCaja:h,loading:f,login:m,logout:g}),[n,l,c,x,m,g]);return(0,r.jsx)(s.Provider,{value:p,children:t})},l=()=>(0,a.useContext)(s)}},function(e){e.O(0,[4797,4129,6291,4275,3983,2561,7734,6648,712,1842,2971,7023,1744],function(){return e(e.s=44887)}),_N_E=e.O()}]);