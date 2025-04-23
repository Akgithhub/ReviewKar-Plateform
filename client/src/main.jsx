import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "@/components/ui/provider";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
// Utility to log the token in the browser console
const TokenDebugger = () => {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      if (isSignedIn) {
        const token = await getToken({ template: "ReviewKartoken" });
        // const token = await getToken();
        console.log("🔑 Your Clerk JWT Token:", token);
      } else {
        console.log("❌ Not signed in");
      }

    };

    fetchToken();
  }, [isSignedIn]);

  return null; // No UI needed
};
// Initialize Clerk
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <TokenDebugger />
      <App />
    </ClerkProvider>
  </>
  // </StrictMode>
);
