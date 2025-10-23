import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { authService } from "../services/authService";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  console.log("User:", user);
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
        password: "", // Always keep password empty
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess("");
    setError("");

    if (!user || !user.id) {
      setError("User information not available. Please try logging in again.");
      setSaving(false);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      console.log("Token:", token);
      if (!token) {
        setError("Not authenticated. Please log in again.");
        setSaving(false);
        return;
      }

      // Only include fields that have changed
      const data = {};
      if (form.username !== user.username) data.username = form.username;
      if (form.email !== user.email) data.email = form.email;
      if (form.password) data.password = form.password;

      // Don't make the request if nothing has changed
      if (Object.keys(data).length === 0) {
        setSuccess("No changes to save.");
        setSaving(false);
        return;
      }
      console.log("Sending token:", token);
      console.log("Sending data:", data);

      const response = await authService.updateProfile(user.id, data);

      // Update Redux user state with the response data
      dispatch(updateUser(response.data));
      setSuccess("Profile updated successfully!");
      setForm((prev) => ({ ...prev, password: "" })); // Clear password after successful update
    } catch (err) {
      console.error("Update error:", err);
      setError(
        err.response?.data?.detail ||
          "Error updating profile. Please try again."
      );
    }
    setSaving(false);
  };

  return (
    <div className="flex-1 bg-[#FFE4E0] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full">
        <h2 className="font-playfair text-3xl font-bold text-center mb-8 text-[#C17C6C]">
          Profile Settings
        </h2>
        {success && (
          <div className="mb-4 text-center font-poppins text-green-600">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-4 text-center font-poppins text-red-600">
            {error}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSave}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] font-poppins"
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] font-poppins"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#C17C6C] focus:border-[#C17C6C] font-poppins"
              placeholder="Enter new password"
            />
            <p className="text-xs text-gray-400 mt-1 font-poppins">
              Leave blank to keep current password
            </p>
          </div>
          {/* Save Button */}
          <button
            type="submit"
            disabled={saving}
            className={`w-full py-3 px-4 rounded-xl text-white font-poppins font-medium bg-[#C17C6C] hover:bg-[#A66A5B] transition-colors ${
              saving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
