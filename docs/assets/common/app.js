async function loadEpisode() {
  const res = await fetch('./episode.json', { cache: 'no-store' });
  const ep = await res.json();
  const title = document.querySelector('[data-title]');
  const intro = document.querySelector('[data-intro]');
  const final = document.querySelector('[data-final]');
  const image = document.querySelector('[data-image]');
  const label = document.querySelector('[data-label]');
  const count = document.querySelector('[data-count]');
  const answer = document.querySelector('[data-answer]');
  const copy = document.querySelector('[data-copy]');
  const prev = document.querySelector('[data-prev]');
  const next = document.querySelector('[data-next]');
  const sectionFinal = document.querySelector('[data-final-section]');

  title.textContent = ep.title;
  intro.innerHTML = ep.introduction.map(p => `<p>${p}</p>`).join('');

  let i = 0;
  function render() {
    const item = ep.images[i];
    image.src = item.file;
    image.alt = item.alt || item.id;
    label.textContent = `${item.id}. ${item.public_label}`;
    count.textContent = `${i + 1} / ${ep.images.length}`;
    prev.disabled = i === 0;
    next.textContent = i === ep.images.length - 1 ? '最終状況へ' : '次へ';
  }

  prev.addEventListener('click', () => { if (i > 0) { i--; render(); } });
  next.addEventListener('click', () => {
    if (i < ep.images.length - 1) { i++; render(); }
    else {
      sectionFinal.classList.remove('hidden');
      final.innerHTML = ep.final_situation.map(p => `<p>${p}</p>`).join('');
      sectionFinal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  copy.addEventListener('click', async () => {
    const text = `第1話「${ep.title}」の回答です。\n\n${answer.value.trim()}`;
    await navigator.clipboard.writeText(text);
    copy.textContent = 'コピーしました';
    setTimeout(() => copy.textContent = '回答をコピー', 1500);
  });

  render();
}
loadEpisode().catch(err => {
  document.body.innerHTML = `<main class="page"><section class="card"><h1>読み込みエラー</h1><p>${err}</p></section></main>`;
});
