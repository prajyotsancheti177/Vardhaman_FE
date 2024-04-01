import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-violet-300 w-full h-600px">
            <ul className="flex flex-row gap-10 p-10 justify-end">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addEmployee">Add Employee</Link>
                </li>
                <li>
                    <Link to="/calculateSalary">Calculate Salary</Link>
                </li>
                <li>
                    <Link to="/viewSalary">View Salary</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
