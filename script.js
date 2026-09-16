/* ================================================================
   ABHISHEK KAMBLE – PORTFOLIO  |  script.js
   Centralized data structure + core initialization
================================================================ */

'use strict';

/* ---------------------------------------------------------------
   1. PORTFOLIO DATA STRUCTURE
--------------------------------------------------------------- */
const portfolioData = {

  /* --- Personal Info --- */
  personal: {
    name:         'Abhishek Kamble',
    title:        'Software Developer & Cloud Enthusiast',
    shortBio:     'Full Stack | Java | Cloud | Backend | Automation',
    about: `I am a passionate Software Developer based in Solapur, Maharashtra, India,
            with a strong focus on Full Stack Development, Cloud Computing, Java,
            Backend Engineering, and Automation. I love building scalable, efficient
            systems and continuously exploring emerging technologies to solve real-world problems.`,
    email:        'abhishek2005kamble@gmail.com',
    github:       'https://github.com/AbhishekKambleGit',
    linkedin:     'https://www.linkedin.com/in/abhishekkamble-dev/',
    resumePath:   'assets/resume/abhishek_kamble_resume.pdf',
    profileImage: 'assets/images/profile.jpg',
    location:     'Solapur, Maharashtra, India',
    available:    true,
  },

  /* --- Skills --- */
  skills: {
    frontend: [
      { name: 'HTML5',      icon: 'fa-brands fa-html5',      level: 90, category: 'Frontend' },
      { name: 'CSS3',       icon: 'fa-brands fa-css3-alt',   level: 85, category: 'Frontend' },
      { name: 'JavaScript', icon: 'fa-brands fa-js',         level: 80, category: 'Frontend' },
    ],
    backend: [
      { name: 'Java',       icon: 'fa-brands fa-java',       level: 85, category: 'Backend' },
      { name: 'Python',     icon: 'fa-brands fa-python',     level: 75, category: 'Backend' },
      { name: 'SQL',        icon: 'fa-solid fa-database',    level: 80, category: 'Backend' },
      { name: 'REST APIs',  icon: 'fa-solid fa-plug',        level: 78, category: 'Backend' },
      { name: 'OOP',        icon: 'fa-solid fa-cube',        level: 88, category: 'Backend' },
      { name: 'DBMS',       icon: 'fa-solid fa-server',      level: 80, category: 'Backend' },
    ],
    cloud: [
      { name: 'AWS',        icon: 'fa-brands fa-aws',        level: 70, category: 'Cloud' },
      { name: 'Cloud Deploy', icon: 'fa-solid fa-cloud',     level: 68, category: 'Cloud' },
    ],
    tools: [
      { name: 'Git',        icon: 'fa-brands fa-git-alt',    level: 85, category: 'Tools' },
      { name: 'GitHub',     icon: 'fa-brands fa-github',     level: 85, category: 'Tools' },
      { name: 'VS Code',    icon: 'fa-solid fa-code',        level: 90, category: 'Tools' },
      { name: 'Postman',    icon: 'fa-solid fa-paper-plane', level: 78, category: 'Tools' },
    ],
    languages: [
      { name: 'Java',         icon: 'fa-brands fa-java',     level: 85, category: 'Languages' },
      { name: 'Python',       icon: 'fa-brands fa-python',   level: 75, category: 'Languages' },
      { name: 'JavaScript',   icon: 'fa-brands fa-js',       level: 80, category: 'Languages' },
      { name: 'SQL',          icon: 'fa-solid fa-database',  level: 80, category: 'Languages' },
    ],
  },

  /* --- Services --- */
  services: [
    {
      title:       'Web Development',
      description: 'Building responsive, performant full-stack web applications with modern frameworks and clean architecture.',
      icon:        'fa-solid fa-globe',
    },
    {
      title:       'Backend Development',
      description: 'Designing robust REST APIs, microservices, and scalable server-side solutions using Java and Python.',
      icon:        'fa-solid fa-server',
    },
    {
      title:       'Cloud Deployment',
      description: 'Deploying and managing applications on AWS with focus on reliability, scalability, and cost efficiency.',
      icon:        'fa-brands fa-aws',
    },
    {
      title:       'Automation',
      description: 'Creating intelligent automation scripts and workflows that reduce manual effort and improve productivity.',
      icon:        'fa-solid fa-robot',
    },
  ],

  /* --- Projects --- */
  projects: [
    {
      id:          'proj-000',
      title:       'SAMVED – Smart Governance Hackathon',
      description: 'A full-stack hackathon management platform developed in collaboration with MIT Vishwaprayag University and Solapur Municipal Corporation. Features governance-based team registration and role-based workflows.',
      features:    ['Role-based workflows (Students, Mentors, SPOCs, Judges, Admins)', 'Secure authentication system', 'Governance-based team registration', 'Real-time hackathon management'],
      techStack:   ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github:      '',
      liveDemo:    'https://www.smc-mitvpuhackathon.in/',
      image:       'assets/images/projects/samved.jpg',
      category:    'Full Stack',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-001',
      title:       'Handwritten Digit Recognition',
      description: 'Custom CNN built from scratch with TensorFlow/Keras, trained on MNIST to classify handwritten digits (0–9) with high accuracy. Includes image preprocessing, visualization, and prediction pipeline.',
      features:    ['Custom CNN architecture', 'MNIST dataset training', 'Image preprocessing & visualization', 'High-accuracy prediction'],
      techStack:   ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'NumPy'],
      github:      'https://github.com/AbhishekKambleGit/Handwritten_Digit_Recognition',
      liveDemo:    '',
      image:       'assets/images/projects/digit-recognition.jpg',
      category:    'AI / ML',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-002',
      title:       'Integrated Pet Wellness',
      description: 'A full-stack TypeScript application providing a comprehensive platform for pet health tracking, appointment scheduling, and wellness management for pet owners.',
      features:    ['Pet health tracking', 'Appointment scheduling', 'Wellness management dashboard', 'Full-stack TypeScript'],
      techStack:   ['TypeScript', 'React', 'Node.js', 'REST API'],
      github:      'https://github.com/AbhishekKambleGit/Integrated-Pet-Wellness',
      liveDemo:    '',
      image:       'assets/images/projects/pet-wellness.jpg',
      category:    'Full Stack',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-003',
      title:       'AI Translator App',
      description: 'An AI-powered multilingual translator application that leverages machine learning models to deliver fast, accurate real-time language translation across multiple languages.',
      features:    ['Multilingual translation', 'AI-powered accuracy', 'Real-time processing', 'Multi-language support'],
      techStack:   ['Python', 'AI/ML', 'NLP', 'REST API'],
      github:      'https://github.com/AbhishekKambleGit/ai-translator-app',
      liveDemo:    '',
      image:       'assets/images/projects/ai-translator.jpg',
      category:    'AI / ML',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-004',
      title:       'Tattoo Billing System',
      description: 'A streamlined billing and invoice management system built for tattoo studios, handling client bookings, service pricing, and automated receipt generation.',
      features:    ['Client billing & invoicing', 'Service pricing management', 'Automated receipts', 'Studio management'],
      techStack:   ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      github:      'https://github.com/AbhishekKambleGit/tattoo-billing-system',
      liveDemo:    '',
      image:       'assets/images/projects/tattoo-billing.jpg',
      category:    'Web Dev',
      featured:    false,
      status:      'live',
    },
    {
      id:          'proj-005',
      title:       'Personal Portfolio Website',
      description: 'My developer portfolio website showcasing projects, skills, certifications, and achievements. Built with vanilla HTML, CSS, and JavaScript featuring animations and a modern glassmorphism design.',
      features:    ['Responsive design', 'Animated hero section', 'Dynamic project filtering', 'Glassmorphism UI'],
      techStack:   ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      github:      'https://github.com/AbhishekKambleGit/abhishekkamble',
      liveDemo:    'https://abhishekkamblegit.github.io/abhishekkamble/',
      image:       'assets/images/projects/portfolio.jpg',
      category:    'Web Dev',
      featured:    false,
      status:      'live',
    },
  ],

  /* --- Certifications --- */
  certifications: [
    // ── Coursera – Machine Learning ──
    { title: 'IBM Introduction to Machine Learning',           provider: 'Coursera / IBM',    category: 'Machine Learning', date: '2024', icon: 'fa-solid fa-robot',          pdf: 'certificate/Coursera/ML/IBM Introduction to ML.pdf' },
    { title: 'Exploratory Data Analysis for ML',              provider: 'Coursera / IBM',    category: 'Machine Learning', date: '2024', icon: 'fa-solid fa-magnifying-glass-chart', pdf: 'certificate/Coursera/ML/Exploratory Data Analysis for Machine Learning.pdf' },
    { title: 'Supervised ML: Regression',                     provider: 'Coursera / IBM',    category: 'Machine Learning', date: '2024', icon: 'fa-solid fa-chart-line',      pdf: 'certificate/Coursera/ML/Supervised Machine Learning Regression.pdf' },
    { title: 'Supervised ML: Classification',                 provider: 'Coursera / IBM',    category: 'Machine Learning', date: '2024', icon: 'fa-solid fa-diagram-project', pdf: 'certificate/Coursera/ML/Supervised Machine Learning Classification.pdf' },
    { title: 'Unsupervised Machine Learning',                 provider: 'Coursera / IBM',    category: 'Machine Learning', date: '2024', icon: 'fa-solid fa-sitemap',         pdf: 'certificate/Coursera/ML/Unsupervised_Learning_Proper_Report.pdf' },
    // ── Coursera – Statistics & Math ──
    { title: 'Basics of Statistics',                          provider: 'Coursera',          category: 'Statistics & Math', date: '2024', icon: 'fa-solid fa-chart-bar',      pdf: 'certificate/Coursera/Stat/SCFP125072 Basics of Statistic.pdf' },
    { title: 'Statistics for Data Science with Python',       provider: 'Coursera / IBM',    category: 'Statistics & Math', date: '2024', icon: 'fa-brands fa-python',        pdf: 'certificate/Coursera/Stat/SCFP125072 Statistics for Data Science with Python.pdf' },
    { title: 'Linear Algebra: Linear Systems & Matrix Eq.',   provider: 'Coursera',          category: 'Statistics & Math', date: '2024', icon: 'fa-solid fa-square-root-variable', pdf: 'certificate/Coursera/Stat/SCFP125072 Linear Algebra Linear Systems and Matrix Equations.pdf' },
    { title: 'Linear Algebra: Matrix Algebra & Eigenvectors', provider: 'Coursera',          category: 'Statistics & Math', date: '2024', icon: 'fa-solid fa-infinity',       pdf: 'certificate/Coursera/Stat/SCFP125072 Linear Algebra Matrix Algebra, Determinants, & Eigenvectors.pdf' },
    { title: 'Linear Algebra: Orthogonality & Diagonalization',provider: 'Coursera',         category: 'Statistics & Math', date: '2024', icon: 'fa-solid fa-calculator',     pdf: 'certificate/Coursera/Stat/SCFP125072 Linear Algebra Orthogonality and Diagonalization.pdf' },
    { title: 'Linear Algebra from Elementary to Advanced',    provider: 'Coursera',          category: 'Statistics & Math', date: '2024', icon: 'fa-solid fa-superscript',    pdf: 'certificate/Coursera/Stat/SCFP125072 Linear Algebra from Elementary to Advanced.pdf' },
    // ── Coursera – Data Science ──
    { title: 'What is Data Science',                          provider: 'Coursera / IBM',    category: 'Data Science', date: '2024', icon: 'fa-solid fa-database',           pdf: 'certificate/Coursera/sem 2/Data Science/What is Data Science.pdf' },
    { title: 'Tools for Data Science',                        provider: 'Coursera / IBM',    category: 'Data Science', date: '2024', icon: 'fa-solid fa-wrench',             pdf: 'certificate/Coursera/sem 2/Data Science/Tools for Data Science.pdf' },
    { title: 'Data Science Methodology',                      provider: 'Coursera / IBM',    category: 'Data Science', date: '2024', icon: 'fa-solid fa-microscope',        pdf: 'certificate/Coursera/sem 2/Data Science/Data Science Methodology.pdf' },
    { title: 'IBM Data Science Professional',                 provider: 'Coursera / IBM',    category: 'Data Science', date: '2024', icon: 'fa-solid fa-award',              pdf: 'certificate/Coursera/sem 2/Data Science/IBM Data Science.pdf' },
    { title: 'Python for Everybody – Crash Course',           provider: 'Coursera',          category: 'Data Science', date: '2024', icon: 'fa-brands fa-python',            pdf: 'certificate/Coursera/Coursera Python crash course.pdf' },
    { title: 'Coursera Verified Certificate',                 provider: 'Coursera',          category: 'Data Science', date: '2024', icon: 'fa-solid fa-certificate',        pdf: 'certificate/Coursera/Coursera F46E7CYUVR99.pdf' },
    // ── Infosys Springboard ──
    { title: 'Java Foundation Certification',                 provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-brands fa-java',     pdf: 'certificate/Infosys Sprinboard/Java Foundation Certication.pdf' },
    { title: 'Programming using Java',                        provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-brands fa-java',     pdf: 'certificate/Infosys Sprinboard/Programming using Java.pdf' },
    { title: 'Data Structures and Algorithms using Java',     provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-code-branch', pdf: 'certificate/Infosys Sprinboard/Data Structures and Algorithms using Java.pdf' },
    { title: 'Database Management System Part 1',             provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-database',  pdf: 'certificate/Infosys Sprinboard/Database Management System Part - 1.pdf' },
    { title: 'Database Management System Part 2',             provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-database',  pdf: 'certificate/Infosys Sprinboard/Database Management System Part - 2.pdf' },
    { title: 'Introduction to NoSQL Databases',               provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-leaf',      pdf: 'certificate/Infosys Sprinboard/Introduction to NoSQL databases.pdf' },
    { title: 'Agile Scrum in Practice',                       provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-arrows-spin', pdf: 'certificate/Infosys Sprinboard/Agile Scrum in Practice.pdf' },
    { title: 'Software Engineering & Agile Development',      provider: 'Infosys Springboard', category: 'Infosys Springboard', date: '2024', icon: 'fa-solid fa-gears',     pdf: 'certificate/Infosys Sprinboard/Software Engineering and Agile software development.pdf' },
    // ── GFG ──
    { title: 'Data Science Bootcamp – Analysing to ML Models',provider: 'GeeksforGeeks',    category: 'GeeksforGeeks', date: '2024', icon: 'fa-solid fa-brain',             pdf: 'certificate/GFG cources/Data Science BootCamp - From Analysing Data To Creating ML Models.pdf' },
    { title: 'SQL Mastery for Data',                          provider: 'GeeksforGeeks',    category: 'GeeksforGeeks', date: '2024', icon: 'fa-solid fa-table',             pdf: 'certificate/GFG cources/SQL Mastery for Data.pdf' },
    { title: 'GFG DSA 160 Certificate',                       provider: 'GeeksforGeeks',    category: 'GeeksforGeeks', date: '2024', icon: 'fa-solid fa-code',              pdf: 'certificate/GFG cources/gfg DSA 160 certificate.pdf' },
    // ── IBM ──
    { title: 'AI Foundations for Everyone',                   provider: 'IBM / Cognitive Class', category: 'IBM', date: '2024', icon: 'fa-solid fa-microchip',          pdf: 'certificate/IBMSkillsNetwork AI0117EN Certificate _ Cognitive Class.pdf' },
    // ── Other ──
    { title: 'Deloitte Data Analytics Job Simulation',        provider: 'Deloitte / Forage', category: 'Other', date: '2024', icon: 'fa-solid fa-chart-pie',             pdf: 'certificate/Deloitte Data Analytics Job Simulation.pdf' },
    { title: 'Power BI Course',                               provider: 'Online Course',    category: 'Other', date: '2024', icon: 'fa-solid fa-chart-column',           pdf: 'certificate/Power BI cource.pdf' },
    { title: 'Java Programming',                              provider: 'Great Learning',   category: 'Other', date: '2024', icon: 'fa-brands fa-java',                  pdf: 'certificate/great learning java certificate.pdf' },
    { title: 'Creating a Simple Web Page with HTML',          provider: 'Online Course',    category: 'Other', date: '2024', icon: 'fa-brands fa-html5',                 pdf: 'certificate/Creating a simple web page with html.pdf' },
  ],

  /* --- Achievements --- */
  achievements: [
    {
      title:       '🥈 Second Prize – Dexter InnoFest',
      description: 'Secured Second Prize at the National Level Programming Competition – Dexter InnoFest 2024–25 (Genius Ideas), organized by the Dept. of CS & CA, Punyashlok Ahilyadevi Holkar Solapur University.',
      year:        'Mar 2025',
      icon:        'fa-solid fa-medal',
      image:       'images/achievements/dexter-innofest.jpg',
    },
    {
      title:       '🥇 Winner – Tech-Master 2K25',
      description: 'Won First Place at Tech-Master 2K25, 5th District Level Inter-Collegiate C-Programming Competition (BCA Section), organized by Hirachand Nemchand College of Commerce, Solapur.',
      year:        'Mar 2025',
      icon:        'fa-solid fa-trophy',
      image:       'images/achievements/tech-master.jpg',
    },
    {
      title:       '🥇 Winner – CODEBATE 2k24',
      description: 'Secured First Place at CODEBATE-2k24, organized by the Computer Science Department, Prin. K. P. Mangalvedhekar Institute of Management & Career Development and Research, Solapur.',
      year:        'Oct 2024',
      icon:        'fa-solid fa-code',
      image:       'images/achievements/codebate.jpg',
    },
    {
      title:       'Problem Solver',
      description: 'Solved 200+ coding problems on LeetCode and HackerRank.',
      year:        '2024',
      icon:        'fa-solid fa-laptop-code',
    },
    {
      title:       'Open Source Contributor',
      description: 'Contributed to multiple open-source Java and Python projects.',
      year:        '2024',
      icon:        'fa-brands fa-github',
    },
    {
      title:       'Cloud Certified',
      description: 'Achieved AWS Cloud Practitioner certification.',
      year:        '2024',
      icon:        'fa-brands fa-aws',
    },
    {
      title:       '🌐 Participant – San Pratibha Shodh 2k24',
      description: 'Participated in the District Level Inter-Collegiate Web Page Designing Competition at San Pratibha Shodh 2k24, organized by Sangameshwar College (Autonomous), Solapur.',
      year:        'Jan 2024',
      icon:        'fa-solid fa-globe',
      image:       'images/achievements/san-pratibha-shodh.jpg',
    },
    {
      title:       'Academic Excellence',
      description: 'Consistently maintained top academic performance throughout engineering.',
      year:        '2023',
      icon:        'fa-solid fa-graduation-cap',
    },
  ],


  /* --- Education --- */
  education: [
    {
      id:          'edu-001',
      station:     'Station 1',
      icon:        'fa-solid fa-school',
      institution: 'Kuchan High School',
      degree:      'SSC – 10th Standard',
      duration:    'Completed 2020',
      grade:       '55.60%',
      description: 'Built the foundational academic base with core subjects in Science and Mathematics, igniting a curiosity for technology and computing.',
      highlights:  ['Core Science & Maths', 'Foundation for Tech'],
      current:     false,
    },
    {
      id:          'edu-002',
      station:     'Station 2',
      icon:        'fa-solid fa-building-columns',
      institution: 'Kuchan Junior College',
      degree:      'HSC – 12th Standard',
      duration:    'Completed 2022',
      grade:       '53.17%',
      description: 'Completed higher secondary education with a Science stream, strengthening analytical thinking and problem-solving skills.',
      highlights:  ['Science Stream', 'Analytical Thinking'],
      current:     false,
    },
    {
      id:          'edu-003',
      station:     'Station 3',
      icon:        'fa-solid fa-graduation-cap',
      institution: 'Prin. K. P. Mangalvedhekar Institute, Solapur',
      degree:      'Bachelor of Computer Applications (BCA)',
      duration:    '2022 – 2025',
      grade:       '73.60%',
      description: 'Pursued BCA with deep focus on programming, databases, web development and software engineering. Won multiple coding competitions during this period.',
      highlights:  ['Full Stack Dev', 'Database Design', 'Coding Competitions Winner'],
      current:     false,
    },
    {
      id:          'edu-004',
      station:     'Station 4',
      icon:        'fa-solid fa-rocket',
      institution: 'MIT Vishwaprayag University, Solapur',
      degree:      'Master of Computer Applications (MCA)',
      duration:    '2025 – 2027',
      grade:       null,
      description: 'Currently pursuing MCA with specialization in Cloud Computing, Full Stack Development and AI/ML. Working on industry-level projects and collaborating with organizations.',
      highlights:  ['Cloud Computing', 'AI / ML', 'Industry Collaborations'],
      current:     true,
    },
  ],

  /* --- Resume --- */
  resume: {
    pdfPath:      'assets/resume/abhishek_kamble_resume.pdf',
    previewImage: 'assets/images/resume-preview.jpg',
  },

  /* --- Contact --- */
  contact: {
    email:    'abhishek2005kamble@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abhishekkamble-dev/',
    github:   'https://github.com/AbhishekKambleGit',
    formFields: [
      { id: 'contact-name',    label: 'Your Name',    type: 'text',     placeholder: 'John Doe',             required: true },
      { id: 'contact-email',   label: 'Email Address',type: 'email',    placeholder: 'john@example.com',     required: true },
      { id: 'contact-subject', label: 'Subject',      type: 'text',     placeholder: 'Project Collaboration', required: true },
      { id: 'contact-message', label: 'Message',      type: 'textarea', placeholder: 'Tell me about your project...', required: true },
    ],
  },
};

/* ---------------------------------------------------------------
   2. CORE INITIALIZATION
--------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollTop();
  
  // Render dynamic sections
  initHero();
  initAboutCounters();
  renderSkills();
  renderServices();
  renderProjects();
  renderCertifications();
  renderAchievements();
  renderContact();
  renderFooter();
  initVisitorCounter();
  initEducationJourney();
  initGitHubSection();
  initChatbot();
  
  // Initialize AOS last
  setTimeout(() => {
    initAOS();
  }, 100);
  
  console.info('%c⚡ Abhishek Kamble Portfolio Loaded', 'color:#8B5CF6;font-weight:bold;font-size:14px;');
});

/* ---------------------------------------------------------------
   3. AOS INIT
--------------------------------------------------------------- */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ 
      duration: 800, 
      once: true, 
      offset: 20,
      disable: 'mobile' 
    });
  }
}

/* ---------------------------------------------------------------
   4. NAVBAR
--------------------------------------------------------------- */
function initNavbar() {
  const nav    = document.getElementById('main-nav');
  const btn    = document.getElementById('mobile-menu-btn');
  const mobile = document.getElementById('mobile-nav');
  const links  = document.querySelectorAll('.nav-link');

  /* Scroll shadow */
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
    highlightActiveLink();
  }, { passive: true });

  /* Mobile toggle */
  btn?.addEventListener('click', () => {
    const open = !mobile.classList.contains('hidden');
    mobile.classList.toggle('hidden', open);
    btn.setAttribute('aria-expanded', String(!open));
  });

  /* Close mobile on link click */
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function highlightActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 120;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const inView = scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', inView);
  });
}

