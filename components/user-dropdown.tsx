"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import NavItems from "./nav-items";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = {
    name: "John",
    email: "contact@jsmastery.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="size-8">
            <AvatarFallback className="bg-yellow-500 font-bold text-sm text-yellow-900">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden flex-col items-start md:flex">
            <span className="font-medium text-base text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <Avatar className="size-10">
              <AvatarFallback className="bg-yellow-500 font-bold text-sm text-yellow-900">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-base text-gray-400">
                {user.name}
              </span>
              <span className="text-gray-500 text-sm">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-500" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer font-medium text-gray-100 text-md transition-colors focus:bg-transparent focus:text-yellow-500"
        >
          <LogOut className="mr-2 hidden size-4 md:block" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-600 sm:hidden" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
