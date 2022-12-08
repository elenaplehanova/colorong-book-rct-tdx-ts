import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IColor } from "../models/IColor";
import { pictureSlice } from "../store/reducers/PictureSlice";

interface PathProps {
    fillColor: IColor;
}

const Path = styled.path<PathProps>`
    --color: ${({ fillColor }) => fillColor.hsl};
    fill: hsl(var(--color));
`;

const SvgAsReactFC: FunctionComponent<React.SVGProps<SVGSVGElement>> = () => {
    const { currentColor } = useAppSelector((state) => state.colorReducer);

    const { pictures, idCurrentPicture } = useAppSelector((state) => state.pictureReducer);
    const { updatePictureShape } = pictureSlice.actions;
    const dispatch = useAppDispatch();

    const currentPicture = pictures.find((item) => item.id === idCurrentPicture);

    const clickHandler = (index: number) => {
        if (currentPicture) {
            let newShapes = [...currentPicture.shapes];
            newShapes[index] = { ...newShapes[index], fill: currentColor };

            let newPicture = { ...currentPicture, shapes: newShapes };
            dispatch(updatePictureShape(newPicture));
        }
    };

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox={`0 0 ${currentPicture?.size.width} ${currentPicture?.size.height}`}
        >
            <g>
                {currentPicture &&
                    currentPicture.shapes.map(({ d, fill }, index) => {
                        return (
                            <Path
                                key={index}
                                d={d}
                                strokeWidth="0"
                                stroke="black"
                                onClick={() => clickHandler(index)}
                                fillColor={fill}
                            />
                        );
                    })}
            </g>
        </svg>
    );
};

export default SvgAsReactFC;
