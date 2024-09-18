(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8968],{66696:function(e,t,n){Promise.resolve().then(n.bind(n,27726))},27726:function(e,t,n){"use strict";n.r(t);var i=n(57437),r=n(24732),o=n(31193),a=n(13100),l=n(71733),s=n(79806),c=n(60091),d=n(20124),u=n(14446),x=n(48801),h=n(15656),f=n(28027),p=n(83719),g=n(23983),m=n(26460),v=n(87138),b=n(64379),j=n.n(b),w=n(66648),C=n(57818),k=n(2265),E=n(1782);let y=(0,C.default)(()=>n.e(3224).then(n.bind(n,93224)),{loadableGenerated:{webpack:()=>[93224]},ssr:!1}),S=(0,C.default)(()=>n.e(7312).then(n.bind(n,57312)),{loadableGenerated:{webpack:()=>[57312]},ssr:!1}),T=(0,r.Z)({components:{MuiTextField:{styleOverrides:{root:{borderRadius:"5px",boxShadow:"0px, 3px, 5px rgba(0,0,0,0.2)"}}},MuiButton:{styleOverrides:{root:{borderRadius:"8px",boxShadow:"0px 3px 5px rgba(0,0,0,0.2)",transition:"0.3s","&:hover":{boxShadow:"0px 5px 10px rgba(0,0,0,0.4)",backgroundColor:"#388e3c"}}}}}}),D=()=>{j().fire({title:"\xa1Hora de ENTRADA registrada",icon:"success",confirmButtonText:"Aceptar"})},A=()=>{j().fire({title:"\xa1Hora de SALIDA registrada",icon:"success",confirmButtonText:"Aceptar"})},L=()=>{j().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",confirmButtonText:"Aceptar"})},Z=()=>{j().fire({title:"\xa1Espere un momento porfavor,estamos procesando",text:"Si esta muy lento,cancele el proceso y verifique su conexion",icon:"warning",confirmButtonText:"cancelar"})},O=()=>{j().fire({title:"CEDULA no existe!",icon:"error",confirmButtonText:"Aceptar"})},_=async e=>{try{let t=await fetch("/api/control_entradas/documento/".concat(e),{method:"POST",body:JSON.stringify({cedula:e}),headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Error en la respuesta del servidor");return t.json()}catch(e){return console.error("Error al realizar la peticion",e),null}};t.default=()=>{let e=(0,k.useRef)(null),[t,n]=(0,k.useState)(""),[r,b]=(0,k.useState)(!1),[j,C]=(0,k.useState)(navigator.onLine);(0,k.useEffect)(()=>{C(navigator.onLine);let e=()=>C(!0),t=()=>C(!1);return window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[]),(0,k.useEffect)(()=>{let e=setTimeout(()=>{b(!0)},500);return()=>{clearTimeout(e)}},[]),(0,k.useEffect)(()=>{let t=setTimeout(()=>{e.current.focus()},100);return()=>{clearTimeout(t)}},[]);let N=async e=>{if(e.preventDefault(),!t){console.info("Por favor, completa todos los campos");return}if(!j){L();return}try{Z();let e=await _(t);if(console.log("Datos recibidos:",e),e&&void 0!==e.respuesta)switch(e.respuesta){case"0":n(""),D();break;case"1":n(""),A();break;case"3":n(""),O();break;default:console.warn("Respuesta inesperada:",e.respuesta)}else console.error("Datos no recibidos o respuesta indefinida"),L()}catch(e){console.log("Error al procesar la solicitud:",e)}},R=e=>{let t=e.currentTarget.value;n(e=>e+t)};return(0,i.jsxs)(o.default,{sx:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(a.Z,{direction:"down",in:r,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsx)(l.Z,{position:"static",sx:{bgcolor:"#262626",height:"80px"},children:(0,i.jsx)(s.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:(0,i.jsx)(c.default,{component:v.default,href:"/",sx:{color:"white"},children:(0,i.jsx)(E.Z,{sx:{fontSize:60,paddingTop:1}})})})})}),(0,i.jsx)(d.default,{}),(0,i.jsx)(u.default,{theme:T,children:(0,i.jsx)(x.default,{component:"main",maxWidth:"sm",sx:{backgroundColor:"#ffffff",padding:5,borderRadius:2,boxShadow:"0px 5px 15px rgba(0,0,0,0.3)",marginTop:8,fontSize:"1.5rem"},children:(0,i.jsx)(o.default,{sx:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(h.Z,{in:r,children:(0,i.jsx)(f.Z,{className:"",component:"main",children:(0,i.jsxs)(o.default,{sx:{padding:2},children:[j?(0,i.jsx)(y,{sx:{color:"green"}}):(0,i.jsx)(S,{sx:{color:"red"}}),(0,i.jsx)(p.default,{variant:"h6",noWrap:!0,component:"div",sx:{mb:2,display:"flex",justifyContent:"center"},children:(0,i.jsx)(w.default,{src:"/logo_miguelgomez-bglight.png",width:"120",height:"80",alt:"imagenmg",priority:!0})}),(0,i.jsxs)(o.default,{component:"form",onSubmit:N,noValidate:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"CEDULA",name:"CEDULA",placeholder:"Digite su c\xe9dula",autoComplete:"CEDULA",value:t,onChange:e=>n(e.target.value),inputRef:e,sx:{width:"100%",mb:2,fontSize:"2rem",padding:2,height:"60px",boxSizing:"border-box"}}),(0,i.jsx)(c.default,{type:"submit",variant:"contained",color:"success",sx:{width:"88%",mb:2,padding:2,height:"50px"},children:"Enviar"})]}),(0,i.jsxs)(o.default,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"100%"},children:[(0,i.jsxs)(m.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:1,onClick:R,children:"1"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:4,onClick:R,children:"4"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:7,onClick:R,children:"7"})]}),(0,i.jsxs)(m.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:2,onClick:R,children:"2"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:5,onClick:R,children:"5"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:8,onClick:R,children:"8"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:R,children:"0"})]}),(0,i.jsxs)(m.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:3,onClick:R,children:"3"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:6,onClick:R,children:"6"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%"},value:9,onClick:R,children:"9"}),(0,i.jsx)(c.default,{variant:"outlined",sx:{height:"100%",bgcolor:"#ff615b",color:"black"},onClick:()=>{n(e=>e.slice(0,-1))},children:"X"})]})]})]})})})})})})]})}}},function(e){e.O(0,[9461,4797,4129,6291,4275,3983,2561,6648,6461,7931,1417,2971,7023,1744],function(){return e(e.s=66696)}),_N_E=e.O()}]);