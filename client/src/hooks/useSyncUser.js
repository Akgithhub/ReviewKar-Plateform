import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux/slices/userSlice";
import axios from "axios";

const useSyncUser = () => {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const dispatch = useDispatch();
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState(null);
  const api = "http://localhost:3001/api/syncuser/user-synced";

  useEffect(() => {
    const sync = async () => {
      if (!isSignedIn || !user) {
        return;
      }

      setIsSyncing(true);
      setError(null);

      try {
        const token = await getToken({ template: "ReviewKartoken" });
        console.log("Token retrieved:", token ? "Successfully" : "Failed");
        console.log("User: ", user);

        if (!token) {
          throw new Error("Failed to retrieve authentication token");
        }

        const payload = {
          clerkId: user.id, // 📦 Send the Clerk ID in the body
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          imageUrl: user.imageUrl,
          role: 'user', // You can adjust role if needed
        };

        const res = await axios.post(
          api,
          {
            clerkId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            imageUrl: user.imageUrl,
            role: "user",
            token: token, // Include the token in the payload if needed
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // (Optional) if you want to send cookies
          }
        );

        console.log("Response from server:", res.data);

        // Optionally, you can update Redux with what backend returns
        dispatch(setUser(res.data.user));
        dispatch(setToken(token));
        setIsSyncing(false);

      } catch (error) {
        console.error("Error during sync:", error);
        setError(error.message);
        setIsSyncing(false);
      }
    };

    sync();
  }, [isSignedIn, user, dispatch, getToken]);

  return { isSyncing, error };
};

export default useSyncUser;
