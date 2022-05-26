import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const{data: reviews, isLoading}=useQuery('reviews',()=>fetch('https://shrouded-sierra-24769.herokuapp.com/reviews')
    .then(res=>res.json()))
    console.log(reviews);
    if(isLoading){
        return;
    }
    return (
        
            <div>
                <h1 className='underline-offset-1 text-4xl bold text-center font-bold'>Customers Review</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 px-12 mx-auto p-6 ">
                {
                    reviews.map(review=><ReviewCard reviews={review}></ReviewCard>)
                }
            </div>
            </div>
        
    );
};

export default AllReviews;