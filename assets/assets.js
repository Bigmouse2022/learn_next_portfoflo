import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";


//my photo
//toolData
import supabase from "./supabase.png"
import clerk from "./clerk.png"
import tailwin from "./tailwin.png"
import motion from "./motion.png"

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,

  //* */
  supabase,
  clerk,
  tailwin,
  motion,
};

export const workData = [
  {
    title: "当前项目",
    description: "当前作品集项目",
    bgImage: "/work-1.png",
    link:'#top',
  },
  {
    title: "项目初尝试",
    description: "初学Next.js项目",
    bgImage: "/work-2.png",
        link:'https://learn-nextjs-livid-nu.vercel.app/',
  },
  {
    title: "第二个项目",
    description: "仿Deepseek",
    bgImage: "/work-3.png",
        link:'https://learn-next-deepseek.vercel.app',
  },
  {
    title: "第二个项目",
    description: "仿Deepseek",
    bgImage: "/work-4.png",
        link:'https://learn-next-deepseek.vercel.app',
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "网站设计",
    description: "Next.js提供的tailwind CSS默认为对中高等屏幕的样式",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "移动端页面",
    description:"Next.js提供的tailwind CSS要考虑移动端界面是否合适美观",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI 设计",
    description:
      "UI的设计要尽可能地符合页面的美观",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "图片设计",
    description: "图片的选择也是要慎重选择，让网站美观，吸引人",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "语言技术",
    description: "HTML, CSS, JavaScript, React Js, Next Js, Golang",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "教育信息",
    description: "华南农业大学计算机科学与技术专业",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "项目情况",
    description: "个人作品集网站,仿Deepseek人工智能聊天平台",
  },
];

export const toolsData = [
//   { tool: assets.vscode },
//   { tool: assets.firebase },
//   { tool: assets.mongodb },
//   { tool: assets.figma },
//   { tool: assets.git },
  assets.vscode,
  assets.supabase,
  assets.clerk,
  assets.tailwin,
  assets.motion,
  // assets.firebase,
  // assets.mongodb,
  // assets.figma,
  // assets.git,
];
