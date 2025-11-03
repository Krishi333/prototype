import Header from "./EmployeeComponents/Header.jsx";
import TabGroup from "./EmployeeComponents/Toggles.jsx";
import Navbar from "./EmployeeComponents/Navbar.jsx";
import "./EmployeeComponents/tabs.css";

function EmployeeDashboard() {
  return (
    <div style={{marginLeft: "5%"}}>
      <Header />
      <TabGroup />
      <Navbar />
    </div>
  );
}

export default EmployeeDashboard;