import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  Bot,
  Brain,
  Briefcase,
  Check,
  Clock,
  FileText,
  Headphones,
  Menu,
  MessageSquare,
  PenTool,
  Rocket,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

type SectionId = 'intro' | 'scenarios' | 'communication';

const menuItems: Array<{id: SectionId; label: string}> = [
  {id: 'intro', label: '腦袋升級'},
  {id: 'scenarios', label: '實戰演練'},
  {id: 'communication', label: '溝通心法'},
];

const scenarioCards = [
  {
    icon: Headphones,
    badge: 'NotebookLM',
    badgeClassName: 'text-orange-600',
    panelClassName: 'bg-orange-100',
    iconClassName: 'text-orange-400',
    title: '快速讀懂大量資料',
    description: '老闆丟來 100 頁 PDF 或一場長會議，要你立刻整理重點時，先交給 NotebookLM。',
    points: [
      '一鍵產出摘要、FAQ 與重點追問方向。',
      '可把多份文件一起丟進去，比對差異與風險。',
    ],
  },
  {
    icon: PenTool,
    badge: 'Gemini Canvas',
    badgeClassName: 'text-blue-600',
    panelClassName: 'bg-blue-100',
    iconClassName: 'text-blue-400',
    title: '把草稿變成正式內容',
    description: '拒絕信、週報、活動文案、會議邀請，先寫出雛形，再讓 Gemini 協助潤飾。',
    points: [
      '左邊下指令，右邊即時看到內容成形。',
      '可指定語氣、長度、對象與格式，減少來回修改。',
    ],
  },
  {
    icon: Bot,
    badge: 'Gemini Gems',
    badgeClassName: 'text-green-600',
    panelClassName: 'bg-green-100',
    iconClassName: 'text-green-400',
    title: '建立自己的專屬助理',
    description: '把常見流程包成固定角色，像是會議整理員、客服助手、內容編修員。',
    points: [
      '固定輸出格式，降低每次重講需求的成本。',
      '圖片、白板、表格都能轉成可編輯資料。',
    ],
  },
];

const communicationCards = [
  {
    marker: '#',
    title: '用結構化方式發問',
    description: '先講背景，再給素材，最後說清楚目標與輸出格式，答案品質會直接提升。',
  },
  {
    marker: '4',
    title: '套用 4 模組框架',
    description: 'Context、Specifics、Goal、Format。讓 AI 知道你是誰、要它做什麼、最後要長什麼樣子。',
  },
  {
    marker: 'S',
    title: '把好用指令留下來',
    description: '把試出來的 prompt 存到 Notion、文件或 Gems，下次直接複用，不要每次重來。',
  },
];

