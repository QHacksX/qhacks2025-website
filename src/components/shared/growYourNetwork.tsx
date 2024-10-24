import React from 'react';
import { Inter } from 'next/font/google'

const GrowYourNetwork: React.FC = () => {
    return (
        <section className='text-white p-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <h2 className='text-3xl font-bold'>
                            Grow Your <span className='text-red-600'>Network</span>
                        </h2>
                        <p className='mt-4 text-lg leading-relaxed'>
                            With hundreds of talented, ambitous, and like-minded individuals all in one place, QHacks is the perfect playground for any tech enthusiast! Over the weekend, immerse yourself in the community, meet new people and talk shop with other students and companies.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>
                            Showcase To <span className='text-red-600'>Experts</span>
                        </h2>
                        <p className='mt-4 text-lg leading-relaex'>
                            This year, we&#39;re bringing together a diverse group of mentors, speakers, sponsors and other industry professionals, Chat one-on-one, learn about current tech trends and opportunities
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowYourNetwork