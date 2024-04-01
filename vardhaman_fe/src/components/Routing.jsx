import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import MainBody from "./MainBody";

function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<MainBody />} />
        </Routes>
    );
}

export default Routing;
