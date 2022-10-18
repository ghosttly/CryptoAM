import millify from "millify";
import Link from "next/link";
import React, { useState } from "react";

type NumStr = string | number;
interface CoinCardProps {
  color: NumStr;
  index: number;
  name: NumStr;
  iconUrl: NumStr;
  price: number;
  marketCap: number;
  change: string | number;
  uuid: string;
}
export const CoinCard: React.FC<CoinCardProps> = ({
  change,
  color,
  iconUrl,
  index,
  marketCap,
  name,
  price,
  uuid,
}) => {
  return (
    <div className=" text-cyan-6 card flex flex-col relative border border-cyan-2 p-4 rounded-2xl">
      <div className="flex justify-between items-center border-b border-cyan-2 pb-1">
        <span className="xl:text-2xl" style={{ color: `${color}` }}>{`${
          index + 1
        }. ${name}`}</span>
        <img className=" w-6 xl:w-8" src={iconUrl as string} alt="" />
      </div>
      <div className="flex flex-col flex-grow justify-center">
        <div className="mt-2 text-center">
          Price <span className="text-cyan-8">{millify(price)}</span>
        </div>
        <div className="my-2 text-center">
          Market Cap <span className="text-cyan-8">{millify(marketCap)}</span>
        </div>
        <div className="mb-10 text-center">
          Daily Change <span className="text-cyan-8 ">{`${change}%`}</span>
        </div>
      </div>
      <Link href={`/crypto/${uuid}`}>
        <a className="p-2 border border-cyan-2 text-cyan-4 hover:text-cyan-6 hover:border-cyan-4 rounded-2xl text-center">
          More details
        </a>
      </Link>
    </div>
  );
};
