/* TU SCRIPT ORIGINAL COMPLETO AQUÍ (no lo repito para no duplicar 2000 líneas) */

/* ─────────────────────────────────────────────── */
/* NUEVO switchView()                              */
/* ─────────────────────────────────────────────── */

function switchView(view) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  document.querySelector('.controls').style.display = 'none';
  document.querySelector('.card').style.display = 'none';
  document.getElementById('countLabel').style.display = 'none';
  document.getElementById('misApuestasView').style.display = 'none';
  document.getElementById('bracketsView').style.display = 'none';
  document.getElementById('groupsView').style.display = 'none';

  if (view === 'partidos') {
    document.querySelectorAll('.nav-tab')[0].classList.add('active');
    document.querySelector('.controls').style.display = '';
    document.querySelector('.card').style.display = '';
    document.getElementById('countLabel').style.display = '';
    render();
  }

  else if (view === 'misApuestas') {
    document.querySelectorAll('.nav-tab')[1].classList.add('active');
    document.getElementById('misApuestasView').style.display = 'block';
  }

  else if (view === 'llaves') {
    document.querySelectorAll('.nav-tab')[2].classList.add('active');
    document.getElementById('bracketsView').style.display = 'block';
    renderBracketsView();
  }

  else if (view === 'grupos') {
    document.querySelectorAll('.nav-tab')[3].classList.add('active');
    document.getElementById('groupsView').style.display = 'block';
    renderGroupsView();
  }
}

/* ─────────────────────────────────────────────── */
/* VISTA POR GRUPOS                                */
/* ─────────────────────────────────────────────── */

function renderGroupsView() {
  const container = document.getElementById('groupsView');
  container.innerHTML = '';

  const groups = {};

  matches.forEach(m => {
    if (!groups[m.g]) groups[m.g] = [];
    groups[m.g].push(m);
  });

  Object.keys(groups).sort().forEach(g => {
    container.innerHTML += `
      <div class="group-card">
        <div class="group-title">Grupo ${g}</div>
        ${groups[g].map(m => `
          <div class="group-match">
            <span>${m.home} vs ${m.away}</span>
            <span>${m.date} · ${m.time}</span>
          </div>
        `).join('')}
      </div>
    `;
  });
}

/* ─────────────────────────────────────────────── */
/* VISTA DE LLAVES (BRACKETS)                      */
/* ─────────────────────────────────────────────── */

function renderBracketsView() {
  const container = document.getElementById('bracketsView');
  container.innerHTML = '';

  const byDate = {};

  matches.forEach(m => {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  });

  Object.keys(byDate).forEach(date => {
    container.innerHTML += `
      <div class="bracket-round">
        <div class="bracket-title">${date}</div>
        ${byDate[date].map(m => `
          <div class="bracket-match">
            <span>${m.home}</span>
            <span>vs</span>
            <span>${m.away}</span>
          </div>
        `).join('')}
      </div>
    `;
  });
}
