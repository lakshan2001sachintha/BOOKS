import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from 'lucide-react';
import axios from 'axios';
import toast from "react-hot-toast";
import SignImg from '../images/signup.png'

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.password.length < 6){
      toast.error("Password must be at least 6 characters!");
      return;
    }

    try{
         const response = await axios.post('http://localhost:8081/api/user/signup',formData);

         const message = response.data; // backend returns message directly

         if(message === "Username already exists!"){
             toast.error("Username already exists!");
         }else{
             toast.success("User registered successfully!");
             navigate("/login") // rederect to login page
         }

    }catch(error){
      console.error('SignUp error:', error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-base-200 p-32 space-x-24">
      <img src={SignImg}/>
      <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-2xl">
        <div className="card-body">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4">
            <ArrowLeftIcon className="w-5 h-5" /> Back to Notes
          </Link>
          <h1 className="text-2xl font-bold mb-6">SignUp</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {['username', 'email', 'password', 'phoneNumber'].map((field) => (
              <div key={field}>
                <label className="block text-sm mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  className="input input-bordered w-full rounded-full bg-base-200 focus:outline-none"
                  value={formData[field]}
                  onChange={handleChange} required
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

export default SignUp;
