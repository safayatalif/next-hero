import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      year: 2023,
      title: "title 1",
    },
    {
      id: 2,
      year: 2023,
      title: "title 2",
    },
    {
      id: 3,
      year: 2023,
      title: "title 3",
    },
    {
      id: 4,
      year: 2023,
      title: "title 4",
    },
    {
      id: 5,
      year: 2023,
      title: "title 5",
    },
  ];

  return (
    <div className="flex gap-4">
      {blogs.map(({ id, year, title }) => (
        <Link
          className="block border p-8  bg-black text-3xl text-white"
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
