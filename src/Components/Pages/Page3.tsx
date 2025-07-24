const Page3 = () => {
  return (
    <div className="px-2 lg:px-4 overflow-hidden">
      <section className="w-full min-h-[60vh] h-auto bg-[#303B97] flex flex-col items-start justify-center overflow-x-hidden py-0 mx-auto rounded-3xl">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-8 px-4 pt-4 lg:px-8 lg:pt-0">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 py-14 px-8">
            <p className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap text-left w-full">
              Take a video Tour
            </p>
            <h4 className="text-3xl text-white md:text-4xl font-bold flex items-start justify-start w-full md:w-3/4 text-left">
              Watch the video & learn how to become an Influencer to earn money
            </h4>
          </div>
          {/* Right Side (Video) */}
          <div className="flex-1 flex items-center justify-center px-8 pb-10">
            <video
              src="https://ik.imagekit.io/apxxszpa3h/become-a-rentarround-Influencer-and-rarn.mp4?tr=orig"
              controls
              autoFocus
              className="rounded-2xl object-cover mt-6 md:mt-0"
            ></video>
          </div>
        </div>
      </section>
      <section className="w-screen h-auto bg-white flex items-center justify-center px-2 lg:px-4 py-16">
        <h1 className="inline-block text-center text-4xl md:text-8xl font-bold text-[#474646] mt-12 border-b-2 border-[#A29BB2] pb-0 mb-0 mx-auto">
          Rent cars bikes homes <br /> services and much more all in <br /> one
          place.
          <br />
          <br />
        </h1>
      </section>
    </div>
  );
};

export default Page3;
