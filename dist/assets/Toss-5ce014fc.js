import{r as t,j as s}from"./index-40d12231.js";import{A as i}from"./AdminSidebar-94111d11.js";const d=()=>{const[n,a]=t.useState(0),r=()=>{Math.random()>.5?a(e=>e+180):a(e=>e+360)};return s.jsxs("div",{className:"admin-container",children:[s.jsx(i,{}),s.jsxs("main",{className:"dashboard-app-container",children:[s.jsx("h1",{children:"Toss"}),s.jsx("section",{children:s.jsxs("article",{className:"tosscoin",onClick:r,style:{transform:`rotateY(${n}deg)`},children:[s.jsx("div",{}),s.jsx("div",{})]})})]})]})};export{d as default};