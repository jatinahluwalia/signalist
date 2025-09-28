import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/nav-items";
import UserDropdown from "./user-dropdown";

const Header = () => {
  return (
    <header className="sticky top-0 border-b">
      <div className="header-wrapper container">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
            alt="logo"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
