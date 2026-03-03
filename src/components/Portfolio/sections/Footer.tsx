import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gradient-to-t from-black to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; 2026 Mohamed Fahim. Built with Next & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
