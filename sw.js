// keeps the app shell on the phone so it opens instantly; always tries the network first for the page itself,
// so a new version shows up on the next open. data (supabase) is never cached here.
const CACHE='financeiro-v56';
const SHELL=['./','index.html','config.js','manifest.webmanifest','icons/icon-192.png','icons/apple-touch-icon.png'];
// a new version waits until someone taps "atualizar" in the app (or the app is closed and opened again)
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))); });
self.addEventListener('message',e=>{ if(e.data==='atualizar') self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET') return;
  const same=u.origin===location.origin, lib=/fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(u.hostname);
  if(!same&&!lib) return;
  if(same&&/(dados|saldos)\.enc\.json$/.test(u.pathname)) return;
  if(lib){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{ const c=res.clone(); caches.open(CACHE).then(k=>k.put(e.request,c)); return res; }))); return; }
  e.respondWith(fetch(e.request).then(res=>{ if(res.ok){ const c=res.clone(); caches.open(CACHE).then(k=>k.put(e.request,c)); } return res; }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
