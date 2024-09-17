(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9580],{20067:function(){},72061:function(){},10416:function(e,t,a){"use strict";var i=a(57437),l=a(27800),r=a(2265),d=a(60091);t.Z=e=>{let{datos:t}=e,[a,n]=(0,r.useState)(!1);return(0,i.jsx)(d.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}n(!0);try{let e=l.P6.book_new(),a=l.P6.json_to_sheet(t);l.P6.book_append_sheet(e,a,"Datos"),l.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{n(!1)}},disabled:a,children:a?"Loading...":"Excel"})}},24506:function(e,t,a){"use strict";a.r(t);var i=a(57437),l=a(41448),r=a.n(l),d=a(31193),n=a(92355),o=a(28027),s=a(52610),c=a(74275),h=a(23983),u=a(60335),f=a(83719),p=a(77699),g=a(10416),x=a(61169),m=a(24959),w=a(2265),N=a(30736),C=a(40468),E=a(97183),j=a(99128);function O(e){let{children:t,value:a,index:l,...r}=e;return(0,i.jsx)("div",{role:"tabpanel",hidden:a!==l,id:"simple-tabpanel-".concat(l),"aria-labelledby":"simple-tab-".concat(l),...r,children:a===l&&(0,i.jsx)(d.default,{sx:{p:3},children:t})})}function A(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}O.propTypes={children:r().node,index:r().number.isRequired,value:r().number.isRequired};let S=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),I=[{field:"ARTICULO",headerName:"Cod",width:130},{field:"DESCRIPCION",headerName:"Referencia",width:700},{field:"SUBLINEA",headerName:"Sublinea",width:300},{field:"TOTAL_DISP",headerName:"Disp",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_IMPUESTO",headerName:"IVA",width:130},{field:"PRECIOMASIVA",headerName:"Masiva",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_DCTO",headerName:"D1",width:130},{field:"UNIDAD_EMPAQUE",headerName:"Emp",width:130},{field:"EXIST_REAL",headerName:"Existreal",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],b=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,renderCell:e=>S(e.value)},{field:"ANULADA",headerName:"AN",width:50},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>Number(e).toFixed(1),align:"right"},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORCIVA",headerName:"IVA",width:130,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,renderCell:e=>S(e.value)},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}],D=[{field:"FECHA",headerName:"Fecha",width:250,renderCell:e=>S(e.value)},{field:"CLIENTE",headerName:"Cliente",width:160},{field:"PEDIDO",headerName:"Pedido",width:100},{field:"VE",headerName:"VEND",width:80,align:"right"},{field:"PED",headerName:"Ped",width:100,align:"right"},{field:"DESP",headerName:"Desp",width:100,align:"right"},{field:"PEND",headerName:"Pend",width:100,align:"right"},{field:"ESTADO",headerName:"Estado",width:120},{field:"AUTORIZADONOM",headerName:"Autortizado",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,i.jsx)(f.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}}],R=async e=>(await fetch("/api/productos/listar/".concat(e.BODEGA),{method:"GET",headers:{"Content-Type":"application/json"}})).json(),F=async e=>{let t=await fetch("/api/productos/facturas/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este producto."),[])},T=async e=>{let t=await fetch("/api/productos/pedidos/".concat(e.ARTICULO),{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok&&404===t.status)return console.log("No hay pedidos para este producto."),[];let a=await t.json();return console.log(a),a},P=async()=>(await fetch("/api/productos/bodegas",{method:"GET",headers:{"Content-Type":"application/json"}})).json();t.default=function(){let e=(0,w.useRef)(),[t,a]=(0,w.useState)(0),[l,r]=(0,w.useState)(!1),[S,v]=(0,w.useState)([]),[y,L]=(0,w.useState)([]),[U,_]=(0,w.useState)([]),[Z,k]=(0,w.useState)([]),[M,B]=(0,w.useState)(""),[V,z]=(0,w.useState)([]),[G,H]=(0,w.useState)(!0),[q,Y]=(0,w.useState)([]),[Q,X]=(0,w.useState)([]),[J,K]=(0,w.useState)();(0,w.useEffect)(()=>{e.current.focus(),W()},[]),(0,w.useEffect)(()=>{J&&$()},[J]);let W=async()=>{v(await P())},$=async()=>{if(J){r(!0);let e=await R(J);try{e?(r(!1),z(e),X(e)):(r(!1),z([])),H(!1)}catch(e){r(!1)}}},ee=async()=>{let e=await F(M);k([]);try{J&&(e?k(e):k([]),H(!1))}catch(e){r(!1)}},et=async()=>{let e=await T(M);L([]);try{J&&(e?L(e):L([]),H(!1))}catch(e){console.log(e)}},ea=e=>{let t=e.toLowerCase();z(Q.filter(e=>Object.values(e).map(e=>e?e.toString().toLowerCase():"").some(e=>e.includes(t))))},ei=(0,w.useCallback)(e=>{Y(e),e.length>0&&B(Q.filter(t=>{let a=t.ARTICULO;return!!a&&a.toString().includes(e[0])})[0])},[V]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.Z,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:l,children:(0,i.jsx)(C.default,{color:"inherit"})}),(0,i.jsx)(d.default,{sx:{padding:"20px"},children:(0,i.jsx)(f.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"PRODUCTOS"})}),(0,i.jsxs)(d.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(x.Z,{options:S,value:J,onChange:(e,t)=>{t&&(K(t),$(t))},getOptionLabel:e=>e.NOMBRE||"Bodegas",disablePortal:!0,id:"combo-box-demo",sx:{width:350},isOptionEqualToValue:(e,t)=>e.NOMBRE===t.NOMBRE,renderInput:e=>(0,i.jsx)(h.Z,{...e,label:"Bodegas",placeholder:"Selecciona una bodega",variant:"standard"}),disableClearable:!0})}),(0,i.jsx)(d.default,{children:(0,i.jsx)(f.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#920b0d"},children:M.DESCRIPCION})}),(0,i.jsxs)(d.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[V.length>0?(0,i.jsx)(g.Z,{datos:V}):"",(0,i.jsxs)(o.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:400,margin:"10px"},children:[(0,i.jsx)(c.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:U,onChange:e=>{e.preventDefault(),_(e.target.value),ea(e.target.value)},inputRef:e}),(0,i.jsx)(u.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,i.jsx)(p.Z,{})})]})]})]}),(0,i.jsxs)(d.default,{sx:{width:"100%"},children:[(0,i.jsx)(d.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,i.jsxs)(n.Z,{value:t,onChange:(e,t)=>{a(t)},"aria-label":"basic tabs example",children:[(0,i.jsx)(E.Z,{label:"Articulos",...A(0)}),(0,i.jsx)(E.Z,{label:"Pedidos:".concat(y.length),...A(1),onClick:et}),(0,i.jsx)(E.Z,{label:"Facturas:".concat(Z.length),...A(2),onClick:ee})]})}),(0,i.jsx)(O,{component:d.default,value:t,index:0,children:(0,i.jsx)(d.default,{sx:{width:"100%",height:700},children:V.length<=0?(0,i.jsxs)(d.default,{sx:{width:"100%"},title:"Seleccione una bodega en la lista de arriba",children:[" ",(0,i.jsx)(m.Z,{})," "]}):(0,i.jsx)(s._,{rows:V,columns:I,initialState:{pagination:{paginationModel:{page:0,pageSize:11}}},pageSizeOptions:[5,11,20],onRowSelectionModelChange:ei,rowSelectionModel:q,getRowId:e=>e.ARTICULO,sx:{backgroundColor:"#ffffff"}})})}),(0,i.jsx)(O,{component:d.default,value:t,index:1,children:!0===G?(0,i.jsx)(d.default,{sx:{width:"100%"},children:(0,i.jsx)(j.Z,{})}):0===y.length?(0,i.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,i.jsx)(d.default,{sx:{width:"100%",height:700},children:(0,i.jsx)(s._,{rows:y,columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:11}}},pageSizeOptions:[5,11,20],getRowId:e=>e.PEDIDO,sx:{backgroundColor:"#ffffff"}})})}),(0,i.jsx)(O,{component:d.default,value:t,index:2,children:!0===G?(0,i.jsx)(d.default,{sx:{width:"100%"},children:(0,i.jsx)(j.Z,{})}):Z&&Z.length<=0?(0,i.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,i.jsx)(d.default,{sx:{width:"100%",height:700},children:(0,i.jsx)(s._,{rows:Z,columns:b,initialState:{pagination:{paginationModel:{page:0,pageSize:11}}},pageSizeOptions:[5,11,20],getRowId:e=>e.FACTURA,sx:{backgroundColor:"#ffffff"}})})})]})]})}}}]);