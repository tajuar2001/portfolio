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
  message: " Passionate about changing the world with technology. ",
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
  gitHubUsername: "tajuar2001", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/taj.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/taj.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
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
  heading: "Experiences",
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

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
