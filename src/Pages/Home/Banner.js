import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[72vh]" style={{backgroundImage: `url(https://i.ibb.co/qRkf8tk/banner-tools.png)`}}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center mt-auto text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-yellow-500 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-yellow-300">Choose our product to make easier your life.It's safe and long lasting.</p>
                    <button  className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;