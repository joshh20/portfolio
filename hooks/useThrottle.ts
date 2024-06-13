import { useRef, useCallback } from "react";

const useThrottle = (delay = 200) => {
    const throttleSeed = useRef<NodeJS.Timeout | null>(null);

    const throttleFunction = useCallback(
        (func: () => void) => {
            if (!throttleSeed.current) {
                func();
                throttleSeed.current = setTimeout(() => {
                    throttleSeed.current = null;
                }, delay);
            }
        },
        [delay]
    );

    return throttleFunction;
};

export default useThrottle;
