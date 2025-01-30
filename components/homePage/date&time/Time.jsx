"use client"; // Ensures the component runs only on the client

import { useState, useEffect } from "react";

export default function Clock({}) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
      setCurrentDay(now.toLocaleDateString(undefined, { weekday: 'long' }));
    };

    updateClock(); // Set initial time and date
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-between px-2">
      <p>{currentDate} ,
      {currentDay}</p>
      <p>{currentTime}</p>
    </div>
  );
}
