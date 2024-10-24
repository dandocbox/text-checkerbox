import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  "General",
  "Diagnosis-Specific",
  "ACLS",
  "Constitutional",
  "ID",
  "Trauma",
  "Neuro",
  "Eye",
  "HEENT",
  "Cardiothoracic",
  "Respiratory",
  "Gastrointestinal",
  "OB/GYN",
  "Genitourinary",
  "MSK",
  "Skin",
  "Allergy",
  "Psych",
  "Environmental",
  "Misc"
];

const Sidebar = () => {
  return (
    <nav className="w-64 bg-white shadow-sm p-4">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={index === 0 ? "/" : `/${tab.toLowerCase().replace(/ /g, "-")}`}
          className={({ isActive }) =>
            `block py-2 px-4 mb-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          {tab}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;