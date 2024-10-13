import React, { useState } from 'react';
import Column from './Column';
import NoteSection from './NoteSection';

const EmptyPage = () => {
  const [note, setNote] = useState('');

  const handleCheckboxChange = (text) => {
    setNote((prevNote) => prevNote + text + '\n');
  };

  const emptyColumns = [
    { title: "CC", sections: [] },
    { title: "EXAM / PROCEDURES", sections: [] },
    { title: "MDM", sections: [] },
    { title: "Extras", sections: [] }
  ];

  return (
    <div className="flex p-4 h-full">
      <div className="flex-1 grid grid-cols-4 gap-4 mr-4">
        {emptyColumns.map((column, index) => (
          <Column
            key={index}
            title={column.title}
            sections={column.sections}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <NoteSection note={note} setNote={setNote} />
    </div>
  );
};

export default EmptyPage;