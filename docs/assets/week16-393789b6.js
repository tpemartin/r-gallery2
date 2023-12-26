import{j as e,S as h,T as m,B as f,r as l,c as R,R as E}from"./Stack-4ed42e28.js";import{D as B,a as T,b as A,c as L,B as x,T as p,d as D,e as I,u as $,C as V,f as N,g as M,P as C,h as P,A as U,i as v,j as K,F as q,k as H,l as J,G as Q}from"./Backup-ba981994.js";import{L as X,a as y}from"./axios-0b1e88b9.js";import{A as S,d as Z,a as _,b as z,P as W}from"./GitHub-ffaa5c81.js";import{F as Y,a as ee,R as te,b as ne,c as se}from"./RadioGroup-343ef73f.js";import{F as G,R as re,d as oe,a as ie}from"./Close-977f47cc.js";import{G as k}from"./Grid2-f33ded95.js";function ae({number:t,title:n,subtitle:s}){return e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"row",spacing:2,sx:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(le,{groupNumber:t}),e.jsx(ce,{title:n,subtitle:s}),e.jsx(de,{})]})})}function le({groupNumber:t=1}){return e.jsx(e.Fragment,{children:e.jsx(S,{sx:{bgcolor:Z[500]},children:t})})}function ce({title:t="Title",subtitle:n="Subtitle"}){return e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"column",spacing:2,className:"card-title",children:[e.jsx(m,{variant:"h6",children:t}),e.jsx(m,{variant:"subtitle1",children:n})]})})}function de(){return e.jsx(e.Fragment,{children:e.jsx(_,{})})}function ue({link:t}){return e.jsx(e.Fragment,{children:e.jsx(h,{direction:"column",spacing:2,sx:{alignItems:"center"},children:e.jsx(je,{link:t})})})}function je({link:t}){let n;return t.includes("you")?n=`https://www.youtube.com/embed/${xe(t)}`:t.includes("vimeo")&&(n=`https://player.vimeo.com/video/${me(t)}?h=7c051b9510`),e.jsx(e.Fragment,{children:e.jsx("iframe",{src:n,width:"100%",height:200,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0})})}function xe(t){return t.match(new RegExp("(?<=https:\\/\\/youtu\\.be\\/)[^/]+"))[0]}function me(t){return t.match(new RegExp("(?<=https:\\/\\/vimeo\\.com\\/)[^/]+"))[0]}function he({description:t}){return e.jsx(e.Fragment,{children:e.jsx(f,{sx:{overflow:"hidden",height:"300px",overflowY:"scroll"},children:e.jsx(m,{variant:"body1",children:t})})})}function ge({github_link:t,ratingControl:n}){return e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[e.jsx(X,{href:t,target:"_blank",rel:"noopener noreferrer",children:e.jsx(z,{})}),n]})})}function fe({group:t,assessment:n}){console.log(n);const[s,r]=l.useState(!1),c=window.assessment.projects?window.assessment.projects[t]:null,[o,a]=l.useState(c),i=()=>{r(j=>!j)};l.useEffect(()=>{if(n&&n.projects){const j=n.projects[t];a(j)}},[n,t]);const u=n&&n.group===t?e.jsx(e.Fragment,{}):e.jsx(G,{in:s,timeout:300,children:e.jsx(re,{name:"project-rating",value:o,max:5,disabled:n&&n.submit||n&&n.group===t,onChange:(j,g)=>{a(g),window.assessment.projects&&(window.assessment.projects[t]=g)}})}),b=e.jsx(e.Fragment,{children:e.jsx(f,{children:u})});return e.jsxs(e.Fragment,{children:[b,e.jsx(pe,{ratingOpen:s,onClick:i})]})}function pe({ratingOpen:t=!1,onClick:n}){const s=t?e.jsx(oe,{onClick:n}):e.jsx(ie,{onClick:n});return e.jsx(e.Fragment,{children:s})}function be({project:t,number:n,group:s,ratingControl:r}){return e.jsx(e.Fragment,{children:e.jsx(W,{elevation:3,sx:{p:3},children:e.jsxs(h,{direction:"column",spacing:2,children:[e.jsx(ae,{number:n,title:t.Title,subtitle:t.Group}),e.jsx(ue,{link:t["Video link"]}),e.jsx(he,{description:t.Description}),e.jsx(ge,{github_link:t["Github link"],group:s,ratingControl:r})]})})})}function we({project:t,number:n,group:s,ratingControl:r}){return e.jsx(e.Fragment,{children:e.jsx(k,{xs:12,sm:6,md:4,xl:3,children:e.jsx(be,{project:t,number:n,group:s,ratingControl:r})})})}const ye="https://script.google.com/macros/s/AKfycbyIZNwTCjqHQr5oOjlOrBWIpfZJ1suttwiSa3Z7_DyEq_unO3X-3KhhVItf3z-ruEVDKw/exec";function Fe(t){const n=t.shift();function s(c){const o=Object();return c.forEach((a,i)=>{o[n[i]]=a}),o}return t.map(c=>s(c))}async function Ce(){try{const t=await y.get(ye);return Fe(t.data)}catch(t){console.log(t)}}function ve({assessment:t}){const n=localStorage.getItem("dataObjects"),[s,r]=l.useState(n&&n!=="undefined"?JSON.parse(n):null),c=s?e.jsx(k,{container:!0,spacing:2,children:s.map((o,a)=>{const i=o.Group,u=t&&t.group===i?e.jsx(e.Fragment,{}):e.jsx(fe,{group:i,assessment:t});return e.jsx(we,{project:o,number:a+1,group:i,ratingControl:u},i)})}):e.jsx("div",{children:" loading...."});return l.useEffect(()=>{Ce().then(o=>{r(o),console.log(o),localStorage.setItem("dataObjects",JSON.stringify(o))})},[]),e.jsx(e.Fragment,{children:c})}window.axios=y;async function Se(t){const n="https://script.google.com/macros/s/AKfycby4gX1fL_BWw_xvdjd6D0FosXyQyQFCpySt7JSCLgCTLxij5-sSS8QCjVRN5aTG-KByvw/exec";return await y.post(n,t)}function _e({children:t,disabled:n=!1}){const[s,r]=l.useState(!1),c=()=>{r(!0)},o=()=>{r(!1)},a=e.jsx(Ge,{onClick:c,open:s,disabled:n}),i=l.useRef(null);return l.useEffect(()=>{if(s){const{current:u}=i;u!==null&&u.focus()}},[s]),e.jsxs(l.Fragment,{children:[a,e.jsxs(B,{open:s,onClose:o,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[e.jsx(T,{id:"scroll-dialog-title",children:"組員互評"}),e.jsx(A,{dividers:!0,children:t}),e.jsxs(L,{children:[e.jsx(x,{onClick:o,children:"Cancel"}),e.jsx(x,{onClick:o,children:"Subscribe"})]})]})]})}function Ge({onClick:t,open:n,disabled:s=!1}){return e.jsx(e.Fragment,{children:e.jsx(p,{title:"組員互評",children:e.jsx(x,{color:"inherit",onClick:t,open:n,disabled:s,children:e.jsx(_,{})})})})}function ke({membersAssessment:t,disabled:n=!1}){console.log(t);const s=Object.keys(t);console.log(s);const r=e.jsx(e.Fragment,{children:s.map((c,o)=>e.jsx(Re,{member:c},o))});return e.jsx(_e,{children:e.jsx(Y,{disabled:n,children:r})})}function Oe({membersAssessment:t}){console.log(t);const[n,s]=l.useState(!1),r=()=>{window.assessment.submit=!0,s(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(Ae,{onClick:r}),e.jsx(Te,{}),e.jsx(ke,{membersAssessment:t,disabled:n})]})}function Re({member:t}){const n=e.jsx(Ee,{member:t});return e.jsxs(e.Fragment,{children:[e.jsx(ee,{id:t,children:t}),n]})}function Ee({member:t}){const[n,s]=l.useState(window.assessment.members[t]),r=(a,i)=>{window.assessment.members[t]=i,s(i)},o=Array.from({length:6},(a,i)=>i).map((a,i)=>e.jsx(Be,{value:a},i));return e.jsx(e.Fragment,{children:e.jsx(te,{row:!0,"aria-labelledby":t,name:"position",defaultValue:"top",value:n,onChange:r,children:o})})}function Be({value:t}){return e.jsx(e.Fragment,{children:e.jsx(ne,{value:""+t,control:e.jsx(se,{}),label:""+t,labelPlacement:"top"})})}function Te(){return e.jsx(e.Fragment,{children:e.jsx(p,{title:"儲存",children:e.jsx(x,{color:"inherit",onClick:()=>{update_record_assessment()},children:e.jsx(D,{})})})})}function Ae({onClick:t}){return e.jsx(e.Fragment,{children:e.jsx(p,{title:"送出成績",children:e.jsx(x,{color:"inherit",onClick:t,children:e.jsx(I,{})})})})}function Le({setAssessment:t}){const[n,s]=l.useState(!1),[r,c]=l.useState(null),[o,a]=l.useState(null),[i,u]=l.useState(!1),b=$({onSuccess:F=>{console.log(F),Se(F.access_token).then(d=>{console.log(d),d.status===200&&(s(!0),d.data?(window.assessment.user=d.data.user,window.assessment.group=d.data.group,c(d.data),a(!0),d.data.assessment&&(console.log(d.data.assessment),window.assessment.projects=d.data.assessment.projects,window.assessment.members=d.data.assessment.members,window.assessment.submit=d.data.assessment.submit,window.eval_members=window.assessment.members,t(window.assessment))):a(!1))})}}),j=()=>{u(!0),b()},g=i?e.jsx(V,{color:"inherit"}):e.jsx(De,{onClick:j});let w;return n?(console.log(r),w=e.jsx(Ie,{userData:r,isClassStudent:o})):w=g,e.jsx(e.Fragment,{children:w})}function De({onClick:t}){return e.jsx(e.Fragment,{children:e.jsx(p,{title:"登入",children:e.jsx(x,{color:"inherit",onClick:t,children:e.jsx(N,{})})})})}function Ie({userData:t,isClassStudent:n}){const s=t.assessment.members;console.log(n),console.log(t);const r=n?e.jsxs(e.Fragment,{children:[e.jsx(Oe,{membersAssessment:s}),e.jsx($e,{userData:t})]}):e.jsx(Ve,{});return e.jsx(e.Fragment,{children:r})}function $e({userData:t}){return e.jsx(e.Fragment,{children:e.jsx(S,{alt:t.user,src:t.photo})})}function Ve(){return e.jsx(e.Fragment,{children:e.jsxs(m,{variant:"h6",component:"div",sx:{flexGrow:1},className:"visitor",children:[e.jsx(M,{}),"訪客"]})})}function Ne(){const[t,n]=l.useState(null);return e.jsxs(l.Fragment,{children:[e.jsx(P,{}),e.jsx(U,{children:e.jsxs(v,{children:[e.jsx(m,{variant:"h6",component:"div",children:"Scroll to see button"}),e.jsx(Le,{setAssessment:n})]})}),e.jsx(v,{id:"back-to-top-anchor"}),e.jsx(K,{children:e.jsx(f,{sx:{my:2},children:e.jsx(ve,{assessment:t})})}),e.jsx(O,{children:e.jsx(q,{size:"small","aria-label":"scroll back to top",children:e.jsx(H,{})})})]})}function O(t){const{children:n,window:s}=t,r=J({target:s?s():void 0,disableHysteresis:!0,threshold:100}),c=o=>{const a=(o.target.ownerDocument||document).querySelector("#back-to-top-anchor");a&&a.scrollIntoView({block:"center"})};return e.jsx(G,{in:r,children:e.jsx(f,{onClick:c,role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:n})})}O.propTypes={children:C.element.isRequired,window:C.func};window.assessment={user:null,group:null,members:null,projects:null,submit:!1};function Me(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{clientId:"235254569809-suckfgfkjcf9p4c04oofodo6ropcj6nf.apps.googleusercontent.com",children:e.jsx(Ne,{})}),";"]})}R.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(Me,{})}));