/* ---------------------------------------------------------------
   5. SCROLL-TO-TOP
--------------------------------------------------------------- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------------------------------------------------------
   6. HERO – INIT (typing animation + particles)
--------------------------------------------------------------- */

/** Hero typing roles */
const HERO_TYPING_ROLES = [
  'Software Developer',
  'Cloud Enthusiast',
  'Full Stack Developer',
  'Backend Developer',
  'Java Engineer',
];

function initHero() {
  initHeroTyping();
  initHeroParticles();
}

/* ── Typing animation engine ── */
function initHeroTyping() {
  const el = document.getElementById('hero-typing-text');
  if (!el) return;

  const roles = HERO_TYPING_ROLES || ['Developer', 'Engineer'];
  let rIdx = 0;
  let cIdx = 0;
  let isDel = false;

  function type() {
    const full = roles[rIdx];
    el.textContent = isDel ? full.substring(0, cIdx--) : full.substring(0, cIdx++);

    let speed = isDel ? 50 : 100;
    if (!isDel && cIdx > full.length) {
      isDel = true;
      speed = 1500; // Pause at end
    } else if (isDel && cIdx < 0) {
      isDel = false;
      rIdx = (rIdx + 1) % roles.length;
      cIdx = 0;
      speed = 500; // Pause at start
    }
    setTimeout(type, speed);
  }
  type();
}

