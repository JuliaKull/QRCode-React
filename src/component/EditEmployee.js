import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditEmployee() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    startDate: "",
    email: "",
    jobTitle: { name: "" },
    department: { name: "" },
    organization: { name: "", vatNumber: "", registrationCode: "" },
    //vatNumber: "",
    //registrationCode: "",
    location: { name: "", country: "", city: "", street: "", postalCode: "" },
  });

  const {
    firstName,
    lastName,
    gender,
    birthDate,
    startDate,
    email,
    jobTitle,
    department,
    organization,
    vatNumber,
    registrationCode,
    location,
    country,
    city,
    street,
    postalCode,
  } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      id: parseInt(id),
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      jobTitle: {
        id: jobTitle.id,
        name: jobTitle.name,
      },
      department: {
        id: department.id,
        name: department.name,
      },
      organization: {
        id: organization.id,
        name: organization.name,
        vatNumber: organization.vatNumber,
        registrationCode: organization.registrationCode,
      },
      location: {
        id: location.id,
        name: location.name,
        country: location.country,
        city: location.city,
        street: location.street,
        postalCode: location.postalCode,
      },
      startDate,
    };

    await axios.put(
      `http://localhost:8080/api/employees/update/${id}`,
      newEmployee
    );
    navigate("/");
  };

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/api/employees/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">--Select Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Birth date"
                name="birthDate"
                value={birthDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title"
                name="jobTitle"
                value={jobTitle.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                name="department"
                value={employee.department.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Organization name"
                name="organization"
                value={organization.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="VAT number"
                name="vatNumber"
                value={organization.vatNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Registration code"
                name="registrationCode"
                value={organization.registrationCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location name"
                name="location"
                value={location.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={location.country}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={location.city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                name="street"
                value={location.street}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Postal code"
                name="postalCode"
                value={postalCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Start date"
                name="startDate"
                value={startDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
