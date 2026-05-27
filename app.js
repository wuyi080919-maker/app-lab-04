const $ = (selector) => document.querySelector(selector);

const sampleText = `The desert could not be claimed by anyone. It moved beneath the wind, changing its shape while keeping its old secrets. Paul listened to the silence and tried to separate fear from attention. A sentence from his mother returned to him: the mind can choose where to stand.`;
const sampleTranslation = `没有任何人能够宣称拥有这片沙漠。它在风下移动，在改变形状的同时保留着古老的秘密。保罗倾听着寂静，并试着把恐惧和专注区分开来。母亲说过的一句话又回到他心里：心智可以选择自己站立的位置。`;

const phraseTranslations = [
  ["Choose how your team works with Claude on AWS", "选择你的团队如何在 AWS 上使用 Claude"],
  ["Anthropic and AWS offer three ways to access Claude billed through AWS.", "Anthropic 与 AWS 提供三种通过 AWS 计费来访问 Claude 的方式。"],
  ["Whether you're building on the API, putting Claude in front of every employee, or working within strict data residency requirements, there's a path built for your workload.", "无论你是在 API 上构建应用、让每位员工直接使用 Claude，还是需要在严格的数据驻留要求内工作，都有一条适合你工作负载的路径。"],
  ["built for your workload", "为你的工作负载而设计"],
  ["data residency requirements", "数据驻留要求"],
  ["strict data residency", "严格的数据驻留"],
  ["billed through AWS", "通过 AWS 计费"],
  ["access Claude", "访问 Claude"],
  ["building on the API", "基于 API 构建"],
  ["in front of every employee", "面向每一位员工"],
  ["works with Claude", "使用 Claude 协作"]
];

