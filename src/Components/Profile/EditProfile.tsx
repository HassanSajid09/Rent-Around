import React, { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import Page6 from "../Pages/Page6";
import { TbCameraPlus } from "react-icons/tb";
import { SearchProvider } from "../Hooks/SearchContext";

export interface Data {
  firstname: string;
  lastname: string;
  image: string;
}

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("first name") || "",
    lastName: localStorage.getItem("last name") || "",
    dob: "",
    gender: "Male",
    phoneNumber: "",
    bio: "",
  });

  const [image, setImage] = useState<string | null>(
    localStorage.getItem("profileImage")
  );

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    const storedFirstName = localStorage.getItem("first name");
    const storedLastName = localStorage.getItem("last name");

    if (storedImage) setImage(storedImage);
    if (storedFirstName || storedLastName) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: storedFirstName || "",
        lastName: storedLastName || "",
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.phoneNumber.length > 0) {
      const err = document.getElementById("err");
      if (err) {
        err.innerHTML = "";
      }
    } else {
      const err = document.getElementById("err");
      if (err) {
        err.innerHTML = "Phone Number is Required";
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem("first name", formData.firstName);
    localStorage.setItem("last name", formData.lastName);
    if (image) localStorage.setItem("profileImage", image);
    if (formData.phoneNumber.length === 0) {
      const err = document.getElementById("err");
      if (err) {
        err.innerHTML = "Phone Number is Required";
      }
    } else {
      const err = document.getElementById("err");
      if (err) {
        err.innerHTML = "";
      }
    }
  };
  return (
    <>
      <SearchProvider>
        <NavBar />
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center px-2 md:px-8 min-h-screen">
          {/* Left: Profile Image and Save Button */}
          <div className="bg-white rounded-xl border p-6 flex flex-col items-center w-full max-w-xs md:max-w-xl mx-auto md:mx-0 md:w-[420px] mb-8 md:mb-0">
            <label
              htmlFor="imageInput"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              {image ? (
                <img
                  src={localStorage.profileImage}
                  alt="Profile"
                  className="size-44 rounded-full object-cover border border-gray-200 mb-4"
                />
              ) : (
                <div className="w-48 h-48 rounded-full border border-gray-300 flex items-center justify-center mb-6">
                  <TbCameraPlus className="text-5xl text-[#303B97]" />
                </div>
              )}
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              className="w-full bg-[#253893] hover:bg-white hover:text-[#303B97] border border-[#253893] hover:border-[#303B97] transition-all delay-75 text-white font-semibold py-3 rounded-md mt-4 text-lg"
              onClick={saveData}
            >
              Save Profile
            </button>
          </div>
          {/* Right: Form Fields */}
          <form
            className="flex-1 flex flex-wrap gap-x-6 gap-y-6 bg-transparent rounded-md p-6 w-full max-w-4xl"
            autoComplete="off"
          >
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">Gender</label>
              <select
                className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">Phone Number</label>
              <div className="flex items-center">
                <span className="px-4 py-2 border rounded-l-md font-semibold text-gray-700">
                  +92
                </span>
                <input
                  type="number"
                  className="border border-gray-300 rounded-r-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 w-full"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  style={{ marginBottom: 0, position: "static" }}
                />
              </div>
              <p id="err" className="text-red-500 text-sm mt-1"></p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="font-medium text-gray-700">Bio</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
            </div>
          </form>
        </div>
        <Page6 />
      </SearchProvider>
    </>
  );
};

export default EditProfile;
