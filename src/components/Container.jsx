import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px-28px)] bg-gray-900">
      <div className="p-6 bg-gray-300 rounded-lg shadow-lg w-full max-w-lg">
        {children}
      </div>
    </div>
  );
};

export default Container;
