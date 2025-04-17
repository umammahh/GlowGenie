import skincaree from "../assets/skincaree.png";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 bg-[#F9D0CE] flex">
        <div className="w-2/4 flex flex-col justify-center px-16 space-y-4">
          <h1 className="text-6xl font-bold font-playfair">
            Welcome to Glow Genie
          </h1>
          <p className="text-xl text-right text-gray-700  mr-14">
            Personalized skincare. Powered by you.
          </p>
        </div>
        <div className="w-2/3 h-full">
          <img
            src={skincaree}
            alt="Skincare products"
            // object-cover ensures image fits the entire frame
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
