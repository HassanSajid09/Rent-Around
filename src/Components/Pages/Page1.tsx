import QR from "../../assets/QR.png";
import PlayStore from "../../assets/playStore.svg";
import AppStore from "../../assets/appStore.svg";
import Mobile from "../../assets/mobile.png";
const Page1 = () => {
  return (
    <section className="w-full min-h-screen bg-[#303B97] flex items-start justify-between overflow-x-hidden overflow-y-auto px-4 pt-6 lg:pt-20 lg:px-0 lg:pl-6">
      <div className="flex flex-col lg:flex-row w-full mx-auto p-0 gap-0 items-start justify-between lg:p-0">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start text-left gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold  text-white">
            Rent anything <br /> from anyone
          </h1>
          <p className="text-lg md:text-xl font-medium text-white">
            Find everything from properties, activities, services <br />
            and much more — all on one website.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-bold text-white">Get the app</h3>
              <img
                src={QR}
                alt="QR Code"
                className="size-24 p-3.5 rounded-lg bg-white shadow"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-2">
            <img src={PlayStore} alt="Play Store" className="" />
            <img src={AppStore} alt="App Store" className="" />
          </div>
        </div>
        {/* Right Side (Mobile Image) */}
        <div className="flex-1 flex items-start lg:items-center justify-start lg:justify-center pt-6 md:pt-0">
          <img src={Mobile} alt="Mobile" className="size-auto" />
        </div>
      </div>
    </section>
  );
};

export default Page1;
