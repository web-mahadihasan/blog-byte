"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



function MobileNav({ user }) {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <MenuIcon size={22} onClick={() => setOpen(!isOpen)} />
      <div
        className={`absolute w-full h-fit py-10 px-4 inset-0 duration-300 transition-transform z-50 bg-base-100 backdrop-blur-md ease-in-out ${
          isOpen ? "translate-y-12 " : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <Link href={"/profile"}>Profile</Link>
          <li>
            {user ? (
              <Link prefetch={false} href={"api/auth/logout"}>
                <button
                    className="px-4 py-1.5 border border-[#3e3939] bg-base-100 text-[#000000] hover:bg-[#000000] hover:text-white transition duration-300 rounded-md shadow-md">
                        Log Out
                    </button>
              </Link>
            ) : (
              <Link href={"api/auth/login"}>
                <button
                    className="px-4 py-1.5 border border-[#3e3939] bg-[#000000] text-white hover:bg-transparent hover:text-[#000] transition duration-300 rounded-md shadow-md">
                        Log in
                    </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;