import React from 'react';
import './tabs.css';

const Profile = () => {
  const projects = [
    'Project 1',
    'Project 2',
    'Project 3',
  ];

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      
      <section>
        <button>View My Data</button>
      </section>
      
      <section>
        <h2>My Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>My Manager</h2>
        <p><strong>Sunoo</strong></p>
      </section>
    </div>
  );
};

export default Profile;
