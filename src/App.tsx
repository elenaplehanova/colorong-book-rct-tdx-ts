import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ColoringPicturePage from "./pages/ColoringPicturePage";

const Ul = styled.ul`
    display: flex;
    justify-content: center;

    gap: 2rem;
`;

function App() {
    return (
        <main role="main">
            <nav>
                <Ul>
                    <Link to="/">Home</Link>
                    <Link to="/coloring_page/1">Coloring Page</Link>
                </Ul>
            </nav>
            <Routes>
                <Route path="/coloring_page/:id" element={<ColoringPicturePage />}></Route>
            </Routes>
        </main>
    );
}

export default App;
