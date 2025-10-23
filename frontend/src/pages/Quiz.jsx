import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const resultButton = () => {
    navigate("/result");
  };

  return (
    <div className="flex-1 bg-[#F9D0CE] flex items-center justify-center">
      <div className="bg-white rounded-[2rem] p-8 max-w-2xl w-full mx-4 shadow-lg">
        <div className="flex justify-between items-center mb-12 font-poppins">
          <span className="text-gray-600">2 of 12</span>
          <button className="text-gray-600">× Close</button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 font-playfair">
            Your age?
          </h2>
          <p className="text-gray-600 text-sm font-poppins">
            A short survey to improve our service. For passing the survey you
            will get a 20% discount on services.
          </p>
        </div>

        <div className="space-y-4 mb-12 font-poppins">
          {["Less than 18", "18-25", "26-40", "over 41"].map((option) => (
            <button
              key={option}
              className={`w-full py-4 px-6 text-left rounded-xl transition-all bg-white
                ${
                  selectedOption === option
                    ? "shadow-md border-2 border-[#C17C6C]"
                    : "border border-gray-300 hover:border-gray-400"
                }`}
              onClick={() => setSelectedOption(option)}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center
                    ${
                      selectedOption === option
                        ? "border-[#C17C6C]"
                        : "border-gray-300"
                    }`}
                >
                  {selectedOption === option && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C17C6C]" />
                  )}
                </div>
                {option}
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center text-sm font-poppins">
          <button className="text-gray-500 hover:text-gray-700">
            Previous
          </button>
          <button
            className="bg-[#C17C6C] text-white px-8 py-2.5 rounded-lg hover:bg-[#A66A5B] transition-colors"
            onClick={resultButton}
          >
            Next
          </button>
          <button className="text-gray-500 hover:text-gray-700">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
