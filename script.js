// ══════════════════════════════════════════════════════════════
// CONFIG — pon tu URL de Railway aquí
// ══════════════════════════════════════════════════════════════
const API_URL = 'https://morocho-production.up.railway.app'; // ← CAMBIA ESTO
 
// ══════════════════════════════════════════════════════════════
// DATOS PARTIDOS
// ══════════════════════════════════════════════════════════════
const BETS = [
  { cls: 't-result', label: '1X2' },
  { cls: 't-goles',  label: 'Goles +/-' },
];
 
const matches = [
  {g:'A', date:'11 jun', time:'15:00', home:'México',        away:'Sudáfrica',       venue:'Ciudad de México'},
  {g:'A', date:'11 jun', time:'22:00', home:'Corea del Sur', away:'Chequia',         venue:'Guadalajara'},
  {g:'B', date:'12 jun', time:'15:00', home:'Canadá',        away:'Bosnia & Herz.',  venue:'Toronto'},
  {g:'D', date:'12 jun', time:'21:00', home:'EE.UU.',        away:'Paraguay',        venue:'Los Ángeles'},
  {g:'B', date:'13 jun', time:'15:00', home:'Catar',         away:'Suiza',           venue:'San Francisco'},
  {g:'C', date:'13 jun', time:'18:00', home:'Brasil',        away:'Marruecos',       venue:'Nueva York/NJ'},
  {g:'C', date:'13 jun', time:'21:00', home:'Haití',         away:'Escocia',         venue:'Boston'},
  {g:'D', date:'13 jun', time:'00:00', home:'Australia',     away:'Turquía',         venue:'Vancouver'},
  {g:'E', date:'14 jun', time:'13:00', home:'Alemania',      away:'Curazao',         venue:'Houston'},
  {g:'F', date:'14 jun', time:'16:00', home:'Países Bajos',  away:'Japón',           venue:'Dallas'},
  {g:'E', date:'14 jun', time:'19:00', home:'C. de Marfil',  away:'Ecuador',         venue:'Filadelfia'},
  {g:'F', date:'14 jun', time:'22:00', home:'Suecia',        away:'Túnez',           venue:'Monterrey'},
  {g:'H', date:'15 jun', time:'12:00', home:'España',        away:'Cabo Verde',      venue:'Atlanta'},
  {g:'G', date:'15 jun', time:'15:00', home:'Bélgica',       away:'Egipto',          venue:'Seattle'},
  {g:'H', date:'15 jun', time:'18:00', home:'Arabia Saudita',away:'Uruguay',         venue:'Miami'},
  {g:'G', date:'15 jun', time:'21:00', home:'Irán',          away:'Nueva Zelanda',   venue:'Los Ángeles'},
  {g:'I', date:'16 jun', time:'15:00', home:'Francia',       away:'Senegal',         venue:'Nueva York/NJ'},
  {g:'I', date:'16 jun', time:'18:00', home:'Irak',          away:'Noruega',         venue:'Boston'},
  {g:'J', date:'16 jun', time:'21:00', home:'Argentina',     away:'Argelia',         venue:'Kansas City'},
  {g:'J', date:'16 jun', time:'00:00', home:'Austria',       away:'Jordania',        venue:'San Francisco'},
  {g:'K', date:'17 jun', time:'13:00', home:'Portugal',      away:'RD Congo',        venue:'Houston'},
  {g:'L', date:'17 jun', time:'16:00', home:'Inglaterra',    away:'Croacia',         venue:'Dallas'},
  {g:'L', date:'17 jun', time:'19:00', home:'Ghana',         away:'Panamá',          venue:'Toronto'},
  {g:'K', date:'17 jun', time:'22:00', home:'Uzbekistán',    away:'Colombia',        venue:'Ciudad de México'},
  {g:'A', date:'18 jun', time:'12:00', home:'Chequia',       away:'Sudáfrica',       venue:'Atlanta'},
  {g:'B', date:'18 jun', time:'15:00', home:'Suiza',         away:'Bosnia & Herz.',  venue:'Los Ángeles'},
  {g:'B', date:'18 jun', time:'18:00', home:'Canadá',        away:'Catar',           venue:'Vancouver'},
  {g:'A', date:'18 jun', time:'21:00', home:'México',        away:'Corea del Sur',   venue:'Guadalajara'},
  {g:'D', date:'19 jun', time:'15:00', home:'EE.UU.',        away:'Australia',       venue:'Seattle'},
  {g:'C', date:'19 jun', time:'18:00', home:'Escocia',       away:'Marruecos',       venue:'Boston'},
  {g:'C', date:'19 jun', time:'21:00', home:'Brasil',        away:'Haití',           venue:'Filadelfia'},
  {g:'D', date:'19 jun', time:'00:00', home:'Turquía',       away:'Paraguay',        venue:'San Francisco'},
  {g:'F', date:'20 jun', time:'13:00', home:'Países Bajos',  away:'Suecia',          venue:'Houston'},
  {g:'E', date:'20 jun', time:'16:00', home:'Alemania',      away:'C. de Marfil',    venue:'Toronto'},
  {g:'E', date:'20 jun', time:'20:00', home:'Ecuador',       away:'Curazao',         venue:'Kansas City'},
  {g:'F', date:'20 jun', time:'00:00', home:'Túnez',         away:'Japón',           venue:'Monterrey'},
  {g:'H', date:'21 jun', time:'12:00', home:'España',        away:'Arabia Saudita',  venue:'Atlanta'},
  {g:'G', date:'21 jun', time:'15:00', home:'Bélgica',       away:'Irán',            venue:'Los Ángeles'},
  {g:'H', date:'21 jun', time:'18:00', home:'Uruguay',       away:'Cabo Verde',      venue:'Miami'},
  {g:'G', date:'21 jun', time:'21:00', home:'Nueva Zelanda', away:'Egipto',          venue:'Vancouver'},
  {g:'J', date:'22 jun', time:'13:00', home:'Argentina',     away:'Austria',         venue:'Dallas'},
  {g:'I', date:'22 jun', time:'17:00', home:'Francia',       away:'Irak',            venue:'Filadelfia'},
  {g:'I', date:'22 jun', time:'20:00', home:'Noruega',       away:'Senegal',         venue:'Nueva York/NJ'},
  {g:'J', date:'22 jun', time:'23:00', home:'Jordania',      away:'Argelia',         venue:'San Francisco'},
  {g:'K', date:'23 jun', time:'13:00', home:'Portugal',      away:'Uzbekistán',      venue:'Houston'},
  {g:'L', date:'23 jun', time:'16:00', home:'Inglaterra',    away:'Ghana',           venue:'Boston'},
  {g:'L', date:'23 jun', time:'19:00', home:'Panamá',        away:'Croacia',         venue:'Toronto'},
  {g:'K', date:'23 jun', time:'22:00', home:'Colombia',      away:'RD Congo',        venue:'Guadalajara'},
  {g:'B', date:'24 jun', time:'15:00', home:'Suiza',         away:'Canadá',          venue:'Vancouver'},
  {g:'B', date:'24 jun', time:'15:00', home:'Bosnia & Herz.',away:'Catar',           venue:'Seattle'},
  {g:'C', date:'24 jun', time:'18:00', home:'Escocia',       away:'Brasil',          venue:'Miami'},
  {g:'C', date:'24 jun', time:'18:00', home:'Marruecos',     away:'Haití',           venue:'Atlanta'},
  {g:'A', date:'24 jun', time:'21:00', home:'Chequia',       away:'México',          venue:'Ciudad de México'},
  {g:'A', date:'24 jun', time:'21:00', home:'Sudáfrica',     away:'Corea del Sur',   venue:'Monterrey'},
  {g:'E', date:'25 jun', time:'16:00', home:'Curazao',       away:'C. de Marfil',    venue:'Filadelfia'},
  {g:'E', date:'25 jun', time:'16:00', home:'Ecuador',       away:'Alemania',        venue:'Nueva York/NJ'},
  {g:'F', date:'25 jun', time:'19:00', home:'Japón',         away:'Suecia',          venue:'Dallas'},
  {g:'F', date:'25 jun', time:'19:00', home:'Túnez',         away:'Países Bajos',    venue:'Kansas City'},
  {g:'D', date:'25 jun', time:'22:00', home:'Turquía',       away:'EE.UU.',          venue:'Los Ángeles'},
  {g:'D', date:'25 jun', time:'22:00', home:'Paraguay',      away:'Australia',       venue:'San Francisco'},
  {g:'I', date:'26 jun', time:'15:00', home:'Noruega',       away:'Francia',         venue:'Boston'},
  {g:'I', date:'26 jun', time:'15:00', home:'Senegal',       away:'Irak',            venue:'Toronto'},
  {g:'H', date:'26 jun', time:'20:00', home:'Cabo Verde',    away:'Arabia Saudita',  venue:'Houston'},
  {g:'H', date:'26 jun', time:'20:00', home:'Uruguay',       away:'España',          venue:'Guadalajara'},
  {g:'G', date:'26 jun', time:'23:00', home:'Egipto',        away:'Irán',            venue:'Seattle'},
  {g:'G', date:'26 jun', time:'23:00', home:'Nueva Zelanda', away:'Bélgica',         venue:'Vancouver'},
  {g:'L', date:'27 jun', time:'17:00', home:'Panamá',        away:'Inglaterra',      venue:'Nueva York/NJ'},
  {g:'L', date:'27 jun', time:'17:00', home:'Croacia',       away:'Ghana',           venue:'Filadelfia'},
  {g:'K', date:'27 jun', time:'19:30', home:'Colombia',      away:'Portugal',        venue:'Miami'},
  {g:'K', date:'27 jun', time:'19:30', home:'RD Congo',      away:'Uzbekistán',      venue:'Atlanta'},
  {g:'J', date:'27 jun', time:'22:00', home:'Argelia',       away:'Austria',         venue:'Kansas City'},
  {g:'J', date:'27 jun', time:'22:00', home:'Jordania',      away:'Argentina',       venue:'Dallas'},
];
 
