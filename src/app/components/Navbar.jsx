import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

async function Navbar() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="border-b sticky top-0 z-50 bg-base-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 xl:px-0 py-2 md:py-4">
        <div>
          <Link href={"/"}>
            <h2 className="text-2xl font-bold">Blog Byte</h2>
          </Link>
        </div>
        <div>
          <ul className="items-center gap-4 hidden md:flex">
            <NavItems/>
            <li>
              {user ? (
                <Link prefetch={false} href={"/api/auth/logout"}>
                   <button
                    className="px-4 py-1.5 border border-[#3e3939] bg-base-100 text-[#000000] hover:bg-[#000000] hover:text-white transition duration-300 rounded-md shadow-md">
                        Log Out
                    </button>
                </Link>
              ) : (
                <Link href={"/api/auth/login"}>
                   <button
                    className="px-4 py-1.5 border border-[#3e3939] bg-[#000000] text-white hover:bg-transparent hover:text-[#000] transition duration-300 rounded-md shadow-md">
                        Log in
                    </button>
                </Link>
              )}
            </li>
          </ul>
          <div className="block md:hidden">
            <MobileNav user={user} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;