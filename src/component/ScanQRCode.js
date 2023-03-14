import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ScanQRCode.css";
import { Link } from "react-router-dom";


function dateFormat(data){
  return `${data[2].toString().padStart(2, '0')}-${data[1].toString().padStart(2, '0')}-${data[0]}`;
}


export default function ScanQRCode() {

  const [decodedData, setDecodedData] = useState("");
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

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:8080/api/employees/read_qrcode", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setDecodedData(data);
        //console.log(typeof data);

        const employeeData = JSON.parse(data); // data[Object.keys(data).pop()];
        console.log(employeeData);

        setEmployee({
          firstName: employeeData.firstName,
          lastName: employeeData.lastName,
          gender: employeeData.gender,
          birthDate: employeeData.birthDate,
          startDate: employeeData.startDate,
          email: employeeData.email,
          jobTitle: { name: employeeData.jobTitle.name },
          department: { name: employeeData.department.name },
          organization: { name: employeeData.organization.name },
          location: { name: employeeData.location.name },
        });
      })
      .catch((error) => {
        console.error("Error decoding QR code:", error);
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h1>QR Code Reader</h1>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the QR Code image here ...</p>
        ) : (
          <p>Drag and drop a PNG QR code image</p>
        )}
      </div>
      {decodedData && (
        <div>
          <h2>Decoded information:</h2>
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
              {dateFormat(employee.birthDate)}
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
              {dateFormat(employee.startDate)}
      </li>
          </ul>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to List
          </Link>
        </div>
      )}
    </div>
  );
}
