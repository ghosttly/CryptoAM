import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="sm:flex hidden z-10 bg-cyan-1 p-4 px-8 justify-between items-center fixed w-full top-0 ">
      <div className="h-16 flex items-end">
        <img className="h-full" src="/images/png/cryptocurrency.png" alt="" />
        <Link href="/">
          <a className="text-cyan-7 ml-2">Crypto-AM</a>
        </Link>
      </div>

      <nav className="flex  justify-between text-cyan-7 ">
        <div className=" flex ">
          <Link href="/">
            <a
              className={`hover:scale-125 transition-transform px-4 ${
                router.pathname === "/" ? "scale-125 text-cyan-10" : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/cryptocurrencies">
            <a
              className={`hover:scale-125 transition-transform px-4  ${
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
              className={`hover:scale-125 transition-transform px-4 ${
                router.pathname.includes("news") ? "scale-125 text-cyan-10" : ""
              }`}
            >
              News
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
