const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languageSelect = document.querySelector('[data-language-select]');

const translations = {
  ko: {
    navGames: 'GAMES', navOrangeWiki: 'ORANGEWIKI', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navVideos: 'VIDEOS', navNews: 'NEWS', navDevlog: 'DEVLOG', navContact: 'CONTACT', languageLabel: '언어 선택',
    heroEyebrow: 'INDEPENDENT GAME STUDIO',
    heroLine1: 'STORIES BEYOND', heroLine2: 'A SINGLE REALITY.',
    heroDescription: 'Clusion Games는 하나의 현실을 넘어서는 이야기와 선택의 경험을 만드는 1인 게임 스튜디오입니다.',
    viewGame: '게임 보기', steamWishlist: 'Steam에서 찜하기',
    genreLabel: '장르', genreValue: '미스터리 · 비주얼 노벨 · 퍼즐', platformLabel: '플랫폼', statusLabel: '상태', statusValue: '개발 중',
    heroCardSmall: '미스터리 · 탐색 · 비주얼 노벨', heroOrangeSmall: 'Red Experience보다 먼저 공개 예정', featuredEyebrow: 'FEATURED GAME',
    gameLead: '정체불명의 공간에서 깨어난 홍수연. 다른 참가자들을 견제하며 납치 사건의 진실을 밝혀내야 합니다.',
    gameBody: '《Red Experience》는 탐색과 대화, 퍼즐을 통해 의문의 실험과 참가자들의 과거를 추적하는 미스터리 비주얼 노벨입니다. 수집한 단서와 플레이어의 선택은 새로운 정보와 이야기의 분기를 만들어냅니다.',
    feature1: '선택에 따라 변화하는 분기형 서사', feature2: '공간을 조사하고 단서를 조합하는 탐색', feature3: '폐쇄된 공간에서 일어나는 미스터리', steamPage: 'Steam 페이지',
    orangeWikiStatus: '개발 중', orangeWikiEyebrow: 'PROJECT 02', orangeWikiLead: '이름 없는 역에서 시작되는 새로운 미스터리.',
    orangeWikiBody: '낯선 지하철역에 홀로 남겨진 뒤, 비어 있는 역명과 멈춰 선 열차의 흔적을 따라가며 이곳에 숨은 이야기를 조사하는 탐색 어드벤처를 개발하고 있습니다.',
    orangeWikiFeature1: '낯선 지하철역을 조사하는 탐색', orangeWikiFeature2: '비어 있는 역명과 열차의 흔적을 추적', orangeWikiFeature3: '단서를 따라 드러나는 새로운 미스터리',
    aboutEyebrow: 'ABOUT THE STUDIO', aboutTitle: '작지만 선명한 세계를 만듭니다.',
    aboutLead: 'Clusion Games는 이야기를 중심으로 한 게임을 개발하는 1인 인디 게임 스튜디오입니다.',
    aboutBody1: '《OrangeWiki》와 《Red Experience》를 통해 플레이어가 직접 추리하고 선택하며 세계에 개입할 수 있는 작품을 제작하고 있습니다.',
    aboutBody2: '장르의 경계보다 경험의 밀도를 중요하게 생각하며, 기억에 남는 캐릭터와 설정, 그리고 게임만이 전달할 수 있는 서사를 목표로 합니다.',
    value1Title: 'STORY', value1Body: '이야기와 인물에서 시작합니다.', value2Title: 'CHOICE', value2Body: '플레이어의 판단을 존중합니다.', value3Title: 'EXPERIENCE', value3Body: '게임 이후에도 남는 감정을 만듭니다.',
    photosEyebrow: 'PHOTOS', photosTitle: '사진으로 남긴 순간들', videoEyebrow: 'VIDEO', newsEyebrow: 'NEWS',
    newsTitle: '개발 소식', newsOrangeTitle: 'OrangeWiki 개발 중', newsOrangeBody: '《OrangeWiki》는 Red Experience보다 먼저 선보일 미스터리 탐색 게임입니다.', newsDemoTitle: 'Red Experience 데모 공개', newsDemoBody: '《Red Experience》의 데모를 Steam에서 공개했습니다.', newsDemoLink: 'Steam에서 데모 플레이', newsBicTitle: 'BIC 2026 루키부문 선정', newsBicBody: '《Red Experience》가 BIC 2026 루키부문 선정작에 이름을 올렸습니다.', newsBicLink: 'BIC 공식 사이트', news1Title: 'Clusion Games 공식 사이트 공개', news1Body: '게임과 개발 소식을 한곳에서 전해드릴 예정입니다.', news2Title: 'Red Experience 개발 진행 중', news2Body: '미스터리 비주얼 노벨을 2027년 초 출시 목표로 개발 중입니다.',
    contactEyebrow: 'CONTACT', contactTitle: '새로운 현실은<br />한 통의 메시지에서 시작될 수 있습니다.', contactBody: '게임, 버그, 미디어 및 비즈니스 관련 문의를 보내주세요.', contactNote: ''
  },
  en: {
    navGames: 'GAMES', navOrangeWiki: 'ORANGEWIKI', navAbout: 'ABOUT', navPhotos: 'PHOTOS', navVideos: 'VIDEOS', navNews: 'NEWS', navDevlog: 'DEVLOG', navContact: 'CONTACT', languageLabel: 'Select language',
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
    photosEyebrow: 'PHOTOS', photosTitle: 'Moments in pictures', videoEyebrow: 'VIDEO', newsEyebrow: 'NEWS',
    newsTitle: 'DEVELOPMENT NEWS', newsOrangeTitle: 'OrangeWiki is in development', newsOrangeBody: '《OrangeWiki》 is a mystery exploration game planned to arrive ahead of Red Experience.', newsDemoTitle: 'Red Experience demo released', newsDemoBody: 'The 《Red Experience》 demo is now available on Steam.', newsDemoLink: 'PLAY THE DEMO ON STEAM', newsBicTitle: 'Selected for the BIC 2026 Rookie Division', newsBicBody: '《Red Experience》 has been selected for the BIC 2026 Rookie Division.', newsBicLink: 'BIC OFFICIAL WEBSITE', news1Title: 'Clusion Games official website launched', news1Body: 'Game information and development news will be shared here.', news2Title: 'Red Experience is in development', news2Body: 'A mystery visual novel is currently in development, with a targeted release in early 2027.',
    contactEyebrow: 'CONTACT', contactTitle: 'A new reality can begin<br />with a single message.', contactBody: 'For game, bugs, media, and business inquiries, please get in touch.', contactNote: ''
  },
  'zh-Hans': {
    navGames: '游戏', navOrangeWiki: 'ORANGEWIKI', navAbout: '关于我们', navPhotos: '照片', navVideos: '视频', navNews: '开发动态', navDevlog: '开发日志', navContact: '联系我们', languageLabel: '选择语言',
    heroEyebrow: '独立游戏工作室',
    heroLine1: '超越单一现实', heroLine2: '的故事。',
    heroDescription: 'Clusion Games 是一家独立游戏工作室，致力于打造以故事和选择为核心、跨越寻常现实的游戏体验。',
    viewGame: '查看游戏', steamWishlist: '在 Steam 加入愿望单',
    genreLabel: '类型', genreValue: '悬疑 · 视觉小说 · 解谜', platformLabel: '平台', statusLabel: '状态', statusValue: '开发中',
    heroCardSmall: '悬疑 · 探索 · 视觉小说', heroOrangeSmall: '计划早于 Red Experience 推出', featuredEyebrow: '精选游戏',
    gameLead: '洪秀妍在神秘空间中醒来。她必须提防其他参与者，查明绑架事件的真相。',
    gameBody: '《Red Experience》是一款悬疑视觉小说。玩家通过探索、对话与解谜，追查神秘实验和参与者的过去。收集的线索与做出的选择将解锁新信息，并影响故事的走向。',
    feature1: '随玩家选择变化的分支叙事', feature2: '调查环境并推理线索', feature3: '发生在封闭空间中的谜团', steamPage: 'Steam 页面',
    orangeWikiStatus: '开发中', orangeWikiEyebrow: '项目 02', orangeWikiLead: '新的谜团从一座无名车站开始。',
    orangeWikiBody: '在这款正在开发的探索冒险游戏中，你独自留在陌生的地铁站，循着空白站名和停驶列车的痕迹，调查隐藏在这里的故事。',
    orangeWikiFeature1: '探索陌生的地下车站', orangeWikiFeature2: '追查空白站名与列车留下的线索', orangeWikiFeature3: '沿着线索揭开新的谜团',
    aboutEyebrow: '关于工作室', aboutTitle: '小型工作室，鲜明的世界。',
    aboutLead: 'Clusion Games 是一家专注于故事驱动游戏的独立游戏工作室。',
    aboutBody1: '通过《OrangeWiki》和《Red Experience》，工作室创作让玩家亲自调查、做出选择并影响世界的游戏。',
    aboutBody2: '比起受限于单一类型，Clusion Games 更重视紧凑而难忘的体验：角色、设定，以及只有游戏才能讲述的故事。',
    value1Title: '故事', value1Body: '每个项目都从故事与角色开始。', value2Title: '选择', value2Body: '玩家的判断应带来有意义的结果。', value3Title: '体验', value3Body: '我们希望情感在游戏结束后仍能留存。',
    photosEyebrow: '照片', photosTitle: '照片记录的瞬间', videoEyebrow: '视频', newsEyebrow: '开发动态',
    newsTitle: '开发动态', newsOrangeTitle: 'OrangeWiki 开发中', newsOrangeBody: '《OrangeWiki》是一款计划早于 Red Experience 推出的悬疑探索游戏。', newsDemoTitle: 'Red Experience 试玩版现已推出', newsDemoBody: '《Red Experience》的试玩版已在 Steam 上线。', newsDemoLink: '在 Steam 游玩试玩版', newsBicTitle: '入选 BIC 2026 新人组', newsBicBody: '《Red Experience》入选 BIC 2026 新人组。', newsBicLink: 'BIC 官方网站', news1Title: 'Clusion Games 官方网站上线', news1Body: '我们将在这里分享游戏信息和开发动态。', news2Title: 'Red Experience 开发中', news2Body: '这款悬疑视觉小说正在开发中，目标于 2027 年初推出。',
    contactEyebrow: '联系', contactTitle: '新的现实，<br />也许始于一条消息。', contactBody: '如需咨询游戏、错误反馈、媒体或商务事宜，欢迎联系我们。', contactNote: ''
  },
  'zh-Hant': {
    navGames: '遊戲', navOrangeWiki: 'ORANGEWIKI', navAbout: '關於我們', navPhotos: '照片', navVideos: '影片', navNews: '開發消息', navDevlog: '開發日誌', navContact: '聯絡我們', languageLabel: '選擇語言',
    heroEyebrow: '獨立遊戲工作室',
    heroLine1: '超越單一現實', heroLine2: '的故事。',
    heroDescription: 'Clusion Games 是一家獨立遊戲工作室，致力於打造以故事與選擇為核心、跨越尋常現實的遊戲體驗。',
    viewGame: '查看遊戲', steamWishlist: '在 Steam 加入願望清單',
    genreLabel: '類型', genreValue: '懸疑 · 視覺小說 · 解謎', platformLabel: '平台', statusLabel: '狀態', statusValue: '開發中',
    heroCardSmall: '懸疑 · 探索 · 視覺小說', heroOrangeSmall: '預計早於 Red Experience 推出', featuredEyebrow: '精選遊戲',
    gameLead: '洪秀妍在神祕空間中醒來。她必須提防其他參與者，查明綁架事件的真相。',
    gameBody: '《Red Experience》是一款懸疑視覺小說。玩家透過探索、對話與解謎，追查神祕實驗和參與者的過去。蒐集的線索與做出的選擇將解鎖新資訊，並影響故事走向。',
    feature1: '隨玩家選擇改變的分支敘事', feature2: '調查環境並推理線索', feature3: '發生在封閉空間中的謎團', steamPage: 'Steam 頁面',
    orangeWikiStatus: '開發中', orangeWikiEyebrow: '專案 02', orangeWikiLead: '新的謎團從一座無名車站開始。',
    orangeWikiBody: '在這款開發中的探索冒險遊戲裡，你獨自留在陌生的地鐵站，循著空白站名與停駛列車的痕跡，調查隱藏在此的故事。',
    orangeWikiFeature1: '探索陌生的地下車站', orangeWikiFeature2: '追查空白站名與列車留下的線索', orangeWikiFeature3: '沿著線索揭開新的謎團',
    aboutEyebrow: '關於工作室', aboutTitle: '小型工作室，鮮明的世界。',
    aboutLead: 'Clusion Games 是一家專注於故事驅動遊戲的獨立遊戲工作室。',
    aboutBody1: '透過《OrangeWiki》與《Red Experience》，工作室創作讓玩家親自調查、做出選擇並影響世界的遊戲。',
    aboutBody2: '比起受限於單一類型，Clusion Games 更重視緊湊而難忘的體驗：角色、設定，以及只有遊戲才能講述的故事。',
    value1Title: '故事', value1Body: '每個專案都從故事與角色開始。', value2Title: '選擇', value2Body: '玩家的判斷應帶來有意義的結果。', value3Title: '體驗', value3Body: '我們希望情感在遊戲結束後仍能留存。',
    photosEyebrow: '照片', photosTitle: '照片留下的瞬間', videoEyebrow: '影片', newsEyebrow: '開發消息',
    newsTitle: '開發消息', newsOrangeTitle: 'OrangeWiki 開發中', newsOrangeBody: '《OrangeWiki》是一款預計早於 Red Experience 推出的懸疑探索遊戲。', newsDemoTitle: 'Red Experience 試玩版現已推出', newsDemoBody: '《Red Experience》的試玩版已在 Steam 上線。', newsDemoLink: '在 Steam 遊玩試玩版', newsBicTitle: '入選 BIC 2026 新人組', newsBicBody: '《Red Experience》入選 BIC 2026 新人組。', newsBicLink: 'BIC 官方網站', news1Title: 'Clusion Games 官方網站上線', news1Body: '我們將在這裡分享遊戲資訊與開發消息。', news2Title: 'Red Experience 開發中', news2Body: '這款懸疑視覺小說正在開發中，目標於 2027 年初推出。',
    contactEyebrow: '聯絡', contactTitle: '新的現實，<br />也許始於一則訊息。', contactBody: '如需洽詢遊戲、錯誤回報、媒體或商務事宜，歡迎聯絡我們。', contactNote: ''
  },
  ja: {
    navGames: 'ゲーム', navOrangeWiki: 'ORANGEWIKI', navAbout: 'スタジオ', navPhotos: '写真', navVideos: '動画', navNews: '開発情報', navDevlog: '開発日誌', navContact: 'お問い合わせ', languageLabel: '言語を選択',
    heroEyebrow: 'インディーゲームスタジオ',
    heroLine1: 'ひとつの現実を', heroLine2: '越える物語。',
    heroDescription: 'Clusion Gamesは、物語と選択を軸に、日常の現実を越える体験を生み出す個人インディーゲームスタジオです。',
    viewGame: 'ゲームを見る', steamWishlist: 'Steamでウィッシュリストに追加',
    genreLabel: 'ジャンル', genreValue: 'ミステリー · ビジュアルノベル · パズル', platformLabel: '対応機種', statusLabel: '状況', statusValue: '開発中',
    heroCardSmall: 'ミステリー · 探索 · ビジュアルノベル', heroOrangeSmall: 'Red Experienceより先に公開予定', featuredEyebrow: '注目のゲーム',
    gameLead: '謎の空間で目を覚ましたホン・スヨン。ほかの参加者を警戒しながら、誘拐事件の真相を明らかにしなければなりません。',
    gameBody: '《Red Experience》は、探索、会話、パズルを通して謎の実験と参加者たちの過去を追うミステリービジュアルノベルです。集めた手がかりと選択によって新たな情報が明らかになり、物語が分岐します。',
    feature1: '選択によって変化する分岐型の物語', feature2: '環境を調べ、手がかりを推理する探索', feature3: '閉ざされた空間で起こるミステリー', steamPage: 'Steamページ',
    orangeWikiStatus: '開発中', orangeWikiEyebrow: 'プロジェクト 02', orangeWikiLead: '名前のない駅から、新たな謎が始まる。',
    orangeWikiBody: '開発中のこの探索アドベンチャーでは、見知らぬ地下鉄駅に一人取り残されたあなたが、空白の駅名と止まった列車の痕跡をたどり、この場所に隠された物語を調べます。',
    orangeWikiFeature1: '見知らぬ地下鉄駅を探索', orangeWikiFeature2: '空白の駅名と列車の手がかりを追う', orangeWikiFeature3: '手がかりをたどって新たな謎を解く',
    aboutEyebrow: 'スタジオについて', aboutTitle: '小さなスタジオ。鮮やかな世界。',
    aboutLead: 'Clusion Gamesは、物語を重視したゲームを制作する個人インディーゲームスタジオです。',
    aboutBody1: '《OrangeWiki》と《Red Experience》を通じて、プレイヤーが自ら調査し、選択し、世界に関わるゲームを制作しています。',
    aboutBody2: 'ジャンルの枠よりも、濃密で心に残る体験を大切にしています。キャラクター、世界観、そしてゲームだからこそ語れる物語を目指します。',
    value1Title: '物語', value1Body: 'すべての作品は物語と人物から始まります。', value2Title: '選択', value2Body: 'プレイヤーの判断には意味のある結果を。', value3Title: '体験', value3Body: 'プレイ後も心に残る感情を届けます。',
    photosEyebrow: '写真', photosTitle: '写真に残した瞬間', videoEyebrow: '動画', newsEyebrow: '開発情報',
    newsTitle: '開発情報', newsOrangeTitle: 'OrangeWiki 開発中', newsOrangeBody: '《OrangeWiki》はRed Experienceより先に公開予定のミステリー探索ゲームです。', newsDemoTitle: 'Red Experienceのデモを公開', newsDemoBody: '《Red Experience》のデモをSteamで公開しました。', newsDemoLink: 'Steamでデモをプレイ', newsBicTitle: 'BIC 2026ルーキー部門に選出', newsBicBody: '《Red Experience》がBIC 2026ルーキー部門に選出されました。', newsBicLink: 'BIC公式サイト', news1Title: 'Clusion Games公式サイト公開', news1Body: 'ゲーム情報や開発情報をこちらでお届けします。', news2Title: 'Red Experience 開発中', news2Body: '2027年初頭の発売を目標に、ミステリービジュアルノベルを開発しています。',
    contactEyebrow: 'お問い合わせ', contactTitle: '新たな現実は、<br />一通のメッセージから始まるかもしれません。', contactBody: 'ゲーム、バグ報告、メディア、ビジネスに関するお問い合わせをお寄せください。', contactNote: ''
  },
  ru: {
    navGames: 'ИГРЫ', navOrangeWiki: 'ORANGEWIKI', navAbout: 'О СТУДИИ', navPhotos: 'ФОТО', navVideos: 'ВИДЕО', navNews: 'НОВОСТИ', navDevlog: 'ДНЕВНИК', navContact: 'КОНТАКТЫ', languageLabel: 'Выбрать язык',
    heroEyebrow: 'НЕЗАВИСИМАЯ ИГРОВАЯ СТУДИЯ',
    heroLine1: 'ИСТОРИИ ЗА ГРАНЬЮ', heroLine2: 'ОДНОЙ РЕАЛЬНОСТИ.',
    heroDescription: 'Clusion Games — независимая студия одного разработчика. Мы создаём сюжетные игры, в которых выбор и тайна ведут за пределы привычной реальности.',
    viewGame: 'СМОТРЕТЬ ИГРЫ', steamWishlist: 'ДОБАВИТЬ В ЖЕЛАЕМОЕ В STEAM',
    genreLabel: 'ЖАНР', genreValue: 'Детектив · Визуальная новелла · Головоломка', platformLabel: 'ПЛАТФОРМА', statusLabel: 'СТАТУС', statusValue: 'В РАЗРАБОТКЕ',
    heroCardSmall: 'ДЕТЕКТИВ · ИССЛЕДОВАНИЕ · ВИЗУАЛЬНАЯ НОВЕЛЛА', heroOrangeSmall: 'Планируется раньше Red Experience', featuredEyebrow: 'ИЗБРАННАЯ ИГРА',
    gameLead: 'Хон Суён приходит в себя в загадочном месте. Ей предстоит разгадать тайну похищения, не теряя из виду других участников.',
    gameBody: '《Red Experience》 — детективная визуальная новелла. Исследуя окружение, разговаривая с персонажами и решая головоломки, вы узнаете правду о таинственном эксперименте и прошлом его участников. Найденные улики и ваш выбор открывают новые сведения и меняют ход истории.',
    feature1: 'Разветвлённый сюжет, зависящий от ваших решений', feature2: 'Исследование окружения и анализ улик', feature3: 'Тайна замкнутого пространства', steamPage: 'СТРАНИЦА В STEAM',
    orangeWikiStatus: 'В РАЗРАБОТКЕ', orangeWikiEyebrow: 'ПРОЕКТ 02', orangeWikiLead: 'Новая тайна начинается на станции без названия.',
    orangeWikiBody: 'В этой разрабатываемой приключенческой игре вы остаётесь в одиночестве на незнакомой станции метро. Следуя за пустой табличкой с названием станции и следами остановившегося поезда, вы раскрываете скрытую здесь историю.',
    orangeWikiFeature1: 'Исследуйте незнакомую станцию метро', orangeWikiFeature2: 'Ищите подсказки в названии станции и следах поезда', orangeWikiFeature3: 'Раскройте новую тайну по собранным уликам',
    aboutEyebrow: 'О СТУДИИ', aboutTitle: 'Небольшая студия. Самобытные миры.',
    aboutLead: 'Clusion Games — независимая студия одного разработчика, создающая игры с акцентом на сюжет.',
    aboutBody1: 'В 《OrangeWiki》 и 《Red Experience》 игроки исследуют мир, принимают решения и влияют на происходящее.',
    aboutBody2: 'Для Clusion Games важнее не жанровые рамки, а насыщенный и запоминающийся опыт: персонажи, миры и истории, которые можно рассказать только в игре.',
    value1Title: 'ИСТОРИЯ', value1Body: 'Каждый проект начинается с истории и персонажей.', value2Title: 'ВЫБОР', value2Body: 'Решения игрока должны иметь значение.', value3Title: 'ВПЕЧАТЛЕНИЯ', value3Body: 'Мы создаём эмоции, которые остаются после игры.',
    photosEyebrow: 'ФОТО', photosTitle: 'Моменты в фотографиях', videoEyebrow: 'ВИДЕО', newsEyebrow: 'НОВОСТИ',
    newsTitle: 'НОВОСТИ РАЗРАБОТКИ', newsOrangeTitle: 'OrangeWiki в разработке', newsOrangeBody: '《OrangeWiki》 — детективная игра с исследованием, которую планируется выпустить раньше Red Experience.', newsDemoTitle: 'Демоверсия Red Experience доступна', newsDemoBody: 'Демоверсия 《Red Experience》 доступна в Steam.', newsDemoLink: 'ИГРАТЬ В ДЕМО В STEAM', newsBicTitle: 'Отбор в категорию новичков BIC 2026', newsBicBody: '《Red Experience》 вошла в категорию новичков BIC 2026.', newsBicLink: 'ОФИЦИАЛЬНЫЙ САЙТ BIC', news1Title: 'Открыт официальный сайт Clusion Games', news1Body: 'Здесь будут появляться новости об играх и разработке.', news2Title: 'Red Experience в разработке', news2Body: 'Разработка детективной визуальной новеллы продолжается; выпуск запланирован на начало 2027 года.',
    contactEyebrow: 'КОНТАКТЫ', contactTitle: 'Новая реальность может начаться<br />с одного сообщения.', contactBody: 'По вопросам игр, ошибок, прессы и сотрудничества свяжитесь с нами.', contactNote: ''
  }
};

const savedLanguage = localStorage.getItem('clusion-language');
let currentLanguage = Object.prototype.hasOwnProperty.call(translations, savedLanguage) ? savedLanguage : 'ko';

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(translations, language)) language = 'ko';
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key] !== undefined) element.innerHTML = translations[language][key];
  });
  languageSelect.value = language;
  languageSelect.setAttribute('aria-label', translations[language].languageLabel);
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
languageSelect.addEventListener('change', () => {
  setLanguage(languageSelect.value);
  closeMenu();
});
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

