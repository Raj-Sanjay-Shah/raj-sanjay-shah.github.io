// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Current research projects in cognitive modeling and AI for mental health.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications, preprints, and patents in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching-amp-mentoring",
          title: "Teaching &amp; Mentoring",
          description: "Teaching experience and student mentorship at Georgia Tech and BITS Pilani.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-domain-specific-evaluations-with-real-consequences",
        
          title: "Domain-Specific Evaluations With Real Consequences",
        
        description: "Benchmarks for finance, medicine, and cybersecurity that mirror the consequences that matter.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/domain-evaluations/";
          
        },
      },{id: "post-teaching-language-models-to-grow-up",
        
          title: "Teaching Language Models to Grow Up",
        
        description: "BabyLM and psych-inspired batteries that treat LLMs as computational subjects of cognitive science.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cognitive-alignment/";
          
        },
      },{id: "post-beyond-the-unlearning-mirage",
        
          title: "Beyond the Unlearning Mirage",
        
        description: "Dynamic probes and activation analysis that expose brittle unlearning, paired with watermarking and continual learning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/unlearning-safety/";
          
        },
      },{id: "post-llm-copilots-for-peer-counselors",
        
          title: "LLM Copilots for Peer Counselors",
        
        description: "How motivational interviewing–aware sandboxes and analytics help peer counselors level up.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llm-peer-counselors/";
          
        },
      },{id: "news-shoutout-to-harsh-nishant-lalai-he-is-exploring-phd-opportunities-for-fall-2026-he-has-strong-theoretical-grounding-careful-experimental-design-and-the-engineering-maturity-to-turn-concepts-into-working-systems-if-your-lab-values-both-depth-and-execution-i-highly-recommend-him-website-https-sites-google-com-view-harsh-nishant-lalai",
          title: 'Shoutout to Harsh Nishant Lalai. He is exploring PhD opportunities for Fall 2026....',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Raj_Shah_CV_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6A%73%61%6E%6A%61%79%73%68%61%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Raj-Sanjay-Shah", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raj-sanjay-shah", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0847-8426", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mpGOJ0gAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2051264008", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/rajsanjayshah", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
