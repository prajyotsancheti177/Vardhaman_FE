function NavBar() {
    return (
        <>
            <div className="bg-violet-300 w-full h-600px">
                <ul className="flex flex-row gap-10 p-10">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/addEmployee">Add Employee</a>
                    </li>
                    <li>
                        <a href="/calculateSalary">Calculate Salary</a>
                    </li>
                    <li>
                        <a href="/viewSalary">View Salary</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
