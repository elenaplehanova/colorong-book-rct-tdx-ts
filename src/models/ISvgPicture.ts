import { FunctionComponent } from "react";

export interface ISvgPicture {
    component: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    id: string;
}
