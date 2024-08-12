import { useState } from "react";

export const useProps = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle((prev) => !prev);

  return {
    toggle,
    handleToggle,
  };
};
