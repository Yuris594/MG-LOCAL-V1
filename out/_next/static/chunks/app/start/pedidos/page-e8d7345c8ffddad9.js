(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3945],{20067:function(){},72061:function(){},42796:function(e,t,l){Promise.resolve().then(l.bind(l,16497))},20124:function(e,t,l){"use strict";var o=l(2265),a=l(89211),r=l(95885),i=l(57437);let n="function"==typeof(0,a.zY)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),d=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=function(e){var t,l;let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};o&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var l,o;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?a[n]={":root":{colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}}:a[n.replace(/\s*&/,"")]={colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}});let r={html:s(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...d(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...a},i=null===(l=e.components)||void 0===l?void 0:null===(t=l.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(r=[r,i]),r},u="mui-ecs",h=e=>{let t=c(e,!1),l=Array.isArray(t)?t[0]:t;return!e.vars&&l&&(l.html[":root:has(".concat(u,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var o,a;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?l[n]={[":root:not(:has(.".concat(u,"))")]:{colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}}:l[n.replace(/\s*&/,"")]={["&:not(:has(.".concat(u,"))")]:{colorScheme:null===(a=i.palette)||void 0===a?void 0:a.mode}}}),t},x=(0,a.zY)(n?e=>{let{theme:t,enableColorScheme:l}=e;return c(t,l)}:e=>{let{theme:t}=e;return h(t)});t.default=function(e){let{children:t,enableColorScheme:l=!1}=(0,r.i)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(o.Fragment,{children:[n&&(0,i.jsx)(x,{enableColorScheme:l}),!n&&!l&&(0,i.jsx)("span",{className:u,style:{display:"none"}}),t]})}},13726:function(e,t,l){"use strict";l.d(t,{Z:function(){return _}});var o=l(57437),a=l(33579),r=l.n(a),i=l(20124),n=l(31193),s=l(71733),d=l(79806),c=l(60335),u=l(60091),h=l(83719),x=l(62501),f=l(6291),p=l(11656),m=l(66325),g=l(90922),j=l(26032),S=l(55693),b=l(42188),C=l(66299),v=l(40301),y=l(78457),w=l(21704),O=l(66246),Z=l(16463),E=l(85800),N=l(2265),k=l(32184),P=l(7547),A=l(57300),D=l(86917),I=l(47905),T=l(87138),R=e=>{let{page:t}=e;return(0,o.jsx)(n.default,{children:(0,o.jsx)(k.Z,{children:t.map(e=>(0,o.jsx)(P.ZP,{disablePadding:!0,children:(0,o.jsxs)(A.Z,{LinkComponent:T.default,href:e.url,onClick:e.onClick,children:[(0,o.jsx)(D.Z,{children:e.icon}),(0,o.jsx)(I.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var _=()=>{let e=(0,Z.useRouter)(),{auth:t,logout:l}=(0,E.a)(),[a,k]=(0,N.useState)(!1),[P,A]=(0,N.useState)(null),[D,I]=(0,N.useState)(!1),_=()=>{I(!1),A(null)},z=[{title:"USUARIOS ",url:"../start/usuarios",icon:(0,o.jsx)(m.Z,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,o.jsx)(g.Z,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,o.jsx)(j.Z,{})},{title:"PRODUCTOS",icon:(0,o.jsx)(S.Z,{}),onClick:e=>{I(!0),A(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,o.jsx)(b.Z,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,o.jsx)(C.Z,{})}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{}),(0,o.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,o.jsx)(s.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(c.Z,{color:"inherit",onClick:e=>{A(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,o.jsx)(v.Z,{fontSize:"large"})}),(0,o.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:z.map(e=>(0,o.jsx)(u.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:T.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,o.jsx)(h.default,{variant:"h6",sx:{flexGrow:1}}),(0,o.jsx)(u.default,{component:T.default,href:"/start",color:"inherit",children:(0,o.jsx)(O.Z,{fontSize:"large"})}),(0,o.jsxs)(u.default,{className:r().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,o.jsx)(w.Z,{fontSize:"large"}),t&&t.PER_Nom]}),(0,o.jsx)(u.default,{color:"inherit",onClick:()=>k(!0),children:(0,o.jsx)(y.Z,{fontSize:"large"})})]})}),(0,o.jsx)(x.Z,{open:a,onClose:()=>k(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsxs)(n.default,{sx:M,children:[(0,o.jsx)(h.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,o.jsx)(n.default,{children:(0,o.jsx)(u.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{l(),e.push("/")},children:"SALIR"})})]})}),(0,o.jsxs)(f.Z,{id:"basic-menu",anchorEl:P,open:D,onClose:_,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,o.jsx)(p.Z,{onClick:_,component:T.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,o.jsx)(p.Z,{onClick:_,component:T.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,o.jsx)(f.Z,{id:"basic-menu",anchorEl:P,MenuListProps:{"aria-labelledby":"basic-button"},open:!!P,onClose:()=>{A(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,o.jsx)(R,{page:z})})]})]})}},10416:function(e,t,l){"use strict";var o=l(57437),a=l(27800),r=l(2265),i=l(60091);t.Z=e=>{let{datos:t}=e,[l,n]=(0,r.useState)(!1);return(0,o.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}n(!0);try{let e=a.P6.book_new(),l=a.P6.json_to_sheet(t);a.P6.book_append_sheet(e,l,"Datos"),a.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{n(!1)}},disabled:l,children:l?"Loading...":"Excel"})}},16497:function(e,t,l){"use strict";l.r(t);var o=l(57437),a=l(83719),r=l(31193),i=l(99128),n=l(60091),s=l(28027),d=l(74275),c=l(60335),u=l(15656),h=l(62501),x=l(14595),f=l(2265),p=l(85800),m=l(68265),g=l(22294),j=l(16463),S=l(10416),b=l(77699),C=l(13726),v=l(87138);let y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"white",width:800,height:450,boxShadow:24,p:4},w=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),O=[{field:"FECHA_PEDIDO",headerName:"Fecha",width:170,renderCell:e=>w(e.value)},{field:"PEDIDO",headerName:"Pedido",width:160},{field:"ESTADO",headerName:"Estado",width:70},{field:"IMPRESO",headerName:"IMP",width:70},{field:"AUTORIZADONOM",headerName:"Autorizado",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,o.jsx)(a.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}},{field:"U_COMPESPECIAL",headerName:"Esp",width:190},{field:"VENDEDOR",headerName:"Vend",width:100},{field:"COMENTARIO_CXC",headerName:"AUT.sistema",width:200},{field:"TOTAL_A_FACTURAR",headerName:"A FACT",width:120},{field:"NOMBRE_RAZON",headerName:"Cliente",width:400},{field:"U_EDITADOPOR",headerName:"Usuario MG",width:100},{field:"DEPTO",headerName:"Departamento",width:130},{field:"CIUDAD",headerName:"Ciudad",width:200}],Z=async()=>{let e=await fetch("http://172.20.20.3:8001/pedidos/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()};t.default=()=>{let e=(0,j.useRouter)(),{setPedido:t}=(0,p.a)(),[l,w]=(0,f.useState)([]),[E,N]=(0,f.useState)(!1),[k,P]=(0,f.useState)([]),[A,D]=(0,f.useState)([]),[I,T]=(0,f.useState)(!1),[R,M]=(0,f.useState)(!0),[_,z]=(0,f.useState)([]),F=(0,f.useMemo)(()=>k,[k]);(0,f.useEffect)(()=>{U()},[]);let U=async()=>{let e=await Z();try{e&&(P(e),w(e),M(!1),setTimeout(()=>{T(!0)},100))}catch(e){console.log("Error al obtener los datos",e)}},L=e=>{e.preventDefault(),D(e.target.value),B(e.target.value)},B=e=>{P(l.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},J=(0,f.useCallback)(o=>{if(z(o),o.length>0){let a=l.filter(e=>{let t=e.PEDIDO;return!!t&&t.toString().includes(o[0])});localStorage.setItem("pedidoTemp",JSON.stringify(a)),t(a),e.push("./pedidos/pedidosC")}},[k]),W=()=>N(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.default,{children:[" ","  ",(0,o.jsx)(C.Z,{})," "," "]}),(0,o.jsx)("div",{className:"container",children:!0===R?(0,o.jsx)(r.default,{sx:{width:"100%"},children:(0,o.jsx)(i.Z,{})}):(0,o.jsxs)(r.default,{children:[(0,o.jsxs)("div",{style:{height:"auto",width:"100%"},children:[(0,o.jsx)(a.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000"},children:"PEDIDOS"}),(0,o.jsx)(r.default,{children:(0,o.jsxs)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:[(0,o.jsxs)(r.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,o.jsxs)(n.default,{variant:"outlined",sx:{margin:"10px"},onClick:()=>N(!0),children:[" "," Nuevo "," "]}),(0,o.jsx)(S.Z,{datos:k})]}),(0,o.jsxs)(s.Z,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,o.jsx)(d.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,name:"PER_Usuario",value:A,onChange:L}),(0,o.jsx)(c.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,o.jsx)(b.Z,{})})]})]})}),(0,o.jsx)(u.Z,{in:I,children:(0,o.jsx)(r.default,{sx:{height:999,width:"100%"},children:(0,o.jsx)(m._,{rows:F,columns:O,initialState:{pagination:{paginationModel:{page:0,pageSize:16}}},pageSizeOptions:[5,16],onRowSelectionModelChange:J,slots:{toolbar:g.n},rowSelectionModel:_,getRowId:e=>e.PEDIDO,sx:{backgroundColor:"#ffffff"}})})})]}),(0,o.jsx)(h.Z,{open:E,onClose:W,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(r.default,{sx:y,children:(0,o.jsxs)(r.default,{children:[(0,o.jsxs)(a.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:[" "," Seleccionar articulo "," "]}),(0,o.jsx)(x.Z,{sx:{height:4,m:.5,marginBottom:""},orientation:"horizontal"}),(0,o.jsxs)(r.default,{sx:{display:"flex",alignItems:"center",justifyContent:"right"},children:[(0,o.jsx)(v.default,{href:"../pedidos",children:(0,o.jsxs)(n.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#b6ff91"},children:[" "," Agregear "," "]})}),(0,o.jsxs)(n.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:W,children:[" "," Cerrar "," "]})]}),(0,o.jsxs)(s.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"center",width:250,boxShadow:3},children:[(0,o.jsx)(d.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},value:A,onChange:L}),(0,o.jsx)(c.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,o.jsx)(b.Z,{})}),(0,o.jsx)(x.Z,{sx:{height:28,m:.5},orientation:"vertical"})]}),(0,o.jsx)(r.default,{sx:{height:200,width:"100%"},children:(0,o.jsx)(m._,{rows:k,columns:O,getRowId:e=>e.PEDIDO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18],slots:{toolbar:g.n},rowSelectionModel:_,onRowSelectionModelChange:J})})]})})})]})})]})}},85800:function(e,t,l){"use strict";l.d(t,{AuthProvider:function(){return n},a:function(){return s}});var o=l(57437),a=l(2265),r=l(44785);let i=(0,a.createContext)({login:e=>{},logout:()=>{}}),n=e=>{let{children:t}=e,[l,n]=(0,a.useState)(null),[s,d]=(0,a.useState)({}),[c,u]=(0,a.useState)({}),[h,x]=(0,a.useState)({}),[f]=(0,a.useState)(!0),p=(0,a.useCallback)(function(e){r.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),n(e)},[]),m=(0,a.useCallback)(function(){r.Z.remove("authTokens"),localStorage.removeItem("auth"),n(null)},[]);(0,a.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),l=localStorage.getItem("pedido"),o=localStorage.getItem("caja");e&&n(JSON.parse(e)),t&&d(JSON.parse(t)),l&&u(JSON.parse(l)),o&&x(JSON.parse(o))},[]);let g=(0,a.useMemo)(()=>({auth:l,cliente:s,setCliente:d,pedido:c,setPedido:u,caja:h,setCaja:x,loading:f,login:p,logout:m}),[l,s,c,h,p,m]);return(0,o.jsx)(i.Provider,{value:g,children:t})},s=()=>(0,a.useContext)(i)}},function(e){e.O(0,[4488,1425,4797,4129,6291,4275,3983,2561,6981,8265,9105,4264,2971,7023,1744],function(){return e(e.s=42796)}),_N_E=e.O()}]);