import{j as e,S as a,T as s,B as d,r as u,c as h,R as x}from"./Stack-89d6eeb1.js";import{A as m,d as p,a as g,b as j,P as f}from"./GitHub-bb9015e5.js";import{F as w,a as b,R as y,b as l,c}from"./RadioGroup-398fb3cf.js";import{F,R as v,d as R,a as A}from"./Close-45f991ee.js";function C(){return e.jsx(e.Fragment,{children:e.jsxs(a,{direction:"row",spacing:2,sx:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(T,{}),e.jsx(S,{}),e.jsx(I,{})]})})}function T({groupNumber:n=1}){return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{bgcolor:p[500]},children:n})})}function S({title:n="Title",subtitle:t="Subtitle"}){return e.jsx(e.Fragment,{children:e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(s,{variant:"h5",children:n}),e.jsx(s,{variant:"subtitle1",children:t})]})})}function I(){return e.jsx(e.Fragment,{children:e.jsx(g,{})})}function G(){return e.jsx(e.Fragment,{children:e.jsxs(a,{direction:"column",spacing:2,sx:{alignItems:"center"},children:[e.jsx(E,{}),e.jsx(M,{})]})})}function E(){return e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsx(b,{sx:{margin:"auto"},id:"demo-row-radio-buttons-group-label",children:"Language"}),e.jsxs(y,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[e.jsx(l,{value:"ch",control:e.jsx(c,{}),label:"中"}),e.jsx(l,{value:"en",control:e.jsx(c,{}),label:"En"})]})]})})}function M(){return e.jsx(e.Fragment,{children:e.jsx("iframe",{src:"https://player.vimeo.com/video/877867752?h=15bd33812f",width:"100%",height:200,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0})})}function B(){return e.jsx(e.Fragment,{children:e.jsx(d,{sx:{overflow:"hidden",height:"300px",overflowY:"scroll"},children:e.jsx(s,{variant:"body1",children:"Sequels are never as good as the original. And when the original was terrible, there is even more reason to dread the next episode. So it is with “Tariff Man Part Two”. In the White House, Donald Trump put more new tariffs on American imports than any president in nearly a century. His philosophy was simple: “I am a Tariff Man. When people or countries come in to raid the great wealth of our Nation, I want them to pay for the privilege of doing so.” Mr Trump’s protectionism made America poorer, did little to help exporters and fed the inflation still raging. If he wins the Republican presidential nomination (a likely outcome) and goes on to win the election (too close to call), he has vowed to ramp up things. He is mulling an across-the-board levy of perhaps 10% on all products entering America. In one fell swoop, his plans would more than triple the average American tariff. The direct costs would be bad enough, with the tariffs functioning as a tax on consumers and hurting most producers. Yet they would also tear at America’s ties with its allies and threaten to wreck the global trade system."})})})}function L(){const[n,t]=u.useState(!1),r=()=>{t(o=>!o)};return e.jsx(e.Fragment,{children:e.jsxs(a,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[e.jsx(j,{}),e.jsx(O,{ratingOpen:n}),e.jsx(P,{ratingOpen:n,onClick:r})]})})}function O({ratingOpen:n=!1}){const[t,r]=u.useState(null);return e.jsx(e.Fragment,{children:e.jsx(d,{children:e.jsx(F,{in:n,timeout:300,children:e.jsx(v,{name:"project-rating",value:t,max:5,onChange:(o,i)=>{console.log(o),console.log(i),r(i)}})})})})}function P({ratingOpen:n=!1,onClick:t}){const r=n?e.jsx(R,{onClick:t}):e.jsx(A,{onClick:t});return e.jsx(e.Fragment,{children:r})}function _(){return e.jsx(e.Fragment,{children:e.jsx(f,{elevation:3,sx:{width:"360px",p:3},children:e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(C,{}),e.jsx(G,{}),e.jsx(B,{}),e.jsx(L,{})]})})})}function $(){return e.jsx(e.Fragment,{children:e.jsx(_,{})})}h.createRoot(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx($,{})}));
