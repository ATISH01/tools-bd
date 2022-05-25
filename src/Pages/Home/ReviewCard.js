import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ReviewCard = ({ reviews }) => {
    const { itemName, review, ratings } = reviews;
    console.log(review);
    return (
        <div className="card w-50 bg-base-100 drop-shadow-md hover:drop-shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <p>{review}</p>
                <Rating
                    initialRating={ratings}
                    

                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />
                } 
                    readonly
                >
                  
                </Rating>
            </div>
        </div>
    );
};

export default ReviewCard;