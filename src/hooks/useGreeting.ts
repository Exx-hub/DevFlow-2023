import { useEffect, useState } from "react";

const useGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const a = new Date();
    const hour = a.getHours();

    console.log(hour);

    if (hour >= 18 && hour <= 24) {
      setGreeting("evening");
    } else if (hour >= 12 && hour <= 18) {
      setGreeting("afternoon");
    } else {
      setGreeting("morning");
    }
  }, []);

  return { greeting };
};

export default useGreeting;
