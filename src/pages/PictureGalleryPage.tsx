import styled from "styled-components";
import { MouseEvent } from "react";
import { IShape } from "../models/IShape";
import { useAppDispatch } from "../hooks/redux";
import { pictureSlice } from "../store/reducers/PictureSlice";
import { IPicture } from "../models/IPicture";
import { useNavigate } from "react-router-dom";
import { clearwhite } from "../assets/map/colors";
import { svgPictureMap } from "../assets/map/svgPictures";

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;

    gap: 0.2rem;

    margin: 1rem auto;

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

        @media (hover) {
            &:hover {
                cursor: pointer;
                box-shadow: 0 0 15px var(--clr-dark);
                transition: all 0.2s;

                transform: scale(1.05);
            }
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

    const clickHandler = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>, id: string) => {
        const selectedPicture = e.currentTarget;
        const size = selectedPicture.viewBox.baseVal;

        let shapes: IShape[] = [];
        let paths = selectedPicture.querySelectorAll("path");
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

    return (
        <Container>
            {svgPictureMap.map((item) => {
                return (
                    <item.component
                        id={item.id}
                        key={item.id}
                        onClick={(e) => clickHandler(e, item.id)}
                    ></item.component>
                );
            })}
        </Container>
    );
};

export default PictureGalleryPage;
