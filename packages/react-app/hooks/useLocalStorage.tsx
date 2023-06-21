const useLocalStorage = () => {
  const getLocalStorage = () =>
    localStorage.getItem("user_info")
      ? JSON.parse(localStorage.getItem("user_info") as string)
      : "";
  const setLocalStorage = ({ key, value }: any) =>
    key
      ? localStorage.setItem(
          "user_info",
          JSON.stringify({ ...getLocalStorage(), [key]: value })
        )
      : localStorage.setItem("user_info", JSON.stringify(value));
  const clearStorage = () => localStorage.clear();
  const removeItem = (key: string) => {
    const { [key]: value, ...rest } = getLocalStorage();
    localStorage.setItem("user_info", JSON.stringify(rest));
  };

  return { setLocalStorage, clearStorage, getLocalStorage, removeItem };
};

export default useLocalStorage;
