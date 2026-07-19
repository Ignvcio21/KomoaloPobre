// Rotaciones alternas: derecho, izquierda, derecha, izquierda...
const ROTS = [0, -14, 12, -10, 15, -12, 0, -15, 11, -13, 14, -11];

function buildDecoStrip(el) {
  const img = el.dataset.img;
  if (!img) return;
  let html = '';
  for (let i = 0; i < 14; i++) {
    const r = ROTS[i % ROTS.length];
    html += `<img src="${img}" style="transform:rotate(${r}deg);margin:0 4px">`;
  }
  el.innerHTML = html;
}

document.querySelectorAll('.deco-strip').forEach(buildDecoStrip);

function show(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
