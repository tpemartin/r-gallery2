import{j as e,S as i,T as o,B as d,r as c,c as j,R as h}from"./Stack-89d6eeb1.js";import{A as g,d as m,a as f,b as p,P as b}from"./GitHub-bb9015e5.js";import{F as y,R as F,d as w,a as O}from"./Close-45f991ee.js";import{L as _,a as C}from"./axios-d8c0b2ac.js";function v({number:t,title:n,subtitle:r}){return e.jsx(e.Fragment,{children:e.jsxs(i,{direction:"row",spacing:2,sx:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(R,{groupNumber:t}),e.jsx(S,{title:n,subtitle:r}),e.jsx(E,{})]})})}function R({groupNumber:t=1}){return e.jsx(e.Fragment,{children:e.jsx(g,{sx:{bgcolor:m[500]},children:t})})}function S({title:t="Title",subtitle:n="Subtitle"}){return e.jsx(e.Fragment,{children:e.jsxs(i,{direction:"column",spacing:2,children:[e.jsx(o,{variant:"h5",children:t}),e.jsx(o,{variant:"subtitle1",children:n})]})})}function E(){return e.jsx(e.Fragment,{children:e.jsx(f,{})})}function A(){return e.jsx(e.Fragment,{children:e.jsx(i,{direction:"column",spacing:2,sx:{alignItems:"center"},children:e.jsx(G,{})})})}function G(){const t="https://player.vimeo.com/video/837954010";return e.jsx(e.Fragment,{children:e.jsx("iframe",{src:t,width:"100%",height:200,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0})})}function T({description:t}){return e.jsx(e.Fragment,{children:e.jsx(d,{sx:{overflow:"hidden",height:"300px",overflowY:"scroll"},children:e.jsx(o,{variant:"body1",children:t})})})}function k({github_link:t}){const[n,r]=c.useState(!1),a=()=>{r(s=>!s)};return e.jsx(e.Fragment,{children:e.jsxs(i,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[e.jsx(_,{href:t,target:"_blank",rel:"noopener noreferrer",children:e.jsx(p,{})}),e.jsx(D,{ratingOpen:n}),e.jsx(I,{ratingOpen:n,onClick:a})]})})}function D({ratingOpen:t=!1}){const[n,r]=c.useState(null);return e.jsx(e.Fragment,{children:e.jsx(d,{children:e.jsx(y,{in:t,timeout:300,children:e.jsx(F,{name:"project-rating",value:n,max:5,onChange:(a,s)=>{console.log(a),console.log(s),r(s)}})})})})}function I({ratingOpen:t=!1,onClick:n}){const r=t?e.jsx(w,{onClick:n}):e.jsx(O,{onClick:n});return e.jsx(e.Fragment,{children:r})}function B({project:t,number:n}){return console.log(t),e.jsx(e.Fragment,{children:e.jsx(b,{elevation:3,sx:{width:"360px",p:3},children:e.jsxs(i,{direction:"column",spacing:2,children:[e.jsx(v,{number:n,title:t.Title,subtitle:t.Subtitle}),e.jsx(A,{}),e.jsx(T,{description:t.Description}),e.jsx(k,{github_link:t["Github link"]})]})})})}const V="https://script.google.com/macros/s/AKfycbyIZNwTCjqHQr5oOjlOrBWIpfZJ1suttwiSa3Z7_DyEq_unO3X-3KhhVItf3z-ruEVDKw/exec";function $(t){const n=t.shift();function r(s){const l=Object();return s.forEach((u,x)=>{l[n[x]]=u}),l}return t.map(s=>r(s))}async function K(){try{const t=await C.get(V);return $(t.data)}catch(t){console.log(t)}}function N(){const[t,n]=c.useState(null),r=t?e.jsx(e.Fragment,{children:t.map((a,s)=>e.jsx(B,{project:a},s))}):e.jsx("div",{children:" loading...."});return c.useEffect(()=>{K().then(a=>{n(a)})},[]),e.jsx(e.Fragment,{children:r})}j.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(N,{})}));
