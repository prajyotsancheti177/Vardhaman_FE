import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeTableActionButtons from "./EmployeeTableActionButtons";

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

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <button onClick={() => console.log("Edit",rowData.name)}>Edit</button>
                <button onClick={() => console.log("Delete",rowData.name)}>Delete</button>
            </>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="ml-48 mr-48 pt-1 mt-20 pl-10 pr-10 bg-indigo-200 rounded-xl">
                <div className="mb-7 mt-7 text-center font-bold text-xl">
                    Employee table
                </div>
                <div className="card">
                    <DataTable
                        value={employee}
                        showGridlines
                        tableStyle={{ minWidth: "50rem" }}
                        className="text-center"
                    >
                        <Column
                            sortable
                            field="name"
                            header="Name"
                            className="text-center"
                        ></Column>
                        <Column
                            className="text-center"
                            sortable
                            field="salary_per_hour"
                            header="Salary Per Hour"
                        ></Column>
                        <Column
                            body={actionBodyTemplate}
                            exportable={false}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}

export default EmployeeTable;