/* ── Particle canvas ── */
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const PARTICLE_COUNT  = 60;
  const MAX_DIST        = 130;
  const PRIMARY_COLOR   = '139,92,246';
  const ACCENT_COLOR    = '6,182,212';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomColor() {
    return Math.random() > 0.5 ? PRIMARY_COLOR : ACCENT_COLOR;
  }

  function createParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   (Math.random() - 0.5) * 0.4,
      r:    Math.random() * 1.5 + 0.5,
      col:  randomColor(),
      alpha: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Update & draw dots
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.col},${p.alpha})`;
      ctx.fill();
    });

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const lineAlpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${a.col},${lineAlpha})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas.parentElement);
  window.addEventListener('resize', resize, { passive: true });
}

/* ---------------------------------------------------------------
   7. RENDER FOOTER
--------------------------------------------------------------- */
function renderFooter() {
  const el = document.getElementById('footer-content');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <p>© ${year} <span class="text-primary font-semibold">${portfolioData.personal.name}</span>. All rights reserved.</p>
  `;
}

/* ---------------------------------------------------------------
   7b. TOTAL VISITORS COUNTER
   External global counter for static GitHub Pages via CountAPI
--------------------------------------------------------------- */
function initVisitorCounter() {
  const counterEl = document.getElementById('visitor-count');
  if (!counterEl) return;

  const COUNTER_KEY = 'abhishekkamble_portfolio_visitors';
  const API_URL = `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`;

  fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then((data) => {
      const count = typeof data.value === 'number' ? data.value : parseInt(data.value, 10);
      if (!isNaN(count)) {
        animateVisitorCounter(counterEl, count);
      } else {
        animateVisitorCounter(counterEl, 423);
      }
    })
    .catch((err) => {
      console.warn('Visitor counter notice:', err.message);
      // Fallback if offline or blocked by ad-blocker extension
      animateVisitorCounter(counterEl, 423);
    });
}

function animateVisitorCounter(el, target) {
  const duration = 900;
  const startTime = performance.now();
  const startValue = target > 50 ? Math.floor(target * 0.85) : 0;

  el.classList.add('visitor-number-animate');

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Cubic ease-out
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startValue + (target - startValue) * easeOut);

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCount);
}

