import{d as x,u as y,w as j,p as D,i as d,o as n,c as a,b as t,t as e,h as o,v as A,F as u,r as I}from"./index-6a36396d.js";import{f as w}from"./helper-07107c47.js";const B={class:"mt-8"},F={class:"flex items-center justify-center w-full h-full pt-2 pb-4"},k=["src"],C={class:"lg:grid lg:grid-cols-2"},N={class:"lg:text-right"},R={class:"capitalize"},U={class:"capitalize"},z=t("h2",{class:"mt-24 lg:mt-48"},"Le projet",-1),L={class:"mt-4 lg:mt-6 grid lg:grid-cols-2"},S={class:"mr-4"},V=["src"],E=t("h2",{class:"mt-24 lg:mt-48"},"Sa Réalisation",-1),H={class:"mt-4 lg:mt-6 grid lg:grid-cols-2"},P={class:"mr-4"},q=["src"],G={class:"mt-4 lg:mt-12 grid lg:grid-cols-2 gap-4"},J={key:0},K=t("h2",null,"Recommandation",-1),M={class:"lg:px-16 flex content-center justify-center flex-col lg:text-2xl"},O={class:"italic mt-16"},Q={class:"text-right"},T=["src","alt"],$=x({__name:"[id]",props:{id:{}},async setup(h){let c,_;const f=h;y({title:"Portfolio BINDA"});const s=([c,_]=j(()=>D(f.id)),c=await c,_(),c),r=s.photo_bonus;console.log(r);const i=Array.isArray(r)?r.map(l=>d.getFileUrl(s,l,{thumb:"100x250"})):[];console.log(i);const m=s.cover,v=m&&d.getFileUrl(s,m,{thumb:"100x250"}),p=(Array.isArray(s.photo_bonus)?s.photo_bonus:[]).map(l=>({url:l?d.getFileUrl(s,l,{thumb:"100x250"}):"/image-not-found.png",description:l?l.description:"Description par défaut"}));return p[0],p[1],(l,X)=>(n(),a(u,null,[t("h2",B,e(o(s).titre),1),t("div",F,[t("img",{src:o(v),alt:""},null,8,k)]),t("div",C,[t("p",null,"Rôle: "+e(o(s).role),1),t("div",N,[t("p",R,e(o(w)(o(s).date)),1),t("p",U,e(o(s).categorie),1)])]),z,t("div",L,[t("p",S,e(o(s).projet),1),t("div",null,[t("img",{class:"mt-6 lg:mt-0 lg:pl-20 aspect-[16/9] object-cover",src:o(i)[0]},null,8,V)])]),E,t("div",H,[t("p",P,e(o(s).realisation),1),t("div",null,[t("img",{class:"mt-6 lg:mt-0 lg:pl-20 aspect-[16/9] object-cover",src:o(i)[1]},null,8,q)])]),t("div",G,[o(s).recommandation?(n(),a("div",J,[K,t("div",M,[t("p",O,'"'+e(o(s).recommandation)+'"',1),t("p",Q,e(o(s).nom_personne_reco),1)])])):A("",!0),(n(!0),a(u,null,I(o(i).slice(2),(b,g)=>(n(),a("div",{key:g,class:"lg:col-span-1"},[t("img",{src:b,alt:"Image bonus "+(g+1),class:"w-full h-full aspect-[5/3] object-cover"},null,8,T)]))),128))])],64))}});export{$ as default};