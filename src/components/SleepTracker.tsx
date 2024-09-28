// src/components/SleepTracker.jsx
import React from 'react';
import { TrackerContainer } from '../styles';
import { useUser } from '@clerk/clerk-react';

const SleepTracker = () => {
  const { user } = useUser();

  return (
    <TrackerContainer>
      <h2>Sleep Tracker</h2>
      <p>Welcome, {user?.fullName}! Track your sleeping habits here.</p>
    </TrackerContainer>
  );
};

export default SleepTracker;
