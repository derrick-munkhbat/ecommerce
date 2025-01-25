"use client";

import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <form
        // onSubmit={handleSignUp}
        className="w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up Page</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>

        <button
          type="button"
          // onClick={handleGoToHomepage}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 ml-2"
        >
          Go to Home
        </button>
      </form>
    </div>
  );
};

export default SignUp;
