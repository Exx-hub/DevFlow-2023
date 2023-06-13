import { useEffect } from "react";

const useTitle = (text: string) => {
  useEffect(() => {
    document.title = text;
  }, [text]);
};

export default useTitle;
