'use strict';

// Presentation-only dashboard. No visitor tracking or authentication is enabled.
// Future integration should enforce the owner allowlist on the server as well.
const games = [
  { name: 'Red Experience', project: 'PROJECT 01', color: '#ff5969', anchor: 'games', weight: .4, steam: true, trailer: true },
  { name: 'Orange Wiki', project: 'PROJECT 02', color: '#f18a3a', anchor: 'orangewiki', weight: .21, steam: true, trailer: false },
  { name: 'Yellow Terminal', project: 'PROJECT 03', color: '#f2d447', anchor: 'yellowterminal', weight: .27, steam: true, trailer: true },
  { name: 'Green Magician', project: 'PROJECT 04', color: '#79d99b', anchor: 'greenmagician', weight: .12, steam: false, trailer: false }
];
const period = document.querySelector('#period');
const demo = document.querySelector('#demo-mode');
const exportButton = document.querySelector('#export');
const number = new Intl.NumberFormat('ko-KR');
const formatDate = (date) => date.toISOString().slice(0, 10);
let snapshot;
let toastTimer;

function demoData(days) {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const daily = Array.from({ length: days }, (_, index) => {
    const date = new Date(today - (days - 1 - index) * 86400000);
    const visitors = Math.round(42 + (index / days) * 43 + (Math.sin(index * .73) + 1) * 19 + (index % 7 === 4 ? 33 : 0));
    return { date: formatDate(date), visitors };
  });
  const sessions = Math.round(daily.reduce((sum, row) => sum + row.visitors, 0) * 1.18);
  const views = Math.round(sessions * 2.34);
  const gameViews = Math.round(views * .64);
  const rows = games.map(game => ({ ...game, views: Math.round(gameViews * game.weight), steamClicks: game.steam ? Math.round(gameViews * game.weight * .16) : null, trailerClicks: game.trailer ? Math.round(gameViews * game.weight * .09) : null }));
  const steam = rows.reduce((sum, row) => sum + (row.steamClicks || 0), 0);
  const youtube = rows.reduce((sum, row) => sum + (row.trailerClicks || 0), 0);
  const community = Math.round(sessions * .026);
  return { daily, rows, sessions, views, visitors: Math.round(sessions * .71), clicks: steam + youtube + community, outbound: [steam, youtube, community] };
}

function breakdown(selector, labels, values, colors, percentages = false) {
  const target = document.querySelector(selector);
  const total = values ? values.reduce((sum, value) => sum + value, 0) : 0;
  target.replaceChildren();
  labels.forEach((label, index) => {
    const value = values ? values[index] : null;
    const proportion = total ? Math.round(value / total * 100) : 0;
    const item = document.createElement('div');
    const heading = document.createElement('div');
    heading.className = 'breakdown-label';
    const name = document.createElement('span');
    name.textContent = label;
    const count = document.createElement('strong');
    count.textContent = value === null ? '—' : percentages ? `${proportion}%` : number.format(value);
    if (value !== null && !percentages) {
      const share = document.createElement('small');
      share.textContent = `${proportion}%`;
      count.append(share);
    }
    heading.append(name, count);
    const track = document.createElement('div');
    track.className = 'track';
    const fill = document.createElement('span');
    fill.style.setProperty('--width', `${proportion}%`);
    fill.style.setProperty('--bar-color', colors[index % colors.length]);
    track.append(fill);
    item.append(heading, track);
    target.append(item);
  });
}

