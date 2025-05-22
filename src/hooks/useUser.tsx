// import {UserResponse} from '@src/entities/user';
interface UserResponse {}
import React, {createContext, useContext, useState, ReactNode} from 'react';

interface UserContextType {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useSessionUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
