import { FC } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IColor } from "../models/IColor";
import { colorSlice, mapColors } from "../store/reducers/ColorSlice";

const PaletteDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.3rem;
    width: max-content;

    @media (min-width: 35em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

interface ColorDivProps {
    color: string;
    isSelected: boolean;
    onClick: (color: string) => void;
}

const selectedDiv = css`
    box-shadow: inset 0 0 15px var(--clr-dark);
    transition: all 0.2s;
`;

const ColorDiv = styled.div<ColorDivProps>`
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 0.5rem;

    --color: ${({ color }) => color};
    background-color: hsl(var(--color));

    ${({ isSelected }) => {
        if (isSelected) {
            return selectedDiv;
        }
    }};

    &:focus,
    &:hover {
        cursor: pointer;
    }

    @media (min-width: 35em) {
        width: 5rem;
        height: 5rem;

        &:focus,
        &:hover {
            filter: drop-shadow(0 0 0.5rem var(--clr-white));
        }
    }

    @media (min-width: 50em) {
        width: 5.5rem;
        height: 5.5rem;
    }

    @media (min-width: 100em) {
        width: 6.5rem;
        height: 6.5rem;
    }
`;

const ColorsPalette: FC = () => {
    const { currentColor } = useAppSelector((state) => state.colorReducer);
    const { setCurrentColor } = colorSlice.actions;
    const dispatch = useAppDispatch();

    const clickHandler = (color: IColor) => {
        dispatch(setCurrentColor(color));
    };

    return (
        <PaletteDiv>
            {mapColors.map((color, index) => {
                return (
                    <ColorDiv
                        key={index}
                        color={color.hsl}
                        onClick={() => clickHandler(color)}
                        isSelected={currentColor.name === color.name}
                    ></ColorDiv>
                );
            })}
        </PaletteDiv>
    );
};

export default ColorsPalette;
