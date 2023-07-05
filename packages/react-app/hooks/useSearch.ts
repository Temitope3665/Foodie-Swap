import { useContext, useState } from "react";

export const useSearch = () => {
    // Create a state to hold user inputs
    const [userSearch, setUserSearch] = useState<string>('');

    // function that gets called on change of user input and sets to state
    const handleGetUserSearch = (value: string) => {
        setUserSearch(value);
    };

    // function that gets called when user filter by
    const handleUserFilter = (value: string) => {
        setUserSearch(value);
    }
    
    // return user inputs and the function
    return { handleGetUserSearch, handleUserFilter, userSearch };
};
