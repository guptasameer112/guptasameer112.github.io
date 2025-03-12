// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Find all my projects here!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Feel free to download my resume!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-maxim-understanding-agentic-systems",
      
        title: 'Maxim: Understanding Agentic Systems <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Exploring the quality evaluation of AI agent systems.",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.getmaxim.ai/blog/ai-agent-quality-evaluation/", "_blank");
        
      },
    },{id: "post-maxim-tracing-your-agent-using-maxim",
      
        title: 'Maxim: Tracing your Agent using Maxim <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Trace and evaluate your agent&#39;s performance using Maxim.",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/maximhq/maxim-cookbooks/blob/main/python/observability-online-eval/customer-support-agent/tracing-eval.ipynb", "_blank");
        
      },
    },{id: "post-maxim-simulate-and-evaluate-your-agents-using-maxim",
      
        title: 'Maxim: Simulate and Evaluate your Agents using Maxim <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Learn how to simulate and evaluate your agents using Maxim.",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/maximhq/maxim-cookbooks/blob/main/python/simulation/simulation-workflow.md", "_blank");
        
      },
    },{id: "post-exploring-spaces-cafes-and-libraries-as-sanctuaries",
      
        title: "Exploring Spaces - Cafes and Libraries as Sanctuaries",
      
      description: "A journey through my favorite places to study and unwind: from bustling libraries to serene cafes.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/libraries/";
        
      },
    },{id: "post-exploring-buddhism",
      
        title: "Exploring Buddhism",
      
      description: "Journey into Buddhism, meditation, and self-discovery at Tushita Meditation Center.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/exploring-buddhism/";
        
      },
    },{id: "news-joined-iiit-delhi-as-a-computer-science-major",
          title: 'Joined IIIT-Delhi as a computer science major.',
          description: "",
          section: "News",},{id: "news-collaborated-with-dr-sambuddho-chakraborty-in-the-network-security-lab-for-dynamic-virus-detection-and-also-ranked-2nd-place-globally-at-wreckctf-2022-as-part-of-the-d4rkc0de-cybersecurity-team-from-iiit-delhi",
          title: 'Collaborated with Dr. Sambuddho Chakraborty in the network security lab for dynamic virus...',
          description: "",
          section: "News",},{id: "news-collaborated-with-dr-dhruv-kumar-and-max-healthcare-for-bio-medical-research",
          title: 'Collaborated with Dr. Dhruv Kumar and MAX Healthcare for bio-medical research.',
          description: "",
          section: "News",},{id: "news-interned-at-microsoft-india-in-the-azure-networking-team-built-a-fullstack-intelligent-agent-for-ticket-resolution",
          title: 'Interned at Microsoft India, in the Azure Networking team, built a fullstack intelligent...',
          description: "",
          section: "News",},{id: "news-joined-maxim-ai-as-an-ai-engineering-intern",
          title: 'Joined Maxim AI as an AI Engineering Intern.',
          description: "",
          section: "News",},{id: "projects-25acres",
          title: '25acres',
          description: "A Real Estate Bidding System; designed to facilitate the secure exchange and verification of property-related documents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/25acres/";
            },},{id: "projects-finsync",
          title: 'FinSync',
          description: "A aggregation system for financial data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/finsync/";
            },},{id: "projects-jokes-rec",
          title: 'Jokes Rec',
          description: "A collaborative filtering and content-based recommendation system for jokes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jokes-rec/";
            },},{id: "projects-nerdlabs",
          title: 'NerdLabs',
          description: "A ecommerce website for selling tech products",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nerdlabs/";
            },},{id: "projects-tank-stars",
          title: 'Tank Stars',
          description: "A 2 player java game based on the original tank stars game using libGDX.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tank-stars/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%70%74%61%73%61%6D%65%65%72%31%31%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/guptasameer112", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sameer-gupta-198b11160/", "_blank");
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
