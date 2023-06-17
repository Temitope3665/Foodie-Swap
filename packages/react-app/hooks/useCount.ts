import { useState } from "react";

export const useCount = () => {
    // A state that holds the count
    const [count, setCount] = useState<number>(0);

    // function that increment the count when user clicks +
    const addCount = () => {
        setCount((prev: number) => prev + 1);
    }

    // // function that decrement the count when user clicks -
    const subCount = () => {
        setCount((prev: number) => prev - 1);
    }

    return { count, addCount, subCount };
};