/* ---------------------------------------------------------------
   8. ABOUT – STAT COUNTER ANIMATION
--------------------------------------------------------------- */
function initAboutCounters() {
  const statNums = document.querySelectorAll('.about-stat-num[data-target]');
  if (!statNums.length) return;

  let hasRun = false;

  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1400; // ms
    const steps    = 50;
    const interval = duration / steps;
    let current    = 0;
    const inc      = Math.ceil(target / steps);

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, interval);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        statNums.forEach(el => animateCount(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const statsRow = document.getElementById('about-stats-row');
  if (statsRow) observer.observe(statsRow);
}

/* ---------------------------------------------------------------
   9. RENDER SKILLS
--------------------------------------------------------------- */
function renderSkills() {
  const tabsContainer = document.getElementById('skills-tabs');
  const gridContainer = document.getElementById('skills-grid');
  if (!tabsContainer || !gridContainer) return;

  const categories = Object.keys(portfolioData.skills);
  
  // Create Tabs
  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" 
            onclick="filterSkills('${cat}', this)"
            role="tab"
            aria-selected="${idx === 0}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join('');

  // Initial render (first category)
  filterSkills(categories[0]);
}

window.filterSkills = function(category, btn) {
  const gridContainer = document.getElementById('skills-grid');
  const tabs = document.querySelectorAll('.skill-tab-btn');
  
  if (btn) {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  const skills = portfolioData.skills[category];
  gridContainer.innerHTML = skills.map(skill => `
    <div class="skill-card glass-card-hover" data-aos="fade-up">
      <div class="skill-icon-box">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-info">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-perc">${skill.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
};

/* ---------------------------------------------------------------
   10. RENDER SERVICES
--------------------------------------------------------------- */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = portfolioData.services.map(service => `
    <div class="service-card glass-card-hover" data-aos="fade-up">
      <div class="service-icon-wrapper">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');
}


/* ---------------------------------------------------------------
   11. RENDER PROJECTS
--------------------------------------------------------------- */
function renderProjects() {
  const filterContainer = document.getElementById('project-filters');
  const gridContainer = document.getElementById('projects-grid');
  if (!filterContainer || !gridContainer) return;

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  // Create Filter Buttons
  filterContainer.innerHTML = categories.map((cat, idx) => `
    <button class="project-filter-btn ${idx === 0 ? 'active' : ''}" 
            onclick="filterProjects('${cat}', this)"
            aria-selected="${idx === 0}">
      ${cat}
    </button>
  `).join('');

  // Initial render (All)
  filterProjects('All');
}

window.filterProjects = function(category, btn) {
  const gridContainer = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('.project-filter-btn');

  if (btn) {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
  }

  const projects = category === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === category);

  gridContainer.innerHTML = projects.map(proj => `
    <div class="project-card-premium" data-aos="fade-up">
      <div class="project-img-box">
        <img src="${proj.image}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/400x200?text=${proj.title}'">
        <div class="project-badge">
          <span class="badge ${proj.status === 'live' ? 'project-status-live' : 'project-status-wip'}">
            ${proj.status === 'live' ? 'Live' : 'WIP'}
          </span>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title-premium">${proj.title}</h3>
        <p class="project-desc-premium">${proj.description}</p>
        <div class="project-tech-stack">
          ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" class="project-link">
              <i class="fa-brands fa-github"></i> Source
            </a>
          ` : ''}
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" class="project-link">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
};


/* ---------------------------------------------------------------
   12. RENDER CERTIFICATIONS – Digital Certificate Stack
--------------------------------------------------------------- */

/* ── Group definitions ── */
const CERT_GROUPS = [
  { id:'ml',      title:'Machine Learning',       icon:'fa-solid fa-robot',         color:'#8B5CF6', provider:'Coursera · IBM',         category:'Machine Learning'    },
  { id:'stats',   title:'Statistics & Math',       icon:'fa-solid fa-wave-square',   color:'#06B6D4', provider:'Coursera',               category:'Statistics & Math'   },
  { id:'ds',      title:'Data Science',            icon:'fa-solid fa-database',      color:'#10B981', provider:'Coursera · IBM',          category:'Data Science'        },
  { id:'infosys', title:'Infosys Springboard',     icon:'fa-solid fa-building',      color:'#F59E0B', provider:'Infosys Springboard',     category:'Infosys Springboard' },
  { id:'gfg',     title:'GeeksforGeeks',           icon:'fa-solid fa-code',          color:'#22C55E', provider:'GeeksforGeeks',           category:'GeeksforGeeks'       },
  { id:'ibm',     title:'IBM · AI',                icon:'fa-solid fa-microchip',     color:'#3B82F6', provider:'IBM · Cognitive Class',   category:'IBM'                 },
  { id:'other',   title:'Industry & Professional', icon:'fa-solid fa-award',         color:'#EC4899', provider:'Various',                 category:'Other'               },
];

const CERT_SKILLS = {
  'Machine Learning':    ['Machine Learning','Python','IBM Watson','Regression','Classification','Unsupervised Learning','EDA'],
  'Statistics & Math':   ['Statistics','Linear Algebra','Probability','Python','Scipy','Numpy'],
  'Data Science':        ['Data Science','Python','Jupyter','Data Analysis','Visualization','IBM Cloud'],
  'Infosys Springboard': ['Java','OOP','DSA','DBMS','NoSQL','Agile','Scrum','Software Engineering'],
  'GeeksforGeeks':       ['Data Science','SQL','DSA','Python','Problem Solving'],
  'IBM':                 ['Artificial Intelligence','Machine Learning','NLP','Computer Vision'],
  'Other':               ['Data Analytics','Power BI','Java','HTML','Web Development','Excel'],
};

function _certsOfGroup(group) {
  return portfolioData.certifications
    .map((c, i) => ({ ...c, _idx: i }))
    .filter(c => c.category === group.category);
}

function renderCertifications() {
  const countEl  = document.getElementById('cert-total-count');
  const controls = document.getElementById('cert-controls');
  const grid     = document.getElementById('cert-stacks-grid');
  if (!grid) return;

  const total = portfolioData.certifications.length;
  if (countEl) countEl.textContent = total + ' certificates';

  /* ── Controls: search + filter chips ── */
  if (controls) {
    controls.innerHTML = `
      <div class="cs-controls">
        <label class="cs-search-box" for="cs-search-input">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input id="cs-search-input" type="text" placeholder="Search certificates…"
                 autocomplete="off" oninput="csCertSearch(this.value)" aria-label="Search certificates"/>
        </label>
        <div class="cs-chips" role="group" aria-label="Filter by category">
          <button class="cs-chip active" data-group="all" onclick="csCertFilter('all',this)">
            All <span class="cs-chip-count">${total}</span>
          </button>
          ${CERT_GROUPS.map(g => {
            const n = _certsOfGroup(g).length;
            return n ? `<button class="cs-chip" data-group="${g.id}" onclick="csCertFilter('${g.id}',this)"
                                style="--chip-c:${g.color}">
                          <i class="${g.icon}" aria-hidden="true"></i> ${g.title}
                          <span class="cs-chip-count">${n}</span>
                        </button>` : '';
          }).join('')}
        </div>
      </div>`;
  }

  /* ── Render all stacks ── */
  _renderCertStacks(CERT_GROUPS, '');

  /* ── Inject gallery overlay ── */
  _injectCertGallery();

  /* ── Inject modal ── */
  _injectCertModal();
}

function _renderCertStacks(groups, searchQ) {
  const grid = document.getElementById('cert-stacks-grid');
  if (!grid) return;

  const q = searchQ.trim().toLowerCase();
  const visible = groups.filter(g => {
    const c = _certsOfGroup(g);
    if (!c.length) return false;
    if (!q) return true;
    return c.some(cert => cert.title.toLowerCase().includes(q) || g.title.toLowerCase().includes(q));
  });

  if (!visible.length) {
    grid.innerHTML = `<div class="cs-empty"><i class="fa-solid fa-certificate"></i><p>No certificates match your search.</p></div>`;
    return;
  }

  grid.innerHTML = visible.map(group => {
    const certs     = _certsOfGroup(group);
    const ghostN    = Math.min(certs.length - 1, 3);
    const ghosts    = Array.from({length: ghostN}, (_, i) =>
      `<div class="cs-ghost cs-ghost-${i + 1}" aria-hidden="true"></div>`
    ).join('');
    const dotCount  = Math.min(certs.length, 6);
    const dots      = Array.from({length: dotCount}, (_, i) =>
      `<span class="cs-dot" style="opacity:${Math.max(0.2, 1 - i * 0.15)};transform:scale(${Math.max(0.6, 1 - i*0.08)})"></span>`
    ).join('');

    return `
      <div class="cs-stack" tabindex="0" role="button"
           aria-label="Open ${group.title} certificates (${certs.length})"
           onclick="openCertGallery('${group.id}')"
           onkeydown="if(event.key==='Enter'||event.key===' ')openCertGallery('${group.id}')"
           style="--gc:${group.color}">
        <div class="cs-stack-wrap">
          ${ghosts}
          <div class="cs-top-card">
            <div class="cs-glow-orb" aria-hidden="true"></div>
            <div class="cs-shimmer" aria-hidden="true"></div>
            <div class="cs-card-inner">
              <div class="cs-card-head">
                <div class="cs-icon-ring">
                  <i class="${group.icon}" aria-hidden="true"></i>
                </div>
                <span class="cs-count-badge">${certs.length}</span>
              </div>
              <div class="cs-card-mid">
                <h3 class="cs-group-title">${group.title}</h3>
                <p class="cs-group-provider">${group.provider}</p>
              </div>
              <div class="cs-card-foot">
                <div class="cs-dots">${dots}</div>
                <span class="cs-cta">Explore <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </div>
        <p class="cs-label">${group.title}</p>
      </div>`;
  }).join('');
}

function _injectCertGallery() {
  if (document.getElementById('cs-gallery')) return;
  const el = document.createElement('div');
  el.id = 'cs-gallery';
  el.className = 'cs-gallery';
  el.setAttribute('role','dialog'); el.setAttribute('aria-modal','true'); el.setAttribute('aria-label','Certificate gallery');
  el.innerHTML = `
    <div class="cs-gallery-bd" onclick="closeCertGallery()" aria-hidden="true"></div>
    <div class="cs-gallery-panel">
      <div class="cs-gallery-hd">
        <div class="cs-gallery-hd-left">
          <button class="cs-back-btn" onclick="closeCertGallery()" aria-label="Close gallery">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div>
            <h3 id="cs-gallery-title" class="cs-gallery-title"></h3>
            <p id="cs-gallery-sub"   class="cs-gallery-sub"></p>
          </div>
        </div>
        <button class="cs-close-btn" onclick="closeCertGallery()" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="cs-skills-row" id="cs-gallery-skills"></div>
      <div class="cs-gallery-grid" id="cs-gallery-grid"></div>
    </div>`;
  document.body.appendChild(el);
  document.addEventListener('keydown', e => { if(e.key==='Escape') { closeCertGallery(); closeCertModal(); } });
}

function _injectCertModal() {
  if (document.getElementById('cs-modal')) return;
  const el = document.createElement('div');
  el.id = 'cs-modal';
  el.className = 'cs-modal';
  el.setAttribute('role','dialog'); el.setAttribute('aria-modal','true'); el.setAttribute('aria-label','Certificate detail');
  el.innerHTML = `
    <div class="cs-modal-bd" onclick="closeCertModal()" aria-hidden="true"></div>
    <div class="cs-modal-panel">
      <button class="cs-modal-close" onclick="closeCertModal()" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <div class="cs-modal-layout">
        <div class="cs-modal-preview" id="cs-modal-preview">
          <div class="cs-modal-cert-card" id="cs-modal-cert-card">
            <div class="cs-modal-cert-icon" id="cs-modal-cert-icon"></div>
            <div class="cs-modal-cert-lines" aria-hidden="true">
              <div class="cs-line cs-line-lg"></div>
              <div class="cs-line cs-line-md"></div>
              <div class="cs-line cs-line-sm"></div>
            </div>
            <div class="cs-modal-cert-seal" id="cs-modal-cert-seal" aria-hidden="true">
              <i class="fa-solid fa-certificate"></i>
            </div>
          </div>
        </div>
        <div class="cs-modal-info">
          <span class="cs-modal-cat" id="cs-modal-cat"></span>
          <h2 class="cs-modal-title" id="cs-modal-title"></h2>
          <div class="cs-modal-meta">
            <span class="cs-modal-meta-item" id="cs-modal-provider">
              <i class="fa-solid fa-building" aria-hidden="true"></i> <span></span>
            </span>
            <span class="cs-modal-meta-item" id="cs-modal-date">
              <i class="fa-regular fa-calendar" aria-hidden="true"></i> <span></span>
            </span>
          </div>
          <div class="cs-modal-skills-wrap" id="cs-modal-skills-wrap">
            <p class="cs-modal-skills-lbl"><i class="fa-solid fa-tags" aria-hidden="true"></i> Skills Learned</p>
            <div class="cs-modal-skills" id="cs-modal-skills"></div>
          </div>
          <div class="cs-modal-actions" id="cs-modal-actions"></div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(el);
}

/* ── Public API ── */
window.openCertGallery = function(groupId) {
  const group  = CERT_GROUPS.find(g => g.id === groupId);
  const overlay= document.getElementById('cs-gallery');
  const title  = document.getElementById('cs-gallery-title');
  const sub    = document.getElementById('cs-gallery-sub');
  const skills = document.getElementById('cs-gallery-skills');
  const grid   = document.getElementById('cs-gallery-grid');
  if (!overlay || !group) return;

  const certs  = _certsOfGroup(group);
  if (title) title.textContent = group.title;
  if (sub)   sub.textContent   = `${group.provider} · ${certs.length} certificates`;

  /* Skills row */
  const groupSkills = CERT_SKILLS[group.category] || [];
  if (skills) skills.innerHTML = groupSkills.map(s =>
    `<span class="cs-skill-chip" style="--gc:${group.color}">${s}</span>`
  ).join('');

  /* Cert mini-cards */
  if (grid) grid.innerHTML = certs.map((cert, i) => `
    <div class="cs-gallery-card" style="--gc:${group.color};animation-delay:${i * 60}ms"
         onclick="openCertModal(${cert._idx})" tabindex="0" role="button"
         aria-label="View ${cert.title}"
         onkeydown="if(event.key==='Enter')openCertModal(${cert._idx})">
      <div class="cs-gc-icon"><i class="${cert.icon}" aria-hidden="true"></i></div>
      <div class="cs-gc-body">
        <h4 class="cs-gc-title">${cert.title}</h4>
        <p  class="cs-gc-provider">${cert.provider}</p>
        <span class="cs-gc-date"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${cert.date}</span>
      </div>
      <div class="cs-gc-arrow"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></div>
    </div>`).join('');

  overlay.style.setProperty('--gc', group.color);
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCertGallery = function() {
  const overlay = document.getElementById('cs-gallery');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

window.openCertModal = function(certIdx) {
  const cert   = portfolioData.certifications[certIdx];
  const group  = CERT_GROUPS.find(g => g.category === cert.category);
  const modal  = document.getElementById('cs-modal');
  if (!modal || !cert) return;

  const color = group?.color || '#8B5CF6';
  modal.style.setProperty('--gc', color);

  /* Populate */
  _setText('cs-modal-cat',      cert.category);
  _setText('cs-modal-title',    cert.title);
  _setText('#cs-modal-provider span', cert.provider);
  _setText('#cs-modal-date span',     cert.date);

  const catEl = document.getElementById('cs-modal-cat');
  if (catEl) catEl.style.setProperty('--gc', color);

  const iconEl = document.getElementById('cs-modal-cert-icon');
  if (iconEl) iconEl.innerHTML = `<i class="${cert.icon}" aria-hidden="true"></i>`;

  const sealEl = document.getElementById('cs-modal-cert-seal');
  if (sealEl) sealEl.style.color = color;

  const cardEl = document.getElementById('cs-modal-cert-card');
  if (cardEl) {
    cardEl.style.setProperty('--gc', color);
    cardEl.style.borderColor = color + '33';
  }

  /* Skills */
  const skills = CERT_SKILLS[cert.category] || [];
  const sw = document.getElementById('cs-modal-skills');
  if (sw) sw.innerHTML = skills.map(s => `<span class="cs-skill-chip" style="--gc:${color}">${s}</span>`).join('');

  /* Actions */
  const act = document.getElementById('cs-modal-actions');
  if (act) act.innerHTML = `
    <a href="${cert.pdf}" download class="cs-modal-btn cs-modal-btn-primary">
      <i class="fa-solid fa-download" aria-hidden="true"></i> Download PDF
    </a>
    <button class="cs-modal-btn cs-modal-btn-secondary"
            onclick="openCertPdfViewer('${cert.pdf.replace(/'/g,"\\'")}','${cert.title.replace(/'/g,"\\'")}')">
      <i class="fa-solid fa-eye" aria-hidden="true"></i> View PDF
    </button>`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCertModal = function() {
  const modal = document.getElementById('cs-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.openCertPdfViewer = function(pdf, title) {
  closeCertModal();
  /* Reuse or create simple iframe viewer */
  let lb = document.getElementById('cert-pdf-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'cert-pdf-lightbox';
    lb.className = 'cert-pdf-lightbox';
    lb.innerHTML = `
      <div class="cert-pdf-backdrop" onclick="closeCertPdfViewer()"></div>
      <div class="cert-pdf-panel">
        <div class="cert-pdf-header">
          <p id="cert-pdf-title" class="cert-pdf-caption"></p>
          <div class="cert-pdf-actions">
            <a id="cert-pdf-download" href="" download class="cert-pdf-dl-btn"><i class="fa-solid fa-download"></i> Download</a>
            <button class="cert-pdf-close" onclick="closeCertPdfViewer()" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
        <iframe id="cert-pdf-frame" src="" title="Certificate PDF" loading="lazy"></iframe>
      </div>`;
    document.body.appendChild(lb);
  }
  document.getElementById('cert-pdf-frame').src = pdf;
  const capEl = document.getElementById('cert-pdf-title');
  const dlEl  = document.getElementById('cert-pdf-download');
  if (capEl) capEl.textContent = title;
  if (dlEl)  dlEl.href = pdf;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCertPdfViewer = function() {
  const lb = document.getElementById('cert-pdf-lightbox');
  if (lb) { lb.classList.remove('active'); document.getElementById('cert-pdf-frame').src = ''; }
  document.body.style.overflow = '';
};

/* Alias for backwards compatibility */
window.closeCertPdf = window.closeCertPdfViewer;

window.csCertFilter = function(groupId, btn) {
  document.querySelectorAll('.cs-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const groups = groupId === 'all' ? CERT_GROUPS : CERT_GROUPS.filter(g => g.id === groupId);
  _renderCertStacks(groups, document.getElementById('cs-search-input')?.value || '');
};

window.csCertSearch = function(q) {
  const activeChip = document.querySelector('.cs-chip.active');
  const groupId    = activeChip?.dataset.group || 'all';
  const groups     = groupId === 'all' ? CERT_GROUPS : CERT_GROUPS.filter(g => g.id === groupId);
  _renderCertStacks(groups, q);
};

function _setText(sel, val) {
  const el = typeof sel === 'string' && sel.startsWith('#')
    ? document.querySelector(sel)
    : document.getElementById(sel);
  if (el) el.textContent = val;
}




/* ---------------------------------------------------------------
   13. RENDER ACHIEVEMENTS
--------------------------------------------------------------- */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = portfolioData.achievements.map(ach => `
    <div class="achievement-card-premium glass-card-hover" data-aos="fade-up">
      ${ach.image ? `
      <div class="achievement-cert-thumb" onclick="openCertLightbox('${ach.image}', '${ach.title.replace(/'/g, "\\'")}')"
           role="button" tabindex="0" aria-label="View certificate for ${ach.title.replace(/'/g, '')}">
        <img src="${ach.image}" alt="${ach.title} certificate" loading="lazy" />
        <div class="achievement-cert-overlay">
          <i class="fa-solid fa-expand"></i>
          <span>View Certificate</span>
        </div>
      </div>` : ''}
      <div class="achievement-icon-box">
        <i class="${ach.icon}"></i>
      </div>
      <span class="achievement-year">${ach.year}</span>
      <h3 class="achievement-title-premium">${ach.title}</h3>
      <p class="achievement-desc-premium">${ach.description}</p>
    </div>
  `).join('');

  /* ── Certificate Lightbox (injected once) ── */
  if (!document.getElementById('cert-lightbox')) {
    const lb = document.createElement('div');
    lb.id = 'cert-lightbox';
    lb.className = 'cert-lightbox';
    lb.innerHTML = `
      <div class="cert-lightbox-backdrop" onclick="closeCertLightbox()"></div>
      <div class="cert-lightbox-content">
        <button class="cert-lightbox-close" onclick="closeCertLightbox()" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img id="cert-lightbox-img" src="" alt="" />
        <p id="cert-lightbox-title" class="cert-lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lb);
  }
}


