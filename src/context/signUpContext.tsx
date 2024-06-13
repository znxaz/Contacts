import React, {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
  useContext,
} from "react";

interface SignUpType {
  sharedSignUpState: boolean;
  setSharedSignUpState: Dispatch<SetStateAction<boolean>>;
}

const SignUpContext = createContext<SignUpType | null>(null);

export const SignUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sharedSignUpState, setSharedSignUpState] = useState<boolean>(false);
  return (
    <SignUpContext.Provider value={{ sharedSignUpState, setSharedSignUpState }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSharedSignUpState = () => {
  const context = useContext(SignUpContext);
  if (context === null) {
    throw new Error(
      "useSharedSignUpState must be used within a SignUpContextProvider"
    );
  }
  return context;
};
