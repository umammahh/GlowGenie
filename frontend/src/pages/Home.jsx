import skincaree from "../assets/skincaree.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToQuizButton = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex-1 bg-[#F9D0CE] overflow-hidden">
      <div className="h-full flex">
        <div className="w-1/2 flex flex-col justify-center px-16 space-y-4">
          <h1 className="text-6xl font-bold font-playfair">
            Welcome to Glow Genie
          </h1>
          <p className="text-xl text-right font-poppins text-gray-700 mr-32">
            Personalized skincare. Powered by you.
          </p>
          <div className="flex items-end font-poppins justify-end mr-32">
            <button
              className="rounded-2xl p-4 bg-[#EDAA9F] hover:bg-[#E59A8F] transition-colors"
              onClick={goToQuizButton}
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
      </div>
    </div>
  );
};

export default Home;
