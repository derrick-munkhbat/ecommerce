"use client";

import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import ModalForm from "../components/ModalForm";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error messages

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fetch products from the API using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get("http://localhost:8000/api/products"); // Use Axios to fetch data
        setProducts(response.data); // Set the fetched products to state
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.response ? error.response.data : error.message); // Set error message in state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto w-full mb-10">
      <h3 className="flex items-center justify-center text-3xl font-bold mt-5">
        Products
      </h3>
      <button
        onClick={openModal}
        className="border-2 border-blue-500 text-blue-500 rounded-lg p-3 hover:bg-blue-500 hover:text-white transition duration-300"
      >
        + New item
      </button>

      {/* Display loading state */}
      {loading && <p className="text-center">Loading products...</p>}

      {/* Display error state */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display products */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="border p-4 mb-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold">
                  ${Number(product.price).toFixed(2)}{" "}
                  {/* Convert price to number */}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </div>
  );
};

export default HomePage;
