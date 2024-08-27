import { useEffect, useRef } from "react";

export function useDebounce(
  callback: (...args: unknown[]) => void,
  delay: number,
) {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunction = (...args: unknown[]) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedFunction;
}
