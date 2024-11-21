import{a,t as U,b as f,c as A,e as ie}from"../chunks/disclose-version.DTD7CAsk.js";import{p as ae,g as t,f as m,t as h,s as o,c as b,n as C,r as v,a as oe,d as P,b as W,e as ne}from"../chunks/utils.C6bM_IYE.js";import{o as de,a as X,i as ce}from"../chunks/index-client.Wn53Nwrg.js";import{e as Q,I as Y}from"../chunks/icon.BZWhNDCO.js";import{d as ve,s as Z,h as fe,g as ee,e as ue}from"../chunks/base.BlzPrmy4.js";import{E as me}from"../chunks/empty-result.7G8fj8at.js";import{F as _e,C as pe,a as xe,S as ge}from"../chunks/fancy-card.L3CN4tbi.js";import{M as te,A as $e}from"../chunks/assets.Du5rcdMn.js";import{e as he}from"../chunks/index.DDBfyhzG.js";import{S as be}from"../chunks/skill-badge.BGvTqcYt.js";import{A as we,a as ye}from"../chunks/avatar-fallback.C8TV6Sbz.js";import"../chunks/legacy.Cg-hLLqd.js";import{B as Pe}from"../chunks/index.CIYzC6L8.js";import{R as J,T as K,a as O}from"../chunks/index.2je6qxtZ.js";import{E as re}from"../chunks/experience.Cp4OdfmD.js";var Ce=f("<img>"),ke=f("<!> ",1),De=f("<!> <!>",1),Ee=f("<!> <div> </div>",1),Le=f("<!> <!>",1),Me=f("<!> <div></div>",1),Se=f("<!> <!>",1),Ae=f('<!> <div class="flex flex-col gap-4"><!> <div class="flex flex-row flex-wrap gap-1"></div> <!> <!> <div> </div> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function qe(j,e){ae(e,!0);const _=ve(e.it.period.from,e.it.period.to);let q=P(()=>`${ee(e.it.period.from.getMonth())} ${e.it.period.from.getFullYear()}`),z=P(()=>e.it.period.to?`${ee(e.it.period.to.getMonth())} ${e.it.period.to.getFullYear()}`:"Present"),i=P(()=>`${t(q)} - ${t(z)}`),G=P(()=>[{label:e.it.company,icon:"i-carbon-building",tooltip:"Company"},{label:e.it.location,icon:"i-carbon-location",tooltip:"Location"},{label:e.it.contract,icon:"i-carbon-hourglass",tooltip:"Contract Type"}]);var p=P(()=>fe(`/experience/${e.it.slug}`));_e(j,{get color(){return e.it.color},get href(){return t(p)},children:(H,F)=>{pe(H,{class:"flex flex-col gap-8 sm:flex-row",children:(k,T)=>{var N=Ae(),R=m(N);we(R,{children:(r,u)=>{ye(r,{children:(l,S)=>{var n=Ce();h(()=>{Z(n,"src",$e.Unknown.light),Z(n,"alt",e.it.name)}),a(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=o(R,2),w=b(x);xe(w,{children:(r,u)=>{C();var l=U();h(()=>A(l,e.it.name)),a(r,l)},$$slots:{default:!0}});var D=o(w,2);Q(D,21,()=>t(G),r=>r.icon,(r,u)=>{J(r,{openDelay:300,children:(l,S)=>{K(l,{children:(n,g)=>{var y=De(),d=m(y);Pe(d,{variant:"secondary",class:"flex flex-row items-center gap-1",children:(s,$)=>{var c=ke(),I=m(c);Y(I,{get icon(){return t(u).icon}});var se=o(I);h(()=>A(se,` ${t(u).label??""}`)),a(s,c)},$$slots:{default:!0}});var B=o(d,2);O(B,{children:(s,$)=>{C();var c=U();h(()=>A(c,t(u).tooltip)),a(s,c)},$$slots:{default:!0}}),a(n,y)},$$slots:{default:!0}})},$$slots:{default:!0}})}),v(D);var E=o(D,2);J(E,{openDelay:300,children:(r,u)=>{var l=Le(),S=m(l);K(S,{children:(g,y)=>{te(g,{className:"flex flex-row items-center gap-2",children:(d,B)=>{var s=Ee(),$=m(s);Y($,{icon:"i-carbon-calendar"});var c=o($,2),I=b(c,!0);v(c),h(()=>A(I,t(i))),a(d,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var n=o(S,2);O(n,{children:(g,y)=>{C();var d=U("Date range");a(g,d)},$$slots:{default:!0}}),a(r,l)},$$slots:{default:!0}});var L=o(E,2);J(L,{openDelay:300,children:(r,u)=>{K(r,{children:(l,S)=>{var n=Se(),g=m(n);te(g,{className:"flex flex-row items-center gap-2",children:(d,B)=>{var s=Me(),$=m(s);Y($,{icon:"i-carbon-time"});var c=o($,2);c.textContent=_,a(d,s)},$$slots:{default:!0}});var y=o(g,2);O(y,{side:"bottom",children:(d,B)=>{C();var s=U("Exact duration");a(d,s)},$$slots:{default:!0}}),a(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=o(L,2),le=b(M,!0);h(()=>A(le,he(e.it.description,150))),v(M);var V=o(M,2);Q(V,21,()=>e.it.skills,r=>r.slug,(r,u)=>{be(r,{get skill(){return t(u)}})}),v(V),v(x),a(k,N)},$$slots:{default:!0}})},$$slots:{default:!0}}),oe()}var Fe=f('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),Te=f('<div class="flex flex-col gap-6 lg:gap-0"></div>');function We(j,e){ae(e,!0);let _=ne(""),q=P(()=>re.items.filter(i=>i.name.toLowerCase().includes(t(_).toLowerCase())||i.company.toLowerCase().includes(t(_).toLowerCase())||i.description.toLowerCase().includes(t(_))));const z=i=>W(_,X(i));de(()=>{if(location.search){const p=new URLSearchParams(location.search).get("item");p&&W(_,X(p))}}),ge(j,{get title(){return re.title},onSearch:z,children:(i,G)=>{var p=ie(),H=m(p);ce(H,()=>t(q).length===0,F=>{me(F)},F=>{var k=Te();Q(k,23,()=>t(q),T=>T.slug,(T,N,R)=>{var x=Fe(),w=b(x),D=b(w);qe(D,{get it(){return t(N)}}),v(w);var E=o(w,2),L=o(b(E),2),M=b(L);Y(M,{icon:"i-carbon-radio-button-checked"}),v(L),C(2),v(E),C(2),v(x),h(()=>ue(x,`flex ${t(R)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),a(T,x)}),v(k),a(F,k)}),a(i,p)},$$slots:{default:!0}}),oe()}export{We as component};
