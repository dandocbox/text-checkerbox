import React, { useState } from 'react';
import Column from '../components/Column';
import NoteSection from '../components/NoteSection';

const AbdoGI = () => {
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
            "History Abdominal Pain",
            "History Abdominal Pain Epigastric",
            "History Abdominal Pain RUQ",
            "History Abdominal Pain RLQ",
            "History Abdominal Pain LLQ",
            "History Flank Pain",
            "History Flank Pain + Fever",
            "History Gastroenteritis",
            "History Vomiting",
            "History Diarrhea"
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
            "Insert Exam With Eye"
          ]
        },
        {
          title: "Procedures:",
          items: [
            "Procedure General",
            "Procedure EFAST"
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
            "MDM Abdominal Pain",
            "MDM Abdominal Pain Well",
            "MDM Abdominal Pain Epigastric",
            "MDM Abdominal Pain RUQ",
            "MDM Abdominal Pain RLQ",
            "MDM Abdominal Pain LLQ",
            "MDM Flank Pain",
            "MDM Flank Pain + Fever",
            "MDM Gastroenteritis",
            "MDM Vomiting",
            "MDM Diarrhea"
          ]
        },
        {
          title: "Discharge:",
          items: [
            "Discharge General",
            "Discharge Abdominal Pain",
            "Discharge Abdominal Pain CT",
            "Discharge Gastritis",
            "Discharge Gastroenteritis",
            "Discharge Flank Pain",
            "Discharge Kidney Stone",
            "Discharge UTI",
            "Discharge Vomiting",
            "Discharge Diarrhea"
          ]
        },
        {
          title: "Admit:",
          items: [
            "Admit General",
            "Admit SBO",
            "Admit Appendicitis",
            "Admit Infected Stone"
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

export default AbdoGI;