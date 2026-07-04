(function(){
  const cfg = window.JC_ADMIN_CONFIG || {};
  if(!cfg.supabaseUrl || !cfg.supabaseAnonKey || !window.supabase) return;
  if(document.documentElement.dataset.page !== 'works') return;
  const list = document.querySelector('.series-list');
  if(!list) return;
  const client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
  client.from('works').select('*').neq('status','hidden').order('sort_order',{ascending:true}).then(({data,error})=>{
    if(error || !data || !data.length) return;
    list.innerHTML = data.map(w=>{
      const img = (w.images && w.images[0]) || 'assets/social/whatsapp-thumbnail.jpg';
      return `<a class="series-row" href="#" data-cms-work="${w.id}"><img alt="${escapeHtml(w.title)}" decoding="async" loading="lazy" src="${img}"><div><h2>${escapeHtml(w.title)}</h2><p>${escapeHtml(w.year||'')}</p></div></a>`;
    }).join('');
  });
  function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
})();
