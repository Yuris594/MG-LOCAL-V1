(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1671],{97895:(e,t,a)=>{Promise.resolve().then(a.bind(a,22536))},65068:(e,t,a)=>{"use strict";a.d(t,{A:()=>z});var i=a(95155),l=a(20457),o=a(75436),s=a(11451),n=a(46805),r=a(894),d=a(2295),u=a(9561),c=a(81894),h=a(91888),x=a(74676),m=a(92080),f=a(96212),p=a(6069),j=a(9581),g=a(43677),C=a(85244),A=a(85067),S=a(2138);a(76046);var b=a(70689),E=a(12115),O=a(4918),v=a(41983),P=a(36017),N=a(2091),w=a(60391),D=a(48173),I=a.n(D);let R=e=>{let{page:t}=e;return(0,i.jsx)(o.default,{children:(0,i.jsx)(O.A,{children:t.map(e=>(0,i.jsx)(v.Ay,{disablePadding:!0,children:(0,i.jsxs)(P.A,{LinkComponent:I(),href:e.url,onClick:e.onClick,children:[(0,i.jsx)(N.A,{children:e.icon}),(0,i.jsx)(w.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var y=a(78897),T=a.n(y),U=a(79046),k=a.n(U);let z=()=>{let{auth:e,logout:t}=(0,b.A)(),[a,O]=(0,E.useState)(null),[v,P]=(0,E.useState)(!1),N=()=>{P(!1),O(null)},w=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,i.jsx)(x.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,i.jsx)(m.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,i.jsx)(f.A,{})},{title:"PRODUCTOS",icon:(0,i.jsx)(p.A,{}),onClick:e=>{P(!0),O(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,i.jsx)(j.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,i.jsx)(g.A,{})}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{}),(0,i.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,i.jsx)(s.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,i.jsxs)(n.A,{children:[(0,i.jsx)(r.A,{color:"inherit",onClick:e=>{O(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(C.A,{})}),(0,i.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:w.map(e=>(0,i.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:I(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,i.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,i.jsx)(d.default,{component:I(),href:"/start",color:"inherit",children:(0,i.jsx)(S.A,{})}),(0,i.jsxs)(d.default,{className:k().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,i.jsx)(f.A,{}),e&&e.PER_Nom]}),(0,i.jsx)(d.default,{color:"inherit",onClick:()=>{T().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,i.jsx)(A.A,{})})]})}),(0,i.jsxs)(c.A,{id:"basic-menu",anchorEl:a,open:v,onClose:N,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(h.A,{onClick:N,component:I(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,i.jsx)(h.A,{onClick:N,component:I(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,i.jsx)(c.A,{id:"basic-menu",anchorEl:a,MenuListProps:{"aria-labelledby":"basic-button"},open:!!a,onClose:()=>{O(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(R,{page:w})})]})]})}},22536:(e,t,a)=>{"use strict";a.r(t),a.d(t,{conexion:()=>E,default:()=>P});var i=a(95155),l=a(86898),o=a(75436),s=a(54255),n=a(23613),r=a(2295),d=a(70152),u=a(12115),c=a(74205),h=a(49359),x=a(65068),m=a(14447),f=a(70689),p=a(76046),j=a(41108),g=a(39241),C=a(8889),A=a(78897),S=a.n(A);let b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",height:"auto",bgcolor:"background.paper",boxShadow:24};function E(){S().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",button:"Aceptar"})}let O=[{field:"PER_Nom",headerName:"NOMBRE",width:200,editable:!0},{field:"PER_Usuario",headerName:"USUARIO",width:150,editable:!0},{field:"PER_Clave",headerName:"CONTRASE\xd1A",width:150,editable:!0},{field:"IdDiv",headerName:"ID DIVISI\xd3N",type:"number",width:120,editable:!0},{field:"PERAUTOPED",headerName:"AUTO PEDIDOS",type:"number",width:130,editable:!0},{field:"CODVEND",headerName:"C\xd3DIGO VENDEDOR",width:150,editable:!0},{field:"PREFIJO",headerName:"PREFIJO",width:120,editable:!0},{field:"CONSECUTIVOPED",headerName:"CONSECUTIVO PEDIDOS",type:"number",width:180,editable:!0}],v=async()=>{let e=await fetch(C.c.url+"/usuarios/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()},P=function(){let e=(0,p.useRouter)(),{auth:t}=(0,f.A)(),[a,C]=(0,u.useState)(!1),A=()=>C(!1),[E,P]=(0,u.useState)(!1),[N,w]=(0,u.useState)([]),[D,I]=(0,u.useState)([]),[R,y]=(0,u.useState)([]),[T,U]=(0,u.useState)(),[k,z]=(0,u.useState)([]),[_,J]=(0,u.useState)([]),[V,W]=(0,u.useState)(!0),F=(0,l.A)("(max-width : 600px)");(0,u.useEffect)(()=>{L()},[]);let B=()=>{w([]),P(!1)},L=async()=>{let e=await v();try{e&&W(!1),I(e),z(e)}catch(e){console.log(e)}},M=e=>{I(k.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},G=(0,u.useCallback)(e=>{J(e),e.length>0&&(w(k.filter(t=>{let a=t.IdPer;return!!a&&a.toString().includes(e[0])})),P(!0))},[D]);return((0,u.useEffect)(()=>{void 0===t||(U(!1),t&&8===t.IdDiv||(e.push("/start"),S().fire({title:"No Autorizado.",text:"Usted No Tiene Autorizaci\xf3n Para Visualizar Esta Pagina!!",icon:"info"})))},[t,e]),T)?(0,i.jsx)(o.default,{sx:{width:"100%"},children:(0,i.jsx)(s.A,{})}):t&&8===t.IdDiv?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[" ",(0,i.jsx)(x.A,{})," "," "]}),(0,i.jsx)(o.default,{className:"container",children:!0===V?(0,i.jsx)(o.default,{sx:{width:"100%"},children:(0,i.jsx)(s.A,{})}):(0,i.jsxs)(o.default,{style:{height:"auto",width:"100%"},children:[(0,i.jsx)(n.A,{open:a,onClose:A,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(o.default,{sx:b,children:(0,i.jsx)(j.default,{onClose:A})})}),(0,i.jsx)(n.A,{open:E,onClose:B,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(o.default,{sx:b,children:(0,i.jsx)(m.default,{usuario:N,onClose:B})})}),(0,i.jsxs)(g.A,{container:!0,direction:"column",sx:{minHeight:"90vh",backfroundColor:"#ffffff",padding:2},children:[(0,i.jsxs)(o.default,{sx:{display:"flex",flexDirection:F?"column":"row",alignItems:"center",gap:2,marginBottom:2},children:[(0,i.jsx)(g.A,{size:{xs:12,sm:8,md:6},children:(0,i.jsx)("h2",{children:(0,i.jsx)("strong",{children:"USUARIOS"})})}),(0,i.jsx)(r.default,{variant:"outlined",onClick:()=>C(!0),sx:{margin:1},color:"primary",children:"Nuevo Usuario"}),(0,i.jsx)(g.A,{size:{xs:12,sm:8,md:6},children:(0,i.jsx)(d.A,{id:"outlined-basic",placeholder:"Buscar...",value:R,onChange:e=>{e.preventDefault(),y(e.target.value),M(e.target.value)},variant:"outlined",sx:{width:"100%"}})})]}),(0,i.jsx)(g.A,{size:12,sx:{flexGrow:1,marginBottom:2},children:(0,i.jsx)(o.default,{sx:{height:F?500:779,width:"100%"},children:(0,i.jsx)(c.z,{rows:D,columns:O,initialState:{pagination:{paginationModel:{page:0,pageSize:12}}},pageSizeOptions:[12,36],getRowId:e=>e.IdPer,onRowSelectionModelChange:G,rowSelectionModel:_,slots:{toolbar:h.O},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})})]})]})})]}):null}},41108:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var i=a(95155),l=a(35761),o=a(86898),s=a(33345),n=a(20457),r=a(80906),d=a(10897),u=a(75436),c=a(70152),h=a(2295),x=a(39241),m=a(8889),f=a(12115);let p=async e=>(await fetch(m.c.url+"/usuarios/nuevo",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),j=e=>{let{onClose:t}=e,[a,m]=(0,f.useState)({}),[j,g]=(0,f.useState)(!1),[C,A]=(0,f.useState)(!1),S=(0,l.default)();(0,o.A)(S.breakpoints.down("sm"));let b=e=>{m({...a,[e.target.name]:e.target.value})},E=async e=>{if(e.preventDefault(),console.log("Datos del formulario",a),!a.PER_Nom||!a.IdDiv){A(!0);return}try{(await p(a)).ok?(t(),g(!0),console.log("Salida exitosa"),window.location.reload()):A(!0)}catch(e){console.error("Error al enviar la solicitud: ",e)}},O=e=>{"clickaway"!==e&&(g(!1),A(!1))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.default,{component:"main",maxWidth:"xs",children:[(0,i.jsx)(n.default,{}),j?(0,i.jsx)(r.A,{open:j,autoHideDuration:2e3,onClose:O,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,i.jsx)(d.A,{onClose:O,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",C?(0,i.jsx)(r.A,{open:C,autoHideDuration:2e3,onClose:O,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,i.jsx)(d.A,{onClose:O,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,i.jsxs)(u.default,{sx:{backgroundColor:"white",maxWidth:"100%",width:"100%",height:"40vh",overflowY:"auto",padding:2,mt:2,boxShadow:1,borderRadius:1},children:[(0,i.jsx)("h2",{style:{textAlign:"center"},children:"REGISTRO DE USUARIO"}),(0,i.jsxs)(u.default,{component:"form",onSubmit:E,children:[(0,i.jsxs)(x.A,{container:!0,spacing:2,children:[(0,i.jsx)(x.A,{size:{sx:12,md:6},children:(0,i.jsx)(c.A,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:a.PER_Nom||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:6},children:(0,i.jsx)(c.A,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:a.PER_Usuario||"",onChange:b})}),(0,i.jsx)(x.A,{size:12,children:(0,i.jsx)(c.A,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:a.PER_Clave||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:6},children:(0,i.jsx)(c.A,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:a.IdDiv||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:6},children:(0,i.jsx)(c.A,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:a.PERAUTOPED||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:4},children:(0,i.jsx)(c.A,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:a.CODVEND||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:4},children:(0,i.jsx)(c.A,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:a.PREFIJO||"",onChange:b})}),(0,i.jsx)(x.A,{size:{sx:12,md:4},children:(0,i.jsx)(c.A,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:a.CONSECUTIVOPED||"",onChange:b})})]}),(0,i.jsx)(h.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}},70689:(e,t,a)=>{"use strict";a.d(t,{A:()=>d,AuthProvider:()=>r});var i=a(95155),l=a(12115),o=a(76046),s=a(89208);let n=(0,l.createContext)({login:e=>{},logout:()=>{}}),r=e=>{let{children:t}=e,a=(0,o.useRouter)(),[r]=(0,l.useState)(!0),[d,u]=(0,l.useState)({}),[c,h]=(0,l.useState)(null),[x,m]=(0,l.useState)({}),[f,p]=(0,l.useState)({}),[j,g]=(0,l.useState)({}),[C,A]=(0,l.useState)({}),[S,b]=(0,l.useState)({}),E=(0,l.useCallback)(function(e){s.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),h(e)},[]),O=(0,l.useCallback)(function(){s.A.remove("authTokens"),localStorage.removeItem("auth"),h(null),a.push("/")},[]);(0,l.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),a=localStorage.getItem("pedido"),i=localStorage.getItem("pedidoV"),l=localStorage.getItem("cartera"),o=localStorage.getItem("cliente"),s=localStorage.getItem("clienteV");s&&g(JSON.parse(s)),i&&A(JSON.parse(i)),l&&b(JSON.parse(l)),e&&h(JSON.parse(e)),o&&p(JSON.parse(o)),a&&m(JSON.parse(a)),t&&u(JSON.parse(t))},[]);let v=(0,l.useMemo)(()=>({auth:c,cliente:f,setCliente:p,pedido:x,setPedido:m,caja:d,setCaja:u,clienteV:j,setClienteV:g,pedidosV:C,setPedidosV:A,carteraV:S,setCarteraV:b,loading:r,login:E,logout:O}),[c,f,x,d,j,C,S,E,O]);return(0,i.jsx)(n.Provider,{value:v,children:t})},d=()=>(0,l.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,4205,6899,3882,4366,4447,8441,1517,7358],()=>t(97895)),_N_E=e.O()}]);