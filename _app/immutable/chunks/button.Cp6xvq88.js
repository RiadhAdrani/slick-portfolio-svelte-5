import{e as y,a as m,g as n}from"./disclose-version.DTD7CAsk.js";import{i as U}from"./legacy.Cg-hLLqd.js";import{p as q,f as x,a as C,t as V,N as j,g as G,k as M}from"./utils.C6bM_IYE.js";import{f as I,a as P,i as D,b as R,c as F}from"./base.DG9fcTpH.js";import{b as e}from"./misc.CBX4pal1.js";import{l as N,p as d,i as H,b as S,s as J}from"./index-client.Wn53Nwrg.js";import{c as K}from"./index.DNrJABS0.js";import"./paths.ybXwIFLO.js";function L(f,t){const u=[];return t.builders.forEach(c=>{const r=c.action(f);r&&u.push(r)}),{destroy:()=>{u.forEach(c=>{c.destroy&&c.destroy()})}}}function Q(f){const t={};return f.forEach(u=>{Object.keys(u).forEach(c=>{c!=="action"&&(t[c]=u[c])})}),t}function T(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["href","type","builders","el"]);q(t,!1);let r=d(t,"href",24,()=>{}),k=d(t,"type",24,()=>{}),b=d(t,"builders",24,()=>[]),v=d(t,"el",28,()=>{});const w={"data-button-root":""};U();var l=y(),B=x(l);H(B,()=>b()&&b().length,g=>{var h=y(),A=x(h);const o=M(()=>Q(b()));I(A,()=>r()?"a":"button",!1,(s,z)=>{S(s,i=>v(i),()=>v()),D(s,(i,O)=>L(i,O),()=>({builders:b()}));let _;V(()=>_=R(s,_,{type:r()?void 0:k(),href:r(),tabindex:"0",...G(o),...c,...w},void 0,s.namespaceURI===j,s.nodeName.includes("-"))),n("click",s,function(i){e.call(this,t,i)}),n("change",s,function(i){e.call(this,t,i)}),n("keydown",s,function(i){e.call(this,t,i)}),n("keyup",s,function(i){e.call(this,t,i)}),n("mouseenter",s,function(i){e.call(this,t,i)}),n("mouseleave",s,function(i){e.call(this,t,i)}),n("mousedown",s,function(i){e.call(this,t,i)}),n("pointerdown",s,function(i){e.call(this,t,i)}),n("mouseup",s,function(i){e.call(this,t,i)}),n("pointerup",s,function(i){e.call(this,t,i)});var E=y(),a=x(E);P(a,t,"default",{}),m(z,E)}),m(g,h)},g=>{var h=y(),A=x(h);I(A,()=>r()?"a":"button",!1,(o,s)=>{S(o,a=>v(a),()=>v());let z;V(()=>z=R(o,z,{type:r()?void 0:k(),href:r(),tabindex:"0",...c,...w},void 0,o.namespaceURI===j,o.nodeName.includes("-"))),n("click",o,function(a){e.call(this,t,a)}),n("change",o,function(a){e.call(this,t,a)}),n("keydown",o,function(a){e.call(this,t,a)}),n("keyup",o,function(a){e.call(this,t,a)}),n("mouseenter",o,function(a){e.call(this,t,a)}),n("mouseleave",o,function(a){e.call(this,t,a)}),n("mousedown",o,function(a){e.call(this,t,a)}),n("pointerdown",o,function(a){e.call(this,t,a)}),n("mouseup",o,function(a){e.call(this,t,a)}),n("pointerup",o,function(a){e.call(this,t,a)});var _=y(),E=x(_);P(E,t,"default",{}),m(s,_)}),m(g,h)}),m(f,l),C()}const W=K({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function et(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["class","variant","size","builders"]);q(t,!1);let r=d(t,"class",8,void 0),k=d(t,"variant",8,"default"),b=d(t,"size",8,"default"),v=d(t,"builders",24,()=>[]);U();var w=M(()=>F(W({variant:k(),size:b(),className:r()})));T(f,J({get builders(){return v()},get class(){return G(w)},type:"button"},()=>c,{$$events:{click(l){e.call(this,t,l)},keydown(l){e.call(this,t,l)}},children:(l,B)=>{var g=y(),h=x(g);P(h,t,"default",{}),m(l,g)},$$slots:{default:!0}})),C()}export{et as B};