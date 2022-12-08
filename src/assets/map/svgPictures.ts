import { ReactComponent as Monkey } from "../svg/Monkey.svg";
import { ReactComponent as Cat } from "../svg/Cat.svg";
import { ReactComponent as Froggy } from "../svg/Froggy.svg";
import { ReactComponent as Bunny } from "../svg/Bunny.svg";
import { ReactComponent as Sheep } from "../svg/Sheep.svg";
import { ReactComponent as Bird } from "../svg/Bird.svg";
import { ReactComponent as Dog } from "../svg/Dog.svg";

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

export const svgPictureMap: ISvgPicture[] = [monkey, cat, froggy, bunny, bird, sheep, dog];
