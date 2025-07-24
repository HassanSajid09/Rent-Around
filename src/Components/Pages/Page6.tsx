import { FaSquareInstagram } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { SiFacebook } from "react-icons/si";
import bottomlogo from "../../assets/bottomlogo.svg";
import playStore from "../../assets/playStore.svg";
import appStore from "../../assets/appStore.svg";
import { NavLink } from "react-router-dom";
const Page6 = () => {
  return (
    <footer className="w-full bg-[#F4F4F9] py-12 px-4">
      <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4">
          <img
            src={bottomlogo}
            alt="Rentaround Logo"
            className="h-20 w-auto mb-2"
          />
          <p className="text-sm font-medium text-[#494949]">
            From homes to help—everything's here.
            <br />
            Discover a wide range of rentals—
            <br />
            from experiences and activities to properties and services—all at
            your fingertips on Rentaround.
          </p>
          <p className="text-sm font-semibold mt-2">
            <span className="text-[#303B97]">© Rent Around</span>{" "}
            <span className="font-semibold text-sm text-black">
              All Rights Reserved
            </span>
          </p>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium mb-2">Information</h5>
          <ul className="space-y-1">
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium mb-2">Categories</h5>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className="text-sm font-medium text-[#494949] hover:text-[#303B97]"
              >
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                Machines/Tools
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-sm font-medium  text-[#494949] hover:text-[#303B97]">
                Vehicle's
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="  font-semibold text-[#303B97]"
              >
                Explore more
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium mb-2">Social Media</h5>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#303B97] text-sm underline font-semibold"
              >
                <SiFacebook className="text-xl" /> Facebook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#303B97] text-sm underline font-semibold"
              >
                <FaSquareInstagram className="text-xl" /> Instagram
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#303B97] text-sm underline font-semibold"
              >
                <TbBrandLinkedinFilled className="text-xl" /> LinkedIn
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <img src={playStore} alt="Google Play" className="h-10 w-auto" />
            <img src={appStore} alt="App Store" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Page6;
