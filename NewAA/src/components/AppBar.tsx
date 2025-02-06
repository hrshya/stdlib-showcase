import React from "react";

const AppBar: React.FC = () => {
  return (
    <div id="nav" className="fixed top-0 left-0 w-full flex justify-between p-4 bg-transparent">
      <a href="#" className="text-white">Home</a>
      <a href="#" className="text-white">About</a>
      <a href="#" className="text-white">Contact</a>
      <div id="purple" className="hidden bg-purple-500 w-full h-1"></div>
    </div>
  );
};

export default AppBar;
