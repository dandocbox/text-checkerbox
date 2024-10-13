import React, { useState } from 'react';
import Column from '../components/Column';
import NoteSection from '../components/NoteSection';

const Psych = () => {
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
            "History Psych General",
            "History Psychosis",
            "History Psychosis Meth",
            "History Suicidal",
            "History Suicidal No Plan",
            "History Depression",
            "History Panic Attack",
            "History Anxiety",
            "History EtOH Withdraw",
            "History EtOH Intoxication"
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
            "Insert Exam With Neuro",
            "Insert Exam With Psych"
          ]
        },
        {
          title: "Procedures:",
          items: [
            "Procedure General"
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
            "MDM Psych General",
            "MDM Psychosis",
            "MDM Psychosis Meth",
            "MDM Suicidal",
            "MDM Suicidal No Plan",
            "MDM Depression",
            "MDM Panic Attack",
            "MDM Anxiety",
            "MDM EtOH Withdraw",
            "MDM EtOH Intoxication"
          ]
        },
        {
          title: "Discharge:",
          items: [
            "Discharge Psych",
            "Discharge Panic Attack",
            "Discharge Anxiety",
            "Discharge EtOH Withdraw",
            "Discharge EtOH Intoxication"
          ]
        },
        {
          title: "Admit:",
          items: [
            "Admit Psych"
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

export default Psych;