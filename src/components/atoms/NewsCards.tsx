import React from "react";
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
export const NewsCards: React.FC<{ news: any[] }> = ({ news }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
      {news?.map((n, i) => (
        <a
          key={i}
          href={n.url}
          target="_blank"
          rel="noreferrer"
          className="p-8 border border-cyan-2 rounded-2xl flex flex-col hover:border-cyan-6 text-cyan-5"
        >
          <div className="flex flex-col lg:flex-row items-center mb-4">
            <img
              src={n.image?.thumbnail?.contentUrl || demoImage}
              alt="news-image"
              className="w-[250] "
            />
            <h2 className="text-cyan-6 font-semibold mx-2 text-center">
              {n.name}
            </h2>
          </div>
          <div className=" flex flex-grow items-end">
            <p>{n.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
