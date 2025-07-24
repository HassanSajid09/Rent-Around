import { useState } from "react";

const Page4 = () => {
  const [activeTab, setActiveTab] = useState("Buyers");
  const [, setButton] = useState("Buyers");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    setButton(tab);
  };
  return (
    <section className="w-full h-auto bg-[#303B97] flex flex-col items-center justify-center py-8">
      <div className="w-full mx-auto px-4 flex flex-col items-center md:py-0">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-3 mt-4 text-center">
          How it works
        </h1>
        <div className="flex gap-4 mb-8">
          <button
            className={`px-11 md:px-13 py-4 rounded-full font-semibold text-lg shadow transition border-2  focus:outline-none ${
              activeTab === "Buyers"
                ? "bg-white text-black "
                : " text-white border-white"
            }`}
            id="Buy"
            onClick={() => handleClick("Buyers")}
          >
            For Buyers
          </button>
          <button
            className={`px-11 md:px-13 py-4 rounded-full font-semibold text-lg shadow transition border border-white focus:outline-none ${
              activeTab === "Sellers"
                ? "bg-white text-black border-blue-700"
                : "text-white border-white"
            }`}
            id="sell"
            onClick={() => handleClick("Sellers")}
          >
            For Sellers
          </button>
        </div>
          {/* Buyers Tab */}
          {activeTab === "Buyers" && (
            <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-6">
              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  1
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  Browse with <br /> Confidence
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Explore verified listings from trusted <br /> members
                </p>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  2
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  Seamless Booking
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Easily message owners and secure the <br /> perfect rental.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  3
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  Enjoy & Return
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Experience your rental and return it when <br /> you're done,
                  hassle-free.
                </p>
              </div>
            </div>
          )}
          {/* Sellers Tab */}
          {activeTab === "Sellers" && (
            <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-6">
              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  1
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  List it Fast
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Upload your items, and let people find <br /> what they need.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  2
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  Manage Effortlessly
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Approve rentals and coordinate directly <br /> in-app.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-6 pb-2 md:pb-6 w-full md:max-w-[32%]">
                <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-1">
                  3
                </h1>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
                  Earn Smart
                </h4>
                <p className="text-white text-center text-lg md:text-xl font-medium">
                  Turn your idle items into a side hustle, right <br /> from
                  your home.
                </p>
              </div>
            </div>
          )}
        </div>
    </section>
  );
};

export default Page4;
