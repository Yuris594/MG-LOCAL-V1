(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6054],{72754:(e,t,l)=>{Promise.resolve().then(l.bind(l,16397))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>z});var a=l(95155),i=l(20457),s=l(75436),r=l(11451),n=l(46805),d=l(894),o=l(2295),c=l(9561),h=l(81894),u=l(91888),x=l(74676),m=l(92080),f=l(96212),p=l(6069),A=l(9581),C=l(43677),j=l(85244),S=l(85067),N=l(2138);l(76046);var g=l(70689),O=l(12115),E=l(4918),w=l(41983),D=l(36017),I=l(2091),T=l(60391),F=l(48173),b=l.n(F);let y=e=>{let{page:t}=e;return(0,a.jsx)(s.default,{children:(0,a.jsx)(E.A,{children:t.map(e=>(0,a.jsx)(w.Ay,{disablePadding:!0,children:(0,a.jsxs)(D.A,{LinkComponent:b(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(I.A,{children:e.icon}),(0,a.jsx)(T.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var R=l(78897),v=l.n(R),L=l(79046),P=l.n(L);let z=()=>{let{auth:e,logout:t}=(0,g.A)(),[l,E]=(0,O.useState)(null),[w,D]=(0,O.useState)(!1),I=()=>{D(!1),E(null)},T=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,a.jsx)(x.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,a.jsx)(m.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,a.jsx)(f.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(p.A,{}),onClick:e=>{D(!0),E(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(A.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(C.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),(0,a.jsxs)(s.default,{sx:{flexGrow:1},children:[(0,a.jsx)(r.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(n.A,{children:[(0,a.jsx)(d.A,{color:"inherit",onClick:e=>{E(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(j.A,{})}),(0,a.jsx)(s.default,{sx:{display:{xs:"none",md:"flex"}},children:T.map(e=>(0,a.jsx)(o.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:b(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(o.default,{component:b(),href:"/start",color:"inherit",children:(0,a.jsx)(N.A,{})}),(0,a.jsxs)(o.default,{className:P().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(f.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(o.default,{color:"inherit",onClick:()=>{v().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(S.A,{})})]})}),(0,a.jsxs)(h.A,{id:"basic-menu",anchorEl:l,open:w,onClose:I,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(u.A,{onClick:I,component:b(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,a.jsx)(u.A,{onClick:I,component:b(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(h.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{E(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(y,{page:T})})]})]})}},16397:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>P});var a=l(95155),i=l(75436),s=l(86898),r=l(78562),n=l(2295),d=l(2241),o=l(9561),c=l(70152),h=l(62347),u=l(73378),x=l(79987),m=l(54255),f=l(65068),p=l(70689),A=l(12115),C=l(74205),j=l(76046),S=l(39241),N=l(81996),g=l.n(N),O=l(48173),E=l.n(O),w=l(8889);function D(e){let{children:t,value:l,index:s,...r}=e;return(0,a.jsx)("div",{role:"tabpanel",hidden:l!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s),...r,children:l===s&&(0,a.jsx)(i.default,{sx:{p:3},children:t})})}function I(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}D.propTypes={children:g().node,index:g().number.isRequired,value:g().number.isRequired};let T=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),F=[{field:"FECHA_PEDIDO",headerName:"FECHA",width:150,renderCell:e=>T(e.value)},{field:"PEDIDO",headerName:"PEDIDO",width:130,cellClassName:"pedido-cell"},{field:"ESTADO",headerName:"ESTADO",width:130},{field:"AUTORIZADONOM",headerName:"AUTORIZADO",width:130,cellClassName:"autor-cell"},{field:"TOTAL_A_FACTURAR",headerName:"TOTAL A FACTURAR",width:200,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"CreatedBy",headerName:"CREADO POR",width:150},{field:"U_EDITADOPOR",headerName:"EDITADO POR ",width:150},{field:"OBSERVACIONES",headerName:"NOTAS",width:200},{field:"COMENTARIO_CXC",headerName:"COMENTARIOS CL",width:200}],b=[{field:"FACTURA",headerName:"FACTURA",width:130},{field:"FECHA_DESPACHO",headerName:"FECHA",width:190,renderCell:e=>T(e.value)},{field:"ANULADA",headerName:"AN",width:130},{field:"PRECIO_TOTAL",headerName:"V. FACT",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PEDIDO",headerName:"PEDIDO",width:130,cellClassName:"pedido-cell"},{field:"ARTICULO",headerName:"ARTICULO",width:130},{field:"DESCRIPCION",headerName:"DESCRIPCION",width:700},{field:"CANTIDAD",headerName:"CANT",width:130},{field:"PRECIO_UNITARIO",headerName:"PRECIO UNI.",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PORCIVA",headerName:"IVA",width:100},{field:"PORDESC",headerName:"DESC",width:130},{field:"VDESC",headerName:"V DESC",width:130},{field:"TOTAL_MERCADERIA",headerName:"V. TOTAL ",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"IDRUTERO",headerName:"ID RUTERO",width:100},{field:"IDGUIA",headerName:"ID GUIA",width:100},{field:"OBSERVACIONES",headerName:"OBSERVACIONES",width:400},{field:"RUBRO1",headerName:"DOCS 2",width:200}],y=[{field:"DOC",headerName:"DOC",width:130},{field:"FECHADOC",headerName:"FECHA DOC",width:190,renderCell:e=>T(e.value)},{field:"FECHAVENC",headerName:"FECHA VENC",width:190,renderCell:e=>T(e.value)},{field:"NUMDOC",headerName:"NUM DOC",width:130,cellClassName:"autor-cell"},{field:"DIASVENC",headerName:"VENC",width:130},{field:"MONTO",headerName:"MONTO",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"SALDO",headerName:"SALDO",width:130,cellClassName:"plazo-cell",valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"SMenorA30",headerName:"VENC < 30",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"SMayorA60",headerName:"VENC < 60",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"SMenorA60",headerName:"VENC > 60",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))}},{field:"PLAZO",headerName:"PLAZO",width:130,cellClassName:"plazo-cell"},{field:"VENDEDOR",headerName:"VENDEDOR",width:130}],R=async e=>{let t=await fetch(w.c.url+"/clientes/pedidos/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay pedidos para este cliente."),[])},v=async e=>{let t=await fetch(w.c.url+"/clientes/facturas/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este cliente."),[])},L=async e=>{let t=await fetch(w.c.url+"/clientes/cartera/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay cartera para este cliente."),[])},P=()=>{let{cliente:e}=(0,p.A)(),t=(0,j.useRouter)(),[l]=(0,A.useState)([]),[N,g]=(0,A.useState)(3),[O,w]=(0,A.useState)([]),[T,P]=(0,A.useState)([]),[z,k]=(0,A.useState)([]),[M,U]=(0,A.useState)(!1),[V,_]=(0,A.useState)(e[0]),[B,$]=(0,A.useState)(0),[H,J]=(0,A.useState)(0),G=(0,s.A)("(max-width: 600px)");(0,A.useEffect)(()=>{U(!0),V&&(Z(V.CLIENTE),q(V.CLIENTE),Y(V.CLIENTE))},[N]),(0,A.useEffect)(()=>{if(Array.isArray(O)){let e=Number(O.reduce((e,t)=>e+t.SMayorA60,0)).toFixed(0);J("".concat(parseFloat(e).toLocaleString()));let t=Number(O.reduce((e,t)=>e+t.SALDO,0)).toFixed(0);$("".concat(parseFloat(t).toLocaleString()))}},[O]);let Z=async()=>{let e=await R(V);e?P(e):(console.log("Error al obtener los datos"),P([])),U(!1)},q=async()=>{let e=await v(V);e?k(e):(console.log("Error al obtener los datos"),k([])),U(!1)},Y=async()=>{let e=await L(V);e?w(e):(console.log("Error al obtener los datos"),w([])),U(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{children:(0,a.jsx)(f.A,{})}),(0,a.jsx)(i.default,{children:(0,a.jsxs)(r.A,{elevation:3,sx:{padding:3,margin:3,marginTop:3},children:[(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:G?"column":"row",justifyContent:"flex-end",alignItems:"center",gap:2},children:[(0,a.jsxs)(n.default,{variant:"contained",sx:{bgcolor:"#ffa28a",color:"white"},onClick:()=>{t.push("./"),localStorage.removeItem("clientTemp"),_("")},children:[" ","Cerrar"," "]}),(0,a.jsx)(n.default,{variant:"contained",sx:{bgcolor:"#12e7dd",color:"white"},LinkComponent:E(),href:".././pedidos/crearPedido",children:"Crear Pedido"})]}),(0,a.jsx)(d.A,{orientation:"horizontal"}),(0,a.jsx)("h3",{children:(0,a.jsx)("strong",{style:{fontSize:20,color:"#6d32f7"},children:(null==V?void 0:V.NOMBREALIAS)||""})}),(0,a.jsx)(i.default,{sx:{display:"flex",justifyContent:"space-between",flexDirection:G?"column":"row",alignItems:"center"},children:(0,a.jsxs)(S.A,{container:!0,rowSpacing:1.5,columnSpacing:{xs:1,sm:2,md:3},sx:{p:1},children:[(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"NIT"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.CLIENTE)||""})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Cupo"}),(0,a.jsxs)(o.default,{sx:{mb:1.5,display:"flex",color:"#16f50f"},children:["$",Number((null==V?void 0:V.CUPO)||"0").toLocaleString("es-ES")]})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Debe"}),(0,a.jsxs)(o.default,{sx:{mb:1.5,display:"flex",color:"#f50f0f"},children:["$",Number((null==V?void 0:V.SALDO)||"0").toLocaleString("es-ES")]})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Direcci\xf3n"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.DIRECCION)||""})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Tel\xe9fono"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.TELEFONO1)||""})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Celular"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.TELEFONO1)||""})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Ciudad"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.CIUDAD)||""})]}),(0,a.jsxs)(S.A,{size:{xs:9,sm:6,md:3},children:[(0,a.jsx)("strong",{children:"Departamento"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.DEPARTAMENTO)||""})]}),(0,a.jsxs)(S.A,{size:{xs:12,sm:8,md:8},children:[(0,a.jsx)("strong",{children:"Email"}),(0,a.jsx)(o.default,{sx:{mb:1.5,display:"flex"},children:(null==V?void 0:V.E_MAIL)||""})]}),(0,a.jsx)(S.A,{size:{xs:12,sm:8,md:8},children:(0,a.jsx)(c.A,{id:"outlined-basic",multiline:!0,rows:3,defaultValue:(null==V?void 0:V.NOTAS)||"",variant:"outlined",sx:{width:"100%",border:"2px solid #13ace9"}})}),(0,a.jsx)(S.A,{size:{xs:12,sm:8,md:4},children:(0,a.jsx)(i.default,{sx:{dispĺay:"flex",justifyContent:"space-around",alignItems:"center",gap:2,flexWrap:G?"wrap":"nowrap"},children:(0,a.jsx)(i.default,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,a.jsxs)(h.A,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(n.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(o.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:["$",B]}),(0,a.jsx)("strong",{children:"Saldo"})]}),(0,a.jsxs)(n.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(o.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:["$",H]}),(0,a.jsx)("strong",{children:"Saldo Mayor a 60"})]})]})})})})]})})]}),(0,a.jsxs)(i.default,{sx:{width:"100%",mt:3},children:[(0,a.jsxs)(u.A,{value:N,onChange:(e,t)=>{g(t)},"aria-label":"basic tabs example",children:[(0,a.jsx)(x.A,{label:"Pedidos",...I(0),onClick:Z}),(0,a.jsx)(x.A,{label:"Facturas",...I(1),onClick:q}),(0,a.jsx)(x.A,{label:"Cartera",...I(2),onClick:Y}),(0,a.jsx)(x.A,{label:"",...I(3)})]}),(0,a.jsx)(D,{value:N,index:0,children:(0,a.jsx)(i.default,{sx:{width:"100%",height:350},children:!0===M?(0,a.jsx)(i.default,{sx:{width:"100%"},children:(0,a.jsx)(m.A,{})}):T.length<=0?(0,a.jsx)("h2",{children:"NO HAY PEDIDOS"}):(0,a.jsx)(C.z,{density:"compact",rows:T,columns:F,pageSizeOptions:[5,10],rowSelectionModel:l,getRowId:e=>e.PEDIDO,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})}),(0,a.jsx)(D,{value:N,index:1,children:(0,a.jsx)(i.default,{sx:{width:"100%",height:350},children:!0===M?(0,a.jsx)(i.default,{sx:{width:"100%"},children:(0,a.jsx)(m.A,{})}):z.length<=0?(0,a.jsx)("h2",{children:"NO HAY FACTURAS"}):(0,a.jsx)(C.z,{density:"compact",rows:z,columns:b,getRowId:e=>e.ID,pageSize:[5,10],rowSelectionModel:l,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})}),(0,a.jsx)(D,{value:N,index:2,children:(0,a.jsx)(i.default,{sx:{width:"100%",height:350},children:!0===M?(0,a.jsx)(i.default,{sx:{width:"100%"},children:(0,a.jsx)(m.A,{})}):O.length<=0?(0,a.jsx)("h2",{children:"NO HAY CARTERA"}):(0,a.jsx)(C.z,{density:"compact",rows:O,columns:y,pageSizeOptions:[5,10],rowSelectionModel:l,getRowId:e=>e.NUMDOC,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})})]})]})})]})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>o,AuthProvider:()=>d});var a=l(95155),i=l(12115),s=l(76046),r=l(89208);let n=(0,i.createContext)({login:e=>{},logout:()=>{}}),d=e=>{let{children:t}=e,l=(0,s.useRouter)(),[d]=(0,i.useState)(!0),[o,c]=(0,i.useState)({}),[h,u]=(0,i.useState)(null),[x,m]=(0,i.useState)({}),[f,p]=(0,i.useState)({}),[A,C]=(0,i.useState)({}),[j,S]=(0,i.useState)({}),[N,g]=(0,i.useState)({}),O=(0,i.useCallback)(function(e){r.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),u(e)},[]),E=(0,i.useCallback)(function(){r.A.remove("authTokens"),localStorage.removeItem("auth"),u(null),l.push("/")},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),l=localStorage.getItem("pedido"),a=localStorage.getItem("pedidoV"),i=localStorage.getItem("cartera"),s=localStorage.getItem("cliente"),r=localStorage.getItem("clienteV");r&&C(JSON.parse(r)),a&&S(JSON.parse(a)),i&&g(JSON.parse(i)),e&&u(JSON.parse(e)),s&&p(JSON.parse(s)),l&&m(JSON.parse(l)),t&&c(JSON.parse(t))},[]);let w=(0,i.useMemo)(()=>({auth:h,cliente:f,setCliente:p,pedido:x,setPedido:m,caja:o,setCaja:c,clienteV:A,setClienteV:C,pedidosV:j,setPedidosV:S,carteraV:N,setCarteraV:g,loading:d,login:O,logout:E}),[h,f,x,o,A,j,N,O,E]);return(0,a.jsx)(n.Provider,{value:w,children:t})},o=()=>(0,i.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,4205,6899,914,4520,8441,1517,7358],()=>t(72754)),_N_E=e.O()}]);