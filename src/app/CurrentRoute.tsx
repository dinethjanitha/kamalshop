"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CurrentRoute = () => {
  const pathName = usePathname();

  

  return (
    <div className=" relative navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1  gap-3">
      <li>
          <Link href="/" className={pathName == "/" ? "underline  bg-slate-400" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className={pathName == "/shop" ? "underline  bg-slate-400" : ""}>
            Shop
          </Link>
        </li>
        
        <li>
          <a>Contacts Us</a>
        </li>
        <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2 z-0">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
  );
};

export default CurrentRoute;
