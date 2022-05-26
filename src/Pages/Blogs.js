import React from 'react';

const Blogs = () => {
    return (
        <div className='p-9'>
            <h1 className='text-2xl '>1.How will you improve the performance of a React Application?</h1>
            <p>By Using axios for fetching and CURD opeaion, using react query we also can improve the funcionality of data fetching.With using react hook from we can take data from user more easily with less code.We can also validate data during taking input.</p>
            <h1 className='text-2xl mt-5'>2.What are the different ways to manage a state in a React application?</h1>
            <p>Different ways to manage a state in a React are Hooks,React Context API,Apollo Link State</p>
            <p>Hooks:Hooks is the predefined functions that which use for to avoid same function repetition.User can make thair customize able hook.</p>
            <p>Context API:It is to way to avoid props drilling and directly share data to the sub child components.</p>
            <p>Apollo Link State:It's used for Managing remote data from an external API is simple with Apollo Client</p>
            <h1 className='text-2xl mt-5'>3.How does prototypical inheritance work?</h1>
            <p>Prototypical inheritance refers to the ability to access object properties from another object.JavaScript is used to prototype and add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
            <h1 className='text-2xl mt-5'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p>If we don not use sate we did not get the value when we need and we cannot update the value we have.So we use state to set a value that we can get time from it.And when need to change we can change the value of state.</p>
            <h1 className='text-2xl mt-5'>5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p>find() method returns the elements from the array which pasess the test.It's doesn't change the original arary.So we need to loop through the array to check each element that if they matches with desire element by find() method.</p>
            <h1 className='text-2xl mt-5'>6.What is a unit test? Why should write unit tests?</h1>
            <p>It is a testing that software developers do, in which they test samll part of function, procedures or interfaces to know that all implementation are working perfectly.</p>
            <p>To make sure that implemented code are working fine developers write unit tests.To detect bugs in future this is most important to write unit tests.Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development </p>
        </div>
    );
};

export default Blogs;