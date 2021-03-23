import {
  djangoImage,
  expressImage,
  javaImage,
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
    name: "Node",
    image: nodeImage,
    rating: Rating.INTERMEDIATE,
  },
  {
    name: "Mongo DB",
    image: mongoImage,
    rating: Rating.INTERMEDIATE,
  },
  {
    name: "Express JS",
    image: expressImage,
    rating: Rating.INTERMEDIATE,
  },
  {
    name: "React JS",
    image: reactImage,
    rating: Rating.EXPERIENCED,
  },
  {
    name: "React Native",
    image: reactNativeImage,
    rating: Rating.INTERMEDIATE,
  },
  {
    name: "Django",
    image: djangoImage,
    rating: Rating.EXPERIENCED,
  },
  {
    name: "Java",
    image: javaImage,
    rating: Rating.BEGINNER,
  },
  {
    name: "Spring Boot",
    image: springImage,
    rating: Rating.BEGINNER,
  },
]

export {
  getTechStackList,
  Rating,
};
