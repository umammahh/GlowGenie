const API_URL = "http://localhost:8000/api";

// Helper functions to manage tokens in localStorage
const getAccessToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");
const setTokens = (access, refresh) => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};
const removeTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const authService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.detail) {
          throw new Error(data.detail);
        }
        throw new Error("Login failed");
      }

      // Store both access and refresh tokens
      if (data.access && data.refresh) {
        setTokens(data.access, data.refresh);
      }
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  register: async (username, email, password, password2) => {
    try {
      const response = await fetch(`${API_URL}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, password2 }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific validation errors
        if (data.email) {
          throw new Error(`Email error: ${data.email[0]}`);
        }
        if (data.username) {
          throw new Error(`Username error: ${data.username[0]}`);
        }
        if (data.password) {
          throw new Error(`Password error: ${data.password[0]}`);
        }
        throw new Error(data.detail || "Registration failed");
      }

      return data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  logout: () => {
    removeTokens();
  },

  // Helper function to get headers with auth token
  getAuthHeaders: () => {
    const token = getAccessToken();
    return {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getAccessToken();
  },
  // Add this inside authService
  updateProfile: async (userId, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/user/${userId}/update/`, {
        method: "PUT",
        headers: authService.getAuthHeaders(),
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.detail ||
          data.non_field_errors?.[0] ||
          "Failed to update profile";
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  },

  // Refresh the access token using the refresh token
  refreshToken: async () => {
    const refresh = getRefreshToken();
    if (!refresh) {
      throw new Error("No refresh token available");
    }

    const response = await fetch(`${API_URL}/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh }),
    });

    if (!response.ok) {
      removeTokens();
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    if (data.access) {
      localStorage.setItem("access_token", data.access);
      return data.access;
    }
    throw new Error("No access token in refresh response");
  },
};
