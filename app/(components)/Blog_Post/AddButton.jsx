import React, { useState } from "react";
// import { PlusIcon } from "@heroicons/react/solid"; // Importing react icons
import { FaPlus } from "react-icons/fa";


// This component represents the add button used to create new articles.
const AddButton = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, excerpt });
    setTitle("");
    setExcerpt("");
    setShowForm(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 p-2 rounded-full shadow-lg text-white"
      >
        <FaPlus />
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 mb-2 w-full"
            required
          />
          <textarea
            placeholder="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="p-2 mb-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-full shadow-lg text-white"
          >
            Add Article
          </button>
        </form>
      )}
    </div>
  );
};

export default AddButton;
