import { useNavigate, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "QUIZ", path: "/quiz" },
    { name: "MY ROUTINE", path: "/routine" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <div className="bg-[#EDAA9F] font-poppins relative px-4">
      <nav className="bg-[#F9D0CE] py-4 px-8 rounded-full shadow-sm max-w-4xl mx-auto my-3">
        <ul className="flex justify-center items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className={`cursor-pointer transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-[#C17C6C] font-medium"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => navigate("/login")}
        className="p-2 hover:bg-[#F9D0CE] rounded-full transition-all duration-200 absolute right-8 top-1/2 transform -translate-y-1/2"
      >
        <FaUser className="text-gray-600 hover:text-gray-800 text-lg" />
      </button>
    </div>
  );
};

export default NavBar;
