import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function HomePage() {
  const [employees, setEmployees] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/employees/list");
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Organization</th>
              <th scope="col">Department</th>
              <th scope="col">Office</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.jobTitle.name}</td>
                <td>{employee.organization.name}</td>
                <td>{employee.department.name}</td>
                <td>{employee.location.name}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-outline-secondary btn-sm mx-2"
                    to={`/view/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm mx-2"
                    to={`/edit/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm mx-2"
                    to={`/qrcode/${employee.id}`}
                  >
                    QRCode
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