function LineButton({className = ''}: {className?: string}) {
  return (
    <a
      href="https://page.line.me/91up"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#06C755] bg-[#06C755] px-5 py-2 text-sm font-bold text-white shadow-md shadow-green-100 transition hover:bg-[#05b34c] active:scale-95 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
        <path d="M21.16 8.56C20.73 4.47 16.92 1.5 12.34 1.5 7.02 1.5 2.7 5.4 2.7 10.22c0 4.3 3.38 7.96 8.03 8.61.63.09.89.26.89.66 0 .3-.11.75-.43 1.83-.13.46-.6 1.8-.73 2.18-.21.62.3.96.81.53.53-.45 4.3-4.04 5.86-5.78 2.75-1.9 4.36-4.57 4.03-9.69zM8.3 11.7c-.24 0-.44-.2-.44-.44V8.76c0-.24.2-.44.44-.44.24 0 .44.2.44.44v2.5c0 .24-.2.44-.44.44zm2.44 0c-.24 0-.44-.2-.44-.44V8.76c0-.24.2-.44.44-.44.24 0 .44.2.44.44v2.5c0 .24-.2.44-.44.44zm3.62-2.5c0-.24-.2-.44-.44-.44h-1.8c-.24 0-.44.2-.44.44v2.5c0 .24.2.44.44.44.24 0 .44-.2.44-.44V11.2h1.36c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V9.64h1.36c.24 0 .44-.2.44-.44zm3.62 0c0-.24-.2-.44-.44-.44h-1.8c-.24 0-.44.2-.44.44v2.5c0 .24.2.44.44.44h1.8c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V10.8h1.36c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V9.64h1.36c.24 0 .44-.2.44-.44z" />
      </svg>
      加入官方 LINE
    </a>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      setIsMobileMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {type: 'spring', bounce: 0.35, duration: 0.8},
    },
  };

  const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.12},
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FDFDFD] font-sans text-slate-800 selection:bg-yellow-200 selection:text-slate-900">
      <nav className="sticky top-0 z-50 border-b-2 border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <button
            type="button"
            className="group flex items-center gap-3"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:rotate-12">
              <Zap className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">AI 職場外掛</span>
          </button>

          <div className="hidden items-center gap-8 text-base font-bold text-slate-600 md:flex">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="transition hover:-translate-y-0.5 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            <LineButton className="ml-4 hover:scale-105" />
          </div>

          <button
            type="button"
            className="rounded-lg bg-slate-100 p-2 text-slate-900 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{height: 0, opacity: 0}}
              animate={{height: 'auto', opacity: 1}}
              exit={{height: 0, opacity: 0}}
              className="overflow-hidden border-b-2 border-slate-100 bg-white shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6 font-bold text-slate-600">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="border-b border-slate-100 py-3 text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2">
                  <LineButton className="w-full justify-center py-3 text-base" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <header className="relative overflow-hidden pb-32 pt-20">
        <div className="absolute right-0 top-20 -z-10 h-64 w-64 rounded-full bg-yellow-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-blue-100 opacity-60 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}>
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-blue-100 bg-blue-50 px-5 py-2 text-sm font-black uppercase tracking-wide text-blue-700 shadow-sm"
              whileHover={{scale: 1.05}}
            >
              <Clock className="h-4 w-4" />
              <span>6 小時打造你的準時下班神隊友</span>
            </motion.div>

            <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl">
              AI 職場外掛
              <br className="hidden md:block" />
              用 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google Gemini</span>
              {' '}與{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">NotebookLM</span>
              提升工作效率
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl font-medium leading-relaxed text-slate-600">
              把 AI 從聊天玩具，變成你每天真的會用到的工作助手。
              你負責做判斷，AI 幫你整理、起稿、摘要、比對與重組資訊。
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => scrollToSection('scenarios')}
                whileHover={{scale: 1.05, rotate: -1}}
                whileTap={{scale: 0.95}}
                className="flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-slate-900 px-8 py-4 font-bold text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <Rocket className="h-5 w-5" />
                看實戰案例
              </motion.button>
              <LineButton className="border-[#06C755] px-8 py-4 text-base shadow-[6px_6px_0px_0px_rgba(6,199,85,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(6,199,85,0.3)]" />
            </div>
          </motion.div>
        </div>
      </header>

      <section id="intro" className="relative border-y-2 border-slate-100 bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUp}
            className="mb-20 text-center"
          >
            <div className="mb-4 inline-block rotate-3 rounded-2xl bg-blue-100 p-3">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mb-4 text-4xl font-black text-slate-900">第一部分：腦袋升級</h2>
            <p className="text-xl font-bold text-slate-500">別再把 AI 當搜尋引擎，它更像是你的顧問、助理與整理師。</p>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] border-4 border-slate-100 bg-slate-50 p-8 transition-colors hover:border-blue-200"
            >
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
                常見誤區
              </div>
              <h3 className="mb-6 mt-2 text-2xl font-bold">不是把工作丟給 AI，而是把低價值流程交給它</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-500">
                    !
                  </div>
                  <p className="text-slate-600">
                    白屏或成果差，通常不是 AI 不行，而是輸入太模糊、任務拆解不清楚。
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-500">
                    ✓
                  </div>
                  <p className="font-bold text-slate-600">
                    最有效的用法是：你定方向與判斷，AI 負責整理、改寫、提案與初稿。
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                className="flex cursor-default items-center gap-6 rounded-3xl border-2 border-blue-100 bg-blue-50 p-6 transition-transform hover:scale-105"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Gemini</h4>
                  <p className="text-slate-600">適合寫信、整理想法、改寫內容、圖片理解與工作指令協作。</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex cursor-default items-center gap-6 rounded-3xl border-2 border-orange-100 bg-orange-50 p-6 transition-transform hover:scale-105"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm">
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">NotebookLM</h4>
                  <p className="text-slate-600">適合讀文件、彙整來源、做摘要與回答「根據資料」的問題。</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="scenarios" className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block -rotate-3 rounded-2xl bg-purple-100 p-3">
              <Briefcase className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="mb-4 text-4xl font-black text-slate-900">第二部分：實戰演練</h2>
            <p className="text-xl font-bold text-slate-500">專治職場疑難雜症，直接解決手邊工作。</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {scenarioCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{y: -10}}
                  className="flex h-full flex-col rounded-[2.5rem] border-2 border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50"
                >
                  <div className={`relative mb-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-3xl ${card.panelClassName}`}>
                    <Icon className={`h-20 w-20 ${card.iconClassName}`} />
                    <div className={`absolute bottom-4 right-4 rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm ${card.badgeClassName}`}>
                      {card.badge}
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mb-6 flex-grow text-slate-500">{card.description}</p>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-bold text-slate-800">
                      <Check className="h-4 w-4 text-green-500" />
                      可以這樣用
                    </h4>
                    {card.points.map((point) => (
                      <p key={point} className="mb-2 text-sm text-slate-600 last:mb-0">
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="communication" className="border-t-2 border-slate-100 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="mb-4 inline-block rotate-3 rounded-2xl bg-pink-100 p-3">
                <MessageSquare className="h-8 w-8 text-pink-600" />
              </div>
              <h2 className="mb-6 text-4xl font-black text-slate-900">第三部分：溝通心法</h2>
              <p className="mb-8 text-xl font-bold text-slate-500">同樣是問 AI，差別常常出在你怎麼下指令。</p>

              <div className="relative rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
                <div className="absolute -right-4 -top-4 rotate-6 rounded-xl border-2 border-slate-900 bg-yellow-400 px-4 py-2 font-black text-slate-900 shadow-lg">
                  立刻可用
                </div>
                <h3 className="mb-6 text-2xl font-bold text-yellow-400">4 模組提問框架</h3>
                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span className="rounded bg-white/10 px-2 py-1 text-pink-300">Context</span>
                    <span>你是誰，現在在處理什麼情境。</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded bg-white/10 px-2 py-1 text-blue-300">Specifics</span>
                    <span>提供素材、限制條件、對象與語氣需求。</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded bg-white/10 px-2 py-1 text-green-300">Goal</span>
                    <span>明確說出想完成的成果。</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded bg-white/10 px-2 py-1 text-orange-300">Format</span>
                    <span>指定條列、表格、段落或字數上限。</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={staggerContainer}
              className="space-y-6 md:w-1/2"
            >
              {communicationCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className="rounded-3xl border-2 border-slate-100 bg-slate-50 p-6"
                >
                  <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-900">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                      {card.marker}
                    </div>
                    {card.title}
                  </h4>
                  <p className="text-slate-600">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}>
            <h2 className="mb-6 text-3xl font-black md:text-4xl">準備好把 AI 變成工作流程的一部分了嗎？</h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
              從摘要、寫作、整理到固定流程自動化，先挑一個最痛的工作場景開始導入。
            </p>

            <div className="flex flex-col items-center justify-center gap-6">
              <LineButton className="px-12 py-4 text-lg shadow-[0px_0px_20px_rgba(6,199,85,0.4)] hover:shadow-[0px_0px_30px_rgba(6,199,85,0.6)]" />
              <p className="text-sm text-slate-500">點擊按鈕，直接與官方帳號對話</p>
            </div>

            <div className="mt-24 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-10 text-xs text-slate-500 md:flex-row">
              <div>© 2026 AI 職場外掛：Gemini 與 NotebookLM 全攻略</div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
