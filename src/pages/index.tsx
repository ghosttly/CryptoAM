import type { NextPage } from "next";
import { useEffect, useState } from "react";
import millify from "millify";
import { useCryptoApi } from "api";
import { useCrypto } from "containers";
import { CoinCard } from "components";

const Home: NextPage = () => {
  const { getCoinsGlobalStats, getCoins } = useCryptoApi();
  const { globalStats, setGlobalStats } = useCrypto();
  const [coins, setCoins] = useState<{ [key: string]: string | number }[]>([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    try {
      (async () => {
        const globalStats = await getCoinsGlobalStats();

        globalStats && setGlobalStats(globalStats);

        const resp2 = await getCoins("10");
        resp2 && setCoins(resp2);
      })();
    } catch {}
    setIsloading(false);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <h1 className="text-5xl text-cyan-7">Loading...</h1>
        </div>
      )}
      <main className="border-b border-cyan-2">
        <div className="w-full grid grid-cols-2 xl:grid-cols-4  ">
          <div className="p-2 flex flex-col justify-center items-center">
            <h2 className="sm:text-xl text-cyan-6 text-center">
              Total Cryptocurrencies
            </h2>
            <span className="text-2xl text-cyan-8">
              {globalStats?.totalCoins}
            </span>
          </div>
          <div className="p-2 flex flex-col justify-center items-center">
            <h2 className="sm:text-xl text-cyan-6 text-center">
              Total 24h Volume
            </h2>
            <span className="text-2xl text-cyan-8">
              {globalStats?.total24hVolume &&
                millify(parseInt(globalStats.total24hVolume))}
            </span>
          </div>
          <div className="p-2 flex flex-col justify-center items-center">
            <h2 className="sm:text-xl text-cyan-6 text-center">
              Total Market Cap
            </h2>
            <span className="text-2xl text-cyan-8">
              {globalStats?.totalMarketCap &&
                millify(parseInt(globalStats.totalMarketCap))}
            </span>
          </div>

          <div className="p-2 flex flex-col justify-center items-center">
            <h2 className="sm:text-xl text-center text-cyan-6">
              Total Markets
            </h2>
            <span className="text-2xl text-cyan-8">
              {globalStats?.totalMarkets}
            </span>
          </div>
        </div>
      </main>
      <section className="grid grid-cols-1 flex-grow sm:grid-cols-3 xl:grid-cols-5 gap-4 pt-6 ">
        {coins.map(
          ({ change, name, color, iconUrl, marketCap, price, uuid }, i) => (
            <CoinCard
              uuid={uuid as string}
              change={change}
              index={i}
              key={i}
              color={color}
              name={name}
              iconUrl={iconUrl}
              marketCap={marketCap as number}
              price={price as number}
            />
          )
        )}
      </section>
    </>
  );
};

export default Home;
