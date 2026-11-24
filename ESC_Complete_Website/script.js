const services=[{slug:"market-entry",title:"Market Entry & Compliance",description:"Regulatory, cultural, legal and market-entry support for international business.",image:"assets/service-market-entry.jpg",details:"Illustrative capabilities: go-to-market strategy, market research, regulatory coordination, legal and logistical process support."},{slug:"digitalisation",title:"Legacy Data Digitalisation & Process Management",description:"Legacy data capture, validation, digitisation and business process automation.",image:"assets/service-digitalisation.jpg",details:"Illustrative capabilities: data quality reviews, legacy information capture, validation, document digitalisation and workflow improvements."},{slug:"app-development-ai",title:"Application Development & AI",description:"Custom scalable applications, AI assistants and secure solution architecture.",image:"assets/service-appdev.jpg",details:"Illustrative capabilities: custom web and mobile applications, AI agent prototypes, secure AI architecture and assistant integration."},{slug:"sap-new-tech",title:"SAP New Tech",description:"Modern technology integration and AI-enabled solutions within SAP landscapes.",image:"assets/sap.jpg",details:"Illustrative capabilities: SAP-connected applications, AI-enabled workflows, enterprise process modernisation and system integration."}];
const bgs=document.getElementById("serviceBgs"),panels=document.getElementById("servicePanels");bgs.innerHTML=services.map((s,i)=>`<div class="service-bg ${i===0?"selected":""}" style="background-image:linear-gradient(180deg,#081b3055 0%,#081b30aa 100%),url('${s.image}')"></div>`).join("");panels.innerHTML=services.map((s,i)=>`<div class="service-col ${i===0?"active":""}" data-i="${i}"><button type="button" class="service-tab-btn" data-i="${i}" aria-pressed="${i===0}"><span class="tab-title">${s.title}</span></button><div class="service-glass-card" data-i="${i}"><span class="num">0${i+1} / 04</span><h3>${s.title}</h3><p class="desc">${s.description}</p><a class="service-learn-btn" href="services.html#${s.slug}" data-i="${i}">LEARN MORE <span class="arrow-circle">→</span></a></div></div>`).join("");
let currentService=0;
function selectService(i){if(currentService===i)return;currentService=i;document.querySelectorAll(".service-bg").forEach((x,n)=>x.classList.toggle("selected",i===n));document.querySelectorAll(".service-col").forEach((col,n)=>{col.classList.toggle("active",i===n);const btn=col.querySelector(".service-tab-btn");if(btn)btn.setAttribute("aria-pressed",String(i===n))})}
function goToService(i){window.location.href=`services.html#${services[i].slug}`}
panels.querySelectorAll(".service-col").forEach((col,i)=>{
  col.addEventListener("mouseenter",()=>selectService(i));
  col.addEventListener("click",()=>{
    if(currentService!==i){
      selectService(i);
    }else{
      goToService(i);
    }
  });
  const btn=col.querySelector(".service-tab-btn");
  if(btn){
    btn.addEventListener("focus",()=>selectService(i));
    btn.addEventListener("click",e=>{
      if(currentService!==i){
        e.stopPropagation();
        selectService(i);
      }
    });
  }
});
panels.querySelectorAll(".service-glass-card").forEach((card,i)=>{
  card.addEventListener("click",e=>{
    e.stopPropagation();
    goToService(i);
  });
});
panels.querySelectorAll(".service-learn-btn").forEach((btn,i)=>{
  btn.addEventListener("click",e=>{
    e.stopPropagation();
    goToService(i);
  });
});
const modal=document.getElementById("modal");function openModal(title,body){document.getElementById("modalContent").innerHTML=`<span class="eyebrow">ESC UTILITY SERVICES</span><h2>${title}</h2><p>${body}</p><a class="text-link" href="contact.html" id="modalContact">Contact ESC →</a>`;modal.showModal();document.getElementById("modalContact").addEventListener("click",()=>modal.close())}
document.getElementById("closeModal").addEventListener("click",()=>modal.close());modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
const articles=[["Building secure AI agents for utility operations","AI assistants can support knowledge retrieval, structured workflows and operational decisions when designed with appropriate access controls and human oversight. This is illustrative content."],["SAP new tech: bringing AI into SAP landscapes","SAP-connected systems can benefit from modern integration approaches, process automation and carefully governed AI capabilities. This is illustrative content."],["From paper archives to searchable data","Document digitisation can improve discoverability and operational efficiency through capture, validation and structured data management. This is illustrative content."]];
document.querySelectorAll("[data-article]").forEach(b=>b.addEventListener("click",()=>{let a=articles[Number(b.dataset.article)];openModal(a[0],a[1])}));
document.getElementById("contactForm")?.addEventListener("submit",e=>{e.preventDefault();let d=new FormData(e.target),subject=encodeURIComponent("ESC website enquiry from "+d.get("company")),body=encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\nCompany: "+d.get("company")+"\n\n"+d.get("message"));window.location.href="mailto:ceo@esc-ind.com?subject="+subject+"&body="+body});
document.getElementById("menu").addEventListener("click",()=>document.querySelector(".navrow nav").classList.toggle("open"));document.querySelectorAll(".navrow nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".navrow nav").classList.remove("open")));
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-lang]").forEach(x=>x.classList.toggle("chosen",x===b));document.documentElement.lang=b.dataset.lang;document.querySelectorAll("[data-en][data-de]").forEach(x=>x.innerHTML=x.dataset[b.dataset.lang])}));document.getElementById("year").textContent=new Date().getFullYear();
