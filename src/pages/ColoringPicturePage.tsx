import React, { FC } from "react";
import styled from "styled-components";
import ColorsPalette from "../components/ColorsPalette";
import SvgPicture from "../components/SvgPicture";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1rem;
    padding: 1rem;

    @media (min-width: 35em) {
        flex-direction: row;
    }
`;

const ColoringPicturePage: FC = () => {
    return (
        <Container>
            <ColorsPalette />
            <SvgPicture />
        </Container>
    );
};

export default ColoringPicturePage;
