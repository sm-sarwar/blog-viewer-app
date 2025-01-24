import React from "react";


async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch the post");
  }
  return res.json();
}


const PostDetails = async ({ params }) => {
  const { id } = params; 
  const post = await getPost(id);

  return (
    <div className="max-w-screen-md mx-auto mt-10 bg-base-200 p-5 rounded-lg">
      <h1 className="text-center font-bold text-4xl my-5">Blog details</h1>
      <h1 className="text-xl font-bold mb-5">{post.title}</h1>
      <p>{post.id}</p>
      <p className="text-lg">{post.body}</p>
    </div>
  );
};

export default PostDetails;
