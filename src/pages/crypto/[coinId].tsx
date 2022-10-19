import { useCryptoApi } from "api";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CoinDetails } from "components";

const Coin: NextPage = () => {
  const router = useRouter();

  const { getCoinDetails, getCoinDataForChart } = useCryptoApi();
  const [coinData, setCoinData] = useState<any>();
  const [coinDataForChart, setCoinDataForChart] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timePeriod, setTimePeriod] = useState("3h");
  const [coinIdq, setCoinId] = useState("");
  useEffect(() => {
    const { coinId } = router.query;
    if (coinId) {
      setCoinId(coinId as string);
    }
  }, [router.query]);

  useEffect(() => {
    try {
      (async () => {
        if (coinIdq) {
          const details = await getCoinDetails(coinIdq as string);
          if (details) setCoinData(details);
        }
      })();
    } catch {}
  }, [coinIdq]);
  useEffect(() => {
    setCoinDataForChart([]);
    setIsLoading(true);
    try {
      (async () => {
        if (coinIdq) {
          const chartData = await getCoinDataForChart(coinIdq, timePeriod);
          if (chartData) setCoinDataForChart(chartData);
        }
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
