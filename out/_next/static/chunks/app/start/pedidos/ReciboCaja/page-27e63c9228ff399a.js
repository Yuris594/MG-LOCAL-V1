(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{52803:function(e,t,o){Promise.resolve().then(o.bind(o,45110))},45110:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return I}});var n=o(57437),a=o(31001),i=o.n(a),l=o(31193),s=o(28027),r=o(83719),c=o(14595),d=o(60091),x=o(60335),u=o(74275),m=o(70270),p=o(94696),f=o(2734),g=o(76235),h=o(2265),j=o(97501);o(27824);var b=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},[a,i]=(0,h.useState)(null),l=(0,g.WU)(new Date,"dd/MM/yyyy HH:mm:ss");return{generarPDF:()=>{let a=new j.default;a.setFontSize(10),a.setFont("Helvetica","normal"),a.text("Miguel Gomez & Cia",10,10),a.text("Tel: 777777",10,15),a.text("Email: miguelgomoz&cia@hotmail.com",10,20),a.text("Website: https://www.miguelgomez.com.co",10,25),a.text("---------------------------------------------------------------",10,30),a.setFontSize(12),a.setFont("Helvetica","bold"),a.text("Servicio: ".concat(o.PER_Nom||"Desconocido"),10,40);let s=50;if(a.setFontSize(10),a.setFont("Helvetica","normal"),a.text("Descripci\xf3n",10,s),a.text("Precio",100,s),s+=10,e&&e.length>0)for(let t=0;t<e.length-4;t++){let o=e[t];a.text("".concat(o.DESCRIPCION),10,s),a.text("$".concat(o.PRECIO),100,s),s+=15}s+=10,a.setFontSize(12),a.setFont("Helvetica","bold"),a.text("Total:",10,s),a.text("$".concat(n.total),100,s),s+=10,a.setFontSize(10),a.setFont("Helvetica","normal"),Array.isArray(t)&&t.length>0?t.forEach(e=>{Object.entries(e).forEach(e=>{let[t,o]=e;if(0!==o&&null!=o){let e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1).toLowerCase(),":");a.setFont("Helvetica","bold"),a.text(e,10,s),a.setFont("Helvetica","bold");let n="$".concat(o.toLocaleString("es"));a.text(n,100,s),s+=10}})}):(a.text("No hay informaci\xf3n adicional disponible",10,s),s+=10),s+=5,a.setFontSize(12),a.setFont("Helvetica","bold"),a.text("Cambio:",10,s);let r=null!=n.cambio?parseFloat(n.cambio).toLocaleString("es"):"0.00";a.text("$".concat(r),100,s),s+=10,a.setFontSize(10),a.setFont("Helvetica","normal"),a.text("Fecha: ".concat(l),10,s),i(a.output("datauristring")),a.output("dataurlnewwindow")},pdfDataUrl:a}},v=o(77699),S=o(9504),w=o(85800),y=o(87138);let C=(0,n.jsx)(l.default,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"});var I=()=>{let{caja:e,auth:t}=(0,w.a)(),o=e?Object.values(e):[],a=e&&e.tipoPago?Object.values(e.tipoPago):[],{generarPDF:g}=b(o,a,t,e);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"0px 4px 12px rgba(0,0,0,0.1)"},children:(0,n.jsxs)(s.Z,{className:"container",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",overflow:"auto"},children:[(0,n.jsxs)(r.default,{variant:"body1",textAlign:"center",margin:"20px 0",sx:{fontSize:50,marginBottom:"15px"},color:"#00796b",gutterBottom:!0,children:["Valor a Cancelar: $ ",e.total]}),(0,n.jsx)(c.Z,{sx:{fonSize:30},orientation:"horizontal"}),(0,n.jsxs)(l.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsxs)(l.default,{sx:{with:"50%",margin:20},children:[(0,n.jsx)(r.default,{sx:{fontSize:50,margin:0,marginBottom:6,padding:0},color:"text.secondary",gutterBottom:!0,children:"\xbfComo le gustaria recibir su recibo?"}),(0,n.jsx)(d.default,{variant:"outlined",color:"primary",sx:{width:550,marginBottom:5,backgroundColor:"#00796b",color:"#fff"},onClick:g,children:"Imprimir Recibo"}),(0,n.jsxs)(s.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:550,height:100},children:[(0,n.jsx)(x.Z,{sx:{p:"10px"},"aria-label":"menu",children:(0,n.jsx)(S.Z,{})}),(0,n.jsx)(u.ZP,{sx:{ml:1,flex:1},inputProps:{"aria-label":"search google maps"}}),(0,n.jsx)(x.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,n.jsx)(v.Z,{})}),(0,n.jsx)(c.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,n.jsx)(x.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",children:(0,n.jsx)(f.Z,{})})]})]}),(0,n.jsx)(l.default,{sx:{width:"50%",bord:20},children:(0,n.jsxs)(m.Z,{sx:{width:"40vw",height:"100%"},children:[(0,n.jsx)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",paddingBotton:0},children:(0,n.jsxs)(r.default,{className:i().className,sx:{fontSize:17,flexDirection:"column"},color:"text.secondary",gutterBottom:!0,children:["...........Miguel G\xf3mez & Cia...........",(0,n.jsx)("br",{}),"...................Tel:777777.................",(0,n.jsx)("br",{}),"........Miguelgomoz&cia@hotmail.com...........",(0,n.jsx)("br",{}),"........https://www.miguelgomez.com.co/...... ",(0,n.jsx)("br",{}),"------------------------------------------------------- ",(0,n.jsx)("br",{}),"........ Servicio -  ",".."]})}),(0,n.jsx)(p.Z,{children:o.map((e,t)=>(0,n.jsxs)(r.default,{component:"div",sx:{display:"flex",justifyContent:"space-between",paddingTop:0},children:[(0,n.jsx)("span",{children:e.DESCRIPCION}),(0,n.jsx)("span",{children:e.PRECIO})]},t))}),(0,n.jsx)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,n.jsxs)(r.default,{variant:"h6",component:"div",children:["-------------------------",(0,n.jsx)("br",{}),"Total ",C," ",e.total]})}),(0,n.jsx)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",paddingTop:0},children:a.map((e,t)=>(0,n.jsx)(r.default,{component:"div",sx:{display:"flex",flexDirection:"column"},children:Object.entries(e).map((e,t)=>{let[o,a]=e;return 0!==a?(0,n.jsxs)("span",{children:[" ",o,": ",a.toString()]},t):null})},t))}),(0,n.jsx)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,n.jsxs)(r.default,{variant:"h6",component:"div",children:["-------------------------",(0,n.jsx)("br",{}),"Cambio ",C," ",e.cambio]})})]})})]}),(0,n.jsx)(l.default,{sx:{width:"139vw",padding:0,margin:0,paddingTop:12},children:(0,n.jsx)(d.default,{component:y.default,href:"../../pedidos/pedidosCaja",variant:"outlined",sx:{width:"100%",height:300,padding:0,margin:0,backgroundColor:"#00796b",color:"white"},onClick:()=>{localStorage.removeItem("pago"),localStorage.removeItem("pedidoTempG"),localStorage.removeItem("clientTemp"),localStorage.removeItem("pedidoTemp")},children:"Nuevo Pedido"})})]})})})}},85800:function(e,t,o){"use strict";o.d(t,{AuthProvider:function(){return s},a:function(){return r}});var n=o(57437),a=o(2265),i=o(44785);let l=(0,a.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,[o,s]=(0,a.useState)(null),[r,c]=(0,a.useState)({}),[d,x]=(0,a.useState)({}),[u,m]=(0,a.useState)({}),[p]=(0,a.useState)(!0),f=(0,a.useCallback)(function(e){i.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),s(e)},[]),g=(0,a.useCallback)(function(){i.Z.remove("authTokens"),localStorage.removeItem("auth"),s(null)},[]);(0,a.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),o=localStorage.getItem("pedido"),n=localStorage.getItem("caja");e&&s(JSON.parse(e)),t&&c(JSON.parse(t)),o&&x(JSON.parse(o)),n&&m(JSON.parse(n))},[]);let h=(0,a.useMemo)(()=>({auth:o,cliente:r,setCliente:c,pedido:d,setPedido:x,caja:u,setCaja:m,loading:p,login:f,logout:g}),[o,r,d,u,f,g]);return(0,n.jsx)(l.Provider,{value:h,children:t})},r=()=>(0,a.useContext)(l)}},function(e){e.O(0,[7298,2505,4797,4129,4275,2561,4936,7165,2971,7023,1744],function(){return e(e.s=52803)}),_N_E=e.O()}]);