import randomColor from "./randomColor";


let getMainPageTopSocialLinks = (db, callback) => {
  let data = db.getMainPageTopSocialLinks.map(row => {
    row.color = randomColor;
    return row;
  })
  // let data = [
  //   {
  //     name: "linkedin",
  //     displayName: false,
  //     icon: "fab fa-linkedin-in",
  //     link: "https://www.linkedin.com/in/nitishsainani",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "stack-overflow",
  //     displayName: false,
  //     icon: "fab fa-stack-overflow",
  //     link: "https://stackoverflow.com/users/9440672/nitish",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "github",
  //     displayName: false,
  //     icon: "fab fa-github",
  //     link: "https://github.com/nitishsainani",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "twitter",
  //     displayName: false,
  //     icon: "fab fa-twitter",
  //     link: "https://twitter.com/nitishsainani",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "phone",
  //     displayName: false,
  //     icon: "fas fa-phone-alt",
  //     link: "tel:+919644354203",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "email",
  //     displayName: false,
  //     icon: "far fa-envelope",
  //     link: "mailto:nitish.sainani@gmail.com",
  //     color: randomColor,
  //     newTab: true,
  //   },
  //   {
  //     name: "instagram",
  //     displayName: false,
  //     icon: "fab fa-instagram",
  //     link: "https://www.instagram.com/nitishsainani",
  //     color: randomColor,
  //     newTab: true,
  //   },
  // ]
  callback(data);
}

export default getMainPageTopSocialLinks;
