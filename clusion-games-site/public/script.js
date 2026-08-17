const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languageSelect = document.querySelector('[data-language-select]');

const translations = {
  ko: {
    navGames: 'GAMES', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games는 하나의 현실을 넘어서는 이야기와 선택의 경험을 만드는 1인 게임 스튜디오입니다.',
    viewGame: '게임 보기', steamWishlist: 'Steam에서 찜하기',
    genreLabel: '장르', genreValue: '미스터리 · 비주얼 노벨 · 퍼즐', platformLabel: '플랫폼', statusLabel: '상태', statusValue: '개발 중',
    heroCardSmall: '미스터리 · 탐색 · 비주얼 노벨', featuredEyebrow: 'FEATURED GAME',
    gameLead: '정체불명의 공간에서 깨어난 홍수연. 다른 참가자들을 견제하며 납치 사건의 진실을 밝혀내야 합니다.',
    gameBody: '《Red Experience》는 탐색과 대화, 퍼즐을 통해 의문의 실험과 참가자들의 과거를 추적하는 미스터리 비주얼 노벨입니다. 수집한 단서와 플레이어의 선택은 새로운 정보와 이야기의 분기를 만들어냅니다.',
    feature1: '선택에 따라 변화하는 분기형 서사', feature2: '공간을 조사하고 단서를 조합하는 탐색', feature3: '폐쇄된 공간에서 일어나는 미스터리', steamPage: 'Steam 페이지',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '작지만 선명한 세계를 만듭니다.',
    aboutLead: 'Clusion Games는 이야기를 중심으로 한 게임을 개발하는 1인 인디 게임 스튜디오입니다.',
    aboutBody1: '비주얼 노벨 《Red Experience》를 시작으로, 플레이어가 직접 추리하고 선택하며 세계에 개입할 수 있는 작품을 제작하고 있습니다.',
    aboutBody2: '장르의 경계보다 경험의 밀도를 중요하게 생각하며, 기억에 남는 캐릭터와 설정, 그리고 게임만이 전달할 수 있는 서사를 목표로 합니다.',
    value1Title: 'STORY', value1Body: '이야기와 인물에서 시작합니다.', value2Title: 'CHOICE', value2Body: '플레이어의 판단을 존중합니다.', value3Title: 'EXPERIENCE', value3Body: '게임 이후에도 남는 감정을 만듭니다.',
    photosEyebrow: 'PHOTOS', photosTitle: '사진으로 남긴 순간들',
    newsTitle: '개발 소식', newsBicOfflineTitle: 'BIC 2026 오프라인 전시 참가', newsBicOfflineBody: '《Red Experience》가 BIC 2026 오프라인 전시에 참가했습니다.', newsDemoTitle: 'Red Experience 데모 공개', newsDemoBody: '《Red Experience》의 데모를 Steam에서 공개했습니다.', newsDemoLink: 'Steam에서 데모 플레이', newsBicTitle: 'BIC 2026 루키부문 선정', newsBicBody: '《Red Experience》가 BIC 2026 루키부문 선정작에 이름을 올렸습니다.', newsBicLink: 'BIC 공식 사이트', news1Title: 'Clusion Games 공식 사이트 공개', news1Body: '게임과 개발 소식을 한곳에서 전해드릴 예정입니다.', news2Title: 'Red Experience 개발 진행 중', news2Body: '미스터리 비주얼 노벨을 2027년 초 출시 목표로 개발 중입니다.',
    contactEyebrow: 'CONTACT', contactTitle: '새로운 현실은<br />한 통의 메시지에서 시작될 수 있습니다.', contactBody: '게임, 버그, 미디어 및 비즈니스 관련 문의를 보내주세요.', contactNote: ''
  },
  en: {
    navGames: 'GAMES', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games is a solo independent studio creating story-driven games built around choice, mystery, and realities beyond the ordinary.',
    viewGame: 'VIEW GAME', steamWishlist: 'WISHLIST ON STEAM',
    genreLabel: 'GENRE', genreValue: 'Mystery · Visual Novel · Puzzle', platformLabel: 'PLATFORM', statusLabel: 'STATUS', statusValue: 'IN DEVELOPMENT',
    heroCardSmall: 'MYSTERY · INVESTIGATION · VISUAL NOVEL', featuredEyebrow: 'FEATURED GAME',
    gameLead: 'Awakening in a mysterious space, Hong Suyeon must uncover the truth behind the kidnapping while keeping the other participants in check.',
    gameBody: '《Red Experience》 is a mystery visual novel where you trace an enigmatic experiment and the participants\' pasts through exploration, dialogue, and puzzles. The clues you collect and the choices you make will unlock new information and create branching storylines.',
    feature1: 'A branching narrative shaped by player choices', feature2: 'Environmental investigation and clue deduction', feature3: 'A mystery set in a confined space', steamPage: 'STEAM PAGE',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: 'Small studio. Distinct worlds.',
    aboutLead: 'Clusion Games is a solo independent studio focused on story-driven games.',
    aboutBody1: 'Beginning with the visual novel Red Experience, the studio creates games where players investigate, make choices, and actively intervene in the world.',
    aboutBody2: 'Rather than staying within one genre, Clusion Games focuses on dense, memorable experiences built from characters, settings, and stories only games can tell.',
    value1Title: 'STORY', value1Body: 'Every project begins with story and character.', value2Title: 'CHOICE', value2Body: 'Player decisions deserve meaningful consequences.', value3Title: 'EXPERIENCE', value3Body: 'We create emotions that remain after the game ends.',
    photosEyebrow: 'PHOTOS', photosTitle: 'Moments in pictures',
    newsTitle: 'DEVELOPMENT NEWS', newsBicOfflineTitle: 'Exhibited at BIC 2026', newsBicOfflineBody: '《Red Experience》 was showcased at the BIC 2026 offline exhibition.', newsDemoTitle: 'Red Experience demo released', newsDemoBody: 'The 《Red Experience》 demo is now available on Steam.', newsDemoLink: 'PLAY THE DEMO ON STEAM', newsBicTitle: 'Selected for the BIC 2026 Rookie Division', newsBicBody: '《Red Experience》 has been selected for the BIC 2026 Rookie Division.', newsBicLink: 'BIC OFFICIAL WEBSITE', news1Title: 'Clusion Games official website launched', news1Body: 'Game information and development news will be shared here.', news2Title: 'Red Experience is in development', news2Body: 'A mystery visual novel is currently in development, with a targeted release in early 2027.',
    contactEyebrow: 'CONTACT', contactTitle: 'A new reality can begin<br />with a single message.', contactBody: 'For game, bugs, media, and business inquiries, please get in touch.', contactNote: ''
  },
  ja: {
    navGames: 'GAMES', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Gamesは、一つの現実を越える物語と、選択によって生まれる体験を届ける個人ゲームスタジオです。',
    viewGame: 'ゲームを見る', steamWishlist: 'Steamでウィッシュリストに追加',
    genreLabel: 'ジャンル', genreValue: 'ミステリー・ビジュアルノベル・パズル', platformLabel: 'プラットフォーム', statusLabel: '開発状況', statusValue: '開発中',
    heroCardSmall: 'ミステリー・探索・ビジュアルノベル', featuredEyebrow: 'FEATURED GAME',
    gameLead: '正体不明の空間で目を覚ましたホン・スヨン。ほかの参加者たちを警戒しながら、誘拐事件の真相を突き止めなければなりません。',
    gameBody: '『Red Experience』は、探索や会話、パズルを通じて、謎の実験と参加者たちの過去を追うミステリービジュアルノベルです。集めた手がかりとプレイヤーの選択が、新たな情報を解き明かし、物語を分岐させていきます。',
    feature1: '選択によって変化する分岐型ストーリー', feature2: '空間を調査し、手がかりを組み合わせる探索', feature3: '閉ざされた空間で起こるミステリー', steamPage: 'Steamページ',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '小さくても、鮮やかな世界をつくります。',
    aboutLead: 'Clusion Gamesは、物語を軸にしたゲームを開発する個人インディーゲームスタジオです。',
    aboutBody1: 'ビジュアルノベル『Red Experience』を皮切りに、プレイヤー自身が推理し、選択し、世界に介入できる作品を制作しています。',
    aboutBody2: 'ジャンルの枠にとらわれるよりも、体験の密度を大切にしています。記憶に残るキャラクターと世界観、そしてゲームだからこそ伝えられる物語を目指します。',
    value1Title: 'STORY', value1Body: '物語と登場人物から始めます。', value2Title: 'CHOICE', value2Body: 'プレイヤーの判断を尊重します。', value3Title: 'EXPERIENCE', value3Body: 'ゲームを終えた後も心に残る感情を生み出します。',
    photosEyebrow: 'PHOTOS', photosTitle: '写真に残した瞬間',
    newsTitle: '開発ニュース', newsBicOfflineTitle: 'BIC 2026 オフライン展示に出展', newsBicOfflineBody: '『Red Experience』をBIC 2026のオフライン展示に出展しました。', newsDemoTitle: 'Red Experience 体験版公開', newsDemoBody: '『Red Experience』の体験版をSteamで公開しました。', newsDemoLink: 'Steamで体験版をプレイ', newsBicTitle: 'BIC 2026 ルーキー部門に選出', newsBicBody: '『Red Experience』がBIC 2026のルーキー部門に選出されました。', newsBicLink: 'BIC公式サイト', news1Title: 'Clusion Games公式サイト公開', news1Body: 'ゲーム情報や開発ニュースをこちらでお届けします。', news2Title: 'Red Experience 開発中', news2Body: '2027年初頭のリリースを目標に、ミステリービジュアルノベルを開発中です。',
    contactEyebrow: 'CONTACT', contactTitle: '新たな現実は<br />一通のメッセージから始まるかもしれません。', contactBody: 'ゲーム、不具合、メディア、ビジネスに関するお問い合わせをお寄せください。', contactNote: ''
  },
  zh: {
    navGames: 'GAMES', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games 是一家由个人运营的游戏工作室，致力于打造超越单一现实的故事，以及由选择带来的独特体验。',
    viewGame: '查看游戏', steamWishlist: '在 Steam 上加入愿望单',
    genreLabel: '类型', genreValue: '悬疑 · 视觉小说 · 解谜', platformLabel: '平台', statusLabel: '开发状态', statusValue: '开发中',
    heroCardSmall: '悬疑 · 探索 · 视觉小说', featuredEyebrow: 'FEATURED GAME',
    gameLead: '在未知空间中醒来的 Hong Suyeon，必须一边提防其他参与者，一边揭开绑架事件的真相。',
    gameBody: '《Red Experience》是一款悬疑视觉小说。玩家将通过探索、对话和解谜，追查神秘实验与参与者们的过去。收集到的线索和玩家的选择将解锁新的信息，并让故事走向不同分支。',
    feature1: '随选择而变化的分支叙事', feature2: '调查空间并组合线索的探索', feature3: '发生在封闭空间中的悬疑事件', steamPage: 'Steam 页面',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '打造虽小却鲜明的世界。',
    aboutLead: 'Clusion Games 是一家由个人运营、专注于剧情驱动游戏的独立游戏工作室。',
    aboutBody1: '从视觉小说《Red Experience》开始，我们一直在创作让玩家亲自推理、做出选择并介入世界的作品。',
    aboutBody2: '比起类型的界限，我们更重视体验的密度，并以塑造令人难忘的角色和设定，以及只有游戏才能传达的叙事为目标。',
    value1Title: 'STORY', value1Body: '一切始于故事和角色。', value2Title: 'CHOICE', value2Body: '尊重玩家的判断。', value3Title: 'EXPERIENCE', value3Body: '创造在游戏结束后仍萦绕心间的情感。',
    photosEyebrow: 'PHOTOS', photosTitle: '定格于照片中的瞬间',
    newsTitle: '开发动态', newsBicOfflineTitle: '参展 BIC 2026 线下展览', newsBicOfflineBody: '《Red Experience》参加了 BIC 2026 线下展览。', newsDemoTitle: 'Red Experience 试玩版发布', newsDemoBody: '《Red Experience》试玩版现已在 Steam 上发布。', newsDemoLink: '在 Steam 上体验试玩版', newsBicTitle: '入选 BIC 2026 新秀组', newsBicBody: '《Red Experience》已入选 BIC 2026 新秀组。', newsBicLink: 'BIC 官方网站', news1Title: 'Clusion Games 官方网站上线', news1Body: '我们将在这里发布游戏资讯和开发动态。', news2Title: 'Red Experience 开发中', news2Body: '这款悬疑视觉小说正在开发中，计划于 2027 年初发布。',
    contactEyebrow: 'CONTACT', contactTitle: '新的现实<br />或许会从一封邮件开始。', contactBody: '如需咨询游戏、错误反馈、媒体或商务相关事宜，欢迎联系我们。', contactNote: ''
  },
  zhHant: {
    navGames: 'GAMES', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navNews: 'NEWS', navContact: 'CONTACT',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games 是一家由個人營運的遊戲工作室，致力於打造超越單一現實的故事，以及由選擇帶來的獨特體驗。',
    viewGame: '查看遊戲', steamWishlist: '在 Steam 上加入願望清單',
    genreLabel: '類型', genreValue: '懸疑 · 視覺小說 · 解謎', platformLabel: '平台', statusLabel: '開發狀態', statusValue: '開發中',
    heroCardSmall: '懸疑 · 探索 · 視覺小說', featuredEyebrow: 'FEATURED GAME',
    gameLead: '在未知空間中醒來的 Hong Suyeon，必須一邊提防其他參與者，一邊揭開綁架事件的真相。',
    gameBody: '《Red Experience》是一款懸疑視覺小說。玩家將透過探索、對話和解謎，追查神祕實驗與參與者們的過去。收集到的線索和玩家的選擇將解鎖新的資訊，並讓故事走向不同分支。',
    feature1: '隨選擇而變化的分支敘事', feature2: '調查空間並組合線索的探索', feature3: '發生在封閉空間中的懸疑事件', steamPage: 'Steam 頁面',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '打造雖小卻鮮明的世界。',
    aboutLead: 'Clusion Games 是一家由個人營運、專注於劇情驅動遊戲的獨立遊戲工作室。',
    aboutBody1: '從視覺小說《Red Experience》開始，我們持續創作能讓玩家親自推理、做出選擇並介入世界的作品。',
    aboutBody2: '比起類型的界線，我們更重視體驗的密度，並以塑造令人難忘的角色和設定，以及只有遊戲才能傳達的敘事為目標。',
    value1Title: 'STORY', value1Body: '一切始於故事和角色。', value2Title: 'CHOICE', value2Body: '尊重玩家的判斷。', value3Title: 'EXPERIENCE', value3Body: '創造在遊戲結束後仍縈繞心中的情感。',
    photosEyebrow: 'PHOTOS', photosTitle: '定格於照片中的瞬間',
    newsTitle: '開發動態', newsBicOfflineTitle: '參展 BIC 2026 線下展覽', newsBicOfflineBody: '《Red Experience》參加了 BIC 2026 線下展覽。', newsDemoTitle: 'Red Experience 試玩版發布', newsDemoBody: '《Red Experience》試玩版現已在 Steam 上發布。', newsDemoLink: '在 Steam 上體驗試玩版', newsBicTitle: '入選 BIC 2026 新秀組', newsBicBody: '《Red Experience》已入選 BIC 2026 新秀組。', newsBicLink: 'BIC 官方網站', news1Title: 'Clusion Games 官方網站上線', news1Body: '我們將在這裡發布遊戲資訊和開發動態。', news2Title: 'Red Experience 開發中', news2Body: '這款懸疑視覺小說正在開發中，預計於 2027 年初推出。',
    contactEyebrow: 'CONTACT', contactTitle: '新的現實<br />或許會從一封郵件開始。', contactBody: '如需洽詢遊戲、錯誤回報、媒體或商務相關事宜，歡迎與我們聯絡。', contactNote: ''
  }
};

