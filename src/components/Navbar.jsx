import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <span href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-4xl text-[28px] font-semibold  text-white whitespace-nowrap font-montserrat" >
            Scientific Calculator
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
