import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className=" h-[4vh] select-none">
        <div className="flex h-full items-center justify-end gap-1 px-2 text-[11px] font-medium sm:px-4 sm:text-xs">
          <div className="flex items-center justify-end gap-1 opacity-20">
            ©<p>{new Date().getFullYear()}</p>
          </div>
          <Link
            href="https://edward-hyde.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.logoHorizontal className="-mt-[1px] h-[10px] stroke-black/20 stroke-[65] transition-all  duration-300 ease-in-out hover:stroke-black/50 sm:h-[11px]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
