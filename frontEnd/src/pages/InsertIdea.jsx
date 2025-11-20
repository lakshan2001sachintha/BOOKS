import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from 'lucide-react';
import toast from "react-hot-toast";

const InsertIdea = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    bookName: "",
    review: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8081/api/review/save", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include"
      });

      const result = await response.text();
      if(result === "User not Found !"){
        toast.error(result);
      }else{
        toast.success("Successfully added your review ! ",result);
        navigate("/"); // rederect to home page
      }
      
    } catch (error) {
      toast.error("Error submitting review:", error);
      toast.error("Something went wrong!");
    }
    
  };

  return (
    <div>
      {/*NavBar*/}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Library App</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>User Profile</a></li>
            <li><a>LogOut</a></li>
          </ul>
        </div>
      </div>

      {/*Insert Data*/}
      <div className="flex justify-center items-center min-h-screen bg-base-200 p-32 space-x-20">
        
        <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body">
            <Link to={"/"} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4">
              <ArrowLeftIcon className="w-5 h-5" /> Back to Notes
            </Link>
            <h1 className="text-2xl font-bold mb-6">Add Your Review</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label className="block text-sm mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input input-bordered w-full rounded-full bg-base-200 focus:outline-none"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Book Name */}
              <div>
                <label className="block text-sm mb-2">Book Name</label>
                <input
                  type="text"
                  name="bookName"
                  placeholder="Enter book name"
                  className="input input-bordered w-full rounded-full bg-base-200 focus:outline-none"
                  value={formData.bookName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Review */}
              <div>
                <label className="block text-sm mb-2">Review</label>
                <textarea
                  name="review"
                  placeholder="Write your review here..."
                  className="textarea textarea-bordered h-32 w-full rounded-xl bg-base-200 focus:outline-none"
                  value={formData.review}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button type="submit" className="btn bg-green-500 hover:bg-green-600 text-white px-6 rounded-full">
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertIdea;
