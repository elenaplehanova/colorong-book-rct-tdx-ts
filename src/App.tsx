import { Link, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "./hooks/redux";
import ColoringPicturePage from "./pages/ColoringPicturePage";
import PictureGalleryPage from "./pages/PictureGalleryPage";

import { ReactComponent as House } from "./assets/img/icons/house.svg";
import { ReactComponent as HouseFill } from "./assets/img/icons/house-fill.svg";
import { ReactComponent as Palette } from "./assets/img/icons/palette.svg";
import { ReactComponent as PaletteFill } from "./assets/img/icons/palette-fill.svg";

const Nav = styled.nav`
    display: flex;
    justify-content: center;

    gap: 2rem;
    margin: 1rem;

    & > * {
        display: flex;

        &[aria-disabled="true"] {
            pointer-events: none;
        }

        @media (min-width: 35em) {
            &:focus,
            &:hover {
                cursor: pointer;
                filter: drop-shadow(0 0 0.5rem var(--clr-white));
            }
        }

        & > * {
            margin: auto;

            color: var(--clr-white);
            width: 2rem;
            height: 2rem;
        }
    }
`;

function App() {
    const { idCurrentPicture } = useAppSelector((state) => state.pictureReducer);

    return (
        <main role="main">
            <Nav>
                <Link to="/">
                    {useMatch({ path: "/" }) ? <HouseFill></HouseFill> : <House></House>}
                </Link>

                <Link
                    aria-disabled={idCurrentPicture === ""}
                    to={`/coloring_page/${idCurrentPicture}`}
                >
                    {useMatch({ path: `/coloring_page/${idCurrentPicture}` }) ? (
                        <PaletteFill></PaletteFill>
                    ) : (
                        <Palette></Palette>
                    )}
                </Link>
            </Nav>
            <Routes>
                <Route path="/" element={<PictureGalleryPage />}></Route>
                <Route path="/coloring_page/:id" element={<ColoringPicturePage />}></Route>
            </Routes>
        </main>
    );
}

export default App;