const languageSettings = {
  ko: { htmlLang: 'ko', ariaLabel: '언어 선택' },
  en: { htmlLang: 'en', ariaLabel: 'Select language' },
  ja: { htmlLang: 'ja', ariaLabel: '言語を選択' },
  zh: { htmlLang: 'zh-Hans', ariaLabel: '选择语言' },
  zhHant: { htmlLang: 'zh-Hant', ariaLabel: '選擇語言' }
};

const languageStorageKey = 'clusion-language-preference';

function getSystemLanguage() {
  const preferredLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of preferredLanguages) {
    const languageParts = language?.toLowerCase().split('-');
    const baseLanguage = languageParts?.[0];

    if (baseLanguage === 'zh') {
      const usesTraditionalChinese = ['hant', 'tw', 'hk', 'mo'].some((part) => languageParts.includes(part));
      return usesTraditionalChinese ? 'zhHant' : 'zh';
    }

    if (Object.hasOwn(languageSettings, baseLanguage)) return baseLanguage;
  }

  return 'en';
}

const savedLanguage = localStorage.getItem(languageStorageKey);
const initialLanguage = Object.hasOwn(languageSettings, savedLanguage) ? savedLanguage : getSystemLanguage();

function setLanguage(language, persist = false) {
  if (!Object.hasOwn(languageSettings, language)) language = 'ko';
  document.documentElement.lang = languageSettings[language].htmlLang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageSelect.value = language;
  languageSelect.setAttribute('aria-label', languageSettings[language].ariaLabel);
  if (persist) localStorage.setItem(languageStorageKey, language);
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
languageSelect.addEventListener('change', (event) => setLanguage(event.target.value, true));
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
setLanguage(initialLanguage);
