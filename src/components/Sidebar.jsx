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
  "Chest/Resp",
  "Gastrointestinal",
  "OB/GYN",
  "Genitourinary",
  "MSK",
  "Skin",
  "Allergy",
  "Psych / ETOH / Drug",
  "Wilderness Med",
  "Misc"
];

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-800 p-4">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={index === 0 ? "/" : `/${tab.toLowerCase().replace(/ /g, "-")}`}
          className={({ isActive }) =>
            `block py-2 px-4 mb-2 rounded ${
              isActive ? "bg-emerald-400 text-white" : "hover:bg-gray-700 text-white"
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