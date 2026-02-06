// Icons will be dynamically mapped in StepCard
export const steps = [
  {
    id: 1,
    title: {
      zh: "安裝 Antigravity",
      en: "Install Antigravity"
    },
    icon: "Download",
    content: {
      zh: `
      <p class="mb-4">一切的起點。首先獲取您的強力 AI 編程助手。</p>
      
      <div class="bg-cyan-950/30 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
        <h4 class="text-cyan-400 font-bold mb-2">安裝步驟 :</h4>
        <ol class="list-decimal list-inside space-y-2 text-gray-300">
          <li>前往 <span class="text-cyan-300 hover:underline cursor-pointer">下載頁面</span> 下載 Antigravity</li>
          <li>執行安裝程式 (Windows 用戶一路點擊下一步即可)</li>
          <li>啟動 Antigravity 並登入您的 Google 帳號</li>
          <li>(可選) 進入擴充市場安裝中文語言包</li>
        </ol>
      </div>
      `,
      en: `
      <p class="mb-4">Where it all begins. First, get your powerful AI coding assistant.</p>
      
      <div class="bg-cyan-950/30 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
        <h4 class="text-cyan-400 font-bold mb-2">Installation Steps:</h4>
        <ol class="list-decimal list-inside space-y-2 text-gray-300">
          <li>Go to <span class="text-cyan-300 hover:underline cursor-pointer">Download Page</span> to get Antigravity</li>
          <li>Run the installer (Windows users just click Next)</li>
          <li>Launch Antigravity and log in with your Google account</li>
          <li>(Optional) Install the Chinese language pack from the extension market</li>
        </ol>
      </div>
      `
    },
    proTip: {
      zh: "Antigravity 完全兼容 VS Code 插件，您可以直接導入您習慣的設定。",
      en: "Antigravity is fully compatible with VS Code extensions, so you can import your settings directly."
    },
    image: "https://placehold.co/600x400/0f172a/06b6d4?text=Install+Antigravity"
  },
  {
    id: 2,
    title: {
      zh: "部署 Agent Skills",
      en: "Deploy Agent Skills"
    },
    icon: "FolderTree",
    content: {
      zh: `
      <p class="mb-4">確保您的工作區結構正確，AI 才能讀取到技能。</p>
      
      <div class="bg-black/30 p-6 rounded-xl border border-white/10 shadow-inner relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>
        <h4 class="text-gray-400 text-xs font-bold tracking-widest mb-4 uppercase flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-500"></span> Workspace Structure
        </h4>
        
        <div class="font-mono text-sm space-y-1">
          {/* Root */}
          <div class="flex items-center gap-2 text-cyan-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">Agent Skill/</span>
            <span class="text-gray-500 text-xs">// 專案根目錄</span>
          </div>
          
          {/* Level 1: .agent */}
          <div class="flex items-center gap-2 text-fuchsia-400 pl-6 relative">
            <div class="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>
            <div class="absolute left-2 top-1/2 w-4 h-px bg-white/10"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">.agent/</span>
            <span class="text-xs bg-fuchsia-900/40 text-fuchsia-200 px-1.5 rounded border border-fuchsia-500/30">Core Config</span>
          </div>

          {/* Level 2: skills */}
          <div class="flex items-center gap-2 text-yellow-300 pl-12 relative">
            <div class="absolute left-2 top-0 bottom-1/2 w-px bg-white/10"></div>
            <div class="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>
            <div class="absolute left-8 top-1/2 w-4 h-px bg-white/10"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">skills/</span>
            <span class="text-gray-500 text-xs">// 技能資料夾</span>
          </div>
          
          {/* Level 3: skill-items */}
          <div class="flex flex-col gap-1 pl-[4.5rem] relative text-gray-400">
             <div class="absolute left-0 top-0 bottom-4 w-px bg-white/10"></div>
             
             {/* docx example */}
             <div class="flex flex-col relative">
               <div class="flex items-center gap-2 relative">
                 <div class="absolute -left-4 top-1/2 w-4 h-px bg-white/10"></div>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                 <span>docx/</span>
               </div>
               {/* references folder inside docx */}
               <div class="flex items-center gap-2 relative pl-6 text-fuchsia-300/80">
                 <div class="absolute left-2 top-0 bottom-1/2 w-px bg-white/10"></div>
                 <div class="absolute left-2 top-1/2 w-3 h-px bg-white/10"></div>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
                 <span>references/</span>
                 <span class="text-[10px] bg-fuchsia-900/30 px-1 rounded border border-fuchsia-500/20">Knowledge Base</span>
               </div>
             </div>
             
             <div class="flex items-center gap-2 relative mt-1">
               <div class="absolute -left-4 top-1/2 w-4 h-px bg-white/10"></div>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
               <span>imagen/SKILL.md</span>
             </div>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-gray-400 border-l-2 border-yellow-500 pl-3">
        <strong>references 資料夾：</strong> 用於存放該技能專屬的參考文件 (如 PDF、MD)。AI 在執行該技能時，會自動讀取這裡的資料作為背景知識 (RAG)。
      </p>
      `,
      en: `
      <p class="mb-4">Ensure your workspace structure is correct so AI can read the skills.</p>
      
      <div class="bg-black/30 p-6 rounded-xl border border-white/10 shadow-inner relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>
        <h4 class="text-gray-400 text-xs font-bold tracking-widest mb-4 uppercase flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-500"></span> Workspace Structure
        </h4>
        
        <div class="font-mono text-sm space-y-1">
          {/* Same visual structure */}
          <div class="flex items-center gap-2 text-cyan-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">Agent Skill/</span>
            <span class="text-gray-500 text-xs">// Root</span>
          </div>
           {/* Level 1: .agent */}
          <div class="flex items-center gap-2 text-fuchsia-400 pl-6 relative">
            <div class="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>
            <div class="absolute left-2 top-1/2 w-4 h-px bg-white/10"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">.agent/</span>
            <span class="text-xs bg-fuchsia-900/40 text-fuchsia-200 px-1.5 rounded border border-fuchsia-500/30">Core Config</span>
          </div>

          {/* Level 2: skills */}
          <div class="flex items-center gap-2 text-yellow-300 pl-12 relative">
            <div class="absolute left-2 top-0 bottom-1/2 w-px bg-white/10"></div>
            <div class="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>
            <div class="absolute left-8 top-1/2 w-4 h-px bg-white/10"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
            <span class="font-bold">skills/</span>
            <span class="text-gray-500 text-xs">// Skills Dir</span>
          </div>
          
           {/* Level 3: skill-items */}
          <div class="flex flex-col gap-1 pl-[4.5rem] relative text-gray-400">
             <div class="absolute left-0 top-0 bottom-4 w-px bg-white/10"></div>
             
             {/* docx example */}
             <div class="flex flex-col relative">
               <div class="flex items-center gap-2 relative">
                 <div class="absolute -left-4 top-1/2 w-4 h-px bg-white/10"></div>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                 <span>docx/</span>
               </div>
               {/* references folder inside docx */}
               <div class="flex items-center gap-2 relative pl-6 text-fuchsia-300/80">
                 <div class="absolute left-2 top-0 bottom-1/2 w-px bg-white/10"></div>
                 <div class="absolute left-2 top-1/2 w-3 h-px bg-white/10"></div>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"></path></svg>
                 <span>references/</span>
                 <span class="text-[10px] bg-fuchsia-900/30 px-1 rounded border border-fuchsia-500/20">Knowledge Base</span>
               </div>
             </div>
             
             <div class="flex items-center gap-2 relative mt-1">
               <div class="absolute -left-4 top-1/2 w-4 h-px bg-white/10"></div>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
               <span>imagen/SKILL.md</span>
             </div>
          </div>

        </div>
      </div>
      
      <p className="mt-4 text-sm text-gray-400 border-l-2 border-yellow-500 pl-3">
        <strong>references Folder:</strong> Stores specific reference docs (PDF, MD) for that skill. AI automatically reads these for RAG context.
      </p>
      `
    },
    proTip: {
      zh: "結構錯誤是技能無法載入的最常見原因。請務必確認層級正確！",
      en: "Invalid structure is the most common reason skills fail to load. Please verify your hierarchy!"
    },
    image: "https://placehold.co/600x400/0f172a/d946ef?text=Verified+Structure"
  },
  {
    id: 3,
    title: {
      zh: "歡迎使用 Agent Skills",
      en: "Welcome to Agent Skills"
    },
    icon: "Sparkles",
    content: {
      zh: `
      <p class="mb-4 text-xl">您的 AI 代理現在擁有無限潛能。</p>
      
      <div class="bg-cyan-950/30 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
        <h4 class="text-cyan-400 font-bold mb-2">什麼是 Agent Skill?</h4>
        <p class="text-gray-300 mb-2">
          Agent Skill 是一組由專家定義的指令與工具包。它能讓通用的 AI 瞬間變成特定領域的專家。
        </p>
        <p class="text-gray-300">
          Agent Skills 涵蓋辦公、設計、研究與工作流自動化，能顯著提升您的生產力。
        </p>
      </div>
      `,
      en: `
      <p class="mb-4 text-xl">Your AI Agent now has infinite potential.</p>
      
      <div class="bg-cyan-950/30 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
        <h4 class="text-cyan-400 font-bold mb-2">What is an Agent Skill?</h4>
        <p class="text-gray-300 mb-2">
          An Agent Skill is a set of expert-defined instructions and tools. It instantly transforms a generic AI into a domain expert.
        </p>
        <p class="text-gray-300">
          Agent Skills cover Office, Design, Research, and Workflow Automation, significantly boosting your productivity.
        </p>
      </div>
      `
    },
    proTip: {
      zh: "在對話中輸入 \"Help me with [Topic]\"，AI 會自動選擇最適合的 Skill。",
      en: "Type \"Help me with [Topic]\", and the AI will automatically select the best Skill."
    },
    image: "https://placehold.co/600x400/0f172a/06b6d4?text=Agent+Skills+Hub"
  },
  {
    id: 4,
    title: {
      zh: "文書與辦公自動化",
      en: "Office & Automation"
    },
    icon: "Briefcase",
    content: {
      zh: `
      <p class="mb-4">處理 Office 文件不再需要手動操作。AI 可以幫您創建、編輯與分析。</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div> 
          <span class="text-green-300 font-bold">Local (本地運行)</span>: 檔案主要在您本機處理，資料隱私性高。
        </div>
      </div>
      `,
      en: `
      <p class="mb-4">No more manual processing of Office docs. AI can help you create, edit, and analyze.</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div> 
          <span class="text-green-300 font-bold">Local</span>: Files are processed on your machine for privacy.
        </div>
      </div>
      `
    },
    skills: [
      { name: "docx", desc: { zh: "Word 文件全能處理。撰寫報告、追蹤修訂、格式排版。", en: "Word expert. Reports, track changes, formatting." }, icon: "FileText", type: "Local", reqs: "無" },
      { name: "xlsx", desc: { zh: "Excel 專家。公式計算、數據分析、圖表製作。", en: "Excel expert. Formulas, analysis, charts." }, icon: "Table", type: "Local", reqs: "無" },
      { name: "pptx", desc: { zh: "PowerPoint 生成器。自動排版、演講備忘稿。", en: "PowerPoint generator. Automated layouts, notes." }, icon: "Presentation", type: "Local", reqs: "無" },
      { name: "pdf", desc: { zh: "PDF 工具箱。提取內容、表格辨識、表單填寫。", en: "PDF toolkit. Extract content, tables, forms." }, icon: "FileCode", type: "Local", reqs: "無" },
    ],
    proTip: {
      zh: "試試看：\"幫我分析這個 Excel 報表並生成一個簡短的總結 PPT\"",
      en: "Try: \"Analyze this Excel report and generate a summary PPT\""
    },
    image: "https://placehold.co/600x400/0f172a/d946ef?text=Office+Automation"
  },
  {
    id: 5,
    title: {
      zh: "創意與設計",
      en: "Creative & Design"
    },
    icon: "Palette",
    content: {
      zh: `
      <p class="mb-4">從網站設計到影片製作，釋放 AI 的創造力。</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div> 
          <span class="text-green-300 font-bold">Local</span>: 依賴本機 Node.js 環境。
        </div>
        <div class="flex items-center gap-2">
           <div class="w-2 h-2 bg-fuchsia-500 rounded-full"></div> 
           <span class="text-fuchsia-300 font-bold">Cloud</span>: 需連網調用外部生成模型。
        </div>
      </div>
      `,
      en: `
      <p class="mb-4">Unleash AI creativity, from web design to video production.</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div> 
          <span class="text-green-300 font-bold">Local</span>: Requires local Node.js.
        </div>
        <div class="flex items-center gap-2">
           <div class="w-2 h-2 bg-fuchsia-500 rounded-full"></div> 
           <span class="text-fuchsia-300 font-bold">Cloud</span>: Calls external generation models.
        </div>
      </div>
      `
    },
    skills: [
      { name: "frontend-design", desc: { zh: "頂級網頁設計。拒絕 AI 感，打造獨特 UI。", en: "Top-tier web design. Unique UI without the 'AI look'." }, icon: "Palette", type: "Local", reqs: "Node.js" },
      { name: "imagen", desc: { zh: "AI 圖像生成。UI Mockup、插圖、創意素材。", en: "AI Image Gen. Mockups, illustrations, assets." }, icon: "Image", type: "Cloud", reqs: "Internet" },
      { name: "remotion", desc: { zh: "程式化影片製作。用 React 寫出動態影像。", en: "Programmatic Video. Create motion graphics with React." }, icon: "Video", type: "Local", reqs: "Node.js, FFmpeg" },
      { name: "article-illustration", desc: { zh: "文章配圖專家。自動生成插畫。", en: "Article Illustrator. Auto-generated visuals." }, icon: "PenTool", type: "Cloud", reqs: "Internet" }
    ],
    proTip: {
      zh: "設計網站時，可以說 \"用 frontend-design 幫我做一個 Cyberpunk 風格的登入頁\"。",
      en: "For design, try: \"Use frontend-design to make a Cyberpunk login page\"."
    },
    image: "https://placehold.co/600x400/0f172a/06b6d4?text=Creative+Studio"
  },
  {
    id: 6,
    title: {
      zh: "知識與研究",
      en: "Knowledge & Research"
    },
    icon: "Globe",
    content: {
      zh: `
      <p class="mb-4">將龐大的資訊轉化為易懂的知識與網站。</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs">
        <div class="flex items-center gap-2 mb-1">
           <div class="w-2 h-2 bg-fuchsia-500 rounded-full"></div> 
           <span class="text-fuchsia-300 font-bold">Cloud</span>: NotebookLM 需要 Google 帳戶權限。
        </div>
      </div>
      `,
      en: `
      <p class="mb-4">Transform massive information into accessible knowledge and websites.</p>
      <div class="bg-gray-800/40 p-3 rounded mb-4 text-xs">
        <div class="flex items-center gap-2 mb-1">
           <div class="w-2 h-2 bg-fuchsia-500 rounded-full"></div> 
           <span class="text-fuchsia-300 font-bold">Cloud</span>: NotebookLM requires Google Account access.
        </div>
      </div>
      `
    },
    skills: [
      { name: "notebooklm", desc: { zh: "基於您的筆記與文件回答問題，零幻覺。", en: "Grounded answers from your notes/docs. Zero hallucinations." }, icon: "Brain", type: "Cloud", reqs: "Google Account" },
      { name: "knowledge-2-web", desc: { zh: "知識轉網頁。將文章變成互動式學習網站。", en: "Knowledge to Web. Turn articles into interactive sites." }, icon: "Globe", type: "Local", reqs: "Node.js" },
      { name: "paper-2-web", desc: { zh: "學術論文轉推廣頁。製作海報與介紹影片。", en: "Paper to Web. Promos, posters, and videos from papers." }, icon: "BookOpen", type: "Local", reqs: "Node.js" }
    ],
    proTip: {
      zh: "丟給 AI 一篇論文 PDF，然後說 \"用 paper-2-web 幫我做一個介紹網站\"。",
      en: "Drop a PDF paper and say \"Use paper-2-web to make a promo site\"."
    },
    image: "https://placehold.co/600x400/0f172a/d946ef?text=Knowledge+Base"
  },
  {
    id: 7,
    title: {
      zh: "進階工作流",
      en: "Advanced Workflow"
    },
    icon: "Cpu",
    content: {
      zh: `
      <p class="mb-4">管理複雜任務，甚至創造屬於你自己的 AI 技能。</p>
      `,
      en: `
      <p class="mb-4">Manage complex tasks, or even create your own AI Skills.</p>
      `
    },
    skills: [
      { name: "planning-with-files", desc: { zh: "大型任務規劃。自動建立 task.md 追蹤進度。", en: "Complex Planning. Tracks progress with task.md." }, icon: "Workflow", type: "Local", reqs: "無" },
      { name: "skill-creator", desc: { zh: "技能製造機。引導你將自己的 SOP 變成 AI Skill。", en: "Skill Creator. Turn your SOPs into AI Skills." }, icon: "Wrench", type: "Local", reqs: "無" }
    ],
    proTip: {
      zh: "遇到超複雜任務？先說 \"使用 planning-with-files 幫我規劃一下這個專案\"。",
      en: "Complex project? Say \"Use planning-with-files to plan this out\"."
    },
    image: "https://placehold.co/600x400/0f172a/06b6d4?text=Workflow+Master"
  },
  {
    id: 8,
    title: {
      zh: "更多資源 (Agent Skills 寶典)",
      en: "More Resources"
    },
    icon: "Library",
    content: {
      zh: `
      <p class="mb-4">覺得技能不夠用？這裡有豐富的開源資源供您下載。</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://skillsmp.com/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             SkillsMP <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">聚合 GitHub 上超過 11 萬+ 開源技能。</p>
        </a>
        
        <a href="https://agent-skills.md/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Agent Skills <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">6000+ 好用的技能庫。</p>
        </a>

        <a href="https://skillstore.io/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             SkillStore <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">中文友好的技能商店，安全審查認證。</p>
        </a>

        <a href="https://skills.sh/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Skills.sh <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">快速發現熱門技能，支援一鍵安裝。</p>
        </a>

        <a href="https://www.skillsdirectory.com/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Skills Directory <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">Reddit 社區推薦的精選技能合集。</p>
        </a>
      </div>
      `,
      en: `
      <p class="mb-4">Need more skills? Download from these rich open-source resources.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://skillsmp.com/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             SkillsMP <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">Aggregates 110k+ open source skills from GitHub.</p>
        </a>
        
        <a href="https://agent-skills.md/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Agent Skills <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">6000+ Useful skills library.</p>
        </a>

        <a href="https://skillstore.io/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             SkillStore <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">Chinese-friendly, security audited skill store.</p>
        </a>

        <a href="https://skills.sh/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Skills.sh <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">Discover trending skills, one-click install support.</p>
        </a>

        <a href="https://www.skillsdirectory.com/" target="_blank" class="block bg-white/5 p-4 rounded border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer decoration-0">
           <h4 class="text-cyan-400 font-bold mb-1 group-hover:underline underline-offset-4 flex items-center gap-2">
             Skills Directory <span class="text-xs opacity-50">↗</span>
           </h4>
           <p class="text-xs text-gray-400">Curated collection recommended by Reddit community.</p>
        </a>
      </div>
      `
    },
    proTip: {
      zh: "下載後的技能，只需解壓縮放入 .agent/skills 資料夾即可立即使用！",
      en: "Just download, unzip, and place in .agent/skills to use immediately!"
    },
    image: "https://placehold.co/600x400/0f172a/10b981?text=Download+Skills"
  },
  {
    id: 9,
    title: {
      zh: "開始使用",
      en: "Get Started"
    },
    icon: "Rocket",
    content: {
      zh: `
      <p class="mb-4">準備好開始了嗎？以下是幾個簡單的觸發方式：</p>
      
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-cyan-400 font-bold bg-cyan-900/30 px-2 py-1 rounded copy-trigger hover:bg-cyan-900/50 cursor-pointer transition-colors" data-text="@SkillName">@SkillName</span>
          <span class="text-gray-300">直接提及技能 (如 <span class="text-cyan-300 copy-trigger hover:text-cyan-100 cursor-pointer" data-text="@docx">@docx</span>)</span>
        </div>
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-fuchsia-400 font-bold bg-fuchsia-900/30 px-2 py-1 rounded copy-trigger hover:bg-fuchsia-900/50 cursor-pointer transition-colors" data-text="我要做一個網站...">自然語言</span>
          <span class="text-gray-300">"我要做一個網站..." (AI 自動選用 frontend-design)</span>
        </div>
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded copy-trigger hover:bg-green-900/50 cursor-pointer transition-colors" data-text="/slash">/slash</span>
          <span class="text-gray-300">使用斜線指令查看說明</span>
        </div>
      </div>
      `,
      en: `
      <p class="mb-4">Ready to go? Here are a few ways to trigger skills:</p>
      
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-cyan-400 font-bold bg-cyan-900/30 px-2 py-1 rounded copy-trigger hover:bg-cyan-900/50 cursor-pointer transition-colors" data-text="@SkillName">@SkillName</span>
          <span class="text-gray-300">Mention skill directly (e.g., <span class="text-cyan-300 copy-trigger hover:text-cyan-100 cursor-pointer" data-text="@docx">@docx</span>)</span>
        </div>
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-fuchsia-400 font-bold bg-fuchsia-900/30 px-2 py-1 rounded copy-trigger hover:bg-fuchsia-900/50 cursor-pointer transition-colors" data-text="Make me a website...">Natural Language</span>
          <span class="text-gray-300">"Make me a website..." (AI auto-picks frontend-design)</span>
        </div>
        <div class="bg-black/40 p-3 rounded border border-white/10 flex items-center gap-3">
          <span class="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded copy-trigger hover:bg-green-900/50 cursor-pointer transition-colors" data-text="/slash">/slash</span>
          <span class="text-gray-300">Use slash commands to see options</span>
        </div>
      </div>
      `
    },
    proTip: {
      zh: "您可以隨時要求 AI \"列出我目前擁有的所有 Skills\" 來查看清單。",
      en: "You can ask AI to \"List all my current Skills\" at any time."
    },
    image: "https://placehold.co/600x400/0f172a/d946ef?text=Start+Now"
  }
];
