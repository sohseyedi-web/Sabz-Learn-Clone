import Nextjs from "../assets/cover/sabz-next.png";
import Github from "../assets/cover/sabz-git.jpg";
import Reactjs from "../assets/cover/sabz-react.png";
import Redux from "../assets/cover/sabz-redux.png";
import Tyescript from "../assets/cover/sabz-typeScript.jpg";
import Tailwind from "../assets/cover/sabz-css.jpg";
import JavaScript from "../assets/cover/sabz-js.png";
import Html from "../assets/cover/sabz-html.jpg";

import NextjsIcon from "../assets/icon/nextjs.svg";
import GithubIcon from "../assets/icon/github.svg";
import ReactjsIcon from "../assets/icon/reactjs.svg";
import ReduxIcon from "../assets/icon/redux.svg";
import TyescriptIcon from "../assets/icon/typescript.svg";
import TailwindIcon from "../assets/icon/tailwind-css.svg";
import JavaScriptIcon from "../assets/icon/javascript.svg";
import HtmlIcon from "../assets/icon/html.svg";

import { v4 as uuidv4 } from "uuid";

const dataItem = [
  {
    id: 0,
    courseId: uuidv4(),
    cover: Redux,
    title: "آموزش تخصصی Redux مقدماتی تا پیشرفته",
    price: "700000",
    student: 1012,
    icon: ReduxIcon,
    quantity: 0,
  },
  {
    id: 1,
    courseId: uuidv4(),
    cover: Nextjs,
    title: "آموزش Next.js بصورت پروژه محور",
    price: "850000",
    student: 1015,
    icon: NextjsIcon,
    quantity: 0,
  },
  {
    id: 2,
    courseId: uuidv4(),
    cover: Reactjs,
    title: "آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار",
    price: "700000",
    student: 1037,
    icon: ReactjsIcon,
    quantity: 0,
  },
  {
    id: 3,
    courseId: uuidv4(),
    cover: Github,
    title: "آموزش git و github",
    price: "340000",
    student: 344,
    icon: GithubIcon,
    quantity: 0,
  },
  {
    id: 4,
    courseId: uuidv4(),
    cover: Tyescript,
    title: "آموزش کاربردی Typescript بصورت پروژه محور",
    price: "900000",
    student: 213,
    icon: TyescriptIcon,
    quantity: 0,
  },
  {
    id: 5,
    courseId: uuidv4(),
    cover: Tailwind,
    title: "آموزش جامع و پروژه محور Tailwind css",
    price: "350000",
    student: 168,
    icon: TailwindIcon,
    quantity: 0,
  },
  {
    id: 6,
    courseId: uuidv4(),
    cover: JavaScript,
    title: "پروژه های تخصصی با جاوا اسکریپت برای بازار کار",
    price: "675000",
    student: 689,
    icon: JavaScriptIcon,
    quantity: 0,
  },
  {
    id: 7,
    courseId: uuidv4(),
    cover: Html,
    title: "200 پروژه با Html",
    price: "رایگان",
    student: 5802,
    icon: HtmlIcon,
    quantity: 0,
  },
];

export default dataItem;
