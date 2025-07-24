import NavBar from "../Layout/NavBar";
import Page6 from "../Pages/Page6";
import PlaceHolderImg from "../../assets/placeholderImage.73afc763.png";
import blackLine from "../../assets/blackLine.f3181a2c.svg";
import verified from "../../assets/profileVerified.d10f2ebc.svg";
import verticalLine from "../../assets/lineIcon.ceddf4f8.svg";
import { SearchProvider } from "../Hooks/SearchContext";
import { useAuth } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const profileImg = localStorage.getItem("profileImage");
  const firstName = localStorage.getItem("first name");
  const lastName = localStorage.getItem("last name");
  const { currentUser } = useAuth();
  return (
    <>
      <SearchProvider>
        <NavBar />
        <div className="w-full flex justify-center py-8 px-4">
          <div className="bg-white rounded-lg border shadow-lg p-4 md:p-8 w-full max-w-6xl flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-0 w-full">
              {/* Left: Profile Image and Info */}
              <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start flex-1 py-8 md:py-0">
                <div className="flex flex-col items-center gap-2 md:mr-10">
                  {profileImg ? (
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-36 h-36 rounded-lg object-contain bg-gray-100"
                    />
                  ) : (
                    <img
                      src={PlaceHolderImg}
                      alt="Placeholder"
                      className="w-36 h-36 rounded-lg object-contain bg-gray-100"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center md:items-start gap-2 mt-4 md:mt-0">
                  {firstName && lastName ? (
                    <h2 className="text-4xl font-bold text-gray-800">
                      {firstName} {lastName}
                    </h2>
                  ) : (
                    <h2 className="text-4xl font-bold text-gray-800">
                      {currentUser?.email?.split("@")[0]}
                    </h2>
                  )}
                  <p className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                    Profile Verified
                    <img
                      src={verified}
                      alt="Verified"
                      className="h-6 w-6 inline"
                    />
                  </p>
                  <h6 className="flex items-center gap-2 text-gray-500 font-semibold text-lg">
                    0
                    <img
                      src={blackLine}
                      alt="Line"
                      className="h-4 w-4 inline"
                    />
                    <span>Referrals</span>
                  </h6>
                </div>
              </div>
              {/* Divider for desktop - perfectly centered */}
              <div
                className="hidden md:flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2"
                style={{ minWidth: "80px" }}
              >
                <img
                  src={verticalLine}
                  alt=""
                  className="flex items-center justify-center"
                />
              </div>
              {/* Right: Edit Section */}
              <div className="flex flex-col items-center justify-center w-full md:w-[420px] px-0 md:px-8 py-8 md:py-0">
                <div className="flex flex-col gap-6 w-full">
                  <NavLink
                    to="/profile"
                    className="bg-[#303B97] text-white rounded-md py-3 px-4 text-center font-normal text-lg hover:bg-white hover:text-[#303B97] border hover:border-[#303B97] transition-all delay-75"
                  >
                    My ID's
                  </NavLink>
                  <NavLink
                    to="/edit-profile"
                    className="bg-[#303B97] text-white rounded-md py-3 px-4 text-center font-normal text-lg hover:bg-white hover:text-[#303B97] border hover:border-[#303B97] transition-all delay-75"
                  >
                    Edit Profile
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="bg-[#303B97] text-white rounded-md py-3 px-4 text-center font-normal text-lg hover:bg-white hover:text-[#303B97] border hover:border-[#303B97] transition-all delay-75"
                  >
                    Influencer Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Page6 />
      </SearchProvider>
    </>
  );
};

export default Profile;
