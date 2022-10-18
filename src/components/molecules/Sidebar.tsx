import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HamburgerSVG, CloseXmarkSVG } from "components";
export const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          !open ? "translate-x-full" : ""
        } h-screen bg-cyan-1 w-3/4 sm:hidden fixed justify-between right-0 top-0 z-[300] pt-4 flex flex-col transition-transform`}
      >
        <div className="h-16 flex flex-col items-center">
          <img className="h-full" src="/images/png/cryptocurrency.png" alt="" />
          <Link href="/">
            <a
              onClick={() => setOpen((prev) => !prev)}
              className="text-cyan-7 ml-2"
            >
              Crypto-AM
            </a>
          </Link>
        </div>

        <nav className="flex flex-col  justify-between text-cyan-7 text-center pb-10 ">
          <Link href="/">
            <a
              onClick={() => setOpen((prev) => !prev)}
              className={`hover:scale-125 transition-transform py-4 ${
                router.pathname === "/" ? "scale-125 text-cyan-10" : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/cryptocurrencies">
            <a
              onClick={() => setOpen((prev) => !prev)}
              className={`hover:scale-125 transition-transform py-4 ${
                router.pathname.includes("cryptocurrencies")
                  ? "scale-125 text-cyan-10"
                  : ""
              }`}
            >
              Cryptocurrencies
            </a>
          </Link>

          <Link href="/news">
            <a
              onClick={() => setOpen((prev) => !prev)}
              className={`hover:scale-125 transition-transform py-4 ${
                router.pathname.includes("news") ? "scale-125 text-cyan-10" : ""
              }`}
            >
              News
            </a>
          </Link>
        </nav>
      </div>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="fixed right-4 bottom-2 z-[500]"
      >
        {open ? (
          <CloseXmarkSVG color="#58d1c9" />
        ) : (
          <HamburgerSVG color="#58d1c9" />
        )}
      </div>
    </>
  );
};
