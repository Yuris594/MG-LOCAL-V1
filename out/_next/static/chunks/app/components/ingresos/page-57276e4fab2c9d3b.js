(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8968],{66696:function(e,t,n){Promise.resolve().then(n.bind(n,27726))},27726:function(e,t,n){"use strict";n.r(t);var i=n(57437),a=n(31193),r=n(13100),o=n(71733),l=n(79806),s=n(60091),c=n(15656),d=n(28027),u=n(20124),x=n(83719),h=n(23983),f=n(26460),g=n(87138),p=n(64379),m=n.n(p),v=n(66648),j=n(57818),b=n(2265),w=n(1782);let E=(0,j.default)(()=>n.e(3224).then(n.bind(n,93224)),{loadableGenerated:{webpack:()=>[93224]},ssr:!1}),k=(0,j.default)(()=>n.e(7312).then(n.bind(n,57312)),{loadableGenerated:{webpack:()=>[57312]},ssr:!1}),C=()=>{m().fire({title:"\xa1Hora de ENTRADA registrada",icon:"success",confirmButtonText:"Aceptar"})},y=()=>{m().fire({title:"\xa1Hora de SALIDA registrada",icon:"success",confirmButtonText:"Aceptar"})},D=()=>{m().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",confirmButtonText:"Aceptar"})},T=()=>{m().fire({title:"\xa1Espere un momento porfavor,estamos procesando",text:"Si esta muy lento,cancele el proceso y verifique su conexion",icon:"warning",confirmButtonText:"cancelar"})},A=()=>{m().fire({title:"CEDULA no existe!",icon:"error",confirmButtonText:"Aceptar"})},L=async e=>{try{let t=await fetch("http://172.20.20.3:8001/control_entradas/documento/".concat(e),{method:"POST",body:JSON.stringify({cedula:e}),headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Error en la respuesta del servidor");return t.json()}catch(e){return console.error("Error al realizar la peticion",e),null}};t.default=()=>{let e=(0,b.useRef)(null),[t,n]=(0,b.useState)(""),[p,m]=(0,b.useState)(!1),[j,Z]=(0,b.useState)(navigator.onLine);(0,b.useEffect)(()=>{Z(navigator.onLine);let e=()=>Z(!0),t=()=>Z(!1);return window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[]),(0,b.useEffect)(()=>{let e=setTimeout(()=>{m(!0)},500);return()=>{clearTimeout(e)}},[]),(0,b.useEffect)(()=>{let t=setTimeout(()=>{e.current.focus()},100);return()=>{clearTimeout(t)}},[]);let S=async e=>{if(e.preventDefault(),!t){console.info("Por favor, completa todos los campos");return}if(!j){D();return}try{T();let e=await L(t);if(console.log("Datos recibidos:",e),e&&void 0!==e.respuesta)switch(e.respuesta){case"0":n(""),C();break;case"1":n(""),y();break;case"3":n(""),A();break;default:console.warn("Respuesta inesperada:",e.respuesta)}else console.error("Datos no recibidos o respuesta indefinida"),D()}catch(e){console.log("Error al procesar la solicitud:",e)}},N=e=>{let t=e.currentTarget.value;n(e=>e+t)};return(0,i.jsx)(a.default,{className:"login-content",children:(0,i.jsxs)(a.default,{sx:{height:180},children:[(0,i.jsx)(r.Z,{direction:"down",in:p,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsx)(o.Z,{position:"static",sx:{bgcolor:"#262626",height:"80px"},children:(0,i.jsx)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:(0,i.jsx)(s.default,{component:g.default,href:"/",sx:{color:"white"},children:(0,i.jsx)(w.Z,{sx:{fontSize:60,paddingTop:1}})})})})}),(0,i.jsx)(a.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(c.Z,{in:p,children:(0,i.jsxs)(d.Z,{className:"",component:"main",children:[(0,i.jsx)(u.default,{}),(0,i.jsxs)(a.default,{sx:{padding:2},children:[j?(0,i.jsx)(E,{sx:{color:"green"}}):(0,i.jsx)(k,{sx:{color:"red"}}),(0,i.jsx)(x.default,{variant:"h6",noWrap:!0,component:"div",sx:{margin:"5px",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(v.default,{src:"/logo_miguelgomez-bglight.png",width:"120",height:"80",alt:"imagenmg",priority:!0})}),(0,i.jsx)(c.Z,{in:p,style:{transitionDelay:p?"700ms":"0ms"},children:(0,i.jsxs)(a.default,{component:"form",onSubmit:S,noValidate:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,id:"CEDULA",name:"CEDULA",placeholder:"Digite su c\xe9dula",autoComplete:"CEDULA",value:t,onChange:e=>n(e.target.value),inputRef:e,sx:{zoom:2.5}}),(0,i.jsx)(a.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:(0,i.jsx)(s.default,{type:"submit",variant:"contained",color:"success",sx:{width:600,height:100,margin:1,fontSize:30},children:"Enviar"})}),(0,i.jsxs)(a.default,{sx:{zoom:4.1},children:[(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:1,onClick:N,children:"1"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:4,onClick:N,children:"4"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:7,onClick:N,children:"7"})]}),(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:2,onClick:N,children:"2"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:5,onClick:N,children:"5"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:8,onClick:N,children:"8"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:N,children:"0"})]}),(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:3,onClick:N,children:"3"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:6,onClick:N,children:"6"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:9,onClick:N,children:"9"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%",bgcolor:"#ff615b",color:"black"},onClick:()=>{n(e=>e.slice(0,-1))},children:"X"})]})]})]})})]})]})})})]})})}}},function(e){e.O(0,[9461,4797,4129,6291,4275,3983,2561,6648,712,7745,2971,7023,1744],function(){return e(e.s=66696)}),_N_E=e.O()}]);