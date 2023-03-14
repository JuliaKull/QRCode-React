import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewEmployee.css";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    startDate: "",
    email: "",
    jobTitle: "",
    department: "",
    organization: "",
    vatNumber: "",
    registrationCode: "",
    location: "",
    country: "",
    city: "",
    street: "",
    postalCode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/api/employees/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Profile</h2>
          <div className="card">
            <div className="card-header">
              Details of Employee with id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First name:</b>
                  {employee.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last name:</b>
                  {employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>Gender:</b>&nbsp;&nbsp;
                  {employee.gender}
                </li>
                <li className="list-group-item">
                  <b>Birth Date:</b>
                  {employee.birthDate}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Job Title:</b>
                  {employee.jobTitle.name}
                </li>
                <li className="list-group-item">
                  <b>Department:</b>
                  {employee.department.name}
                </li>
                <li className="list-group-item">
                  <b>Organization:</b>
                  {employee.organization.name}
                </li>
                <li className="list-group-item">
                  <b>Location:</b>
                  {employee.location.name}
                </li>
                <li className="list-group-item">
                  <b>Start Date:</b>
                  {employee.startDate}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}
