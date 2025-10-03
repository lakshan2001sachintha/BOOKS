import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsNotFound from "../components/ReviewsNotFound";
import toast from "react-hot-toast";


const AdminAllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8081/api/review/getall`)   // backend API
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

      const DeleteUserReview = async (id) => {
        try {
          const res = await fetch(`http://localhost:8081/api/review/delete/${id}`, { method: "DELETE" });
          const message = await res.text();
          toast.success(message);
          setReviews(reviews.filter(r => r.id !== id)); // Remove deleted review from state
        } catch (error) {
          console.error("Error deleting review:", error);
        }
      };
  

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
      <p className="text-3xl font-bold mb-6 p-2 rounded flex items-center justify-center">User Reviews</p>
      {reviews.length === 0 ? (
        <ReviewsNotFound />
      ) : (
        <div className="grid grid-cols-1 p-16 md:grid-cols-2 gap-8 px-44">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card card-side bg-base-100 rounded-xl p-4 shadow-[0_4px_1px_0_rgba(34,197,94,1)]"
            >
              <div className="card-body bg-gradient-to-r from-base-100 via-base-200 to-base-100">
                 <p className="text-2xl font-bold mb-6 text-green-500">{review.username}</p>
                <h2 className="card-title ">Reviews for : {review.bookName}</h2>
                <div className="max-w-full max-h-48 overflow-y-auto overflow-x-hidden">
                <p className="whitespace-pre-line break-all text-yellow-200">
                  {review.review}
                </p>
                </div>
              </div>
               <div className="py-4">
                   <button onClick={() => DeleteUserReview(review.id)} className="btn btn-ghost btn-xs bg-red-500 text-white hover:bg-red-600">Delete</button>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllReviews;

//  <div key={review.id} className="card card-side bg-base-100 rounded-xl p-4 shadow-[0_4px_1px_0_rgba(34,197,94,1)]">
//     <div className="card-body">
//       <h2 className="card-title">{review.username}</h2>
//       <p>{review.review}</p>
//     </div>
//   </div> 
