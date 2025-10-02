import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsNotFound from "../components/ReviewsNotFound";


const Reviews = () => {
  const { bookName } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8081/api/review/get/${bookName}`)   // backend API
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, [bookName]);

  if (loading)
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <div className="w-20 h-20 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-center text-3xl font-semibold text-gray-700">
        Loading reviews...
      </p>
    </div>
  );


  return (
    <div className="p-10">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-6 ">{bookName} -</h1><h1 className="text-3xl"> Reviews </h1>
      </div>
      {reviews.length === 0 ? (
        // <p>No reviews yet.</p>
        <ReviewsNotFound/>
      ) : (
        <div className="grid grid-cols-1 p-16 md:grid-cols-2 gap-8 px-44">
          {reviews.map((review) => (
// ...existing code...
      <div
        key={review.id}
        className="card card-side bg-base-100 rounded-xl p-4 shadow-[0_4px_1px_0_rgba(34,197,94,1)]"
      >
        <div className="card-body bg-gradient-to-r from-base-100 via-base-200 to-base-100">
          <p className="text-2xl font-bold mb-2 text-green-500">{review.username}</p>
          <h2 className="card-title mb-2">Reviews for : {review.bookName}</h2>
          {/* wrap long text, preserve line breaks, and add a max height with scroll */}
          <div className="max-w-full max-h-48 overflow-y-auto overflow-x-hidden">
          <p className="whitespace-pre-line break-all text-yellow-200">
            {review.review}
          </p>
          </div>

        </div>
      </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;

//  <div key={review.id} className="card card-side bg-base-100 rounded-xl p-4 shadow-[0_4px_1px_0_rgba(34,197,94,1)]">
//     <div className="card-body">
//       <h2 className="card-title">{review.username}</h2>
//       <p>{review.review}</p>
//     </div>
//   </div> 
