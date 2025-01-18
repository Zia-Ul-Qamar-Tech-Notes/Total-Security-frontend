const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center">
      <video
        poster="https://d1jxx7l2ar0hzb.cloudfront.net/homepage_video_poster.jpg?v2"
        autoPlay
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d1jxx7l2ar0hzb.cloudfront.net/homepage_video_v4_1080.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          When Safety Matters, We’re Ready.
        </h1>
        <p className="text-lg mb-6">
          Advanced Safety Solutions. Technology. Equipment. Compliance. People.
        </p>
        <div className="space-x-4">
          <button className="bg-gray-800 py-2 px-6 rounded text-white hover:bg-gray-700">
            Get Started
          </button>
          <button className="bg-yellow-500 py-2 px-6 rounded text-white hover:bg-yellow-600">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};
