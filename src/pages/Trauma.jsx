import React, { useState } from 'react';
import Column from '../components/Column';
import NoteSection from '../components/NoteSection';

const TraumaBurn = () => {
  const [note, setNote] = useState('');
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = (text) => {
    setNote((prevNote) => prevNote + text + '\n');
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [text]: !prevStates[text]
    }));
  };

  const handleClear = () => {
    setNote('');
    setCheckboxStates({});
  };

  const columns = [
    {
      title: "CC",
      sections: [
        {
          title: "General:",
          items: ["History General"]
        },
        {
          title: "Head Injury:",
          items: ["History Trauma Head", "History Trauma Face"]
        },
        {
          title: "Extremity:",
          items: ["History Trauma MSK"]
        },
        {
          title: "Chest Wall:",
          items: ["History Trauma Chest Wall"]
        },
        {
          title: "MVC:",
          items: ["History Trauma MVC"]
        },
        {
          title: "Burn:",
          items: ["History Burn", "History Burn Minor"]
        }
      ]
    },
    {
      title: "EXAM / PROCEDURES",
      sections: [
        {
          title: "Exam:",
          items: [
            "Insert Exam",
            "Insert Exam Limited",
            "Insert Exam With Neuro",
            "Insert Exam With Eye"
          ]
        },
        {
          title: "Procedures:",
          items: [
            "Procedure Chest Tube Surgical",
            "Procedure Chest Tube Thoravent",
            "Procedure Digital Block",
            "Procedure Drainage",
            "Procedure Echo",
            "Procedure EFAST",
            "Procedure Foreign Body Ear",
            "Procedure General",
            "Procedure Intubation",
            "Procedure Laceration",
            "Procedure Laceration Glue",
            "Procedure Nasal Packing",
            "Procedure Ortho Reduction",
            "Procedure Sedation",
            "Procedure Splint",
            "Procedure Suture Removal"
          ]
        }
      ]
    },
    {
      title: "MDM",
      sections: [
        {
          title: "MDM:",
          items: [
            "MDM General",
            "MDM Trauma MSK",
            "MDM Trauma Head",
            "MDM MVC Minor",
            "MDM MVC",
            "MDM Burn",
            "MDM Burn Minor"
          ]
        },
        {
          title: "Discharge:",
          items: [
            "Discharge General",
            "Discharge Trauma MSK",
            "Discharge Trauma Head",
            "Discharge Trauma Head CT",
            "Discharge MVC",
            "Discharge Burn",
            "Discharge Burn Minor"
          ]
        },
        {
          title: "Admit:",
          items: ["Admit General", "Admit Burn"]
        }
      ]
    },
    {
      title: "Extras",
      sections: [
        {
          title: "History/Chart Review:",
          items: [
            "MDM Additional History",
            "MDM Documentation Reviewed"
          ]
        },
        {
          title: "Existing Conditions Affecting Care:",
          items: ["MDM Chronic Conditions"]
        },
        {
          title: "Social determinant of health:",
          items: ["MDM Social"]
        },
        {
          title: "Obs/Considered Admission:",
          items: [
            "MDM Considered Admit",
            "MDM Observation"
          ]
        },
        {
          title: "Discussions:",
          items: [
            "MDM Discussion Hospitalist",
            "MDM Discussion Ortho"
          ]
        },
        {
          title: "Critical Care:",
          items: ["Insert Critical Care"]
        }
      ]
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
            checkboxStates={checkboxStates}
          />
        ))}
      </div>
      <NoteSection note={note} setNote={setNote} onClear={handleClear} />
    </div>
  );
};

export default TraumaBurn;