/* ---------------------------------------------------------------
   14. RENDER RESUME
--------------------------------------------------------------- */
function renderResume() {
  const container = document.getElementById('resume-content');
  if (!container) return;

  const { resumePath } = portfolioData.personal;
  container.innerHTML = `
    <div class="resume-card-premium glass-card-hover" data-aos="fade-up">
      <div class="resume-icon-box">
        <i class="fa-solid fa-file-pdf"></i>
      </div>
      <h3 class="text-2xl font-bold mb-4">Curriculum Vitae</h3>
      <p class="text-white/60 mb-8 max-w-md mx-auto">
        Download my updated resume to learn more about my education, experience, and certifications in one place.
      </p>
      <a href="${resumePath}" download class="btn-hero-primary" id="resume-download-btn">
        <i class="fa-solid fa-download"></i> Download Resume
        <span class="btn-hero-shine"></span>
      </a>
    </div>
  `;
}

/* ---------------------------------------------------------------
   15. RENDER CONTACT
--------------------------------------------------------------- */
function renderContact() {
  const container = document.getElementById('contact-content');
  if (!container) return;

  const { email, location, linkedin, github } = portfolioData.personal;
  container.innerHTML = `
    <div class="contact-layout">
      <!-- Info Column -->
      <div class="contact-info-premium" data-aos="fade-right">
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-item-text">
            <h4>Email Me</h4>
            <p>${email}</p>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="contact-item-text">
            <h4>Location</h4>
            <p>${location}</p>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-brands fa-linkedin"></i></div>
          <div class="contact-item-text">
            <h4>LinkedIn</h4>
            <p>Connect with me professionally</p>
            <a href="${linkedin}" target="_blank" class="text-accent hover:underline text-sm">View Profile</a>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-brands fa-github"></i></div>
          <div class="contact-item-text">
            <h4>GitHub</h4>
            <p>Check out my open-source work</p>
            <a href="${github}" target="_blank" class="text-accent hover:underline text-sm">View GitHub</a>
          </div>
        </div>
      </div>

      <!-- Form Column -->
      <div class="contact-form-premium glass-card" data-aos="fade-left">
        <form id="portfolio-contact-form" action="https://api.web3forms.com/submit" method="POST">
          <!-- Web3Forms hidden fields -->
          <input type="hidden" name="access_key" value="bccfccf6-d5ca-4bb0-a411-2e9344f7ad36">
          <input type="hidden" name="subject" value="New Portfolio Contact - Abhishek Kamble">
          <input type="hidden" name="from_name" value="Portfolio Contact Form">
          <!-- Honeypot spam protection -->
          <input type="checkbox" name="botcheck" class="hidden" style="display:none">

          <div class="form-group-premium">
            <label class="form-label-premium" for="contact-name">Full Name</label>
            <input type="text" id="contact-name" name="name" class="form-input-premium" placeholder="John Doe" required minlength="2">
          </div>
          <div class="form-group-premium">
            <label class="form-label-premium" for="contact-email">Email Address</label>
            <input type="email" id="contact-email" name="email" class="form-input-premium" placeholder="john@example.com" required>
          </div>
          <div class="form-group-premium">
            <label class="form-label-premium" for="contact-message">Message</label>
            <textarea id="contact-message" name="message" class="form-input-premium" placeholder="Hi Abhishek, I'd like to talk about..." required minlength="10"></textarea>
          </div>

          <!-- Status message -->
          <div id="contact-status" class="contact-status" aria-live="polite"></div>

          <button type="submit" id="contact-submit-btn" class="btn-hero-primary w-full">
            <i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>
            <span class="btn-hero-shine"></span>
          </button>
        </form>
      </div>
    </div>
  `;

  /* ── Web3Forms submit handler ── */
  const form   = document.getElementById('portfolio-contact-form');
  const btn    = document.getElementById('contact-submit-btn');
  const status = document.getElementById('contact-status');

  if (!form) return;

  let isSubmitting = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Prevent duplicate submissions */
    if (isSubmitting) return;
    isSubmitting = true;

    /* Loading state */
    const btnIcon = btn.querySelector('i');
    const btnText = btn.querySelector('span:not(.btn-hero-shine)');
    const origIcon = btnIcon.className;
    const origText = btnText.textContent;

    btnIcon.className = 'fa-solid fa-spinner fa-spin';
    btnText.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';
    status.innerHTML = '';
    status.className = 'contact-status';

    try {
      const formData = new FormData(form);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        status.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message sent successfully! I\'ll get back to you soon.';
        status.className = 'contact-status contact-status--success';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      status.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Something went wrong. Please try again.';
      status.className = 'contact-status contact-status--error';
    } finally {
      /* Restore button */
      btnIcon.className = origIcon;
      btnText.textContent = origText;
      btn.disabled = false;
      btn.style.opacity = '';
      btn.style.pointerEvents = '';
      isSubmitting = false;
    }
  });
}