const dictionary = {
  a: ["art.", "一个；某个"],
  about: ["prep./adv.", "关于；大约"],
  above: ["prep.", "在...上方"],
  across: ["prep.", "穿过；横跨"],
  after: ["prep./conj.", "在...之后"],
  again: ["adv.", "再次"],
  against: ["prep.", "反对；倚着"],
  all: ["det./pron.", "全部；所有"],
  almost: ["adv.", "几乎；差不多"],
  alone: ["adj./adv.", "独自；单独"],
  along: ["prep.", "沿着"],
  already: ["adv.", "已经"],
  also: ["adv.", "也；而且"],
  although: ["conj.", "虽然"],
  always: ["adv.", "总是；一直"],
  an: ["art.", "一个；某个"],
  and: ["conj.", "和；并且"],
  another: ["det./pron.", "另一个"],
  anyone: ["pron.", "任何人"],
  anything: ["pron.", "任何事物"],
  are: ["v.", "是"],
  as: ["prep./conj.", "作为；当...时；因为"],
  at: ["prep.", "在；向"],
  attention: ["n.", "注意力；专注"],
  away: ["adv.", "离开；远离"],
  be: ["v.", "是；成为"],
  because: ["conj.", "因为"],
  been: ["v.", "be 的过去分词"],
  before: ["prep./conj.", "在...之前"],
  beneath: ["prep.", "在...下面"],
  between: ["prep.", "在...之间"],
  book: ["n.", "书"],
  both: ["det./pron.", "两者都"],
  but: ["conj.", "但是"],
  by: ["prep.", "被；通过；在旁边"],
  can: ["modal v.", "能够；可以"],
  changing: ["v.", "改变；变化"],
  choose: ["v.", "选择"],
  claimed: ["v.", "声称拥有；认领"],
  could: ["modal v.", "能够；可能；can 的过去式"],
  day: ["n.", "一天；白天"],
  desert: ["n.", "沙漠"],
  did: ["v.", "做；do 的过去式"],
  do: ["v.", "做"],
  does: ["v.", "做；用于构成疑问或否定"],
  down: ["adv./prep.", "向下；在下方"],
  each: ["det./pron.", "每个"],
  even: ["adv.", "甚至；即使"],
  every: ["det.", "每一个"],
  fear: ["n./v.", "恐惧；害怕"],
  few: ["det.", "少数；几个"],
  for: ["prep.", "为了；对于；持续"],
  from: ["prep.", "从；来自"],
  get: ["v.", "得到；变得；到达"],
  give: ["v.", "给；给予"],
  go: ["v.", "去；前往"],
  had: ["v.", "有；have 的过去式"],
  has: ["v.", "有；have 的第三人称单数"],
  have: ["v.", "有；使；经历"],
  he: ["pron.", "他"],
  her: ["pron.", "她；她的"],
  here: ["adv.", "这里"],
  him: ["pron.", "他"],
  his: ["pron./det.", "他的"],
  how: ["adv.", "怎样；多么"],
  if: ["conj.", "如果；是否"],
  in: ["prep.", "在...里面；在...期间"],
  into: ["prep.", "进入；变成"],
  is: ["v.", "是"],
  it: ["pron.", "它；这"],
  its: ["det.", "它的"],
  just: ["adv.", "只是；刚刚"],
  keeping: ["v.", "保持；保留"],
  know: ["v.", "知道；认识"],
  like: ["v./prep.", "喜欢；像"],
  listened: ["v.", "倾听"],
  little: ["adj.", "小的；少量的"],
  look: ["v.", "看；显得"],
  made: ["v.", "制作；使得；make 的过去式"],
  make: ["v.", "制作；使得"],
  many: ["det.", "许多"],
  may: ["modal v.", "可能；可以"],
  me: ["pron.", "我"],
  mind: ["n.", "头脑；心智"],
  more: ["det./adv.", "更多；更加"],
  most: ["det./adv.", "最多；最"],
  mother: ["n.", "母亲"],
  moved: ["v.", "移动；感动"],
  much: ["det./adv.", "许多；非常"],
  must: ["modal v.", "必须；一定"],
  my: ["det.", "我的"],
  never: ["adv.", "从不"],
  no: ["det./adv.", "没有；不"],
  not: ["adv.", "不"],
  now: ["adv.", "现在"],
  old: ["adj.", "古老的；旧的"],
  on: ["prep.", "在...上；关于"],
  once: ["adv.", "曾经；一次"],
  one: ["num./pron.", "一；一个"],
  only: ["adv./adj.", "只；唯一的"],
  or: ["conj.", "或者"],
  other: ["adj./pron.", "其他的"],
  our: ["det.", "我们的"],
  out: ["adv.", "出去；在外"],
  over: ["prep./adv.", "在...上方；超过；结束"],
  paul: ["n.", "保罗"],
  people: ["n.", "人们"],
  read: ["v.", "阅读"],
  really: ["adv.", "真正地；很"],
  returned: ["v.", "返回；重新出现"],
  said: ["v.", "说；say 的过去式"],
  same: ["adj.", "相同的"],
  see: ["v.", "看见；理解"],
  secrets: ["n.", "秘密"],
  sentence: ["n.", "句子"],
  separate: ["v.", "区分；分离"],
  she: ["pron.", "她"],
  should: ["modal v.", "应该"],
  shape: ["n./v.", "形状；塑造"],
  silence: ["n.", "寂静"],
  so: ["adv./conj.", "如此；所以"],
  some: ["det./pron.", "一些"],
  stand: ["v./n.", "站立；立场"],
  still: ["adv.", "仍然"],
  take: ["v.", "拿；花费；采取"],
  than: ["conj./prep.", "比"],
  that: ["det./pron./conj.", "那；那个；引导从句"],
  the: ["art.", "这个；那个；特指的人或物"],
  their: ["det.", "他们的"],
  them: ["pron.", "他们；它们"],
  then: ["adv.", "然后；那时"],
  there: ["adv.", "那里；存在"],
  these: ["det./pron.", "这些"],
  they: ["pron.", "他们；它们"],
  this: ["det./pron.", "这；这个"],
  those: ["det./pron.", "那些"],
  through: ["prep.", "穿过；通过"],
  time: ["n.", "时间；次数"],
  to: ["prep.", "到；向；用于不定式"],
  tried: ["v.", "尝试"],
  under: ["prep.", "在...下面"],
  up: ["adv./prep.", "向上；起来"],
  us: ["pron.", "我们"],
  very: ["adv.", "非常"],
  want: ["v.", "想要"],
  was: ["v.", "是；be 的过去式"],
  way: ["n.", "方式；道路"],
  we: ["pron.", "我们"],
  were: ["v.", "是；be 的过去式"],
  what: ["pron./det.", "什么"],
  when: ["adv./conj.", "什么时候；当...时"],
  where: ["adv.", "哪里；在...的地方"],
  which: ["pron./det.", "哪一个；哪个"],
  while: ["conj./n.", "当...时；一会儿"],
  who: ["pron.", "谁"],
  why: ["adv.", "为什么"],
  will: ["modal v.", "将；会"],
  wind: ["n.", "风"]
};

