const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languageButton = document.querySelector('[data-language-button]');

const translations = {
  ko: {
    navGames: 'GAMES', navOrangeWiki: 'ORANGEWIKI', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games는 하나의 현실을 넘어서는 이야기와 선택의 경험을 만드는 1인 게임 스튜디오입니다.',
    viewGame: '게임 보기', steamWishlist: 'Steam에서 찜하기',
    genreLabel: '장르', genreValue: '미스터리 · 비주얼 노벨 · 퍼즐', platformLabel: '플랫폼', statusLabel: '상태', statusValue: '개발 중',
    heroCardSmall: '미스터리 · 탐색 · 비주얼 노벨', heroOrangeSmall: 'Red Experience보다 먼저 공개 예정', featuredEyebrow: 'FEATURED GAME',
    gameLead: '정체불명의 공간에서 깨어난 홍수연. 다른 참가자들을 견제하며 납치 사건의 진실을 밝혀내야 합니다.',
    gameBody: '《Red Experience》는 탐색과 대화, 퍼즐을 통해 의문의 실험과 참가자들의 과거를 추적하는 미스터리 비주얼 노벨입니다. 수집한 단서와 플레이어의 선택은 새로운 정보와 이야기의 분기를 만들어냅니다.',
    feature1: '선택에 따라 변화하는 분기형 서사', feature2: '공간을 조사하고 단서를 조합하는 탐색', feature3: '폐쇄된 공간에서 일어나는 미스터리', steamPage: 'Steam 페이지',
    orangeWikiStatus: 'IN DEVELOPMENT', orangeWikiEyebrow: 'PROJECT 02', orangeWikiLead: '이름 없는 역에서 시작되는 새로운 미스터리.',
    orangeWikiBody: '낯선 지하철역에 홀로 남겨진 뒤, 비어 있는 역명과 멈춰 선 열차의 흔적을 따라가며 이곳에 숨은 이야기를 조사하는 탐색 어드벤처를 개발하고 있습니다.',
    orangeWikiFeature1: '낯선 지하철역을 조사하는 탐색', orangeWikiFeature2: '비어 있는 역명과 열차의 흔적을 추적', orangeWikiFeature3: '단서를 따라 드러나는 새로운 미스터리',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '작지만 선명한 세계를 만듭니다.',
    aboutLead: 'Clusion Games는 이야기를 중심으로 한 게임을 개발하는 1인 인디 게임 스튜디오입니다.',
    aboutBody1: '《OrangeWiki》와 《Red Experience》를 통해 플레이어가 직접 추리하고 선택하며 세계에 개입할 수 있는 작품을 제작하고 있습니다.',
    aboutBody2: '장르의 경계보다 경험의 밀도를 중요하게 생각하며, 기억에 남는 캐릭터와 설정, 그리고 게임만이 전달할 수 있는 서사를 목표로 합니다.',
    value1Title: 'STORY', value1Body: '이야기와 인물에서 시작합니다.', value2Title: 'CHOICE', value2Body: '플레이어의 판단을 존중합니다.', value3Title: 'EXPERIENCE', value3Body: '게임 이후에도 남는 감정을 만듭니다.',
    photosEyebrow: 'PHOTOS', photosTitle: '사진으로 남긴 순간들',
    newsTitle: '개발 소식', newsOrangeTitle: 'OrangeWiki 개발 중', newsOrangeBody: '《OrangeWiki》는 Red Experience보다 먼저 선보일 미스터리 탐색 게임입니다.', newsDemoTitle: 'Red Experience 데모 공개', newsDemoBody: '《Red Experience》의 데모를 Steam에서 공개했습니다.', newsDemoLink: 'Steam에서 데모 플레이', newsBicTitle: 'BIC 2026 루키부문 선정', newsBicBody: '《Red Experience》가 BIC 2026 루키부문 선정작에 이름을 올렸습니다.', newsBicLink: 'BIC 공식 사이트', news1Title: 'Clusion Games 공식 사이트 공개', news1Body: '게임과 개발 소식을 한곳에서 전해드릴 예정입니다.', news2Title: 'Red Experience 개발 진행 중', news2Body: '미스터리 비주얼 노벨을 2027년 초 출시 목표로 개발 중입니다.',
    contactEyebrow: 'CONTACT', contactTitle: '새로운 현실은<br />한 통의 메시지에서 시작될 수 있습니다.', contactBody: '게임, 버그, 미디어 및 비즈니스 관련 문의를 보내주세요.', contactNote: ''
  },
  en: {
    navGames: 'GAMES', navOrangeWiki: 'ORANGEWIKI', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games is a solo independent studio creating story-driven games built around choice, mystery, and realities beyond the ordinary.',
    viewGame: 'VIEW GAME', steamWishlist: 'WISHLIST ON STEAM',
    genreLabel: 'GENRE', genreValue: 'Mystery · Visual Novel · Puzzle', platformLabel: 'PLATFORM', statusLabel: 'STATUS', statusValue: 'IN DEVELOPMENT',
    heroCardSmall: 'MYSTERY · INVESTIGATION · VISUAL NOVEL', heroOrangeSmall: 'Planned ahead of Red Experience', featuredEyebrow: 'FEATURED GAME',
    gameLead: 'Awakening in a mysterious space, Hong Suyeon must uncover the truth behind the kidnapping while keeping the other participants in check.',
    gameBody: '《Red Experience》 is a mystery visual novel where you trace an enigmatic experiment and the participants\' pasts through exploration, dialogue, and puzzles. The clues you collect and the choices you make will unlock new information and create branching storylines.',
    feature1: 'A branching narrative shaped by player choices', feature2: 'Environmental investigation and clue deduction', feature3: 'A mystery set in a confined space', steamPage: 'STEAM PAGE',
    orangeWikiStatus: 'IN DEVELOPMENT', orangeWikiEyebrow: 'PROJECT 02', orangeWikiLead: 'A new mystery begins at a station without a name.',
    orangeWikiBody: 'In this exploration adventure in development, you are left alone in an unfamiliar subway station, following the traces of a blank station name and a train that never arrives to uncover what happened here.',
    orangeWikiFeature1: 'Explore an unfamiliar underground station', orangeWikiFeature2: 'Trace a blank station name and the train\'s clues', orangeWikiFeature3: 'Uncover a new mystery one clue at a time',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: 'Small studio. Distinct worlds.',
    aboutLead: 'Clusion Games is a solo independent studio focused on story-driven games.',
    aboutBody1: 'Through OrangeWiki and Red Experience, the studio creates games where players investigate, make choices, and actively intervene in the world.',
    aboutBody2: 'Rather than staying within one genre, Clusion Games focuses on dense, memorable experiences built from characters, settings, and stories only games can tell.',
    value1Title: 'STORY', value1Body: 'Every project begins with story and character.', value2Title: 'CHOICE', value2Body: 'Player decisions deserve meaningful consequences.', value3Title: 'EXPERIENCE', value3Body: 'We create emotions that remain after the game ends.',
    photosEyebrow: 'PHOTOS', photosTitle: 'Moments in pictures',
    newsTitle: 'DEVELOPMENT NEWS', newsOrangeTitle: 'OrangeWiki is in development', newsOrangeBody: '《OrangeWiki》 is a mystery exploration game planned to arrive ahead of Red Experience.', newsDemoTitle: 'Red Experience demo released', newsDemoBody: 'The 《Red Experience》 demo is now available on Steam.', newsDemoLink: 'PLAY THE DEMO ON STEAM', newsBicTitle: 'Selected for the BIC 2026 Rookie Division', newsBicBody: '《Red Experience》 has been selected for the BIC 2026 Rookie Division.', newsBicLink: 'BIC OFFICIAL WEBSITE', news1Title: 'Clusion Games official website launched', news1Body: 'Game information and development news will be shared here.', news2Title: 'Red Experience is in development', news2Body: 'A mystery visual novel is currently in development, with a targeted release in early 2027.',
    contactEyebrow: 'CONTACT', contactTitle: 'A new reality can begin<br />with a single message.', contactBody: 'For game, bugs, media, and business inquiries, please get in touch.', contactNote: ''
  }
};

let currentLanguage = localStorage.getItem('clusion-language') || 'ko';

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageButton.textContent = language === 'ko' ? 'EN' : 'KR';
  languageButton.setAttribute('aria-label', language === 'ko' ? '영어로 전환' : 'Switch to Korean');
  localStorage.setItem('clusion-language', language);
}

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'ko' ? 'en' : 'ko'));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
setLanguage(currentLanguage);

