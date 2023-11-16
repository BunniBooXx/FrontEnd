import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {/* Background Image */}
      <img
        className="max-w-full max-h-full object-contain"
        src="/center_image.jpg"
        alt="Background"
      />
    </div>
  );
};

export default Home;
