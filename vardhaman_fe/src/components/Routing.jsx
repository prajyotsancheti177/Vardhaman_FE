import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./Home";
import EmployeePage from "./EmployeePage";
import AddSalaryPage from "./AddSalaryPage";
import ViewSalaryPage from "./ViewSalaryPage";

function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addEmployee" element={<EmployeePage />} />
            <Route exact path="/calculateSalary" element={<AddSalaryPage />} />
            <Route exact path="/viewSalary" element={<ViewSalaryPage />} />
        </Routes>
    );
}

export default Routing;
