import{s as K,e as L,a as e,b as E,t as S,c as b,d as N}from"../chunks/disclose-version.DTD7CAsk.js";import{p as O,a as Q,f as R,g as r,b as T,d as m,c as P,s as n,n as k,t as C,r as o,e as U}from"../chunks/utils.C6bM_IYE.js";import{i as V,a as W}from"../chunks/index-client.Wn53Nwrg.js";import{e as M}from"../chunks/icon.BBpdyj6u.js";import{E as X}from"../chunks/empty-result.CXfnR0eU.js";import{S as Y,F as Z,C as rr,a as tr}from"../chunks/fancy-card.KW1ylz8B.js";import{S as w}from"../chunks/separator.DAqa7G-D.js";import{M as sr}from"../chunks/assets.BXQaH0Ug.js";import{S as er,g as ar}from"../chunks/skills.sNFbd1H2.js";import{h as or}from"../chunks/base.BzZbUDfn.js";import{d as lr}from"../chunks/stores.DAB-6uwH.js";import"../chunks/legacy.Cg-hLLqd.js";var dr=E('<div class="flex flex-col gap-6"><div class="flex flex-row items-center gap-2"><!> <!> <!></div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div></div>'),ir=E('<div class="mt-4 flex flex-col gap-14"></div>');function kr(F,I){O(I,!0);const q=K(),B=()=>N(lr,"$mode",q);let f=U("");function D(l){T(f,W(l))}const v=m(()=>ar(r(f)));Y(F,{get title(){return er.title},onSearch:D,children:(l,cr)=>{var u=L(),j=R(u);V(j,()=>r(v).length===0,d=>{X(d)},d=>{var i=ir();M(i,21,()=>r(v),c=>c.category.slug,(c,$)=>{var p=dr(),g=P(p),_=P(g);w(_,{class:"w-[50px]"});var h=n(_,2);sr(h,{children:(s,t)=>{k();var a=S();C(()=>b(a,r($).category.name)),e(s,a)},$$slots:{default:!0}});var z=n(h,2);w(z,{class:"flex-1"}),o(g);var x=n(g,2);M(x,21,()=>r($).items,s=>s.slug,(s,t)=>{var a=m(()=>B()==="light"?r(t).logo.light:r(t).logo.dark),A=m(()=>or(`/skills/${r(t).slug}`));Z(s,{get bgImg(){return r(a)},get color(){return r(t).color},get href(){return r(A)},children:(G,pr)=>{rr(G,{children:(H,gr)=>{tr(H,{children:(J,mr)=>{k();var y=S();C(()=>b(y,r(t).name)),e(J,y)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(x),o(p),e(c,p)}),o(i),e(d,i)}),e(l,u)},$$slots:{default:!0}}),Q()}export{kr as component};