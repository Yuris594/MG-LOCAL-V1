(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4665],{20067:function(){},72061:function(){},69088:function(e,t,l){Promise.resolve().then(l.bind(l,88801))},88801:function(e,t,l){"use strict";l.r(t);var a=l(57437),r=l(2265),n=l(52610),i=l(31193),o=l(60091),s=l(83719),d=l(15656),u=l(28027),c=l(74275),f=l(77699),h=l(60335),x=l(99128),g=l(39987),E=l(15408),p=l(16463),N=l(87138),m=l(13726),w=l(10416);l(85935);var C=l(60559);let j=[{field:"CLIENTE",headerName:"NIT",width:170},{field:"NOMBREALIAS",headerName:"NOMBRE",width:800},{field:"DIRECCION",headerName:"DIRECCI\xd3N",width:300},{field:"TELEFONO1",headerName:"TELEFONO",width:190},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:450},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}];t.default=()=>{let e=(0,p.useRouter)(),{setCliente:t}=(0,g.Z)(),[l,S]=(0,r.useState)([]),[O,I]=(0,r.useState)([]),[L,v]=(0,r.useState)([]),[D,b]=(0,r.useState)(!1),[R,y]=(0,r.useState)(!0),[T,_]=(0,r.useState)([]);(0,r.useEffect)(()=>{A()},[]);let A=async()=>{try{let{datos:e}=await (0,E.Z)("/api/clientes/listar","GET");e&&(y(!1),v(e),S(e)),setTimeout(()=>{b(!0)},100)}catch(e){(0,C.conexion)(),console.log("Error")}},k=e=>{v(l.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),r=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==r?void 0:r.includes(e.toLowerCase()))?t:null}))},M=(0,r.useCallback)(a=>{if(_(a),a.length>0){let r=l.filter(e=>{let t=e.CLIENTE;return!!t&&t.toString().includes(a[0])});localStorage.setItem("clientTemp",JSON.stringify(r)),t(r),e.push("/clients/clientesTemp")}},[L]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{marginBottom:"40px",children:(0,a.jsx)(m.Z,{})}),!0===R?(0,a.jsx)(i.default,{sx:{width:"100%"},children:(0,a.jsx)(x.Z,{})}):(0,a.jsxs)(i.default,{children:[(0,a.jsx)(s.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000"},children:"CLIENTES"}),(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsx)(N.default,{href:"",children:(0,a.jsx)(o.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"})}),(0,a.jsx)(w.Z,{datos:L})]}),(0,a.jsxs)(u.default,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,a.jsx)(c.default,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:O,onChange:e=>{e.preventDefault(),I(e.target.value),k(e.target.value)}}),(0,a.jsx)(h.default,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(f.default,{})})]})]}),(0,a.jsx)(d.Z,{in:D,children:(0,a.jsx)(i.default,{sx:{height:900,width:"100%",backgroundColor:"#d80606"},children:(0,a.jsx)(n._,{rows:L,columns:j,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,15],onRowSelectionModelChange:M,rowSelectionModel:T,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})]})}},10416:function(e,t,l){"use strict";var a=l(57437),r=l(27800),n=l(2265),i=l(60091);t.Z=e=>{let{datos:t}=e,[l,o]=(0,n.useState)(!1);return(0,a.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=r.P6.book_new(),l=r.P6.json_to_sheet(t);r.P6.book_append_sheet(e,l,"Datos"),r.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:l,children:l?"Loading...":"Excel"})}}},function(e){e.O(0,[1425,9461,4797,4129,6291,2561,4275,1450,6540,1878,4486,2610,8249,8433,2067,559,2971,7023,1744],function(){return e(e.s=69088)}),_N_E=e.O()}]);