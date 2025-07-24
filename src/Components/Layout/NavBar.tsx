import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import bag from "../../assets/bag.svg";
import profile from "../../assets/profile.svg";
import lang from "../../assets/lang.svg";
import SignInPage from "./SignInPage";
import locationBlue from "../../assets/locationBlue.svg";
import globalSearch from "../../assets/globalSearch.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import { useSearch } from "../Hooks/SearchContext";
import { useAuth } from "../../Context/AuthContext";

const NavBar: React.FC = () => {
  const profileImg = localStorage.getItem("profileImage");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const { setSearchQuery } = useSearch();
  const [tempQuery, setTempQuery] = useState<string>("");
  const { currentUser } = useAuth();

  const { logOut } = useAuth();

  const handleLogOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await logOut();
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleAuthModal = () => {
    setShowSignIn(!showSignIn);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchQuery("");
    }
  };

  const handleSearchClick = () => {
    if (tempQuery.trim()) {
      setSearchQuery(tempQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      {/* NavBar Container */}
      <nav className="w-full bg-white shadow-md px-4 py-4 flex flex-col md:flex-row md:items-center">
        {/* Responsive NavBar Layout */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 h-24 md:h-24">
            <img
              src={logo}
              alt="Logo"
              className="size-40 object-contain"
              style={{ height: "7rem", width: "11rem" }}
            />
          </div>
          {/* Navigation Links (center on md+) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex flex-row items-center gap-11">
              <li>
                <NavLink to="/" className="text-black text-lg font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Categories"
                  className="text-black text-lg font-semibold"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Wishlist"
                  className="text-black text-lg font-semibold"
                >
                  Wishlist
                </NavLink>
              </li>
              {currentUser && (
                <li>
                  <NavLink
                    to="/my-listing"
                    className="text-black text-lg font-semibold"
                  >
                    My Listing
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/Promotion"
                  className="text-black text-lg font-semibold"
                >
                  Promotion
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Right Side Icons (always visible) */}
          <div className="flex items-center gap-4">
            <button className="bg-[#303B97] text-white px-3 py-1 rounded-md font-medium hover:bg-white  border hover:border-[#303B97] hover:text-[#303B97] transition-all delay-75">
              Add Listing
            </button>
            <NavLink to="/Cart" className="relative">
              <img src={bag} alt="Cart" className="" />
            </NavLink>
            <img src={lang} alt="Language" className="" />
            <div className="flex items-center justify-between w-28 border border-gray-200 rounded-full px-4 py-2 shadow-lg bg-white cursor-pointer">
              <HiMenuAlt2 className="size-8 cursor-pointer" onClick={toggle} />
              {currentUser ? (
                profileImg ? (
                  <img
                    src={profileImg}
                    alt="User Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={profile}
                    alt="Default Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )
              ) : (
                <img
                  src={profile}
                  alt="Default Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
        {/* Navigation Links (mobile dropdown) */}
        {isOpen && (
          <div className="md:hidden absolute right-4 top-24 border z-50 w-52 bg-white rounded-lg shadow p-4">
            <ul className="flex flex-col gap-2">
              <li className="hover:bg-[#F3F4F6] h-10">
                <NavLink to="/" className="text-gray-700 font-normal px-2">
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-[#F3F4F6] h-10">
                <NavLink
                  to="/Categories"
                  className="text-gray-700 font-normal px-2"
                >
                  Categories
                </NavLink>
              </li>
              <li className="hover:bg-[#F3F4F6] h-10">
                <NavLink
                  to="/Wishlist"
                  className="text-gray-700 font-normal px-2"
                >
                  Wishlist
                </NavLink>
              </li>
              {currentUser && (
                <li className="hover:bg-[#F3F4F6] h-10">
                  <NavLink
                    to="/my-listing"
                    className="text-gray-700 font-normal px-2"
                  >
                    My Listing
                  </NavLink>
                </li>
              )}
              <li className="hover:bg-[#F3F4F6] h-10">
                <NavLink
                  to="/Promotion"
                  className="text-gray-700 font-normal px-2"
                >
                  Promotion
                </NavLink>
              </li>
              {/* Only show login/register or profile/dashboard/logout, not both */}
              {!currentUser ? (
                <>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/Promotion"
                      className="text-gray-700 font-normal px-2"
                    >
                      Promotion
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/"
                      onClick={toggleAuthModal}
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Login/Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/profile"
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/dashboard"
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/"
                      onClick={handleLogOut}
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      LogOut
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
        {/* Dropdown for profile/menu (desktop only) */}
        {isOpen && (
          <div className="hidden md:block absolute right-4 top-24 border z-50 w-52 bg-white rounded-lg shadow p-4">
            <ul className="flex flex-col gap-2">
              {!currentUser ? (
                <>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/dashboard"
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/"
                      onClick={toggleAuthModal}
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Login/Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/profile"
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/dashboard"
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#F3F4F6] h-10">
                    <NavLink
                      to="/"
                      onClick={handleLogOut}
                      className="block py-1 px-2 text-gray-700 font-normal"
                    >
                      LogOut
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
      {/* Search Bar */}
      <div className="flex justify-center pb-14 bg-white">
        <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-3 border w-full max-w-2xl">
          <img src={locationBlue} alt="Location" className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search Product By Location"
            className="flex-1 px-2 py-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <span className="text-gray-300 text-xl">|</span>
          <input
            type="text"
            placeholder="Search Product or Service"
            className="flex-1 px-2 py-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            value={tempQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <img
            src={globalSearch}
            alt="Search"
            className={`size-10 cursor-pointer transition-opacity ${
              tempQuery.trim() ? "opacity-100" : "opacity-40"
            }`}
            onClick={handleSearchClick}
          />
        </div>
      </div>
      {showSignIn && (
        <SignInPage showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      )}
    </>
  );
};

export default NavBar;
