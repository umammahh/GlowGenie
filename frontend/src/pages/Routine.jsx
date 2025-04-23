import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data - replace with actual data from your results later
const mockRoutine = {
  morning: [
    { id: 1, step: "Gentle Cleanser", done: false, tip: "Use lukewarm water" },
    {
      id: 2,
      step: "Vitamin C Serum",
      done: false,
      tip: "Wait 1 minute before next step",
    },
    { id: 3, step: "Moisturizer", done: false, tip: "Apply on damp skin" },
    { id: 4, step: "Sunscreen", done: false, tip: "Reapply every 2 hours" },
  ],
  night: [
    {
      id: 5,
      step: "Double Cleanse",
      done: false,
      tip: "Start with oil cleanser",
    },
    { id: 6, step: "Toner", done: false, tip: "Pat, don't rub" },
    { id: 7, step: "Retinol", done: false, tip: "Use pea-sized amount" },
    { id: 8, step: "Night Cream", done: false, tip: "Apply generously" },
  ],
};

const RoutineStep = ({ step, done, tip, onToggle }) => (
  <div
    className={`bg-white rounded-xl p-4 mb-3 transition-all ${
      done ? "border-2 border-[#C17C6C]" : "border border-gray-100"
    }`}
  >
    <div className="flex items-center">
      <button
        onClick={onToggle}
        className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors
          ${done ? "border-[#C17C6C] bg-[#C17C6C]" : "border-gray-300"}`}
      >
        {done && <span className="text-white">✓</span>}
      </button>
      <div className="flex-1">
        <h3 className="font-poppins font-medium">{step}</h3>
        <p className="text-sm text-gray-600 font-poppins mt-1">{tip}</p>
      </div>
    </div>
  </div>
);

const Routine = () => {
  const navigate = useNavigate();
  const [routineData, setRoutineData] = useState(mockRoutine);
  const [activeTime, setActiveTime] = useState("morning");

  const toggleStep = (timeOfDay, stepId) => {
    setRoutineData((prev) => ({
      ...prev,
      [timeOfDay]: prev[timeOfDay].map((step) =>
        step.id === stepId ? { ...step, done: !step.done } : step
      ),
    }));
  };

  const markAllDone = (timeOfDay) => {
    setRoutineData((prev) => ({
      ...prev,
      [timeOfDay]: prev[timeOfDay].map((step) => ({ ...step, done: true })),
    }));
  };

  const calculateProgress = (timeOfDay) => {
    const steps = routineData[timeOfDay];
    const completed = steps.filter((step) => step.done).length;
    return (completed / steps.length) * 100;
  };

  const getStreakMessage = () => {
    return "You've completed your routine 4 days in a row! 🔥";
  };

  return (
    <div className="flex-1 bg-[#F9D0CE] overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            My Daily Glow Routine
          </h1>
          <p className="text-gray-600 font-poppins">
            Keep glowing with your personalized routine!
          </p>
        </div>

        {/* Streak Banner */}
        <div className="bg-white rounded-2xl p-4 mb-8 text-center font-poppins shadow-sm">
          <p className="text-[#C17C6C] font-medium">{getStreakMessage()}</p>
        </div>

        {/* Time Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTime("morning")}
            className={`flex-1 py-3 rounded-xl font-poppins transition-colors
              ${
                activeTime === "morning"
                  ? "bg-[#C17C6C] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
          >
            Morning Routine ☀️
          </button>
          <button
            onClick={() => setActiveTime("night")}
            className={`flex-1 py-3 rounded-xl font-poppins transition-colors
              ${
                activeTime === "night"
                  ? "bg-[#C17C6C] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
          >
            Night Routine 🌙
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2 font-poppins">
            <span>Progress</span>
            <span>{Math.round(calculateProgress(activeTime))}% Complete</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[#EDAA9F] transition-all duration-300"
              style={{ width: `${calculateProgress(activeTime)}%` }}
            />
          </div>
        </div>

        {/* Routine Steps */}
        <div className="mb-8">
          {routineData[activeTime].map((step) => (
            <RoutineStep
              key={step.id}
              {...step}
              onToggle={() => toggleStep(activeTime, step.id)}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => markAllDone(activeTime)}
            className="w-full bg-[#EDAA9F] text-white py-3 rounded-xl hover:bg-[#E59A8F] transition-colors font-poppins"
          >
            Mark All as Done
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="w-full bg-white text-[#C17C6C] py-3 rounded-xl hover:bg-gray-50 transition-colors font-poppins border border-[#C17C6C]"
          >
            Update My Routine
          </button>
        </div>

        {/* Daily Tip */}
        <div className="mt-8 bg-white rounded-2xl p-6 font-poppins">
          <h3 className="font-medium mb-2">✨ Tip of the Day</h3>
          <p className="text-gray-600">
            Remember to apply your products on slightly damp skin for better
            absorption!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Routine;
