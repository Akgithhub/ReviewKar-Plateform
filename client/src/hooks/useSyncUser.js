import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux/slices/userSlice";
import axiosInstance from "../utils/axiosInstance";


const useSyncUser = () => {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const sync = async () => {
      if (isSignedIn && user) {
        try {
          const token = await getToken();
          if (!token) throw new Error("No token returned from Clerk");

          dispatch(setToken(token));

          await axiosInstance.post("/api/syncuser/user-synced");

          dispatch(setUser({
            clerkId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            imageUrl: user.imageUrl,
            role: "user",
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
