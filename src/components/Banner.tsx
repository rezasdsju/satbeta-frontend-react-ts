// import React from 'react';
// import BannerImage from '../assets/sat-banner-2.png'
;
// import type React from 'react';
import BannerImage from '../assets/banner-3.png'
// import Features from './Features';

  
const Banner = () => {
   
    return (
        <div className='grid grid-cols-1 sm:grid-cols-12 items-center px-3 sm:px-7 bg-linear-to-br from-blue-200 via-purple-50 to-cyan-100 py-4 sm:py-15 ' >
            <div className='sm:col-span-8 flex flex-col items-center text-center'>
                <h2 className='text-black text-2xl sm:text-4xl '>School of Analytics and Technology</h2>
                <p className='bg-linear-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-center '>Bridge to Efficient Thinking & Advancement</p>
                <div className='w-full  text-justify mt-6 text-blue-900'>
                    <p>The School of Analytics and Technology (SAT) is a premier learning platform dedicated to empowering learners with in-demand skills in programming, data analysis, research, and much more. SAT is designed to provide a seamless and engaging learning experience through a variety of practical tools and resources.</p>
                </div>
                <button onClick={()=>document.getElementById("features")?.scrollIntoView()} className="hidden sm:block btn btn-accent mt-5 px-7"><a href='#features"'>Explore More</a></button>
            </div>
            <div className='sm:col-span-4 sm:ml-6'>
                <img src={BannerImage} alt="" className='h-50 rounded-3xl mx-auto' />

            </div>
        </div>
    );
};

export default Banner;

