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
      <h1 className="text-3xl font-bold mb-6">Reviews for {bookName}</h1>

      {reviews.length === 0 ? (
        // <p>No reviews yet.</p>
        <ReviewsNotFound/>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            // <div key={review.id} className="p-4 border rounded-lg shadow">
            //   <h2 className="font-semibold">{review.username}</h2>
            //   <p className="text-gray-700">{review.review}</p>
            // </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 px-44">  
             <div
                key={review.id}
                className="card card-side bg-base-100 rounded-xl p-4 shadow-[0_4px_1px_0_rgba(34,197,94,1)]"
                >
                <div className="card-body bg-gradient-to-r from-base-100 via-base-200 to-base-100">
                    <h2 className="card-title">{review.username}</h2>
                    <p>{review.review}</p>
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