const extendedDictionary = {
  able: ["adj.", "能够的；有能力的"],
  accept: ["v.", "接受；同意"],
  act: ["v./n.", "行动；行为"],
  action: ["n.", "行动；动作"],
  actually: ["adv.", "实际上；事实上"],
  add: ["v.", "添加；补充"],
  afraid: ["adj.", "害怕的；担心的"],
  air: ["n.", "空气；天空"],
  allow: ["v.", "允许；使可能"],
  answer: ["n./v.", "答案；回答"],
  appear: ["v.", "出现；似乎"],
  around: ["prep./adv.", "在周围；大约"],
  arrive: ["v.", "到达"],
  ask: ["v.", "问；请求"],
  back: ["n./adv.", "背部；回来；向后"],
  bad: ["adj.", "坏的；严重的"],
  become: ["v.", "变成；成为"],
  begin: ["v.", "开始"],
  believe: ["v.", "相信；认为"],
  best: ["adj./adv.", "最好的；最好地"],
  better: ["adj./adv.", "更好的；更好地"],
  big: ["adj.", "大的；重要的"],
  body: ["n.", "身体；主体"],
  boy: ["n.", "男孩"],
  bring: ["v.", "带来；引起"],
  call: ["v./n.", "呼叫；称作；电话"],
  care: ["n./v.", "关心；照顾"],
  carry: ["v.", "携带；承载"],
  case: ["n.", "情况；案例"],
  cause: ["n./v.", "原因；导致"],
  certain: ["adj.", "确定的；某个"],
  change: ["v./n.", "改变；变化"],
  child: ["n.", "孩子"],
  city: ["n.", "城市"],
  close: ["v./adj.", "关闭；接近的"],
  cold: ["adj./n.", "冷的；寒冷"],
  come: ["v.", "来；到来"],
  common: ["adj.", "常见的；共同的"],
  company: ["n.", "公司；陪伴"],
  complete: ["adj./v.", "完整的；完成"],
  continue: ["v.", "继续"],
  control: ["n./v.", "控制"],
  country: ["n.", "国家；乡村"],
  course: ["n.", "课程；过程；路线"],
  create: ["v.", "创造；创建"],
  dark: ["adj.", "黑暗的；深色的"],
  deal: ["n./v.", "交易；处理"],
  dear: ["adj./n.", "亲爱的；珍贵的"],
  decide: ["v.", "决定"],
  deep: ["adj.", "深的；深刻的"],
  difficult: ["adj.", "困难的"],
  direction: ["n.", "方向；指示"],
  door: ["n.", "门"],
  dream: ["n./v.", "梦；梦想"],
  early: ["adj./adv.", "早的；提早"],
  earth: ["n.", "地球；土地"],
  easy: ["adj.", "容易的"],
  end: ["n./v.", "结尾；结束"],
  enough: ["det./adv.", "足够的；足够地"],
  ever: ["adv.", "曾经；任何时候"],
  eye: ["n.", "眼睛"],
  face: ["n./v.", "脸；面对"],
  fall: ["v./n.", "落下；秋天"],
  family: ["n.", "家庭；家人"],
  far: ["adj./adv.", "远的；远地"],
  feel: ["v.", "感觉；认为"],
  find: ["v.", "找到；发现"],
  fine: ["adj.", "好的；精细的"],
  fire: ["n.", "火；火灾"],
  first: ["adj./adv.", "第一的；首先"],
  follow: ["v.", "跟随；遵循"],
  force: ["n./v.", "力量；迫使"],
  forget: ["v.", "忘记"],
  form: ["n./v.", "形式；形成"],
  friend: ["n.", "朋友"],
  full: ["adj.", "满的；完整的"],
  girl: ["n.", "女孩"],
  good: ["adj.", "好的"],
  great: ["adj.", "伟大的；很棒的；巨大的"],
  ground: ["n.", "地面；根据"],
  grow: ["v.", "生长；增长"],
  hand: ["n.", "手"],
  happen: ["v.", "发生"],
  hard: ["adj./adv.", "困难的；坚硬的；努力地"],
  hear: ["v.", "听见"],
  heart: ["n.", "心；内心"],
  help: ["v./n.", "帮助"],
  high: ["adj.", "高的"],
  hold: ["v.", "握住；保持；容纳"],
  home: ["n./adv.", "家；在家"],
  hope: ["n./v.", "希望"],
  house: ["n.", "房子"],
  human: ["adj./n.", "人类的；人"],
  idea: ["n.", "想法；主意"],
  important: ["adj.", "重要的"],
  inside: ["prep./adv.", "在里面"],
  interest: ["n./v.", "兴趣；使感兴趣"],
  keep: ["v.", "保持；保留"],
  kind: ["n./adj.", "种类；友善的"],
  large: ["adj.", "大的；大量的"],
  last: ["adj./v.", "最后的；持续"],
  late: ["adj./adv.", "晚的；迟"],
  laugh: ["v./n.", "笑"],
  learn: ["v.", "学习；得知"],
  leave: ["v.", "离开；留下"],
  left: ["adj./n.", "左边的；左边"],
  less: ["det./adv.", "更少；较少"],
  let: ["v.", "让；允许"],
  life: ["n.", "生命；生活"],
  light: ["n./adj.", "光；轻的；浅色的"],
  live: ["v./adj.", "生活；居住；现场直播的"],
  long: ["adj./adv.", "长的；长久地"],
  love: ["n./v.", "爱；喜欢"],
  low: ["adj.", "低的"],
  man: ["n.", "男人；人类"],
  matter: ["n./v.", "事情；物质；要紧"],
  mean: ["v./adj.", "意思是；刻薄的"],
  meet: ["v.", "遇见；满足"],
  moment: ["n.", "片刻；时刻"],
  money: ["n.", "钱"],
  morning: ["n.", "早晨"],
  name: ["n./v.", "名字；命名"],
  nature: ["n.", "自然；本质"],
  near: ["prep./adj.", "在...附近；近的"],
  need: ["v./n.", "需要"],
  new: ["adj.", "新的"],
  night: ["n.", "夜晚"],
  nothing: ["pron.", "没有什么"],
  notice: ["v./n.", "注意到；通知"],
  number: ["n.", "数字；数量"],
  often: ["adv.", "经常"],
  open: ["v./adj.", "打开；开放的"],
  order: ["n./v.", "顺序；命令；点餐"],
  own: ["adj./v.", "自己的；拥有"],
  part: ["n.", "部分；角色"],
  pass: ["v.", "经过；通过；传递"],
  past: ["n./adj.", "过去；过去的"],
  person: ["n.", "人"],
  place: ["n./v.", "地方；放置"],
  play: ["v./n.", "玩；播放；戏剧"],
  point: ["n./v.", "点；观点；指向"],
  possible: ["adj.", "可能的"],
  power: ["n.", "力量；权力；电力"],
  problem: ["n.", "问题；难题"],
  put: ["v.", "放；表达"],
  question: ["n.", "问题"],
  quite: ["adv.", "相当；非常"],
  reach: ["v.", "到达；伸手够到"],
  reason: ["n.", "原因；理由"],
  remember: ["v.", "记得；想起"],
  rest: ["n./v.", "其余；休息"],
  right: ["adj./n.", "正确的；右边；权利"],
  room: ["n.", "房间；空间"],
  run: ["v.", "跑；运行；管理"],
  say: ["v.", "说"],
  second: ["adj./n.", "第二的；秒"],
  seem: ["v.", "似乎；好像"],
  sense: ["n.", "感觉；意义；道理"],
  set: ["v./n.", "放置；设置；一套"],
  show: ["v./n.", "展示；表明；节目"],
  side: ["n.", "边；方面"],
  small: ["adj.", "小的"],
  something: ["pron.", "某事；某物"],
  sound: ["n./v.", "声音；听起来"],
  speak: ["v.", "说话；讲某种语言"],
  start: ["v./n.", "开始"],
  story: ["n.", "故事"],
  strong: ["adj.", "强壮的；强烈的"],
  such: ["det./adj.", "这样的；如此的"],
  sure: ["adj.", "确定的"],
  talk: ["v./n.", "谈话"],
  tell: ["v.", "告诉；辨别"],
  thing: ["n.", "事情；东西"],
  think: ["v.", "认为；思考"],
  thought: ["n./v.", "想法；think 的过去式"],
  together: ["adv.", "一起"],
  told: ["v.", "tell 的过去式；告诉"],
  too: ["adv.", "也；太"],
  toward: ["prep.", "朝向；对于"],
  true: ["adj.", "真实的；正确的"],
  turn: ["v./n.", "转动；轮到"],
  understand: ["v.", "理解"],
  until: ["prep./conj.", "直到"],
  use: ["v./n.", "使用；用途"],
  usually: ["adv.", "通常"],
  voice: ["n.", "声音；嗓音"],
  wait: ["v.", "等待"],
  walk: ["v./n.", "走路；散步"],
  wall: ["n.", "墙"],
  water: ["n.", "水"],
  white: ["adj./n.", "白色的"],
  whole: ["adj./n.", "整个的；整体"],
  woman: ["n.", "女人"],
  word: ["n.", "单词；话语"],
  work: ["n./v.", "工作；运作"],
  world: ["n.", "世界"],
  write: ["v.", "写"],
  year: ["n.", "年"],
  yet: ["adv./conj.", "还；然而"],
  young: ["adj.", "年轻的"],
  yourself: ["pron.", "你自己"]
};

