import { useEffect, useState } from "react";

const useGetTIme = () => {
  const [time, setTime] = useState("");
  const [showMoon, setShowMoon] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    const timeFormat = now.toLocaleTimeString("en-SG", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setTime(timeFormat);

    if (hour >= 18 && hour <= 24) {
      setShowMoon(true);
    } else if (hour < 6) {
      setShowMoon(true);
    } else {
      setShowMoon(false);
    }
  }, []);

  return { time, showMoon };
};

export default useGetTIme;
