import { useNavigate, useLocation } from "react-router-dom";

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
    <div className="bg-[#EDAA9F] font-poppins">
      <nav className="bg-[#F9D0CE] py-4 px-8 rounded-full shadow-sm max-w-4xl mx-auto my-4">
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
    </div>
  );
};

export default NavBar;
