import { useState } from "react";

const useLoad = () => {
  const [isLoad, setLoad] = useState(true);

  return {
    isLoad,
    setLoad,
  };
};

export default useLoad;
