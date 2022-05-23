import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const{data: reviews, isLoading}=useQuery('reviews',()=>fetch('http://localhost:5000/reviews')
    .then(res=>res.json()))
    console.log(reviews);
    if(isLoading){
        return;
    }
    return (
        
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 px-12 mx-auto p-6">
                {
                    reviews.map(review=><ReviewCard reviews={review}></ReviewCard>)
                }
            </div>
        
    );
};

export default AllReviews;