import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import SvgAsReactFC from "./SvgAsReactFC";

const Container = styled.div`
    width: 100%;
    @media (min-width: 35em) {
        width: 31.5rem;
    }

    @media (min-width: 50em) {
        width: 34.5rem;
    }

    @media (min-width: 100em) {
        width: 40.5rem;
    }
    aspect-ratio: 1;
`;

const Picture = () => {
    const { idCurrentPicture } = useAppSelector((state) => state.pictureReducer);

    return (
        <Container id="svg_container">
            {idCurrentPicture ? (
                <SvgAsReactFC></SvgAsReactFC>
            ) : (
                <>
                    <h1>Picture don't selected</h1>
                    <Link to="/">go to picture gallery</Link>
                </>
            )}
        </Container>
    );
};

export default Picture;
