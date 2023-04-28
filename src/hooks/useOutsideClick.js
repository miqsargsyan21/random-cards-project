import { useCallback, useEffect } from "react";

const useOutsideClick = (cb, dependencies) => {
  const handleOutsideClick = useCallback(cb , [...dependencies]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);
};

export default useOutsideClick;