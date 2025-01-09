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
          section: "News",},{id: "news-interned-at-microsoft-india-in-the-azure-networking-team-built-a-fullstack-intelligent-agent-for-ticket-resolution",
          title: 'Interned at Microsoft India, in the Azure Networking team, built a fullstack intelligent...',
          description: "",
          section: "News",},{id: "projects-finsync",
          title: 'FinSync',
          description: "A aggregation system for financial data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
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
