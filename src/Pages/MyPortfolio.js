import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center'>
            <div className='p-9 border-2'>
                <h1 className='text-xl font-bold'>Atish Barua</h1>
                <p>Fornt End Developer
                </p>
                <p>Cell:+8801752619911
                </p>
                <p>email:atishbarua1@gmail.com
                </p>
                <p><a className='text-blue-500' href="https://github.com/ATISH01">GitHub</a></p>
                <h1 className='text-xl mt-4'>SKILLS</h1>
                <p><span className='font-bold'>Expertise:</span> JavaScripts, React, Firebase Authentication, HTML5,CSS3, Tailwind, Bootstrap, REST API

                </p>
                <p><span className='font-bold mr-3'>Comfortable:</span>
                    MongoDB, NodeJS, DaisyUI, ReactBootstrap
                </p>
                <p> <span className='font-bold'>Tools:</span> VS Code,GitHubChorome Dev Tools,HeruKu,netlify,Figma
                </p>
                <h1 className='text-xl mt-4'>Projects</h1>
                <p className='font-bold'>AB Electronics </p>
                <strong>Overview</strong><a className='ml-6 text-blue-500' href="https://ab-electronics-9bf41.web.app/">LiveLink</a>
                <p>It is a warehouse management website of electronics products.
                </p>
                <p>It is a fullstack website implement with server side and data base.
                </p>
                <p>Authentication system is implemented with firebase.
                </p>
                <p>Used react and mongodb.
                </p>
                <p className='font-bold'>Tools-BD </p>
                <strong>Overview</strong> <a lassName='ml-6 text-blue-500' href="https://asignment-12.web.app/">LiveLink</a>
                <p>It's website about hand tools industry and wholesalers.
                </p>
                <p>Admin panel page is implemented with jwt verification.</p>
                <p>It is a fullstack website implement with server side and data base.
                </p>
                <p>Authentication system is implemented with firebase.
                </p>
                <p>Website is implemented with tailwind and daisyUI component.
                </p>
                <p className='font-bold'>Dental Park </p>
                <strong>Overview</strong> <a lassName='ml-6 text-blue-500' href="https://dental-park-808f8.web.app/">LiveLink</a>
                <p>It is a website about dental service.
                </p>
                <p>Simple authentication system with twitter.
                </p>
                <p>Used react and mongodb.
                </p>
                <p>Bootstrap is used.
                </p>
            </div>
        </div>
    );
};

export default MyPortfolio;