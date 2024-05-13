import { useState } from "react";

export const useCheckErrors = () => {
  const [hasError, setHasError] = useState(false);

  const hasEmailError = (email: string) => {
    const isMatched = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (isMatched === null) {
      return setHasError(true);
    }

    return setHasError(false);
  };

  return { hasEmailError, hasError };
};