// ══════════════════════════════════════════════════════════════
// ESTADO
// ══════════════════════════════════════════════════════════════
let token     = localStorage.getItem('token') || null;
let user      = JSON.parse(localStorage.getItem('user') || 'null');
let savedBets = {};
let oddsData  = {}; // cuotas cargadas desde el backend
 
let modalMatch   = null;
let modalBetType = null;
let modalBetId   = null;
 
// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
(function init() {
  if (token && user) showApp();
  else document.getElementById('authScreen').style.display = 'flex';
})();
 
// ══════════════════════════════════════════════════════════════
// AUTH
// ══════════════════════════════════════════════════════════════
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((b, i) =>
    b.classList.toggle('active', (i === 0) === (tab === 'login'))
  );
  document.getElementById('loginForm').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('authError').textContent = '';
}
 
async function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  setAuthError('');
  if (!email || !password) return setAuthError('Completa todos los campos');
  const btn = document.getElementById('btnLogin');
  btn.disabled = true; btn.textContent = 'Entrando...';
  try {
    const res  = await fetch(`${API_URL}/api/auth/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, password}) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error al iniciar sesión');
    token = data.token; user = data.user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    showApp();
  } catch(err) { setAuthError(err.message); }
  finally { btn.disabled = false; btn.textContent = 'Entrar'; }
}
 
async function register() {
  const username = document.getElementById('regUsername').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  setAuthError('');
  if (!username || !email || !password) return setAuthError('Completa todos los campos');
  if (password.length < 8) return setAuthError('La contraseña debe tener al menos 8 caracteres');
  const btn = document.getElementById('btnRegister');
  btn.disabled = true; btn.textContent = 'Creando cuenta...';
  try {
    const res  = await fetch(`${API_URL}/api/auth/register`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username, email, password}) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error al registrarse');
    token = data.token; user = data.user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    showApp();
  } catch(err) { setAuthError(err.message); }
  finally { btn.disabled = false; btn.textContent = 'Crear cuenta'; }
}
 
function logout() {
  token = null; user = null; savedBets = {}; oddsData = {};
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  document.getElementById('appScreen').style.display  = 'none';
  document.getElementById('authScreen').style.display = 'flex';
}
 
function setAuthError(msg) { document.getElementById('authError').textContent = msg; }
 
// ══════════════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════════════
async function showApp() {
  document.getElementById('authScreen').style.display = 'none';
  document.getElementById('appScreen').style.display  = 'block';
  document.getElementById('userBadge').textContent    = `👤 ${user.username}`;
  document.getElementById('oddsBanner').style.display = 'flex';
 
  const dates = [...new Set(matches.map(m => m.date))];
  const dateSelect = document.getElementById('filterDate');
  dateSelect.innerHTML = '<option value="">Todas</option>';
  dates.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    dateSelect.appendChild(o);
  });
 
  document.getElementById('filterGroup').addEventListener('change', render);
  document.getElementById('filterDate').addEventListener('change', render);
  document.getElementById('searchTeam').addEventListener('input', render);
 
  await Promise.all([loadBets(), loadOdds()]);
  render();
}
 
// ══════════════════════════════════════════════════════════════
// ODDS
// ══════════════════════════════════════════════════════════════
async function loadOdds(forceRefresh = false) {
  const btn = document.getElementById('btnRefreshOdds');
  const status = document.getElementById('oddsStatus');
  const dot    = document.getElementById('oddsDot');
  btn.disabled = true;
  status.textContent = 'Cargando cuotas...';
 
  try {
    const url = forceRefresh ? `${API_URL}/api/odds?refresh=1` : `${API_URL}/api/odds`;
    const res  = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
    if (!res.ok) throw new Error('Error al cargar cuotas');
    const data = await res.json();
 
    oddsData = data.odds || {};
 
    const count     = Object.keys(oddsData).length;
    const fetchedAt = data.fetched_at ? new Date(data.fetched_at) : null;
    const timeStr   = fetchedAt ? fetchedAt.toLocaleTimeString('es-VE', {hour:'2-digit', minute:'2-digit'}) : '—';
    const isLive    = data.source === 'api_fresh';
 
    dot.className   = isLive ? 'dot-live' : 'dot-stale';
    status.textContent = count > 0
      ? `${count} partidos con cuotas · actualizado ${timeStr}`
      : 'Cuotas no disponibles aún (el torneo aún no empezó)';
 
  } catch(err) {
    status.textContent = 'No se pudieron cargar las cuotas';
    dot.className = 'dot-stale';
  } finally {
    btn.disabled = false;
  }
}
 
function formatAmerican(odd) {
  if (odd === null || odd === undefined) return '—';
  return odd > 0 ? `+${odd}` : `${odd}`;
}
 
function findOdds(home, away) {
  for (const key of Object.keys(oddsData)) {
    const o = oddsData[key];
    if (o.home === home && o.away === away) return o;
    if (o.home === away && o.away === home) return o;
  }
  return null;
}
 
// ══════════════════════════════════════════════════════════════
// BETS
// ══════════════════════════════════════════════════════════════
async function loadBets() {
  try {
    const res  = await fetch(`${API_URL}/api/bets`, { headers: { 'Authorization': `Bearer ${token}` } });
    if (res.status === 401) { logout(); return; }
    const data = await res.json();
    savedBets = {};
    data.forEach(b => {
      savedBets[`${b.match_id}|${b.bet_type}`] = { id: b.id, amount: b.amount, prediction: b.prediction, raw: b };
    });
    updateBetsBadge();
    renderMisApuestas(data);
  } catch(err) { console.error('Error cargando apuestas:', err); }
}

function updateBetsBadge() {
  const count = Object.keys(savedBets).length;
  const badge = document.getElementById('betsBadge');
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

function switchView(view) {
  const isPartidos = view === 'partidos';
  document.querySelectorAll('.nav-tab').forEach((t, i) =>
    t.classList.toggle('active', isPartidos ? i === 0 : i === 1)
  );
  document.querySelector('.controls').style.display   = isPartidos ? '' : 'none';
  document.querySelector('.card').style.display        = isPartidos ? '' : 'none';
  document.getElementById('countLabel').style.display = isPartidos ? '' : 'none';
  document.getElementById('misApuestasView').style.display = isPartidos ? 'none' : 'block';
}

function renderMisApuestas(bets) {
  const summary = document.getElementById('betsSummary');
  const list    = document.getElementById('betsList');

  if (!bets || bets.length === 0) {
    summary.innerHTML = '';
    list.innerHTML = `
      <div class="no-bets">
        <div class="no-bets-icon">🎯</div>
        <div>Aún no tienes apuestas registradas</div>
        <div style="font-size:0.8rem;margin-top:6px">Ve a la pestaña Partidos y haz clic en un mercado</div>
      </div>`;
    return;
  }

  const total      = bets.length;
  const conMonto   = bets.filter(b => b.amount);
  const montoTotal = conMonto.reduce((s, b) => s + parseFloat(b.amount || 0), 0);
  const partidos   = new Set(bets.map(b => b.match_id)).size;

  summary.innerHTML = `
    <div class="summary-card"><div class="s-val">${total}</div><div class="s-label">Apuestas activas</div></div>
    <div class="summary-card"><div class="s-val">${partidos}</div><div class="s-label">Partidos cubiertos</div></div>
    <div class="summary-card"><div class="s-val">$${montoTotal.toFixed(2)}</div><div class="s-label">Total apostado</div></div>
  `;

  const byMatch = {};
  bets.forEach(b => {
    const key = b.match_id;
    if (!byMatch[key]) byMatch[key] = { home: b.home, away: b.away, date: b.match_date, time: b.match_time, venue: b.venue, bets: [] };
    byMatch[key].bets.push(b);
  });

  list.innerHTML = Object.values(byMatch).map(group => {
    const betsHtml = group.bets.map(b => `
      <div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap">
        <span class="bet-type-pill">${b.bet_type}</span>
        ${b.prediction ? `<span class="bet-prediction">→ ${b.prediction}</span>` : ''}
        ${b.amount ? `<span style="font-family:'DM Mono',monospace;font-size:0.82rem;font-weight:600;color:var(--text);margin-left:auto">$${parseFloat(b.amount).toFixed(2)}</span>` : ''}
        <button class="btn-del-bet" onclick="deleteBetFromList(${b.id}, '${b.match_id}', '${b.bet_type}')">✕</button>
      </div>
    `).join('');

    return `
      <div class="bet-card">
        <div class="bet-card-left">
          <div class="bet-match">${group.home} <span style="color:var(--muted);font-weight:400">vs</span> ${group.away}</div>
          <div class="bet-meta">${group.date} · ${group.time} VET · ${group.venue}</div>
          ${betsHtml}
        </div>
      </div>`;
  }).join('');
}
 
// ══════════════════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════════════════
function matchId(m) {
  return `${m.g}_${m.home}_${m.away}_${m.date}`.replace(/\s+/g,'').replace(/[^a-zA-Z0-9_áéíóúÁÉÍÓÚñÑ]/g,'');
}
 
let activePanel = null;
 
function closeAllPanels() {
  if (activePanel) {
    activePanel.panel.classList.remove('open');
    activePanel.tag.classList.remove('open');
    activePanel = null;
  }
}
 
function toggleMarket(wrapId, tagEl) {
  const wrap  = document.getElementById(wrapId);
  const panel = wrap.querySelector('.market-panel');
  if (activePanel && activePanel.panel === panel) {
    closeAllPanels();
    return;
  }
  closeAllPanels();
  panel.classList.add('open');
  tagEl.classList.add('open');
  activePanel = { panel, tag: tagEl };
}
 
function oddRow(m, betLabel, dotCls, name, val) {
  const mid   = matchId(m);
  const key   = `${mid}|${betLabel}`;
  const saved = savedBets[key];
  const formatted = formatAmerican(val);
  const valCls = val > 0 ? 'positive' : 'negative';
  const savedCls = saved ? ' is-saved' : '';
  const mData = JSON.stringify(m).replace(/"/g, "'");
  const safeName = name.replace(/'/g, "\'");
  return `
    <div class="odd-row${savedCls}" onclick="closeAllPanels();openModal(${mData}, '${betLabel}', '${safeName}')">
      <div class="odd-row-left">
        <span class="odd-dot ${dotCls}"></span>
        <span class="odd-name">${name}</span>
      </div>
      <span class="odd-val-big ${valCls}">${formatted}</span>
    </div>`;
}
 
function buildMarketWrap(m, bet) {
  const mid    = matchId(m);
  const key    = `${mid}|${bet.label}`;
  const saved  = savedBets[key];
  const o      = findOdds(m.home, m.away);
  const wrapId = `mw_${mid}_${bet.label.replace(/[^a-z0-9]/gi, '_')}`;
  const tagCls = `tag-market ${bet.cls}${saved ? ' saved' : ''}`;
  const mData  = JSON.stringify(m).replace(/"/g, "'");
 
  let rows = '';
  if (bet.label === '1X2' && o?.['1x2']) {
    const d = o['1x2'];
    rows += oddRow(m, bet.label, 'home',  m.home,         d.home);
    rows += oddRow(m, bet.label, 'draw',  'Empate',       d.draw);
    rows += oddRow(m, bet.label, 'away',  m.away,         d.away);
  } else if (bet.label === 'Goles +/-' && o?.goals) {
    const d = o.goals;
    rows += oddRow(m, bet.label, 'over',  'Más de 2.5',   d.over25);
    rows += oddRow(m, bet.label, 'under', 'Menos de 2.5', d.under25);
  }
 
  const hasOdds = rows !== '';
  const noOddsHtml = `
    <div style="font-size:0.78rem;color:var(--muted);padding:4px 2px">Cuotas no disponibles aún</div>
    <div style="margin-top:8px;padding-top:7px;border-top:1px solid var(--border)">
      <span style="font-size:0.72rem;cursor:pointer;color:var(--accent)"
            onclick="closeAllPanels();openModal(${mData}, '${bet.label}')">
        + Registrar apuesta sin cuota
      </span>
    </div>`;
 
  return `
    <div class="market-wrap" id="${wrapId}">
      <span class="${tagCls}" onclick="toggleMarket('${wrapId}', this)">
        ${bet.label} <span class="chevron">▼</span>
      </span>
      <div class="market-panel">
        ${hasOdds
          ? `<div class="panel-label">Cuotas americanas</div>${rows}<div class="bet-hint">Clic en una cuota para registrar tu apuesta</div>`
          : noOddsHtml
        }
      </div>
    </div>`;
}
 
function buildTags(m) {
  return `<div style="display:flex;flex-wrap:wrap;gap:6px">${BETS.map(b => buildMarketWrap(m, b)).join('')}</div>`;
}
 
function render() {
  const gFilter = document.getElementById('filterGroup').value;
  const dFilter = document.getElementById('filterDate').value;
  const search  = document.getElementById('searchTeam').value.toLowerCase().trim();
 
  const filtered = matches.filter(m => {
    if (gFilter && m.g !== gFilter) return false;
    if (dFilter && m.date !== dFilter) return false;
    if (search && !m.home.toLowerCase().includes(search) && !m.away.toLowerCase().includes(search)) return false;
    return true;
  });
 
  const tbody   = document.getElementById('tableBody');
  const noRes   = document.getElementById('noResults');
  const countEl = document.getElementById('countLabel');
 
  if (!filtered.length) {
    tbody.innerHTML = ''; noRes.style.display = 'block'; countEl.textContent = ''; return;
  }
  noRes.style.display = 'none';
  countEl.textContent = `${filtered.length} partido${filtered.length!==1?'s':''} mostrado${filtered.length!==1?'s':''}`;
 
  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td data-label="Gr."><span class="grp">${m.g}</span></td>
      <td data-label="Partido" class="match-name">${m.home} <span class="vs">vs</span> ${m.away}</td>
      <td data-label="Hora VET" class="time-cell">${m.time}<br><span class="date-sub">${m.date}</span></td>
      <td data-label="Sede" class="venue">${m.venue}</td>
      <td data-label="Apuestas">${buildTags(m)}</td>
    </tr>
  `).join('');
}
 
