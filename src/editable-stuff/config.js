// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tajuar",
  middleName: "",
  lastName: "Bhuiyan",
  message: " Passionate about building software that solves real-world problems.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tajuar2001",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tajuarb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/taj.jpg"),
  imageSize: 375,
  message:
    "I am a rising senior at the University of Michigan's College of Engineering with a strong background in computer technology, enhanced by internships at Viasat Inc., Carrier, and RippleMatch. Originally from a rural village in Bangladesh, my early exposure to programming has fueled a lifelong passion for algorithms and mathematical tools, which I explore both in and out of academic settings. In addition to my technical pursuits, I enjoy cooking, gardening, and various tech-based hobbies.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "tajuar2001",
  reposLength: 0,
  specificRepos: ["Lazy-Tune", "Spatial-Audio" , "Playlist-Generator", "Database-Management"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Affiliations",
  message: "Over the years, I have actively sought opportunities to engage with various organizations and clubs that align with my professional interests and personal values. Being part of these groups has not only enriched my network but has also significantly contributed to my personal and professional development. Here are some of the notable organizations and clubs that I have been privileged to join:",
  images: [
    { 
      img: require("../editable-stuff/mhacker.png"), 
      label: "Michigan Hackers", 
      paragraph: "The Michigan Hackers aims to build a community of individuals at the University of Michigan who address challenges through the creative application of technology." 
    },
    { 
      img: require("../editable-stuff/un.jpg"), 
      label: "Model United Nations",
      paragraph: "Students assume the roles of delegates to the United Nations, simulating UN committees. Participants are assigned countries and committees to research, preparing for conferences where they discuss and negotiate on global issues." 
    },
    {
      img: require("../editable-stuff/bsa.png"),
      label: "Bangladeshi Student Association",
      paragraph: "BSA aim to unite students of Bangladeshi origin or those interested in Bangladeshi culture. They provide a platform for celebrating the culture, engaging in community service, and promoting educational experiences beyond the classroom."
    },
    {
      img: require("../editable-stuff/keyclub.jpg"),
      label: "Key Club Association",
      paragraph: "The oldest and largest student-led service organization, emphasizes community service, character building, and leadership development, empowering its members through various service projects to better their communities and the world."
    }
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "C/C++", value: 80 },
    { name: "Rust", value: 40},
    { name: "Verilog", value: 70 },
    { name: "SQL", value: 65 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 60 },
    { name: "Go", value: 50 },    
    { name: "Matlab", value: 75 },
  ],

  softSkills: [
    { name: "Pytorch", value: 75 }, // Added based on resume
    { name: "Scikit-learn", value: 85 }, // Added based on resume
    { name: "Pandas", value: 80 }, // Added based on resume
    { name: "Numpy", value: 80 }, // Added based on resume
    { name: "AWS", value: 83 }, // Added based on resume
    { name: "OpenCV", value: 75 }, // Added based on resume
    { name: "NLTK", value: 70 }, // Added based on resume
    { name: "Apache Spark", value: 65 }, // Added based on resume
    { name: "Dockers", value: 70 }, // Added based on resume
    { name: "NGINX", value: 70 }, // Added based on resume
    { name: "Docker", value: 75 }, // Added based on resume
    { name: "Jenkins", value: 75 }, // Added based on professional experiences
    { name: "PostgreSQL", value: 80 }, // Added based on professional experiences
    { name: "Git", value: 80 } // Added based on resume
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tajuarb@umich.edu",
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      role: 'Software Engineering Intern',
      company: 'Viasat Inc.',
      companylogo: require('../assets/img/viasat.png'),
      date: 'May 2023 – August 2023',
      description: "Engineered an adaptable detection model and led the configuration of an anomaly detection system, improving system resilience and accuracy."
    },
    {
      role: 'Software Engineering Intern',
      company: 'Carrier Global',
      companylogo: require('../assets/img/carrier.png'),
      date: 'May 2022 – August 2022',
      description: "Optimized AWS infrastructure and devised a CI/CD pipeline, enhancing data processing and automating unit testing."
      
    },
    {
      role: 'Leadership Development Intern',
      company: 'RippleMatch',
      companylogo: require('../assets/img/ripplematch.png'),
      date: 'January 2022 – May 2022',
      description: "Implemented growth strategies expanding the user-base by 136% and boosting brand awareness within the campus community."
    },
    {
      role: 'Software Engineer Intern',
      company: 'Shopno Inc.',
      companylogo: require('../assets/img/shopno.png'),
      date: 'May 2021 – August 2022',
      description: "Authored over 2,500 lines of Python code to extract financial data and buy goods through wholesalers API."

    },
  ]
}

const books = {
  show: true,
  booksList: [
    {
      title: "The Rust Programming Language",
      author: "Steve Klabnik and Carol Nichols",
      image: require("/home/tajuarb/Coding/portfolio/src/assets/img/rust.png"),
      about: "The Rust Programming Language is the official book on Rust: an open source systems programming language that helps you write faster, more reliable software. Rust offers control over low-level details (such as memory usage) in combination with high-level ergonomics, eliminating the hassle traditionally associated with low-level languages.",
      publicationDate: "2015",
      
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      image: require("/home/tajuarb/Coding/portfolio/src/assets/img/designpatterns.jpg"),
      about: "Design Patterns is a modern classic in the literature of object-oriented development, offering timeless and elegant solutions to common problems in software design. It describes patterns for managing object creation, composing objects into larger structures, and coordinating control flow between objects.",
      publicationDate: "1994",
    },
    
    {
      title: "The Algorithm Design Manual",
      author: "Steven S. Skiena",
      image: require("/home/tajuarb/Coding/portfolio/src/assets/img/algomanul.jpg"),
      about: "Algorithm Design Manual provides straightforward access to combinatorial algorithms technology, stressing design over analysis. The first part, Techniques, provides accessible instruction on methods for designing and analyzing computer algorithms. The second part, Resources, is intended for browsing and reference, and comprises the catalog of algorithmic resources, implementations and an extensive bibliography.",
      publicationDate: "2008",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image: require("/home/tajuarb/Coding/portfolio/src/assets/img/clean.jpg"),
      about: "Clean Codeis divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code―of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.",
      publicationDate: "2008",
      
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      image: require("/home/tajuarb/Coding/portfolio/src/assets/img/pragmatic.jpg"),
      about:"Fight software rot; Avoid the trap of duplicating knowledge; Write flexible, dynamic, and adaptable code; Avoid programming by coincidence; Bullet-proof your code with contracts, assertions, and exceptions; Capture real requirements; Test ruthlessly and effectively; Delight your users; Build teams of pragmatic programmers; and Make your developments more precise with automation. Written as a series of self-contained sections and filled with entertaining anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best practices and major pitfalls of many different aspects of software development.",
      publicationDate: "2019",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, books };
