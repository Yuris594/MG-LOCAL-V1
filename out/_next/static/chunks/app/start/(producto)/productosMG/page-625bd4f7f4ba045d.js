(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5678],{20067:function(){},72061:function(){},72250:function(e,t,a){Promise.resolve().then(a.bind(a,45401))},77699:function(e,t,a){"use strict";var l=a(23963);t.Z=void 0;var o=l(a(19118)),r=a(57437);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},40301:function(e,t,a){"use strict";var l=a(23963);t.Z=void 0;var o=l(a(19118)),r=a(57437);t.Z=(0,o.default)((0,r.jsx)("path",{d:"m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"}),"WidgetsOutlined")},20124:function(e,t,a){"use strict";var l=a(2265),o=a(89211),r=a(95885),i=a(57437);let n="function"==typeof(0,o.zY)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),d=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=function(e){var t,a;let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};l&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var a,l;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?o[n]={":root":{colorScheme:null===(a=i.palette)||void 0===a?void 0:a.mode}}:o[n.replace(/\s*&/,"")]={colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}});let r={html:s(e,l),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...d(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o},i=null===(a=e.components)||void 0===a?void 0:null===(t=a.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(r=[r,i]),r},h="mui-ecs",u=e=>{let t=c(e,!1),a=Array.isArray(t)?t[0]:t;return!e.vars&&a&&(a.html[":root:has(".concat(h,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var l,o;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?a[n]={[":root:not(:has(.".concat(h,"))")]:{colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}}:a[n.replace(/\s*&/,"")]={["&:not(:has(.".concat(h,"))")]:{colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}}}),t},m=(0,o.zY)(n?e=>{let{theme:t,enableColorScheme:a}=e;return c(t,a)}:e=>{let{theme:t}=e;return u(t)});t.default=function(e){let{children:t,enableColorScheme:a=!1}=(0,r.i)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(l.Fragment,{children:[n&&(0,i.jsx)(m,{enableColorScheme:a}),!n&&!a&&(0,i.jsx)("span",{className:h,style:{display:"none"}}),t]})}},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var l=a(57437),o=a(33579),r=a.n(o),i=a(20124),n=a(31193),s=a(71733),d=a(79806),c=a(60335),h=a(60091),u=a(83719),m=a(62501),f=a(6291),p=a(11656),x=a(66325),g=a(90922),S=a(26032),j=a(55693),C=a(42188),b=a(66299),v=a(40301),N=a(78457),w=a(21704),E=a(66246),O=a(16463),y=a(85800),A=a(2265),I=a(32184),D=a(7547),P=a(57300),R=a(86917),F=a(47905),Z=a(87138),T=e=>{let{page:t}=e;return(0,l.jsx)(n.default,{children:(0,l.jsx)(I.Z,{children:t.map(e=>(0,l.jsx)(D.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{LinkComponent:Z.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(R.Z,{children:e.icon}),(0,l.jsx)(F.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var _=()=>{let e=(0,O.useRouter)(),{auth:t,logout:a}=(0,y.a)(),[o,I]=(0,A.useState)(!1),[D,P]=(0,A.useState)(null),[R,F]=(0,A.useState)(!1),_=()=>{F(!1),P(null)},L=[{title:"USUARIOS ",url:"/components/usuarios",icon:(0,l.jsx)(x.Z,{})},{title:"PEDIDOS",url:"/components/pedidos",icon:(0,l.jsx)(g.Z,{})},{title:"CLIENTES",url:"/components/clientes",icon:(0,l.jsx)(S.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(j.Z,{}),onClick:e=>{F(!0),P(e.currentTarget)}},{title:"FACTURAS",url:"../start/facturas",icon:(0,l.jsx)(C.Z,{})},{title:"CAJA",url:"../components/pedidosCaja",icon:(0,l.jsx)(b.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{}),(0,l.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,l.jsx)(s.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(c.Z,{color:"inherit",onClick:e=>{P(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(v.Z,{})}),(0,l.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:L.map(e=>(0,l.jsx)(h.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:Z.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(h.default,{component:Z.default,href:"/start",color:"inherit",children:(0,l.jsx)(E.Z,{})}),(0,l.jsxs)(h.default,{className:r().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,l.jsx)(w.Z,{}),t&&t.PER_Nom]}),(0,l.jsx)(h.default,{color:"inherit",onClick:()=>I(!0),children:(0,l.jsx)(N.Z,{})})]})}),(0,l.jsx)(m.Z,{open:o,onClose:()=>I(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(n.default,{sx:k,children:[(0,l.jsx)(u.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(n.default,{children:(0,l.jsx)(h.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{a(),e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(f.Z,{id:"basic-menu",anchorEl:D,open:R,onClose:_,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(p.Z,{onClick:_,component:Z.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,l.jsx)(p.Z,{onClick:_,component:Z.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,l.jsx)(f.Z,{id:"basic-menu",anchorEl:D,MenuListProps:{"aria-labelledby":"basic-button"},open:!!D,onClose:()=>{P(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(T,{page:L})})]})]})}},10416:function(e,t,a){"use strict";var l=a(57437),o=a(27800),r=a(2265),i=a(60091);t.Z=e=>{let{datos:t}=e,[a,n]=(0,r.useState)(!1);return(0,l.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}n(!0);try{let e=o.P6.book_new(),a=o.P6.json_to_sheet(t);o.P6.book_append_sheet(e,a,"Datos"),o.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{n(!1)}},disabled:a,children:a?"Loading...":"Excel"})}},45401:function(e,t,a){"use strict";a.r(t);var l=a(57437),o=a(83719),r=a(31193),i=a(99128),n=a(28027),s=a(74275),d=a(60335),c=a(92355),h=a(97183),u=a(2265),m=a(77699),f=a(68265),p=a(41448),x=a.n(p),g=a(13726),S=a(10416);let j=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),C=[{field:"ARTICULO",headerName:"Cod",width:130},{field:"DESCRIPCION",headerName:"Referencia",width:700},{field:"SUBLINEA",headerName:"Sublinea",width:300},{field:"TOTAL_DISP",headerName:"Disp",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_IMPUESTO",headerName:"IVA",width:130},{field:"PRECIOMASIVA",headerName:"Masiva",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_DCTO",headerName:"D1",width:130},{field:"UNIDAD_EMPAQUE",headerName:"Emp",width:130},{field:"EXIST_REAL",headerName:"Existreal",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],b=[{field:"FECHA",headerName:"Fecha",width:250,renderCell:e=>j(e.value)},{field:"CLIENTE",headerName:"Cliente",width:180},{field:"PEDIDO",headerName:"Pedido",width:150},{field:"VE",headerName:"VEND",width:80,align:"right"},{field:"PED",headerName:"Ped",width:50,align:"right"},{field:"DESP",headerName:"Desp",width:100,align:"right"},{field:"PEND",headerName:"Pend",width:100,align:"right"},{field:"ESTADO",headerName:"Estado",width:160},{field:"AUTORIZADONOM",headerName:"Autortizado",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,l.jsx)(o.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}}],v=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,renderCell:e=>j(e.value)},{field:"ANULADA",headerName:"AN",width:50},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORCIVA",headerName:"IVA",width:130,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,renderCell:e=>j(e.value)},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}];function N(e){let{children:t,value:a,index:o,...i}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o),...i,children:a===o&&(0,l.jsx)(r.default,{sx:{p:3},children:t})})}function w(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}N.propTypes={children:x().node,index:x().number.isRequired,value:x().number.isRequired};let E=async()=>(await fetch("/api/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}})).json(),O=async e=>{let t=await fetch("/api/productos/facturas/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este producto."),[])},y=async e=>{let t=await fetch("/api/productos/pedidos/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay pedidos para este producto."),[])};t.default=()=>{let[e,t]=(0,u.useState)(0),[a,p]=(0,u.useState)([]),[x,j]=(0,u.useState)([]),[A,I]=(0,u.useState)([]),[D,P]=(0,u.useState)(""),[R,F]=(0,u.useState)(!0),[Z,T]=(0,u.useState)([]),[k,_]=(0,u.useState)(!0),[L,U]=(0,u.useState)([]),[z,M]=(0,u.useState)([]);(0,u.useEffect)(()=>{F(!0)},[e]),(0,u.useEffect)(()=>{B()},[]);let B=async()=>{let e=await E();try{e?(T(e),M(e)):T([]),_(!1)}catch(e){console.log("Error al obtener usuarios",e)}},G=(0,u.useMemo)(()=>B,[]);(0,u.useEffect)(()=>{G()},[G]);let V=async()=>{let e=await O(D);j([]);try{e?j(e):j([]),F(!1)}catch(e){console.log("Error al obtener usuarios",e)}},H=async()=>{let e=await y(D);p([]);try{e?p(e):p([]),F(!1)}catch(e){console.log("Error al obtener usuarios",e)}},W=e=>{T(z.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},J=(0,u.useCallback)(e=>{U(e),e.length>0&&P(z.filter(t=>{let a=t.ARTICULO;return!!a&&a.toString().includes(e[0])})[0])},[Z]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.default,{children:[" ",(0,l.jsx)(g.Z,{})," "]}),!0===k?(0,l.jsx)(r.default,{sx:{height:"auto",width:"100%"},children:(0,l.jsx)(i.Z,{})}):(0,l.jsxs)("div",{style:{height:"auto",width:"100%"},children:[(0,l.jsxs)(r.default,{children:[(0,l.jsx)(o.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"PRODUCTOS MG"}),(0,l.jsxs)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,l.jsx)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:(0,l.jsx)(S.Z,{datos:Z})}),(0,l.jsx)(r.default,{children:(0,l.jsx)(o.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#920b0d"},children:D.DESCRIPCION})}),(0,l.jsxs)(n.Z,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,l.jsx)(s.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:A,onChange:e=>{e.preventDefault(),I(e.target.value),W(e.target.value)}}),(0,l.jsx)(d.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(m.Z,{})})]})]})]}),(0,l.jsxs)(r.default,{sx:{width:"100%"},children:[(0,l.jsx)(r.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsxs)(c.Z,{value:e,onChange:(e,a)=>{t(a)},"aria-label":"basic tabs example",children:[(0,l.jsx)(h.Z,{label:"Articulos",...w(0)}),(0,l.jsx)(h.Z,{label:"Pedidos:".concat(a.length),...w(1),onClick:H}),(0,l.jsx)(h.Z,{label:"Facturas:".concat(x.length),...w(2),onClick:V})]})}),(0,l.jsx)(N,{componente:r.default,value:e,index:0,children:(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(f._,{rows:Z,columns:C,getRowId:e=>e.ARTICULO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},rowSelectionModel:L,onRowSelectionModelChange:J,pageSizeOptions:[5,18,20]})})}),(0,l.jsx)(N,{component:r.default,value:e,index:1,children:!0===R?(0,l.jsx)(r.default,{sx:{width:"100%"},children:(0,l.jsx)(i.Z,{})}):a.length<=0?(0,l.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(f._,{rows:a,columns:b,getRowId:e=>e.PEDIDO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18,20]})})}),(0,l.jsx)(N,{component:r.default,value:e,index:2,children:!0===R?(0,l.jsx)(r.default,{sx:{width:"100%"},children:(0,l.jsx)(i.Z,{})}):x.length<=0?(0,l.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(f._,{rows:x,columns:v,getRowId:e=>e.ID,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18,20]})})})]})]})]})}},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return n},a:function(){return s}});var l=a(57437),o=a(2265),r=a(44785);let i=(0,o.createContext)({login:e=>{},logout:()=>{}}),n=e=>{let{children:t}=e,[a,n]=(0,o.useState)(null),[s,d]=(0,o.useState)({}),[c,h]=(0,o.useState)({}),[u,m]=(0,o.useState)({}),[f]=(0,o.useState)(!0),p=(0,o.useCallback)(function(e){r.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),n(e)},[]),x=(0,o.useCallback)(function(){r.Z.remove("authTokens"),localStorage.removeItem("auth"),n(null)},[]);(0,o.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),a=localStorage.getItem("pedido"),l=localStorage.getItem("caja");e&&n(JSON.parse(e)),t&&d(JSON.parse(t)),a&&h(JSON.parse(a)),l&&m(JSON.parse(l))},[]);let g=(0,o.useMemo)(()=>({auth:a,cliente:s,setCliente:d,pedido:c,setPedido:h,caja:u,setCaja:m,loading:f,login:p,logout:x}),[a,s,c,u,p,x]);return(0,l.jsx)(i.Provider,{value:g,children:t})},s=()=>(0,o.useContext)(i)},33579:function(e){e.exports={style:{fontFamily:"'__Lora_11742b', '__Lora_Fallback_11742b'",fontStyle:"normal"},className:"__className_11742b"}}},function(e){e.O(0,[4488,1425,4797,4129,6291,4275,3983,2561,6981,8265,9105,9696,2971,7023,1744],function(){return e(e.s=72250)}),_N_E=e.O()}]);