(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2260],{16253:function(e,t,l){Promise.resolve().then(l.bind(l,77727))},77727:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(31193),n=l(83719),r=l(14595),o=l(60091),s=l(28027),d=l(32184),c=l(57300),u=l(47905),x=l(7547),h=l(60335),f=l(26460),p=l(62501),g=l(67622),j=l(2265),m=l(87138),C=l(5152),v=l(13726),b=l(39987);let S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=()=>{let[e]=(0,j.useState)([]),[t,l]=(0,j.useState)(0),[k,w]=(0,j.useState)(0),[E,N]=(0,j.useState)(!1),[y,Z]=(0,j.useState)(0),[I,O]=(0,j.useState)(""),{caja:L,setCaja:T,cliente:R}=(0,b.Z)(),[D,A]=(0,j.useState)(0),[B,P]=(0,j.useState)(0);(0,j.useEffect)(()=>{let e=e=>{let t=e.keyCode||e.which;if(t>=48&&t<=57||13===t){let e;0===B?e=Z:1===B?e=l:2===B&&A(L.total),e&&e(e=>0===e?String.fromCharCode(t):e+String.fromCharCode(t))}},t=e=>{8===(e.keyCode||e.which)&&F()};return document.addEventListener("keypress",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("keypress",e),document.removeEventListener("keydown",t)}},[y,B]),(0,j.useEffect)(()=>{let l=[...e,{dinero:y},{dinero:t}].reduce((e,t)=>e+parseInt(t.dinero),0),a=L.total,i=parseInt(a.replace(/\./g,""));if(a===D){if(isNaN(D)||isNaN(i))O(0),w(0);else{let e=i-i,t=i-i;O(e>=0?e:0),w(t>=0?t:0)}}else if(isNaN(l)||isNaN(i))O(0),w(0);else{let e=i-l,t=l-i;console.log("Restante"+e),console.log("Restante"+t),O(e>=0?e:0),w(t>=0?t:0)}},[y,t,D,B]);let M=(e,t)=>{2===t&&A(L.total),P(t)},z=e=>{let t;let a=e.currentTarget.value;0===B?t=Z:1===B?t=l:2===B&&A(L.total),t&&t(e=>0===e?a:e+a)},F=()=>{let e;0===B?e=Z:1===B?e=l:2===B&&A(0),e&&e(e=>e.length>1?e.slice(0,-1):0)},J=e=>{let t;let a=parseInt(e.currentTarget.value);0===a?t=Z:1===a?t=l:2===a&&(t=A),t&&t(e=>e.length>10?e.slice(0,-1):0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.default,{marginBottom:"50px",children:["  ",(0,a.jsx)(v.Z,{})," "]}),(0,a.jsxs)(i.default,{sx:{width:"auto",height:"auto",display:"auto",justifyContent:"center",margin:"10%",alignItems:"center",padding:"auto"},children:[(0,a.jsx)(n.default,{sx:{fontSize:50,alignItems:"center",justifyContent:"center"},gutterBottom:!0,children:" PAGO "}),(0,a.jsx)(r.default,{}),(0,a.jsx)(o.default,{component:m.default,variant:"outlined",href:"../pedidos/pedidosCaja",sx:{margin:"2px",bgcolor:"#B0DDFF",color:"black"},onClick:()=>{localStorage.removeItem("pago"),T({})},children:"Atras"}),(0,a.jsxs)(s.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(s.default,{sx:{width:"100%",bgcolor:"background"},children:[(0,a.jsx)(s.default,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(n.default,{sx:{fontSize:17},color:"primary",gutterBottom:!0,children:"Metodo de Pago"})}),(0,a.jsx)(s.default,{children:(0,a.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,a.jsx)(c.Z,{selected:0===B,onClick:e=>M(e,0),children:(0,a.jsx)(u.Z,{primary:"Efectivo"})}),(0,a.jsx)(c.Z,{selected:1===B,onClick:e=>M(e,1),children:(0,a.jsx)(u.Z,{primary:"Banco"})}),(0,a.jsx)(c.Z,{selected:2===B,onClick:e=>M(e,2),children:(0,a.jsx)(u.Z,{primary:"Cuenta Cliente"})})]})}),(0,a.jsx)(s.default,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(n.default,{sx:{fontSize:17,marginBottom:1},color:"primary",gutterBottom:!0,children:"Resumen"})}),(0,a.jsxs)(s.default,{children:[(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.default,{value:0,onClick:J,edge:"end: ","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Efectivo:  ".concat(y.toLocaleString("es"))})}),(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.default,{value:1,onClick:J,edge:"end","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Banco:   "+t.toLocaleString("es")})}),(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.default,{value:2,onClick:J,edge:"end","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Cuenta Cliente: "+D.toLocaleString("es")})})]}),(0,a.jsx)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:0,width:"100%",height:"100%"},children:(0,a.jsx)(o.default,{component:m.default,href:"../pedidos/ReciboCaja",variant:"outlined",onClick:()=>{let l=[...e,{efectivo:y},{banco:t},{cuentaCliente:D}],a=JSON.parse(localStorage.getItem("pago"))||{};a.cliente=R,a.tipoPago=l,a.cambio=k,localStorage.setItem("pago",JSON.stringify(a)),T(a)},sx:{width:"100%",height:250,backgroundColor:0===I?"#087ea6":"transparent",color:0===I?"white":"black"},children:"Validar"})})]}),(0,a.jsxs)(s.default,{sx:{display:"flex",flexDirection:"column",width:"50%"},children:[(0,a.jsx)(i.default,{sx:{display:"flex",flexDirection:"column",zoom:2,width:"auto"},children:(0,a.jsxs)(f.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Cambio: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",k.toLocaleString("es")," "]})]}),(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Restante: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",I.toLocaleString("es")," "]})]}),(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Total: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",L.total," "]})]})]})}),(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",width:"100%",height:"100%",zoom:1.5},children:[(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:1,onClick:z,children:"1"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:4,onClick:z,children:"4"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:7,onClick:z,children:"7"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:z,children:"+/-"})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:2,onClick:z,children:"2"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:5,onClick:z,children:"5"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:8,onClick:z,children:"8"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:z,children:"0"})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:3,onClick:z,children:"3"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:6,onClick:z,children:"6"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:9,onClick:z,children:"9"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:",",onClick:z,children:","})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:10,onClick:z,children:"+10"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:20,onClick:z,children:"+20"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:50,onClick:z,children:"+50"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},onClick:F,children:"X"})]})]})]}),(0,a.jsxs)(s.default,{sx:{width:"20%",bgcolor:"background.paper"},children:[(0,a.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",sx:{marginTop:-47},children:[(0,a.jsx)(c.Z,{selected:3===B,onClick:()=>N(!0),children:(0,a.jsx)(u.Z,{primary:"Cliente: ".concat(R.NOMBREALIAS)})}),(0,a.jsx)(c.Z,{selected:4===B,onClick:e=>M(e,4),children:(0,a.jsx)(u.Z,{primary:"Factura"})})]}),(0,a.jsx)(p.Z,{open:E,onClose:()=>N(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(i.default,{sx:S,children:(0,a.jsx)(C.default,{setOpen:N})})})]})]})]})]})}},5152:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(2265),n=l(77699),r=l(60335),o=l(83719),s=l(74275),d=l(52610),c=l(60091),u=l(28027),x=l(15656),h=l(31193);l(87138);var f=l(39987),p=l(15408);l(85935);let g=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}];t.default=e=>{let{setOpen:t}=e,{setCliente:l}=(0,f.Z)(),[j,m]=(0,i.useState)(),[C,v]=(0,i.useState)(""),[b,S]=(0,i.useState)(!1),[k,w]=(0,i.useState)([]),[E,N]=(0,i.useState)([]);(0,i.useEffect)(()=>{y()},[]);let y=async()=>{try{let{datos:e}=await (0,p.Z)("/api/clientes/listar","GET");e&&(m(e),w(e)),setTimeout(()=>{S(!0)},100)}catch(e){console.log("Error al obtener los datos",e)}},Z=(0,i.useMemo)(()=>y,[]);(0,i.useEffect)(()=>{Z()},[Z]);let I=e=>{m(k.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),i=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))?t:null}))},O=(0,i.useCallback)(e=>{if(N(e),e.length>0){let a=k.filter(t=>{let l=t.CLIENTE;return!!l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),l(a[0]),t(!1)}},[j]);return setTimeout(()=>{S(!0)},100),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,a.jsx)(o.default,{variant:"h",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"CLIENTES"}),(0,a.jsxs)(h.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsx)(c.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"}),(0,a.jsxs)(u.default,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:650,margin:"0%"},children:[(0,a.jsx)(s.default,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:C,onChange:e=>{e.preventDefault(),v(e.target.value),I(e.target.value)}}),(0,a.jsx)(r.default,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(n.default,{})})]})]}),(0,a.jsx)(x.Z,{in:b,children:(0,a.jsx)(h.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#0a0a0a",color:"#fff"}},children:(0,a.jsx)(d._,{rows:j,columns:g,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],onRowSelectionModelChange:O,rowSelectionModel:E,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})})}},13726:function(e,t,l){"use strict";l.d(t,{Z:function(){return B}});var a=l(57437),i=l(20124),n=l(31193),r=l(71733),o=l(79806),s=l(60335),d=l(60091),c=l(83719),u=l(62501),x=l(6291),h=l(11656),f=l(85465),p=l(66325),g=l(90922),j=l(26032),m=l(55693),C=l(42188),v=l(66299),b=l(78457),S=l(21704),k=l(66246),w=l(9504),E=l(16463),N=l(39987),y=l(2265),Z=l(32184),I=l(7547),O=l(57300),L=l(86917),T=l(47905),R=l(87138),D=e=>{let{page:t}=e;return(0,a.jsx)(n.default,{sx:{width:250},children:(0,a.jsx)("nav",{children:(0,a.jsx)(Z.Z,{children:t.map(e=>(0,a.jsx)(I.ZP,{disablePadding:!0,children:(0,a.jsxs)(O.Z,{LinkComponent:R.default,href:e.url,onClick:e.onClick,children:[(0,a.jsx)(L.Z,{children:e.icon}),(0,a.jsx)(T.Z,{children:e.title})]})},e.title))})})})};let A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var B=()=>{let e=(0,E.useRouter)(),{auth:t}=(0,N.Z)(),[l,Z]=(0,y.useState)(!1),[I,O]=(0,y.useState)(null),[L,T]=(0,y.useState)(!1),[B,P]=(0,y.useState)(null),M=()=>{T(!1),O(null)},z=[{title:"USUARIOS ",url:"../../usuarios",icon:(0,a.jsx)(p.Z,{})},{title:"PEDIDOS",url:"../../pedidos",icon:(0,a.jsx)(g.Z,{})},{title:"CLIENTES",url:"../../clients",icon:(0,a.jsx)(j.Z,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(m.Z,{}),onClick:e=>{T(!0),O(e.currentTarget)}},{title:"FACTURAS",url:"../../facturas",icon:(0,a.jsx)(C.Z,{})},{title:"CAJA",url:"../../pedidos/pedidosCaja",icon:(0,a.jsx)(v.Z,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),(0,a.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,a.jsx)(r.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.default,{color:"inherit",size:"large",onClick:e=>{P(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(w.default,{})}),(0,a.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:z.map(e=>(0,a.jsx)(d.default,{color:"inherit",LinkComponent:R.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(d.default,{component:R.default,href:"/start",color:"inherit",children:(0,a.jsx)(k.Z,{})}),(0,a.jsxs)(d.default,{color:"inherit",children:[(0,a.jsx)(S.Z,{}),t.PER_Nom]}),(0,a.jsx)(d.default,{color:"inherit",onClick:()=>Z(!0),children:(0,a.jsx)(b.Z,{})})]})}),(0,a.jsx)(u.Z,{open:l,onClose:()=>Z(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(n.default,{sx:A,children:[(0,a.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,a.jsx)(n.default,{children:(0,a.jsx)(d.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{e.push("/")},children:"SALIR"})})]})}),(0,a.jsxs)(x.Z,{id:"basic-menu",anchorEl:I,open:L,onClose:M,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(h.Z,{onClick:M,component:R.default,href:"../../productos",children:"Productos Por Bodega"}),(0,a.jsx)(h.Z,{onClick:M,component:R.default,href:"../../productosMG",children:"Productos-MG"})]}),(0,a.jsx)(f.ZP,{open:!!B,onClose:()=>{P(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(D,{page:z})})]})]})}},39987:function(e,t,l){"use strict";l.d(t,{a:function(){return n}});var a=l(85800),i=l(2265);let n=()=>(0,i.useContext)(a.default);t.Z=n},85935:function(e,t,l){"use strict";l.d(t,{x:function(){return a}});let a={url:"http://172.20.20.3:8001"}},15408:function(e,t){"use strict";let l=async function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0;try{let i=!0,n={method:"GET"};("GET"===t||"DELETE"===t)&&(n={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(l),a?n={method:t,body:l}:n.body=JSON.stringify(l));let r=await fetch(e,n);if(!r.ok)return{error:"Error en la solicitud Fetch",status:r.status,cargando:!1};let o=await r.json();return i=!1,{datos:o,cargando:i}}catch(e){return{datos:null,cargando:!1}}};t.Z=l},85800:function(e,t,l){"use strict";l.d(t,{AuthProvider:function(){return r}});var a=l(57437),i=l(2265);let n=(0,i.createContext)(),r=e=>{let{children:t}=e,[l,r]=(0,i.useState)({}),[o,s]=(0,i.useState)({}),[d,c]=(0,i.useState)({}),[u,x]=(0,i.useState)({}),[h,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),l=localStorage.getItem("pedidoTemp"),a=localStorage.getItem("caja");e&&r(JSON.parse(e)),t&&s(JSON.parse(t)),l&&c(JSON.parse(l)),a&&x(JSON.parse(a))},[]),(0,a.jsx)(n.Provider,{value:{auth:l,setAuth:r,cliente:o,setCliente:s,pedido:d,setPedido:c,caja:u,setCaja:x,loading:h},children:t})};t.default=n}},function(e){e.O(0,[4797,4129,6291,2561,4275,3983,6540,1878,4486,2610,7641,2971,7023,1744],function(){return e(e.s=16253)}),_N_E=e.O()}]);