const domainDictionary = {
  access: ["n./v.", "访问；使用权限；获取"],
  api: ["n.", "应用程序接口；API"],
  anthropic: ["n.", "Anthropic 公司；Claude 的开发公司"],
  aws: ["n.", "亚马逊云服务 AWS"],
  billed: ["v.", "计费；开账单"],
  building: ["v./n.", "构建；建设；建筑物"],
  choose: ["v.", "选择"],
  claude: ["n.", "Claude，Anthropic 的 AI 助手"],
  data: ["n.", "数据"],
  employee: ["n.", "员工"],
  employees: ["n.", "员工；雇员"],
  offer: ["v./n.", "提供；供应；提议"],
  path: ["n.", "路径；方式；路线"],
  put: ["v.", "放置；部署；使处于"],
  requirements: ["n.", "要求；需求；条件"],
  residency: ["n.", "驻留；所在地；居留"],
  strict: ["adj.", "严格的"],
  team: ["n.", "团队；小组"],
  three: ["num.", "三；三个"],
  whether: ["conj.", "是否；无论"],
  within: ["prep.", "在...之内；在...范围内"],
  workload: ["n.", "工作负载；工作量"],
  workloads: ["n.", "工作负载；工作量"]
};

Object.assign(dictionary, extendedDictionary);
Object.assign(dictionary, domainDictionary);

const state = {
  text: localStorage.getItem("reader:text") || "",
  saved: JSON.parse(localStorage.getItem("reader:saved") || "[]"),
  lookupCache: JSON.parse(localStorage.getItem("reader:lookupCache") || "{}"),
  customGlosses: JSON.parse(localStorage.getItem("reader:customGlosses") || "{}"),
  translations: JSON.parse(localStorage.getItem("reader:translations") || "{}"),
  read: new Set(JSON.parse(localStorage.getItem("reader:read") || "[]")),
  activeTerm: "",
  activeMeaning: "",
  activeButton: null
};