// ══════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════
function openModal(m, betType, preSelected) {
  modalMatch = m; modalBetType = betType;
  const mid      = matchId(m);
  const key      = `${mid}|${betType}`;
  const existing = savedBets[key];
  modalBetId     = existing ? existing.id : null;
 
  document.getElementById('modalTitle').textContent = `${betType} — ${m.home} vs ${m.away}`;
  document.getElementById('modalSub').textContent   = `${m.date} · ${m.time} VET · ${m.venue}`;
  document.getElementById('modalAmount').value      = existing?.amount || '';
  document.getElementById('modalPrediction').value  = existing?.prediction || preSelected || '';
  document.getElementById('modalError').textContent = '';
  document.getElementById('btnDeleteBet').style.display = existing ? 'block' : 'none';
 
  const oddsInfo = document.getElementById('modalOddsInfo');
  const o = findOdds(m.home, m.away);
  if (o) {
    let infoHtml = '';
    if (betType === '1X2' && o['1x2'])
      infoHtml = `🏠 <b>${m.home}</b> ${formatAmerican(o['1x2'].home)} &nbsp;·&nbsp; Empate ${formatAmerican(o['1x2'].draw)} &nbsp;·&nbsp; ✈️ <b>${m.away}</b> ${formatAmerican(o['1x2'].away)}`;
    else if (betType === 'Goles +/-' && o.goals)
      infoHtml = `⚽ Más de 2.5: <b>${formatAmerican(o.goals.over25)}</b> &nbsp;·&nbsp; Menos de 2.5: <b>${formatAmerican(o.goals.under25)}</b>`;
 
    if (infoHtml) {
      oddsInfo.innerHTML = `📊 Cuotas de referencia: ${infoHtml}`;
      oddsInfo.style.display = 'block';
    } else {
      oddsInfo.style.display = 'none';
    }
  } else {
    oddsInfo.style.display = 'none';
  }
 
  document.getElementById('modalOverlay').classList.add('open');
}
 
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  modalMatch = modalBetType = modalBetId = null;
}
 
