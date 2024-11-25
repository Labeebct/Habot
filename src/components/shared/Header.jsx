import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  //State for managing menu bar
  const [open, setOpen] = useState(false);

  //Useffect for closing the menubar automatically when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868 && open) setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <nav className="w-full h-[5rem] bg-white  relative px-10 flex justify-between">
      <div className="overflow-hidden">
        <img
          className="h-32 m-auto -mt-6"
          src="/assets/habot-logo.jpg"
          alt="habolt-logo"
        />
      </div>

      <div className="flex justify-center items-center">
        <ul className="w-full hidden h-auto md:flex justify-around items-center gap-6">
          <li className="font-poppins text-[.95rem] font-light text-gray-500">
            <Link
              className="hover:border-b ease-linear transition-all duration-300 border-transparent hover:border-black py-1"
              to="/suppliers"
            >
              Find Suppliers
            </Link>
          </li>
          <li className="font-poppins text-[.95rem] font-light text-gray-500">
            <Link
              className="hover:border-b ease-linear transition-all duration-300 border-transparent hover:border-black py-1"
              to="/suppliers"
            >
              Find Service Tags
            </Link>
            <span className="ml-1">
              <KeyboardArrowDownIcon className="text-gray-500 cursor-pointer" />
            </span>
          </li>
          <li>
            <button className="font-bold active:scale-[.98]  ease-linear  border-solid border border-[#00732F] h-12 w-40 bg-opacity-0 hover:bg-opacity-100 duration-200 shadow-box rounded-sm text-sm text-[#00732F] hover:text-white hover:bg-[#00732F]">
              Login / Signup
            </button>
          </li>
        </ul>

        <div className="md:hidden flex">
          <MenuIcon
            sx={{ fontSize: 34 }}
            className={`rounded-full m-auto duration-200 ease-linear transition-all active:scale-[.95] cursor-pointer ${
              open ? "opacity-0" : "opacity-100"
            }`}
            //Changing the state to manage menu
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-[#000000c4] text-white flex flex-col h-[200px] w-full text-[.9rem] z-50 font-poppins justify-center items-center  transition-all duration-300 ease-linear ${
          open ? "top-0" : "top-[-200px]"
        }`}
      >
        <CloseIcon
          sx={{ fontSize: 30 }}
          className="absolute top-6 right-10 rounded-full m-auto duration-200 ease-linear transition-all active:scale-[.95] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        <ul className="flex w-full flex-col items-center">
          <li className="w-[80%] flex justify-center py-3  duration-100 ease-linear cursor-pointer">
            <Link className="hover:text-orange-400" to="/suppliers">
              Find Suppliers
            </Link>
          </li>
          <li className="w-[80%] flex justify-center py-3  duration-100 ease-linear cursor-pointer">
            <Link className="hover:text-orange-400" to="/service-tags">
              Find Service Tags
            </Link>
          </li>
          <li className="w-[80%] flex justify-center py-3  duration-100 ease-linear cursor-pointer">
            <Link className="hover:text-orange-400" to="/login">
              Login / Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
