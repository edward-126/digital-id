import Link from "next/link";
import { Icons } from "./Icons";
import { MYDATA } from "@/config/Index";

const Footer = () => {
  return (
    <>
      {MYDATA.map((item, idx) => (
        <div className=" h-[4vh] select-none" key={idx}>
          <div className="flex h-full items-center justify-end gap-1 px-2 text-[11px] font-medium sm:px-4 sm:text-xs">
            {/* <div className="flex items-center justify-end gap-1 opacity-20">
            ©<p>{new Date().getFullYear()}</p>
          </div> */}
            <Link
              href={item.website}
              className="group"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.newSign className="-mt-[1px] h-[15px] opacity-20 transition-all duration-300 ease-in-out group-hover:opacity-30 sm:h-[18px]" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;
