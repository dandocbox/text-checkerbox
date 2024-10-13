import React from 'react';
import { Button } from "@/components/ui/button"

const NoteSection = ({ note, setNote }) => {
  const handleClear = () => {
    setNote('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(note);
  };

  return (
    <div className="w-96 bg-gray-900 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-emerald-400">NOTE:</h2>
      <textarea
        className="w-full h-96 bg-gray-800 text-white p-2 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handleClear}
          className="bg-white text-black hover:bg-gray-200 font-semibold px-4 py-2 rounded h-10"
        >
          Clear
        </Button>
        <Button
          onClick={handleCopy}
          className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded flex-grow ml-2 h-10"
        >
          Copy Text
        </Button>
      </div>
    </div>
  );
};

export default NoteSection;