const sourceText = $("#source-text");
const wordCount = $("#word-count");
const savedCount = $("#saved-count");
const readCount = $("#read-count");
const composerView = $("#composer-view");
const readerView = $("#reader-view");
const readingSurface = $("#reading-surface");
const popover = $("#lookup-popover");
const progressBar = $("#progress-bar");
const translationPanel = $("#translation-panel");
const translationOutput = $("#translation-output");
const translationEditInput = $("#translation-edit-input");

sourceText.value = state.text;
updateCounts();

$("#sample-btn").addEventListener("click", () => {
  sourceText.value = sampleText;
  persistText();
});

sourceText.addEventListener("input", persistText);
$("#start-reading").addEventListener("click", startReading);
$("#back-btn").addEventListener("click", () => switchView("composer"));
$("#theme-toggle").addEventListener("click", toggleTheme);
$("#close-popover").addEventListener("click", closePopover);
$("#speak-word").addEventListener("click", () => speak(state.activeTerm));
$("#save-word").addEventListener("click", saveActiveTerm);
$("#mark-known").addEventListener("click", markActiveKnown);
$("#custom-meaning-form").addEventListener("submit", saveCustomMeaning);
$("#speak-page").addEventListener("click", () => speak(state.text));
$("#toggle-translation").addEventListener("click", () => toggleTranslation());
$("#refresh-translation").addEventListener("click", () => loadFullTranslation(true));
$("#translation-edit-form").addEventListener("submit", saveEditedTranslation);
$("#pause-speech").addEventListener("click", pauseSpeech);
$("#open-notes").addEventListener("click", () => renderNotes(true));
$("#close-notes").addEventListener("click", () => $("#notes-drawer").classList.remove("open"));
$("#nav-speak").addEventListener("click", () => speak(state.text));
$("#nav-translation").addEventListener("click", () => toggleTranslation());
$("#nav-notes").addEventListener("click", () => renderNotes(true));

$("#font-size").addEventListener("input", (event) => {
  document.documentElement.style.setProperty("--reader-font", `${event.target.value}px`);
});

$("#line-height").addEventListener("input", (event) => {
  document.documentElement.style.setProperty("--reader-line", `${event.target.value / 100}`);
});

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection().toString().trim();
  if (selection.includes(" ") && selection.length < 90 && readerView.classList.contains("active")) {
    showLookup(selection, null, true);
  }
});

function persistText() {
  state.text = sourceText.value.trim();
  localStorage.setItem("reader:text", state.text);
  updateCounts();
}

function updateCounts() {
  const words = (sourceText.value.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || []).length;
  wordCount.textContent = words;
  savedCount.textContent = state.saved.length;
  readCount.textContent = state.read.size;
}

function switchView(view) {
  const reading = view === "reader";
  composerView.classList.toggle("active", !reading);
  readerView.classList.toggle("active", reading);
  closePopover();
}

function startReading() {
  persistText();
  if (!state.text) {
    sourceText.focus();
    return;
  }
  renderText(state.text);
  resetTranslationPanel();
  switchView("reader");
}

async function toggleTranslation() {
  const willOpen = !translationPanel.classList.contains("open");
  translationPanel.classList.toggle("open", willOpen);
  $(".reader-card").classList.toggle("translation-open", willOpen);
  $("#nav-translation").classList.toggle("active", willOpen);
  if (willOpen) {
    await loadFullTranslation(false);
    translationPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

async function loadFullTranslation(forceRefresh) {
  if (!state.text) return;
  const key = translationKey(state.text);
  if (!forceRefresh && state.translations[key]) {
    setTranslation(state.translations[key]);
    return;
  }

  translationOutput.classList.add("loading");
  translationOutput.textContent = "正在生成全文翻译...";
  translationEditInput.value = "";

  const translation = await translateFullText(state.text);
  setTranslation(translation);
  state.translations[key] = translation;
  localStorage.setItem("reader:translations", JSON.stringify(state.translations));
}

async function translateFullText(text) {
  if (normalizeSpaces(text) === normalizeSpaces(sampleText)) {
    return sampleTranslation;
  }

  const chunks = splitForTranslation(text);
  const translatedChunks = [];
  for (const chunk of chunks) {
    const translated = await translateChunk(chunk);
    translatedChunks.push(translated || `（这一段暂时没有自动翻译成功，可以在下方手动补充。）\n${chunk}`);
  }
  return translatedChunks.join("\n\n");
}

async function translateChunk(text) {
  return translateWithProviders(text);
}

async function translateWithProviders(text) {
  const providers = [
    () => translateWithLingva(text),
    () => translateWithMyMemory(text),
    () => translateWithGoogle(text)
  ];

  for (const provider of providers) {
    const translated = await provider();
    if (translated && translated.toLowerCase() !== text.toLowerCase()) return translated;
  }
  return translateWithLocalRules(text);
}

async function translateWithLingva(text) {
  const endpoints = [
    "https://lingva.ml/api/v1/en/zh/",
    "https://translate.plausibility.cloud/api/v1/en/zh/"
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${endpoint}${encodeURIComponent(text)}`);
      if (!response.ok) continue;
      const data = await response.json();
      const translated = data?.translation;
      if (translated) return cleanMachineTranslation(translated);
    } catch (error) {
      continue;
    }
  }
  return "";
}

async function translateWithMyMemory(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`;
  try {
    const response = await fetch(url);
    if (!response.ok) return "";
    const data = await response.json();
    const translated = data?.responseData?.translatedText;
    return translated ? cleanMachineTranslation(translated) : "";
  } catch (error) {
    return "";
  }
}

async function translateWithGoogle(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) return "";
    const data = await response.json();
    return cleanMachineTranslation(data?.[0]?.map((item) => item?.[0] || "").join("").trim() || "");
  } catch (error) {
    return "";
  }
}

function cleanMachineTranslation(text) {
  return String(text)
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/&amp;/g, "&")
    .trim();
}

