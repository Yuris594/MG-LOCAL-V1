"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1223],{11810:function(e,t,a){var i=a(23963);t.Z=void 0;var n=i(a(19118)),l=a(57437);t.Z=(0,n.default)((0,l.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"HighlightOff")},9504:function(e,t,a){var i=a(23963);t.Z=void 0;var n=i(a(19118)),l=a(57437);t.Z=(0,n.default)((0,l.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},77699:function(e,t,a){var i=a(23963);t.Z=void 0;var n=i(a(19118)),l=a(57437);t.Z=(0,n.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},15656:function(e,t,a){var i=a(2265),n=a(33822),l=a(92384),r=a(22960),o=a(95931),s=a(60909),d=a(57437);let u={entering:{transform:"none"},entered:{transform:"none"}},c=i.forwardRef(function(e,t){let a=(0,r.default)(),c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:h,appear:x=!0,children:m,easing:f,in:p,onEnter:j,onEntered:g,onEntering:C,onExit:E,onExited:b,onExiting:v,style:P,timeout:Z=c,TransitionComponent:S=n.ZP,...O}=e,D=i.useRef(null),y=(0,s.Z)(D,(0,l.Z)(m),t),R=e=>t=>{if(e){let a=D.current;void 0===t?e(a):e(a,t)}},w=R(C),N=R((e,t)=>{(0,o.n)(e);let i=(0,o.C)({style:P,timeout:Z,easing:f},{mode:"enter"});e.style.webkitTransition=a.transitions.create("transform",i),e.style.transition=a.transitions.create("transform",i),j&&j(e,t)}),I=R(g),k=R(v),T=R(e=>{let t=(0,o.C)({style:P,timeout:Z,easing:f},{mode:"exit"});e.style.webkitTransition=a.transitions.create("transform",t),e.style.transition=a.transitions.create("transform",t),E&&E(e)}),U=R(b);return(0,d.jsx)(S,{appear:x,in:p,nodeRef:D,onEnter:N,onEntered:I,onEntering:w,onExit:T,onExited:U,onExiting:k,addEndListener:e=>{h&&h(D.current,e)},timeout:Z,...O,children:(e,t)=>i.cloneElement(m,{style:{transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden",...u[e],...P,...m.props.style},ref:y,...t})})});t.Z=c},13726:function(e,t,a){a.d(t,{Z:function(){return U}});var i=a(57437),n=a(20124),l=a(31193),r=a(71733),o=a(79806),s=a(60335),d=a(60091),u=a(83719),c=a(62501),h=a(6291),x=a(11656),m=a(66325),f=a(90922),p=a(26032),j=a(55693),g=a(42188),C=a(66299),E=a(78457),b=a(21704),v=a(66246),P=a(9504),Z=a(16463),S=a(85800),O=a(2265),D=a(32184),y=a(7547),R=a(57300),w=a(86917),N=a(47905),I=a(87138),k=e=>{let{page:t}=e;return(0,i.jsx)(l.default,{children:(0,i.jsx)(D.Z,{children:t.map(e=>(0,i.jsx)(y.ZP,{disablePadding:!0,children:(0,i.jsxs)(R.Z,{LinkComponent:I.default,href:e.url,onClick:e.onClick,children:[(0,i.jsx)(w.Z,{children:e.icon}),(0,i.jsx)(N.Z,{children:e.title})]})},e.title))})})};let T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var U=()=>{let e=(0,Z.useRouter)(),{auth:t,logout:a}=(0,S.a)(),[D,y]=(0,O.useState)(!1),[R,w]=(0,O.useState)(null),[N,U]=(0,O.useState)(!1),_=()=>{U(!1),w(null)},A=[{title:"USUARIOS ",url:"../start/usuarios",icon:(0,i.jsx)(m.Z,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,i.jsx)(f.Z,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,i.jsx)(p.Z,{})},{title:"PRODUCTOS",icon:(0,i.jsx)(j.Z,{}),onClick:e=>{U(!0),w(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,i.jsx)(g.Z,{})},{title:"CAJA",url:"../start/pedidos/pedidosCaja",icon:(0,i.jsx)(C.Z,{})}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.default,{}),(0,i.jsxs)(l.default,{sx:{flexGrow:1},children:[(0,i.jsx)(r.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(s.Z,{color:"inherit",onClick:e=>{w(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(P.Z,{})}),(0,i.jsx)(l.default,{sx:{display:{xs:"none",md:"flex"}},children:A.map(e=>(0,i.jsx)(d.default,{sx:{fontWeight:"bold"},color:"inherit",size:"large",LinkComponent:I.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,i.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,i.jsx)(d.default,{component:I.default,href:"/start",color:"inherit",children:(0,i.jsx)(v.Z,{})}),(0,i.jsxs)(d.default,{color:"inherit",children:[(0,i.jsx)(b.Z,{}),t&&t.PER_Nom]}),(0,i.jsx)(d.default,{color:"inherit",onClick:()=>y(!0),children:(0,i.jsx)(E.Z,{})})]})}),(0,i.jsx)(c.Z,{open:D,onClose:()=>y(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsxs)(l.default,{sx:T,children:[(0,i.jsx)(u.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,i.jsx)(l.default,{children:(0,i.jsx)(d.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{a(),e.push("/")},children:"SALIR"})})]})}),(0,i.jsxs)(h.Z,{id:"basic-menu",anchorEl:R,open:N,onClose:_,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(x.Z,{onClick:_,component:I.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,i.jsx)(x.Z,{onClick:_,component:I.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,i.jsx)(h.Z,{id:"basic-menu",anchorEl:R,MenuListProps:{"aria-labelledby":"basic-button"},open:!!R,onClose:()=>{w(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(k,{page:A})})]})]})}},41223:function(e,t,a){a.r(t),a.d(t,{conexion:function(){return S}});var i=a(57437),n=a(31193),l=a(99128),r=a(15656),o=a(62501),s=a(83719),d=a(60091),u=a(28027),c=a(74275),h=a(60335),x=a(11810),m=a(2265),f=a(77699),p=a(13726),j=a(52610),g=a(46182),C=a(3378),E=a(64379),b=a.n(E),v=a(85800),P=a(16463);let Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",height:"auto",bgcolor:"background.paper",boxShadow:24};function S(){b().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",button:"Aceptar"})}let O=[{field:"PER_Nom",headerName:"Nombre",width:200,editable:!0},{field:"PER_Usuario",headerName:"Usuario",width:150,editable:!0},{field:"PER_Clave",headerName:"Contrase\xf1a",width:150,editable:!0},{field:"IdDiv",headerName:"ID Divisi\xf3n",type:"number",width:120,editable:!0},{field:"PERAUTOPED",headerName:"Auto Pedidos",type:"number",width:130,editable:!0},{field:"CODVEND",headerName:"C\xf3digo Vendedor",width:150,editable:!0},{field:"PREFIJO",headerName:"Prefijo",width:120,editable:!0},{field:"CONSECUTIVOPED",headerName:"Consecutivo Pedidos",type:"number",width:180,editable:!0}],D=async()=>{let e=await fetch("http://172.20.20.3:8001/usuarios/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()};t.default=function(){let{auth:e}=(0,v.a)(),t=(0,P.useRouter)(),[a,E]=(0,m.useState)(!1),[b,y]=(0,m.useState)(),[R,w]=(0,m.useState)(!1),[N,I]=(0,m.useState)([]),[k,T]=(0,m.useState)([]),[U,_]=(0,m.useState)(!1),[A,V]=(0,m.useState)(!0),[J,M]=(0,m.useState)([]),[F,W]=(0,m.useState)([]),z=async e=>{try{let e=await D();if(e){let t=e.map(e=>({IdPer:e.IdPer,PER_Nom:e.PER_Nom,PER_Usuario:e.PER_Usuario,PER_Clave:e.PER_Clave,IdDiv:e.IdDiv,PERAUTOPED:e.PERAUTOPED,CODVEND:e.CODVEND,PREFIJO:e.PREFIJO,CONSECUTIVOPED:e.CONSECUTIVOPED}));V(!1),I(t),W(t)}else console.log("Error",e)}catch(e){console.error("Error: No hay datos",e),S()}};(0,m.useEffect)(()=>{z(),_(!0)},[]);let L=e=>{I(F.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},q=(0,m.useCallback)(e=>{M(e),e.length>0&&(y(F.filter(t=>{let a=t.IdPer;return!!a&&a.toString().includes(e[0])})),w(!0))},[N]);return((0,m.useEffect)(()=>{e&&8===e.IdDiv||t.push("/start")},[e,t]),e&&8===e.IdDiv)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.default,{children:[" "," ",(0,i.jsx)(p.Z,{})," "," "]}),(0,i.jsx)("div",{className:"container",children:!0===A?(0,i.jsx)(n.default,{sx:{width:"100%"},children:(0,i.jsx)(l.Z,{})}):(0,i.jsx)(r.Z,{in:U,children:(0,i.jsxs)(n.default,{style:{height:"auto",width:"100%"},children:[(0,i.jsx)(o.Z,{open:a,onClose:()=>E(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(n.default,{sx:Z,children:(0,i.jsx)(g.default,{})})}),(0,i.jsx)(o.Z,{open:R,onClose:()=>{y([]),w(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(n.default,{sx:Z,children:(0,i.jsx)(C.default,{usuario:b})})}),(0,i.jsx)(s.default,{variant:"h5",sx:{color:"#000000",fontWeight:"bold",marginTop:4,marginBottom:2,textAlign:"center"},children:"USUARIOS"}),(0,i.jsxs)(n.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:[(0,i.jsx)(d.default,{variant:"outlined",onClick:()=>E(!0),sx:{margin:"10px"},color:"primary",children:"Nuevo Usuario"}),(0,i.jsxs)(u.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,i.jsx)(c.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:k,onChange:e=>{e.preventDefault(),T(e.target.value),L(e.target.value)}}),0==k.length?(0,i.jsx)(h.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,i.jsx)(f.Z,{})}):(0,i.jsx)(h.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"buscar",onClick:()=>{T(),z()},children:(0,i.jsx)(x.Z,{})})]})]}),(0,i.jsx)(n.default,{sx:{height:950,width:"100%"},children:(0,i.jsx)(j._,{rows:N,columns:O,initialState:{pagination:{paginationModel:{page:0,pageSize:16}}},pageSizeOptions:[5,16],onRowSelectionModelChange:q,rowSelectionModel:J,getRowId:e=>e.IdPer,sx:{"& .MuiDataGrid-columnHeaders":{backgroundColor:"#70aca2"},color:"#000"}})})]})})})]}):null}},46182:function(e,t,a){a.r(t);var i=a(57437),n=a(48801),l=a(20124),r=a(25774),o=a(27270),s=a(31193),d=a(83719),u=a(58433),c=a(23983),h=a(60091),x=a(2265);let m=async e=>(await fetch("http://172.20.20.3:8001/usuarios/nuevo",{method:"POST",body:JSON.stringify({form:e}),headers:{"Content-Type":"application/json"}})).json();t.default=()=>{let[e,t]=(0,x.useState)({}),[a,f]=(0,x.useState)(!1),[p,j]=(0,x.useState)(!1),g=a=>{t({...e,[a.target.name]:a.target.value})},C=async t=>{if(t.preventDefault(),!e.PER_Nom||!e.IdDiv){j(!0);return}let a=await m(e);a.ok?(f(!0),console.log("Salida exitosa"),window.location.reload()):(j(!0),console.error("Error al enviar la solicitud: ",a.statusText))},E=e=>{"clickaway"!==e&&(f(!1),j(!1))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.default,{component:"main",maxWidth:"xs",children:[(0,i.jsx)(l.default,{}),a?(0,i.jsx)(r.Z,{open:a,autoHideDuration:2e3,onClose:E,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,i.jsx)(o.Z,{onClose:E,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",p?(0,i.jsx)(r.Z,{open:p,autoHideDuration:2e3,onClose:E,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,i.jsx)(o.Z,{onClose:E,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,i.jsxs)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,i.jsx)(d.default,{component:"h1",variant:"h5",children:"Registro de usuario"}),(0,i.jsxs)(s.default,{component:"form",noValidate:!0,onSubmit:C,sx:{mt:3},children:[(0,i.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(c.Z,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:e.PER_Nom||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:e.PER_Usuario||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,children:(0,i.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:e.PER_Clave||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(c.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:e.IdDiv||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(c.Z,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:e.PERAUTOPED||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsx)(c.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:e.CODVEND||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsx)(c.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:e.PREFIJO||"",onChange:g})}),(0,i.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsx)(c.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:e.CONSECUTIVOPED||"",onChange:g})})]}),(0,i.jsx)(h.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}},85800:function(e,t,a){a.d(t,{AuthProvider:function(){return o},a:function(){return s}});var i=a(57437),n=a(2265),l=a(44785);let r=(0,n.createContext)({login:e=>{},logout:()=>{}}),o=e=>{let{children:t}=e,[a,o]=(0,n.useState)(null),[s,d]=(0,n.useState)({}),[u,c]=(0,n.useState)({}),[h,x]=(0,n.useState)({}),[m]=(0,n.useState)(!0),f=(0,n.useCallback)(function(e){l.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),o(e)},[]),p=(0,n.useCallback)(function(){l.Z.remove("authTokens"),localStorage.removeItem("auth"),o(null)},[]);(0,n.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),a=localStorage.getItem("pedido"),i=localStorage.getItem("caja");e&&o(JSON.parse(e)),t&&d(JSON.parse(t)),a&&c(JSON.parse(a)),i&&x(JSON.parse(i))},[]);let j=(0,n.useMemo)(()=>({auth:a,cliente:s,setCliente:d,pedido:u,setPedido:c,caja:h,setCaja:x,loading:m,login:f,logout:p}),[a,s,u,h,f,p]);return(0,i.jsx)(r.Provider,{value:j,children:t})},s=()=>(0,n.useContext)(r)}}]);