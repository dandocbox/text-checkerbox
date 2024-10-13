import React, { useState } from 'react';
import Column from '../components/Column';
import NoteSection from '../components/NoteSection';

const General = () => {
  const [note, setNote] = useState('');

  const handleCheckboxChange = (text) => {
    setNote((prevNote) => prevNote + text + '\n');
  };

  const columns = [
    {
      title: "CC",
      sections: [
        {
          title: "History:",
          items: ["History General"]
        }
      ]
    },
    {
      title: "EXAM / PROCEDURES",
      sections: [
        {
          title: "Procedures:",
          items: [
            "Procedure Laceration",
            "Procedure Splint",
            "Procedure Digital Block",
            "Procedure Laceration Glue",
            "Procedure Drainage",
            "Procedure EFAST",
            "Procedure General",
            "Procedure Intubation",
            "Procedure Suture Removal",
            "Procedure Echo",
            "Procedure Chest Tube Thoravent",
            "Procedure Chest Tube Surgical",
            "Procedure Sedation",
            "Procedure Nasal Packing",
            "Procedure Foreign Body Ear",
            "Procedure Ortho Reduction"
          ]
        },
        {
          title: "Exam:",
          items: [
            "Insert Exam",
            "Insert Exam Limited",
            "Insert Exam With Neuro",
            "Insert Exam With Eye"
          ]
        }
      ]
    },
    {
      title: "MDM",
      sections: [
        {
          title: "MDM:",
          items: ["MDM General"]
        },
        {
          title: "Dispo:",
          items: ["Discharge General", "Admit General"]
        },
        {
          title: "MDM:",
          items: [
            "MDM Considered Admit",
            "MDM Discussion Hospitalist",
            "MDM Additional History",
            "MDM Documentation Reviewed",
            "MDM Social",
            "MDM Discussion Ortho"
          ]
        }
      ]
    },
    {
      title: "Extras",
      sections: []
    }
  ];

  return (
    <div className="flex p-4 h-full">
      <div className="flex-1 grid grid-cols-4 gap-4 mr-4">
        {columns.map((column, index) => (
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

export default General;