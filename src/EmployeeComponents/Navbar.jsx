import React, { useState } from "react";
import "./tabs.css";

function Navbar() {
  const [currentView, setCurrentView] = useState("profile");

  const handleNav = (view) => {
    setCurrentView(view);
    console.log("Navigating to:", view);
  };

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="sidebar-top-section">
          <div
            className={`nav-icon profile-icon ${
              currentView === "profile" ? "active" : ""
            }`}
            onClick={() => handleNav("profile")}
            title="Profile"
            role="button"
            aria-label="Profile"
          >
            <span className="icon-emoji" aria-hidden="true">
              👤
            </span>
          </div>

          <div
            className={`nav-icon employees-icon ${
              currentView === "employees" ? "active" : ""
            }`}
            onClick={() => handleNav("employees")}
            title="Employees"
            role="button"
            aria-label="Employees"
          >
            <span className="icon-emoji" aria-hidden="true">
              👥
            </span>
          </div>

          <div
            className={`nav-icon calendar-icon ${
              currentView === "calendar" ? "active" : ""
            }`}
            onClick={() => handleNav("calendar")}
            title="Calendar"
            role="button"
            aria-label="Calendar"
          >
            <span className="icon-emoji" aria-hidden="true">
              📅
            </span>
          </div>
        </div>

        <div className="sidebar-bottom-spacer" />

        <div
          className={`nav-icon settings-icon ${
            currentView === "settings" ? "active" : ""
          }`}
          onClick={() => handleNav("settings")}
          title="Settings"
          role="button"
          aria-label="Settings"
        >
          <span className="icon-emoji" aria-hidden="true">
            ⚙️
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
