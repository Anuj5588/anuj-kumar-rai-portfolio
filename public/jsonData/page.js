import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import { ImBlog } from "react-icons/im";

export const   navItems = [
    {label:"Home", path: "/",  icon:AiOutlineHome},
    {label:"About", path: "/about", icon:AiOutlineUser},
    {label:"Projects", path: "/projects", icon:AiOutlineFundProjectionScreen},
    {label:"Resume", path: "/resume", icon:CgFileDocument},
    {label:"Blog",path: "/blog", icon:ImBlog},
  

]