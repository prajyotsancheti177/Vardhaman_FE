import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeTable() {
    const [employee, setEmployee] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/registerAPI"
            );
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="ml-48 mr-48 mt-20 p-10 bg-indigo-200 rounded-xl">
                <h1>Employee table</h1>
                <div className="card">
                    <DataTable
                        value={employee}
                        tableStyle={{ minWidth: "50rem" }}
                    >
                        <Column field="name" header="name"></Column>
                        <Column
                            field="salary_per_hour"
                            header="salary_per_hour"
                        ></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}

export default EmployeeTable;