function translateWithLocalRules(text) {
  let translated = normalizeSpaces(text);
  phraseTranslations.forEach(([source, target]) => {
    translated = translated.replaceAll(source, target);
  });

  if (/^[\u4e00-\u9fa5A-Za-z0-9\s，。；：、,.!?'"()\-]+$/.test(translated) && translated !== normalizeSpaces(text)) {
    return translated;
  }

  const lower = normalizeSpaces(text).toLowerCase();
  if (lower.includes("claude") || lower.includes("aws") || lower.includes("api")) {
    return translateTechSentence(text);
  }

  return "";
}

function translateTechSentence(text) {
  const replacements = [
    ["choose", "选择"],
    ["how", "如何"],
    ["your team", "你的团队"],
    ["team", "团队"],
    ["works with", "使用"],
    ["work with", "使用"],
    ["claude", "Claude"],
    ["on aws", "在 AWS 上"],
    ["anthropic", "Anthropic"],
    ["and", "和"],
    ["aws", "AWS"],
    ["offer", "提供"],
    ["three ways", "三种方式"],
    ["three", "三种"],
    ["ways", "方式"],
    ["to access", "访问"],
    ["access", "访问"],
    ["billed through", "通过...计费"],
    ["whether you're", "无论你是"],
    ["building on", "基于...构建"],
    ["the api", "API"],
    ["api", "API"],
    ["putting", "放到"],
    ["in front of", "面向"],
    ["every employee", "每一位员工"],
    ["employee", "员工"],
    ["or", "或"],
    ["working within", "在...范围内工作"],
    ["within", "在...范围内"],
    ["strict", "严格的"],
    ["data residency requirements", "数据驻留要求"],
    ["data", "数据"],
    ["residency", "驻留"],
    ["requirements", "要求"],
    ["there's a path", "都有一条路径"],
    ["path", "路径"],
    ["built for", "为...构建"],
    ["your workload", "你的工作负载"],
    ["workload", "工作负载"]
  ];

  let result = ` ${normalizeSpaces(text).toLowerCase()} `;
  replacements.forEach(([source, target]) => {
    result = result.replaceAll(` ${source} `, ` ${target} `);
  });
  return result
    .replace(/\s+/g, " ")
    .replace(/\s+([，。；：,.!?])/g, "$1")
    .trim();
}

function splitForTranslation(text) {
  const paragraphs = text.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  const source = paragraphs.length ? paragraphs : [text.trim()];
  const chunks = [];
  source.forEach((paragraph) => {
    if (paragraph.length <= 900) {
      chunks.push(paragraph);
      return;
    }
    const sentences = paragraph.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [paragraph];
    let current = "";
    sentences.forEach((sentence) => {
      if ((current + sentence).length > 900 && current) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current += sentence;
      }
    });
    if (current.trim()) chunks.push(current.trim());
  });
  return chunks;
}

function saveEditedTranslation(event) {
  event.preventDefault();
  const edited = translationEditInput.value.trim();
  if (!edited || !state.text) return;
  const key = translationKey(state.text);
  state.translations[key] = edited;
  localStorage.setItem("reader:translations", JSON.stringify(state.translations));
  setTranslation(edited);
  translationEditInput.value = "";
}

function setTranslation(text) {
  translationOutput.classList.remove("loading");
  translationOutput.textContent = text;
  translationEditInput.value = text;
}

function resetTranslationPanel() {
  translationPanel.classList.remove("open");
  $(".reader-card").classList.remove("translation-open");
  $("#nav-translation").classList.remove("active");
  translationOutput.classList.remove("loading");
  translationOutput.textContent = "点击“译”后生成中文全文翻译。";
  translationEditInput.value = "";
}

function translationKey(text) {
  let hash = 0;
  const normalized = normalizeSpaces(text);
  for (let index = 0; index < normalized.length; index += 1) {
    hash = ((hash << 5) - hash + normalized.charCodeAt(index)) | 0;
  }
  return `text-${normalized.length}-${hash}`;
}

