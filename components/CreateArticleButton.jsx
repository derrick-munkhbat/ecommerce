// components/CreateArticleButton.js
import React from "react";

function CreateArticleButton({ onClick }) {
  return (
    <div className="flex justify-center p-5">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Article
      </button>
    </div>
  );
}

export default CreateArticleButton;
