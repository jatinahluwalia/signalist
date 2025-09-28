"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname.startsWith(href);
  };

  return (
    <ul className="flex flex-col gap-3 p-2 font-medium sm:flex-row sm:gap-10">
      {navItems.map(({ href, title }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              "transition-colors hover:text-yellow-500",
              isActive(href) && "text-gray-100",
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
