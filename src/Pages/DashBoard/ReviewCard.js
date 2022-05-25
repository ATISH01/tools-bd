import React, { useRef, useState } from 'react';
import ReactStars from 'react-rating-stars-component';


const ReviewCard = ({ order }) => {

    const [ratings,setRatings] = useState('');
    
    const { itemName ,_id} = order;
    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };
    const reviewRef=useRef('');
    const reviews=(id)=>{
        const review = reviewRef.current.value;
        console.log( review,ratings,id);
        const data ={
            itemName,review,ratings,id
        }
        const url = 'http://localhost:5000/reviews';
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                
            })

    }
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1>Review our Item</h1>
                    <h2 className="card-title">{itemName}</h2>
                    
                    <input className="input input-bordered rounded-none input-accent w-full max-w-xs" ref={reviewRef} type="text" />
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                        <button onClick={()=>reviews(_id)} className="w-50 btn btn-xs">Submit</button>
                    
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;