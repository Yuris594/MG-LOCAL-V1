(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{44887:function(e,t,n){Promise.resolve().then(n.bind(n,9960))},9960:function(e,t,n){"use strict";n.r(t),n.d(t,{Copyright:function(){return b},default:function(){return P}});var r=n(57437),o=n(83719),s=n(25774),a=n(31193),i=n(13100),l=n(71733),c=n(79806),u=n(60091),d=n(15656),f=n(48801),x=n(20124),h=n(23983),m=n(24563),g=n(11810),p=n(19490),j=n(42716),v=n(16463),y=n(27270),S=n(39987),E=n(2265),w=n(66648),C=n(87138),Z=n(15408);n(85935);let _=E.forwardRef(function(e,t){return(0,r.jsx)(y.Z,{elevation:6,ref:t,variant:"filled",...e})});function b(e){return(0,r.jsxs)(o.default,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Departamento de Sistemas ",new Date().getFullYear(),"."]})}function P(){let e=(0,v.useRouter)(),{setAuth:t}=(0,S.Z)(),[n,y]=(0,E.useState)(),[P,N]=(0,E.useState)(),[O,T]=(0,E.useState)(),{form:I,changed:R}=(0,j.c)({}),[U,D]=(0,E.useState)(!1);!1==U&&setTimeout(()=>{D(!0)},500);let J=async n=>{n.preventDefault();let r=I.PER_Usuario,o=I.PER_Clave;if(!I.PER_Usuario||!I.PER_Clave){console.info("Por favor, completa todos los campos");return}try{let{datos:n}=await (0,Z.Z)("/api/usuarios/listar/".concat(r,"/").concat(o),"GET");console.log("Usuario recibido: ",n),n?(console.log("Usuario existe y las credenciales son correctas"),localStorage.setItem("usuarios",JSON.stringify(n)),T("saved"),N(!1),y(!0),setTimeout(()=>{t(n),window.location.reload()},1e3),e.push("../../start")):(N(!0),T("error"),console.log("Usuario no existe"))}catch(e){console.error("Error en la peticipon: ",e)}},W=e=>{"clicaway"!==e&&y(!1)};return(0,r.jsxs)(r.Fragment,{children:[n?(0,r.jsx)(s.Z,{open:n,autoHideDuration:6e3,onClose:W,children:(0,r.jsx)(_,{onClose:W,variant:"outlined",severity:"success",sx:{width:"100%"},children:"Usuario identificado."})}):"",P?(0,r.jsx)(s.Z,{open:P,autoHideDuration:6e3,onClose:W,children:(0,r.jsx)(_,{onClose:W,variant:"outlined",severity:"error",sx:{width:"100%"},children:"El usuario o la contrase\xf1a son incorrectos."})}):"",(0,r.jsxs)(a.default,{sx:{height:180},children:[(0,r.jsx)(i.Z,{direction:"down",in:U,mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsx)(l.Z,{position:"static",sx:{bgcolor:"#262626",height:"80px"},children:(0,r.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,r.jsx)(o.default,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,marginLeft:"10px"},children:" "}),(0,r.jsx)(u.default,{component:C.default,href:"/components/ingresos",sx:{color:"white"},title:"Control de entredas y salidas de los empleados",children:(0,r.jsx)(m.Z,{sx:{fontSize:40}})})]})})}),(0,r.jsx)(a.default,{sx:{zoom:1.2},children:(0,r.jsx)(d.Z,{in:U,children:(0,r.jsxs)(f.default,{className:"login",component:"main",maxWidth:"xs",children:[(0,r.jsx)(x.default,{}),(0,r.jsxs)(a.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",height:"auto"},children:[(0,r.jsx)(o.default,{variant:"h6",noWrap:!0,component:"div",sx:{margin:2},children:(0,r.jsx)(w.default,{className:"logo",src:"/img/logo_miguelgomez.png",width:"230",height:"230",alt:"Logo",priority:!0})}),"saved"==O?(0,r.jsx)(p.Z,{sx:{color:"green"}}):"","error"==O?(0,r.jsx)(g.Z,{sx:{color:"red"}}):"",(0,r.jsx)(d.Z,{in:U,style:{transitionDelay:U?"700ms":"0ms"},children:(0,r.jsxs)(a.default,{component:"form",onSubmit:J,noValidate:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(h.Z,{error:"error"==O,id:"usuario",label:"Usuario",margin:"normal",fullWidth:!0,name:"PER_Usuario",value:I.PER_Usuario||"",onChange:R}),(0,r.jsx)(o.default,{component:"h1",variant:"h6"}),(0,r.jsx)(h.Z,{error:"error"==O,margin:"normal",required:!0,fullWidth:!0,type:"password",name:"PER_Clave",id:"contrase\xf1a",label:"Contrase\xf1a",value:I.PER_Clave||"",onChange:R}),(0,r.jsx)(u.default,{type:"submit",variant:"contained",color:"success",sx:{marginTop:2,display:"flex",justifyContent:"center",alignItems:"center",minWidth:398},children:"Iniciar sesi\xf3n"})]})})]}),(0,r.jsx)(b,{sx:{mt:5,mb:5}})]})})})]})]})}},39987:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(85800),o=n(2265);let s=()=>(0,o.useContext)(r.default);t.Z=s},42716:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(2265);let o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,r.useState)(e);return{form:t,changed:e=>{let{name:r,value:o}=e.target;n({...t,[r]:o})},setForm:n}}},85935:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});let r={url:"http://172.20.20.3:8001"}},15408:function(e,t){"use strict";let n=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0;try{let o=!0,s={method:"GET"};("GET"===t||"DELETE"===t)&&(s={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(n),r?s={method:t,body:n}:s.body=JSON.stringify(n));let a=await fetch(e,s);if(!a.ok)return{error:"Error en la solicitud Fetch",status:a.status,cargando:!1};let i=await a.json();return o=!1,{datos:i,cargando:o}}catch(e){return{datos:null,cargando:!1}}};t.Z=n},85800:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return a}});var r=n(57437),o=n(2265);let s=(0,o.createContext)(),a=e=>{let{children:t}=e,[n,a]=(0,o.useState)({}),[i,l]=(0,o.useState)({}),[c,u]=(0,o.useState)({}),[d,f]=(0,o.useState)({}),[x,h]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),n=localStorage.getItem("pedidoTemp"),r=localStorage.getItem("caja");e&&a(JSON.parse(e)),t&&l(JSON.parse(t)),n&&u(JSON.parse(n)),r&&f(JSON.parse(r))},[]),(0,r.jsx)(s.Provider,{value:{auth:n,setAuth:a,cliente:i,setCliente:l,pedido:c,setPedido:u,caja:d,setCaja:f,loading:x},children:t})};t.default=s}},function(e){e.O(0,[4797,4129,6291,2561,4275,3983,6540,8249,6648,7762,2971,7023,1744],function(){return e(e.s=44887)}),_N_E=e.O()}]);