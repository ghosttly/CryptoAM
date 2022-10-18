import axios from "axios";

export const useCryptoApi = () => {
  const axiosCoinranking = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_COINRANKING_HOST,
    },
  });

  const axiosCoinNews = axios.create({
    baseURL: "https://bing-news-search1.p.rapidapi.com",
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPID_KEY,
      "x-rapidapi-host": process.env.NEXT_PUBLIC_X_RAPID_BING_NEWS_HOST,
    },
  });

  const getCoins = async (limit?: string, offset?: string) => {
    const res = await axiosCoinranking.get("/coins/", {
      params: {
        ...(limit ? { limit } : null),
        ...(offset ? { offset } : null),
      },
    });
    if (!res) throw Error("Couldn't fetch coins exchanges");
    return res.data.data.coins;
  };
  const getCoinsGlobalStats = async () => {
    const res = await axiosCoinranking.get("/coins/", {
      params: {
        limit: "1",
      },
    });
    if (!res) throw Error("Couldn't fetch coins exchanges");
    return res.data.data.stats;
  };

  const getCoinDetails = async (uuid: string) => {
    const res = await axiosCoinranking.get(`/coin/${uuid}`);

    if (!res.data.data.coin) throw Error("Couldn't get coins details");
    return res.data.data.coin;
  };

  const getCoinDataForChart = async (uuid: string, period: string) => {
    const res = await axiosCoinranking.get(`/coin/${uuid}/history`, {
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: period },
    });
    if (!res.data.data) throw Error("Couldn't get coins details for chart");
    return res.data.data;
  };

  const getNews = async (category: string, count?: string) => {
    const res = await axiosCoinNews.get("/news/", {
      params: { cc: "us", category: category, ...(count ? { count } : null) },
    });
    if (!res.data.value) throw Error("Couldn't get news");
    return res.data.value;
  };

  return {
    getCoinsGlobalStats,
    getCoins,
    getCoinDetails,
    getCoinDataForChart,
    getNews,
  };
};
