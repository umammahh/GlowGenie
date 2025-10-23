import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate username
    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }

    // Validate password
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Validate password match
    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await authService.register(
        formData.username,
        formData.email,
        formData.password,
        formData.password2
      );
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      console.error("Registration error:", err);
      // Handle different types of errors
      if (err.message.includes("Email error:")) {
        setErrors((prev) => ({
          ...prev,
          email: err.message.replace("Email error: ", ""),
        }));
      } else if (err.message.includes("Username error:")) {
        setErrors((prev) => ({
          ...prev,
          username: err.message.replace("Username error: ", ""),
        }));
      } else if (err.message.includes("Password error:")) {
        setErrors((prev) => ({
          ...prev,
          password: err.message.replace("Password error: ", ""),
        }));
      } else {
        setErrors((prev) => ({ ...prev, general: err.message }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#FFE4E0] h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900">
            Join GlowGenie ✨
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-poppins">
            Create your account to start your skincare journey
          </p>
          {errors.general && (
            <p className="mt-2 text-sm text-red-600 font-poppins">
              {errors.general}
            </p>
          )}
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 font-poppins mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins`}
                placeholder="Choose a username"
                disabled={loading}
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-600">{errors.username}</p>
              )}
            </div>
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
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins`}
                placeholder="Enter your email"
                disabled={loading}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins`}
                placeholder="Create a password"
                disabled={loading}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700 font-poppins mb-1"
              >
                Confirm Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password2}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.password2 ? "border-red-500" : "border-gray-300"
                } rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] focus:z-10 sm:text-sm font-poppins`}
                placeholder="Confirm your password"
                disabled={loading}
              />
              {errors.password2 && (
                <p className="mt-1 text-xs text-red-600">{errors.password2}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#C17C6C] hover:bg-[#A66A5B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C17C6C] font-poppins transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </div>

          <div className="text-center">
            <p className="font-poppins text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-[#C17C6C] hover:text-[#A66A5B]"
                disabled={loading}
              >
                Sign in
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
