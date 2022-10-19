import React from "react";
import millify from "millify";

import {
  ChartSVG,
  CoinSVG,
  GraphUpSVG,
  LightingSVG,
  TrophySVG,
  InfoSVG,
  ApprovedSVG,
  RejectedSVG,
  RankSVG,
  LineChart,
} from "components";
export const CoinDetails: React.FC<{
  coinData: any;
  coinDataForChart: any;
  setTimePeroid: React.Dispatch<React.SetStateAction<string>>;
  timePeriod: string;
}> = ({ coinData, coinDataForChart, setTimePeroid, timePeriod }) => {
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const stats = [
    {
      title: "Rank",
      value: coinData?.rank,
      icon: <RankSVG color="#13a8a8" />,
    },
    {
      title: "Price to USD",
      value: `$ ${coinData?.price && millify(coinData?.price as number)}`,
      icon: <CoinSVG color="#13a8a8" />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        coinData?.marketCap && millify(coinData?.marketCap as number)
      }`,
      icon: <CoinSVG color="#13a8a8" />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        coinData &&
        coinData["24hVolume"] &&
        millify(coinData["24hVolume"] as number)
      }`,
      icon: <LightingSVG color="#13a8a8" />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coinData?.allTimeHigh?.price &&
        millify(coinData?.allTimeHigh?.price as number)
      }`,
      icon: <TrophySVG color="#13a8a8" />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinData?.numberOfMarkets,
      icon: <ChartSVG color="#13a8a8" />,
    },
    {
      title: "Number Of Exchanges",
      value: coinData?.numberOfExchanges,
      icon: <GraphUpSVG color="#13a8a8" />,
    },

    {
      title: "Total Supply",
      value: `$ ${
        coinData?.supply?.total && millify(coinData?.supply?.total as number)
      }`,
      icon: <InfoSVG color="#13a8a8" />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinData?.supply?.circulating &&
        millify(coinData?.supply?.circulating as number)
      }`,
      icon: <InfoSVG color="#13a8a8" />,
    },
    {
      title: "Aprroved Supply",
      value: coinData?.supply?.confirmed ? (
        <ApprovedSVG color="#13a8a8" />
      ) : (
        <RejectedSVG color="#13a8a8" />
      ),
      icon: <InfoSVG color="#13a8a8" />,
    },
  ];
  return (
    <div className="mt-16 pb-10  overflow-x-hidden">
      <div className="flex justify-between w-full mb-10">
        <h1 style={{ color: coinData?.color }} className="text-4xl">
          {coinData?.name}
          <span className="ml-4">{coinData?.symbol}</span>
        </h1>
        <img className=" w-8 xl:w-8" src={coinData?.iconUrl as string} alt="" />
      </div>
      <main className=" w-full grid grid-cols-1 sm:grid-cols-2 sm:place-items-center">
        <div className="flex w-max flex-col ">
          {stats.map((stats, i) => (
            <div
              className="flex items-center my-4 sm:text-2xl border-b border-cyan-2 pb-2  text-cyan-6"
              key={i}
            >
              <span className="mr-4 ">{stats.icon}</span>
              <span className="mr-8">{stats.title}</span>
              <span className="text-cyan-8">{stats.value as string}</span>
            </div>
          ))}
        </div>
        <div className="flex w-max flex-col self-center">
          {genericStats.map((stats, i) => (
            <div
              className="flex items-center  my-4 sm:text-2xl text-cyan-6 border-b border-cyan-2 pb-2 "
              key={i}
            >
              <span className="mr-4">{stats.icon}</span>
              <span className=" mr-2 sm:mr-8">{stats.title}</span>
              <span className="text-cyan-8">{stats.value as string}</span>
            </div>
          ))}
        </div>
      </main>

      <div className="flex flex-col sm:flex-row">
        <span className="text-cyan-5 text-2xl mr-4">Time Period</span>
        <div>
          {time.map((t, i) => (
            <button
              className={`mx-2  ${
                timePeriod === t ? "scale-150 text-cyan-6" : "text-cyan-3"
              }`}
              onClick={() => setTimePeroid(t)}
              key={i}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <section>
        <LineChart coinHistory={coinDataForChart} />
      </section>
      <section
        className="coinDetails border-b border-cyan-2 pb-4 mb-10"
        dangerouslySetInnerHTML={{ __html: coinData?.description }}
      ></section>
      <section>
        <h2 className="text-5xl text-cyan-6 text-center mb-4">Useful Links</h2>
        <div className="grid sm:grid-cols-3 sm:place-items-center">
          {coinData &&
            coinData?.links.map(
              (link: { [key: string]: string }, i: number) => (
                <div className="flex" key={i}>
                  <h3 className="text-cyan-4 mr-4">{link.type}</h3>
                  <a
                    href={link.url}
                    className="text-cyan-6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </div>
              )
            )}
        </div>
      </section>
    </div>
  );
};
