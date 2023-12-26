import{j as a}from"./index-38704398.js";import{G as i,A as l,F as o,H as h,a as x}from"./AdminSidebar-d0658490.js";import{d as n}from"./data-7ba4b933.js";import{B as g,D as j}from"./Charts-d2a170f5.js";import{T as u}from"./TableHOC-7e7ff5d2.js";function m(s){return i({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(s)}const v="/DashboardLive/assets/userpic-996d8bbc.png";function b(s){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"6",cy:"4",r:"2"}},{tag:"path",attr:{d:"M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"}},{tag:"circle",attr:{cx:"17",cy:"4",r:"2"}},{tag:"path",attr:{d:"M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"}}]})(s)}const p=[{Header:"Id",accessor:"id"},{Header:"Quantity",accessor:"quantity"},{Header:"Discount",accessor:"discount"},{Header:"Amount",accessor:"amount"},{Header:"Status",accessor:"status"}],N=({data:s=[]})=>u(p,s,"transaction-box","Top Transaction")(),B=()=>a.jsxs("div",{className:"admin-container",children:[a.jsx(l,{}),a.jsxs("main",{className:"dashboard",children:[a.jsxs("div",{className:"bar",children:[a.jsx(m,{}),a.jsx("input",{type:"text",placeholder:"Search for data ,users, docs"}),a.jsx(o,{}),a.jsx("img",{src:v,alt:"Users"})]}),a.jsxs("section",{className:"widget-container",children:[a.jsx(t,{percent:40,amount:!0,value:34e3,heading:"Revenue",color:"rgb(0,115,255)"}),a.jsx(t,{percent:-14,value:400,heading:"Users",color:"rgb(0 198 202)"}),a.jsx(t,{percent:80,value:23e3,heading:"Transaction",color:"rgb(255 196 0)"}),a.jsx(t,{percent:30,value:1e3,heading:"Products",color:"rgb(75 0 255)"})]}),a.jsxs("section",{className:"graph-container",children:[a.jsxs("div",{className:"revenue-chart",children:[a.jsx("h2",{children:"Revenue & Transaction"}),a.jsx(g,{data_1:[200,444,343,556,778,455,990],data_2:[300,144,433,655,237,755,190],title_1:"Revenue",title_2:"Transaction",bgColor_1:"rgb(0,115,255)",bgColor_2:"rgba(53,162,235,0.8)"})]}),a.jsxs("div",{className:"dashboard-categories",children:[a.jsx("h2",{children:"Inventory"}),a.jsx("div",{children:n.categories.map(s=>a.jsx(f,{heading:s.heading,value:s.value,color:`hsl(${s.value*4},${s.value}%,50%)`},s.heading))})]})]}),a.jsxs("section",{className:"transaction-container",children:[a.jsxs("div",{className:"gender-chart",children:[a.jsx("h2",{children:"Gender Ratio"}),a.jsx(j,{labels:["Female","Male"],data:[12,19],backgroundColor:["hsl(340,82%,56%)","rgba(53,162,235,0.8)"],cutout:90}),a.jsx("p",{children:a.jsx(b,{})})]}),a.jsx(N,{data:n.transaction})]})]})]}),t=({heading:s,value:r,percent:e,color:c,amount:d=!1})=>a.jsxs("article",{className:"widget",children:[a.jsxs("div",{className:"widget-info",children:[a.jsx("p",{children:s}),a.jsx("h4",{children:d?`$${r}`:r}),e>0?a.jsxs("span",{className:"green",children:[a.jsx(h,{})," + ",e,"%"]}):a.jsxs("span",{className:"red",children:[a.jsx(x,{})," ",e,"%"]})]}),a.jsx("div",{className:"widget-circle",style:{background:`conic-gradient(
        ${c} ${Math.abs(e)/100*360}deg,
        rgb(255,255,255) 0
      )`},children:a.jsxs("span",{style:{color:c},children:[e,"%"]})})]}),f=({color:s,value:r,heading:e})=>a.jsxs("div",{className:"category-item",children:[a.jsx("h5",{children:e}),a.jsx("div",{children:a.jsx("div",{style:{backgroundColor:s,width:`${r}%`}})}),a.jsxs("span",{children:[r,"%"]})]});export{B as default};