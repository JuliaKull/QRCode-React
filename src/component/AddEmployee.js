import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEmployee() {
  let navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      jobTitle: {
        name: jobTitle,
      },
      department: {
        name: department,
      },
      organization: {
        name: organization,
        vatNumber,
        registrationCode,
      },
      location: {
        name: location,
        country,
        city,
        street,
        postalCode,
      },
      startDate,
    };
    await axios.post("http://localhost:8080/api/employees/create", newEmployee);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Employee</h2>

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
                value={jobTitle}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Organization name"
                name="organization"
                value={organization}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="VAT number"
                name="vatNumber"
                value={vatNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Registration code"
                name="registrationCode"
                value={registrationCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location name"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                name="street"
                value={street}
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
