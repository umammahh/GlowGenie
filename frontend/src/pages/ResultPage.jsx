import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, benefit, image }) => (
  <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <h3 className="font-poppins font-medium text-lg mb-2">{name}</h3>
    <p className="text-gray-600 text-sm mb-4 font-poppins">{benefit}</p>
    <button className="w-full bg-[#EDAA9F] text-white py-2 rounded-xl hover:bg-[#E59A8F] transition-colors font-poppins">
      Add to Routine
    </button>
  </div>
);

const TimelineStep = ({ step, product }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-8 rounded-full bg-[#EDAA9F] flex items-center justify-center text-white font-poppins">
      {step}
    </div>
    <div className="flex-1 bg-white rounded-xl p-3 font-poppins">{product}</div>
  </div>
);

const Routine = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-[#F9D0CE] overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Here's Your Personalized Glow Plan!
          </h1>
          <p className="text-gray-600 font-poppins text-lg">
            Based on your answers, we've crafted the perfect skincare routine
            tailored just for you.
          </p>
        </div>

        {/* Skin Profile Summary */}
        <div className="bg-white rounded-3xl border-8 border-white p-8 mb-12 shadow-lg">
          <h2 className="font-playfair text-2xl mb-6">Your Skin Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" border border-[#EDAA9F] rounded-2xl p-4">
              <h3 className="font-poppins font-medium mb-2">Skin Type</h3>
              <p className="font-poppins">Combination</p>
            </div>
            <div className="border  border-[#EDAA9F] rounded-2xl p-4">
              <h3 className="font-poppins font-medium mb-2">Main Concerns</h3>
              <p className="font-poppins">Hyperpigmentation, Dullness</p>
            </div>
            {/* [#fcc1b8] for lighter color */}
            <div className="border  border-[#EDAA9F] rounded-2xl p-4">
              <h3 className="font-poppins font-medium mb-2">Age Group</h3>
              <p className="font-poppins">26-40</p>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-12">
          <h2 className="font-playfair text-2xl mb-6">Recommended Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              name="Gentle Cloud Cleanser"
              benefit="Hydrating cleanser with ceramides"
              image="placeholder.jpg"
            />
            <ProductCard
              name="Bright Boost Serum"
              benefit="Niacinamide + Vitamin C for radiance"
              image="placeholder.jpg"
            />
            <ProductCard
              name="Dewy Dream Moisturizer"
              benefit="Lightweight but deeply hydrating"
              image="placeholder.jpg"
            />
          </div>
        </div>

        {/* Daily Routine */}
        <div className="bg-white rounded-3xl border-8 border-white p-8 mb-12 shadow-lg">
          <h2 className="font-playfair text-2xl mb-6">Your Daily Routine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-medium mb-4">
                Morning Routine ☀️
              </h3>
              <TimelineStep step="1" product="Gentle Cloud Cleanser" />
              <TimelineStep step="2" product="Bright Boost Serum" />
              <TimelineStep step="3" product="Dewy Dream Moisturizer" />
              <TimelineStep step="4" product="UV Shield SPF 50" />
            </div>
            <div>
              <h3 className="font-poppins font-medium mb-4">
                Evening Routine 🌙
              </h3>
              <TimelineStep step="1" product="Gentle Cloud Cleanser" />
              <TimelineStep step="2" product="Calming Toner" />
              <TimelineStep step="3" product="Night Repair Serum" />
              <TimelineStep step="4" product="Dewy Dream Moisturizer" />
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-playfair text-xl mb-3">Why Niacinamide?</h3>
            <p className="font-poppins text-gray-600">
              Perfect for your combination skin, it helps balance oil production
              while brightening.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-playfair text-xl mb-3">Layering Guide</h3>
            <p className="font-poppins text-gray-600">
              Always go from thinnest to thickest products for optimal
              absorption.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-playfair text-xl mb-3">Product Tips</h3>
            <p className="font-poppins text-gray-600">
              Wait 1-2 minutes between each product for best results.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/routine")}
            className="bg-[#C17C6C] text-white px-8 py-3 rounded-xl hover:bg-[#A66A5B] transition-colors font-poppins"
          >
            Start Routine Tracker
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-white text-[#C17C6C] px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors font-poppins border border-[#C17C6C]"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Routine;