function normalizeSpaces(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function renderText(text) {
  const parts = text.match(/[A-Za-z]+(?:'[A-Za-z]+)?|[^A-Za-z]+/g) || [];
  const savedSet = new Set(state.saved.map((item) => item.term.toLowerCase()));
  readingSurface.innerHTML = "";

  parts.forEach((part, index) => {
    if (/^[A-Za-z]/.test(part)) {
      const clean = normalize(part);
      const button = document.createElement("button");
      button.className = "word";
      button.type = "button";
      button.textContent = part;
      button.dataset.term = clean;
      button.dataset.index = index;
      button.classList.toggle("saved", savedSet.has(clean));
      button.classList.toggle("read", state.read.has(clean) && $("#dim-read").checked);
      button.addEventListener("click", () => showLookup(part, button, false));
      readingSurface.appendChild(button);
    } else {
      const span = document.createElement("span");
      span.className = "punct";
      span.textContent = part;
      readingSurface.appendChild(span);
    }
  });
  updateProgress();
}

async function showLookup(rawTerm, button, isPhrase) {
  const term = isPhrase ? rawTerm : normalize(rawTerm);
  if (!term) return;

  if (state.activeButton) state.activeButton.classList.remove("active");
  state.activeButton = button;
  if (button) button.classList.add("active");

  state.activeTerm = term;
  $("#lookup-word").textContent = rawTerm;
  $("#lookup-phonetic").textContent = isPhrase ? "phrase" : guessPhonetic(term);
  $("#custom-meaning-input").value = "";
  setMeaning(explain(term, isPhrase));
  $("#save-word").textContent = isSaved(term) ? "已收藏" : "收藏";
  popover.classList.add("open");
  positionPopover(button);

  if (!isPhrase) {
    state.read.add(term);
    localStorage.setItem("reader:read", JSON.stringify([...state.read]));
    button.classList.toggle("read", $("#dim-read").checked);
    updateCounts();
    updateProgress();
  }

  if ($("#auto-speak").checked) speak(rawTerm);

  if (!isPhrase) {
    await enrichLookup(term);
  }
}

function positionPopover(button) {
  const maxWidth = Math.min(350, window.innerWidth - 36);
  popover.style.width = `${maxWidth}px`;

  if (!button) {
    popover.style.left = "50%";
    popover.style.bottom = "88px";
    popover.style.top = "auto";
    popover.style.transform = "translate(-50%, 0)";
    return;
  }

  const rect = button.getBoundingClientRect();
  const desiredLeft = rect.left + rect.width / 2;
  const clampedLeft = Math.min(window.innerWidth - maxWidth / 2 - 16, Math.max(maxWidth / 2 + 16, desiredLeft));
  const top = Math.max(72, rect.top - 178);
  const tailLeft = Math.min(maxWidth - 42, Math.max(26, desiredLeft - clampedLeft + maxWidth / 2 - 11));

  popover.style.left = `${clampedLeft}px`;
  popover.style.top = `${top}px`;
  popover.style.bottom = "auto";
  popover.style.transform = "translate(-50%, 0)";
  $(".bubble-tail").style.left = `${tailLeft}px`;
}

function explain(term, isPhrase) {
  if (isPhrase) return "选中的短语。可以先听发音，再按语境拆成几个关键词理解。";
  const lower = normalize(term);
  const custom = state.customGlosses[lower];
  if (custom) return custom;
  const cached = state.lookupCache[lower];
  if (cached) return cached.meaning;
  const entry = lookupLocal(lower);
  if (entry) return `${entry[0]} ${entry[1]}`;
  return "正在在线查词...";
}

function guessPhonetic(term) {
  const lower = normalize(term);
  const cached = state.lookupCache[lower];
  if (cached?.phonetic) return cached.phonetic;
  if (lookupLocal(lower)) return lookupLocal(lower)[0];
  if (lower.endsWith("tion")) return "/-shən/";
  if (lower.endsWith("ing")) return "/-ing/";
  if (lower.endsWith("ed")) return "/-ed/";
  return "tap to hear";
}

async function enrichLookup(term) {
  const lower = normalize(term);
  if (state.customGlosses[lower] || state.lookupCache[lower] || lookupLocal(lower)) return;
  const result = await fetchDictionaryMeaning(lower);
  if (normalize(state.activeTerm) !== lower) return;

  if (result) {
    state.lookupCache[lower] = result;
    localStorage.setItem("reader:lookupCache", JSON.stringify(state.lookupCache));
    $("#lookup-phonetic").textContent = result.phonetic || "online";
    setMeaning(result.meaning);
    updateSavedMeaning(lower, result.meaning);
    return;
  }

  setMeaning("在线词典没有返回结果。可以在下面补一个中文释义，保存后这个词以后都会自动显示。");
}

async function fetchDictionaryMeaning(term) {
  const candidates = [...new Set([term, ...wordForms(term)])];
  for (const candidate of candidates) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(candidate)}`);
      if (!response.ok) continue;
      const data = await response.json();
      const parsed = await parseDictionaryApi(data, candidate);
      if (parsed) return parsed;
    } catch (error) {
      return null;
    }
  }
  return null;
}

async function parseDictionaryApi(data, candidate) {
  const entry = Array.isArray(data) ? data[0] : null;
  const meaning = pickBestMeaning(entry?.meanings || []);
  const definition = meaning?.definitions?.[0]?.definition;
  if (!definition) return null;

  const part = meaning.partOfSpeech ? `${meaning.partOfSpeech}. ` : "";
  const baseNote = candidate === normalize(state.activeTerm) ? "" : `原形 ${candidate}：`;
  const translatedDefinition = await translateWithProviders(definition);
  const finalDefinition = translatedDefinition || definition;
  const example = meaning.definitions[0].example ? ` 例句：${meaning.definitions[0].example}` : "";
  const phonetic = entry.phonetic || entry.phonetics?.find((item) => item.text)?.text || "online";
  return {
    phonetic,
    meaning: `${baseNote}${part}${finalDefinition}${example}`
  };
}

function pickBestMeaning(meanings) {
  const preferred = ["verb", "noun", "adjective", "adverb"];
  for (const part of preferred) {
    const match = meanings.find((meaning) => meaning.partOfSpeech === part && meaning.definitions?.[0]?.definition);
    if (match) return match;
  }
  return meanings.find((meaning) => meaning.definitions?.[0]?.definition);
}

function wordForms(term) {
  const forms = [];
  if (term.endsWith("ies") && term.length > 4) forms.push(`${term.slice(0, -3)}y`);
  if (term.endsWith("ing") && term.length > 5) {
    forms.push(term.slice(0, -3));
    forms.push(`${term.slice(0, -3)}e`);
  }
  if (term.endsWith("ed") && term.length > 4) {
    forms.push(term.slice(0, -2));
    forms.push(`${term.slice(0, -1)}`);
  }
  if (term.endsWith("s") && term.length > 3) forms.push(term.slice(0, -1));
  return forms;
}

function lookupLocal(term) {
  if (dictionary[term]) return dictionary[term];
  for (const candidate of wordForms(term)) {
    if (dictionary[candidate]) return dictionary[candidate];
  }
  return null;
}

function setMeaning(meaning) {
  state.activeMeaning = meaning;
  $("#lookup-meaning").textContent = meaning;
}

function speak(text) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function pauseSpeech() {
  if (!("speechSynthesis" in window)) return;
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
  } else {
    window.speechSynthesis.resume();
  }
}

function saveActiveTerm() {
  const term = state.activeTerm;
  if (!term || isSaved(term)) return;
  state.saved.unshift({
    term,
    meaning: state.activeMeaning || explain(term, term.includes(" ")),
    createdAt: new Date().toISOString()
  });
  localStorage.setItem("reader:saved", JSON.stringify(state.saved));
  document.querySelectorAll(`.word[data-term="${CSS.escape(normalize(term))}"]`).forEach((word) => word.classList.add("saved"));
  $("#save-word").textContent = "已收藏";
  updateCounts();
}

function saveCustomMeaning(event) {
  event.preventDefault();
  const term = normalize(state.activeTerm);
  const meaning = $("#custom-meaning-input").value.trim();
  if (!term || !meaning) return;
  state.customGlosses[term] = meaning;
  localStorage.setItem("reader:customGlosses", JSON.stringify(state.customGlosses));
  setMeaning(meaning);
  if (state.lookupCache[term]) {
    state.lookupCache[term].meaning = meaning;
    localStorage.setItem("reader:lookupCache", JSON.stringify(state.lookupCache));
  }
  updateSavedMeaning(term, meaning);
  $("#custom-meaning-input").value = "";
}

function updateSavedMeaning(term, meaning) {
  let changed = false;
  state.saved = state.saved.map((item) => {
    if (normalize(item.term) !== term) return item;
    changed = true;
    return { ...item, meaning };
  });
  if (changed) {
    localStorage.setItem("reader:saved", JSON.stringify(state.saved));
  }
}

function markActiveKnown() {
  if (!state.activeTerm) return;
  state.saved = state.saved.filter((item) => normalize(item.term) !== normalize(state.activeTerm));
  localStorage.setItem("reader:saved", JSON.stringify(state.saved));
  renderText(state.text);
  closePopover();
  updateCounts();
}

function renderNotes(open) {
  const list = $("#notes-list");
  list.innerHTML = "";
  if (!state.saved.length) {
    const empty = document.createElement("p");
    empty.textContent = "还没有收藏。阅读时点一个词，再点收藏。";
    list.appendChild(empty);
  }
  state.saved.forEach((item) => {
    const card = document.createElement("div");
    card.className = "note-item";
    card.innerHTML = `<strong>${escapeHtml(item.term)}</strong><p>${escapeHtml(item.meaning)}</p>`;
    card.addEventListener("click", () => speak(item.term));
    list.appendChild(card);
  });
  $("#notes-drawer").classList.toggle("open", open);
}

function closePopover() {
  popover.classList.remove("open");
  popover.style.top = "";
  popover.style.bottom = "";
  popover.style.transform = "";
  if (state.activeButton) state.activeButton.classList.remove("active");
  state.activeButton = null;
}

function updateProgress() {
  const totalTerms = new Set((state.text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || []).map(normalize));
  const readInText = [...totalTerms].filter((term) => state.read.has(term)).length;
  const percent = totalTerms.size ? Math.round((readInText / totalTerms.size) * 100) : 0;
  progressBar.style.width = `${percent}%`;
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("reader:theme", next);
}

function normalize(value) {
  return String(value).toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g, "");
}

function isSaved(term) {
  return state.saved.some((item) => normalize(item.term) === normalize(term));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

document.documentElement.dataset.theme = localStorage.getItem("reader:theme") || "";

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
