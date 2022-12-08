import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { pictureSlice } from "../store/reducers/PictureSlice";
import SvgPicture from "./SvgPicture";

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
        <Container id="svg_container">
            {currentPicture ? (
                <SvgPicture picture={currentPicture} clickHandler={clickHandler}></SvgPicture>
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
