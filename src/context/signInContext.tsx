import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface SignInContextType {
  signInContext: boolean;
  setSignInContext: Dispatch<SetStateAction<boolean>>;
}

const SignInContext = createContext<SignInContextType | null>(null);

export const SignInContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [signInContext, setSignInContext] = useState<boolean>(false);
  return (
    <SignInContext.Provider value={{ signInContext, setSignInContext }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSharedSignInState = () => {
  const context = useContext(SignInContext);
  if (context === null) {
    throw new Error(
      "useSignInContext must be used within a SignInContextProvider"
    );
  }
  return context;
};
