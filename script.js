// ══════════════════════════════════════════════════════════════
// CONFIG
// ══════════════════════════════════════════════════════════════
const API_URL = 'https://morocho-production.up.railway.app';

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
let oddsData  = {};

// Ticket: array de selecciones pendientes
// Cada item: { matchKey, match, betType, pickName, oddValue }
let ticketSelections = [];
let ticketType = 'single'; // 'single' | 'combo'

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
  ticketSelections = [];
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  document.getElementById('appScreen').style.display  = 'none';
  document.getElementById('authScreen').style.display = 'flex';
  closeTicketPanel();
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
  const btn    = document.getElementById('btnRefreshOdds');
  const status = document.getElementById('oddsStatus');
  const dot    = document.getElementById('oddsDot');
  btn.disabled = true;
  status.textContent = 'Cargando cuotas...';
  try {
    const url  = forceRefresh ? `${API_URL}/api/odds?refresh=1` : `${API_URL}/api/odds`;
    const res  = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
    if (!res.ok) throw new Error('Error al cargar cuotas');
    const data = await res.json();
    oddsData = data.odds || {};
    const count     = Object.keys(oddsData).length;
    const fetchedAt = data.fetched_at ? new Date(data.fetched_at) : null;
    const timeStr   = fetchedAt ? fetchedAt.toLocaleTimeString('es-VE', {hour:'2-digit', minute:'2-digit'}) : '—';
    const isLive    = data.source === 'api_fresh';
    dot.className      = isLive ? 'dot-live' : 'dot-stale';
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

function americanToDecimal(american) {
  if (american === null || american === undefined) return null;
  return american > 0 ? (american / 100) + 1 : (100 / Math.abs(american)) + 1;
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
// BETS (guardadas en backend)
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
  if (count > 0) { badge.textContent = count; badge.style.display = 'inline-flex'; }
  else { badge.style.display = 'none'; }
}

function switchView(view) {
  const isPartidos = view === 'partidos';
  document.querySelectorAll('.nav-tab').forEach((t, i) =>
    t.classList.toggle('active', isPartidos ? i === 0 : i === 1)
  );
  document.querySelector('.controls').style.display        = isPartidos ? '' : 'none';
  document.querySelector('.card').style.display            = isPartidos ? '' : 'none';
  document.getElementById('countLabel').style.display      = isPartidos ? '' : 'none';
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
        <div style="font-size:0.8rem;margin-top:6px">Ve a la pestaña Partidos y arma tu ticket</div>
      </div>`;
    return;
  }

  // ── Summary ──
  const total      = bets.length;
  const conMonto   = bets.filter(b => b.amount);
  const montoTotal = conMonto.reduce((s, b) => s + parseFloat(b.amount || 0), 0);
  const partidos   = new Set(bets.map(b => b.match_id)).size;
  const gananciaTotal = conMonto.reduce((s, b) => {
    const decimal = b.odd_value != null ? americanToDecimal(b.odd_value) : null;
    return decimal ? s + (parseFloat(b.amount) * decimal - parseFloat(b.amount)) : s;
  }, 0);
  const conNomio = conMonto.filter(b => b.odd_value != null).length;

  summary.innerHTML = `
    <div class="summary-card"><div class="s-val">${total}</div><div class="s-label">Apuestas activas</div></div>
    <div class="summary-card"><div class="s-val">${partidos}</div><div class="s-label">Partidos cubiertos</div></div>
    <div class="summary-card"><div class="s-val">$${montoTotal.toFixed(2)}</div><div class="s-label">Total apostado</div></div>
    ${conNomio > 0 ? `<div class="summary-card" style="border-color:var(--green-border);background:var(--green-bg)"><div class="s-val" style="color:var(--green-text);">+$${gananciaTotal.toFixed(2)}</div><div class="s-label" style="color:var(--green-text);">Ganancia potencial</div></div>` : ''}
  `;

  // ── Separar combinadas (agrupadas por combo_ticket_id) de simples ──
  const combos  = {}; // combo_ticket_id → { bets[], amount }
  const singles = {}; // match_id        → { home, away, date, time, venue, bets[] }

  bets.forEach(b => {
    if (b.ticket_type === 'combo' && b.combo_ticket_id) {
      if (!combos[b.combo_ticket_id]) combos[b.combo_ticket_id] = { bets: [], amount: b.amount };
      combos[b.combo_ticket_id].bets.push(b);
    } else {
      const key = b.match_id;
      if (!singles[key]) singles[key] = { home: b.home, away: b.away, date: b.match_date, time: b.match_time, venue: b.venue, bets: [] };
      singles[key].bets.push(b);
    }
  });

  let html = '';

  // ── Renderizar combinadas ──
  for (const [comboId, group] of Object.entries(combos)) {
    const amount = group.amount ? parseFloat(group.amount) : null;
    const withOdds = group.bets.filter(b => b.odd_value != null);
    const combinedDecimal = withOdds.length > 1
      ? withOdds.reduce((acc, b) => acc * americanToDecimal(b.odd_value), 1)
      : null;
    const retorno  = (combinedDecimal && amount) ? amount * combinedDecimal : null;
    const ganancia = retorno ? retorno - amount : null;
    const combinedAmerican = combinedDecimal
      ? (combinedDecimal >= 2 ? Math.round((combinedDecimal - 1) * 100) : Math.round(-100 / (combinedDecimal - 1)))
      : null;

    const selHtml = group.bets.map(b => `
      <div style="display:flex;align-items:center;gap:8px;margin-top:5px;flex-wrap:wrap;padding-left:8px;border-left:2px solid var(--accent)">
        <span style="font-size:0.75rem;color:var(--muted)">${b.home} vs ${b.away}</span>
        <span class="bet-type-pill">${b.bet_type}</span>
        ${b.prediction ? `<span class="bet-prediction">→ ${b.prediction}</span>` : ''}
        ${b.odd_value != null ? `<span style="font-size:0.75rem;color:var(--muted)">${formatAmerican(b.odd_value)}</span>` : ''}
        <button class="btn-del-bet" onclick="deleteBetFromList(${b.id}, '${b.match_id}', '${b.bet_type}')">✕</button>
      </div>`).join('');

    html += `
      <div class="bet-card" style="border-left:3px solid var(--accent)">
        <div class="bet-card-left">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:0.7rem;font-weight:600;letter-spacing:0.05em;background:var(--accent);color:#fff;border-radius:6px;padding:2px 8px;">COMBINADA</span>
            <span style="font-size:0.8rem;color:var(--muted)">${group.bets.length} selecciones</span>
            ${combinedAmerican != null ? `<span style="font-family:'DM Mono',monospace;font-size:0.82rem;font-weight:600">${formatAmerican(combinedAmerican)} <span style="font-size:0.7rem;font-weight:400;color:var(--muted)">(×${combinedDecimal.toFixed(2)})</span></span>` : ''}
          </div>
          ${selHtml}
          <div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap">
            ${amount ? `<span style="font-family:'DM Mono',monospace;font-size:0.82rem;font-weight:600">$${amount.toFixed(2)}</span>` : ''}
            ${ganancia != null ? `
              <span style="display:inline-flex;align-items:center;gap:4px;background:var(--green-bg);border:1px solid var(--green-border);border-radius:8px;padding:2px 9px;">
                <span style="font-size:0.68rem;color:var(--green-text);">🏆 +$${ganancia.toFixed(2)}</span>
                <span style="font-size:0.62rem;color:var(--green-text);opacity:0.7;">· retorno $${retorno.toFixed(2)}</span>
              </span>` : ''}
          </div>
        </div>
      </div>`;
  }

  // ── Renderizar simples ──
  for (const group of Object.values(singles)) {
    const betsHtml = group.bets.map(b => {
      const decimal  = b.odd_value != null ? americanToDecimal(b.odd_value) : null;
      const ganancia = decimal && b.amount ? parseFloat(b.amount) * decimal - parseFloat(b.amount) : null;
      const retorno  = decimal && b.amount ? parseFloat(b.amount) * decimal : null;
      const winHtml  = ganancia !== null ? `
        <span style="display:inline-flex;align-items:center;gap:4px;background:var(--green-bg);border:1px solid var(--green-border);border-radius:8px;padding:2px 9px;">
          <span style="font-size:0.68rem;color:var(--green-text);">🏆 +$${ganancia.toFixed(2)}</span>
          <span style="font-size:0.62rem;color:var(--green-text);opacity:0.7;">· retorno $${retorno.toFixed(2)}</span>
        </span>` : '';
      return `
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap">
          <span class="bet-type-pill">${b.bet_type}</span>
          ${b.prediction ? `<span class="bet-prediction">→ ${b.prediction}</span>` : ''}
          ${b.amount ? `<span style="font-family:'DM Mono',monospace;font-size:0.82rem;font-weight:600;color:var(--text);">$${parseFloat(b.amount).toFixed(2)}</span>` : ''}
          ${winHtml}
          <button class="btn-del-bet" onclick="deleteBetFromList(${b.id}, '${b.match_id}', '${b.bet_type}')">✕</button>
        </div>`;
    }).join('');

    html += `
      <div class="bet-card">
        <div class="bet-card-left">
          <div class="bet-match">${group.home} <span style="color:var(--muted);font-weight:400">vs</span> ${group.away}</div>
          <div class="bet-meta">${group.date} · ${group.time} VET · ${group.venue}</div>
          ${betsHtml}
        </div>
      </div>`;
  }

  list.innerHTML = html;
}

async function deleteBetFromList(betId, mId, betType) {
  if (!confirm('¿Eliminar esta apuesta?')) return;
  try {
    const res = await fetch(`${API_URL}/api/bets/${betId}`, { method:'DELETE', headers:{'Authorization':`Bearer ${token}`} });
    if (!res.ok) throw new Error('Error al eliminar');
    delete savedBets[`${mId}|${betType}`];
    showToast('Apuesta eliminada');
    updateBetsBadge();
    render();
    await loadBets();
  } catch(err) { showToast('Error al eliminar'); }
}

// ══════════════════════════════════════════════════════════════
// RENDER TABLA
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
  if (activePanel && activePanel.panel === panel) { closeAllPanels(); return; }
  closeAllPanels();
  panel.classList.add('open');
  tagEl.classList.add('open');
  activePanel = { panel, tag: tagEl };
}

function oddRow(m, betLabel, dotCls, name, val) {
  const mid        = matchId(m);
  const key        = `${mid}|${betLabel}`;
  const inTicket   = ticketSelections.some(s => s.matchKey === key);
  const savedB     = savedBets[key];
  const formatted  = formatAmerican(val);
  const valCls     = val > 0 ? 'positive' : 'negative';
  const inTicketCls = inTicket ? ' in-ticket' : '';
  const savedCls    = savedB  ? ' is-saved'   : '';
  const mData       = JSON.stringify(m).replace(/"/g, "'");
  const safeName    = name.replace(/'/g, "\\'");
  return `
    <div class="odd-row${inTicketCls}${savedCls}" id="oddrow_${mid}_${betLabel.replace(/[^a-z0-9]/gi,'_')}_${name.replace(/[^a-z0-9]/gi,'_')}"
         onclick="closeAllPanels();toggleTicketSelection(${mData}, '${betLabel}', '${safeName}', ${val !== null && val !== undefined ? val : 'null'})">
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

  const hasOdds   = rows !== '';
  const noOddsHtml = `
    <div style="font-size:0.78rem;color:var(--muted);padding:4px 2px">Cuotas no disponibles aún</div>
    <div style="margin-top:8px;padding-top:7px;border-top:1px solid var(--border)">
      <span style="font-size:0.72rem;cursor:pointer;color:var(--accent)"
            onclick="closeAllPanels();addTicketNoOdds(${mData}, '${bet.label}')">
        + Añadir al ticket sin cuota
      </span>
    </div>`;

  return `
    <div class="market-wrap" id="${wrapId}">
      <span class="${tagCls}" onclick="toggleMarket('${wrapId}', this)">
        ${bet.label} <span class="chevron">▼</span>
      </span>
      <div class="market-panel">
        ${hasOdds
          ? `<div class="panel-label">Cuotas americanas · clic para añadir al ticket</div>${rows}<div class="bet-hint">Puedes añadir varias selecciones</div>`
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
// TICKET DE APUESTA
// ══════════════════════════════════════════════════════════════
function setTicketType(type) {
  ticketType = type;
  document.getElementById('btnSingle').classList.toggle('active', type === 'single');
  document.getElementById('btnCombo').classList.toggle('active', type === 'combo');
  renderTicket();
}

function toggleTicketSelection(m, betType, pickName, oddValue) {
  const key = `${matchId(m)}|${betType}`;

  // Si ya está en el ticket, la elimina (toggle)
  const idx = ticketSelections.findIndex(s => s.matchKey === key && s.pickName === pickName);
  if (idx !== -1) {
    ticketSelections.splice(idx, 1);
    renderTicket();
    render();
    return;
  }

  // Si ya hay otra selección del mismo partido+mercado, la reemplaza
  const conflictIdx = ticketSelections.findIndex(s => s.matchKey === key);
  if (conflictIdx !== -1) {
    ticketSelections.splice(conflictIdx, 1);
  }

  ticketSelections.push({ matchKey: key, match: m, betType, pickName, oddValue });
  openTicketPanel();
  renderTicket();
  render();
}

function addTicketNoOdds(m, betType) {
  const key = `${matchId(m)}|${betType}`;
  const conflictIdx = ticketSelections.findIndex(s => s.matchKey === key);
  if (conflictIdx !== -1) ticketSelections.splice(conflictIdx, 1);
  ticketSelections.push({ matchKey: key, match: m, betType, pickName: '', oddValue: null });
  openTicketPanel();
  renderTicket();
  render();
}

function removeFromTicket(idx) {
  ticketSelections.splice(idx, 1);
  renderTicket();
  render();
}

function clearTicket() {
  ticketSelections = [];
  renderTicket();
  render();
  if (window.innerWidth <= 900) closeTicketPanel();
}

function renderTicket() {
  const count   = ticketSelections.length;
  const selDiv  = document.getElementById('ticketSelections');
  const footer  = document.getElementById('ticketFooter');
  const countEl = document.getElementById('ticketCount');
  const fabCount= document.getElementById('ticketFabCount');

  countEl.textContent  = count;
  fabCount.textContent = count;

  // FAB móvil: mostrar sólo si hay selecciones
  const fab = document.getElementById('ticketFab');
  fab.style.display = count > 0 && window.innerWidth <= 900 ? 'flex' : 'none';

  if (count === 0) {
    selDiv.innerHTML = '<div class="ticket-empty"><span>Haz clic en una cuota para añadirla al ticket</span></div>';
    footer.style.display = 'none';
    return;
  }

  // Detectar conflictos (mismo partido en combinada)
  const matchCounts = {};
  ticketSelections.forEach(s => {
    const mid = s.match ? matchId(s.match) : '';
    matchCounts[mid] = (matchCounts[mid] || 0) + 1;
  });

  selDiv.innerHTML = ticketSelections.map((s, i) => {
    const mid       = s.match ? matchId(s.match) : '';
    const conflict  = ticketType === 'combo' && matchCounts[mid] > 1;
    const oddFmt    = s.oddValue !== null ? formatAmerican(s.oddValue) : '—';
    const oddCls    = s.oddValue > 0 ? '' : ' neg';
    return `
      <div class="ticket-sel-item${conflict ? ' has-conflict' : ''}">
        <div class="ticket-sel-match">${s.match.home} vs ${s.match.away}</div>
        <div class="ticket-sel-type">${s.betType} · ${s.match.date} ${s.match.time}</div>
        ${s.pickName ? `<span class="ticket-sel-pick">${s.pickName}</span>` : ''}
        ${s.oddValue !== null ? `<span class="ticket-sel-odd${oddCls}">${oddFmt}</span>` : ''}
        ${conflict ? `<div class="ticket-conflict-msg">⚠️ Mismo partido en combinada</div>` : ''}
        <button class="ticket-sel-remove" onclick="removeFromTicket(${i})">✕</button>
      </div>`;
  }).join('');

  footer.style.display = 'flex';

  // Fila de cuota combinada o individual
  const oddsRow = document.getElementById('ticketOddsRow');
  const withOdds = ticketSelections.filter(s => s.oddValue !== null);

  if (ticketType === 'combo' && withOdds.length > 1) {
    const combinedDecimal = withOdds.reduce((acc, s) => acc * americanToDecimal(s.oddValue), 1);
    const combinedAmerican = combinedDecimal >= 2
      ? Math.round((combinedDecimal - 1) * 100)
      : Math.round(-100 / (combinedDecimal - 1));
    oddsRow.innerHTML = `
      <span>${withOdds.length} sel. combinadas</span>
      <span class="ticket-odds-combined">${formatAmerican(combinedAmerican)} <span style="font-size:0.7rem;font-weight:400;color:var(--muted)">(×${combinedDecimal.toFixed(2)})</span></span>`;
  } else if (ticketType === 'single' && withOdds.length > 0) {
    oddsRow.innerHTML = `<span style="font-size:0.72rem;color:var(--muted)">${count} apuesta${count>1?'s':''} simple${count>1?'s':''} · cuota individual por selección</span>`;
  } else {
    oddsRow.innerHTML = `<span style="font-size:0.72rem;color:var(--muted)">${count} selección${count>1?'es':''}</span>`;
  }

  updateTicketCalc();
  document.getElementById('ticketError').textContent = '';
}

function updateTicketCalc() {
  const amountRaw = document.getElementById('ticketAmount').value;
  const amount    = parseFloat(amountRaw);
  const calcDiv   = document.getElementById('ticketCalc');

  if (!amount || isNaN(amount) || amount <= 0 || ticketSelections.length === 0) {
    calcDiv.style.display = 'none';
    return;
  }

  const withOdds = ticketSelections.filter(s => s.oddValue !== null);

  if (withOdds.length === 0) {
    calcDiv.style.display = 'none';
    return;
  }

  let ganancia, retorno;

  if (ticketType === 'combo' && withOdds.length > 1) {
    const combinedDecimal = withOdds.reduce((acc, s) => acc * americanToDecimal(s.oddValue), 1);
    retorno  = amount * combinedDecimal;
    ganancia = retorno - amount;
  } else {
    // Simple: suma de ganancias individuales (cada selección con el monto completo)
    retorno  = withOdds.reduce((s, sel) => s + (amount * americanToDecimal(sel.oddValue)), 0);
    ganancia = retorno - (amount * withOdds.length);
    retorno  = retorno; // retorno por todas
  }

  document.getElementById('ticketCalcWin').textContent   = `+$${ganancia.toFixed(2)}`;
  document.getElementById('ticketCalcTotal').textContent = `Retorno total: $${retorno.toFixed(2)}`;
  calcDiv.style.display = 'flex';
}

async function saveTicket() {
  const amount = parseFloat(document.getElementById('ticketAmount').value) || null;
  const errEl  = document.getElementById('ticketError');
  errEl.textContent = '';

  if (ticketSelections.length === 0) return;

  const btn = document.querySelector('.ticket-save-btn');
  btn.disabled = true;
  btn.textContent = 'Guardando...';

  try {
    if (ticketType === 'combo' && ticketSelections.length > 1) {
      // ── Apuesta combinada: un solo request con todas las selecciones ──
      const selections = ticketSelections.map(s => ({
        match_id:   matchId(s.match),
        home:       s.match.home,
        away:       s.match.away,
        match_date: s.match.date,
        match_time: s.match.time,
        venue:      s.match.venue,
        grupo:      s.match.g,
        bet_type:   s.betType,
        prediction: s.pickName || null,
        odd_value:  s.oddValue,
      }));

      const res = await fetch(`${API_URL}/api/bets/combo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ amount, selections }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al guardar combinada');

      // Registrar en savedBets cada selección devuelta
      data.bets.forEach(b => {
        savedBets[`${b.match_id}|${b.bet_type}`] = { id: b.id, amount: b.amount, prediction: b.prediction, raw: b };
      });
      showToast(`✓ Combinada guardada (${ticketSelections.length} selecciones)`);

    } else {
      // ── Apuestas simples: un request por selección ──
      let saved = 0, errors = 0;
      for (const s of ticketSelections) {
        const mid = matchId(s.match);
        try {
          const res = await fetch(`${API_URL}/api/bets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({
              match_id:    mid,
              home:        s.match.home,
              away:        s.match.away,
              match_date:  s.match.date,
              match_time:  s.match.time,
              venue:       s.match.venue,
              grupo:       s.match.g,
              bet_type:    s.betType,
              amount:      amount,
              prediction:  s.pickName || null,
              odd_value:   s.oddValue,
            }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || 'Error');
          savedBets[`${mid}|${s.betType}`] = { id: data.id, amount: data.amount, prediction: data.prediction, raw: data };
          saved++;
        } catch(e) { errors++; }
      }
      if (saved > 0) showToast(`✓ ${saved} apuesta${saved>1?'s':''} guardada${saved>1?'s':''}`);
      if (errors > 0) errEl.textContent = `${errors} apuesta${errors>1?'s':''} no se pudo${errors>1?'n':''} guardar.`;
    }

    ticketSelections = [];
    renderTicket();
    render();
    updateBetsBadge();
    await loadBets();
    if (window.innerWidth <= 900) closeTicketPanel();

  } catch(e) {
    errEl.textContent = e.message;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Guardar apuesta';
  }
}

// Panel open/close
function openTicketPanel() {
  document.getElementById('ticketPanel').classList.add('open');
  document.getElementById('appScreen').classList.add('ticket-open');
}
function closeTicketPanel() {
  document.getElementById('ticketPanel').classList.remove('open');
  document.getElementById('appScreen').classList.remove('ticket-open');
}
function toggleTicketPanel() {
  const panel = document.getElementById('ticketPanel');
  if (panel.classList.contains('open')) closeTicketPanel();
  else openTicketPanel();
}

// ══════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════
document.addEventListener('click', function(e) {
  if (activePanel && !e.target.closest('.market-wrap')) closeAllPanels();
});

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