/* ---------------------------------------------------------------
   16. RENDER FOOTER
--------------------------------------------------------------- */
function renderFooter() {
  const el = document.getElementById('footer-content');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <p>© ${year} <span class="text-primary font-semibold">${portfolioData.personal.name}</span>. All rights reserved.</p>
  `;
}

/* ---------------------------------------------------------------
   17. EXPOSE DATA GLOBALLY (for section scripts)
--------------------------------------------------------------- */
window.portfolioData = portfolioData;


/* ---------------------------------------------------------------
   CERTIFICATE LIGHTBOX HELPERS
--------------------------------------------------------------- */
function openCertLightbox(src, title) {
  const lb = document.getElementById('cert-lightbox');
  if (!lb) return;
  document.getElementById('cert-lightbox-img').src = src;
  document.getElementById('cert-lightbox-img').alt = title;
  document.getElementById('cert-lightbox-title').textContent = title;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCertLightbox() {
  const lb = document.getElementById('cert-lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCertLightbox(); });


/* ---------------------------------------------------------------
   18. GITHUB CONTRIBUTIONS SECTION
--------------------------------------------------------------- */
function initGitHubSection() {
  const USERNAME    = 'AbhishekKambleGit';
  const skeleton    = document.getElementById('gh-skeleton');
  const calendarWrap = document.getElementById('gh-calendar-wrap');
  const errorEl     = document.getElementById('gh-error');
  const statsGrid   = document.getElementById('gh-stats-grid');

  /* ── 1. GitHub Calendar ── */
  if (typeof GitHubCalendar !== 'undefined' && calendarWrap) {
    try {
      GitHubCalendar('.calendar', USERNAME, {
        responsive : true,
        tooltips   : true,
        global_stats: false
      });
      /* Poll until the calendar SVG is injected, then swap skeleton → calendar */
      const poll = setInterval(() => {
        if (calendarWrap.querySelector('svg') || calendarWrap.querySelector('table')) {
          clearInterval(poll);
          if (skeleton)     skeleton.style.display     = 'none';
          calendarWrap.style.display = 'block';
        }
      }, 300);
      /* Safety timeout – if nothing after 10s, show error */
      setTimeout(() => {
        clearInterval(poll);
        if (calendarWrap.style.display === 'none') {
          if (skeleton) skeleton.style.display = 'none';
          if (errorEl)  errorEl.style.display  = 'flex';
        }
      }, 10000);
    } catch (e) {
      if (skeleton) skeleton.style.display = 'none';
      if (errorEl)  errorEl.style.display  = 'flex';
    }
  } else {
    /* Library not loaded yet — try again after 2s */
    setTimeout(() => {
      if (typeof GitHubCalendar !== 'undefined') initGitHubSection();
      else {
        if (skeleton) skeleton.style.display = 'none';
        if (errorEl)  errorEl.style.display  = 'flex';
      }
    }, 2000);
  }

  /* ── 2. GitHub REST API – profile stats ── */
  if (!statsGrid) return;

  fetch(`https://api.github.com/users/${USERNAME}`, {
    headers: { Accept: 'application/vnd.github.v3+json' }
  })
    .then(r => {
      if (!r.ok) throw new Error('GitHub API error');
      return r.json();
    })
    .then(data => {
      const joined = data.created_at
        ? new Date(data.created_at).getFullYear()
        : '—';

      const stats = [
        { icon: 'fa-solid fa-code-branch',   label: 'Public Repos',   value: data.public_repos  ?? 0 },
        { icon: 'fa-solid fa-users',          label: 'Followers',      value: data.followers      ?? 0 },
        { icon: 'fa-solid fa-user-plus',      label: 'Following',      value: data.following      ?? 0 },
        { icon: 'fa-solid fa-calendar-check', label: 'Member Since',   value: joined, noCount: true },
      ];

      statsGrid.innerHTML = stats.map(s => `
        <div class="gh-stat-card">
          <i class="${s.icon} gh-stat-icon" aria-hidden="true"></i>
          <div class="gh-stat-value" data-target="${s.noCount ? '' : s.value}">${s.noCount ? s.value : '0'}</div>
          <div class="gh-stat-label">${s.label}</div>
        </div>`).join('');

      /* Count-up animation */
      statsGrid.querySelectorAll('.gh-stat-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target) || target === 0) return;
        const duration = 1200;
        const step     = 16;
        const steps    = Math.ceil(duration / step);
        const inc      = Math.ceil(target / steps);
        let current    = 0;
        const timer    = setInterval(() => {
          current = Math.min(current + inc, target);
          el.textContent = current.toLocaleString();
          if (current >= target) clearInterval(timer);
        }, step);
      });
    })
    .catch(() => {
      /* Graceful degradation — show placeholder cards */
      statsGrid.innerHTML = [
        { icon: 'fa-solid fa-code-branch',   label: 'Public Repos' },
        { icon: 'fa-solid fa-users',          label: 'Followers'    },
        { icon: 'fa-solid fa-user-plus',      label: 'Following'    },
        { icon: 'fa-solid fa-calendar-check', label: 'Member Since' },
      ].map(s => `
        <div class="gh-stat-card">
          <i class="${s.icon} gh-stat-icon" aria-hidden="true"></i>
          <div class="gh-stat-value">—</div>
          <div class="gh-stat-label">${s.label}</div>
        </div>`).join('');
    });
}


