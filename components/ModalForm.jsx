// components/ModalForm.js
import React, { useState } from "react";

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ topic, image, description, date });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Create Article</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Topic:
              <input
                type="text"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Image URL:
              <input
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description:
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Date:
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
