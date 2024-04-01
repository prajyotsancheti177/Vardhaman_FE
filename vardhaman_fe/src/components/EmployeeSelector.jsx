function EmployeeSelector(){
    return (
        <div>
            <label htmlFor="employee">Select an employee:</label>
            <select id="employee" name="employee">
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
                <option value="employee4">Employee 4</option>
            </select>
        </div>
    )
}

export default EmployeeSelector;