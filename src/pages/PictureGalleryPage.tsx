import styled, { css } from "styled-components";
import { ReactComponent as Monkey } from "../assets/Monkey.svg";
import { ReactComponent as Cat } from "../assets/Cat.svg";
import { MouseEvent } from "react";
import { IShape } from "../models/IShape";
import { useAppDispatch } from "../hooks/redux";
import { pictureSlice } from "../store/reducers/PictureSlice";
import { IPicture } from "../models/IPicture";
import { useNavigate } from "react-router-dom";
import { clearwhite } from "../colors";

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;

    gap: 0.2rem;

    margin: auto;

    & > * {
        width: 8rem;
        height: 8rem;

        @media (min-width: 35em) {
            width: 10rem;
            height: 10rem;
        }

        @media (min-width: 50em) {
            width: 14rem;
            height: 14rem;
        }
    }

    @media (min-width: 50em) {
        width: 80%;
    }
`;

const PictureGalleryPage = () => {
    const { addNewPicture, setIdCurrentPicture } = pictureSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const clickHandler = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
        const selectedPicture = e.currentTarget;

        //TODO:!!! как то передавать id при создании компонента??
        const id = selectedPicture.getAttribute("id") as string;

        const size = selectedPicture.viewBox.baseVal;

        let shapes: IShape[] = [];
        let paths = selectedPicture.querySelectorAll("g g path");
        paths?.forEach((item) => {
            let d = item.getAttribute("d") as string;
            d && shapes.push({ d, fill: clearwhite });
        });

        const newPicture: IPicture = {
            id: id,
            shapes: shapes,
            size: { width: size.width, height: size.height },
        };

        dispatch(addNewPicture(newPicture));

        dispatch(setIdCurrentPicture(id));

        navigate("/coloring_page/" + id);
    };

    const pictures = Array(12).fill("");

    return (
        <Container>
            <Monkey onClick={(e) => clickHandler(e)} key="monkey" id="monkey"></Monkey>
            <Cat onClick={(e) => clickHandler(e)} key="cat" id="cat"></Cat>

            {pictures.map((value, index) => {
                return <Monkey key={`Monkey_${index}`}></Monkey>;
            })}
            {pictures.map((value, index) => {
                return <Cat key={`Cat_${index}`}></Cat>;
            })}
        </Container>
    );
};

export default PictureGalleryPage;
