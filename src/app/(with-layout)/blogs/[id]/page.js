// "use client";

import loadSingleBlog from "@/utils/loadSingleBlog";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import loadBlogsData from "./../../../../utils/loadBlogsData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlog(params?.id);

  return {
    title: title,
  };
};
export const generateStaticParams = async ({ params }) => {
  const blogs = await loadBlogsData();

  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};

const SingleBlog = async ({ params }) => {
  // const router = useRouter();
  // const [year, id] = params.segments;
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();

  const blog = await loadSingleBlog(params?.id);

  return (
    <div className="border p-8 bg-black text-white text-2xl">
      {params?.id}
      <p>{blog.title}</p>
      {/* <button onClick={() => router.back()}>back</button> */}
    </div>
  );
};

export default SingleBlog;
