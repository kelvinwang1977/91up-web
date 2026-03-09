/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Brain, 
  Check, 
  Mic, 
  Bot, 
  ArrowRight, 
  Menu, 
  X,
  Clock,
  Zap,
  FileText,
  PenTool,
  MessageSquare,
  Sparkles,
  Headphones,
  Palette,
  Briefcase
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  const LineButton = ({ className = "" }: { className?: string }) => (
    <a 
      href="https://page.line.me/91up" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`px-5 py-2 bg-[#06C755] text-white text-sm font-bold rounded-full hover:bg-[#05b34c] transition shadow-md shadow-green-100 active:scale-95 duration-200 flex items-center gap-2 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M21.16 8.56C20.73 4.47 16.92 1.5 12.34 1.5 7.02 1.5 2.7 5.4 2.7 10.22c0 4.3 3.38 7.96 8.03 8.61.63.09.89.26.89.66 0 .3-.11.75-.43 1.83-.13.46-.6 1.8-.73 2.18-.21.62.3.96.81.53.53-.45 4.3-4.04 5.86-5.78 2.75-1.9 4.36-4.57 4.03-9.69zM8.3 11.7c-.24 0-.44-.2-.44-.44V8.76c0-.24.2-.44.44-.44.24 0 .44.2.44.44v2.5c0 .24-.2.44-.44.44zm2.44 0c-.24 0-.44-.2-.44-.44V8.76c0-.24.2-.44.44-.44.24 0 .44.2.44.44v2.5c0 .24-.2.44-.44.44zm3.62-2.5c0-.24-.2-.44-.44-.44h-1.8c-.24 0-.44.2-.44.44v2.5c0 .24.2.44.44.44.24 0 .44-.2.44-.44V11.2h1.36c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V9.64h1.36c.24 0 .44-.2.44-.44zm3.62 0c0-.24-.2-.44-.44-.44h-1.8c-.24 0-.44.2-.44.44v2.5c0 .24.2.44.44.44h1.8c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V10.8h1.36c.24 0 .44-.2.44-.44s-.2-.44-.44-.44h-1.36V9.64h1.36c.24 0 .44-.2.44-.44z"/>
      </svg>
      立即諮詢官方LINE
    </a>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans selection:bg-yellow-200 selection:text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="font-black text-slate-900 text-xl tracking-tight">AI 職場外掛</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-base font-bold text-slate-600 items-center">
            <button onClick={() => scrollToSection('intro')} className="hover:text-blue-600 transition hover:-translate-y-0.5">腦袋升級</button>
            <button onClick={() => scrollToSection('scenarios')} className="hover:text-blue-600 transition hover:-translate-y-0.5">實戰演練</button>
            <button onClick={() => scrollToSection('communication')} className="hover:text-blue-600 transition hover:-translate-y-0.5">溝通心法</button>
            <LineButton className="ml-4 hover:scale-105" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900 p-2 bg-slate-100 rounded-lg" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b-2 border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 space-y-4 font-bold text-slate-600">
                <button onClick={() => scrollToSection('intro')} className="text-left py-3 border-b border-slate-100">腦袋升級</button>
                <button onClick={() => scrollToSection('scenarios')} className="text-left py-3 border-b border-slate-100">實戰演練</button>
                <button onClick={() => scrollToSection('communication')} className="text-left py-3 border-b border-slate-100">溝通心法</button>
                <div className="pt-2 flex justify-center">
                  <LineButton className="w-full justify-center py-3 text-base" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-black tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full border-2 border-blue-100 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4" />
              <span>6 小時打造你的「準時下班」神隊友</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              AI 職場外掛 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Google Gemini</span> & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">NotebookLM</span> 全攻略
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed font-medium">
              告別無效加班！讓 AI 幫你讀報告、寫會議記錄、做決策。<br/>
              你只需要做<span className="bg-yellow-200 px-1 mx-1 rounded transform -rotate-1 inline-block border border-yellow-300 text-slate-900 font-bold">下決定</span>的那個人。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <motion.button 
                onClick={() => scrollToSection('scenarios')}
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-slate-900 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                開始實戰演練
              </motion.button>
              <LineButton className="py-4 px-8 text-base shadow-[6px_6px_0px_0px_rgba(6,199,85,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(6,199,85,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-[#06C755]" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Part 1: Mindset Upgrade */}
      <section id="intro" className="py-24 bg-white relative border-y-2 border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4 rotate-3">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">第一部分：腦袋升級</h2>
            <p className="text-xl text-slate-500 font-bold">別再把 AI 當搜尋引擎！它是你的全能顧問。</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-[2rem] border-4 border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-4 py-2 rounded-bl-2xl font-bold text-sm">痛點直擊</div>
              <h3 className="text-2xl font-bold mb-6 mt-2">為什麼我的 AI 給的答案都很廢？</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-1 font-bold">!</div>
                  <p className="text-slate-600">全球只有 5% 的人用 AI 寫程式，卻有近 30% 的人把它當成「生活與決策顧問」。</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center shrink-0 mt-1 font-bold">✓</div>
                  <p className="text-slate-600 font-bold">職場最聰明的用法：你當導演，AI 當剪輯師。</p>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-6 p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 hover:scale-105 transition-transform cursor-default">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600 shrink-0">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Gemini</h4>
                  <p className="text-slate-600">住在 Google Workspace 裡的大腦，幫你寫信、看圖、想點子。</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6 p-6 bg-orange-50 rounded-3xl border-2 border-orange-100 hover:scale-105 transition-transform cursor-default">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-600 shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">NotebookLM</h4>
                  <p className="text-slate-600">不會胡說八道的專屬研究員，專門幫你讀完那堆看不完的 PDF。</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: Practical Scenarios */}
      <section id="scenarios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4 -rotate-3">
              <Briefcase className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">第二部分：實戰演練</h2>
            <p className="text-xl text-slate-500 font-bold">專治職場疑難雜症，直接解決手邊工作。</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border-2 border-slate-100 flex flex-col h-full"
            >
              <div className="w-full h-48 bg-orange-100 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden group">
                <Headphones className="w-20 h-20 text-orange-400 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">NotebookLM</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">資料地獄救星</h3>
              <p className="text-slate-500 mb-6 flex-grow">老闆丟來 100 頁 PDF 或一小時演講影片，要你馬上交摘要？</p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 解法：</h4>
                <p className="text-sm text-slate-600 mb-2">🎧 <strong>用聽的做功課：</strong>一鍵生成「雙人對談 Podcast」，通勤也能吸收。</p>
                <p className="text-sm text-slate-600">🧠 <strong>跨文件大腦：</strong>匯入多份報告，直接問「下一季風險是什麼？」。</p>
              </div>
            </motion.div>

            {/* Scenario 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border-2 border-slate-100 flex flex-col h-full"
            >
              <div className="w-full h-48 bg-blue-100 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden group">
                <PenTool className="w-20 h-20 text-blue-400 transform group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">Gemini Canvas</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">寫作障礙救星</h3>
              <p className="text-slate-500 mb-6 flex-grow">要寫委婉拒絕信，或把零散筆記變週報，卡在電腦前半小時？</p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 解法：</h4>
                <p className="text-sm text-slate-600 mb-2">✍️ <strong>Canvas 協作：</strong>左邊下指令，右邊即時預覽。</p>
                <p className="text-sm text-slate-600">✨ <strong>潤飾魔法：</strong>反白草稿，要求「語氣更委婉專業」。</p>
              </div>
            </motion.div>

            {/* Scenario 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border-2 border-slate-100 flex flex-col h-full"
            >
              <div className="w-full h-48 bg-green-100 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden group">
                <Bot className="w-20 h-20 text-green-400 transform group-hover:translate-y-2 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-600 shadow-sm">Gemini Gems</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">繁瑣庶務救星</h3>
              <p className="text-slate-500 mb-6 flex-grow">每次開完會都要重整格式？有一堆手寫報表要打成 Excel？</p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 解法：</h4>
                <p className="text-sm text-slate-600 mb-2">🤖 <strong>專屬秘書 Gem：</strong>設定永遠把逐字稿轉成「結論+待辦」。</p>
                <p className="text-sm text-slate-600">📸 <strong>圖片轉表格：</strong>拍下白板數據，秒變可編輯 Excel。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 3: Communication */}
      <section id="communication" className="py-24 bg-white border-t-2 border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="inline-block p-3 bg-pink-100 rounded-2xl mb-4 rotate-3">
                <MessageSquare className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">第三部分：溝通心法</h2>
              <p className="text-xl text-slate-500 font-bold mb-8">為什麼別人問 AI 都有好答案，我問出來都是廢話？</p>
              
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-black transform rotate-6 shadow-lg border-2 border-slate-900">
                  黃金公式
                </div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">四模塊框架 (4-Module Framework)</h3>
                <ul className="space-y-4 font-mono text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 px-2 py-1 rounded text-pink-300">Context</span>
                    <span>你是誰？(例：資深產品經理)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 px-2 py-1 rounded text-blue-300">Specifics</span>
                    <span>給素材 (例：受眾 25 歲上班族)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 px-2 py-1 rounded text-green-300">Goal</span>
                    <span>做什麼？(例：寫 3 個 IG 標題)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 px-2 py-1 rounded text-orange-300">Format</span>
                    <span>長怎樣？(例：用表格呈現)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:w-1/2 space-y-6"
            >
              <motion.div variants={fadeInUp} className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-700">#</div>
                  Markdown 指令術
                </h4>
                <p className="text-slate-600">像工程師一樣溝通！學會用簡單符號 (#, -, **) 指揮 AI，讓輸出的報告層次分明，直接複製貼上就能用。</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-700">💾</div>
                  建立 AI 資產
                </h4>
                <p className="text-slate-600">不要每次從頭問。把試出來的好指令存成 Notion 筆記或 Gems，累積屬於你的職場外掛庫。</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">準備好加入 AI 實戰行列了嗎？</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
              本課程適合：數位轉型中的企業員工、尋求效率提升的自由工作者、以及對 AI 應用充滿好奇的你。
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6">
              <LineButton className="px-12 py-4 text-lg shadow-[0px_0px_20px_rgba(6,199,85,0.4)] hover:shadow-[0px_0px_30px_rgba(6,199,85,0.6)]" />
              <p className="text-slate-500 text-sm">點擊按鈕，直接與官方帳號對話</p>
            </div>
            
            <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-center items-center text-slate-500 text-xs gap-4">
              <div>© 2026 AI 職場外掛：Gemini 與 NotebookLM 全攻略</div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

