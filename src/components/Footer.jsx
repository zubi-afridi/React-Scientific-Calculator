import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="px-4 py-4 bg-gray-800 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white dark:text-gray-300 sm:text-center ">
            © 2024 Zubair Khan | React Scientific Calculator. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.linkedin.com/in/zubair-khan-web-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <FaLinkedin className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <a
              href="https://github.com/zubi-afridi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <FaGithub className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">GitHub profile</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
