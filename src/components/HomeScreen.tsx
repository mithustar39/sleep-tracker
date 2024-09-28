import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

// Dummy sleep data
const sleepData = {
  totalSleep: 7, // hours
  remSleep: 2,   // hours
  lightSleep: 4, // hours
  deepSleep: 1,  // hours
};

const Home = () => {
  const { user } = useUser();

  return (
    <div className="home-container">
      <h1 className="welcome-message">Welcome {user.firstName || "Guest"}</h1>
      <h2>Total Sleep Today: {sleepData.totalSleep} hours</h2>
      <div className="sleep-stages">
        <h3>Sleep Stages:</h3>
        <ul>
          <li>REM Sleep: {sleepData.remSleep} hours</li>
          <li>Light Sleep: {sleepData.lightSleep} hours</li>
          <li>Deep Sleep: {sleepData.deepSleep} hours</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
