import type { NextPage } from "next";
import { useCryptoApi } from "api";
import { useEffect, useState } from "react";
import { NewsCards } from "components";
const News: NextPage = () => {
  const { getNews } = useCryptoApi();
  const [news, setNews] = useState<any[]>([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await getNews("Business", "100");

        res && setNews(res);
      })();
    } catch {}
    setIsLoading(false);
  }, []);
  return (
    <>
      {isloading && (
        <h2 className="text-cyan-6 text-4xl text-center">Loading news..</h2>
      )}
      <NewsCards news={news} />
    </>
  );
};

export default News;
