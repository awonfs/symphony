"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BarChart4, HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

function NavGroup() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem className="hidden md:block">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <HomeIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <Link href="/search" legacyBehavior passHref>
            <NavigationMenuLink>
              <SearchIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <Link href="/top" legacyBehavior passHref>
            <NavigationMenuLink>
              <BarChart4 />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavGroup;
