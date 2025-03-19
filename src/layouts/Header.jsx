import { useState } from "react";
import "../assets/CSS/goldenEffect.css";
import "../assets/CSS/greenEffect.css";
import Button from "./components/Button";
const Header = () => {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menus = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="w-full flex justify-between items-center bg-black/[0.6]  backdrop-blur-sm fixed top-0  p-4 z-50">
      <div className="w-full flex justify-between items-center">
        <div className="w-[200px] flex flex-col items-center">
          <img
            width={60}
            height={60}
            src="./src/assets/logo5.png"
            alt=""
            srcset=""
          />
          {/* <h1 className="flex flex-col cursor-pointer text-lg font-semibold golden-text">
          Dynamo Chess
        </h1> */}
        </div>

        <div className="hidden container lg:flex justify-center  space-x-8">
          {menus.map((menu) => (
            <div
              key={menu}
              className="relative cursor-pointer text-lg font-semibold golden-text transition duration-300"
              onClick={() => setActive(menu)}
              onMouseEnter={() => setHovered(menu)}
              onMouseLeave={() => setHovered(null)}
            >
              {menu}

              {/* Green Gradient Underline */}
              <div
                className={`absolute left-0 bottom-0 w-full h-[2px] rounded-md transition-all duration-300 ${
                  active === menu || hovered === menu
                    ? "bg-gradient-to-r from-[#8b8000] from-10%  via-[#ffd277] via-60%  to-[#8b8000] scale-100"
                    : "scale-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-[200px] mr-6">
          <Button />
          <button
            className="relative flex flex-col items-center lg:hidden  gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Top Sword (→) */}

            <img
              className=" w-[20px] h-[20px] rotate-90"
              src="./src/assets/sword.png"
              alt=""
            />

            {/* Middle Sword (←) - Disappears When Open */}

            <img
              className=" w-[10px] h-[10px] -rotate-90"
              src="./src/assets/sword.png"
              alt=""
            />

            {/* Bottom Sword (→) */}

            <img
              className=" w-[10px] h-[10px] rotate-90"
              src="./src/assets/sword.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
