import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/profile",
      title: "Profile",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];

  return (
    <nav className="flex items-center justify-between my-4 container mx-auto">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-center gap-4">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink exact={path === "/"} activeClassName="text-blue-500 font-semibold" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
