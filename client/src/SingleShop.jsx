import React from 'react';

const SingleShop = ({current, addReviewButton}) =>{
  const renderReview = () =>{
    let reviews = current.reviews;
    if(reviews.length !==0){
      return(
        <div>
          {reviews.map( review => (
            <div className="review">
              <div><em>{review.ramen}</em> points: {review.score} </div>
              <div>{review.comment}</div>
            </div>
          ))}
        </div>
      )
    }else{
      return(
        <div>
          No review yet!
        </div>
      )
    }
  }
  return(
    <div>
      <h3>Shop Information</h3>
      <div><span>shop Name: </span> {current.name}</div>
      <div><span>Address: </span> {current.location}</div>
      <button onClick={(e)=>{addReviewButton(e)}}>Add Review!</button>
      <h3> Reviews</h3>
      {renderReview()}

    </div>
  )
}

export default SingleShop;