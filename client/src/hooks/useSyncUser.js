import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import axios from "axios";
import { setToken } from "../redux/slices/userSlice";

const useSyncUser = () => {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const dispatch = useDispatch();
  const api = "http://localhost:3001/api/syncuser/user-synced"

  useEffect(() => {
    const sync = async () => {
      if (isSignedIn && user) {
        const token = await getToken({ template: "ReviewKartoken" });
        console.log("Token: ", token); // ⬅️ Log the token for debugging
        console.log("User: ", user); // ⬅️ Log the user for debugging
        dispatch(setToken(token)); // ⬅️ Store token in Redux
        try {
          await axios.post(
            // `${import.meta.env.VITE_API_URL}/api/syncuser`,
            api,
            {}, // No body needed
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true, // For Cookies
            }
          );

          // Optionally: set user in Redux after syncing
          dispatch(setUser({
            clerkId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            imageUrl: user.imageUrl,
            role: 'user',
          }));

          console.log("✅ Synced & stored user in Redux");
        } catch (err) {
          console.error("❌ Error syncing user:", err);
        }
      }
    };

    sync();
  }, [isSignedIn, user]);
};

export default useSyncUser;
