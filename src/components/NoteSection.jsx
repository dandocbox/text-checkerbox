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
    <div className="w-96 bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4 text-green-500">NOTE:</h2>
      <textarea
        className="w-full h-96 bg-gray-700 text-white p-2 rounded mb-4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="flex justify-between">
        <Button variant="outline" size="sm" onClick={handleClear}>
          Clear
        </Button>
        <Button className="bg-green-500 hover:bg-green-600" onClick={handleCopy}>
          Copy Text
        </Button>
      </div>
    </div>
  );
};

export default NoteSection;