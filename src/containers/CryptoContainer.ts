import { useState } from "react";
import { createContainer } from "unstated-next";

const useCryptoContainer = createContainer(() => {
  const [globalStats, setGlobalStats] = useState<{ [key: string]: string }>();

  return {
    globalStats,
    setGlobalStats,
  };
});

export const useCrypto = useCryptoContainer.useContainer;
export const CryptoProvider = useCryptoContainer.Provider;
