import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavMenu } from "./types";
import ResTopNavbar from "./mobile-top-nav-bar";
import CartButton from "./cart-button";
import { MenuItem } from "./menu-item";
import { MenuList } from "./menu-list";
import InputGroup from "@/components/ui/input-group";
import { CircleUser, Search } from "lucide-react";
import Logo from "../logo/logo";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: "/",
        description: "In attractive and spectacular colors and designs",
      },
      {
        id: 12,
        label: "Women's clothes",
        url: "/",
        description: "Ladies, your style and tastes are important to us",
      },
      {
        id: 13,
        label: "Kids clothes",
        url: "/",
        description: "For all ages, with happy and beautiful colors",
      },
      {
        id: 14,
        label: "Mobiles and Grocerys",
        url: "/",
        description: "Suitable for men, women and all Phones and Grocerys",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Wish List",
    url: "/wish-list",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Products",
    url: "/products",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Cart",
    url: "/cart",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
          >
            <Logo />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/" className="block md:hidden mr-[14px] p-1">
          <Search />
          </Link>
          <CartButton />
          <Link href="/profile" className="p-1">
            <CircleUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;