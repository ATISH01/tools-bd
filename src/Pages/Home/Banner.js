import React from 'react';

const Banner = () => {
    return (
        <div class="hero h-[72vh]" style={{backgroundImage: `url(https://i.ibb.co/qRkf8tk/banner-tools.png)`}}>
            <div class="hero-overlay bg-opacity-20"></div>
            <div class="hero-content text-center mt-auto text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-yellow-500 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5 text-yellow-300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button  class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;