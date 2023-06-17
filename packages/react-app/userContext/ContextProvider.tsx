/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useMemo, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { UserContext } from ".";

interface IContextProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: IContextProvider) => {
  // Call the useSearch hooks
  const { handleGetUserSearch, handleUserFilter, userSearch } = useSearch();
  const [currentSort, setCurrentSort] = useState<string>('newest');

  // Function that sets in new sort
  const handleCurrentSort = (value: string) => {
    setCurrentSort(value);
  }


  const providerValue = useMemo(
    () => ({  handleGetUserSearch, userSearch, handleCurrentSort, currentSort, handleUserFilter }),
    [ handleGetUserSearch, userSearch, currentSort, handleCurrentSort, handleUserFilter ]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
