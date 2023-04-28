import {
  useCallback,
  useEffect,
  useState
} from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const windowSizeDetecting = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    windowSizeDetecting();

    window.addEventListener("resize", windowSizeDetecting);

    return () => window.removeEventListener("resize", windowSizeDetecting);
  }, [windowSizeDetecting]);

  return isDesktop;
};

export default useIsDesktop;