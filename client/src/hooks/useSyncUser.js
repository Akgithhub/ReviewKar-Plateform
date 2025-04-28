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
        // 1. Get authentication token from Clerk
        const token = await getToken({ template: "ReviewKartoken" });
        console.log("Token retrieved:", token ? "Successfully" : "Failed");
        
        if (!token) {
          throw new Error("Failed to retrieve authentication token");
        }
        
        // 2. Store token in Redux for later use in authenticated requests
        dispatch(setToken(token));
        
        // 3. Send user data to backend for synchronization with MongoDB
        const response = await axios.post(
          api,
          {}, // No body needed as user data is extracted from token
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        
        // 4. Store user data returned from the server in Redux
        if (response.data && response.data.data) {
          const userData = response.data.data;
          
          // 5. Update Redux store with user data
          dispatch(setUser({
            clerkId: userData.clerkId,
            name: userData.name,
            email: userData.email,
            imageUrl: userData.imageUrl,
            role: userData.role || 'user',
          }));
          
          console.log(`✅ User ${response.data.message.includes("created") ? "created" : "updated"} in database and synchronized with Redux`);
        } else {
          console.warn("⚠️ Received response but no user data found:", response.data);
        }
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        console.error("❌ Error syncing user:", errorMessage);
        setError(errorMessage);
        
        // 6. Even if backend sync fails, still set basic user info from Clerk in Redux
        // This ensures the UI can still function with basic user information
        dispatch(setUser({
          clerkId: user.id,
          name: `${user.firstName} ${user.lastName || ''}`.trim(),
          email: user.primaryEmailAddress?.emailAddress,
          imageUrl: user.imageUrl,
          role: 'user',
        }));
      } finally {
        setIsSyncing(false);
      }
    };

    sync();
  }, [isSignedIn, user, dispatch, getToken]);
  
  return { isSyncing, error };
};

export default useSyncUser;
