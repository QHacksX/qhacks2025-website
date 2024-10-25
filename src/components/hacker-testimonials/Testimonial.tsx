import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Hackers <span className="text-red-600">Testimonials</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-lg mb-4">“Short quote Lorem ipsum dolor sit amet, consectetur adipiscing elit,”</p>
          <span className="text-gray-400">- Hacker name, YYYY</span>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-lg mb-4">“Short quote Lorem ipsum dolor sit amet, consectetur adipiscing elit,”</p>
          <span className="text-gray-400">- Hacker name, YYYY</span>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-lg mb-4">“Short quote Lorem ipsum dolor sit amet, consectetur adipiscing elit, ”</p>
          <span className="text-gray-400">- Hacker name, YYYY</span>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-lg mb-4">“Short quote Lorem ipsum dolor sit amet, consectetur adipiscing elit,”</p>
          <span className="text-gray-400">- Hacker name, YYYY</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
