import React from "react";
import "./style.css";
function PageLoader() {
  return (
    <div className="w-full h-full fixed top-[76px] left-[80px] bg-white opacity-75 z-50">
      <div className="flex space-x-4 justify-center items-center mt-[45vh]">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-main-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-main-blue rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-main-blue rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default PageLoader;
