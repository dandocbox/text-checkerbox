import React from 'react';

const Column = ({ title, sections, onCheckboxChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4 text-green-500">{title}</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold mb-2">{section.title}</h3>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`${title}-${index}-${itemIndex}`}
                className="mr-2"
                onChange={() => onCheckboxChange(item)}
              />
              <label htmlFor={`${title}-${index}-${itemIndex}`} className="text-sm">
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