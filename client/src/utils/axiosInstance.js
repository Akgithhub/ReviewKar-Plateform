// src/utils/axiosInstance.js
import axios from "axios";
import { Clerk } from "@clerk/clerk-js";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
});

// Attach token before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
    await clerk.load(); // Load the user session
    const token = await clerk.session?.getToken({ template: "ReviewKartoken" });

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
