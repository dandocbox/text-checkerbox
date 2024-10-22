import React from 'react';

const Column = ({ title, sections, onCheckboxChange, checkboxStates }) => {
  return (
    <div className="bg-white shadow-sm rounded p-4">
      <h2 className="text-lg font-bold mb-4 text-blue-600">{title}</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold mb-2 text-gray-700">{section.title}</h3>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`${title}-${index}-${itemIndex}`}
                className="mr-2 accent-blue-600"
                checked={checkboxStates[item] || false}
                onChange={() => onCheckboxChange(item)}
              />
              <label htmlFor={`${title}-${index}-${itemIndex}`} className="text-sm text-gray-600">
                {item}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Column;