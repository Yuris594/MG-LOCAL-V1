(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8110],{78217:function(e,t,a){Promise.resolve().then(a.bind(a,41984))},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var l=a(57437),i=a(33579),r=a.n(i),o=a(20124),n=a(31193),d=a(71733),s=a(79806),c=a(60335),h=a(60091),u=a(83719),x=a(62501),f=a(6291),m=a(11656),p=a(66325),g=a(90922),j=a(26032),N=a(55693),S=a(42188),C=a(66299),b=a(40301),E=a(78457),w=a(21704),A=a(66246),O=a(16463),y=a(85800),D=a(2265),I=a(32184),v=a(7547),F=a(57300),Z=a(86917),T=a(47905),P=a(87138),R=e=>{let{page:t}=e;return(0,l.jsx)(n.default,{children:(0,l.jsx)(I.Z,{children:t.map(e=>(0,l.jsx)(v.ZP,{disablePadding:!0,children:(0,l.jsxs)(F.Z,{LinkComponent:P.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(Z.Z,{children:e.icon}),(0,l.jsx)(T.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var k=()=>{let e=(0,O.useRouter)(),{auth:t,logout:a}=(0,y.a)(),[i,I]=(0,D.useState)(!1),[v,F]=(0,D.useState)(null),[Z,T]=(0,D.useState)(!1),k=()=>{T(!1),F(null)},M=[{title:"USUARIOS ",url:"/components/usuarios",icon:(0,l.jsx)(p.Z,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,l.jsx)(g.Z,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,l.jsx)(j.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(N.Z,{}),onClick:e=>{T(!0),F(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,l.jsx)(S.Z,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,l.jsx)(C.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{}),(0,l.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,l.jsx)(d.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(c.Z,{color:"inherit",onClick:e=>{F(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(b.Z,{fontSize:"large"})}),(0,l.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:M.map(e=>(0,l.jsx)(h.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:P.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(h.default,{component:P.default,href:"/start",color:"inherit",children:(0,l.jsx)(A.Z,{fontSize:"large"})}),(0,l.jsxs)(h.default,{className:r().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,l.jsx)(w.Z,{fontSize:"large"}),t&&t.PER_Nom]}),(0,l.jsx)(h.default,{color:"inherit",onClick:()=>I(!0),children:(0,l.jsx)(E.Z,{fontSize:"large"})})]})}),(0,l.jsx)(x.Z,{open:i,onClose:()=>I(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(n.default,{sx:L,children:[(0,l.jsx)(u.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(n.default,{children:(0,l.jsx)(h.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{a(),e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(f.Z,{id:"basic-menu",anchorEl:v,open:Z,onClose:k,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(m.Z,{onClick:k,component:P.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,l.jsx)(m.Z,{onClick:k,component:P.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,l.jsx)(f.Z,{id:"basic-menu",anchorEl:v,MenuListProps:{"aria-labelledby":"basic-button"},open:!!v,onClose:()=>{F(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(R,{page:M})})]})]})}},41984:function(e,t,a){"use strict";a.r(t);var l=a(57437),i=a(31193),r=a(28027),o=a(60091),n=a(14595),d=a(26460),s=a(83719),c=a(68038),h=a(65786),u=a(58433),x=a(23983),f=a(92355),m=a(97183),p=a(99128),g=a(2265),j=a(68265),N=a(41448),S=a.n(N),C=a(87138),b=a(85800),E=a(13726);function w(e){let{children:t,value:a,index:r,...o}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...o,children:a===r&&(0,l.jsx)(i.default,{sx:{p:3},children:t})})}function A(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}w.propTypes={children:S().node,index:S().number.isRequired,value:S().number.isRequired};let O=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),y=[{field:"FECHA_PEDIDO",headerName:"Fecha",width:250,renderCell:e=>O(e.value)},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ESTADO",headerName:"Estado",width:130},{field:"AUTORIZADONOM",headerName:"Autorizado",width:130},{field:"TOTAL_A_FACTURAR",headerName:"Total a facturar",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"CreatedBy",headerName:"Creado por",width:230},{field:"U_EDITADOPOR",headerName:"Editado por",width:130},{field:"OBSERVACIONES",headerName:"Notas ",width:130},{field:"COMENTARIO_CXC",headerName:"Comentarios CL",width:300}],D=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,renderCell:e=>O(e.value)},{field:"ANULADA",headerName:"AN",width:130},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PORCIVA",headerName:"IVA",width:100,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}],I=[{field:"DOC",headerName:"DOC",width:130},{field:"FECHADOC",headerName:"FechaDoc",width:190,renderCell:e=>O(e.value)},{field:"FECHAVENC",headerName:"FechaVenc",width:190,renderCell:e=>O(e.value)},{field:"NUMDOC",headerName:"NumDoc",width:130},{field:"DIASVENC",headerName:"Venc",width:130,align:"right"},{field:"MONTO",headerName:"Monto",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SALDO",headerName:"Saldo",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA30",headerName:"Venc < 30",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMayorA60",headerName:"Venc < 60",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA60",headerName:"Venc > 60",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PLAZO",headerName:"Plazo",width:130,align:"right"},{field:"VENDEDOR",headerName:"VENDEDOR",width:130}],v=async e=>{let t=await fetch("/api/clientes/pedidos/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay pedidos para este cliente."),[])},F=async e=>{let t=await fetch("/api/clientes/facturas/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este cliente."),[])},Z=async e=>{let t=await fetch("/api/clientes/cartera/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay cartera para este cliente."),[])};t.default=()=>{let{cliente:e}=(0,b.a)(),[t]=(0,g.useState)([]),[a,N]=(0,g.useState)(3),[S,O]=(0,g.useState)([]),[T,P]=(0,g.useState)([]),[R,L]=(0,g.useState)([]),[k,M]=(0,g.useState)(!1),[U,z]=(0,g.useState)(e[0]),[_,V]=(0,g.useState)(0),[G,B]=(0,g.useState)(0);(0,g.useEffect)(()=>{M(!0),U&&(H(U.CLIENTE),J(U.CLIENTE),q(U.CLIENTE))},[a]),(0,g.useEffect)(()=>{if(Array.isArray(S)){let e=Number(S.reduce((e,t)=>e+t.SMayorA60,0)).toFixed(0);B("".concat(parseFloat(e).toLocaleString()));let t=Number(S.reduce((e,t)=>e+t.SALDO,0)).toFixed(0);V("".concat(parseFloat(t).toLocaleString()))}},[S]);let H=async()=>{let e=await v(U);e?P(e):(console.log("Error al obtener los datos"),P([])),M(!1)},J=async()=>{let e=await F(U);e?L(e):(console.log("Error al obtener los datos"),L([])),M(!1)},q=async()=>{let e=await Z(U);e?O(e):(console.log("Error al obtener los datos"),O([])),M(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{marginBottom:"40px",children:(0,l.jsx)(E.Z,{})}),(0,l.jsx)(i.default,{className:"container",sx:{paddingTop:1,display:"flex",alignContent:"center",alignItems:"center"},children:(0,l.jsx)(i.default,{style:{backgroundColor:"#eaeaea",width:"65%",height:"auto",paddingTop:0},children:(0,l.jsxs)(r.Z,{sx:{padding:1},children:[(0,l.jsxs)(i.default,{children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)(C.default,{href:"./",children:(0,l.jsxs)(o.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:()=>{localStorage.removeItem("clientTemp"),z("")},children:[" "," Cerrar "," "]})}),(0,l.jsx)(C.default,{href:".././pedidos/pedidosG/",children:(0,l.jsxs)(o.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#6cff5d"},children:[" "," Pedido "," "]})})]}),(0,l.jsx)(n.Z,{sx:{},orientation:"horizontal"}),(0,l.jsx)(i.default,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,l.jsxs)(d.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,l.jsxs)(o.default,{sx:{flexDirection:"column"},children:[(0,l.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:_}),(0,l.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo"})]}),(0,l.jsxs)(o.default,{sx:{flexDirection:"column"},children:[(0,l.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:G}),(0,l.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo Mayor a 60"})]})]})})]}),(0,l.jsx)(n.Z,{sx:{},orientation:"horizontal"}),(0,l.jsx)(c.Z,{label:"Individual",control:(0,l.jsx)(h.Z,{})}),(0,l.jsx)(c.Z,{label:"Compa\xf1ia",control:(0,l.jsx)(h.Z,{})}),(0,l.jsx)(s.default,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontSize:35},children:(null==U?void 0:U.NOMBREALIAS)||""}),(0,l.jsxs)(u.ZP,{container:!0,rowSpacing:1.5,columnSpacing:{xs:1,sm:2,md:3},children:[(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["NIT",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.CLIENTE)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Cupo",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==U?void 0:U.CUPO)||"").toFixed(0)})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Debe",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==U?void 0:U.SALDO)||"").toFixed(0)})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Direccion",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.DIRECCION)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Telefono",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.TELEFONO1)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Celular",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.TELEFONO1)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Ciudad",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.CIUDAD)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:3,children:["Departamento",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.DEPARTAMENTO)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:4,children:["Email",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.E_MAIL)||""})]})]}),(0,l.jsx)(x.Z,{id:"filled-multiline-static",label:"Notas",multiline:!0,rows:4,defaultValue:(null==U?void 0:U.NOTAS)||"",variant:"filled",sx:{width:"100%"}}),(0,l.jsxs)(r.Z,{sx:{width:"100%"},children:[(0,l.jsx)(i.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsxs)(f.Z,{value:a,onChange:(e,t)=>{N(t)},"aria-label":"basic tabs example",children:[(0,l.jsx)(m.Z,{label:"Pedidos",...A(0),onClick:H}),(0,l.jsx)(m.Z,{label:"Facturas",...A(1),onClick:J}),(0,l.jsx)(m.Z,{label:"Cartera",...A(2),onClick:q}),(0,l.jsx)(m.Z,{label:"",...A(3)})]})}),(0,l.jsx)(w,{value:a,index:0,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):T.length<=0?(0,l.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,l.jsx)(j._,{density:"compact",rows:T,columns:y,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.PEDIDO})})}),(0,l.jsx)(w,{value:a,index:1,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):R.length<=0?(0,l.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,l.jsx)(j._,{density:"compact",rows:R,columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.ID})})}),(0,l.jsx)(w,{value:a,index:2,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):S.length<=0?(0,l.jsx)("h1",{children:"NO HAY CARTERA"}):(0,l.jsx)(j._,{density:"compact",rows:S,columns:I,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.NUMDOC})})})]})]})})})]})}},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return n},a:function(){return d}});var l=a(57437),i=a(2265),r=a(44785);let o=(0,i.createContext)({login:e=>{},logout:()=>{}}),n=e=>{let{children:t}=e,[a,n]=(0,i.useState)(null),[d,s]=(0,i.useState)({}),[c,h]=(0,i.useState)({}),[u,x]=(0,i.useState)({}),[f]=(0,i.useState)(!0),m=(0,i.useCallback)(function(e){r.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),n(e)},[]),p=(0,i.useCallback)(function(){r.Z.remove("authTokens"),localStorage.removeItem("auth"),n(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),a=localStorage.getItem("pedido"),l=localStorage.getItem("caja");e&&n(JSON.parse(e)),t&&s(JSON.parse(t)),a&&h(JSON.parse(a)),l&&x(JSON.parse(l))},[]);let g=(0,i.useMemo)(()=>({auth:a,cliente:d,setCliente:s,pedido:c,setPedido:h,caja:u,setCaja:x,loading:f,login:m,logout:p}),[a,d,c,u,m,p]);return(0,l.jsx)(o.Provider,{value:g,children:t})},d=()=>(0,i.useContext)(o)}},function(e){e.O(0,[4488,4797,4129,6291,4275,3983,2561,6981,9105,8265,8433,9696,1716,2971,7023,1744],function(){return e(e.s=78217)}),_N_E=e.O()}]);