async function loadSiteContent(){
  try{ const r=await fetch('/content/site.json?v=' + Date.now(), {cache:'no-store'}); if(!r.ok) return null; return await r.json(); }catch(e){ return null; }
}
function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
async function renderWorksFromContent(){
  const target=document.querySelector('[data-dynamic-works]'); if(!target) return;
  const data=await loadSiteContent(); if(!data||!Array.isArray(data.works)) return;
  const works=data.works.filter(w=>w.status!=='hidden').sort((a,b)=>(+a.sort_order||0)-(+b.sort_order||0));
  target.innerHTML=works.map(w=>`<a class="series-row" href="${escapeHtml(w.url||'#')}"><img alt="${escapeHtml(w.title)}" decoding="async" loading="lazy" src="/${escapeHtml(w.cover || (w.images&&w.images[0]) || 'assets/social/whatsapp-thumbnail.jpg')}"><div><h2>${escapeHtml(w.title)}</h2><p>${escapeHtml(w.year||'')}</p></div></a>`).join('');
}
document.addEventListener('DOMContentLoaded', renderWorksFromContent);
