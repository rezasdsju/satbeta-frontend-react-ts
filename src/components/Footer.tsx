// import React from 'react';
import FooterImage from '../assets/sat-banner-2.png'
const Footer = () => {
    return (
        <footer className="bg-slate-900 grid grid-cols-1 sm:grid-cols-12 px-3 sm:px-5 mt-5 pt-3 sm:pt-10 pb-10 sm:pb-20 space-y-4" >
            <div className='mx-auto sm:mx-0 sm:col-span-3'>
                {/* <h2>SAT</h2> */}
                <img src={FooterImage} alt="" className='h-30 mx-auto sm:mx-4' />
                <p className='text-white'>Be a learner and enlighten your soul</p>
            </div>
            <div className='sm:col-span-9 grid grid-cols-2 mx-auto sm:mx-8'>
                <div >
                    <h2 className='text-white  '>Quick Links</h2>
                    <ul className='text-white '>
                        <li>Exam</li>
                        <li>Files</li>
                        <li>Data Analysis</li>
                        <li>Programming</li>
                        <li>Tutorials</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white '>Exam Categories</h2>
                    <ul className='text-white  '>
                        <li>Math</li>
                        <li>Physics</li>
                        <li>Biology</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;