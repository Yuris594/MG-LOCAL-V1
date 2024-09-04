"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{21357:function(e,t,a){a.r(t);var l=a(57437),i=a(48801),n=a(20124),o=a(31193),r=a(83719),s=a(58433),d=a(23983),u=a(60091),c=a(25774),h=a(27270),x=a(42716),m=a(2265);a(85935),t.default=e=>{let{usuario:t}=e,[a,f]=(0,m.useState)(!1),[p,j]=(0,m.useState)(!1),{form:E,setForm:C,changed:P}=(0,x.c)();(0,m.useEffect)(()=>{t&&t.length>0&&C({IdPer:t[0].IdPer,PER_Nom:t[0].PER_Nom||"",PER_Usuario:t[0].PER_Usuario||"",PER_Clave:t[0].PER_Clave||"",IdDiv:t[0].IdDiv||"",PERAUTOPED:t[0].PERAUTOPED||"",CODVEND:t[0].CODVEND||"",PREFIJO:t[0].PREFIJO||"",CONSECUTIVOPED:t[0].CONSECUTIVOPED||""})},[t]),console.log(E);let g=async e=>{e.preventDefault();try{let e=await fetch("/api/usuarios/actualizar/",{method:"POST",body:JSON.stringify(E),headers:{"Content-Type":"application/json"}});e.ok?(f(!0),setTimeout(()=>{window.location.reload()},2e3)):(console.log("Error",e.statusText),j(!0))}catch(e){console.error("Error al enviar la solicitud:",e),j(!0)}},v=e=>{"clickaway"!==e&&(f(!1),j(!1))};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.default,{component:"main",maxWidth:"xs",children:[(0,l.jsx)(n.default,{}),(0,l.jsxs)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,l.jsx)(r.default,{component:"h1",variant:"h5",children:"Actualizacion de usuario"}),(0,l.jsx)(o.default,{component:"form",onSubmit:g,noValidate:!0,sx:{mt:3},children:(0,l.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Nom",label:"PER_Nom",name:"PER_Nom",autoFocus:!0,value:E.PER_Nom||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Usuario",label:"PER_Usuario",name:"PER_Usuario",value:E.PER_Usuario||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,children:(0,l.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Clave",label:"PER_Clave",type:"password",name:"PER_Clave",value:E.PER_Clave||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(d.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",value:E.IdDiv||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",value:E.PERAUTOPED||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(d.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",value:E.CODVEND||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(d.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",value:E.PREFIJO||"",onChange:P})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(d.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",value:E.CONSECUTIVOPED||"",onChange:P})}),(0,l.jsx)(u.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Actualizar"})]})}),a&&(0,l.jsx)(c.Z,{open:a,autoHideDuration:2e3,onClose:v,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(h.Z,{onClose:v,severity:"success",sx:{width:"100%"},children:"Actualizacion Exitosa"})}),p&&(0,l.jsx)(c.Z,{open:p,autoHideDuration:2e3,onClose:v,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(h.Z,{onClose:v,severity:"error",sx:{width:"100%"},children:"Actualizacion Denegada"})})]})]})})}},60559:function(e,t,a){a.r(t),a.d(t,{conexion:function(){return O}});var l=a(57437),i=a(31193),n=a(99128),o=a(15656),r=a(62501),s=a(83719),d=a(60091),u=a(28027),c=a(74275),h=a(60335),x=a(11810),m=a(2265),f=a(77699),p=a(13726),j=a(52610),E=a(21357),C=a(73716),P=a(15408),g=a(64379),v=a.n(g);a(85935);let b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",height:"auto",bgcolor:"background.paper",boxShadow:24};function O(){v().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",button:"Axepatar"})}let D=[{field:"PER_Nom",headerName:"Nombre",width:200,editable:!0},{field:"PER_Usuario",headerName:"Usuario",width:150,editable:!0},{field:"PER_Clave",headerName:"Contrase\xf1a",width:150,editable:!0},{field:"IdDiv",headerName:"ID Divisi\xf3n",type:"number",width:120,editable:!0},{field:"PERAUTOPED",headerName:"Auto Pedidos",type:"number",width:130,editable:!0},{field:"CODVEND",headerName:"C\xf3digo Vendedor",width:150,editable:!0},{field:"PREFIJO",headerName:"Prefijo",width:120,editable:!0},{field:"CONSECUTIVOPED",headerName:"Consecutivo Pedidos",type:"number",width:180,editable:!0}];t.default=function(){let[e,t]=(0,m.useState)(!1),[a,g]=(0,m.useState)(),[v,Z]=(0,m.useState)(!1),[S,R]=(0,m.useState)([]),[N,y]=(0,m.useState)([]),[I,w]=(0,m.useState)(!1),[U,T]=(0,m.useState)(!0),[_,k]=(0,m.useState)([]),[A,V]=(0,m.useState)([]);(0,m.useEffect)(()=>{F(),w(!0)},[]);let F=async()=>{try{let{datos:e}=await (0,P.Z)("/api/usuarios/listar","GET");e&&(T(!1),R(e),V(e))}catch(e){O()}},J=e=>{R(A.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},W=(0,m.useCallback)(e=>{k(e),e.length>0&&(g(A.filter(t=>{let a=t.ID;return!!a&&a.toString().includes(e[0])})),Z(!0))},[S]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.default,{marginBottom:"40px",children:[" "," ",(0,l.jsx)(p.Z,{})," "," "]}),!0===U?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(n.Z,{})}):(0,l.jsx)(o.Z,{in:I,children:(0,l.jsxs)(i.default,{style:{height:"auto",width:"100%"},children:[(0,l.jsx)(r.Z,{open:e,onClose:()=>t(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsx)(i.default,{sx:b,children:(0,l.jsx)(C.default,{})})}),(0,l.jsx)(r.Z,{open:v,onClose:()=>{g([]),Z(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsx)(i.default,{sx:b,children:(0,l.jsx)(E.default,{usuario:a})})}),(0,l.jsx)(s.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",color:"#000000"},children:"USUARIOS"}),(0,l.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:[(0,l.jsx)(d.default,{variant:"outlined",onClick:()=>t(!0),sx:{margin:"10px"},color:"primary",children:"Nuevo Usuario"}),(0,l.jsxs)(u.default,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,l.jsx)(c.default,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:N,onChange:e=>{e.preventDefault(),y(e.target.value),J(e.target.value)}}),0==N.length?(0,l.jsx)(h.default,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(f.default,{})}):(0,l.jsx)(h.default,{title:"buscar",sx:{p:"10px"},"aria-label":"buscar",onClick:()=>{y(),F()},children:(0,l.jsx)(x.Z,{})})]})]}),(0,l.jsx)(i.default,{sx:{height:950,width:"100%"},children:(0,l.jsx)(j._,{rows:S,columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:16}}},pageSizeOptions:[5,16],onRowSelectionModelChange:W,rowSelectionModel:_,getRowId:e=>e.IdPer,sx:{"& .MuiDataGrid-columnHeaders":{backgroundColor:"#70aca2"},color:"#000"}})})]})})]})}},73716:function(e,t,a){a.r(t);var l=a(57437);a(85935);var i=a(48801),n=a(20124),o=a(25774),r=a(27270),s=a(31193),d=a(83719),u=a(58433),c=a(23983),h=a(60091),x=a(2265);t.default=()=>{let[e,t]=(0,x.useState)({}),[a,m]=(0,x.useState)(!1),[f,p]=(0,x.useState)(!1),j=a=>{t({...e,[a.target.name]:a.target.value})},E=async t=>{if(t.preventDefault(),!e.PER_Nom||!e.IdDiv){p(!0);return}let a=await fetch("/api/usuarios/nuevo",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});a.ok?(m(!0),console.log("Salida exitosa"),window.location.reload()):(p(!0),console.error("Error al enviar la solicitud: ",a.statusText))},C=e=>{"clickaway"!==e&&(m(!1),p(!1))};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.default,{component:"main",maxWidth:"xs",children:[(0,l.jsx)(n.default,{}),a?(0,l.jsx)(o.Z,{open:a,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(r.Z,{onClose:C,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",f?(0,l.jsx)(o.Z,{open:f,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(r.Z,{onClose:C,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,l.jsxs)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,l.jsx)(d.default,{component:"h1",variant:"h5",children:"Registro de usuario"}),(0,l.jsxs)(s.default,{component:"form",noValidate:!0,onSubmit:E,sx:{mt:3},children:[(0,l.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:e.PER_Nom||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:e.PER_Usuario||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:e.PER_Clave||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:e.IdDiv||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:e.PERAUTOPED||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:e.CODVEND||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:e.PREFIJO||"",onChange:j})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:e.CONSECUTIVOPED||"",onChange:j})})]}),(0,l.jsx)(h.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}},13726:function(e,t,a){a.d(t,{Z:function(){return k}});var l=a(57437),i=a(20124),n=a(31193),o=a(71733),r=a(79806),s=a(60335),d=a(60091),u=a(83719),c=a(62501),h=a(6291),x=a(11656),m=a(85465),f=a(66325),p=a(90922),j=a(26032),E=a(55693),C=a(42188),P=a(66299),g=a(78457),v=a(21704),b=a(66246),O=a(9504),D=a(16463),Z=a(39987),S=a(2265),R=a(32184),N=a(7547),y=a(57300),I=a(86917),w=a(47905),U=a(87138),T=e=>{let{page:t}=e;return(0,l.jsx)(n.default,{sx:{width:250},children:(0,l.jsx)("nav",{children:(0,l.jsx)(R.Z,{children:t.map(e=>(0,l.jsx)(N.ZP,{disablePadding:!0,children:(0,l.jsxs)(y.Z,{LinkComponent:U.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(I.Z,{children:e.icon}),(0,l.jsx)(w.Z,{children:e.title})]})},e.title))})})})};let _={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var k=()=>{let e=(0,D.useRouter)(),{auth:t}=(0,Z.Z)(),[a,R]=(0,S.useState)(!1),[N,y]=(0,S.useState)(null),[I,w]=(0,S.useState)(!1),[k,A]=(0,S.useState)(null),V=()=>{w(!1),y(null)},F=[{title:"USUARIOS ",url:"../../usuarios",icon:(0,l.jsx)(f.Z,{})},{title:"PEDIDOS",url:"../../pedidos",icon:(0,l.jsx)(p.Z,{})},{title:"CLIENTES",url:"../../clients",icon:(0,l.jsx)(j.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(E.Z,{}),onClick:e=>{w(!0),y(e.currentTarget)}},{title:"FACTURAS",url:"../../facturas",icon:(0,l.jsx)(C.Z,{})},{title:"CAJA",url:"../../pedidos/pedidosCaja",icon:(0,l.jsx)(P.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{}),(0,l.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,l.jsx)(o.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(s.default,{color:"inherit",size:"large",onClick:e=>{A(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(O.default,{})}),(0,l.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:F.map(e=>(0,l.jsx)(d.default,{color:"inherit",LinkComponent:U.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(d.default,{component:U.default,href:"/start",color:"inherit",children:(0,l.jsx)(b.Z,{})}),(0,l.jsxs)(d.default,{color:"inherit",children:[(0,l.jsx)(v.Z,{}),t.PER_Nom]}),(0,l.jsx)(d.default,{color:"inherit",onClick:()=>R(!0),children:(0,l.jsx)(g.Z,{})})]})}),(0,l.jsx)(c.Z,{open:a,onClose:()=>R(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(n.default,{sx:_,children:[(0,l.jsx)(u.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(n.default,{children:(0,l.jsx)(d.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(h.Z,{id:"basic-menu",anchorEl:N,open:I,onClose:V,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(x.Z,{onClick:V,component:U.default,href:"../../productos",children:"Productos Por Bodega"}),(0,l.jsx)(x.Z,{onClick:V,component:U.default,href:"../../productosMG",children:"Productos-MG"})]}),(0,l.jsx)(m.ZP,{open:!!k,onClose:()=>{A(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(T,{page:F})})]})]})}},39987:function(e,t,a){a.d(t,{a:function(){return n}});var l=a(85800),i=a(2265);let n=()=>(0,i.useContext)(l.default);t.Z=n},42716:function(e,t,a){a.d(t,{c:function(){return i}});var l=a(2265);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,l.useState)(e);return{form:t,changed:e=>{let{name:l,value:i}=e.target;a({...t,[l]:i})},setForm:a}}},85935:function(e,t,a){a.d(t,{x:function(){return l}});let l={url:a(20357).env.NEXT_PUBLIC_API_URL}},15408:function(e,t){let a=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3?arguments[3]:void 0;try{let i=!0,n={method:"GET"};("GET"===t||"DELETE"===t)&&(n={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(a),l?n={method:t,body:a}:n.body=JSON.stringify(a));let o=await fetch(e,n);if(!o.ok)return{error:"Error en la solicitud Fetch",status:o.status,cargando:!1};let r=await o.json();return i=!1,{datos:r,cargando:i}}catch(e){return{datos:null,cargando:!1}}};t.Z=a},85800:function(e,t,a){a.d(t,{AuthProvider:function(){return o}});var l=a(57437),i=a(2265);let n=(0,i.createContext)(),o=e=>{let{children:t}=e,[a,o]=(0,i.useState)({}),[r,s]=(0,i.useState)({}),[d,u]=(0,i.useState)({}),[c,h]=(0,i.useState)({}),[x,m]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),a=localStorage.getItem("pedidoTemp"),l=localStorage.getItem("caja");e&&o(JSON.parse(e)),t&&s(JSON.parse(t)),a&&u(JSON.parse(a)),l&&h(JSON.parse(l))},[]),(0,l.jsx)(n.Provider,{value:{auth:a,setAuth:o,cliente:r,setCliente:s,pedido:d,setPedido:u,caja:c,setCaja:h,loading:x},children:t})};t.default=n}}]);