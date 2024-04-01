import MainBody from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import Routing from "./components/Routing";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routing />
            </BrowserRouter>
        </>
    );
}

export default App;
