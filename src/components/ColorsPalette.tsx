import React, { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";

const colors = [
    "200 10% 94%",
    "193 8% 23%",
    "79 51% 54%",
    "175 92% 38%",
    "207 59% 62%",
    "218 72% 45%",
    "267 48% 44%",
    "323 76% 57%",
    "300 100% 35%",
    "3 100% 46%",
    "28 80% 57%",
    "51 100% 64%",
];

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
    width: 4rem;
    height: 4rem;
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
`;

const ColorsPalette: FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    useEffect(() => {
        console.log(selectedColor);
    }, [selectedColor]);

    return (
        <PaletteDiv>
            {colors.map((color, index) => {
                return (
                    <ColorDiv
                        key={index}
                        color={color}
                        onClick={() => setSelectedColor(color)}
                        isSelected={selectedColor === color}
                    ></ColorDiv>
                );
            })}
        </PaletteDiv>
    );
};

export default ColorsPalette;
