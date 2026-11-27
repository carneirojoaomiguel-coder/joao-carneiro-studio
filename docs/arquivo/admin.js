const CONFIG = { owner:'carneirojoaomiguel-coder', repo:'joao-carneiro-site', branch:'main', dataPath:'content/site.json' };
const $ = id => document.getElementById(id);
let token = localStorage.getItem('jc_github_token') || '';
let data = null;
let dataSha = null;
let currentImages = [];
$('repoInfo').value = `${CONFIG.owner}/${CONFIG.repo}`;
$('token').value = token;
function notice(msg,type=''){ const n=$('notice'); n.textContent=msg; n.className='notice '+type; n.classList.remove('hidden'); if(type==='ok') setTimeout(()=>n.classList.add('hidden'),4000); }
function api(path, opts={}){ return fetch(`https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}${path}`, { ...opts, headers:{ 'Accept':'application/vnd.github+json','Authorization':`Bearer ${token}`,'X-GitHub-Api-Version':'2022-11-28', ...(opts.headers||{}) } }); }
function b64utf8(s){ return btoa(unescape(encodeURIComponent(s))); }
function utf8b64(s){ return decodeURIComponent(escape(atob(s.replace(/\n/g,'')))); }
function slug(s){ return (s||'obra').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function esc(s){ return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function route(){ const h=location.hash||'#works'; document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===h)); ['works','settings','help'].forEach(x=>$(x+'Panel')?.classList.toggle('hidden', h!==('#'+x) || !data)); }
window.addEventListener('hashchange', route);
$('saveTokenBtn').onclick=()=>{ token=$('token').value.trim(); localStorage.setItem('jc_github_token', token); notice('Token guardado neste computador.','ok'); };
$('logoutBtn').onclick=()=>{ localStorage.removeItem('jc_github_token'); location.reload(); };
$('loginBtn').onclick=async()=>{ token=$('token').value.trim(); if(!token) return notice('Cola primeiro o token do GitHub.','bad'); await loadData(); };
$('reloadBtn').onclick=loadData;
async function loadData(){
  try{
    const res=await api(`/contents/${CONFIG.dataPath}?ref=${CONFIG.branch}`); if(!res.ok) throw new Error(await res.text());
    const json=await res.json(); dataSha=json.sha; data=JSON.parse(utf8b64(json.content));
    $('loginPanel').classList.add('hidden'); $('worksPanel').classList.remove('hidden'); $('contactEmail').value=data.site?.contact_email||''; renderWorks(); route(); notice('Dados carregados.','ok');
  }catch(e){ notice('Não foi possível ler o GitHub. Confirma o token e permissões do repositório.','bad'); console.error(e); }
}
function renderWorks(){ const arr=[...(data.works||[])].sort((a,b)=>(+a.sort_order||0)-(+b.sort_order||0)); $('workList').innerHTML=arr.length?arr.map(w=>`<div class="work"><img src="/${esc(w.cover || (w.images&&w.images[0]) || 'assets/social/whatsapp-thumbnail.jpg')}"><div><strong>${esc(w.title)}</strong><div class="meta">${esc(w.year)} · ${esc(w.medium)} · ${esc(w.status)}</div></div><button class="secondary" onclick="editWork('${esc(w.id)}')">Editar</button></div>`).join(''):'<p class="small">Ainda não há obras no ficheiro de conteúdo.</p>'; }
window.editWork=id=>{ const w=(data.works||[]).find(x=>x.id===id); if(!w) return; openEditor(w); };
$('newBtn').onclick=()=>openEditor({id:'',title:'',year:'',medium:'',dimensions:'',status:'available',sort_order:(data.works||[]).length+1,description_pt:'',description_en:'',images:[],cover:''});
function openEditor(w){ $('editor').classList.remove('hidden'); $('editorTitle').textContent=w.id?'Editar obra':'Nova obra'; ['id','title','year','medium','dimensions','description_pt','description_en','sort_order'].forEach(k=>$(k).value=w[k]||''); $('status').value=w.status||'available'; currentImages=[...(w.images||[])]; renderImages(); }
$('cancelBtn').onclick=()=>$('editor').classList.add('hidden');
function renderImages(){ $('images').innerHTML=currentImages.map((u,i)=>`<div><img src="/${esc(u)}"><button class="secondary" onclick="removeImage(${i})">Remover</button></div>`).join(''); }
window.removeImage=i=>{ currentImages.splice(i,1); renderImages(); };
$('imageInput').onchange=async e=>{ for(const f of e.target.files){ const path=await uploadFile(f); currentImages.push(path); renderImages(); } e.target.value=''; };
async function uploadFile(file){
  const s=slug($('title').value||'obra'); const ext=(file.name.split('.').pop()||'jpg').toLowerCase(); const name=`${Date.now()}-${slug(file.name.replace(/\.[^.]+$/,''))}.${ext}`; const path=`assets/uploads/${s}/${name}`;
  const content=await new Promise((resolve,reject)=>{ const r=new FileReader(); r.onload=()=>resolve(String(r.result).split(',')[1]); r.onerror=reject; r.readAsDataURL(file); });
  const res=await api(`/contents/${encodeURIComponent(path).replace(/%2F/g,'/')}`, { method:'PUT', body:JSON.stringify({message:`Upload image ${name}`, content, branch:CONFIG.branch}) });
  if(!res.ok) throw new Error(await res.text()); notice(`Imagem carregada: ${name}`,'ok'); return path;
}
$('saveBtn').onclick=async()=>{
  const id=$('id').value || slug($('title').value); if(!id) return notice('A obra precisa de título.','bad');
  const w={ id, title:$('title').value, year:$('year').value, medium:$('medium').value, dimensions:$('dimensions').value, status:$('status').value, sort_order:Number($('sort_order').value||0), description_pt:$('description_pt').value, description_en:$('description_en').value, images:currentImages, cover:currentImages[0]||'', url:`series/${id}.html` };
  const idx=(data.works||[]).findIndex(x=>x.id===id); if(idx>=0) data.works[idx]=w; else data.works.push(w); await saveData(`Update work: ${w.title}`); $('editor').classList.add('hidden'); renderWorks();
};
$('deleteBtn').onclick=async()=>{ const id=$('id').value; if(!id || !confirm('Apagar esta obra do conteúdo?')) return; data.works=data.works.filter(w=>w.id!==id); await saveData(`Delete work ${id}`); $('editor').classList.add('hidden'); renderWorks(); };
$('saveSettingsBtn').onclick=async()=>{ data.site=data.site||{}; data.site.contact_email=$('contactEmail').value; await saveData('Update site settings'); };
async function saveData(message){
  const content=b64utf8(JSON.stringify(data,null,2)); const body={message, content, sha:dataSha, branch:CONFIG.branch};
  const res=await api(`/contents/${CONFIG.dataPath}`, {method:'PUT', body:JSON.stringify(body)}); if(!res.ok){ notice('Erro ao guardar no GitHub.','bad'); throw new Error(await res.text()); }
  const json=await res.json(); dataSha=json.content.sha; notice('Guardado no GitHub. O Netlify vai publicar automaticamente dentro de instantes.','ok');
}
if(token) loadData(); else route();
