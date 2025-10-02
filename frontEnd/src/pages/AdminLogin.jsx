import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import LoginImg from '../images/login.png'

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/admin/login', formData);
      
      const message = response.data; // backend returns messages directly
      
      if (message === "Login successful!") {
        toast.success(message);
        navigate("/indata"); // redirect to homepage
      } else if (message === "Invalid password!") {
        toast.error("Invalid password. Please try again.");
      } else if (message === "User not found!") {
        toast.error("User not found. Please check your username.");
      } else {
        toast.error("Something went wrong!");
      }

    } catch (error) {
      console.error('Login error:', error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-base-200 p-32 space-x-24">
      <img src={LoginImg}/>
      <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-2xl">
        <div className="card-body">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4">
            <ArrowLeftIcon className="w-5 h-5" /> Back to Notes
          </Link>
          <p className="text-2xl font-bold mb-6 border border-red-600 p-2 rounded flex items-center justify-center">ADMIN LOGIN</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {['username', 'password'].map((field) => (
              <div key={field}>
                <label className="block text-sm mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  className="input input-bordered w-full rounded-full bg-base-200 focus:outline-none"
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="flex justify-end">
              <button type="submit" className="btn bg-green-500 hover:bg-green-600 text-white px-6 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
