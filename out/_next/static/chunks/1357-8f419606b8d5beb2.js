"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1357],{48801:function(e,t,i){var a=i(55357),n=i(12272),r=i(48024),s=i(69281);let l=(0,a.Z)({createStyledComponent:(0,r.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t["maxWidth".concat((0,n.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,s.default)({props:e,name:"MuiContainer"})});t.default=l},55357:function(e,t,i){i.d(t,{Z:function(){return P}});var a=i(2265),n=i(44839),r=i(70587),s=i(76990),l=i(97434),o=i(13820),d=i(49134),u=i(7173),c=i(57437);let x=(0,u.Z)(),h=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),m=e=>(0,o.default)({props:e,name:"MuiContainer",defaultTheme:x}),E=(e,t)=>{let{classes:i,fixed:a,disableGutters:n,maxWidth:o}=e,d={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,a&&"fixed",n&&"disableGutters"]};return(0,s.Z)(d,e=>(0,r.ZP)(t,e),i)};function P(e={}){let{createStyledComponent:t=h,useThemeProps:i=m,componentName:r="MuiContainer"}=e,s=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let a=e.breakpoints.values[i];return 0!==a&&(t[e.breakpoints.up(i)]={maxWidth:`${a}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return a.forwardRef(function(e,t){let a=i(e),{className:l,component:o="div",disableGutters:d=!1,fixed:u=!1,maxWidth:x="lg",classes:h,...m}=a,P={...a,component:o,disableGutters:d,fixed:u,maxWidth:x},f=E(P,r);return(0,c.jsx)(s,{as:o,ownerState:P,className:(0,n.Z)(f.root,l),ref:t,...m})})}},21357:function(e,t,i){i.r(t);var a=i(57437),n=i(48801),r=i(20124),s=i(31193),l=i(83719),o=i(58433),d=i(23983),u=i(60091),c=i(25774),x=i(27270),h=i(42716),m=i(2265);t.default=e=>{let{usuario:t}=e,[i,E]=(0,m.useState)(!1),[P,f]=(0,m.useState)(!1),{form:p,setForm:v,changed:C}=(0,h.c)();(0,m.useEffect)(()=>{t&&t.length>0&&v({IdPer:t[0].IdPer,PER_Nom:t[0].PER_Nom||"",PER_Usuario:t[0].PER_Usuario||"",PER_Clave:t[0].PER_Clave||"",IdDiv:t[0].IdDiv||"",PERAUTOPED:t[0].PERAUTOPED||"",CODVEND:t[0].CODVEND||"",PREFIJO:t[0].PREFIJO||"",CONSECUTIVOPED:t[0].CONSECUTIVOPED||""})},[t]),console.log(p);let g=async e=>{e.preventDefault();try{(await g(p)).ok?(E(!0),setTimeout(()=>{window.location.reload()},2e3)):(console.log("Error",response.statusText),f(!0))}catch(e){console.error("Error al enviar la solicitud:",e),f(!0)}},R=e=>{"clickaway"!==e&&(E(!1),f(!1))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.default,{component:"main",maxWidth:"xs",children:[(0,a.jsx)(r.default,{}),(0,a.jsxs)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,a.jsx)(l.default,{component:"h1",variant:"h5",children:"Actualizacion de usuario"}),(0,a.jsx)(s.default,{component:"form",onSubmit:g,noValidate:!0,sx:{mt:3},children:(0,a.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Nom",label:"PER_Nom",name:"PER_Nom",autoFocus:!0,value:p.PER_Nom||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Usuario",label:"PER_Usuario",name:"PER_Usuario",value:p.PER_Usuario||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,children:(0,a.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PER_Clave",label:"PER_Clave",type:"password",name:"PER_Clave",value:p.PER_Clave||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(d.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",value:p.IdDiv||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(d.Z,{required:!0,fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",value:p.PERAUTOPED||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(d.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",value:p.CODVEND||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(d.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",value:p.PREFIJO||"",onChange:C})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(d.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",value:p.CONSECUTIVOPED||"",onChange:C})}),(0,a.jsx)(u.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Actualizar"})]})}),i&&(0,a.jsx)(c.Z,{open:i,autoHideDuration:2e3,onClose:R,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(x.Z,{onClose:R,severity:"success",sx:{width:"100%"},children:"Actualizacion Exitosa"})}),P&&(0,a.jsx)(c.Z,{open:P,autoHideDuration:2e3,onClose:R,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(x.Z,{onClose:R,severity:"error",sx:{width:"100%"},children:"Actualizacion Denegada"})})]})]})})}},42716:function(e,t,i){i.d(t,{c:function(){return n}});var a=i(2265);let n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=(0,a.useState)(e);return{form:t,changed:e=>{let{name:a,value:n}=e.target;i({...t,[a]:n})},setForm:i}}}}]);