/* ---------------------------------------------------------------
   19. EDUCATION JOURNEY – TRAIN TIMELINE v2 (Coach = Milestone)
--------------------------------------------------------------- */
function initEducationJourney() {
  const belt = document.getElementById('edu-train-belt');
  if (!belt) return;

  /* ── 1. Engine HTML (nose faces LEFT = direction of travel) ── */
  const engineHTML = `
    <div class="edu-engine" id="edu-engine" aria-label="Locomotive">
      <div class="edu-engine-top">
        <div class="edu-chimney" aria-hidden="true">
          <div class="edu-smoke-puff"></div>
          <div class="edu-smoke-puff"></div>
          <div class="edu-smoke-puff"></div>
        </div>
      </div>
      <div class="edu-engine-mid">
        <div class="edu-engine-nose">
          <div class="edu-headlight" aria-hidden="true"></div>
        </div>
        <div class="edu-engine-body">
          <div class="edu-engine-cab-windows">
            <div class="edu-eng-win"></div>
            <div class="edu-eng-win"></div>
          </div>
          <div class="edu-engine-nameplate">
            <i class="fa-solid fa-train-subway" aria-hidden="true"></i>
            <span>LEARNING<br>JOURNEY</span>
          </div>
        </div>
      </div>
      <div class="edu-engine-chassis" aria-hidden="true">
        <div class="edu-wheel-truck">
          <div class="edu-wheel edu-wheel--lg"><div class="edu-w-hub"></div></div>
          <div class="edu-wheel edu-wheel--lg"><div class="edu-w-hub"></div></div>
        </div>
        <div class="edu-wheel-truck">
          <div class="edu-wheel edu-wheel--lg"><div class="edu-w-hub"></div></div>
          <div class="edu-wheel edu-wheel--lg"><div class="edu-w-hub"></div></div>
        </div>
      </div>
    </div>`;

  /* ── 2. Coach HTML for each education milestone ── */
  const coachesHTML = portfolioData.education.map((item, idx) => `
    <div class="edu-coupler-joint" aria-hidden="true">
      <div class="edu-coupler-body"></div>
    </div>
    <div class="edu-coach ${item.current ? 'edu-coach--current' : ''}"
         id="${item.id}" data-idx="${idx}"
         role="article" aria-label="${item.degree}">

      ${item.current
        ? `<div class="edu-coach-badge edu-badge-current">
             <span class="edu-badge-dot" aria-hidden="true"></span>Currently Pursuing
           </div>`
        : `<div class="edu-coach-badge edu-badge-done">
             <i class="fa-solid fa-check" aria-hidden="true"></i> Completed
           </div>`}

      <div class="edu-coach-roof" aria-hidden="true">
        <div class="edu-roof-vent"></div>
        <div class="edu-roof-vent"></div>
      </div>

      <div class="edu-coach-wall">
        <div class="edu-coach-stripe-top"></div>

        <div class="edu-coach-win-row" aria-hidden="true">
          <div class="edu-coach-win"></div>
          <div class="edu-coach-win"></div>
          <div class="edu-coach-win"></div>
        </div>

        <div class="edu-coach-num">Coach 0${idx + 1}</div>

        <div class="edu-coach-info-panel">
          <div class="edu-coach-icon-cell">
            <i class="${item.icon}" aria-hidden="true"></i>
          </div>
          <h3 class="edu-coach-deg">${item.degree}</h3>
          <p class="edu-coach-inst">${item.institution}</p>
          <div class="edu-coach-pills">
            ${item.grade
              ? `<span class="edu-pill edu-pill--grade">
                   <i class="fa-solid fa-star-half-stroke" aria-hidden="true"></i>${item.grade}
                 </span>`
              : ''}
            <span class="edu-pill edu-pill--time">
              <i class="fa-regular fa-calendar" aria-hidden="true"></i>${item.duration}
            </span>
          </div>
        </div>

        <div class="edu-coach-stripe-bottom"></div>
      </div>

      <div class="edu-coach-chassis" aria-hidden="true">
        <div class="edu-wheel-truck">
          <div class="edu-wheel"><div class="edu-w-hub"></div></div>
          <div class="edu-wheel"><div class="edu-w-hub"></div></div>
        </div>
        <div class="edu-wheel-truck">
          <div class="edu-wheel"><div class="edu-w-hub"></div></div>
          <div class="edu-wheel"><div class="edu-w-hub"></div></div>
        </div>
      </div>
    </div>`).join('');

  belt.innerHTML = engineHTML + coachesHTML;

  /* ── 3. Continuous auto-animation (requestAnimationFrame) ── */
  const progressFill = document.getElementById('edu-journey-progress-fill');
  const scrollHint   = document.getElementById('edu-scroll-hint');

  /* Hide scroll hint – no scrolling needed */
  if (scrollHint) scrollHint.style.display = 'none';

  let rafId     = null;
  let startTime = null;

  /*
   * Period: 20 seconds for one full forward+backward cycle.
   * Marquee style — constant linear speed, instant wrap-around.
   */
  const MARQUEE_MS = 25000;  // ms for one full left-to-right pass

  function animate(ts) {
    if (startTime === null) startTime = ts;
    /* Linear 0 → 1, then instantly back to 0 (marquee wrap) */
    const progress = ((ts - startTime) % MARQUEE_MS) / MARQUEE_MS;

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      /* Desktop/Tablet:
         Enters from RIGHT edge → exits past LEFT edge.
         startX =  vw           (belt left-edge just off-screen right)
         endX   = -beltW        (belt right-edge just off-screen left)
         translateX = startX - progress * (vw + beltW)               */
      const beltW  = belt.scrollWidth;
      const vw     = window.innerWidth;
      belt.style.transform = `translateX(${vw - progress * (vw + beltW)}px)`;
    } else {
      /* Mobile: enters from BOTTOM, exits TOP */
      const scene  = document.getElementById('edu-railway-scene');
      const sceneH = scene ? scene.offsetHeight : window.innerHeight;
      const beltH  = belt.scrollHeight;
      belt.style.transform = `translateY(${sceneH - progress * (sceneH + beltH)}px)`;
    }

    /* Progress bar */
    if (progressFill) progressFill.style.width = `${progress * 100}%`;

    /* Light up coaches progressively */
    const coaches = belt.querySelectorAll('.edu-coach');
    coaches.forEach((coach, idx) => {
      const threshold = 0.08 + (idx / coaches.length) * 0.72;
      coach.classList.toggle('edu-coach--lit', progress >= threshold);
    });

    rafId = requestAnimationFrame(animate);
  }

  /* ── 4. Start / stop animation based on visibility ── */
  const section = document.getElementById('education');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!rafId) {
          startTime = null;               // restart cycle when re-entering
          rafId = requestAnimationFrame(animate);
        }
      } else {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      }
    });
  }, { threshold: 0.1 });

  if (section) io.observe(section);

  /* Recalculate max travel on resize */
  window.addEventListener('resize', () => { startTime = null; }, { passive: true });
}

