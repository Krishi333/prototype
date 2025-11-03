import React, { useState } from "react";

function ProfilePage({ user, onLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role] = useState(user?.role || "employee");

  const handleSave = () => {
    console.log("Saved profile:", { name, email, role });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 500,
        margin: "3rem auto",
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Profile Page</h2>

      {!isEditing ? (
        <>
          <p><strong>Name:</strong> {name || "John Doe"}</p>
          <p><strong>Email:</strong> {email || "example@make-it-all.com"}</p>
          <p><strong>Role:</strong> {role}</p>

          <div style={{ marginTop: "1.5rem" }}>
            <button onClick={() => setIsEditing(true)} style={buttonStyle}>
              Edit Profile
            </button>
            <button onClick={onLogout} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor: "#e74c3c" }}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={fieldGroup}>
            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          </div>
          <div style={fieldGroup}>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <p><strong>Role:</strong> {role}</p>

          <div style={{ marginTop: "1.5rem" }}>
            <button onClick={handleSave} style={buttonStyle}>
              Save
            </button>
            <button onClick={() => setIsEditing(false)} style={{ ...buttonStyle, marginLeft: "10px" }}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "6px",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "6px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const fieldGroup = {
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
};

export default ProfilePage;
