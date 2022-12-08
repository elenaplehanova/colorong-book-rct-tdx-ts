import { IPictureSize } from "./IPictureSize";
import { IShape } from "./IShape";

export interface IPicture {
    id: string;
    shapes: IShape[];
    size: IPictureSize;
}
