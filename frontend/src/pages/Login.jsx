import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  updateUser,
} from "../store/slices/authSlice";
import { authService } from "../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());

      // Get response that includes tokens and user data
      const response = await authService.login(
        formData.email,
        formData.password
      );

      const userData = response.user; // extract user object here

      dispatch(loginSuccess(userData));
      dispatch(updateUser(response.user));
      navigate("/quiz");
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="flex-1 bg-[#FFE4E0] h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900">
            Welcome Back ✨
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-poppins">
            Sign in to continue your skincare journey
          </p>
          {error && (
            <p className="mt-2 text-sm text-red-600 font-poppins">{error}</p>
          )}
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 font-poppins mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins"
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 font-poppins mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins"
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#C17C6C] focus:ring-[#C17C6C] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 font-poppins"
              >
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="font-poppins text-sm text-[#C17C6C] hover:text-[#A66A5B]"
            >
              Forgot password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#C17C6C] hover:bg-[#A66A5B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C17C6C] font-poppins transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="text-center">
            <p className="font-poppins text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-medium text-[#C17C6C] hover:text-[#A66A5B]"
                disabled={loading}
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
