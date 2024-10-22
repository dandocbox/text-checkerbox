import React from 'react';
import { Button } from "@/components/ui/button"

const NoteSection = ({ note, setNote, onClear }) => {
  const handleClear = () => {
    setNote('');
    onClear();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(note);
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="w-96 bg-white shadow-sm p-4 rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">NOTE:</h2>
      <textarea
        className="w-full h-96 bg-gray-50 text-gray-700 p-2 rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200"
        value={note}
        onChange={handleChange}
      />
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handleClear}
          className="bg-white text-gray-700 hover:bg-gray-100 font-semibold px-4 py-2 rounded h-10 border border-gray-200"
        >
          Clear
        </Button>
        <Button
          onClick={handleCopy}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex-grow ml-2 h-10"
        >
          Copy Text
        </Button>
      </div>
    </div>
  );
};

export default NoteSection;