import React, { useState } from 'react';
import Column from '../components/Column';
import NoteSection from '../components/NoteSection';

const ChestResp = () => {
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
          items: [
            "History General",
            "History Chest Pain",
            "History Chest Wall Pain",
            "History Palpitations"
          ]
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
            "Insert Exam With Neuro"
          ]
        },
        {
          title: "Procedures:",
          items: [
            "Procedure General",
            "Procedure Echo",
            "Procedure EFAST",
            "Procedure Intubation",
            "Procedure Sedation"
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
            "MDM Chest Pain",
            "MDM Chest Pain Well",
            "MDM Chest Wall Pain",
            "MDM Palpitations",
            "MDM Afib",
            "MDM SVT"
          ]
        },
        {
          title: "Discharge:",
          items: [
            "Discharge General",
            "Discharge Chest Pain",
            "Discharge Chest Pain Dimer",
            "Discharge Chest Pain CT",
            "Discharge Chest Wall Pain",
            "Discharge Afib"
          ]
        },
        {
          title: "Admit:",
          items: [
            "Admit General",
            "Admit Chest Pain",
            "Admit PE",
            "Admit Pneumonia",
            "Admit Pneumonia CAP",
            "Admit Pneumonia HAP",
            "Admit Afib",
            "Admit SVT"
          ]
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
          items: [
            "MDM Chronic Conditions"
          ]
        },
        {
          title: "Social determinant of health:",
          items: [
            "MDM Social"
          ]
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
          items: [
            "Insert Critical Care"
          ]
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

export default ChestResp;