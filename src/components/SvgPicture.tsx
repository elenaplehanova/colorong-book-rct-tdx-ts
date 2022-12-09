import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IColor } from "../models/IColor";
import { IPicture } from "../models/IPicture";

interface PathProps {
    fillColor: IColor;
}
const Path = styled.path<PathProps>`
    --color: ${({ fillColor }) => fillColor.hsl};
    fill: hsl(var(--color));
    cursor: pointer;
`;

interface SvgPictureProps extends React.SVGProps<SVGSVGElement> {
    picture: IPicture;
    clickHandler?: (index: number) => void;
}
const SvgPicture: FunctionComponent<SvgPictureProps> = ({ picture, clickHandler }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox={`0 0 ${picture?.size.width} ${picture?.size.height}`}
        >
            <g>
                {picture &&
                    picture.shapes.map(({ d, fill }, index) => {
                        return (
                            <Path
                                key={index}
                                d={d}
                                strokeWidth="0"
                                stroke="black"
                                onClick={() => clickHandler && clickHandler(index)}
                                fillColor={fill}
                            />
                        );
                    })}
            </g>
        </svg>
    );
};

export default SvgPicture;
