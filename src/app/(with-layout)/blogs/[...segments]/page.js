import Link from "next/link";
import React from "react";

const SingleBlog = ({ params }) => {
  const [year, id] = params.segments;
  console.log(params.segments);
  return (
    <div className="border p-8 bg-black text-white text-2xl">
      <p>
        {year} for {id}
      </p>
      <Link href="/blogs">back</Link>
    </div>
  );
};

export default SingleBlog;
