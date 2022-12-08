import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "./hooks/redux";
import ColoringPicturePage from "./pages/ColoringPicturePage";
import PictureGalleryPage from "./pages/PictureGalleryPage";

const Nav = styled.nav`
    display: flex;
    justify-content: center;

    gap: 2rem;
    padding: 1rem;
`;

function App() {
    const { idCurrentPicture } = useAppSelector((state) => state.pictureReducer);

    return (
        <main role="main">
            <Nav>
                <Link to="/">Home</Link>
                <Link to={`/coloring_page/${idCurrentPicture}`}>Coloring Page</Link>
            </Nav>
            <Routes>
                <Route path="/" element={<PictureGalleryPage />}></Route>
                <Route path="/coloring_page/:id" element={<ColoringPicturePage />}></Route>
            </Routes>
        </main>
    );
}

export default App;
