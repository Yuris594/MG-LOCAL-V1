(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{83686:()=>{},32383:()=>{},48332:(e,t,l)=>{Promise.resolve().then(l.bind(l,90851))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>P});var s=l(95155),i=l(20457),r=l(75436),n=l(11451),o=l(46805),a=l(894),c=l(2295),d=l(9561),u=l(81894),h=l(91888),x=l(74676),f=l(92080),p=l(96212),m=l(6069),j=l(9581),g=l(43677),A=l(85244),C=l(85067),S=l(2138);l(76046);var E=l(70689),N=l(12115),w=l(4918),O=l(41983),v=l(36017),b=l(2091),L=l(60391),T=l(48173),I=l.n(T);let k=e=>{let{page:t}=e;return(0,s.jsx)(r.default,{children:(0,s.jsx)(w.A,{children:t.map(e=>(0,s.jsx)(O.Ay,{disablePadding:!0,children:(0,s.jsxs)(v.A,{LinkComponent:I(),href:e.url,onClick:e.onClick,children:[(0,s.jsx)(b.A,{children:e.icon}),(0,s.jsx)(L.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var y=l(78897),R=l.n(y),D=l(79046),M=l.n(D);let P=()=>{let{auth:e,logout:t}=(0,E.A)(),[l,w]=(0,N.useState)(null),[O,v]=(0,N.useState)(!1),b=()=>{v(!1),w(null)},L=[{title:"USUARIOS ",url:"./usuarios",icon:(0,s.jsx)(x.A,{})},{title:"PEDIDOS",url:"./pedidos",icon:(0,s.jsx)(f.A,{})},{title:"CLIENTES",url:"./clients",icon:(0,s.jsx)(p.A,{})},{title:"PRODUCTOS",icon:(0,s.jsx)(m.A,{}),onClick:e=>{v(!0),w(e.currentTarget)}},{title:"FACTURAS",url:"./facturas",icon:(0,s.jsx)(j.A,{})},{title:"CAJA",url:"./pedidos/pedidosCaja",icon:(0,s.jsx)(g.A,{})}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{}),(0,s.jsxs)(r.default,{sx:{flexGrow:1},children:[(0,s.jsx)(n.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{color:"inherit",onClick:e=>{w(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,s.jsx)(A.A,{})}),(0,s.jsx)(r.default,{sx:{display:{xs:"none",md:"flex"}},children:L.map(e=>(0,s.jsx)(c.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:I(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,s.jsx)(d.default,{variant:"h6",sx:{flexGrow:1}}),(0,s.jsx)(c.default,{component:I(),href:"/start",color:"inherit",children:(0,s.jsx)(S.A,{})}),(0,s.jsxs)(c.default,{className:M().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,s.jsx)(p.A,{}),e&&e.PER_Nom]}),(0,s.jsx)(c.default,{color:"inherit",onClick:()=>{R().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,s.jsx)(C.A,{})})]})}),(0,s.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:O,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,s.jsx)(h.A,{onClick:b,component:I(),href:"./buscarProd",children:"Buscar Por Referencias"}),(0,s.jsx)(h.A,{onClick:b,component:I(),href:"./productosMG",children:"Lista de Todos Los Productos"})]}),(0,s.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{w(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,s.jsx)(k,{page:L})})]})]})}},76134:(e,t,l)=>{"use strict";l.d(t,{A:()=>o});var s=l(95155),i=l(7660),r=l(12115),n=l(2295);let o=e=>{let{datos:t}=e,[l,o]=(0,r.useState)(!1);return(0,s.jsx)(n.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=i.Wp.book_new(),l=i.Wp.json_to_sheet(t);i.Wp.book_append_sheet(e,l,"Datos"),i._h(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:l,children:l?"Loading...":"Excel"})}},90851:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>S});var s=l(95155),i=l(48173),r=l.n(i),n=l(75436);l(8889);var o=l(39241),a=l(2295),c=l(76046),d=l(70689),u=l(65068),h=l(76134),x=l(12115),f=l(74205),p=l(49359),m=l(86898),j=l(54255),g=l(70152);let A=[{field:"CLIENTE",headerName:"NIT",width:170},{field:"NOMBREALIAS",headerName:"NOMBRE",width:800},{field:"DIRECCION",headerName:"DIRECCI\xd3N",width:300},{field:"TELEFONO1",headerName:"TELEFONO",width:190},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:450},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],C=async()=>{let e=await fetch("/api/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()},S=()=>{let e=(0,c.useRouter)(),{setCliente:t}=(0,d.A)(),[l,i]=(0,x.useState)([]),[S,E]=(0,x.useState)(!0),[N,w]=(0,x.useState)([]),[O,v]=(0,x.useState)(),[b,L]=(0,x.useState)(),T=(0,m.A)("(max-width: 600px)");(0,x.useEffect)(()=>{(async()=>{let e=await C();try{L(e),v(e),E(!1)}catch(e){console.log(e)}})()},[]);let I=e=>{L(O.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),s=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),i=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==s?void 0:s.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))?t:null}))},k=(0,x.useCallback)(l=>{if(w(l),l.length>0){let s=O.filter(e=>{let t=e.CLIENTE;return!!t&&t.toString().includes(l[0])});localStorage.setItem("clientTemp",JSON.stringify(s)),t(s),e.push("/start/clients/clientesTemp")}},[b]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{children:[" ",(0,s.jsx)(u.A,{})," "]}),(0,s.jsx)(n.default,{className:"container",children:!0===S?(0,s.jsx)(n.default,{sx:{width:"100%"},children:(0,s.jsx)(j.A,{})}):(0,s.jsxs)(o.A,{container:!0,direction:"column",sx:{minHeight:"90vh",backfroundColor:"#ffffff",padding:2},children:[(0,s.jsxs)(n.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,s.jsx)(o.A,{size:{xs:12,sm:8,md:6},children:(0,s.jsx)("h2",{children:(0,s.jsx)("strong",{children:"CLIENTES"})})}),(0,s.jsx)(r(),{href:"",children:(0,s.jsx)(a.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"})}),(0,s.jsx)(h.A,{datos:b}),(0,s.jsx)(o.A,{size:{xs:12,sm:8,md:6},sx:{padding:2},children:(0,s.jsx)(g.A,{id:"outlined-basic",multiline:!0,rows:1,variant:"outlined",placeholder:"Buscar...",value:l,onChange:e=>{e.preventDefault(),i(e.target.value),I(e.target.value)},sx:{width:"100%"}})})]}),(0,s.jsx)(o.A,{size:12,sx:{flexGrow:1,marginBottom:2},children:(0,s.jsx)(n.default,{sx:{width:"100%",height:T?500:799},children:(0,s.jsx)(f.z,{rows:b,columns:A,initialState:{pagination:{paginationModel:{page:0,pageSize:12}}},pageSizeOptions:[12,20,30],onRowSelectionModelChange:k,rowSelectionModel:N,getRowId:e=>e.CLIENTE,slots:{toolbar:p.O},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})})]})})]})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>s});let s={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>c,AuthProvider:()=>a});var s=l(95155),i=l(12115),r=l(76046),n=l(89208);let o=(0,i.createContext)({login:e=>{},logout:()=>{}}),a=e=>{let{children:t}=e,l=(0,r.useRouter)(),[a]=(0,i.useState)(!0),[c,d]=(0,i.useState)(null),[u,h]=(0,i.useState)({}),[x,f]=(0,i.useState)({}),[p,m]=(0,i.useState)({}),j=(0,i.useCallback)(function(e){n.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),d(e)},[]),g=(0,i.useCallback)(function(){l.push("/"),n.A.remove("authTokens"),localStorage.removeItem("auth"),d(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth")||n.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),s=localStorage.getItem("cliente");s&&h(JSON.parse(s)),t&&f(JSON.parse(t)),l&&m(JSON.parse(l)),e&&d(JSON.parse(e))},[]);let A=(0,i.useMemo)(()=>({auth:c,cliente:u,setCliente:h,pedido:x,setPedido:f,caja:p,setCaja:m,loading:a,login:j,logout:g}),[c,u,x,p,j,g]);return(0,s.jsx)(o.Provider,{value:A,children:t})},c=()=>(0,i.useContext)(o)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3524,9754,1083,1260,6403,152,8173,2670,7493,4205,6899,4366,8441,1517,7358],()=>t(48332)),_N_E=e.O()}]);