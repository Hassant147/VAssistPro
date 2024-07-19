import React from 'react';
import './Switch-Theme-button.css'; // Import the CSS file for styling

const ToggleSwitch = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="toggle-switch" onClick={toggleDarkMode}>
      <input type="checkbox" checked={!darkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
    </div>
  );
};

export default ToggleSwitch;
