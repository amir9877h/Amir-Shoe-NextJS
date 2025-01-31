import DashboardNavigation from "@/components/Dashboard/DashboardNavigation";
import { Button } from "@/components/ui/button";
import { unstable_noStore as noStore } from "next/cache";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { CircleUser, MenuIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // user.email !== "amir.cph4@gmail.com"
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant={`outline`}
              size={`icon`}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={`left`}>
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav className="grid gap-6 text-lg font-medium mt-5">
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={`secondary`}
              size={`icon`}
              className="rounded-full"
            >
              <CircleUser className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/`}>Visit Site</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="my-5">{children}</main>
    </div>
  );
};

export default DashboardLayout;
