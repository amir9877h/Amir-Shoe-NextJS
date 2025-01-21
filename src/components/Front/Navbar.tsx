import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MenuIcon, ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { NavbarLinks } from "./NavbarLinks";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { redis } from "@/lib/redis";
import { Cart } from "@/lib/interfaces";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Amir<span className="text-primary">Shoe</span>
          </h1>
        </Link>
        <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
          <NavbarLinks />
        </div>
      </div>

      <div className="flex items-center">
        {user ? (
          <div className="hidden md:flex">
            <Link href="/bag" className="group p-2 flex items-center mr-2">
              <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {total}
              </span>
            </Link>

            <UserDropdown
              align="end"
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </div>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant="ghost" asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-200"></span>
            <Button variant="ghost" asChild>
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
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
            {user ? (
              <div className="flex items-center">
                <Link
                  href="/bag"
                  className="group p-2 flex items-center mr-2 order-2"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {total}
                  </span>
                </Link>

                <div className="order-1">
                  <UserDropdown
                    align="start"
                    email={user.email as string}
                    name={user.given_name as string}
                    userImage={
                      user.picture ??
                      `https://avatar.vercel.sh/${user.given_name}`
                    }
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <Button variant="ghost" asChild>
                  <LoginLink>Sign in</LoginLink>
                </Button>
                <span className="h-6 w-px bg-gray-200"></span>
                <Button variant="ghost" asChild>
                  <RegisterLink>Create Account</RegisterLink>
                </Button>
              </div>
            )}
            <div className="grid gap-6 text-lg font-medium mt-5">
              <NavbarLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
