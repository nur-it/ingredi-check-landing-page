import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/ingredCheckLogo.svg";
import menuIcon from "../../../assets/images/i/Menubar.svg";
import crossIcon from "../../../assets/images/i/times.svg";
import { useState } from "react";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((pre) => !pre);
  };
  return (
    <>
      <nav className="h-[6.4rem] md:h-[8.6rem] bg-white py-[2rem] md:py-[1.6rem]">
        <div className="container">
          <div className="flex items-center justify-between">
            <figure className="w-[10rem] md:w-[13.6rem]">
              <img src={logo} alt="ingrediCheck" className="w-full" />
            </figure>
            {/* Desktop navitems start */}
            <ul className="hidden md:flex items-center gap-[3.3rem] font-inter text-[1.6rem]">
              <li className="nav-links">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-links">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-links">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="">
                <button className="bg-green-light text-white text-[1.6rem] capitalize font-medium rounded-[3.2rem] w-[12.5rem] h-[5.4rem]">
                  Download
                </button>
              </li>
            </ul>
            {/* Desktop navitems end */}
            {/* Mobile navitems start */}
            <div className="inline-block md:hidden" onClick={toggleNav}>
              <img src={navOpen ? crossIcon : menuIcon} alt="Menu" />
            </div>
          </div>
        </div>

        <ul
          className={`absolute top-[6.4rem] z-50 w-full py-[2.4rem] px-[4rem] flex items-start bg-white rounded-b-[1.6rem]  flex-col gap-[4rem] font-inter text-[1.6rem] duration-200 transition-all
          ${navOpen ? "visible opacity-100" : "invisible opacity-0"}
          `}
        >
          <li className="mb-nav-links">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-nav-links">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mb-nav-links">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="w-full">
            <button className="bg-green-light text-white text-[1.6rem] capitalize font-medium rounded-[3.2rem] w-full h-[5.4rem]">
              Download
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
