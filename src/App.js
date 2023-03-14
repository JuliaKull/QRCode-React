import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployee from "./component/ViewEmployee";
import QRCode from "./component/QRCode";
import ScanQRCode from "./component/ScanQRCode";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/create" element={<AddEmployee />} />
          <Route exact path="/edit/:id" element={<EditEmployee />} />
          <Route exact path="/view/:id" element={<ViewEmployee />} />
          <Route exact path="/qrcode/:id" element={<QRCode />} />
          <Route path="/scan" element={<ScanQRCode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
