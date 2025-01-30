"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CurrentRoute = () => {
  const pathName = usePathname();

  

  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1  gap-3">
        <li>
          <Link href="/shop" className={pathName == "/shop" ? "underline  bg-slate-400" : ""}>
            Shop
          </Link>
        </li>
        <li>
          <details>
            <summary className=" ">Parent</summary>
            <ul className="p-2">
              <li>
                <a className="">Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default CurrentRoute;
