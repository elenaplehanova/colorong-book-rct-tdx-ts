import { ReactComponent as Monkey } from "../img/Monkey.svg";
import { ReactComponent as Cat } from "../img/Cat.svg";
import { ReactComponent as Froggy } from "../img/Froggy.svg";
import { ReactComponent as Bunny } from "../img/Bunny.svg";
import { ReactComponent as Sheep } from "../img/Sheep.svg";
import { ReactComponent as Bird } from "../img/Bird.svg";
import { ReactComponent as Dog } from "../img/Dog.svg";
import { ReactComponent as Xmas_tree } from "../img/Xmas_tree.svg";
import { ReactComponent as Dolphin } from "../img/Dolphin.svg";
import { ReactComponent as Bear } from "../img/Bear.svg";
import { ReactComponent as Fox } from "../img/Fox.svg";

import { ISvgPicture } from "../../models/ISvgPicture";

export const monkey: ISvgPicture = {
    id: "monkey",
    component: Monkey,
};

export const cat: ISvgPicture = {
    id: "cat",
    component: Cat,
};

export const froggy: ISvgPicture = {
    id: "froggy",
    component: Froggy,
};

export const bunny: ISvgPicture = {
    id: "bunny",
    component: Bunny,
};

export const sheep: ISvgPicture = {
    id: "sheep",
    component: Sheep,
};

export const bird: ISvgPicture = {
    id: "bird",
    component: Bird,
};

export const dog: ISvgPicture = {
    id: "dog",
    component: Dog,
};

export const xmas_tree: ISvgPicture = {
    id: "xmas_tree",
    component: Xmas_tree,
};

export const dolphin: ISvgPicture = {
    id: "dolphin",
    component: Dolphin,
};

export const bear: ISvgPicture = {
    id: "bear",
    component: Bear,
};

export const fox: ISvgPicture = {
    id: "fox",
    component: Fox,
};

export const svgPictureMap: ISvgPicture[] = [
    monkey,
    cat,
    froggy,
    bunny,
    bird,
    sheep,
    dog,
    xmas_tree,
    dolphin,
    bear,
    fox,
];
