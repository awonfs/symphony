"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavGroup() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem className="hidden md:block">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <Link href="/search" legacyBehavior passHref>
            <NavigationMenuLink>Search</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <Link href="/top" legacyBehavior passHref>
            <NavigationMenuLink>Top tracks</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavGroup;
