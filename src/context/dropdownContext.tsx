import { error } from "console";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface SharedDropDownContextType {
  sharedState: boolean;
  setSharedState: Dispatch<SetStateAction<boolean>>;
}
const SharedDropDownContext = createContext<
  SharedDropDownContextType | undefined
>(undefined);

export const SharedDropDownProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sharedState, setSharedState] = useState<boolean>(false);
  return (
    <SharedDropDownContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedDropDownContext.Provider>
  );
};

export const useSharedDropDownState = () => {
  useContext(SharedDropDownContext);
  const context = useContext(SharedDropDownContext); 
  if(context === undefined){
    throw new Error('useSharedDropDownState must be used within a SharedDropDownProvider')
  }
  return context; 
};
