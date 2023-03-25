import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/sign-in");
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default HomePage;