/* ---------------------------------------------------------------
   CHATBOT – AI-Powered Assistant (Google Gemini)
--------------------------------------------------------------- */
function initChatbot() {

  /* ── Config ── */
  const GEMINI_API_KEY = (typeof CHATBOT_CONFIG !== 'undefined' && CHATBOT_CONFIG.GEMINI_API_KEY) || 'PASTE_YOUR_GEMINI_API_KEY_HERE';
  const GEMINI_MODEL   = 'gemini-2.0-flash';
  const GEMINI_URL     = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  /* ── DOM refs ── */
  const fab       = document.getElementById('chatbot-fab');
  const badge     = document.getElementById('chatbot-fab-badge');
  const chatWin   = document.getElementById('chatbot-window');
  const closeBtn  = document.getElementById('chatbot-close');
  const msgArea   = document.getElementById('chatbot-messages');
  const input     = document.getElementById('chatbot-input');
  const sendBtn   = document.getElementById('chatbot-send');
  const statusEl  = document.getElementById('chatbot-status');

  if (!fab || !chatWin) return;

  let isOpen        = false;
  let isProcessing  = false;
  let conversationHistory = [];   // { role, parts:[{text}] }

  /* ── Build system context from portfolioData ── */
  function buildSystemPrompt() {
    const d = portfolioData;
    const allSkills = Object.values(d.skills).flat().map(s => s.name).join(', ');
    const projects  = d.projects.map(p =>
      `• ${p.title} (${p.category}): ${p.description} | Tech: ${p.techStack.join(', ')}${p.liveDemo ? ' | Live: ' + p.liveDemo : ''}${p.github ? ' | GitHub: ' + p.github : ''}`
    ).join('\n');
    const certs = d.certifications.map(c => `• ${c.title} — ${c.provider} (${c.date})`).join('\n');
    const achievements = d.achievements.map(a => `• ${a.title}: ${a.description} (${a.year})`).join('\n');
    const education = d.education.map(e =>
      `• ${e.degree} at ${e.institution} (${e.duration})${e.grade ? ' — Grade: ' + e.grade : ''}${e.current ? ' [Currently Pursuing]' : ''}`
    ).join('\n');
    const services = d.services.map(s => `• ${s.title}: ${s.description}`).join('\n');

    return `You are an AI assistant on Abhishek Kamble's portfolio website. You answer questions about Abhishek based on the following data. Be friendly, concise, and helpful. Use short paragraphs. If asked something unrelated to Abhishek, politely redirect. Use markdown formatting (bold, lists) when helpful.

PERSONAL INFO:
Name: ${d.personal.name}
Title: ${d.personal.title}
Location: ${d.personal.location}
Email: ${d.personal.email}
GitHub: ${d.personal.github}
LinkedIn: ${d.personal.linkedin}
Bio: ${d.personal.about}

SKILLS: ${allSkills}

PROJECTS:
${projects}

CERTIFICATIONS (${d.certifications.length} total):
${certs}

ACHIEVEMENTS:
${achievements}

EDUCATION:
${education}

SERVICES:
${services}

RULES:
- Be concise. Keep responses under 150 words unless the user asks for detail.
- Always speak about Abhishek in third person ("Abhishek has..." / "He specializes in...").
- When listing items, use bullet points.
- If the user asks for contact info, share the email and LinkedIn.
- If unsure about something, say so honestly rather than making things up.
- Be enthusiastic but professional.`;
  }

  const systemPrompt = buildSystemPrompt();

  /* ── Markdown renderer (basic) ── */
  function renderMarkdown(text) {
    return text
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Inline code
      .replace(/`(.+?)`/g, '<code>$1</code>')
      // Links
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Unordered lists: lines starting with - or •
      .replace(/^[\-•]\s+(.+)$/gm, '<li>$1</li>')
      // Wrap consecutive <li> in <ul>
      .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
      // Line breaks → paragraphs
      .split(/\n{2,}/)
      .map(p => {
        p = p.trim();
        if (!p) return '';
        if (p.startsWith('<ul>') || p.startsWith('<ol>')) return p;
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
      })
      .filter(Boolean)
      .join('');
  }

  /* ── Add message to chat ── */
  function addMessage(text, sender, withChips) {
    const div = document.createElement('div');
    div.className = `chatbot-msg chatbot-msg--${sender}`;
    div.innerHTML = sender === 'bot' ? renderMarkdown(text) : text;
    msgArea.appendChild(div);

    // Quick-reply chips
    if (withChips && withChips.length) {
      const chipWrap = document.createElement('div');
      chipWrap.className = 'chatbot-chips';
      withChips.forEach(label => {
        const chip = document.createElement('button');
        chip.className = 'chatbot-chip';
        chip.textContent = label;
        chip.addEventListener('click', () => {
          chipWrap.remove();
          handleSend(label);
        });
        chipWrap.appendChild(chip);
      });
      msgArea.appendChild(chipWrap);
    }

    scrollToBottom();
  }

  /* ── Typing indicator ── */
  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chatbot-typing';
    div.id = 'chatbot-typing';
    div.innerHTML = '<span class="chatbot-typing-dot"></span><span class="chatbot-typing-dot"></span><span class="chatbot-typing-dot"></span>';
    msgArea.appendChild(div);
    scrollToBottom();
  }
  function hideTyping() {
    const el = document.getElementById('chatbot-typing');
    if (el) el.remove();
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      msgArea.scrollTop = msgArea.scrollHeight;
    });
  }

  /* ── Gemini API call ── */
  async function callGemini(userMessage) {
    // Add user message to history
    conversationHistory.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const body = {
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: conversationHistory,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 512,
      }
    };

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) throw new Error('Empty response from AI');

    // Add bot response to history
    conversationHistory.push({
      role: 'model',
      parts: [{ text: reply }]
    });

    return reply;
  }

  /* ── Handle sending a message ── */
  async function handleSend(text) {
    const message = text || input.value.trim();
    if (!message || isProcessing) return;

    isProcessing = true;
    input.value = '';
    sendBtn.disabled = true;
    statusEl.textContent = 'Typing...';

    // Show user message
    addMessage(message, 'user');
    showTyping();

    try {
      if (GEMINI_API_KEY === 'PASTE_YOUR_GEMINI_API_KEY_HERE') {
        throw new Error('API_KEY_NOT_SET');
      }
      const reply = await callGemini(message);
      hideTyping();
      addMessage(reply, 'bot');
    } catch (err) {
      hideTyping();
      console.warn('Chatbot error:', err);
      if (err.message === 'API_KEY_NOT_SET') {
        addMessage(
          "⚠️ **API key not configured yet.** The site owner needs to add a Gemini API key for me to work. In the meantime, feel free to explore the portfolio sections above!",
          'bot'
        );
      } else {
        addMessage(
          "Sorry, I couldn't process that right now. Please try again in a moment, or reach out directly via the **Contact** section below! 😊",
          'bot'
        );
      }
    } finally {
      isProcessing = false;
      statusEl.textContent = 'Online — Ask me anything!';
      updateSendBtn();
    }
  }

  /* ── Toggle chat window ── */
  function toggleChat() {
    isOpen = !isOpen;
    fab.classList.toggle('chatbot-fab--open', isOpen);
    chatWin.classList.toggle('chatbot-window--open', isOpen);
    chatWin.setAttribute('aria-hidden', String(!isOpen));
    fab.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      badge.classList.add('hidden');
      input.focus();
      scrollToBottom();
    }
  }

  function closeChat() {
    if (isOpen) toggleChat();
  }

  /* ── Enable/disable send button based on input ── */
  function updateSendBtn() {
    sendBtn.disabled = !input.value.trim() || isProcessing;
  }

  /* ── Event listeners ── */
  fab.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', closeChat);

  input.addEventListener('input', updateSendBtn);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
  sendBtn.addEventListener('click', () => handleSend());

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (isOpen && !chatWin.contains(e.target) && !fab.contains(e.target)) {
      closeChat();
    }
  });

  /* ── Welcome message on first load ── */
  addMessage(
    "Hi there! 👋 I'm **AK Assistant**, Abhishek's AI-powered portfolio assistant. Ask me anything about his **skills**, **projects**, **certifications**, or **experience**!",
    'bot',
    ['Tell me about Abhishek', 'What are his skills?', 'Show me his projects', 'How to contact him?']
  );
}
