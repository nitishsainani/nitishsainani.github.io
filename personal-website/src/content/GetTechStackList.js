import {
  djangoImage,
  expressImage,
  mongoImage,
  nodeImage,
  reactImage,
  reactNativeImage,
  springImage
} from '../images/tech-stack';


class Rating {
  static BEGINNER = 'BEGINNER'
  static INTERMEDIATE = 'INTERMEDIATE'
  static EXPERIENCED = 'EXPERIENCED'
  static PROFICIENT = 'PROFICIENT'
}

let getTechStackList = () => [
  {
    name: "Django",
    image: djangoImage,
  },
  {
    name: "React JS",
    image: reactImage,
  },
  {
    name: "React Native",
    image: reactNativeImage,
  },
  {
    name: "Node",
    image: nodeImage,
  },
  {
    name: "Mongo DB",
    image: mongoImage,
  },
  {
    name: "Express JS",
    image: expressImage,
  },
  {
    name: "Spring Boot",
    image: springImage,
  },
]

export {
  getTechStackList,
  Rating,
};
