import { useEffect, useState } from "react";

const useGetTIme = () => {
  const [time, setTime] = useState("");
  const [isAm, setIsAm] = useState(false);

  useEffect(() => {
    const now = new Date();
    const timeFormat = now.toLocaleTimeString("en-SG", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setTime(timeFormat);

    setIsAm(timeFormat.includes("am"));
  }, []);

  return { time, isAm };
};

export default useGetTIme;
