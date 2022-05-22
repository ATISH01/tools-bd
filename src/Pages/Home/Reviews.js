import React from 'react';

const Reviews = () => {
    return (
        
        <div className='grid lg:grid-cols-3'>
            <div aria-label="cards" class=" bg-white dark:bg-gray-800 shadow rounded">
            <div class="relative">
                <img tabindex="0"  class="focus:outline-none h-56 shadow rounded-t w-full object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png" alt="mountains cover" />
                <div class="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                    <img tabindex="0"  class="focus:outline-none w-full h-full overflow-hidden object-cover rounded" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="person" />
                </div>
            </div>
            <div class="px-5 xl:px-10 pb-10">
                <div class="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                    <div tabindex="0" aria-label="4 stars" role="img" class="focus:outline-none flex items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star"/>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star"/>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star"/>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star"/>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg2.svg" alt="gray star"/>
                    </div>
                </div>
                <div class="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                    <div class="xl:pr-16 w-full xl:w-2/3">
                        <div class="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                          <a tabindex="0" class=" focus:outline-none  text-gray-800 dark:text-gray-100 focus:outline-none">  <h2 class="mb-3 xl:mb-0 xl:mr-4 text-2xl  font-medium tracking-normal">Marshall Mathers</h2></a>
                            <p  tabindex="0" class="focus:outline-none text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">Pro</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">HI, I am a direct response copywriter from the US. When you work with me, we have the same goal. Maximizing your ROI</p>
                    </div>
                    <div class="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                        <div class="mr-6 xl:mr-10">
                            <h2 tabindex="0" class="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">82</h2>
                           <a tabindex="0" class=" focus:outline-none text-gray-800 dark:text-gray-100 "> <p class=" text-sm xl:text-xl leading-5">Reviews</p></a>
                        </div>
                        <div class="mr-6 xl:mr-10">
                            <h2 tabindex="0" class="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">28</h2>
                           <a tabindex="0" class=" focus:outline-none text-gray-800 dark:text-gray-100 "> <p class=" text-sm xl:text-xl leading-5">Projects</p></a>
                        </div>
                        <div>
                            <h2 tabindex="0" class="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">42</h2>
                           <a tabindex="0" class=" focus:outline-none text-gray-800 dark:text-gray-100 "> <p class=" text-sm xl:text-xl leading-5">Approved</p></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
        
    
    );
};

export default Reviews;