import { BannedPlayersContextType, ReactNodeProps } from '@/utilts/types';
import { createContext, useContext, useState } from 'react';

const BannedPlayersContextDefaultValues: BannedPlayersContextType = {
  isHiddenBanPlayersData: true,
  setIsHiddenBanPlayersData: (isHiddenBanPlayersData: boolean) =>
    isHiddenBanPlayersData,
  buttonText: ``,
  setButtonText: (buttonText: string) => buttonText,
};

const BannedPlayersContext = createContext<BannedPlayersContextType>(
  BannedPlayersContextDefaultValues,
);

export function useBannedPlayers() {
  return useContext(BannedPlayersContext);
}

export function BannedPlayersProvider({ children }: ReactNodeProps) {
  const [isHiddenBanPlayersData, setIsHiddenBanPlayersData] =
    useState<boolean>(false);

  const [buttonText, setButtonText] = useState<string>(``);

  return (
    <>
      <BannedPlayersContext.Provider
        value={{
          isHiddenBanPlayersData,
          setIsHiddenBanPlayersData,
          buttonText,
          setButtonText,
        }}
      >
        {children}
      </BannedPlayersContext.Provider>
    </>
  );
}
