document.getElementById('menu')?.addEventListener('click',()=>document.querySelector('.navrow nav').classList.toggle('open'));document.querySelectorAll('.navrow nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navrow nav').classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);location.href='mailto:support@esc-ind.com?subject='+encodeURIComponent('ESC website enquiry from '+d.get('company'))+'&body='+encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nCompany: '+d.get('company')+'\nArea of interest: '+d.get('interest')+'\n\n'+d.get('message'))});
const offices={india:{coordinates:'8.5574° N, 76.8797° E',tz:'IST (UTC+5:30)',tag:'INDIA OFFICE',name:'ESC Utility Services Pvt. Ltd.',address:'Module 2605, 6th Floor<br>Yamuna Building<br>Technopark Phase 3 Campus<br>Trivandrum, Kerala – 695583<br>India',email:'support@esc-ind.com',phone:'+91 8086 22 8000',tel:'+918086228000',map:'https://www.openstreetmap.org/export/embed.html?bbox=76.84%2C8.53%2C76.92%2C8.59&layer=mapnik&marker=8.5574%2C76.8797',directions:'https://www.google.com/maps/search/?api=1&query=Technopark+Phase+3+Trivandrum'},germany:{coordinates:'51.2277° N, 6.7735° E',tz:'CET / CEST',tag:'GERMANY OFFICE',name:'Group Head Office',address:'Goltsteinstraße 30–31<br>40211 Düsseldorf<br>Germany',email:'',phone:'+49 (211) 138 66 454',tel:'+4921113866454',map:'https://www.openstreetmap.org/export/embed.html?bbox=6.74%2C51.21%2C6.80%2C51.25&layer=mapnik&marker=51.2277%2C6.7735',directions:'https://www.google.com/maps/search/?api=1&query=Goltsteinstrasse+30-31+Dusseldorf+Germany'}};
document.querySelectorAll('[data-office]').forEach(btn=>btn.addEventListener('click',()=>{let o=offices[btn.dataset.office];document.querySelectorAll('[data-office]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-selected',String(b===btn))});document.getElementById('locationDetails').innerHTML=`<div class="location-micro"><span>${o.coordinates}</span><span>${o.tz}</span></div><span class="eyebrow">${o.tag}</span><h3>${o.name}</h3><p>${o.address}</p><div class="location-contact">${o.email?`<a href="mailto:${o.email}">✉ &nbsp;${o.email}</a>`:''}<a href="tel:${o.tel}">☎ &nbsp;${o.phone}</a></div><a class="btn location-directions" href="${o.directions}" target="_blank" rel="noopener">GET DIRECTIONS IN GOOGLE MAPS ↗</a>`;let map=document.getElementById('officeMap');map.src=o.map;map.title='Map of ESC '+btn.dataset.office+' office'}));
const preselectedService=new URLSearchParams(window.location.search).get('service');if(preselectedService){const sel=document.querySelector('#contactForm select[name="interest"]');if(sel){Array.from(sel.options).forEach(opt=>{if(opt.text.trim()===preselectedService.trim())sel.value=opt.value})}}

document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-lang]').forEach(x=>x.classList.toggle('chosen',x===b));document.documentElement.lang=b.dataset.lang;document.querySelectorAll('[data-en][data-de]').forEach(x=>x.innerHTML=x.dataset[b.dataset.lang])}));

// More About Us toggle
const moreAboutBtn = document.getElementById('moreAboutBtn');
const moreAboutSection = document.getElementById('moreAboutSection');
if (moreAboutBtn && moreAboutSection) {
  moreAboutBtn.addEventListener('click', () => {
    const isHidden = moreAboutSection.hasAttribute('hidden');
    if (isHidden) {
      moreAboutSection.removeAttribute('hidden');
      moreAboutBtn.setAttribute('aria-expanded', 'true');
      moreAboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      moreAboutSection.setAttribute('hidden', '');
      moreAboutBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
