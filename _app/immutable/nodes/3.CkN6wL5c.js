import{a as t,t as A,b as v,c as j,e as le}from"../chunks/disclose-version.DTD7CAsk.js";import{p as te,g as l,f as $,t as y,s as a,c as h,n as p,r as u,a as re,d as D,b as V,e as ie}from"../chunks/utils.C6bM_IYE.js";import{o as de,a as W,i as ne}from"../chunks/index-client.Wn53Nwrg.js";import{I as z,e as ae}from"../chunks/icon.BBpdyj6u.js";import{d as ce,s as X,h as ve,g as Z,e as fe}from"../chunks/base.BzZbUDfn.js";import{E as ue}from"../chunks/empty-result.CXfnR0eU.js";import{F as me,C as _e,a as $e,S as ge}from"../chunks/fancy-card.KW1ylz8B.js";import{M as H,A as xe}from"../chunks/assets.BXQaH0Ug.js";import{e as pe}from"../chunks/index.DDBfyhzG.js";import{A as he,a as we}from"../chunks/avatar-fallback.6iyMG_ep.js";import"../chunks/legacy.Cg-hLLqd.js";import{B as Pe}from"../chunks/index.IiFepsj9.js";import{R as J,T as K,a as O}from"../chunks/index.BJ07WBl0.js";import{E as ee}from"../chunks/education.C-5-7EVj.js";var be=v("<img>"),ye=v("<!> <div></div>",1),Ce=v("<!> <!>",1),Ee=v("<!> <div> </div>",1),Le=v("<!> <!>",1),ke=v("<!> <div></div>",1),Me=v("<!> <!>",1),Ae=v('<!> <div class="flex flex-col gap-4"><!> <!> <!> <!> <div> </div> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function De(B,e){te(e,!0);const f=ce(e.it.period.from,e.it.period.to);let q=D(()=>`${Z(e.it.period.from.getMonth())} ${e.it.period.from.getFullYear()}`),I=D(()=>e.it.period.to?`${Z(e.it.period.to.getMonth())} ${e.it.period.to.getFullYear()}`:"Present"),i=D(()=>`${l(q)} - ${l(I)}`),U=`${e.it.organization}, ${e.it.location}`;var g=D(()=>ve(`/education/${e.it.slug}`));me(B,{get href(){return l(g)},children:(Y,F)=>{_e(Y,{class:"flex flex-col gap-8 sm:flex-row",children:(C,N)=>{var S=Ae(),R=$(S);he(R,{children:(o,P)=>{we(o,{children:(r,m)=>{var s=be();y(()=>{X(s,"src",xe.Unknown.light),X(s,"alt",e.it.name)}),t(r,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=a(R,2),w=h(x);$e(w,{children:(o,P)=>{p();var r=A();y(()=>j(r,e.it.degree)),t(o,r)},$$slots:{default:!0}});var T=a(w,2);J(T,{children:(o,P)=>{var r=Ce(),m=$(r);K(m,{children:(n,M)=>{H(n,{className:"flex flex-row items-center gap-2",children:(d,G)=>{var c=ye(),_=$(c);z(_,{icon:"i-carbon-location"});var b=a(_,2);b.textContent=U,t(d,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var s=a(m,2);O(s,{children:(n,M)=>{p();var d=A("Date range");t(n,d)},$$slots:{default:!0}}),t(o,r)},$$slots:{default:!0}});var E=a(T,2);J(E,{children:(o,P)=>{var r=Le(),m=$(r);K(m,{children:(n,M)=>{H(n,{className:"flex flex-row items-center gap-2",children:(d,G)=>{var c=Ee(),_=$(c);z(_,{icon:"i-carbon-calendar"});var b=a(_,2),se=h(b,!0);u(b),y(()=>j(se,l(i))),t(d,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var s=a(m,2);O(s,{children:(n,M)=>{p();var d=A("Date range");t(n,d)},$$slots:{default:!0}}),t(o,r)},$$slots:{default:!0}});var L=a(E,2);J(L,{children:(o,P)=>{K(o,{children:(r,m)=>{var s=Me(),n=$(s);H(n,{className:"flex flex-row items-center gap-2",children:(d,G)=>{var c=ke(),_=$(c);z(_,{icon:"i-carbon-time"});var b=a(_,2);b.textContent=f,t(d,c)},$$slots:{default:!0}});var M=a(n,2);O(M,{side:"bottom",children:(d,G)=>{p();var c=A("Exact duration");t(d,c)},$$slots:{default:!0}}),t(r,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=a(L,2),oe=h(k,!0);y(()=>j(oe,pe(e.it.description,150))),u(k);var Q=a(k,2);ae(Q,20,()=>e.it.subjects,o=>o,(o,P)=>{Pe(o,{variant:"secondary",children:(r,m)=>{p();var s=A();y(()=>j(s,P)),t(r,s)},$$slots:{default:!0}})}),u(Q),u(x),t(C,S)},$$slots:{default:!0}})},$$slots:{default:!0}}),re()}var qe=v('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),Fe=v('<div class="flex flex-col gap-6 lg:gap-0"></div>');function Oe(B,e){te(e,!0);let f=ie(""),q=D(()=>ee.items.filter(i=>i.name.toLowerCase().includes(l(f).toLowerCase())||i.description.toLowerCase().includes(l(f))||i.location.toLowerCase().includes(l(f))||i.degree.toLowerCase().includes(l(f))||i.organization.toLowerCase().includes(l(f))));const I=i=>V(f,W(i));de(()=>{if(location.search){const g=new URLSearchParams(location.search).get("item");g&&V(f,W(g))}}),ge(B,{get title(){return ee.title},onSearch:I,children:(i,U)=>{var g=le(),Y=$(g);ne(Y,()=>l(q).length===0,F=>{ue(F)},F=>{var C=Fe();ae(C,23,()=>l(q),N=>N.slug,(N,S,R)=>{var x=qe(),w=h(x),T=h(w);De(T,{get it(){return l(S)}}),u(w);var E=a(w,2),L=a(h(E),2),k=h(L);z(k,{icon:"i-carbon-radio-button-checked"}),u(L),p(2),u(E),p(2),u(x),y(()=>fe(x,`flex ${l(R)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),t(N,x)}),u(C),t(F,C)}),t(i,g)},$$slots:{default:!0}}),re()}export{Oe as component};