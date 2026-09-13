// meta-aivi CMS renderer — reads content.json, builds the page.
// Edit content.json to update the site. No WordPress needed.
async function loadContent(){
  const res = await fetch('../content.json').catch(()=>fetch('content.json'));
  return await res.json();
}
function waLink(num){ return 'https://wa.me/'+num.replace(/\D/g,''); }
function renderNav(nav, active){
  return nav.map(n=>`<a href="../${n.href}" class="${n.label===active?'active':''}">${n.label}</a>`).join('');
}
function renderFooter(s){
  return `<div class="wrap">
    <p><strong>${s.company}</strong> · ${s.ssm}</p>
    <p>${s.address}</p>
    <p>📞 ${s.phone} · <a href="${waLink(s.whatsapp)}">WhatsApp ${s.whatsapp}</a> · ✉️ ${s.email}</p>
    <p style="margin-top:16px;opacity:.6">${s.brand} — "${s.slogan}"</p>
  </div>`;
}
function baseHead(title,desc){
  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","name":"Arrowmatics AI","url":"https://meta-aivi.com","contactPoint":{"@type":"ContactPoint","telephone":"+60122112522","contactType":"Sales","url":"https://wa.me/60122112522"}}
</script>
<link rel="stylesheet" href="../assets/css/style.css"></head>`;
}
function waFloat(s){
  return `<a class="whatsapp-float" href="${waLink(s.whatsapp)}" target="_blank">💬 WhatsApp</a>`;
}
window.CMS = { loadContent, renderNav, renderFooter, baseHead, waFloat, waLink };
