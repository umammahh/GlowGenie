import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-playfair text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600 font-poppins">{description}</p>
  </div>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-[#FFE4E0] overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            About Glow Genie ✨
          </h1>
          <p className="text-gray-600 font-poppins text-lg max-w-2xl mx-auto">
            Your personal skincare companion that helps you achieve your best
            skin through personalized routines and product recommendations.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-[2rem] p-8 mb-12 shadow-lg text-center">
          <h2 className="font-playfair text-2xl mb-4">Our Mission</h2>
          <p className="text-gray-600 font-poppins max-w-3xl mx-auto">
            We believe everyone deserves to feel confident in their skin. Our
            mission is to simplify skincare by providing personalized,
            science-backed recommendations that work for your unique skin type
            and concerns.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon="🎯"
            title="Personalized Routine"
            description="Get a customized skincare routine based on your unique skin type, concerns, and goals."
          />
          <FeatureCard
            icon="💫"
            title="Smart Recommendations"
            description="Discover products that work together perfectly for your skin's needs."
          />
          <FeatureCard
            icon="📊"
            title="Progress Tracking"
            description="Track your skincare journey and watch your skin transform over time."
          />
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-[2rem] p-8 mb-12 shadow-lg">
          <h2 className="font-playfair text-2xl mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDAA9F] flex items-center justify-center text-white text-xl font-poppins mx-auto mb-4">
                1
              </div>
              <h3 className="font-poppins font-medium mb-2">Take the Quiz</h3>
              <p className="text-gray-600 text-sm">
                Tell us about your skin type and concerns
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDAA9F] flex items-center justify-center text-white text-xl font-poppins mx-auto mb-4">
                2
              </div>
              <h3 className="font-poppins font-medium mb-2">Get Your Plan</h3>
              <p className="text-gray-600 text-sm">
                Receive a personalized skincare routine
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDAA9F] flex items-center justify-center text-white text-xl font-poppins mx-auto mb-4">
                3
              </div>
              <h3 className="font-poppins font-medium mb-2">Follow Along</h3>
              <p className="text-gray-600 text-sm">
                Track your daily skincare routine
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDAA9F] flex items-center justify-center text-white text-xl font-poppins mx-auto mb-4">
                4
              </div>
              <h3 className="font-poppins font-medium mb-2">See Results</h3>
              <p className="text-gray-600 text-sm">Watch your skin transform</p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/quiz")}
            className="bg-[#C17C6C] text-white px-8 py-3 rounded-xl hover:bg-[#A66A5B] transition-colors font-poppins"
          >
            Start Your Skincare Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