function render() {
  const days = Number(period.value);
  snapshot = demo.checked ? demoData(days) : null;
  const dates = snapshot || demoData(days); // Only date labels are used in disconnected mode.
  document.querySelector('#date-range').textContent = `${dates.daily[0].date} — ${dates.daily.at(-1).date}`;
  document.querySelector('[data-chart-start]').textContent = dates.daily[0].date.slice(5).replace('-', '.');
  document.querySelector('[data-chart-end]').textContent = dates.daily.at(-1).date.slice(5).replace('-', '.');
  const status = document.querySelector('#data-status');
  status.textContent = snapshot ? '예시 데이터 · 실제 방문 기록이 아닙니다. 화면 구성을 확인하기 위한 샘플입니다.' : '통계 서비스 연결을 기다리고 있습니다.';
  status.classList.toggle('is-demo', Boolean(snapshot));
  exportButton.disabled = !snapshot;
  document.querySelectorAll('[data-metric]').forEach(el => { el.textContent = snapshot ? number.format(snapshot[el.dataset.metric]) : '—'; });

  const chart = document.querySelector('#trend-chart');
  chart.replaceChildren();
  if (snapshot) {
    const max = Math.ceil(Math.max(...snapshot.daily.map(row => row.visitors)) / 50) * 50;
    document.querySelector('[data-axis-max]').textContent = max;
    document.querySelector('[data-axis-mid]').textContent = max / 2;
    chart.setAttribute('aria-label', `예시 데이터: 최근 ${days}일 일별 방문자, 최소 ${Math.min(...snapshot.daily.map(row => row.visitors))}명, 최대 ${Math.max(...snapshot.daily.map(row => row.visitors))}명`);
    snapshot.daily.forEach(row => {
      const bar = document.createElement('div');
      bar.className = 'trend-bar';
      bar.style.setProperty('--height', `${row.visitors / max * 100}%`);
      bar.title = `${row.date}: ${number.format(row.visitors)}명 (예시)`;
      chart.append(bar);
    });
  } else {
    document.querySelector('[data-axis-max]').textContent = '—';
    document.querySelector('[data-axis-mid]').textContent = '—';
    chart.setAttribute('aria-label', '방문 통계 미연결');
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = '<span aria-hidden="true">⌁</span><strong>아직 방문 기록이 없습니다</strong><p>통계를 연결하면 방문 추이가 표시됩니다.</p>';
    chart.append(empty);
  }

  breakdown('#outbound-list', ['Steam 상점 · 데모', 'YouTube 트레일러', '커뮤니티 · 소셜'], snapshot?.outbound, ['#ff697c', '#b097d9', '#8aaec2']);
  const base = snapshot?.sessions;
  breakdown('#source-list', ['직접 방문', '검색', '소셜 · 커뮤니티', '기타 추천'], snapshot ? [.36, .28, .24, .12].map(weight => Math.round(base * weight)) : null, ['#a3b6d7']);
  breakdown('#device-list', ['데스크톱', '모바일', '태블릿'], snapshot ? [.66, .31, .03].map(weight => Math.round(base * weight)) : null, ['#79d99b'], true);
  breakdown('#language-list', ['한국어', 'English', '日本語', '简体中文', '繁體中文', 'Русский'], snapshot ? [.57, .23, .09, .055, .035, .02].map(weight => Math.round(base * weight)) : null, ['#d9bf8e'], true);

  const tbody = document.querySelector('#game-table');
  tbody.replaceChildren();
  const totalGameViews = snapshot?.rows.reduce((sum, game) => sum + game.views, 0);
  (snapshot?.rows || games).forEach(game => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const container = document.createElement('div');
    container.className = 'game-name';
    const mark = document.createElement('span');
    mark.className = 'game-mark';
    mark.style.setProperty('--game-color', game.color);
    mark.setAttribute('aria-hidden', 'true');
    const link = document.createElement('a');
    link.href = `index.html#${game.anchor}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = game.name;
    const project = document.createElement('small');
    project.textContent = game.project;
    link.append(project);
    container.append(mark, link);
    name.append(container);
    row.append(name);
    [snapshot ? number.format(game.views) : '—', game.steam ? (snapshot ? number.format(game.steamClicks) : '—') : '해당 없음', game.trailer ? (snapshot ? number.format(game.trailerClicks) : '—') : '해당 없음'].forEach(text => {
      const cell = document.createElement('td');
      cell.textContent = text;
      if (text === '해당 없음') cell.className = 'unavailable';
      row.append(cell);
    });
    const shareCell = document.createElement('td');
    const proportion = snapshot ? Math.round(game.views / totalGameViews * 100) : 0;
    shareCell.innerHTML = `<div class="share"><div class="track"><span style="--width:${proportion}%;--bar-color:${game.color}"></span></div><span>${snapshot ? `${proportion}%` : '—'}</span></div>`;
    row.append(shareCell);
    tbody.append(row);
  });
}

demo.addEventListener('change', render);
period.addEventListener('change', render);
exportButton.addEventListener('click', () => {
  if (!snapshot) return;
  const csv = ['데이터 유형,예시 데이터 (실제 통계 아님)', '날짜,예시 방문자 수', ...snapshot.daily.map(row => `${row.date},${row.visitors}`)].join('\r\n');
  const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `clusion-example-visitors-${period.value}days.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const toast = document.querySelector('#toast');
  toast.textContent = '예시 방문 데이터를 CSV로 내보냈습니다.';
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
});

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#admin-navigation');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.sidebar nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const sections = [...document.querySelectorAll('main > section')];
function activeSection() {
  let active = sections[0].id;
  sections.forEach(section => { if (section.getBoundingClientRect().top < 160) active = section.id; });
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    const selected = link.hash === `#${active}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', activeSection, { passive: true });
document.querySelector('#year').textContent = new Date().getFullYear();
render();
activeSection();
