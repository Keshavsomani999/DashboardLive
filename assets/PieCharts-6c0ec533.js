import{j as s}from"./index-d2dc20ec.js";import{A as i}from"./AdminSidebar-a2a1d3da.js";import{P as a,D as l}from"./Charts-4b159fb4.js";import{c as r}from"./data-7ba4b933.js";const h=()=>s.jsxs("div",{className:"admin-container",children:[s.jsx(i,{}),s.jsxs("main",{className:"chart-container",children:[s.jsx("h1",{children:"Pie & Doughnut Charts"}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(a,{labels:["Processing","Shipped","Delivered"],data:[12,9,13],backgroundColor:["hsl(110,80%,80%)","hsl(110,80%,50%)","hsl(110,40%,50%)"],offset:[0,0,50]})}),s.jsx("h2",{children:"Order Fulfillment Ratio"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:r.map(e=>e.heading),data:r.map(e=>e.value),backgroundColor:r.map(e=>`hsl(${e.value*4},${e.value}%,50%)`),legends:!1,offset:[0,0,0,80]})}),s.jsx("h2",{children:"Product Categories Ratio"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:["In Stock","Out Of Stock"],data:[40,20],backgroundColor:["hsl(269,80%,40%)","rgb(53,162,255)"],legends:!1,offset:[0,80],cutout:"70%"})}),s.jsx("h2",{children:"Stock Availablity"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:["Marketing Cost","Discount","Burnt","Production Cost","Net Margin"],data:[32,18,5,20,25],backgroundColor:["hsl(110,80%,40%)","hsl(19,80%,40%)","hsl(69,80%,40%)","hsl(300,80%,40%)","rgb(53,162,255)"],legends:!1,offset:[20,30,20,30,80]})}),s.jsx("h2",{children:"Revenue Distribution"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(a,{labels:["Teenager(Below 20)","Adult (20-40)","Older (above 40)"],data:[30,250,70],backgroundColor:["hsl(10,80%,80%)","hsl(10,80%,50%)","hsl(10,40%,50%)"],offset:[0,0,50]})}),s.jsx("h2",{children:"Users Age Group"})]}),s.jsx("section",{children:s.jsx("div",{children:s.jsx(l,{labels:["Admin","Customers"],data:[40,250],backgroundColor:["hsl(335,100%,38%)","hsl(44,98%,50%)"],offset:[0,80]})})})]})]});export{h as default};
