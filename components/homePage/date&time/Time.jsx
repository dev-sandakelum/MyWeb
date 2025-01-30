"use client"; // Ensures the component runs only on the client

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    updateClock(); // Set initial time
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h3 className="">{currentTime}</h3>;
}
