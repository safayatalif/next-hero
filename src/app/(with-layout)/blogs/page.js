// "use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import loadBlogsData from "./../../../utils/loadBlogsData";

const BlogsPage = async () => {
  const blogs = await loadBlogsData();
  // const router = useRouter();

  // const blogs = [
  //   {
  //     id: 1,
  //     year: 2023,
  //     title: "title 1",
  //   },
  //   {
  //     id: 2,
  //     year: 2023,
  //     title: "title 2",
  //   },
  //   {
  //     id: 3,
  //     year: 2023,
  //     title: "title 3",
  //   },
  //   {
  //     id: 4,
  //     year: 2023,
  //     title: "title 4",
  //   },
  //   {
  //     id: 5,
  //     year: 2023,
  //     title: "title 5",
  //   },
  // ];

  return (
    <div className="">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border p-8  bg-black text-3xl text-white">
          <h2>
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link
            className="inline-block my-5"
            href={{
              pathname: `/blogs/${id}`,
              query: {
                title: title,
              },
            }}
          >
            <button className="bg-green-50 px-4 py-2 text-black rounded-lg shadow-lg">Details</button>
          </Link>
        </div>
        // <button className="block border p-8  bg-black text-3xl text-white" onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)} key={id}>
        //   {title}
        // </button>
      ))}
    </div>
  );
};

export default BlogsPage;
