(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1205],{55867:function(e,t,l){Promise.resolve().then(l.bind(l,71194))},13726:function(e,t,l){"use strict";l.d(t,{Z:function(){return A}});var a=l(57437),i=l(20124),n=l(31193),r=l(71733),o=l(79806),s=l(60335),d=l(60091),c=l(83719),u=l(62501),x=l(6291),h=l(11656),f=l(66325),p=l(90922),g=l(26032),m=l(55693),j=l(42188),C=l(66299),v=l(78457),b=l(21704),S=l(66246),Z=l(9504),k=l(16463),w=l(85800),N=l(2265),y=l(32184),E=l(7547),I=l(57300),O=l(86917),L=l(47905),R=l(87138),T=e=>{let{page:t}=e;return(0,a.jsx)(n.default,{children:(0,a.jsx)(y.Z,{children:t.map(e=>(0,a.jsx)(E.ZP,{disablePadding:!0,children:(0,a.jsxs)(I.Z,{LinkComponent:R.default,href:e.url,onClick:e.onClick,children:[(0,a.jsx)(O.Z,{children:e.icon}),(0,a.jsx)(L.Z,{children:e.title})]})},e.title))})})};let D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var A=()=>{let e=(0,k.useRouter)(),{auth:t,logout:l}=(0,w.a)(),[y,E]=(0,N.useState)(!1),[I,O]=(0,N.useState)(null),[L,A]=(0,N.useState)(!1),B=()=>{A(!1),O(null)},P=[{title:"USUARIOS ",url:"../start/usuarios",icon:(0,a.jsx)(f.Z,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,a.jsx)(p.Z,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,a.jsx)(g.Z,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(m.Z,{}),onClick:e=>{A(!0),O(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(j.Z,{})},{title:"CAJA",url:"../start/pedidos/pedidosCaja",icon:(0,a.jsx)(C.Z,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),(0,a.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,a.jsx)(r.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{color:"inherit",onClick:e=>{O(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(Z.Z,{})}),(0,a.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:P.map(e=>(0,a.jsx)(d.default,{sx:{fontWeight:"bold"},color:"inherit",size:"large",LinkComponent:R.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(d.default,{component:R.default,href:"/start",color:"inherit",children:(0,a.jsx)(S.Z,{})}),(0,a.jsxs)(d.default,{color:"inherit",children:[(0,a.jsx)(b.Z,{}),t&&t.PER_Nom]}),(0,a.jsx)(d.default,{color:"inherit",onClick:()=>E(!0),children:(0,a.jsx)(v.Z,{})})]})}),(0,a.jsx)(u.Z,{open:y,onClose:()=>E(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(n.default,{sx:D,children:[(0,a.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,a.jsx)(n.default,{children:(0,a.jsx)(d.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{l(),e.push("/")},children:"SALIR"})})]})}),(0,a.jsxs)(x.Z,{id:"basic-menu",anchorEl:I,open:L,onClose:B,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(h.Z,{onClick:B,component:R.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,a.jsx)(h.Z,{onClick:B,component:R.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,a.jsx)(x.Z,{id:"basic-menu",anchorEl:I,MenuListProps:{"aria-labelledby":"basic-button"},open:!!I,onClose:()=>{O(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(T,{page:P})})]})]})}},71194:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(31193),n=l(83719),r=l(14595),o=l(60091),s=l(28027),d=l(32184),c=l(57300),u=l(47905),x=l(7547),h=l(60335),f=l(26460),p=l(62501),g=l(67622),m=l(2265),j=l(87138),C=l(61865),v=l(13726),b=l(85800);let S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=()=>{let[e]=(0,m.useState)([]),[t,l]=(0,m.useState)(0),[Z,k]=(0,m.useState)(0),[w,N]=(0,m.useState)(!1),[y,E]=(0,m.useState)(0),[I,O]=(0,m.useState)(""),{caja:L,setCaja:R,cliente:T}=(0,b.a)(),[D,A]=(0,m.useState)(0),[B,P]=(0,m.useState)(0);(0,m.useEffect)(()=>{let e=e=>{let t=e.keyCode||e.which;if(t>=48&&t<=57||13===t){let e;0===B?e=E:1===B?e=l:2===B&&A(L.total),e&&e(e=>0===e?String.fromCharCode(t):e+String.fromCharCode(t))}},t=e=>{8===(e.keyCode||e.which)&&F()};return document.addEventListener("keypress",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("keypress",e),document.removeEventListener("keydown",t)}},[y,B]),(0,m.useEffect)(()=>{let l=[...e,{dinero:y},{dinero:t}].reduce((e,t)=>e+parseInt(t.dinero),0),a=L.total,i=parseInt(a.replace(/\./g,""));if(a===D){if(isNaN(D)||isNaN(i))O(0),k(0);else{let e=i-i,t=i-i;O(e>=0?e:0),k(t>=0?t:0)}}else if(isNaN(l)||isNaN(i))O(0),k(0);else{let e=i-l,t=l-i;console.log("Restante"+e),console.log("Restante"+t),O(e>=0?e:0),k(t>=0?t:0)}},[y,t,D,B]);let M=(e,t)=>{2===t&&A(L.total),P(t)},z=e=>{let t;let a=e.currentTarget.value;0===B?t=E:1===B?t=l:2===B&&A(L.total),t&&t(e=>0===e?a:e+a)},F=()=>{let e;0===B?e=E:1===B?e=l:2===B&&A(0),e&&e(e=>e.length>1?e.slice(0,-1):0)},J=e=>{let t;let a=parseInt(e.currentTarget.value);0===a?t=E:1===a?t=l:2===a&&(t=A),t&&t(e=>e.length>10?e.slice(0,-1):0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.default,{marginBottom:"50px",children:["  ",(0,a.jsx)(v.Z,{})," "]}),(0,a.jsxs)(i.default,{sx:{width:"auto",height:"auto",display:"auto",justifyContent:"center",margin:"10%",alignItems:"center",padding:"auto"},children:[(0,a.jsx)(n.default,{sx:{fontSize:50,alignItems:"center",justifyContent:"center"},gutterBottom:!0,children:" PAGO "}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(o.default,{component:j.default,variant:"outlined",href:"../pedidos/pedidosCaja",sx:{margin:"2px",bgcolor:"#B0DDFF",color:"black"},onClick:()=>{localStorage.removeItem("pago"),R({})},children:"Atras"}),(0,a.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(s.Z,{sx:{width:"100%",bgcolor:"background"},children:[(0,a.jsx)(s.Z,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(n.default,{sx:{fontSize:17},color:"primary",gutterBottom:!0,children:"Metodo de Pago"})}),(0,a.jsx)(s.Z,{children:(0,a.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,a.jsx)(c.Z,{selected:0===B,onClick:e=>M(e,0),children:(0,a.jsx)(u.Z,{primary:"Efectivo"})}),(0,a.jsx)(c.Z,{selected:1===B,onClick:e=>M(e,1),children:(0,a.jsx)(u.Z,{primary:"Banco"})}),(0,a.jsx)(c.Z,{selected:2===B,onClick:e=>M(e,2),children:(0,a.jsx)(u.Z,{primary:"Cuenta Cliente"})})]})}),(0,a.jsx)(s.Z,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(n.default,{sx:{fontSize:17,marginBottom:1},color:"primary",gutterBottom:!0,children:"Resumen"})}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.Z,{value:0,onClick:J,edge:"end: ","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Efectivo:  ".concat(y.toLocaleString("es"))})}),(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.Z,{value:1,onClick:J,edge:"end","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Banco:   "+t.toLocaleString("es")})}),(0,a.jsx)(x.ZP,{secondaryAction:(0,a.jsx)(h.Z,{value:2,onClick:J,edge:"end","aria-label":"delete",children:(0,a.jsx)(g.Z,{})}),children:(0,a.jsx)(u.Z,{primary:"Cuenta Cliente: "+D.toLocaleString("es")})})]}),(0,a.jsx)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:0,width:"100%",height:"100%"},children:(0,a.jsx)(o.default,{component:j.default,href:"../start/pedidos/ReciboCaja",variant:"outlined",onClick:()=>{let l=[...e,{efectivo:y},{banco:t},{cuentaCliente:D}],a=JSON.parse(localStorage.getItem("pago"))||{};a.cliente=T,a.tipoPago=l,a.cambio=Z,localStorage.setItem("pago",JSON.stringify(a)),R(a)},sx:{width:"100%",height:250,backgroundColor:0===I?"#087ea6":"transparent",color:0===I?"white":"black"},children:"Validar"})})]}),(0,a.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",width:"50%"},children:[(0,a.jsx)(i.default,{sx:{display:"flex",flexDirection:"column",zoom:2,width:"auto"},children:(0,a.jsxs)(f.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Cambio: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",Z.toLocaleString("es")," "]})]}),(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Restante: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",I.toLocaleString("es")," "]})]}),(0,a.jsxs)(o.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(n.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Total: $ "}),(0,a.jsxs)(n.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",L.total," "]})]})]})}),(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",width:"100%",height:"100%",zoom:1.5},children:[(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:1,onClick:z,children:"1"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:4,onClick:z,children:"4"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:7,onClick:z,children:"7"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:z,children:"+/-"})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:2,onClick:z,children:"2"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:5,onClick:z,children:"5"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:8,onClick:z,children:"8"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:z,children:"0"})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:3,onClick:z,children:"3"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:6,onClick:z,children:"6"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:9,onClick:z,children:"9"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:",",onClick:z,children:","})]}),(0,a.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:10,onClick:z,children:"+10"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:20,onClick:z,children:"+20"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},value:50,onClick:z,children:"+50"}),(0,a.jsx)(o.default,{variant:"outlined",sx:{height:"100px"},onClick:F,children:"X"})]})]})]}),(0,a.jsxs)(s.Z,{sx:{width:"20%",bgcolor:"background.paper"},children:[(0,a.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",sx:{marginTop:-47},children:[(0,a.jsx)(c.Z,{selected:3===B,onClick:()=>N(!0),children:(0,a.jsx)(u.Z,{primary:"Cliente: ".concat(T.NOMBREALIAS)})}),(0,a.jsx)(c.Z,{selected:4===B,onClick:e=>M(e,4),children:(0,a.jsx)(u.Z,{primary:"Factura"})})]}),(0,a.jsx)(p.Z,{open:w,onClose:()=>N(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(i.default,{sx:S,children:(0,a.jsx)(C.default,{setOpen:N})})})]})]})]})]})}},61865:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(2265),n=l(77699),r=l(60335),o=l(83719),s=l(74275),d=l(85800),c=l(52610),u=l(60091),x=l(28027),h=l(15656),f=l(31193);let p=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],g=async()=>(await fetch("http://172.20.20.3:8001/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}})).json();t.default=e=>{let{setOpen:t}=e,{setCliente:l}=(0,d.a)(),[m,j]=(0,i.useState)(),[C,v]=(0,i.useState)(""),[b,S]=(0,i.useState)(!1),[Z,k]=(0,i.useState)([]),[w,N]=(0,i.useState)([]);(0,i.useEffect)(()=>{y()},[]);let y=async()=>{let e=await g();try{e&&(j(e),k(e)),setTimeout(()=>{S(!0)},100)}catch(e){console.log("Error al obtener los datos",e)}},E=(0,i.useMemo)(()=>y,[]);(0,i.useEffect)(()=>{E()},[E]);let I=e=>{j(Z.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),i=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))?t:null}))},O=(0,i.useCallback)(e=>{if(N(e),e.length>0){let a=Z.filter(t=>{let l=t.CLIENTE;return!!l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),l(a[0]),t(!1)}},[m]);return setTimeout(()=>{S(!0)},100),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,a.jsx)(o.default,{variant:"h",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"CLIENTES"}),(0,a.jsxs)(f.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsx)(u.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"}),(0,a.jsxs)(x.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:650,margin:"0%"},children:[(0,a.jsx)(s.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:C,onChange:e=>{e.preventDefault(),v(e.target.value),I(e.target.value)}}),(0,a.jsx)(r.Z,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(n.Z,{})})]})]}),(0,a.jsx)(h.Z,{in:b,children:(0,a.jsx)(f.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#353232",color:"#fff"}},children:(0,a.jsx)(c._,{rows:m,columns:p,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],onRowSelectionModelChange:O,rowSelectionModel:w,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})})}},85800:function(e,t,l){"use strict";l.d(t,{AuthProvider:function(){return o},a:function(){return s}});var a=l(57437),i=l(2265),n=l(44785);let r=(0,i.createContext)({login:e=>{},logout:()=>{}}),o=e=>{let{children:t}=e,[l,o]=(0,i.useState)(null),[s,d]=(0,i.useState)({}),[c,u]=(0,i.useState)({}),[x,h]=(0,i.useState)({}),[f]=(0,i.useState)(!0),p=(0,i.useCallback)(function(e){n.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),o(e)},[]),g=(0,i.useCallback)(function(){n.Z.remove("authTokens"),localStorage.removeItem("auth"),o(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),l=localStorage.getItem("pedido"),a=localStorage.getItem("caja");e&&o(JSON.parse(e)),t&&d(JSON.parse(t)),l&&u(JSON.parse(l)),a&&h(JSON.parse(a))},[]);let m=(0,i.useMemo)(()=>({auth:l,cliente:s,setCliente:d,pedido:c,setPedido:u,caja:x,setCaja:h,loading:f,login:p,logout:g}),[l,s,c,x,p,g]);return(0,a.jsx)(r.Provider,{value:m,children:t})},s=()=>(0,i.useContext)(r)}},function(e){e.O(0,[4797,4129,6291,4275,3983,2561,6981,2610,9105,4282,2971,7023,1744],function(){return e(e.s=55867)}),_N_E=e.O()}]);