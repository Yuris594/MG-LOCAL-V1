(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2503],{92826:function(e,t,a){Promise.resolve().then(a.bind(a,19280))},9504:function(e,t,a){"use strict";var r=a(23963);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(19118)),o=a(57437);t.default=(0,l.default)((0,o.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},19337:function(e,t,a){"use strict";var r=a(59018),l=a(57437);t.Z=(0,r.Z)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},93062:function(e,t,a){"use strict";var r=a(59018),l=a(57437);t.Z=(0,r.Z)((0,l.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined")},87070:function(e,t,a){"use strict";var r=a(59018),l=a(57437);t.Z=(0,r.Z)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},73423:function(e,t,a){"use strict";var r=a(59018),l=a(57437);t.Z=(0,r.Z)((0,l.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},85465:function(e,t,a){"use strict";a.d(t,{ZP:function(){return I}});var r=a(2265),l=a(44839),o=a(76990),i=a(69942),n=a(62501),s=a(13100),d=a(28027),c=a(12272),u=a(41738),h=a(48024),p=a(22960),f=a(339),x=a(95885),m=a(72296),g=a(70587);function C(e){return(0,g.ZP)("MuiDrawer",e)}(0,m.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);var v=a(57437);let j=(e,t)=>{let{ownerState:a}=e;return[t.root,("permanent"===a.variant||"persistent"===a.variant)&&t.docked,t.modal]},w=e=>{let{classes:t,anchor:a,variant:r}=e,l={root:["root"],docked:[("permanent"===r||"persistent"===r)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat((0,c.Z)(a)),"temporary"!==r&&"paperAnchorDocked".concat((0,c.Z)(a))]};return(0,o.Z)(l,C,t)},b=(0,h.default)(n.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:j})((0,f.Z)(e=>{let{theme:t}=e;return{zIndex:(t.vars||t).zIndex.drawer}})),S=(0,h.default)("div",{shouldForwardProp:u.Z,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:j})({flex:"0 0 auto"}),E=(0,h.default)(d.default,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.paper,t["paperAnchor".concat((0,c.Z)(a.anchor))],"temporary"!==a.variant&&t["paperAnchorDocked".concat((0,c.Z)(a.anchor))]]}})((0,f.Z)(e=>{let{theme:t}=e;return{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:e=>{let{ownerState:t}=e;return"left"===t.anchor&&"temporary"!==t.variant},style:{borderRight:"1px solid ".concat((t.vars||t).palette.divider)}},{props:e=>{let{ownerState:t}=e;return"top"===t.anchor&&"temporary"!==t.variant},style:{borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}},{props:e=>{let{ownerState:t}=e;return"right"===t.anchor&&"temporary"!==t.variant},style:{borderLeft:"1px solid ".concat((t.vars||t).palette.divider)}},{props:e=>{let{ownerState:t}=e;return"bottom"===t.anchor&&"temporary"!==t.variant},style:{borderTop:"1px solid ".concat((t.vars||t).palette.divider)}}]}})),N={left:"right",right:"left",top:"down",bottom:"up"};var I=r.forwardRef(function(e,t){let a=(0,x.i)({props:e,name:"MuiDrawer"}),o=(0,p.default)(),n=(0,i.V)(),d={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:u,children:h,className:f,elevation:m=16,hideBackdrop:g=!1,ModalProps:{BackdropProps:C,...j}={},onClose:I,open:O=!1,PaperProps:k={},SlideProps:y,TransitionComponent:R=s.Z,transitionDuration:Z=d,variant:P="temporary",...T}=a,L=r.useRef(!1);r.useEffect(()=>{L.current=!0},[]);let D=function(e,t){let{direction:a}=e;return"rtl"===a&&["left","right"].includes(t)?N[t]:t}({direction:n?"rtl":"ltr"},c),A={...a,anchor:c,elevation:m,open:O,variant:P,...T},M=w(A),U=(0,v.jsx)(E,{elevation:"temporary"===P?m:0,square:!0,...k,className:(0,l.Z)(M.paper,k.className),ownerState:A,children:h});if("permanent"===P)return(0,v.jsx)(S,{className:(0,l.Z)(M.root,M.docked,f),ownerState:A,ref:t,...T,children:U});let _=(0,v.jsx)(R,{in:O,direction:N[D],timeout:Z,appear:L.current,...y,children:U});return"persistent"===P?(0,v.jsx)(S,{className:(0,l.Z)(M.root,M.docked,f),ownerState:A,ref:t,...T,children:_}):(0,v.jsx)(b,{BackdropProps:{...u,...C,transitionDuration:Z},className:(0,l.Z)(M.root,M.modal,f),open:O,ownerState:A,onClose:I,hideBackdrop:g,ref:t,...T,...j,children:_})})},5152:function(e,t,a){"use strict";a.r(t);var r=a(57437),l=a(2265),o=a(77699),i=a(60335),n=a(83719),s=a(74275),d=a(52610),c=a(60091),u=a(28027),h=a(15656),p=a(31193);a(87138);var f=a(39987),x=a(15408);a(85935);let m=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}];t.default=e=>{let{setOpen:t}=e,{setCliente:a}=(0,f.Z)(),[g,C]=(0,l.useState)(),[v,j]=(0,l.useState)(""),[w,b]=(0,l.useState)(!1),[S,E]=(0,l.useState)([]),[N,I]=(0,l.useState)([]);(0,l.useEffect)(()=>{O()},[]);let O=async()=>{try{let{datos:e}=await (0,x.Z)("/api/clientes/listar","GET");e&&(C(e),E(e)),setTimeout(()=>{b(!0)},100)}catch(e){console.log("Error al obtener los datos",e)}},k=(0,l.useMemo)(()=>O,[]);(0,l.useEffect)(()=>{k()},[k]);let y=e=>{C(S.filter(t=>{let a=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),r=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),l=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==a?void 0:a.includes(e.toLowerCase()))||(null==r?void 0:r.includes(e.toLowerCase()))||(null==l?void 0:l.includes(e.toLowerCase()))?t:null}))},R=(0,l.useCallback)(e=>{if(I(e),e.length>0){let r=S.filter(t=>{let a=t.CLIENTE;return!!a&&a.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(r)),a(r[0]),t(!1)}},[g]);return setTimeout(()=>{b(!0)},100),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,r.jsx)(n.default,{variant:"h",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"CLIENTES"}),(0,r.jsxs)(p.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,r.jsx)(c.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"}),(0,r.jsxs)(u.default,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:650,margin:"0%"},children:[(0,r.jsx)(s.default,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:v,onChange:e=>{e.preventDefault(),j(e.target.value),y(e.target.value)}}),(0,r.jsx)(i.default,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,r.jsx)(o.default,{})})]})]}),(0,r.jsx)(h.Z,{in:w,children:(0,r.jsx)(p.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#0a0a0a",color:"#fff"}},children:(0,r.jsx)(d._,{rows:g,columns:m,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],onRowSelectionModelChange:R,rowSelectionModel:N,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})})}},19280:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var r=a(57437),l=a(2265),o=a(73423),i=a(19337),n=a(87070),s=a(93062),d=a(56988),c=a(78056),u=a(42637),h=a(52610),p=a(31193),f=a(74275),x=a(26460),m=a(60091),g=a(83719),C=a(62501),v=a(99128),j=a(5152),w=(e,t,a,r)=>{(0,l.useEffect)(()=>{let l=l=>{let o=l.keyCode||l.which;if(o>=48&&o<=57||13===o){let l=String.fromCharCode(o),i=e.findIndex(e=>e.ARTICULO===a[0]);if(-1!==parseFloat(i)){let a=[...e],o=a[i][r];"0"===o||""===o?a[i][r]=l:a[i][r]="".concat(o).concat(l),console.log(o),t(a)}}},o=l=>{if(8===(l.keyCode||l.which)){let l=e.findIndex(e=>e.ARTICULO===a[0]);if(-1!==l&&e[l][r]){let a=[...e],o=a[l][r];a[l][r]=o.slice(0,-1),""===a[l][r]&&(a[l][r]="0"),t(a)}}};return document.addEventListener("keypress",l),document.addEventListener("keydown",o),()=>{document.removeEventListener("keypress",l),document.removeEventListener("keydown",o)}},[e,a,r])},b=a(13726),S=a(39987),E=a(41448),N=a.n(E),I=a(87138),O=a(15408);a(85935),N().node,N().number.isRequired,N().number.isRequired;let k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},y=[{field:"DESCRIPCION",headerName:"Referencia",width:500,headerClassName:"super-app-theme--header"},{field:"SUBLINEA",headerName:"Sublinea",width:300,headerClassName:"super-app-theme--header"},{field:"TOTAL_DISP",headerName:"Disp",width:70,headerClassName:"super-app-theme--header"},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right",editable:!0,headerClassName:"super-app-theme--header"},{field:"CANTIDAD",headerName:"",width:50,type:"number",headerClassName:"super-app-theme--header"},{field:"EXIST_REAL",headerName:"Existreal",width:90,headerClassName:"super-app-theme--header"}];var R=()=>{let{setCaja:e,cliente:t}=(0,S.Z)(),[a,E]=(0,l.useState)(!1),[N,R]=(0,l.useState)("CPed"),[Z,P]=(0,l.useState)([]),[T,L]=(0,l.useState)([]),[D,A]=(0,l.useState)(!0),[M,U]=(0,l.useState)([]),[_,z]=(0,l.useState)([]),[B,F]=(0,l.useState)([]),[V,G]=(0,l.useState)([]),[J,H]=(0,l.useState)({}),[q,W]=(0,l.useState)(0);w(M,U,B,N),(0,l.useEffect)(()=>{X()},[]),(0,l.useEffect)(()=>{setTimeout(()=>{let e=Number(M.reduce((e,t)=>{let a=t.PRECIO*(1-t.PORC_DCTO/100)*(1+t.PORC_IMPUESTO/100);return e+t.CPed*a},0)).toFixed(0);W("".concat(parseFloat(e).toLocaleString()))},100)},[M,B]),(0,l.useEffect)(()=>{if(void 0!==_){let e={};_.forEach((t,a)=>{let r=T.find(e=>e.ARTICULO===t);if(r){if(r.CPed=1,"string"==typeof r.PRECIO){let e=parseInt(r.PRECIO);r.PRECIO=isNaN(e)?0:Math.round(100*e)/100}else"number"==typeof r.PRECIO&&(r.PRECIO=Math.round(r.PRECIO))}e[a]=r});let t={...JSON.parse(localStorage.getItem("pedidoGTemp"))||{},...e};localStorage.setItem("pedidoTempG",JSON.stringify(t)),void 0!==t&&Y()}},[_]);let X=async()=>{try{let{datos:e}=await (0,O.Z)("/api/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}});L(e),G(e),A(!1)}catch(e){console.log(e)}},K=e=>{L(V.filter(t=>{let a=t.ARTICULO&&t.ARTICULO.toString().toLowerCase(),r=t.DESCRIPCION&&t.DESCRIPCION.toString().toLowerCase();return(null==a?void 0:a.includes(e.toLowerCase()))||(null==r?void 0:r.includes(e.toLowerCase()))?t:null}).filter(e=>null!==e))},Y=()=>{let e=JSON.parse(localStorage.getItem("pedidoTempG"));if(e&&e[0]&&e[0].ARTICULO){let t=Object.values(e),a=M.some(e=>e.ARTICULO===t[0].ARTICULO),r=[...M];a||U([...r,...t])}},$=e=>()=>{H({...J,[e]:{mode:c.se.Edit}})},Q=e=>()=>{H({...J,[e]:{mode:c.se.View}})},ee=e=>()=>{U(M.filter(t=>t.ARTICULO!==e))},et=e=>()=>{H({...J,[e]:{mode:c.se.View,ignoreModifications:!0}}),M.find(t=>t.ARTICULO===e).isNew&&U(M.filter(t=>t.ARTICULO!==e))},ea=[{field:"DESCRIPCION",headerName:"Referencia",width:500},{field:"CPed",headerName:"Cant",width:80,type:"number",editable:!0},{field:"PRECIO",headerName:"Precio",width:130},{field:"actions",type:"actions",headerName:"Actions",cellClassName:"actions",getActions:e=>{var t;let{id:a}=e;return(null===(t=J[a])||void 0===t?void 0:t.mode)===c.se.Edit?[(0,r.jsx)(u.u,{icon:(0,r.jsx)(o.Z,{}),label:"Save",sx:{color:"primary.main"},onClick:Q(a)}),(0,r.jsx)(u.u,{icon:(0,r.jsx)(i.Z,{}),label:"Cancel",className:"textPrimary",onClick:et(a),color:"inherit"})]:[(0,r.jsx)(u.u,{icon:(0,r.jsx)(n.Z,{}),label:"Edit",className:"textPrimary",onClick:$(a),color:"inherit"}),(0,r.jsx)(u.u,{icon:(0,r.jsx)(s.Z,{}),label:"Delete",className:"textPrimary",onClick:ee(a),color:"inherit"})]}}],er=e=>{let t=e.currentTarget.value,a=M.findIndex(e=>e.ARTICULO===B[0]);if(-1!==a){let e=[...M],r=e[a][N];"0"===r||""===r?e[a][N]=t:e[a][N]="".concat(r).concat(t),U(e)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.default,{marginBottom:"30px",children:[" ",(0,r.jsx)(b.Z,{})," "]}),(0,r.jsx)(p.default,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:2,flexWrap:"wrap",mt:2,mr:4},children:(0,r.jsx)(f.default,{sx:{ml:1,flex:1,maxWidth:"300px",border:"2px solid black",borderRadius:"4px",p:1,mb:2},type:"text",value:Z,onChange:e=>{P(e.target.value),K(e.target.value)},placeholder:"Escanea el c\xf3digo de barras aqu\xed",onKeyDown:e=>{"Enter"===e.key&&""!==Z&&(z([Z]),F([Z]),P([]),console.log(Z),console.log(_))},autoFocus:!0})}),(0,r.jsxs)(p.default,{sx:{display:"flex",flexDirection:"row",height:"100%",justifyContent:"space-between"},children:[(0,r.jsxs)(p.default,{sx:{width:"33%",display:"flex",flexDirection:"column",gap:2},children:[(0,r.jsx)(p.default,{sx:{mb:1,height:700,width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#27512":"#e1e1e1"}},"& .super-app-theme--header":{backgroundColor:"rgba(0, 0, 0, 0.541)",color:"#fff"}},children:(0,r.jsx)(h._,{density:"compact",rows:M,columns:ea,editMode:"row",getRowId:e=>e.ARTICULO,rowSelectionModel:B,rowModesModel:J,onRowModesModelChange:e=>{H(e)},onRowSelectionModelChange:e=>{F(e)},onRowEditStop:(e,t)=>{e.reason===d.U.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:e=>{let t={...e,isNew:!1};return U(M.map(a=>a.ARTICULO===e.ARTICULO?t:a)),t},slotProps:{toolbar:{setProductosP:U,setRowModesModel:H}},initialState:{pagination:{paginationModel:{page:0,pageSize:16}}},pageSizeOptions:[5,16]})}),(0,r.jsxs)(p.default,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",mt:1},children:[(0,r.jsx)(x.Z,{variant:"text","aria-label":"text button group",sx:{height:20},children:(0,r.jsxs)(m.default,{sx:{flexDirection:"row"},children:[(0,r.jsxs)(g.default,{variant:"outline",sx:{paddingRight:2,color:"black"},gutterBottom:!0,children:[" ","Total:$"," "]}),(0,r.jsxs)(g.default,{sx:{},gutterBottom:!0,children:[" ",q," "]})]})}),(0,r.jsx)(p.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:(0,r.jsxs)(x.Z,{variant:"outlined","aria-label":"text button group",children:[(0,r.jsx)(m.default,{sx:{flexDirection:"column"},children:(0,r.jsxs)(g.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Nota del Cliente"," "]})}),(0,r.jsx)(m.default,{sx:{flexDirection:"column"},children:(0,r.jsxs)(g.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Reembolso"," "]})}),(0,r.jsx)(m.default,{sx:{flexDirection:"column"},children:(0,r.jsxs)(g.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Informacion"," "]})})]})}),(0,r.jsxs)(p.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",height:"230px",overflow:"auto"},children:[(0,r.jsxs)(x.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"100%",height:"100%"},children:[(0,r.jsxs)(m.default,{variant:"outlined",sx:{width:"100%",height:"30%"},onClick:()=>E(!0),children:["Cliente:",t.NOMBREALIAS]}),(0,r.jsx)(C.Z,{open:a,onClose:()=>E(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsx)(p.default,{sx:k,children:(0,r.jsx)(j.default,{setOpen:E})})}),(0,r.jsx)(m.default,{component:I.default,href:"0"!==q?"../../../caja":"",variant:"outlined",sx:{width:"100%",height:"100%",backgroundColor:"0"!==q?"#087ea6":"transparent",color:"0"!==q?"white":"black"},onClick:"0"!==q?()=>{let t={total:q,...M};localStorage.setItem("pago",JSON.stringify(t)),e(t)}:null,children:"Pago"})]}),(0,r.jsxs)(x.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:1,onClick:er,children:[" ","1"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:4,onClick:er,children:[" ","4"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:7,onClick:er,children:[" ","7"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:er,children:[" ","+/-"," "]})]}),(0,r.jsxs)(x.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:2,onClick:er,children:[" ","2"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:5,onClick:er,children:[" ","5"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:8,onClick:er,children:[" ","8"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:er,children:[" ","0"," "]})]}),(0,r.jsxs)(x.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:3,onClick:er,children:[" ","3"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:6,onClick:er,children:[" ","6"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:9,onClick:er,children:[" ","9"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:er,children:[" ",","," "]})]}),(0,r.jsxs)(x.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,r.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"CPed"===N?"#606060":"transparent",color:"CPed"===N?"white":"",height:"100%"},onClick:()=>R("CPed"),children:[" ","Ctdad"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"PORC_DCTO"===N?"#606060":"transparent",color:"PORC_DCTO"===N?"white":"",height:"100%"},onClick:()=>R("PORC_DCTO"),children:[" ","%Desc"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"PRECIO"===N?"#606060":"transparent",color:"PRECIO"===N?"white":"",height:"100%"},onClick:()=>R("PRECIO"),children:[" ","Precio"," "]}),(0,r.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},onClick:()=>{let e=M.findIndex(e=>e.ARTICULO===B[0]);if(-1!==e&&M[e][N]){let t=[...M],a=t[e][N];t[e][N]=a.slice(0,-1),""===t[e][N]&&(t[e][N]="0"),U(t)}},children:[" ","X"," "]})]})]})]})]}),(0,r.jsx)(p.default,{sx:{display:"flex",width:"70%",alignItems:"center",height:"100%",justifyContent:"space-between",flexDirection:"column"},children:(0,r.jsx)(p.default,{sx:{display:"flex",width:"100%",height:1030,"& .super-app-theme--header":{backgroundColor:"rgba(117, 116, 116, 0.541)",color:"#000000"}},children:!0===D?(0,r.jsxs)(p.default,{sx:{width:"100%"},children:[" ",(0,r.jsx)(v.Z,{})," "]}):(0,r.jsx)(h._,{rows:T,columns:y,getRowId:e=>e.ARTICULO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18],onRowSelectionModelChange:e=>{z(e),F(e)},onSelectionModelChange:e=>z(e),rowSelectionModel:_})})})]})]})}},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return A}});var r=a(57437),l=a(20124),o=a(31193),i=a(71733),n=a(79806),s=a(60335),d=a(60091),c=a(83719),u=a(62501),h=a(6291),p=a(11656),f=a(85465),x=a(66325),m=a(90922),g=a(26032),C=a(55693),v=a(42188),j=a(66299),w=a(78457),b=a(21704),S=a(66246),E=a(9504),N=a(16463),I=a(39987),O=a(2265),k=a(32184),y=a(7547),R=a(57300),Z=a(86917),P=a(47905),T=a(87138),L=e=>{let{page:t}=e;return(0,r.jsx)(o.default,{sx:{width:250},children:(0,r.jsx)("nav",{children:(0,r.jsx)(k.Z,{children:t.map(e=>(0,r.jsx)(y.ZP,{disablePadding:!0,children:(0,r.jsxs)(R.Z,{LinkComponent:T.default,href:e.url,onClick:e.onClick,children:[(0,r.jsx)(Z.Z,{children:e.icon}),(0,r.jsx)(P.Z,{children:e.title})]})},e.title))})})})};let D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var A=()=>{let e=(0,N.useRouter)(),{auth:t}=(0,I.Z)(),[a,k]=(0,O.useState)(!1),[y,R]=(0,O.useState)(null),[Z,P]=(0,O.useState)(!1),[A,M]=(0,O.useState)(null),U=()=>{P(!1),R(null)},_=[{title:"USUARIOS ",url:"../../usuarios",icon:(0,r.jsx)(x.Z,{})},{title:"PEDIDOS",url:"../../pedidos",icon:(0,r.jsx)(m.Z,{})},{title:"CLIENTES",url:"../../clients",icon:(0,r.jsx)(g.Z,{})},{title:"PRODUCTOS",icon:(0,r.jsx)(C.Z,{}),onClick:e=>{P(!0),R(e.currentTarget)}},{title:"FACTURAS",url:"../../facturas",icon:(0,r.jsx)(v.Z,{})},{title:"CAJA",url:"../../pedidos/pedidosCaja",icon:(0,r.jsx)(j.Z,{})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{}),(0,r.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,r.jsx)(i.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(s.default,{color:"inherit",size:"large",onClick:e=>{M(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,r.jsx)(E.default,{})}),(0,r.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:_.map(e=>(0,r.jsx)(d.default,{color:"inherit",LinkComponent:T.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,r.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,r.jsx)(d.default,{component:T.default,href:"/start",color:"inherit",children:(0,r.jsx)(S.Z,{})}),(0,r.jsxs)(d.default,{color:"inherit",children:[(0,r.jsx)(b.Z,{}),t.PER_Nom]}),(0,r.jsx)(d.default,{color:"inherit",onClick:()=>k(!0),children:(0,r.jsx)(w.Z,{})})]})}),(0,r.jsx)(u.Z,{open:a,onClose:()=>k(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(o.default,{sx:D,children:[(0,r.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,r.jsx)(o.default,{children:(0,r.jsx)(d.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{e.push("/")},children:"SALIR"})})]})}),(0,r.jsxs)(h.Z,{id:"basic-menu",anchorEl:y,open:Z,onClose:U,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,r.jsx)(p.Z,{onClick:U,component:T.default,href:"../../productos",children:"Productos Por Bodega"}),(0,r.jsx)(p.Z,{onClick:U,component:T.default,href:"../../productosMG",children:"Productos-MG"})]}),(0,r.jsx)(f.ZP,{open:!!A,onClose:()=>{M(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,r.jsx)(L,{page:_})})]})]})}},39987:function(e,t,a){"use strict";a.d(t,{a:function(){return o}});var r=a(85800),l=a(2265);let o=()=>(0,l.useContext)(r.default);t.Z=o},85935:function(e,t,a){"use strict";a.d(t,{x:function(){return r}});let r={url:a(20357).env.NEXT_PUBLIC_API_URL}},15408:function(e,t){"use strict";let a=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0;try{let l=!0,o={method:"GET"};("GET"===t||"DELETE"===t)&&(o={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(a),r?o={method:t,body:a}:o.body=JSON.stringify(a));let i=await fetch(e,o);if(!i.ok)return{error:"Error en la solicitud Fetch",status:i.status,cargando:!1};let n=await i.json();return l=!1,{datos:n,cargando:l}}catch(e){return{datos:null,cargando:!1}}};t.Z=a},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return i}});var r=a(57437),l=a(2265);let o=(0,l.createContext)(),i=e=>{let{children:t}=e,[a,i]=(0,l.useState)({}),[n,s]=(0,l.useState)({}),[d,c]=(0,l.useState)({}),[u,h]=(0,l.useState)({}),[p,f]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),a=localStorage.getItem("pedidoTemp"),r=localStorage.getItem("caja");e&&i(JSON.parse(e)),t&&s(JSON.parse(t)),a&&c(JSON.parse(a)),r&&h(JSON.parse(r))},[]),(0,r.jsx)(o.Provider,{value:{auth:a,setAuth:i,cliente:n,setCliente:s,pedido:d,setPedido:c,caja:u,setCaja:h,loading:p},children:t})};t.default=o}},function(e){e.O(0,[4797,4129,6291,2561,4275,1450,6540,1878,4486,2610,1338,2971,7023,1744],function(){return e(e.s=92826)}),_N_E=e.O()}]);