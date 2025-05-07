import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ReduxProvider store={store}>
        {/* <TokenDebugger /> */}
        <App />
      </ReduxProvider>
    </ClerkProvider>
  </>
  // </StrictMode>
);
