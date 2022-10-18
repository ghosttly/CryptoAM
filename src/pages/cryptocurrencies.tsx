import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCryptoApi } from "api";
import { CoinCard } from "components";
import { useCrypto } from "containers";
const Cryptocurrencies: NextPage = () => {
  const { getCoins } = useCryptoApi();
  const { globalStats } = useCrypto();
  const [coins, setCoins] = useState<{ [key: string]: string | number }[]>([]);
  const [offset, setOffset] = useState(0);
  const [shownAll, setShownAll] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const resp = await getCoins();
        resp && setCoins(resp);
      })();
    } catch {}
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (globalStats?.totalCoins) {
      if (coins.length >= parseInt(globalStats?.totalCoins)) {
        setShownAll(true);
      }
    }
  }, [coins]);
  const fetchMore = async () => {
    setIsLoading(true);
    try {
      const resp = await getCoins("50", String(offset + 50));
      if (resp) {
        setCoins((prev) => [...prev, ...resp]);
        setOffset((prev) => prev + 50);
      }
    } catch {}
    setIsLoading(false);
  };

  return (
    <>
      <div className="sticky z-[200]  sm:w-1/4 mx-auto top-0">
        <input
          className="p-2 px-4 bg-transparent border border-cyan-2 rounded-2xl mx-auto bg-cyan-2   block mt-6 text-cyan-7"
          placeholder="Search coin.."
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.currentTarget.value)}
        />
      </div>
      <section className="grid grid-cols-1 flex-grow sm:grid-cols-3 xl:grid-cols-5 gap-4 pt-6 ">
        {coins
          .filter((coin) =>
            (coin.name as string)
              .toLowerCase()
              .includes(searchParam.toLowerCase())
          )
          .map(
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
      {isloading && (
        <span className="text-cyan-6 text-center mx-auto block my-6">
          Loading...
        </span>
      )}
      {!shownAll && (
        <button
          onClick={fetchMore}
          className=" my-8 p-2 mx-auto block px-8 border border-cyan-2 text-cyan-4 hover:text-cyan-6 hover:border-cyan-4 rounded-2xl text-center"
        >
          Load More
        </button>
      )}
    </>
  );
};

export default Cryptocurrencies;
