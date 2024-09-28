import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ClerkProvider, RedirectToSignIn, SignIn, useAuth } from "@clerk/clerk-react";
import Home from "./components/HomeScreen";
import './App.css';

const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;
console.log('Clerk Frontend API:', clerkFrontendApi);

const App = () => {
  return (
    
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/sign-in/*" element={<SignIn />} />
          <Route path="/" element={<RequireAuth />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

const RequireAuth = () => {
  const { isSignedIn } = useAuth();

  // Redirect to sign-in page if the user is not signed in
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <Home />;
};

export default App;
