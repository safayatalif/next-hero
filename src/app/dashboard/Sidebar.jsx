import Link from "next/link";
import React from "react";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-products",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