async function saveBet() {
  const amount     = document.getElementById('modalAmount').value;
  const prediction = document.getElementById('modalPrediction').value.trim();
  document.getElementById('modalError').textContent = '';
  const mid = matchId(modalMatch);
  try {
    const res = await fetch(`${API_URL}/api/bets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ match_id:mid, home:modalMatch.home, away:modalMatch.away, match_date:modalMatch.date, match_time:modalMatch.time, venue:modalMatch.venue, grupo:modalMatch.g, bet_type:modalBetType, amount: amount ? parseFloat(amount) : null, prediction: prediction || null }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error al guardar');
    savedBets[`${mid}|${modalBetType}`] = { id: data.id, amount: data.amount, prediction: data.prediction, raw: data };
    closeModal(); render(); showToast('✓ Apuesta guardada');
    updateBetsBadge();
    await loadBets();
  } catch(err) { document.getElementById('modalError').textContent = err.message; }
}
 
async function deleteBet() {
  if (!modalBetId) return;
  try {
    const res = await fetch(`${API_URL}/api/bets/${modalBetId}`, { method:'DELETE', headers:{'Authorization':`Bearer ${token}`} });
    if (!res.ok) throw new Error('Error al eliminar');
    const mid = matchId(modalMatch);
    delete savedBets[`${mid}|${modalBetType}`];
    closeModal(); render(); showToast('Apuesta eliminada');
    updateBetsBadge();
    await loadBets();
  } catch(err) { document.getElementById('modalError').textContent = err.message; }
}
 
async function deleteBetFromList(betId, matchId, betType) {
  if (!confirm('¿Eliminar esta apuesta?')) return;
  try {
    const res = await fetch(`${API_URL}/api/bets/${betId}`, { method:'DELETE', headers:{'Authorization':`Bearer ${token}`} });
    if (!res.ok) throw new Error('Error al eliminar');
    delete savedBets[`${matchId}|${betType}`];
    showToast('Apuesta eliminada');
    updateBetsBadge();
    render();
    await loadBets();
  } catch(err) { showToast('Error al eliminar'); }
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
 
document.addEventListener('click', function(e) {
  if (activePanel && !e.target.closest('.market-wrap')) {
    closeAllPanels();
  }
});
 
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
