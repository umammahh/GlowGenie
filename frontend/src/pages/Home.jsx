import React, { useRef } from "react";
import skincaree from "../assets/skincaree.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const quizRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex-1 bg-[#F9D0CE] overflow-y-auto">
      {/* Fixed Navigation */}
      <nav className="fixed top-24 right-8 z-50">
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg font-poppins text-sm transition-all hover:scale-105"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(quizRef)}
              className="bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg font-poppins text-sm transition-all hover:scale-105"
            >
              Quiz
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg font-poppins text-sm transition-all hover:scale-105"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(productsRef)}
              className="bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg font-poppins text-sm transition-all hover:scale-105"
            >
              Products
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="w-1/2 flex flex-col justify-center px-16 space-y-4">
          <h1 className="text-6xl font-bold font-playfair">
            Welcome to Glow Genie
          </h1>
          <p className="text-xl text-right font-poppins text-gray-700 mr-32">
            Personalized skincare. Powered by you.
          </p>
          <div className="flex items-end font-poppins justify-end mr-32">
            <button
              className="rounded-2xl p-4 bg-[#EDAA9F] hover:bg-[#E59A8F] transition-all hover:scale-105"
              onClick={goToQuiz}
            >
              Start My Skincare Journey 🌿
            </button>
          </div>
        </div>

        <div className="w-1/2 ml-32 flex items-center justify-center">
          <img
            src={skincaree}
            alt="Skincare products"
            className="h-[90%] w-auto object-contain scale-125"
          />
        </div>
      </section>

      {/* Quiz Section */}
      <section
        ref={quizRef}
        className="min-h-screen bg-white/50 flex items-center px-16 py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-playfair mb-8">
            Discover Your Perfect Routine
          </h2>
          <p className="text-lg font-poppins text-gray-700 mb-12">
            Take our comprehensive skin quiz to get personalized skincare
            recommendations tailored just for you.
          </p>
          <button
            onClick={goToQuiz}
            className="bg-[#C17C6C] text-white px-8 py-4 rounded-xl font-poppins hover:bg-[#A66A5B] transition-all hover:scale-105"
          >
            Take the Quiz
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="min-h-screen flex items-center px-16 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-playfair mb-8">
            About Glow Genie
          </h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/80 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To simplify skincare by providing personalized recommendations
                  based on your unique needs.
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  How It Works
                </h3>
                <p className="text-gray-700">
                  Take our quiz, get tailored recommendations, and track your
                  progress with our smart routine builder.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Expert Backed
                </h3>
                <p className="text-gray-700">
                  Our recommendations are based on dermatological research and
                  skincare science.
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Personalized Care
                </h3>
                <p className="text-gray-700">
                  Every skin is unique. Get recommendations that work
                  specifically for your skin type and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={productsRef}
        className="min-h-screen bg-white/50 flex items-center px-16 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-playfair mb-12 text-center">
            Recommended Products
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:scale-105">
              <div className="h-48 bg-[#FFE4E0] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Gentle Cleanser
              </h3>
              <p className="text-gray-700 mb-4">
                Perfect for sensitive skin types
              </p>
              <button className="w-full bg-[#C17C6C] text-white py-2 rounded-lg hover:bg-[#A66A5B] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:scale-105">
              <div className="h-48 bg-[#FFE4E0] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Hydrating Serum
              </h3>
              <p className="text-gray-700 mb-4">
                Deep hydration for all skin types
              </p>
              <button className="w-full bg-[#C17C6C] text-white py-2 rounded-lg hover:bg-[#A66A5B] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:scale-105">
              <div className="h-48 bg-[#FFE4E0] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Daily Moisturizer
              </h3>
              <p className="text-gray-700 mb-4">
                Light-weight, non-greasy formula
              </p>
              <button className="w-full bg-[#C17C6C] text-white py-2 rounded-lg hover:bg-[#A66A5B] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
