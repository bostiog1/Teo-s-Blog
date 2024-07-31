// src/components/Button.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
