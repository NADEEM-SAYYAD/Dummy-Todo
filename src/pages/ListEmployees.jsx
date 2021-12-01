import React, { useState, useEffect } from "react";
import { getUsers } from "../services/EmployeeServices";
import { Table } from "react-bootstrap";
const ListEmployees = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const getUsersData = async () => {
            let response = await getUsers();
            if (response.statusText === "OK") {
                if (isMounted) {
                    setEmployee(response.data);
                }
            }
        };
        getUsersData();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div style={{ marginTop: "10px" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Category</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.length > 0 ? (
                        employee.map((emp) => {
                            const {
                                firstName,
                                lastName,
                                gender,
                                hobbies,
                                category,
                                avatar,
                            } = emp;
                            return (
                                <tr>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{gender}</td>
                                    <td>{hobbies}</td>
                                    <td>{category}</td>
                                    <td>
                                        <img src={avatar} alt={firstName} height="30px"/>
                                    </td>
                                    <td>Action</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="3"></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};
export default ListEmployees;
