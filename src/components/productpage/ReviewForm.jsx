import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState('');

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onReviewSubmit(review);
    setReview(''); // Clear the text area after review submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='d-flex flex-column'>
        Write your review:
        <textarea classname="container" value={review} onChange={handleInputChange} />
      </h2>
      <button type="submit">Submit Review</button>
    </form>
  );
};

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div >
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      {reviews.length > 0 && (
        <div>
          <h3>Submitted Reviews:</h3>
          {reviews.map((review, index) => (
            <p key={index}>{review}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
