import { useCryptoApi } from "api";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CoinDetails } from "components";

const Coin: NextPage = () => {
  const router = useRouter();
  const { coinId } = router.query;
  const { getCoinDetails, getCoinDataForChart } = useCryptoApi();
  const [coinData, setCoinData] = useState<any>();
  const [coinDataForChart, setCoinDataForChart] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timePeriod, setTimePeriod] = useState("3h");

  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        if (coinId) {
          const details = await getCoinDetails(coinId as string);
          if (details) setCoinData(details);
        }
      })();
    } catch {}
    setIsLoading(false);
  }, [router.query]);
  useEffect(() => {
    setCoinDataForChart([]);
    setIsLoading(true);
    try {
      (async () => {
        const chartData = await getCoinDataForChart(
          coinId as string,
          timePeriod
        );
        if (chartData) setCoinDataForChart(chartData);
      })();
    } catch {}
    setIsLoading(false);
  }, [timePeriod]);

  return (
    <CoinDetails
      timePeriod={timePeriod}
      coinData={coinData}
      coinDataForChart={coinDataForChart}
      setTimePeroid={setTimePeriod}
    />
  );
};

export default Coin;
