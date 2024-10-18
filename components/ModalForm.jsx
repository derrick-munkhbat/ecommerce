import React, { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (initialData) {
      setTopic(initialData.topic);
      setImage(initialData.image);
      setDescription(initialData.description);
      setDate(initialData.date);
    } else {
      resetForm();
    }
  }, [initialData, isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSubmit function passed from the parent
    onSubmit({ topic, image, description, date });
    resetForm(); // Reset the form fields after submission
    onClose(); // Close the modal after submission
  };

  const resetForm = () => {
    setTopic("");
    setImage("");
    setDescription("");
    setDate("");
  };

  const handleClose = () => {
    resetForm(); // Reset the form fields
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">
          {initialData ? "Edit Article" : "Create Article"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              Topic:
              <input
                id="topic"
                name="topic"
                type="text"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium mb-1">
              Image URL:
              <input
                id="image"
                name="image"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description:
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Date:
              <input
                id="date"
                name="date"
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
              {initialData ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={handleClose}
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
