import React from 'react';
import { Inter } from 'next/font/google'

const speakers = [
    {name: 'Name 1', role: 'Role', company: 'Comany'},
    {name: 'Name 1', role: 'Role', company: 'Comany'},
    {name: 'Name 1', role: 'Role', company: 'Comany'},
];

const PastSpeakers: React.FC = () => {
    return (
      <section className="bg-black text-white py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Past <span className="text-red-600">Speakers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center border-2 border-gray-700"
              >
                <p className="text-xl font-semibold">{speaker.name}</p>
                <p className="text-sm text-gray-400">{speaker.role}</p>
                <p className="text-sm text-gray-400">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PastSpeakers;