import React from 'react'
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Briefcase, User } from "lucide-react";
import toast from "react-hot-toast";

const AdminDashboard = () => {

const navigate = useNavigate();
const [reviewCount, setReviewCount] = useState(0);

useEffect(() =>{
    fetch('http://localhost:8081/api/review/count')
        .then(res => res.json())
        .then(data => setReviewCount(data))
        .catch(() => setReviewCount(0));
},[]);

  const DeleteAll = async () => {
    try{
      const res = await fetch("http://localhost:8081/api/review/deleteall",{ method: "DELETE" });
      const message = await res.text();
      toast.success(message);
      setReviews([]);

    }catch(error){
      console.error("Error deleting reviews:", error);
    }
  }

  return (
    <div className="min-h-screen bg-base-200 p-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Income Tracker */}
         <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4">
              <h2 className="card-title">ALL REVIEWS</h2>
            </div>
            <p className="text-9xl font-bold text-success flex justify-center">{reviewCount}</p>
            <p className="text-gray-500 text-sm">
              This week's income is higher than last week's
            </p>
          </div>
        </div>

      {/* Recent Projects */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between mb-4">
            <h2 className="card-title">Manage Reviews</h2>
            {/* <button className="btn btn-ghost btn-xs">See all</button> */}
          </div>

          <div className="space-y-4">
            <div className="card bg-base-100 border shadow-sm">
              <div className="card-body p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-orange-500" /> See All Reviews
                  </h3>
                  <button onClick={() => navigate("/getall")} className="btn btn-ghost btn-xs bg-green-500 text-white hover:bg-green-600">See Reviews</button>
                </div>
                <p className="text-gray-500 text-sm">$10/hour · Remote · Part-time</p>
              </div>
            </div>

            <div className="card bg-base-100 border shadow-sm">
              <div className="card-body p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-500" /> Delete All Reviews
                  </h3>
                  <button className="btn btn-ghost btn-xs bg-red-500 text-white hover:bg-red-600" onClick={DeleteAll}>Delete Reviews</button>
                </div>
                <p className="text-gray-500 text-sm">$10/hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Connect */}
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title mb-4">Add Books</h2>
    <form
      className="space-y-4"
      onSubmit={e => {
        e.preventDefault();
        // Handle submit logic here (e.g., send to backend)
      }}
    >
      {[1, 2, 3, 4].map(num => (
        <div key={num} className="flex items-center gap-3">
          <label className="font-semibold text-gray-700">Book {num}:</label>
          <input
            type="text"
            name={`book${num}`}
            className="input input-bordered w-full"
            placeholder={`Enter Book ${num} Name`}
            // You can add value and onChange for controlled inputs if needed
          />
        </div>
      ))}
      <div className="flex justify-end">
        <button type="submit" className="btn btn-success text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

      {/* Proposal Progress */}
      <div className="card bg-base-100 shadow-xl lg:col-span-2">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title">Proposal Progress</h2>
            <p className="text-sm text-gray-500">April 11, 2024</p>
          </div>
          <p className="text-3xl font-bold">64</p>
          <p className="text-gray-500">Proposals sent</p>
        </div>
      </div>

      {/* Premium Features
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title mb-2">Unlock Premium Features</h2>
          <p className="text-gray-500 mb-4 text-sm">
            Get access to exclusive benefits and expand your freelancing opportunities
          </p>
          <button className="btn btn-primary w-full">
            Upgrade Now <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default AdminDashboard
