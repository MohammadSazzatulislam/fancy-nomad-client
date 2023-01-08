import React, { useState } from "react";
import "./BackToTopButton.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
     const [visible, setVisible] = useState(false);

     const toggleVisible = () => {
       const scrolled = document.documentElement.scrollTop;
       if (scrolled > 300) {
         setVisible(true);
       } else if (scrolled <= 300) {
         setVisible(false);
       }
     };

     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     };

     window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        style={{ display: visible ? "inline" : "none" }}
        type="button"
        onClick={scrollToTop}
        className="  px-4 py-4 animate-bounce rounded-full bg-pink-600 text-white p-1 hover:bg-pink-800 "
        id="btn-back-to-top"
      >
        <FaArrowUp className="w-6 h-6"></FaArrowUp>
      </button>
    </div>
  );
};

export default BackToTopButton;
