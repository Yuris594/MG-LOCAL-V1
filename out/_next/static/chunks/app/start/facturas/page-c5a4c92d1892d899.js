(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6175],{4639:(e,t,o)=>{Promise.resolve().then(o.bind(o,68736))},85244:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var a=o(12983),r=o(95155);let l=(0,a.A)((0,r.jsx)("path",{d:"m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"}),"WidgetsOutlined")},20457:(e,t,o)=>{"use strict";o.d(t,{default:()=>m});var a=o(12115),r=o(15438),l=o(12567),n=o(95155);let i="function"==typeof(0,r.Dp)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),c=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),d=function(e){var t,o;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={};a&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var o,a;let[l,n]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?r[i]={":root":{colorScheme:null===(o=n.palette)||void 0===o?void 0:o.mode}}:r[i.replace(/\s*&/,"")]={colorScheme:null===(a=n.palette)||void 0===a?void 0:a.mode}});let l={html:s(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...c(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...r},n=null===(o=e.components)||void 0===o?void 0:null===(t=o.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return n&&(l=[l,n]),l},u="mui-ecs",_=e=>{let t=d(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[":root:has(".concat(u,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var a,r;let[l,n]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?o[i]={[":root:not(:has(.".concat(u,"))")]:{colorScheme:null===(a=n.palette)||void 0===a?void 0:a.mode}}:o[i.replace(/\s*&/,"")]={["&:not(:has(.".concat(u,"))")]:{colorScheme:null===(r=n.palette)||void 0===r?void 0:r.mode}}}),t},p=(0,r.Dp)(i?e=>{let{theme:t,enableColorScheme:o}=e;return d(t,o)}:e=>{let{theme:t}=e;return _(t)}),m=function(e){let{children:t,enableColorScheme:o=!1}=(0,l.b)({props:e,name:"MuiCssBaseline"});return(0,n.jsxs)(a.Fragment,{children:[i&&(0,n.jsx)(p,{enableColorScheme:o}),!i&&!o&&(0,n.jsx)("span",{className:u,style:{display:"none"}}),t]})}},894:(e,t,o)=>{"use strict";o.d(t,{A:()=>A});var a=o(12115),r=o(43463),l=o(7123),n=o(17280),i=o(89142),s=o(98330),c=o(31628),d=o(12567),u=o(89679),_=o(37410),p=o(81045),m=o(37157);function h(e){return(0,m.Ay)("MuiIconButton",e)}let f=(0,p.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=o(95155);let S=e=>{let{classes:t,disabled:o,color:a,edge:r,size:n}=e,i={root:["root",o&&"disabled","default"!==a&&"color".concat((0,_.A)(a)),r&&"edge".concat((0,_.A)(r)),"size".concat((0,_.A)(n))]};return(0,l.A)(i,h,t)},x=(0,i.default)(u.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,"default"!==o.color&&t["color".concat((0,_.A)(o.color))],o.edge&&t["edge".concat((0,_.A)(o.edge))],t["size".concat((0,_.A)(o.size))]]}})((0,s.A)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,n.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,s.A)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,c.A)()).map(e=>{let[o]=e;return{props:{color:o},style:{color:(t.vars||t).palette[o].main}}}),...Object.entries(t.palette).filter((0,c.A)()).map(e=>{let[o]=e;return{props:{color:o},style:{"--IconButton-hoverBg":t.vars?"rgba(".concat((t.vars||t).palette[o].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,n.X4)((t.vars||t).palette[o].main,t.palette.action.hoverOpacity)}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(f.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}})),A=a.forwardRef(function(e,t){let o=(0,d.b)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:l,className:n,color:i="default",disabled:s=!1,disableFocusRipple:c=!1,size:u="medium",..._}=o,p={...o,edge:a,color:i,disabled:s,disableFocusRipple:c,size:u},m=S(p);return(0,g.jsx)(x,{className:(0,r.A)(m.root,n),centerRipple:!0,focusRipple:!c,disabled:s,ref:t,..._,ownerState:p,children:l})})},65068:(e,t,o)=>{"use strict";o.d(t,{A:()=>k});var a=o(95155),r=o(20457),l=o(75436),n=o(11451),i=o(46805),s=o(894),c=o(2295),d=o(9561),u=o(81894),_=o(91888),p=o(74676),m=o(92080),h=o(96212),f=o(6069),g=o(9581),S=o(43677),x=o(85244),A=o(85067),C=o(2138);o(76046);var y=o(70689),v=o(12115),b=o(4918),T=o(41983),O=o(36017),I=o(2091),E=o(60391),N=o(48173),j=o.n(N);let R=e=>{let{page:t}=e;return(0,a.jsx)(l.default,{children:(0,a.jsx)(b.A,{children:t.map(e=>(0,a.jsx)(T.Ay,{disablePadding:!0,children:(0,a.jsxs)(O.A,{LinkComponent:j(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(I.A,{children:e.icon}),(0,a.jsx)(E.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var L=o(78897),z=o.n(L),D=o(79046),P=o.n(D);let k=()=>{let{auth:e,logout:t}=(0,y.A)(),[o,b]=(0,v.useState)(null),[T,O]=(0,v.useState)(!1),I=()=>{O(!1),b(null)},E=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,a.jsx)(p.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,a.jsx)(m.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,a.jsx)(h.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(f.A,{}),onClick:e=>{O(!0),b(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(g.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(S.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),(0,a.jsxs)(l.default,{sx:{flexGrow:1},children:[(0,a.jsx)(n.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{color:"inherit",onClick:e=>{b(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(x.A,{})}),(0,a.jsx)(l.default,{sx:{display:{xs:"none",md:"flex"}},children:E.map(e=>(0,a.jsx)(c.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:j(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(d.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(c.default,{component:j(),href:"/start",color:"inherit",children:(0,a.jsx)(C.A,{})}),(0,a.jsxs)(c.default,{className:P().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(h.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(c.default,{color:"inherit",onClick:()=>{z().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(A.A,{})})]})}),(0,a.jsxs)(u.A,{id:"basic-menu",anchorEl:o,open:T,onClose:I,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(_.A,{onClick:I,component:j(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,a.jsx)(_.A,{onClick:I,component:j(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(u.A,{id:"basic-menu",anchorEl:o,MenuListProps:{"aria-labelledby":"basic-button"},open:!!o,onClose:()=>{b(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(R,{page:E})})]})]})}},11434:(e,t,o)=>{"use strict";o.d(t,{m:()=>r});var a=o(12115);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,o]=(0,a.useState)(e);return{form:t,changed:e=>{let{name:a,value:r}=e.target;o({...t,[a]:r})},setForm:o}}},68736:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C});var a=o(95155),r=o(75436),l=o(78562),n=o(9561),i=o(70152),s=o(2295),c=o(65068),d=o(11434),u=o(12115),_=o(89100),p=o(78897),m=o.n(p),h=o(10142);o(92340);var f=o(76290),g=o.n(f),S=o(8889);let x=()=>{m().fire({title:"Factura no existe!",icon:"error",button:"Aceptar"})},A=async e=>(await fetch(S.c.url+"/clientes/factura_lineas/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})).json(),C=()=>{let[e,t]=(0,u.useState)(null),{form:o,changed:p}=(0,d.m)({}),[m,f]=(0,u.useState)({}),[S,C]=(0,u.useState)([]),[y]=(0,u.useState)((0,_.GP)(new Date,"dd/MM/yyyy HH:mm:ss")),v=async e=>{e.preventDefault();let a=o.factura,r=await A(a);try{if(r){t(r[0]);let e=["ARTICULO","CANTIDAD","DESCRIPCION","PORCIVA","PORDESC","PRECIO_UNITARIO","PRECIO_TOTAL","TOTAL_IMPUESTO1","DESC_TOT_LINEA","TOTAL_MERCADERIA"],o=r.map(t=>{let o=Object.fromEntries(Object.entries(t).filter(t=>{let[o]=t;return e.includes(o)}));return"PRECIO_TOTAL"in o&&(o.PRECIO_TOTAL=Math.floor(o.PRECIO_TOTAL)),"DESC_TOT_LINEA"in o&&(o.DESC_TOT_LINEA=Math.floor(o.DESC_TOT_LINEA)),o});C(o);let a=0,l=0;o.forEach(e=>{a+=e.PRECIO_TOTAL||0,l+=e.DESC_TOT_LINEA||0});let n=.19*a,i=a+n;f({sumatotal:a.toLocaleString("es-ES"),descuento:l.toLocaleString("es-ES"),impuesto:n.toLocaleString("es-ES"),totalConImpuesto:i.toLocaleString("es-ES")})}else x()}catch(e){console.error("Error al realizar la peticion;",e),x()}};(0,u.useEffect)(()=>{e&&S&&(b(),t(),C([]))},[e,S]);let b=()=>{let t=new h.default("portrait","pt","letter"),o=[{field:"ARTICULO",headerName:"Ref.",width:200},{field:"CANTIDAD",headerName:"CANT",width:200,align:"right"},{field:"CPed",headerName:"UND",width:200,type:"number",align:"right"},{field:"DESCRIPCION",headerName:"DESCRIPCI\xd3N",width:1e3},{field:"PORCIVA",headerName:"IVA",width:200,align:"right"},{field:"PORDESC",headerName:"DTO",width:200,align:"right"},{field:"PRECIO_UNITARIO",headerName:"VALOR UNI",width:200,align:"right"},{field:"PRECIO_TOTAL",headerName:"TOTAL",width:250,type:"number",align:"right"}],a=S.map(e=>{let t=[];return o.forEach(o=>{let a=e[o.field];("PRECIO_UNITARIO"===o.field||"PRECIO_TOTAL"===o.field)&&(a=parseFloat(Number(a).toFixed(0)).toLocaleString()),t.push(a)}),t});t.setFontSize(11),t.setFont("times","italic"),t.text("Nuestra direcci\xf3n y lineas de atenci\xf3n han cambiado:(4) 604 3380 - 3203509705",100,17),t.setFontSize(13),t.text("_________________________________________________________________________________",12,20),t.setFontSize(13),t.addImage("/logo_factura.png","PNG",10,30,200,25),t.setFontSize(15),t.text("REMISI\xd3N N\xb0:   ".concat(e.FACTURA),350,45),t.setFontSize(9),t.text(" ".concat(e.FECHA_DESPACHO),500,65),t.setFontSize(11),t.text("FECHA",460,65),t.text("NIT: 830.900.137-1",50,65),t.setFontSize(13),t.text("_____________________________________________________________________________",12,20),t.setFontSize(9),t.text("CLIENTE:    ".concat(e.CLIENTE),12,85),t.text("NIT/CEDULA:    ".concat(e.CreatedBy),12,98),t.text("TEL:    ".concat(e.CreatedBy),300,98),t.text("VENDEDOR:    ".concat(e.CreatedBy),440,98),t.text("MUNICIPIO:    ".concat(e.CreatedBy,"-").concat(e.CreatedBy),12,112),t.text("PEDIDO:    ".concat(e.PEDIDO),300,112),t.text("CREADO:    ".concat(e.CreatedBy),440,112),t.text("DIRECCION:    ".concat(e.CreatedBy),12,125),t.text("NOTA:   ".concat(e.OBSERVACIONES),12,139),t.autoTable({head:[o.map(e=>e.headerName)],body:a,startY:150,theme:"plain",columnStyles:{cellWidth:"auto"},styles:{theme:"plain",tableWidth:"auto",lineColor:[200,200,200],lineWidth:.1,font:"times",fontStyle:"normal",textColor:[0,0,0],display:"flex",fontSize:8},tableWidth:t.internal.pageSize.width-30,margin:{left:12,right:16}}),t.setFontSize(10),t.setFont("times","italic"),t.text("TOTAL ITEMS:        ".concat(S.length),350,t.autoTable.previous.finalY+20),t.text("SubTotal:     ".concat(e.TOTAL_MERCADERIA.toLocaleString("es-ES")),470,t.autoTable.previous.finalY+20),t.text("Desc:           ".concat(m.descuento.toLocaleString("es-ES")),470,t.autoTable.previous.finalY+40),t.text("IVA:              ".concat(m.impuesto),470,t.autoTable.previous.finalY+60),t.text("TOTAL:        ".concat(m.totalConImpuesto),470,t.autoTable.previous.finalY+80),t.setFontSize(11),t.text("ACEPTO este documento y declaro haber recibido real y \n materialmente los articulos arriba descritos ",12,t.autoTable.previous.finalY+20),t.text("FECHA RECIBIDO_____________",280,t.autoTable.previous.finalY+72),t.text("FIRMA Y SELLO",12,t.autoTable.previous.finalY+90),t.text("HORA:____:____",280,t.autoTable.previous.finalY+86),t.text("".concat(y),12,t.autoTable.previous.finalY+106),t.rect(10,t.autoTable.previous.finalY+9,450,88),t.rect(463,t.autoTable.previous.finalY+9,120,88),t.output("dataurlnewwindow")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{children:[" ",(0,a.jsx)(c.A,{})," "]}),(0,a.jsx)(r.default,{className:"container",children:(0,a.jsx)(r.default,{className:g().className,sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"44vw"},children:(0,a.jsxs)(l.A,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",bgcolor:"#eeee",padding:2},children:[(0,a.jsx)(n.default,{className:g().className,component:"h1",variant:"h5",children:"Digite el n\xfamero de la Factura"}),(0,a.jsxs)(r.default,{component:"form",noValidate:!0,sx:{mt:1},children:[(0,a.jsx)(i.A,{required:!0,fullWidth:!0,id:"factura",name:"factura",autoComplete:"factura",autoFocus:!0,value:o.factura||"",onChange:p}),(0,a.jsx)(s.default,{className:g().className,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:v,children:"Buscar"})]})]})})})]})}},8889:(e,t,o)=>{"use strict";o.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,o)=>{"use strict";o.d(t,{A:()=>c,AuthProvider:()=>s});var a=o(95155),r=o(12115),l=o(76046),n=o(89208);let i=(0,r.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,o=(0,l.useRouter)(),[s]=(0,r.useState)(!0),[c,d]=(0,r.useState)({}),[u,_]=(0,r.useState)(null),[p,m]=(0,r.useState)({}),[h,f]=(0,r.useState)({}),[g,S]=(0,r.useState)({}),[x,A]=(0,r.useState)({}),[C,y]=(0,r.useState)({}),v=(0,r.useCallback)(function(e){n.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),_(e)},[]),b=(0,r.useCallback)(function(){n.A.remove("authTokens"),localStorage.removeItem("auth"),_(null),o.push("/")},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),o=localStorage.getItem("pedido"),a=localStorage.getItem("pedidoV"),r=localStorage.getItem("cartera"),l=localStorage.getItem("cliente"),n=localStorage.getItem("clienteV");n&&S(JSON.parse(n)),a&&A(JSON.parse(a)),r&&y(JSON.parse(r)),e&&_(JSON.parse(e)),l&&f(JSON.parse(l)),o&&m(JSON.parse(o)),t&&d(JSON.parse(t))},[]);let T=(0,r.useMemo)(()=>({auth:u,cliente:h,setCliente:f,pedido:p,setPedido:m,caja:c,setCaja:d,clienteV:g,setClienteV:S,pedidosV:x,setPedidosV:A,carteraV:C,setCarteraV:y,loading:s,login:v,logout:b}),[u,h,p,c,g,x,C,v,b]);return(0,a.jsx)(i.Provider,{value:T,children:t})},c=()=>(0,r.useContext)(i)},79046:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'",fontStyle:"normal"},className:"__className_d48d41"}},76290:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'",fontStyle:"normal"},className:"__className_d48d41"}},21855:(e,t,o)=>{"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.d(t,{A:()=>a})}},e=>{var t=t=>e(e.s=t);e.O(0,[339,7199,8320,3930,6058,5854,994,5975,1260,6403,152,8173,2670,7493,1229,8441,1517,7358],()=>t(4639)),_N_E=e.O()}]);