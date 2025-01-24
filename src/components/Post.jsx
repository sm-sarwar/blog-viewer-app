import Link from "next/link";
import React from "react";

const Post = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return (
    <div className="max-w-screen-xl mx-auto mt-10 bg-base-200 my-5 p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">Blog Posts</h1>
      <ul className="space-y-4 grid grid-cols-3 md:grid-cols-7 gap-5">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded shadow flex flex-col justify-between"
          >
            <h2 className="">{post.title}</h2>
            <p>{post.id}</p>
            <Link href={`/${post.id}`} className="btn">
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
