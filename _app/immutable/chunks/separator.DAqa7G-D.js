import{s as M,e as S,a as g,b as R,d as T}from"./disclose-version.DTD7CAsk.js";import{i as y}from"./legacy.Cg-hLLqd.js";import{p as P,l as p,h as j,f as z,t as D,g as d,a as k,m as U,j as O,b as $,k as q}from"./utils.C6bM_IYE.js";import{l as m,p as c,i as B,b as W,s as F}from"./index-client.Wn53Nwrg.js";import{m as G,i as H,a as I,b as J,c as K}from"./base.BzZbUDfn.js";import{t as L,c as Q,r as V,g as X}from"./icon.BBpdyj6u.js";const Y={orientation:"horizontal",decorative:!1},Z=a=>{const t={...Y,...a},o=L(t),{orientation:n,decorative:r}=o;return{elements:{root:G("separator",{stores:[n,r],returned:([e,s])=>({role:s?"none":"separator","aria-orientation":e==="vertical"?e:void 0,"aria-hidden":s,"data-orientation":e})})},options:o}};function tt(){return{NAME:"separator",PARTS:["root"]}}function et(a){const{NAME:t,PARTS:o}=tt(),n=Q(t,o),r={...Z(V(a)),getAttrs:n};return{...r,updateOption:X(r.options)}}var at=R("<div></div>");function ot(a,t){const o=m(t,["children","$$slots","$$events","$$legacy"]),n=m(o,["orientation","decorative","asChild","el"]);P(t,!1);const r=M(),l=()=>T(C,"$root",r),e=U();let s=c(t,"orientation",8,"horizontal"),f=c(t,"decorative",8,!0),x=c(t,"asChild",8,!1),h=c(t,"el",28,()=>{});const{elements:{root:C},updateOption:b,getAttrs:E}=et({orientation:s(),decorative:f()}),N=E("root");p(()=>O(s()),()=>{b("orientation",s())}),p(()=>O(f()),()=>{b("decorative",f())}),p(()=>l(),()=>{$(e,l())}),p(()=>d(e),()=>{Object.assign(d(e),N)}),j(),y();var A=S(),w=z(A);B(w,x,v=>{var i=S(),u=z(i);I(u,t,"default",{get builder(){return d(e)}}),g(v,i)},v=>{var i=at();let u;W(i,_=>h(_),()=>h()),H(i,_=>d(e).action(_)),D(()=>u=J(i,u,{...d(e),...n})),g(v,i)}),g(a,A),k()}function dt(a,t){const o=m(t,["children","$$slots","$$events","$$legacy"]),n=m(o,["class","orientation","decorative"]);P(t,!1);let r=c(t,"class",8,void 0),l=c(t,"orientation",8,"horizontal"),e=c(t,"decorative",8,void 0);y();var s=q(()=>K("bg-border shrink-0",l()==="horizontal"?"h-[1px] w-full":"min-h-full w-[1px]",r()));ot(a,F({get class(){return d(s)},get orientation(){return l()},get decorative(){return e()}},()=>n)),k()}export{dt as S};