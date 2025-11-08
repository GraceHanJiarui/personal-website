---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: 
        en: Jiarui Han
        zh: 韩佳芮
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    isLargeTitle: true
    subtitle: 
      en: |
        📍 University of Waterloo | Computer Science, Honours, Co-op (Minor in Pure Math + Economics) | GPA 86.5/100 (3.7/4.0) | 2022-2026
        📧 j22han@uwaterloo.ca ｜ 📞 +1 (382)-889-3603
      zh: |
        📍 滑铁卢大学 | 计算机科学（Co-op，本科，辅修纯数+经济）| GPA 86.5/100（3.7/4.0）| 2022-2026
          📧 j22han@uwaterloo.ca ｜ 📞 +1 (382)-889-3603
    text: 
      en: |-
        <p class='text-lg'>A computer science student passionate about front-end development, backend systems, and AI applications — creating scalable, efficient, and user-centric digital experiences. Through coursework, internships, and personal projects, I’ve worked with a variety of tools and technologies, including:</p>
        
        <br/>
        <p class='text-xl font-bold mt-4'>Programming Languages</p>
        <p class='text-lg mt-1'>C, C++, Python, Java, C#, Racket, SQL, R, HTML/CSS/JavaScript</p>
        <p class='text-xl font-bold mt-4'>Frontend Development</p>
        <p class='text-lg mt-1'>Vue.js, React, Next.js, uni-app, Bootstrap, Tailwind, jQuery, Figma, Adobe Photoshop/Illustrator</p>
          <p class='text-xl font-bold mt-4'>AI & Data Science Libraries</p>
        <p class='text-lg mt-1'>PyTorch, TensorFlow, NumPy, SciPy, Scikit-Image</p>
        <p class='text-xl font-bold mt-4'>Tools & Environment</p>
        <p class='text-lg mt-1'>Unity, Git, Linux, Bash, Jenkins, Gerrit, VS Code, Vim, Microsoft Office (Word, Excel, Outlook, PowerPoint)</p>
      zh: |-
        <p class="text-lg">
          计算机科学在读生，专注前端体验、后端系统与 AI 应用，擅长将业务需求落地为
          可扩展、高性能、以用户为中心的数字产品。通过课程、实习与个人项目，积累了完整的
          前后端与数据智能实践能力。
        </p>
        <br/>
        <p class="text-xl font-bold mt-4">编程语言</p>
        <p class="text-lg mt-1">C/C++、Python、Java、C#、Racket、SQL、R、HTML/CSS/JavaScript</p>

        <p class="text-xl font-bold mt-4">前端开发</p>
        <p class="text-lg mt-1">
          Vue.js、React、Next.js、uni-app、Bootstrap、Tailwind、jQuery；
          原型/设计：Figma、Adobe Photoshop/Illustrator
        </p>

        <p class="text-xl font-bold mt-4">AI & 数据科学库</p>
        <p class="text-lg mt-1">PyTorch、TensorFlow、NumPy、SciPy、scikit-image</p>

        <p class="text-xl font-bold mt-4">工具与环境</p>
        <p class="text-lg mt-1">
          Unity、Git、Linux、Bash、Jenkins、Gerrit、VS Code、Vim、Microsoft Office
          （Word、Excel、Outlook、PowerPoint）
        </p>
        <br/>

    # media:
    #   title: Title of the video
    #   url: /images/placeholder-video.mp4
    #   controls: false
    #   aspectRatio: '16:9'
    #   styles:
    #     self:
    #       padding:
    #         - pt-2
    #         - pb-2
    #         - pl-2
    #         - pr-2
    #       borderColor: border-dark
    #       borderStyle: solid
    #       borderWidth: 1
    #       borderRadius: large
    #   type: VideoBlock
    #   autoplay: true
    #   loop: true
    #   muted: true
    # badge:
    #   label: Key Benefits
    #   color: text-primary
    #   styles:
    #     self:
    #       textAlign: center
    #   type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
  # start of images
  # - type: ImageGallerySection
  #   subtitle: CS related Tech Stack
  #   images:
  #     - url: /images/empathy-logo.svg
  #       altText: Empathy logo
  #       type: ImageBlock
  #     - url: /images/wellster-logo.svg
  #       altText: Wellster logo
  #       type: ImageBlock
  #     - url: /images/vise-logo.svg
  #       altText: Vise logo
  #       type: ImageBlock
  #     - url: /images/telus-logo.svg
  #       altText: Telus logo
  #       type: ImageBlock
  #     - url: /images/contenful-logo.svg
  #       altText: Contentful logo
  #       type: ImageBlock
  #     - url: /images/sanity-logo.svg
  #       altText: Sanity logo
  #       type: ImageBlock
  #     - url: /images/rangle-logo.svg
  #       altText: Rangle logo
  #       type: ImageBlock
  #   # motion: move-to-left
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       justifyContent: center
  #       padding:
  #             - pt-8
  #             - pb-8
  #     subtitle:
  #       textAlign: center
  # end of images
  # start of big list (work experience)
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: 
       en: Work Experience
       zh: 实习经历
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # subtitle: Featured items section subtitle
    items:
      - title: 
          en: Software Intern
          zh: 软件实习生
        tagline: 2025.01 – 2025.04
        subtitle: 
          en: Beijing Xuntong Ontim Communication Co., Ltd.
          zh: 北京讯通安添通讯科技有限公司（北京）
        text: 
          en: |
            - Streamlined project management by automating 80% of manual project progress tasks for SPMs through a Jenkins- and Python-based reporting system integrated with the Jira API
            - Built a tool to automate FTP file transfers and bug progress reporting
            - Processed large-scale audio configuration data from 6+ projects, reducing manual labor by at least two months
          zh: |-
            <ul class="list-disc pl-6 text-lg mt-1 space-y-1">
              <li>搭建 Jenkins + Python + Jira API 项目进度自动化报表，覆盖 SPM 手工统计的 ~80%。</li>
              <li>开发 FTP 自动传输与缺陷进度上报工具，标准化交付流程。</li>
              <li>批量处理 6+ 项目的音频配置数据，累计节省至少 2 个月人力。</li>
            </ul>
            <p class="text-m text-gray-600">技术栈：Python、Jenkins、Jira REST API、FTP、Selenium、Linux、Git</p>
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
      - title: 
          en: Application Developer
          zh: 应用开发工程师
        tagline: 2024.05 – 2024.08
        subtitle: 
          en: National University of Singapore - Institute of Systems Science
          zh: 新加坡国立大学 - 系统科学院（新加坡）
        text: 
          en: |
            - Led full-cycle development of 9+ internal systems based on cross-department requirements with the practice of SDLC.
            - Built web interfaces using Nintex K2, HTML/CSS/JQuery, and managed backend logic with MS SQL
            - Conducted feasibility analysis for automation tools like Power Automate, Selenium, and UIPath in finance operations
          zh: |-
            <ul class="list-disc pl-6 text-lg mt-1 space-y-1">
              <li>端到端落地 9+ 套内部系统（需求→设计→开发→上线→运维），服务跨部门业务。</li>
              <li>使用 Nintex K2、HTML/CSS/jQuery 构建前端，MS SQL 实现后台逻辑与数据管理。</li>
              <li>对财务流程自动化进行可行性分析与 PoC，覆盖 Power Automate、Selenium、UiPath。</li>
            </ul>
            <p class="text-m text-gray-600">技术栈：Nintex K2、HTML/CSS/JavaScript（jQuery）、MS SQL、Power Automate、Selenium、UiPath、Git</p>

        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
      - title: 
          en: eLearning Developer Assistant (Remote)
          zh: 电子学习开发助理（远程）
        tagline: 2023.09 – 2023.12
        subtitle: 
          en: University of Waterloo
          zh: 滑铁卢大学（加拿大）
        text: 
          en: |
            - Developed and QA-tested accessible and responsive learning pages using HTML/CSS/JavaScript + Bootstrap
            - Contributed to seamless learning experiences for over 20,000 students across multiple platforms
            - Designed banners, icons, and layouts using Figma, Photoshop, and Illustrator to improve UX and course visuals
          zh: |-
            <ul class="list-disc pl-6 text-lg mt-1 space-y-1">
              <li>使用 HTML/CSS/JavaScript + Bootstrap 开发并 QA 测试响应式、可访问的教学页面。</li>
              <li>支撑 20,000+ 学生的多平台学习体验，保障稳定与一致性。</li>
              <li>通过 Figma/Photoshop/Illustrator 设计横幅、图标与排版，提升课程 UX 与视觉效果。</li>
            </ul>
            <p class="text-m text-gray-600">技术栈：HTML/CSS/JavaScript、Bootstrap、Figma、Photoshop、Illustrator、Git</p>
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    variant: big-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pr-8
          - pb-20
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  # end of big list (work experience)
  # start of project part
  - type: GenericSection
    title:
      text: 
        en: Projects I am Currently Working on
        zh: 正在开发的项目
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    colors: bg-neutral-fg-dark

  - type: GenericSection
    title:
      text: 
        en: 2D Precision Platformer
        zh: 2D精准跳跃平台游戏
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: 
      en: Indie Unity2D action game built from scratch with friends | Organizer / Lead Developer
      zh: 与朋友一起开发 Unity2D 独立游戏｜团队负责人 / 程序
    text:
            # <s> - Developed core gameplay logic and state machine for 28+ player states
        # - Designed 20+ equippable items, 10+ enemy types, and game flow structure
        # - Demo release planned for Steam in late 2026</s>
      en: |-
        - Leading team meetings, planning, code architecture
        - Built core player & enemy state machines and a modular interaction system using interfaces to keep features loosely coupled and extensible.
        - Implemented Celeste-like game-feel systems: input buffering, coyote time, corner boosts, and velocity inheritance; tuned jump/dash/fall velocity curves through playtest-driven iteration. 
        - Shipped rebindable input, checkpoint/respawn, and an extensible interaction suite (moving platforms, dash-passable  tiles, springs, double-dash)
        - Art is greyboxed to highlight engineering. 30-second clip and a lightweight playable build available beside.
        - <a href="https://www.notion.so/GDD-Game-Planning-Document-29b2599494ee81a593e2ccc6e34ea910?source=copy_link"> Read the Game Design Document (GDD)</a>
      zh: |-
        <ul class="sb-markdown mt-4">
          <li>构建玩家与敌人的<strong>状态机</strong>和<strong>模块化交互系统</strong>（接口解耦），支持快速扩展新能力/敌人与玩法。</li>
          <li>实现“类 Celeste”<strong>手感系统</strong>：输入缓冲、<strong>Coyote Time（空中容错）</strong>、<strong>Corner Boost（角落提速）</strong>、<strong>Velocity Inheritance（速度继承）</strong>；基于多轮试玩持续调优<strong>跳跃/冲刺/下落速度曲线</strong>。</li>
          <li>上线可重绑定输入、检查点/重生，并提供可扩展交互组件（移动平台、可冲刺穿越砖块、弹簧、二段冲刺等）。</li>
          <li>主导<strong>架构设计与迭代节奏</strong>；组织团队会议，编写关卡/内容；<strong>目标</strong>：预计<strong>2026 年</strong>发布 Steam 公开 Demo。</li>
        </ul>
        <p class="text-m text-gray-600">技术栈：Unity2D、PlasticSCM、C#、ScriptableObject、事件/状态模式、协程</p>
    actions: []
    media:
      title: Title of the video
      url: /images/game.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
    elementId: game
    colors: bg-neutral-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - type: GenericSection
    title:
      text: 
        en: TuneTrace
        zh: 曲迹
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: 
      en: Mobile humming-to-MIDI App | Solo Developer
      zh: 轻量化哼唱转 MIDI（移动端）｜个人独立开发
    text:
      en: |-
        - Tch Stack: Flutter/Dart (cross-platform development), Python, FastAPI & CREPE/YIN（backend & Pitch Track), MusicXML/PDF rendering
        - Solo project covering product, UI and audio/DSP; goal: a lightweight path from idea → editable MIDI.
        - Implemented humming → baseline melody MIDI; piano-roll editing (add/move/resize notes, zoom/scroll, playhead)
        - Pro exports: MIDI (Type 1), audio (WAV/MP3), and sheet music (PDF/MusicXML)..
        - Current state: responsive UI; voice/piano modes; zoomable piano roll with add/move/resize/delete and snapping; multi-track overlay with main-track focus; playhead and basic transport; settings; export dialogs.
        - Next week: smooth real-time pitch tracking, and complete MIDI/WAV export with the audio engine.
        - Roadmap: automatic separation (melody/harmony/bass), quantize preview + undo, export presets & batch naming.
      zh: |-
        <ul class="sb-markdown mt-4">
          <li>个人独立项目，负责产品、界面与音频/DSP，目标是提供“灵感→可编辑 MIDI”的轻量化路径。</li>
          <li>实现哼唱→主旋律 MIDI 基线转换；提供 Piano-roll 基础编辑（增删/移动/拉伸音符，缩放/滚动，播放指示线）。</li>
          <li>导出能力：MIDI（Type 1）、音频（WAV/MP3）、乐谱（PDF/MusicXML）</li>
          <li>当前进度：已完成响应式 UI、人声/钢琴模式、可缩放的 piano-roll（添加/拖动/缩放/删除音符，吸附对齐）、多文件叠加与主文件切换、播放指示线与基础回放、设置面板、导出与帮助弹窗。</li>
          <li>下一步（下周）：优化MIDI转化，完善 MIDI/WAV 导出 与音频引擎。</li>
          <li>计划迭代：自动分轨（旋律/和声/低音）、量化预览与撤销、导出预设与批量命名。</li>
        </ul>
        <p class="text-m text-gray-600">技术栈：Flutter/Dart（跨平台开发）、Python, FastAPI & CREPE/YIN（后端&音高跟踪）、MusicXML/PDF 渲染</p>
    actions: []
    media:
      title: Humm2MIDI Demo
      url: /images/video_app.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: '9:16'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
    elementId: humm2midi
    colors: bg-neutral-fg-dark
    styles:
      self:
        flexDirection: row-reverse
        justifyContent: center
      subtitle:
        textAlign: left

  # start of big list
  # - title:
  #     text: 
  #       en: Projects I am Currently Working on
  #       zh: 正在开发的项目
  #     color: text-primary
  #     styles:
  #       self:
  #         textAlign: center
  #     type: TitleBlock
  #   # subtitle: Projects currently working on
  #   items:
  #     - title: 
  #         en: Metroidvania-style RPG Game 
  #         zh: 类银河恶魔城 RPG
  #       tagline: 
  #         en: 2025.01 – Present
  #         zh: 2025.01 – 至今
  #       subtitle: 
  #         en: Indie Unity2D action game built from scratch with friends
  #         zh: 与朋友一起开发 Unity2D 独立游戏｜团队负责人 / 程序
  #       text: 
  #         en: |-
  #           <s> - Developed core gameplay logic and state machine for 28+ player states
  #           - Designed 20+ equippable items, 10+ enemy types, and game flow structure
  #           - Leading team meetings, planning, code architecture and visual design
  #           - Demo release planned for Steam in late 2026</s>
  #           - Built core player & enemy state machines and a modular interaction system using interfaces to keep features loosely coupled and extensible.
  #           - Implemented Celeste-like game-feel systems: input buffering, coyote time, corner boosts, and velocity inheritance; tuned jump/dash/fall velocity curves through playtest-driven iteration. 
  #           - Shipped rebindable input, checkpoint/respawn, and an extensible interaction suite (moving platforms, dash-passable  tiles, springs, double-dash)
  #         zh: |-
  #           <ul class="sb-markdown mt-4">
  #             <li>构建玩家与敌人的<strong>状态机</strong>和<strong>模块化交互系统</strong>（接口解耦），支持快速扩展新能力/敌人与玩法。</li>
  #             <li>实现“类 Celeste”<strong>手感系统</strong>：输入缓冲、<strong>Coyote Time（空中容错）</strong>、<strong>Corner Boost（角落提速）</strong>、<strong>Velocity Inheritance（速度继承）</strong>；基于多轮试玩持续调优<strong>跳跃/冲刺/下落速度曲线</strong>。</li>
  #             <li>上线可重绑定输入、检查点/重生，并提供可扩展交互组件（移动平台、可冲刺穿越砖块、弹簧、二段冲刺等）。</li>
  #             <li>主导<strong>架构设计与迭代节奏</strong>；组织团队会议，编写关卡/内容；<strong>目标</strong>：预计<strong>2026 年</strong>发布 Steam 公开 Demo。</li>
  #           </ul>
  #           <p class="text-m text-gray-600">技术栈：Unity2D、PlasticSCM、C#、ScriptableObject、事件/状态模式、协程</p>
  #       media:
  #         url: /images/game.mp4
  #         controls: false
  #         aspectRatio: '16:9'
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: VideoBlock
  #         autoplay: true
  #         loop: true
  #         muted: true
  #       # colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-2
  #             - pb-2
  #             - pl-2
  #             - pr-2
  #         borderColor: border-dark
  #         borderStyle: solid
  #         borderWidth: 1
  #         borderRadius: large
  #       type: FeaturedItem
  #     - title: 
  #         en: Cross-Platform To-Do App
  #         zh: 跨平台 To-Do 应用
  #       tagline: 
  #         en: 2021.08 – Present, developed intermittently
  #         zh: 2021.08 – 至今（间歇开发）
  #       subtitle: 
  #         en: Time-management mobile app built with Vue.js + uni-app
  #         zh: 使用 Vue.js + uni-app 写的时间管理工具｜长期个人项目
  #       text: 
  #         en: |
  #           - Built a time-management mobile app using Vue.js and uni-app, developed intermittently since 2021 as a long-term side project
  #           - Supports quadrant-based task prioritization, Pomodoro timer, calendars, recurring events, and reward system
  #           - Implemented Vuex for efficient state management and lightweight backend logic
  #         zh: |-
  #           <ul class="sb-markdown mt-4">
  #             <li>基于 Vue.js + uni-app 开发多端时间管理应用，持续迭代中。</li>
  #             <li>实现四象限优先级、番茄钟、日历/重复事件、奖励体系等功能。</li>
  #             <li>使用 Vuex 做全局状态管理，封装轻量后端逻辑，优化组件通信与路由。</li>
  #           </ul>
  #           <p class="text-m text-gray-600">技术栈：Vue.js、uni-app、Vuex、HTML/CSS/JavaScript、Git</p>
  #           <p class="text-lg mt-1 font-bold text-center">
  #             --- 中文内容施工中…… ---</p>
  #           <p class="text-sm mt-1 font-bold text-center">
  #             （等我有时间继续补中文翻译）</p>
  #       image:
  #         url: /images/abstract-feature2.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: row
  #       type: FeaturedItem
  #   variant: big-list
  #   colors: bg-neutral-fg-dark
  #   styles:
  #     self:
  #       padding:
  #         - pt-20
  #         - pl-8
  #         - pr-8
  #       justifyContent: center
  #     subtitle:
  #       textAlign: center
  #   type: FeaturedItemsSection
  # end of big list
  # start of three-col-grid (part 1)
  - title:
      text: 
        en: Projects from the past
        zh: 过往项目
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    type: FeaturedItemsSection
    subtitle: 
      en: '- AI / Image Processing Projects -'
      zh: '- AI、图像处理相关 -'
        
    items:
      - title: Image Completion with GANs
        tagline: '2024.10'
        # subtitle: This is the item subtitle
        text: |
          - Implemented image inpainting based on Globally and Locally Consistent Image Completion
          - Trained convolutional GANs with global and local discriminators using PyTorch and TensorFlow
        # image:
        #   url: /images/abstract-feature1.svg
        #   altText: Placeholder Image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Panorama Stitching
        tagline: '2024.10'
        text: |
          - Built panoramic images using Python libraries (NumPy, Scikit-Image, SciPy)
          - Applied RANSAC, homography estimation, and image feathering for seamless blending
        # image:
        #   url: /images/abstract-feature2.svg
        #   altText: Placeholder image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Interactive Image Segmentation
        tagline: '2024.11'
        text: |
          - Developed semi-supervised segmentation with K-means, EM, and Min-cut/Max-flow algorithms
          - Allowed user input of foreground/background seeds for precise region extraction
        # image:
        #   url: /images/abstract-feature1.svg
        #   altText: Placeholder image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          # - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  # end of three-col-grid (part 1)
    # start of three-col-grid (part 2)
  - type: FeaturedItemsSection
    subtitle: 
      en: '- Backend & System Projects -'
      zh: '- 后端、系统相关 -'
    items:
      - title: Group Peer Evaluation System
        tagline: 2024.05 – 2024.07
        text: |
          - An automated peer review platform for courses at NUS
          - Designed front-end interface and integrated Nintex K2 and SQL server for logic automation
          - Implemented reminder system and auto-score calculation to enhance fairness in group projects
        # image:
        #   url: /images/abstract-feature1.svg
        #   altText: Placeholder Image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: WL4P Compiler
        tagline: 2023.05 – 2023.08
        text: |
          - A compiler for a Java-like language written in Racket and C++
          - Built complete compilation pipeline: lexical → syntax → semantic analysis → MIPS assembly → machine code
          - Supported user input, flow control, and basic evaluation
        # image:
        #   url: /images/abstract-feature2.svg
        #   altText: Placeholder image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: CC3K Roguelike Game
        tagline: 2023.07 – 2023.08
        text: |
          - Terminal-based RPG game built in C++ with turn-based combat, random enemies, and dungeon mechanics
          - Designed game loop, entity behaviors, item systems, and procedural level generation
        # image:
        #   url: /images/abstract-feature1.svg
        #   altText: Placeholder image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          # - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  # end of three-col-grid (part 2)
  # start of three-col-grid (part 3)
  - type: FeaturedItemsSection
    subtitle: 
      en: '- Frontend Projects -'
      zh: '- 前端相关 -'
    items:
      - title: Professional Development Webpage
        tagline: 2023.10 – 2023.12
        text: |
          - An internal platform for University of Waterloo students to access development materials
          - Built responsive web interface with HTML/CSS/JS and Bootstrap, and designed banners and icons for engaging visual communication
          - Ensured browser compatibility and content accessibility
        # image:
        #   url: /images/abstract-feature1.svg
        #   altText: Placeholder Image
        #   styles:
        #     self:
        #       borderRadius: x-large
        #   type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-20
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  # end of three-col-grid (part 3)
  # end of project part
  - type: FeaturedItemsSection
    title:
      text: Fun fact about me
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    items:
      - type: FeaturedItem
        title: 'Learning Strange Things'
        # subtitle: 
        text: >
          In my spare time, I love exploring diverse fields through online courses on topics far outside my major. I've dived into areas like gem identification, floral design, Chinese sign language, and cosmetic science. I’ve also been teaching myself to draw, which has become a valuable foundation for my game development projects—allowing me to not only code but also contribute concept art and effectively oversee visual direction as the project lead.
        actions: []
        elementId: null
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Lightning bolt symbol on red background
          elementId: ''
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large
      - title: 'I Love CS'
        text: >-
          I once audited two upper-year AI courses (CS480 & CS486) just because I was curious — and stayed for every lecture. I made friends with some grad students, and even read the AlphaGo paper for fun—which came in handy when I helped one of them with their final assignment. 
          <br/>
          These days, my idea of fun is adding new features to the game I'm developing.
        image:
          url: /images/icon2.svg
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
      - title: 'I am a Fan of Anime'
        text: >
          I used to be a passionate anime fan—so much so that after watching countless shows and listening to hours of J-pop, I ended up learning Japanese and easily passed the JLPT N2 exam. Although university life has left me with less time for anime, I can still talk in depth about almost any series that aired before 2023.
        image:
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
      - title: 'Someday, I’d Like to...'
        text: |
          - Write a novel
          - Get good enough at illustration to take commissions
          - Bring to life all the game ideas I've been collecting—each with its own unique mechanic and story
          - Start my own game studio - to publish my games and turn my developer friend into an employee…So we can keep making cool stuff without worrying about LinkedIn
        image:
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
    elementId: ''
    variant: small-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-20
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: GenericSection
    title:
      text: I'm open to communication in 
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: |
      English (professional proficiency) | Mandarin Chinese (Native) | Japanese (JLPT N2 certified)
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
  #       ############################################
  # - title:
  #     text: Jiarui Han
  #     color: text-dark
  #     styles:
  #       self:
  #         textAlign: center
  #     type: TitleBlock
  #   subtitle: |
  #     📍 University of Waterloo | Computer Science, Honours, Co-op (Minor in Pure Math + Economics) | GPA 87.5 | 2022-2026
  #     📧 j22han@uwaterloo.ca ｜ 📞 +1 (382)-889-3603
  #   text: |-
  #      “A computer science student passionate about front-end development, backend systems, and AI applications — creating scalable, efficient, and user-centric digital experiences.”
  #   media:
  #     title: Title of the video
  #     url: /images/placeholder-video.mp4
  #     controls: false
  #     aspectRatio: '16:9'
  #     styles:
  #       self:
  #         padding:
  #           - pt-2
  #           - pb-2
  #           - pl-2
  #           - pr-2
  #         borderColor: border-dark
  #         borderStyle: solid
  #         borderWidth: 1
  #         borderRadius: large
  #     type: VideoBlock
  #     autoplay: true
  #     loop: true
  #     muted: true
  #   badge:
  #     label: Key Benefits
  #     color: text-primary
  #     styles:
  #       self:
  #         textAlign: center
  #     type: Badge
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       flexDirection: col
  #       justifyContent: center
  #     subtitle:
  #       textAlign: center
  #   type: GenericSection
  # - title: Divider
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       padding:
  #         - pt-7
  #         - pl-7
  #         - pb-7
  #         - pr-7
  #   type: DividerSection
  # - type: CarouselSection
  #   title: null
  #   subtitle: What our customers say about us
  #   items:
  #     - title: >-
  #         “A designer knows he has achieved perfection not when there is nothing
  #         left to add, but when there is nothing left to take away.”
  #       tagline: Testimonial 1
  #       subtitle: 'Maria Walters, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/person-placeholder-light.png
  #         altText: Maria Walters
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-neutralAlt-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #     - title: >-
  #         "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose."
  #       tagline: Testimonial 2
  #       subtitle: 'John Doe, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/person-placeholder-light.png
  #         altText: John Doe
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-neutralAlt-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #     - title: >-
  #         "Design is how it works, how it functions. Good design doesn't just make a product aesthetically pleasing, it makes it a pleasure to use."
  #       tagline: Testimonial 3
  #       subtitle: 'Maria Walters, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/person-placeholder-light.png
  #         altText: Maria Walters
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-neutralAlt-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #     - title: >-
  #         “A designer knows he has achieved perfection not when there is nothing
  #         left to add, but when there is nothing left to take away.”
  #       tagline: Testimonial 4
  #       subtitle: 'Maria Walters, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/person-placeholder-light.png
  #         altText: Maria Walters
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-neutralAlt-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #     - title: >-
  #         "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."
  #       tagline: Testimonial 5
  #       subtitle: 'Jane Walters, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/person-placeholder-light.png
  #         altText: Maria Walters
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-neutralAlt-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #     - title: >-
  #         “Quote from some important person goes right here. I love using Netlify Create.”
  #       tagline: Testimonial 6
  #       subtitle: 'Jane Doe, Company'
  #       text: >-
  #         Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  #         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
  #         explicabo.
  #       image:
  #         url: /images/img-placeholder-dark.png
  #         altText: Jane Doe
  #         styles:
  #           self:
  #             borderRadius: full
  #         type: ImageBlock
  #       actions: []
  #       colors: bg-dark-fg-light
  #       styles:
  #         self:
  #           padding:
  #             - pt-9
  #             - pb-9
  #             - pl-9
  #             - pr-9
  #           textAlign: left
  #           borderRadius: large
  #           flexDirection: row
  #           justifyContent: center
  #       type: FeaturedItem
  #   elementId: null
  #   variant: next-prev-nav
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       justifyContent: center
  #     subtitle:
  #       textAlign: center
  # - type: GenericSection
  #   title:
  #     text: Project 1
  #     color: text-dark
  #     styles:
  #       self:
  #         textAlign: left
  #     type: TitleBlock
  #   subtitle: project 1 uses languages
  #   text: |-
  #     Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
  #     Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
  #     erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
  #     vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
  #   actions: []
  #   media:
  #     title: Title of the video
  #     url: /images/placeholder-video.mp4
  #     autoplay: true
  #     loop: true
  #     muted: true
  #     controls: false
  #     aspectRatio: '16:9'
  #     styles:
  #       self:
  #         padding:
  #           - pt-2
  #           - pb-2
  #           - pl-2
  #           - pr-2
  #         borderColor: border-dark
  #         borderStyle: solid
  #         borderWidth: 1
  #         borderRadius: large
  #     type: VideoBlock
  #   elementId: null
  #   colors: bg-neutral-fg-dark
  #   styles:
  #     self:
  #       flexDirection: row
  #       justifyContent: center
  #     subtitle:
  #       textAlign: left
  # - title:
  #     text: Social Media Management
  #     color: text-dark
  #     type: TitleBlock
  #   subtitle: Increase your reach
  #   text: >
  #     A service that helps businesses to manage their social media accounts and
  #     posts.
  #   actions:
  #     - label: Get started
  #       url: /
  #       icon: arrowRight
  #       iconPosition: right
  #       style: secondary
  #       type: Button
  #     - label: See Tutorials
  #       url: /
  #       showIcon: true
  #       icon: arrowRight
  #       iconPosition: right
  #       style: primary
  #       type: Link
  #   media:
  #     url: /images/hero2.svg
  #     altText: Fun feature preview
  #     type: ImageBlock
  #   badge:
  #     label: This is a badge
  #     color: text-primary
  #     type: Badge
  #   colors: bg-neutral-fg-dark
  #   styles:
  #     self:
  #       alignItems: center
  #   type: GenericSection
  # - title:
  #     text: Business Consulting
  #     color: text-dark
  #     type: TitleBlock
  #   subtitle: Be in good company
  #   text: >
  #     A service that provides advice and guidance to startups and small
  #     businesses.
  #   actions:
  #     - label: Get started
  #       url: /
  #       icon: arrowRight
  #       iconPosition: right
  #       style: secondary
  #       type: Button
  #     - label: See Tutorials
  #       url: /
  #       showIcon: true
  #       icon: arrowRight
  #       iconPosition: right
  #       style: primary
  #       type: Link
  #   media:
  #     url: /images/hero3.svg
  #     altText: Dope design preview
  #     type: ImageBlock
  #   badge:
  #     label: This is a badge
  #     color: text-primary
  #     type: Badge
  #   colors: bg-neutral-fg-dark
  #   styles:
  #     self:
  #       alignItems: center
  #       flexDirection: row-reverse
  #   type: GenericSection
  # # - title:
  # #     text: Generic Section With A Form
  # #     color: text-dark
  # #     type: TitleBlock
  # #   subtitle: Section with a form subtitle
  # #   text: |-
  # #     Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
  # #     Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
  # #     erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
  # #     vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
  # #   media:
  # #     fields:
  # #       - name: name
  # #         label: Name
  # #         hideLabel: true
  # #         placeholder: Your name
  # #         isRequired: true
  # #         width: full
  # #         type: TextFormControl
  # #       - name: email
  # #         label: Email
  # #         hideLabel: true
  # #         placeholder: Your email
  # #         isRequired: true
  # #         width: full
  # #         type: EmailFormControl
  # #       - name: message
  # #         label: Message
  # #         hideLabel: true
  # #         placeholder: Your message
  # #         width: full
  # #         type: TextareaFormControl
  # #     elementId: contact-form
  # #     styles:
  # #       self:
  # #         padding:
  # #           - pt-6
  # #           - pb-6
  # #           - pl-6
  # #           - pr-6
  # #         borderColor: border-dark
  # #         borderStyle: solid
  # #         borderWidth: 1
  # #         borderRadius: large
  # #     type: FormBlock
  # #     submitButton:
  # #       type: SubmitButtonFormControl
  # #       label: Submit
  # #       showIcon: false
  # #       icon: arrowRight
  # #       iconPosition: right
  # #       style: primary
  # #       elementId: null
  # #   badge:
  # #     label: Contact Us
  # #     color: text-primary
  # #     type: Badge
  # #   colors: bg-light-fg-dark
  # #   type: GenericSection
seo:
  metaTitle: Jiarui's Website
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
