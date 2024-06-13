import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface AuthOptionsType {
  authOptions: boolean;
  setAuthOptions: Dispatch<SetStateAction<boolean>>;
}

const AuthOptionsContext = createContext<AuthOptionsType | null>(null);

export const AuthOptionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authOptions, setAuthOptions] = useState<boolean>(true);

  return (
    <AuthOptionsContext.Provider value={{ authOptions, setAuthOptions }}>
      {children}
    </AuthOptionsContext.Provider>
  );
};

export const useAuthOptions = () => {
  const context = useContext(AuthOptionsContext);

  if (context === null) {
    throw new Error(
      "useAuthOptions must be used within an AuthOptionsProvider"
    );
  }

  return context;
};
