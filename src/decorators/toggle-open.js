import React from "react";
import { useToggleOpen } from "../hooks/toggle-open";

export default OriginalComponent =>
  function ToggleOpen(props) {
    const { isOpen, toggleOpenState } = useToggleOpen(props.defaultOpenState);
    return (
      <OriginalComponent
        {...props}
        isOpen={isOpen}
        toggleOpenState={toggleOpenState}
      />
    );
  };
