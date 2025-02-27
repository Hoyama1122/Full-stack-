import React from "react";
import Link from "next/link";
import Header from "../components/layout/Header";

const NotFound = () => {
  return (
    <>
     
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center py-8">
        <div>
          <h1 className="text-8xl font-bold bg-black text-white rounded-md">404</h1>
          <p className="text-2xl text-gray-700 my-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/" className="text-lg text-blue-500 hover:underline">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
