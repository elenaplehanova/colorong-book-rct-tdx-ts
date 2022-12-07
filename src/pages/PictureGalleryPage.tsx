import styled from "styled-components";
import { ReactComponent as Monkey } from "../assets/Monkey.svg";
import { ReactComponent as Cat } from "../assets/Cat.svg";

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

const pictures = Array(12).fill("");

const PictureGalleryPage = () => {
    return (
        <Container>
            <Monkey key={`Monkey`}></Monkey>
            <Cat key={`Cat`}></Cat>

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
