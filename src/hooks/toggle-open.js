import { useState, useCallback } from "react";

export function useToggleOpen(defaultOpenState) {
  const [isOpen, setOpenState] = useState(defaultOpenState);

  const toggleOpenState = useCallback(() => () => setOpenState(!isOpen), [
    isOpen
  ]);

  return { isOpen, toggleOpenState };
}
