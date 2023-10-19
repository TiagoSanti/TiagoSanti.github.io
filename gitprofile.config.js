// gitprofile.config.js

const config = {
  github: {
    username: 'TiagoSanti', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['tiagosanti.github.io', 'TiagoSanti', 'uri-solutions'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tiago-santi',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'tiagocsanti',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: 'tiagosanti',
    dev: 'tiagosanti',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'tiagosanti.github.io',
    phone: '+55 (67) 99699-6687',
    email: 'tiagosanti2009@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1G5ZiywkY32xk43mkpnILHanXmXsKp72v/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'English - Advanced',
    'Portuguese - Native',
    'Python - Pandas | Numpy | FastAPI | Scikit Learn',
    'C#',
    'C',
    'Java - Android App Development',
    'JavaScript',
    'SQL',
    'Git',
    'GitHub',
    'Docker',
    'Scrum | Kanban',
    'Artificial Intelligence - Machine Learning',
    'Deep Learning | Artificial Neural Networks',
    'Web Scrapping',
    'Data Science - Data Collection | Data Analysis | Data Cleaning',
    'Computer Vision - Image Processing | Object Detection | Face Recognition',
    'Natural Language Processing - Sentiment Analysis',
    'Cloud Computing - GCP | GCS | BigQuery | Looker Studio | Compute Engine | App Engine',
  ],
  experiences: [
    {
      company: 'SESI Innovation Center in Technologies for Health and Safety at Work',
      position: 'Internship',
      from: 'February 2022',
      to: 'August 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company: 'SESI Innovation Center in Technologies for Health and Safety at Work',
      position: 'Software Developer Specialist Scholarship', 
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
  ],
  certifications: [
    {
      name: 'Honorable Mention Level 3 - Brazilian Public Schools Mathematics Olympiad',
      body: 'Ministry of Education, Technology, and Innovation',
      year: 'December 2018',
      link: 'http://premiacao.obmep.org.br/2018/verRelatorioPremiadosMencao-MS.3.privada.do.htm'
    },
    {
      name: 'Arduino Mini Course',
      body: 'Development of Guidance and Training Activities in Computer Systems at Federal University of Mato Grosso do Sul | 30 total hours',
      year: 'July 2019',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/Arduino%20Mini%20Course.pdf'
    },
    {
      name: 'Artificial Neural Networks in Python',
      body: 'Instructors Jones Granatyr, IA Expert Academy | 8.5 total hours',
      year: 'July 2021',
      link: 'https://www.udemy.com/certificate/UC-dbde52cc-9a5e-49a7-a4d5-b3c3eed256a7/'
    },
    {
      name: 'Scholarship in Technological Development and Innovation (PIBITI)',
      body: 'Project "Deep Learning Applied to Water Level Measurement in Urban Streams Using Images" | Federal University of Mato Grosso do Sul | 1,040 total hours',
      year: 'July 2021 - August 2022',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/PIBITI%20-%20Deep%20Learning.pdf'
    },
    {
      name: 'Complete C# Object-Oriented Programming + Projects',
      body: 'Instructors Nelio Alves | 38 total hours',
      year: 'May 2022',
      link: 'https://www.udemy.com/certificate/UC-dbde52cc-9a5e-49a7-a4d5-b3c3eed256a7/'
    },
    {
      name: 'Participation Certification in CBSoft 2023 by the Brazilian Computer Society',
      body: 'Participation in the XIV Brazilian Congress on Software: Theory and Practice (CBSoft 2023). The event took place from September 25th to 29th in Campo Grande - MS | 40 total hours',
      year: 'September 2023',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/XIV%20CBSoft%202023.pdf'
    },
    
  ],
  education: [
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree: 'Computer Engineering Bachelor',
      from: '2019',
      to: '2021 | interrupted',
    },
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree: 'Software Engineering Bachelor | GPA: 9.025/10.0 | 66.94% completed',
      from: '2021',
      to: 'Present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '</pantanal.dev> - Machine Learning module',
      description:
        '</pantanal.dev> is an intensive training initiative in cutting-edge technologies, aimed at enhancing talents from the central region of Brazil and connecting these professionals to remote work opportunities in the national financial sector. The Federal University of Mato Grosso do Sul leads the program, partnering with renowned companies such as B3, PDtec, BLK, and Neoway. In the first module, participants were challenged to employ advanced Natural Language Processing techniques. The goal was to train a sentiment classifier and create a product capable of analyzing the sentiment present in financial market news. Under the guidance of an expert from B3, my team developed "Tuiaia". This platform gathers information from esteemed financial sources, such as Google News, InfoMoney, and Forbes, and assesses the sentiment of the news, classifying them as negative, neutral, or positive. Aiming to innovate and elevate the standard of our product, we incorporated the analysis of the news\' impact degree (low, neutral, high) and the estimated duration of this impact (short, neutral, long). Additionally, we designed an interactive dashboard that displays the results of the analyses over time. In recognition of its importance and innovation, the project received an Honorable Mention.',
      imageUrl: 'https://pantanal.dev/img/icon-arara-1.png',
      link: 'https://github.com/Tuiaia',
    },
    {
      title: '</pantanal.dev> - Data Science module',
      description:
        '</pantanal.dev> is an intensive training initiative in cutting-edge technologies, aimed at enhancing talents from the central region of Brazil and connecting these professionals to remote work opportunities in the national financial sector. The Federal University of Mato Grosso do Sul leads the program, partnering with renowned companies such as B3, PDtec, BLK, and Neoway. In this module, the proposed challenge was to detect credit card fraud using statistical techniques and, based on these insights, create a product that would contribute to solving this issue. We began with an in-depth market research, seeking to understand the needs, objectives, and the satisfaction level of professionals in the sector with the available tools. Next, we conducted dynamics to align expectations regarding the project and shape the product vision. We set clear goals, activities to be carried out, modeled the business process, and established strict development standards. The result was "4banks", a data analysis platform designed to serve data scientists focused on detecting fraud in financial entities. Through 4banks, users have the ability to delve into credit card transaction data, obtaining everything from general analyses to deeper and more specific insights. By integrating solid Software Engineering principles at every stage of the project, we were able to deliver an excellent product, agilely and efficiently, aligned with the best market practices. This commitment to quality was crucial for us to achieve victory in this module.',
      imageUrl: 'https://pantanal.dev/img/icon-onca-1.png',
      link: 'https://github.com/4Banks',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-J6XLXSX2JZ', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
