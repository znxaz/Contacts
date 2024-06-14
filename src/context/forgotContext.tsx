import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

interface ForgotFormContextType {
  isForgot: boolean;
  setIsForgot: Dispatch<SetStateAction<boolean>>;
}
const ForgotFormContext = createContext<ForgotFormContextType | null>(null);

export const ForgotFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [isForgot, setIsForgot] = useState<boolean>(false); 
    return(
        <ForgotFormContext.Provider value={{isForgot, setIsForgot}}></ForgotFormContext.Provider>
    )
};

export const useForgotFormContext = () => {
    const context = useContext(ForgotFormContext); 
    if(!context){
        throw new Error("useForgotFormContext must be used inside a ForgotFormContextProvider"); 
    }
    return context
}
