const NavBar = () => {
  return (
    <nav className="bg-[#F9D0CE] py-4 px-16">
      <ul className="flex justify-center items-center space-x-8">
        {["Home", "Quiz", "Routine", "Products", "About"].map((item) => (
          <li key={item}>
            <span className="text-gray-800 decoration-gray-800 underline hover:no-underline transition-all duration-200 cursor-pointer">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
