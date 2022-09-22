import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalstorage";

const LocalStroContext = createContext(undefined);

const LocalSrogateProvider = ({ children, props }: any) => {
  //  hook LocalStrorage
  const { storedValue, setValue } = useLocalStorage("search-history", []);
  const value = {
    storedValue,
    setValue,
  };
  return (
    <LocalStroContext.Provider value={value} {...props}>
      {children}
    </LocalStroContext.Provider>
  );
};

function useLocalStrContext() {
  const context = useContext(LocalStroContext);
  if (typeof context === "undefined")
    throw new Error("useLocalContext must be used within a LocalProvider");
  return context;
}

export { useLocalStrContext, LocalSrogateProvider };
