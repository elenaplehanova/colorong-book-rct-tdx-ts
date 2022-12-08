import { ReactComponent as Monkey } from "../svg/Monkey.svg";
import { ReactComponent as Cat } from "../svg/Cat.svg";
import { ISvgPicture } from "../../models/ISvgPicture";

export const monkey: ISvgPicture = {
    id: "monkey",
    component: Monkey,
};

export const cat: ISvgPicture = {
    id: "cat",
    component: Cat,
};
