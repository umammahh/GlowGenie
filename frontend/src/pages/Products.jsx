import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data
const products = [
  {
    id: 1,
    name: "Gentle Cloud Cleanser",
    step: "Cleanser",
    timing: "morning",
    price: 24.99,
    image: "placeholder.jpg",
    description:
      "Perfect for dry & sensitive skin with ceramides and hyaluronic acid",
    compatibility: "Gentle for Sensitive Skin",
    budget: "medium",
  },
  {
    id: 2,
    name: "Bright Boost Serum",
    step: "Serum",
    timing: "morning",
    price: 34.99,
    image: "placeholder.jpg",
    description:
      "Vitamin C + Niacinamide for brightening and evening skin tone",
    compatibility: "Works well with your routine",
    budget: "premium",
  },
  // Add more mock products as needed
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300"
        />
        {/* Quick Add Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-white text-[#C17C6C] px-6 py-2.5 rounded-xl font-poppins hover:bg-[#C17C6C] hover:text-white transition-colors transform hover:scale-105">
            Quick Add
          </button>
        </div>
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-sm px-3 py-1 rounded-full font-poppins text-[#C17C6C]">
            {product.timing === "morning" ? "☀️ AM" : "🌙 PM"}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-sm px-3 py-1 rounded-full font-poppins text-[#C17C6C]">
            {product.step}
          </span>
        </div>
        {/* Price Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-[#C17C6C] text-white text-sm px-3 py-1 rounded-full font-poppins">
            ${product.price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-playfair font-medium text-xl mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm font-poppins line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C17C6C]"></div>
            <p className="text-[#C17C6C] text-sm font-poppins">
              ✨ {product.compatibility}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 bg-[#EDAA9F] text-white py-2.5 rounded-xl hover:bg-[#C17C6C] transition-colors font-poppins flex items-center justify-center gap-2">
              <span>Add to Routine</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <button
              className="w-12 h-10 flex items-center justify-center border-2 border-[#EDAA9F] text-[#EDAA9F] rounded-xl hover:bg-[#FFE4E0] hover:border-[#C17C6C] hover:text-[#C17C6C] transition-colors"
              aria-label="Add to favorites"
            >
              💖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterCheckbox = ({ label, checked, onChange, count }) => (
  <label className="flex items-center justify-between py-2 cursor-pointer group">
    <div className="flex items-center">
      <div className="relative w-5 h-5 mr-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-5 h-5 border-2 border-[#C17C6C] rounded checked:bg-[#C17C6C] transition-all cursor-pointer"
        />
        {checked && (
          <svg
            className="absolute top-0.5 left-0.5 w-4 h-4 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="font-poppins text-gray-700 group-hover:text-[#C17C6C] transition-colors">
        {label}
      </span>
    </div>
    {count && (
      <span className="text-sm text-gray-500 font-poppins">({count})</span>
    )}
  </label>
);

const FilterSection = ({ title, options, activeFilters, onFilterChange }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-playfair text-lg text-gray-800">{title}</h3>
      <button
        className="text-sm text-[#C17C6C] hover:text-[#A66A5B] font-poppins"
        onClick={() => onFilterChange([])}
      >
        Clear
      </button>
    </div>
    <div className="space-y-1">
      {options.map((option) => (
        <FilterCheckbox
          key={option.value}
          label={option.label}
          checked={activeFilters.includes(option.value)}
          onChange={() => {
            if (activeFilters.includes(option.value)) {
              onFilterChange(activeFilters.filter((f) => f !== option.value));
            } else {
              onFilterChange([...activeFilters, option.value]);
            }
          }}
          count={option.count}
        />
      ))}
    </div>
  </div>
);

const Products = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState({
    timing: [],
    step: [],
    budget: [],
  });

  const filterOptions = {
    timing: [
      { label: "Morning Routine", value: "morning", count: 12 },
      { label: "Night Routine", value: "night", count: 15 },
    ],
    step: [
      { label: "Cleanser", value: "cleanser", count: 8 },
      { label: "Toner", value: "toner", count: 6 },
      { label: "Serum", value: "serum", count: 10 },
      { label: "Moisturizer", value: "moisturizer", count: 9 },
      { label: "SPF", value: "spf", count: 5 },
    ],
    budget: [
      { label: "Budget Friendly", value: "budget", count: 15 },
      { label: "Mid-Range", value: "medium", count: 20 },
      { label: "Premium", value: "premium", count: 10 },
    ],
  };

  return (
    <div className="flex-1 bg-[#FFE4E0] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-12 px-6">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Your Perfect Product Match ✨
          </h1>
          <p className="text-gray-600 font-poppins text-lg max-w-2xl mx-auto">
            Hey Umama! Based on your Dry & Sensitive Skin type, these are the
            holy grail products we recommend
          </p>
        </div>

        <div className="flex gap-8 px-6 pb-12">
          {/* Filters Sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-xl text-gray-800">Filters</h2>
                <button
                  onClick={() =>
                    setActiveFilters({
                      timing: [],
                      step: [],
                      budget: [],
                    })
                  }
                  className="text-sm text-[#C17C6C] hover:text-[#A66A5B] font-poppins"
                >
                  Reset All
                </button>
              </div>

              <FilterSection
                title="Time of Day"
                options={filterOptions.timing}
                activeFilters={activeFilters.timing}
                onFilterChange={(value) =>
                  setActiveFilters({ ...activeFilters, timing: value })
                }
              />
              <div className="h-px bg-gray-200 my-6"></div>
              <FilterSection
                title="Product Step"
                options={filterOptions.step}
                activeFilters={activeFilters.step}
                onFilterChange={(value) =>
                  setActiveFilters({ ...activeFilters, step: value })
                }
              />
              <div className="h-px bg-gray-200 my-6"></div>
              <FilterSection
                title="Price Range"
                options={filterOptions.budget}
                activeFilters={activeFilters.budget}
                onFilterChange={(value) =>
                  setActiveFilters({ ...activeFilters, budget: value })
                }
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-poppins">Sort by:</span>
                <select className="bg-transparent font-poppins text-gray-800 focus:outline-none">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-poppins">12 products</span>
                <div className="h-4 w-px bg-gray-200"></div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded text-[#C17C6C] hover:bg-[#FFE4E0]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                  </button>
                  <button className="p-1.5 rounded bg-[#FFE4E0] text-[#C17C6C]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zm-11 0h7v7H3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center py-12">
          <button
            onClick={() => navigate("/routine")}
            className="bg-white text-[#C17C6C] px-8 py-3 rounded-xl hover:bg-[#FFE4E0] transition-colors font-poppins border border-[#C17C6C] flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to My Routine
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
