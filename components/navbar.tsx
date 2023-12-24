import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <nav className="flex justify-between items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default Navbar;
