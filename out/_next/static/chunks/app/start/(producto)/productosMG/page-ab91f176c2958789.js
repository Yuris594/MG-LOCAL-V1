(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1851],{83686:()=>{},32383:()=>{},44853:(e,t,a)=>{Promise.resolve().then(a.bind(a,32596))},78205:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var l=a(12983),r=a(95155);let o=(0,l.A)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},20457:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var l=a(12115),r=a(15438),o=a(12567),i=a(95155);let s="function"==typeof(0,r.Dp)({}),n=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),d=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=function(e){var t,a;let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={};l&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var a,l;let[o,i]=t,s=e.getColorSchemeSelector(o);s.startsWith("@")?r[s]={":root":{colorScheme:null===(a=i.palette)||void 0===a?void 0:a.mode}}:r[s.replace(/\s*&/,"")]={colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}});let o={html:n(e,l),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...d(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...r},i=null===(a=e.components)||void 0===a?void 0:null===(t=a.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(o=[o,i]),o},h="mui-ecs",u=e=>{let t=c(e,!1),a=Array.isArray(t)?t[0]:t;return!e.vars&&a&&(a.html[":root:has(".concat(h,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var l,r;let[o,i]=t,s=e.getColorSchemeSelector(o);s.startsWith("@")?a[s]={[":root:not(:has(.".concat(h,"))")]:{colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}}:a[s.replace(/\s*&/,"")]={["&:not(:has(.".concat(h,"))")]:{colorScheme:null===(r=i.palette)||void 0===r?void 0:r.mode}}}),t},p=(0,r.Dp)(s?e=>{let{theme:t,enableColorScheme:a}=e;return c(t,a)}:e=>{let{theme:t}=e;return u(t)}),m=function(e){let{children:t,enableColorScheme:a=!1}=(0,o.b)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(l.Fragment,{children:[s&&(0,i.jsx)(p,{enableColorScheme:a}),!s&&!a&&(0,i.jsx)("span",{className:h,style:{display:"none"}}),t]})}},65068:(e,t,a)=>{"use strict";a.d(t,{A:()=>L});var l=a(95155),r=a(20457),o=a(75436),i=a(11451),s=a(46805),n=a(894),d=a(2295),c=a(9561),h=a(81894),u=a(91888),p=a(74676),m=a(92080),x=a(96212),f=a(6069),S=a(9581),A=a(43677),C=a(85244),g=a(85067),j=a(2138);a(76046);var N=a(70689),O=a(12115),E=a(4918),I=a(41983),w=a(36017),b=a(2091),D=a(60391),v=a(48173),y=a.n(v);let T=e=>{let{page:t}=e;return(0,l.jsx)(o.default,{children:(0,l.jsx)(E.A,{children:t.map(e=>(0,l.jsx)(I.Ay,{disablePadding:!0,children:(0,l.jsxs)(w.A,{LinkComponent:y(),href:e.url,onClick:e.onClick,children:[(0,l.jsx)(b.A,{children:e.icon}),(0,l.jsx)(D.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var R=a(78897),P=a.n(R),F=a(79046),k=a.n(F);let L=()=>{let{auth:e,logout:t}=(0,N.A)(),[a,E]=(0,O.useState)(null),[I,w]=(0,O.useState)(!1),b=()=>{w(!1),E(null)},D=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,l.jsx)(p.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,l.jsx)(m.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,l.jsx)(x.A,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(f.A,{}),onClick:e=>{w(!0),E(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,l.jsx)(S.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,l.jsx)(A.A,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.default,{}),(0,l.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,l.jsx)(i.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(s.A,{children:[(0,l.jsx)(n.A,{color:"inherit",onClick:e=>{E(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(C.A,{})}),(0,l.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:D.map(e=>(0,l.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:y(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(d.default,{component:y(),href:"/start",color:"inherit",children:(0,l.jsx)(j.A,{})}),(0,l.jsxs)(d.default,{className:k().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,l.jsx)(x.A,{}),e&&e.PER_Nom]}),(0,l.jsx)(d.default,{color:"inherit",onClick:()=>{P().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,l.jsx)(g.A,{})})]})}),(0,l.jsxs)(h.A,{id:"basic-menu",anchorEl:a,open:I,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(u.A,{onClick:b,component:y(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,l.jsx)(u.A,{onClick:b,component:y(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,l.jsx)(h.A,{id:"basic-menu",anchorEl:a,MenuListProps:{"aria-labelledby":"basic-button"},open:!!a,onClose:()=>{E(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(T,{page:D})})]})]})}},76134:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var l=a(95155),r=a(7660),o=a(12115),i=a(2295);let s=e=>{let{datos:t}=e,[a,s]=(0,o.useState)(!1);return(0,l.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}s(!0);try{let e=r.Wp.book_new(),a=r.Wp.json_to_sheet(t);r.Wp.book_append_sheet(e,a,"Datos"),r._h(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{s(!1)}},disabled:a,children:a?"Loading...":"Excel"})}},32596:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var l=a(95155),r=a(9561),o=a(75436),i=a(54255),s=a(78562),n=a(6403),d=a(894),c=a(73378),h=a(79987),u=a(12115),p=a(78205),m=a(57653),x=a(81996),f=a.n(x),S=a(65068),A=a(76134),C=a(8889);let g=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),j=[{field:"ARTICULO",headerName:"COD",width:130},{field:"DESCRIPCION",headerName:"REFERENCIA",width:700},{field:"SUBLINEA",headerName:"SUBLINEA",width:300},{field:"TOTAL_DISP",headerName:"DISP",width:130},{field:"PRECIO",headerName:"PRECIO",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PORC_IMPUESTO",headerName:"IVA",width:100},{field:"PRECIOMASIVA",headerName:"MASIVA",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PORC_DCTO",headerName:"D1",width:130},{field:"UNIDAD_EMPAQUE",headerName:"EMP",width:130},{field:"EXIST_REAL",headerName:"EXISTREAL",width:130}],N=[{field:"FECHA",headerName:"Fecha",width:250,renderCell:e=>g(e.value)},{field:"CLIENTE",headerName:"CLIENTE",width:180},{field:"PEDIDO",headerName:"PEDIDO",width:150,cellClassName:"pedido-cell"},{field:"PED",headerName:"PED",width:100},{field:"DESP",headerName:"DESP",width:120},{field:"PEND",headerName:"PEND",width:130},{field:"ESTADO",headerName:"ESTADO",width:160},{field:"AUTORIZADONOM",headerName:"AUTORIZADO",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,l.jsx)(r.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}},{field:"VE",headerName:"VEND",width:100,cellClassName:"autor-cell"}],O=[{field:"FACTURA",headerName:"FACTURA",width:130,cellClassName:"plazo-cell"},{field:"FECHA_DESPACHO",headerName:"FECHA",width:190,renderCell:e=>g(e.value)},{field:"ANULADA",headerName:"AN",width:50},{field:"PRECIO_TOTAL",headerName:"V. FACT",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PEDIDO",headerName:"PEDIDO",width:130,cellClassName:"pedido-cell"},{field:"ARTICULO",headerName:"ARTICULO",width:130},{field:"DESCRIPCION",headerName:"DESCRIPCION",width:700},{field:"CANTIDAD",headerName:"CANT",width:130},{field:"PRECIO_UNITARIO",headerName:"PRECION UNI.",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PORCIVA",headerName:"IVA",width:100},{field:"PORDESC",headerName:"DESC",width:100},{field:"VDESC",headerName:"V DESC",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))},cellClassName:"autor-cell"},{field:"IDRUTERO",headerName:"ID RUTERO",width:130},{field:"IDGUIA",headerName:"ID GUIA",width:130},{field:"OBSERVACIONES",headerName:"OBSERVACIONES",width:800},{field:"RUBRO1",headerName:"DOCS 2",width:500}];function E(e){let{children:t,value:a,index:r,...i}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...i,children:a===r&&(0,l.jsx)(o.default,{sx:{p:3},children:t})})}function I(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}E.propTypes={children:f().node,index:f().number.isRequired,value:f().number.isRequired};let w=async()=>(await fetch(C.c.url+"/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}})).json(),b=async e=>{let t=await fetch(C.c.url+"/productos/facturas/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este producto."),[])},D=async e=>{let t=await fetch(C.c.url+"/productos/pedidos/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay pedidos para este producto."),[])},v=()=>{let[e,t]=(0,u.useState)(0),[a,r]=(0,u.useState)([]),[x,f]=(0,u.useState)([]),[C,g]=(0,u.useState)([]),[v,y]=(0,u.useState)(""),[T,R]=(0,u.useState)(!0),[P,F]=(0,u.useState)([]),[k,L]=(0,u.useState)(!0),[U,M]=(0,u.useState)([]),[_,z]=(0,u.useState)([]);(0,u.useEffect)(()=>{R(!0)},[e]),(0,u.useEffect)(()=>{B()},[]);let B=async()=>{let e=await w();try{e?(F(e),z(e)):F([]),L(!1)}catch(e){console.log("Error al obtener usuarios",e)}},V=(0,u.useMemo)(()=>B,[]);(0,u.useEffect)(()=>{V()},[V]);let W=async()=>{let e=await b(v);f([]);try{e?f(e):f([]),R(!1)}catch(e){console.log("Error al obtener usuarios",e)}},G=async()=>{let e=await D(v);r([]);try{e?r(e):r([]),R(!1)}catch(e){console.log("Error al obtener usuarios",e)}},J=e=>{F(_.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},H=(0,u.useCallback)(e=>{M(e),e.length>0&&y(_.filter(t=>{let a=t.ARTICULO;return!!a&&a.toString().includes(e[0])})[0])},[P]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.default,{children:[" ",(0,l.jsx)(S.A,{})," "]}),(0,l.jsx)("div",{className:"container",children:!0===k?(0,l.jsx)(o.default,{sx:{width:"100%"},children:(0,l.jsx)(i.A,{})}):(0,l.jsxs)(o.default,{children:[(0,l.jsxs)(o.default,{children:[(0,l.jsx)("h2",{children:(0,l.jsx)("strong",{children:"PRODUCTOS MG"})}),(0,l.jsxs)(o.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,l.jsx)(o.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:(0,l.jsx)(A.A,{datos:P})}),(0,l.jsx)("h2",{style:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#920b0d"},children:v.DESCRIPCION}),(0,l.jsxs)(s.A,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:700,margin:"10px"},children:[(0,l.jsx)(n.Ay,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:C,onChange:e=>{e.preventDefault(),g(e.target.value),J(e.target.value)}}),(0,l.jsx)(d.A,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(p.A,{})})]})]})]}),(0,l.jsxs)(o.default,{sx:{width:"100%"},children:[(0,l.jsx)(o.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsxs)(c.A,{value:e,onChange:(e,a)=>{t(a)},"aria-label":"basic tabs example",children:[(0,l.jsx)(h.A,{label:"Articulos",...I(0)}),(0,l.jsx)(h.A,{label:"Pedidos:".concat(a.length),...I(1),onClick:G}),(0,l.jsx)(h.A,{label:"Facturas:".concat(x.length),...I(2),onClick:W})]})}),(0,l.jsx)(E,{componente:o.default,value:e,index:0,children:(0,l.jsx)(o.default,{sx:{width:"100%",height:860},children:(0,l.jsx)(m.z,{rows:P,columns:j,getRowId:e=>e.ARTICULO,initialState:{pagination:{paginationModel:{page:0,pageSize:14}}},rowSelectionModel:U,onRowSelectionModelChange:H,pageSizeOptions:[5,14,20],sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})}),(0,l.jsx)(E,{component:o.default,value:e,index:1,children:!0===T?(0,l.jsx)(o.default,{sx:{width:"100%"},children:(0,l.jsx)(i.A,{})}):a.length<=0?(0,l.jsx)("h2",{children:"NO HAY PEDIDOS"}):(0,l.jsx)(o.default,{sx:{width:"100%",height:860},children:(0,l.jsx)(m.z,{rows:a,columns:N,getRowId:e=>e.PEDIDO,initialState:{pagination:{paginationModel:{page:0,pageSize:14}}},pageSizeOptions:[5,14,20],sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})}),(0,l.jsx)(E,{component:o.default,value:e,index:2,children:!0===T?(0,l.jsx)(o.default,{sx:{width:"100%"},children:(0,l.jsx)(i.A,{})}):x.length<=0?(0,l.jsx)("h2",{children:"NO HAY FACTURAS"}):(0,l.jsx)(o.default,{sx:{width:"100%",height:860},children:(0,l.jsx)(m.z,{rows:x,columns:O,getRowId:e=>e.ID,initialState:{pagination:{paginationModel:{page:0,pageSize:14}}},pageSizeOptions:[5,14,20],sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})})]})]})})]})}},8889:(e,t,a)=>{"use strict";a.d(t,{c:()=>l});let l={url:"http://172.20.20.3:8001"}},70689:(e,t,a)=>{"use strict";a.d(t,{A:()=>d,AuthProvider:()=>n});var l=a(95155),r=a(12115),o=a(76046),i=a(89208);let s=(0,r.createContext)({login:e=>{},logout:()=>{}}),n=e=>{let{children:t}=e,a=(0,o.useRouter)(),[n]=(0,r.useState)(!0),[d,c]=(0,r.useState)({}),[h,u]=(0,r.useState)(null),[p,m]=(0,r.useState)({}),[x,f]=(0,r.useState)({}),[S,A]=(0,r.useState)({}),[C,g]=(0,r.useState)({}),[j,N]=(0,r.useState)({}),O=(0,r.useCallback)(function(e){i.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),u(e)},[]),E=(0,r.useCallback)(function(){i.A.remove("authTokens"),localStorage.removeItem("auth"),u(null),a.push("/")},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),a=localStorage.getItem("pedido"),l=localStorage.getItem("pedidoV"),r=localStorage.getItem("cartera"),o=localStorage.getItem("cliente"),i=localStorage.getItem("clienteV");i&&A(JSON.parse(i)),l&&g(JSON.parse(l)),r&&N(JSON.parse(r)),e&&u(JSON.parse(e)),o&&f(JSON.parse(o)),a&&m(JSON.parse(a)),t&&c(JSON.parse(t))},[]);let I=(0,r.useMemo)(()=>({auth:h,cliente:x,setCliente:f,pedido:p,setPedido:m,caja:d,setCaja:c,clienteV:S,setClienteV:A,pedidosV:C,setPedidosV:g,carteraV:j,setCarteraV:N,loading:n,login:O,logout:E}),[h,x,p,d,S,C,j,O,E]);return(0,l.jsx)(s.Provider,{value:I,children:t})},d=()=>(0,r.useContext)(s)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3524,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,7653,914,8441,1517,7358],()=>t(44853)),_N_E=e.O()}]);