import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Reviews state
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  // Books state
  const [books, setBooks] = useState({
    bookName1: "",
    bookName2: "",
    bookName3: "",
    bookName4: ""
  });

  // Handle book input change
  const handleChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  // Submit books to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/book/save", books);
      toast.success("Books saved successfully!");
      setBooks({ bookName1: "", bookName2: "", bookName3: "", bookName4: "" });
    } catch (err) {
      console.error(err);
      toast.error("Error saving books!");
    }
  };

  // Delete all books from backend
  const handleDeleteAllBooks = async () => {
    if (!window.confirm("Are you sure you want to delete all books?")) return;
    try {
      await axios.delete("http://localhost:8081/api/book/delete"); // Your delete endpoint
      toast.success("All books deleted successfully!");
      setBooks({ bookName1: "", bookName2: "", bookName3: "", bookName4: "" });
    } catch (err) {
      console.error(err);
      toast.error("Error deleting all books!");
    }
  };

  // Fetch review count
  useEffect(() => {
    fetch("http://localhost:8081/api/review/count")
      .then((res) => res.json())
      .then((data) => setReviewCount(data))
      .catch(() => setReviewCount(0));
  }, []);

  // Delete all reviews
  const handleDeleteAllReviews = async () => {
    if (!window.confirm("Are you sure you want to delete all reviews?")) return;
    try {
      await fetch("http://localhost:8081/api/review/deleteall", { method: "DELETE" });
      toast.success("All reviews deleted!");
      setReviews([]);
      setReviewCount(0);
    } catch (err) {
      console.error("Error deleting reviews:", err);
      toast.error("Error deleting reviews!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Reviews Overview */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">ALL REVIEWS</h2>
          <p className="text-9xl font-bold text-success flex justify-center">{reviewCount}</p>
          <p className="text-gray-500 text-sm">
            This week's income is higher than last week's
          </p>
        </div>
      </div>

      {/* Manage Reviews */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Manage Reviews</h2>

          <div className="space-y-4">
            <div className="card bg-base-100 border shadow-sm">
              <div className="card-body flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-orange-500" /> See All Reviews
                </h3>
                <button
                  onClick={() => navigate("/getall")}
                  className="btn btn-ghost btn-xs bg-green-500 text-white hover:bg-green-600"
                >
                  See Reviews
                </button>
              </div>
            </div>

            <div className="card bg-base-100 border shadow-sm">
              <div className="card-body flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-500" /> Delete All Reviews
                </h3>
                <button
                  className="btn btn-ghost btn-xs bg-red-500 text-white hover:bg-red-600"
                  onClick={handleDeleteAllReviews}
                >
                  Delete Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Books */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Add Books</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center gap-3">
                <label className="font-semibold text-gray-700">Book {num}:</label>
                <input
                  type="text"
                  name={`bookName${num}`}
                  value={books[`bookName${num}`]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder={`Enter Book ${num} Name`}
                  required
                />
              </div>
            ))}

            <div className="flex justify-end gap-3">
              {/* Delete all books */}
              <button
                type="button"
                className="btn btn-error text-white"
                onClick={handleDeleteAllBooks}
              >
                Clear Books
              </button>

              {/* Submit books */}
              <button type="submit" className="btn btn-success text-white">
                Submit Books
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Proposal Progress */}
      <div className="card bg-base-100 shadow-xl lg:col-span-2">
        <div className="card-body">
          <h2 className="card-title">Proposal Progress</h2>
          <p className="text-3xl font-bold">64</p>
          <p className="text-gray-500">Proposals sent</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
