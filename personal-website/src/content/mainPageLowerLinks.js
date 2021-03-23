import randomColor from "./randomColor";


let getMainPageLowerLinks = () => [
  {
    name: "Recommendations",
    displayName: true,
    icon: "fas fa-award",
    link: "recommendations",
    color: randomColor,
  },
  {
    name: "Resume",
    displayName: true,
    icon: "fas fa-address-card",
    link: "resume",
    color: randomColor,
  },
  {
    name: "Projects",
    displayName: true,
    icon: "fas fa-project-diagram",
    newTab: true,
    link: "https://github.com/nitishsainani/",
    color: randomColor,
  },
  {
    name: "Blog",
    displayName: true,
    icon: "fab fa-blogger-b",
    link: "blog",
    color: randomColor,
    disabled: true,
  },
  {
    name: "About",
    displayName: true,
    icon: "fas fa-info-circle",
    link: "about",
    color: randomColor,
  },
  {
    name: "Contact",
    displayName: true,
    icon: "far fa-comments",
    link: "contact",
    color: randomColor,
  },
  {
    name: "Tech Stack",
    displayName: true,
    icon: "fas fa-tools",
    link: "tech-stack",
    color: randomColor,
  },
  {
    name: "FAQ",
    displayName: true,
    icon: "far fa-question-circle",
    link: "faq",
    color: randomColor,
  },
  {
    name: "Feedback",
    displayName: true,
    icon: "fas fa-user-secret",
    link: "feedback",
    color: randomColor,
  },
]

export default getMainPageLowerLinks;
