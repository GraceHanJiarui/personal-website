---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Jiarui Han
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    isLargeTitle: true
    subtitle: |
      📍 University of Waterloo | Computer Science, Honours, Co-op (Minor in Pure Math + Economics) | GPA 86.5/100 (3.7/4.0) | 2022-2026
      📧 j22han@uwaterloo.ca ｜ 📞 +1 (382)-889-3603
    text: |-
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
      text: Work Experience
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # subtitle: Featured items section subtitle
    items:
      - title: Software Intern
        tagline: 2025.01 – 2025.04
        subtitle: Beijing Xuntong Ontim Communication Co., Ltd.
        text: |
          - Streamlined project management by automating 80% of manual project progress tasks for SPMs through a Jenkins- and Python-based reporting system integrated with the Jira API
          - Built a tool to automate FTP file transfers and bug progress reporting
          - Processed large-scale audio configuration data from 6+ projects, reducing manual labor by at least two months
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
      - title: Application Developer
        tagline: 2024.05 – 2024.08
        subtitle: National University of Singapore - Institute of Systems Science
        text: |
          - Led full-cycle development of 9+ internal systems based on cross-department requirements
          - Built web interfaces using Nintex K2, HTML/CSS/JQuery, and managed backend logic with MS SQL
          - Conducted feasibility analysis for automation tools like Power Automate, Selenium, and UIPath in finance operations
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
      - title: eLearning Developer Assistant (Remote)
        tagline: Sep 2023 – Dec 2023
        subtitle: University of Waterloo
        text: |
          - Developed and QA-tested accessible and responsive learning pages using HTML/CSS/JavaScript + Bootstrap
          - Contributed to seamless learning experiences for over 20,000 students across multiple platforms
          - Designed banners, icons, and layouts using Figma, Photoshop, and Illustrator to improve UX and course visuals
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
  # start of big list
  - title:
      text: Projects I am Currently Working on
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # subtitle: Projects currently working on
    items:
      - title: Metroidvania-style RPG Game 
        tagline: 2025.01 – Present
        subtitle: Indie Unity2D action game built from scratch with friends
        text: |
          - Developed core gameplay logic and state machine for 28+ player states
          - Designed 20+ equippable items, 10+ enemy types, and game flow structure
          - Leading team meetings, planning, code architecture and visual design
          - Demo release planned for Steam in late 2026
        image:
          url: /images/abstract-feature1.svg
          altText: Placeholder Image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
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
      - title: Cross-Platform To-Do App
        tagline: 2021.08 – Present, developed intermittently
        subtitle: Time-management mobile app built with Vue.js + uni-app
        text: |
          - Built a time-management mobile app using Vue.js and uni-app, developed intermittently since 2021 as a long-term side project
          - Supports quadrant-based task prioritization, Pomodoro timer, calendars, recurring events, and reward system
          - Implemented Vuex for efficient state management and lightweight backend logic
        image:
          url: /images/abstract-feature2.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
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
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  # end of big list
  # start of three-col-grid (part 1)
  - title:
      text: Projects from the past
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    type: FeaturedItemsSection
    subtitle: '- AI / Image Processing Projects -'
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
    subtitle: '- Backend & System Projects -'
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
    subtitle: '- Frontend Projects -'
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
