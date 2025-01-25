"use client";

import { useState } from "react";
import ModalForm from "../components/ModalForm";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto w-full mb-10">
      <h3 className="flex items-center justify-center text-3xl font-bold mt-5">
        Articles
      </h3>
      <button
        onClick={openModal}
        className="border-2 border-blue-500 text-blue-500 rounded-lg p-3 hover:bg-blue-500 hover:text-white transition duration-300"
      >
        + New item
      </button>

      {/* Modal Form */}
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </div>
  );
};

export default HomePage;
