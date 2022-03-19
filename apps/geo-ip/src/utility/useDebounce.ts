import React from 'react';

// was using lodash debounce, but needed a value returned rather than a callback function

// credit: Nate Arnold https://dev.to/arnonate/debouncing-react-query-with-hooks-2ek6

export const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
