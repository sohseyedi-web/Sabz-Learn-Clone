import Nextjs from "../assets/sabz-next.png";
import Github from "../assets/sabz-git.jpg";
import Reactjs from "../assets/sabz-react.png";
import Redux from "../assets/sabz-redux.png";
import Tyescript from "../assets/sabz-typeScript.jpg";
import Tailwind from "../assets/sabz-css.jpg";
import JavaScript from "../assets/sabz-js.png";
import ChatGpt from "../assets/sabz-chatgpt.png";
import { v4 as uuidv4 } from "uuid";

const dataItem = [
  {
    id: uuidv4(),
    cover: Redux,
    title: "آموزش تخصصی Redux مقدماتی تا پیشرفته",
    price: "700000",
    student: 1012,
  },
  {
    id: uuidv4(),
    cover: Nextjs,
    title: "آموزش Next.js بصورت پروژه محور",
    price: "850000",
    student: 1015,
  },
  {
    id: uuidv4(),
    cover: Reactjs,
    title: "آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار",
    price: "700000",
    student: 1037,
  },
  {
    id: uuidv4(),
    cover: Github,
    title: "آموزش git و github",
    price: "340000",
    student: 344,
  },
  {
    id: uuidv4(),
    cover: Tyescript,
    title: "آموزش کاربردی Typescript بصورت پروژه محور",
    price: "900000",
    student: 213,
  },
  {
    id: uuidv4(),
    cover: Tailwind,
    title: "آموزش جامع و پروژه محور Tailwind css",
    price: "350000",
    student: 168,
  },
  {
    id: uuidv4(),
    cover: JavaScript,
    title: "پروژه های تخصصی با جاوا اسکریپت برای بازار کار",
    price: "675000",
    student: 689,
  },
  {
    id: uuidv4(),
    cover: ChatGpt,
    title: "دوره کاربردی chatGPT برای برنامه نویس ها",
    price: "رایگان",
    student: 5802,
  },
];

export default dataItem;
