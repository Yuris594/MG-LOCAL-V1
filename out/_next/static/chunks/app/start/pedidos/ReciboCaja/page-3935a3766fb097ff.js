(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{52803:function(e,t,o){Promise.resolve().then(o.bind(o,45110))},45110:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return C}});var n=o(57437),i=o(31193),l=o(28027),a=o(83719),r=o(14595),s=o(60091),c=o(60335),d=o(74275),x=o(70270),u=o(94696),m=o(2734),p=o(76235),f=o(2265),g=o(97501);o(27824);var h=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},[i,l]=(0,f.useState)(null),a=(0,p.WU)(new Date,"dd/MM/yyyy HH:mm:ss");return{generarPDF:()=>{let i=new g.default;i.setFontSize(10),i.setFont("Helvetica","normal"),i.text("Miguel Gomez & Cia",10,10),i.text("Tel: 777777",10,15),i.text("Email: miguelgomoz&cia@hotmail.com",10,20),i.text("Website: https://www.miguelgomez.com.co",10,25),i.text("---------------------------------------------------------------",10,30),i.setFontSize(12),i.setFont("Helvetica","bold"),i.text("Servicio: ".concat(o.PER_Nom||"Desconocido"),10,40);let r=50;if(i.setFontSize(10),i.setFont("Helvetica","normal"),i.text("Descripci\xf3n",10,r),i.text("Precio",100,r),r+=10,e&&e.length>0)for(let t=0;t<e.length-4;t++){let o=e[t];i.text("".concat(o.DESCRIPCION),10,r),i.text("$".concat(o.PRECIO),100,r),r+=15}r+=10,i.setFontSize(12),i.setFont("Helvetica","bold"),i.text("Total:",10,r),i.text("$".concat(n.total),100,r),r+=10,i.setFontSize(10),i.setFont("Helvetica","normal"),Array.isArray(t)&&t.length>0?t.forEach(e=>{Object.entries(e).forEach(e=>{let[t,o]=e;if(0!==o&&null!=o){let e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1).toLowerCase(),":");i.setFont("Helvetica","bold"),i.text(e,10,r),i.setFont("Helvetica","bold");let n="$".concat(o.toLocaleString("es"));i.text(n,100,r),r+=10}})}):(i.text("No hay informaci\xf3n adicional disponible",10,r),r+=10),r+=5,i.setFontSize(12),i.setFont("Helvetica","bold"),i.text("Cambio:",10,r);let s=null!=n.cambio?parseFloat(n.cambio).toLocaleString("es"):"0.00";i.text("$".concat(s),100,r),r+=10,i.setFontSize(10),i.setFont("Helvetica","normal"),i.text("Fecha: ".concat(a),10,r),l(i.output("datauristring")),i.output("dataurlnewwindow")},pdfDataUrl:i}},j=o(77699),b=o(9504),v=o(85800),S=o(87138);let w=(0,n.jsx)(i.default,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"});var C=()=>{let{caja:e,auth:t}=(0,v.a)(),o=e?Object.values(e):[],p=e&&e.tipoPago?Object.values(e.tipoPago):[],{generarPDF:f}=h(o,p,t,e);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"0px 4px 12px rgba(0,0,0,0.1)"},children:(0,n.jsxs)(l.Z,{className:"container",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",overflow:"auto"},children:[(0,n.jsxs)(a.default,{variant:"body1",textAlign:"center",margin:"20px 0",sx:{fontSize:50,marginBottom:"15px"},color:"#00796b",gutterBottom:!0,children:["Valor a Cancelar: $ ",e.total]}),(0,n.jsx)(r.Z,{sx:{fonSize:30},orientation:"horizontal"}),(0,n.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsxs)(i.default,{sx:{with:"50%",margin:20},children:[(0,n.jsx)(a.default,{sx:{fontSize:50,margin:0,marginBottom:6,padding:0},color:"text.secondary",gutterBottom:!0,children:"\xbfComo le gustaria recibir su recibo?"}),(0,n.jsx)(s.default,{variant:"outlined",color:"primary",sx:{width:550,marginBottom:5,backgroundColor:"#00796b",color:"#fff"},onClick:f,children:"Imprimir Recibo"}),(0,n.jsxs)(l.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:550,height:100},children:[(0,n.jsx)(c.Z,{sx:{p:"10px"},"aria-label":"menu",children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(d.ZP,{sx:{ml:1,flex:1},inputProps:{"aria-label":"search google maps"}}),(0,n.jsx)(c.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(r.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,n.jsx)(c.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",children:(0,n.jsx)(m.Z,{})})]})]}),(0,n.jsx)(i.default,{sx:{width:"50%",bord:20},children:(0,n.jsxs)(x.Z,{sx:{width:"40vw",height:"100%"},children:[(0,n.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",paddingBotton:0},children:(0,n.jsxs)(a.default,{sx:{fontSize:17,flexDirection:"column"},color:"text.secondary",gutterBottom:!0,children:["...........Miguel G\xf3mez & Cia...........",(0,n.jsx)("br",{}),"...................Tel:777777.................",(0,n.jsx)("br",{}),"........Miguelgomoz&cia@hotmail.com...........",(0,n.jsx)("br",{}),"........https://www.miguelgomez.com.co/...... ",(0,n.jsx)("br",{}),"------------------------------------------------------- ",(0,n.jsx)("br",{}),"........ Servicio -  ",".."]})}),(0,n.jsx)(u.Z,{children:o.map((e,t)=>(0,n.jsxs)(a.default,{component:"div",sx:{display:"flex",justifyContent:"space-between",paddingTop:0},children:[(0,n.jsx)("span",{children:e.DESCRIPCION}),(0,n.jsx)("span",{children:e.PRECIO})]},t))}),(0,n.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,n.jsxs)(a.default,{variant:"h6",component:"div",children:["-------------------------",(0,n.jsx)("br",{}),"Total ",w," ",e.total]})}),(0,n.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",paddingTop:0},children:p.map((e,t)=>(0,n.jsx)(a.default,{component:"div",sx:{display:"flex",flexDirection:"column"},children:Object.entries(e).map((e,t)=>{let[o,i]=e;return 0!==i?(0,n.jsxs)("span",{children:[" ",o,": ",i.toString()]},t):null})},t))}),(0,n.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,n.jsxs)(a.default,{variant:"h6",component:"div",children:["-------------------------",(0,n.jsx)("br",{}),"Cambio ",w," ",e.cambio]})})]})})]}),(0,n.jsx)(i.default,{sx:{width:"139vw",padding:0,margin:0,paddingTop:12},children:(0,n.jsx)(s.default,{component:S.default,href:"../../pedidos/pedidosCaja",variant:"outlined",sx:{width:"100%",height:300,padding:0,margin:0,backgroundColor:"#00796b",color:"white"},onClick:()=>{localStorage.removeItem("pago"),localStorage.removeItem("pedidoTempG"),localStorage.removeItem("clientTemp"),localStorage.removeItem("pedidoTemp")},children:"Nuevo Pedido"})})]})})})}},85800:function(e,t,o){"use strict";o.d(t,{AuthProvider:function(){return r},a:function(){return s}});var n=o(57437),i=o(2265),l=o(44785);let a=(0,i.createContext)({login:e=>{},logout:()=>{}}),r=e=>{let{children:t}=e,[o,r]=(0,i.useState)(null),[s,c]=(0,i.useState)({}),[d,x]=(0,i.useState)({}),[u,m]=(0,i.useState)({}),[p,f]=(0,i.useState)(!0),g=(0,i.useCallback)(function(e){l.Z.set("authTokens",JSON.stringify(e)),r(e)},[]),h=(0,i.useCallback)(function(){l.Z.remove("authTokens")},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),o=localStorage.getItem("pedidoTemp"),n=localStorage.getItem("caja");e&&r(JSON.parse(e)),t&&c(JSON.parse(t)),o&&x(JSON.parse(o)),n&&m(JSON.parse(n))},[]);let j=(0,i.useMemo)(()=>({auth:o,cliente:s,setCliente:c,pedido:d,setPedido:x,caja:u,setCaja:m,loading:p,login:g,logout:h}),[o,s,d,u,g,h]);return(0,n.jsx)(a.Provider,{value:j,children:t})},s=()=>(0,i.useContext)(a)}},function(e){e.O(0,[2505,4797,4129,4275,2561,6951,2540,2971,7023,1744],function(){return e(e.s=52803)}),_N_E=e.O()}]);