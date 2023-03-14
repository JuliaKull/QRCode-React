import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./QRCode.css";

export default function QRCode() {
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/employees/qrcode/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        // convert blob to URL and update state
        const url = URL.createObjectURL(blob);
        setQRCodeUrl(url);
      })
      .catch((error) => {
        console.error("Error generating QR code:", error);
      });
  }, [id]);

  const handleDownload = () => {
    // create a temporary link and click it to initiate download
    const link = document.createElement("a");
    link.download = `employee_${id}_qr.png`;
    link.href = qrCodeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="qrcode-viewer-container">
      <h1>QR Code Viewer</h1>
      {qrCodeUrl ? (
        <div className="qrcode-image-container">
          <img src={qrCodeUrl} alt="Generated QR Code" />
          <button className="qrcode-download-button" onClick={handleDownload}>
            Download QR Code
          </button>
        </div>
      ) : (
        <p>Loading QR code...</p>
      )}
    </div>
  );
}
