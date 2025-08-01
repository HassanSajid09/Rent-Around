import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import bag from "../../assets/bag.svg";
import profile from "../../assets/profile.svg";
import lang from "../../assets/lang.svg";
import locationBlue from "../../assets/locationBlue.svg";
import globalSearch from "../../assets/globalSearch.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import SignInPage from "./SignInPage";
import { useSearch } from "../Hooks/SearchContext";
import { useAuth } from "../../Context/AuthContext";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [tempQuery, setTempQuery] = useState("");

  const { currentUser, logOut } = useAuth();
  const profileImg = localStorage.getItem("profileImage");
  const { setSearchQuery } = useSearch();

  const toggle = () => setIsOpen(!isOpen);
  const toggleAuthModal = () => {
    setShowSignIn(!showSignIn);
    setIsOpen(false);
  };

  const handleLogOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await logOut();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTempQuery(value);
    if (value.trim() === "") setSearchQuery("");
  };

  const handleSearchClick = () => {
    if (tempQuery.trim()) setSearchQuery(tempQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearchClick();
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md px-4 py-4 flex flex-col md:flex-row md:items-center">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 h-20 mr-2 sm:mr-6">
            <img
              src={logo}
              alt="Logo"
              className="object-contain size-28 md:size-48"
              style={{ height: undefined, width: undefined }}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-11 text-lg font-semibold text-black">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/Wishlist">Wishlist</NavLink>
              </li>
              {currentUser && (
                <li>
                  <NavLink to="/my-listing">My Listing</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/Promotion">Promotion</NavLink>
              </li>
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-1 sm:gap-4 flex-nowrap w-auto min-w-0">
            {/* Add Listing Button */}
            <button className="bg-[#303B97] text-white px-1 py-1 sm:px-3 sm:py-2 rounded-md font-medium hover:bg-white border hover:border-[#303B97] hover:text-[#303B97] transition-all flex-shrink-0 self-center text-xs sm:text-base min-w-0">
              Add Listing
            </button>

            {/* Cart Icon */}
            <NavLink
              to="/Cart"
              className="flex items-center justify-center flex-shrink-0 self-center min-w-0"
            >
              <img
                src={bag}
                alt="Cart"
                className="h-5 w-5 sm:h-6 sm:w-6 min-w-0"
              />
            </NavLink>

            {/* Language Icon */}
            <div className="flex items-center justify-center flex-shrink-0 self-center min-w-0">
              <img
                src={lang}
                alt="Language"
                className="h-5 w-5 sm:h-6 sm:w-6 min-w-0"
              />
            </div>

            {/* Profile + Menu */}
            {/* On small screens, show only menu icon. On larger screens, show menu icon and profile image in a row. */}
            <div className="flex items-center flex-shrink-0 self-center min-w-0">
              <HiMenuAlt2
                className="size-5 sm:size-7 min-w-0 block sm:hidden"
                onClick={toggle}
              />
              <div className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 shadow bg-white cursor-pointer">
                <HiMenuAlt2 className="size-7 min-w-0" onClick={toggle} />
                <img
                  src={currentUser ? profileImg || profile : profile}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover min-w-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute right-4 top-24 border z-50 w-52 bg-white rounded-lg shadow p-4">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/" className="hover:bg-[#F3F4F6] block px-2 py-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Categories"
                  className="hover:bg-[#F3F4F6] block px-2 py-2"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Wishlist"
                  className="hover:bg-[#F3F4F6] block px-2 py-2"
                >
                  Wishlist
                </NavLink>
              </li>
              {currentUser && (
                <li>
                  <NavLink
                    to="/my-listing"
                    className="hover:bg-[#F3F4F6] block px-2 py-2"
                  >
                    My Listing
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/Promotion"
                  className="hover:bg-[#F3F4F6] block px-2 py-2"
                >
                  Promotion
                </NavLink>
              </li>
              {!currentUser ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      onClick={toggleAuthModal}
                      className="hover:bg-[#F3F4F6] block px-2 py-2"
                    >
                      Login/Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/profile"
                      className="hover:bg-[#F3F4F6] block px-2 py-2"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="hover:bg-[#F3F4F6] block px-2 py-2"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={handleLogOut}
                      className="hover:bg-[#F3F4F6] block px-2 py-2"
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
      <div className="flex justify-center pb-14 bg-white px-4">
        <div className="flex sm:flex-row items-center gap-2 bg-white rounded-full shadow-lg px-4 py-3 border w-screen sm:w-auto">
          <div className="flex items-center w-full sm:w-auto gap-2">
            <img src={locationBlue} alt="Location" className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search Product By Location"
              className="flex-1 px-2 py-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent w-full"
            />
          </div>

          <span className="hidden sm:inline text-gray-300 text-xl">|</span>

          <div className="flex items-center w-full sm:w-auto gap-2">
            <input
              type="text"
              placeholder="Search Product or Service"
              className="flex-1 px-2 py-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent w-full"
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
      </div>

      {showSignIn && (
        <SignInPage showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      )}
    </>
  );
};

export default NavBar;
