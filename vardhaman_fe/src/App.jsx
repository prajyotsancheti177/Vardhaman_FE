import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import Routing from "./components/Routing";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

function App() {
    return (
        <><PrimeReactProvider>
            <BrowserRouter>
                <NavBar />
                <Routing />
            </BrowserRouter>
            </PrimeReactProvider>
        </>
    );
}

export default App;
