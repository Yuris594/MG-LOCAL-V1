(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1980],{83686:()=>{},32383:()=>{},49994:(e,t,l)=>{Promise.resolve().then(l.bind(l,2017))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>M});var a=l(95155),r=l(20457),i=l(75436),s=l(11451),n=l(46805),o=l(894),d=l(2295),c=l(9561),u=l(81894),h=l(91888),x=l(74676),f=l(92080),m=l(96212),A=l(6069),p=l(9581),g=l(43677),S=l(85244),j=l(85067),C=l(2138);l(76046);var O=l(70689),E=l(12115),N=l(4918),D=l(41983),w=l(36017),I=l(2091),T=l(60391),b=l(48173),v=l.n(b);let P=e=>{let{page:t}=e;return(0,a.jsx)(i.default,{children:(0,a.jsx)(N.A,{children:t.map(e=>(0,a.jsx)(D.Ay,{disablePadding:!0,children:(0,a.jsxs)(w.A,{LinkComponent:v(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(I.A,{children:e.icon}),(0,a.jsx)(T.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var k=l(78897),y=l.n(k),R=l(79046),_=l.n(R);let M=()=>{let{auth:e,logout:t}=(0,O.A)(),[l,N]=(0,E.useState)(null),[D,w]=(0,E.useState)(!1),I=()=>{w(!1),N(null)},T=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,a.jsx)(x.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,a.jsx)(f.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,a.jsx)(m.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(A.A,{}),onClick:e=>{w(!0),N(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(p.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(g.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),(0,a.jsxs)(i.default,{sx:{flexGrow:1},children:[(0,a.jsx)(s.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(n.A,{children:[(0,a.jsx)(o.A,{color:"inherit",onClick:e=>{N(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(S.A,{})}),(0,a.jsx)(i.default,{sx:{display:{xs:"none",md:"flex"}},children:T.map(e=>(0,a.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:v(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(d.default,{component:v(),href:"/start",color:"inherit",children:(0,a.jsx)(C.A,{})}),(0,a.jsxs)(d.default,{className:_().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(m.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(d.default,{color:"inherit",onClick:()=>{y().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(j.A,{})})]})}),(0,a.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:D,onClose:I,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(h.A,{onClick:I,component:v(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,a.jsx)(h.A,{onClick:I,component:v(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{N(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(P,{page:T})})]})]})}},76134:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var a=l(95155),r=l(7660),i=l(12115),s=l(2295);let n=e=>{let{datos:t}=e,[l,n]=(0,i.useState)(!1);return(0,a.jsx)(s.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}n(!0);try{let e=r.Wp.book_new(),l=r.Wp.json_to_sheet(t);r.Wp.book_append_sheet(e,l,"Datos"),r._h(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{n(!1)}},disabled:l,children:l?"Loading...":"Excel"})}},2017:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>O});var a=l(95155),r=l(9561),i=l(86898),s=l(75436),n=l(54255),o=l(2295),d=l(70152),c=l(12115),u=l(57653),h=l(49359),x=l(76046),f=l(39241),m=l(76134),A=l(65068),p=l(70689),g=l(8889);let S=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),j=[{field:"FECHA_PEDIDO",headerName:"FECHA",width:170,renderCell:e=>S(e.value)},{field:"PEDIDO",headerName:"PEDIDO",width:160},{field:"ESTADO",headerName:"ESTADO",width:70},{field:"IMPRESO",headerName:"IMP",width:70},{field:"AUTORIZADONOM",headerName:"AUTORIZADO",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,a.jsx)(r.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}},{field:"U_COMPESPECIAL",headerName:"ESP",width:190},{field:"VENDEDOR",headerName:"VEND",width:100},{field:"COMENTARIO_CXC",headerName:"AUT. SISTEMA",width:250},{field:"TOTAL_A_FACTURAR",headerName:"A FACT",width:120},{field:"NOMBRE_RAZON",headerName:"CLIENTE",width:400},{field:"U_EDITADOPOR",headerName:"USUARIO MG",width:100},{field:"DEPTO",headerName:"DEPARTAMENTO",width:130},{field:"CIUDAD",headerName:"CIUDAD",width:200}],C=async()=>{let e=await fetch(g.c.url+"/pedidos/listar",{next:{revalidate:60},method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()},O=()=>{let e=(0,x.useRouter)(),{setPedido:t}=(0,p.A)(),[l,r]=(0,c.useState)([]),[g,S]=(0,c.useState)(!0),[O,E]=(0,c.useState)(),[N,D]=(0,c.useState)([]),[w,I]=(0,c.useState)(),T=(0,i.A)("(max-width: 600px)");(0,c.useEffect)(()=>{(async()=>{let e=await C();try{S(!1),I(e),E(e)}catch(e){console.log(e)}})()},[]);let b=e=>{I(O.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},v=(0,c.useCallback)(l=>{if(D(l),l.length>0){let a=O.filter(e=>{let t=e.PEDIDO;return!!t&&t.toString().includes(l[0])});localStorage.setItem("pedidoTemp",JSON.stringify(a)),t(a),e.push("/start/pedidos/pedidosC")}},[w]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.default,{children:[" "," ",(0,a.jsx)(A.A,{})," "," "]}),(0,a.jsx)("div",{className:"container",children:!0===g?(0,a.jsx)(s.default,{sx:{width:"100%"},children:(0,a.jsx)(n.A,{})}):(0,a.jsx)(s.default,{children:(0,a.jsxs)(f.A,{container:!0,direction:"column",sx:{minHeight:"100vh",backfroundColor:"#ffffff",padding:2},children:[(0,a.jsx)(f.A,{size:12,children:(0,a.jsxs)(s.default,{sx:{display:"flex",flexDirection:T?"column":"row",alignItems:"center",gap:2,marginBottom:2},children:[(0,a.jsx)("h2",{children:(0,a.jsx)("strong",{children:"PEDIDOS"})}),(0,a.jsxs)(s.default,{sx:{display:"flex",flexDirection:T?"column":"row",alignItems:"center",gap:2,marginLeft:T?0:"auto",width:T?"100%":"auto"},children:[(0,a.jsxs)(o.default,{variant:"outlined",sx:{margin:"10px"},children:[" ","Nuevo"," "]}),(0,a.jsx)(m.A,{datos:w})]})]})}),(0,a.jsx)(f.A,{size:12,sx:{padding:2},children:(0,a.jsx)(d.A,{id:"outlined-basic",placeholder:"Buscar...",multiline:!0,rows:1,variant:"outlined",value:l,onChange:e=>{r(e.target.value),b(e.target.value)},sx:{width:"100%"}})}),(0,a.jsx)(f.A,{size:12,sx:{flexGrow:1,marginBottom:2},children:(0,a.jsx)(s.default,{sx:{width:"100%",height:T?500:795},children:(0,a.jsx)(u.z,{rows:w,columns:j,initialState:{pagination:{paginationModel:{page:0,pageSize:12}}},pageSizeOptions:[12],onRowSelectionModelChange:v,slots:{toolbar:h.O},rowSelectionModel:N,getRowId:e=>e.PEDIDO,sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})})]})})})]})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>d,AuthProvider:()=>o});var a=l(95155),r=l(12115),i=l(76046),s=l(89208);let n=(0,r.createContext)({login:e=>{},logout:()=>{}}),o=e=>{let{children:t}=e,l=(0,i.useRouter)(),[o]=(0,r.useState)(!0),[d,c]=(0,r.useState)({}),[u,h]=(0,r.useState)(null),[x,f]=(0,r.useState)({}),[m,A]=(0,r.useState)({}),[p,g]=(0,r.useState)({}),[S,j]=(0,r.useState)({}),[C,O]=(0,r.useState)({}),E=(0,r.useCallback)(function(e){s.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),h(e)},[]),N=(0,r.useCallback)(function(){s.A.remove("authTokens"),localStorage.removeItem("auth"),h(null),l.push("/")},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),l=localStorage.getItem("pedido"),a=localStorage.getItem("pedidoV"),r=localStorage.getItem("cartera"),i=localStorage.getItem("cliente"),s=localStorage.getItem("clienteV");s&&g(JSON.parse(s)),a&&j(JSON.parse(a)),r&&O(JSON.parse(r)),e&&h(JSON.parse(e)),i&&A(JSON.parse(i)),l&&f(JSON.parse(l)),t&&c(JSON.parse(t))},[]);let D=(0,r.useMemo)(()=>({auth:u,cliente:m,setCliente:A,pedido:x,setPedido:f,caja:d,setCaja:c,clienteV:p,setClienteV:g,pedidosV:S,setPedidosV:j,carteraV:C,setCarteraV:O,loading:o,login:E,logout:N}),[u,m,x,d,p,S,C,E,N]);return(0,a.jsx)(n.Provider,{value:D,children:t})},d=()=>(0,r.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3524,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,7653,6899,4366,8441,1517,7358],()=>t(49994)),_N_E=e.O()}]);