"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { BarChart4, HomeIcon, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";

function NavGroup() {
  return (
    <NavigationMenu>
      {/* Desktop menu below */}
      <NavigationMenuList className="hidden gap-4 md:flex">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <HomeIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/search" legacyBehavior passHref>
            <NavigationMenuLink>
              <SearchIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/top" legacyBehavior passHref>
            <NavigationMenuLink>
              <BarChart4 />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* Desktop menu above */}
      {/* Mobile menu below */}
      <NavigationMenuList className="flex gap-4 md:hidden rounded-full drop-shadow-2xl shadow-inner">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent bg-primary-gradient-no-shadow">
            <Menu color="white" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-primary-gradient-no-shadow text-white border-none">
            <ul className="flex flex-col gap-3 p-6">
              <li>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <HomeIcon />
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/search" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <SearchIcon />
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/top" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <BarChart4 />
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* Mobile menu above */}
    </NavigationMenu>
  );
}

export default NavGroup;
