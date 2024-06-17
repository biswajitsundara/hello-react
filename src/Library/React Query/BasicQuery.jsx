import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts } from "./api";

export default function BasicQuery() {
  const {
    data: postData,
    isLoading,
    isError,
    error,
    status,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (isError) {
    return <p>There is an error..</p>;
  }
  //console.log(data, isLoading);

  return (
    <div>
      <h1>Data Fetching..</h1>
      {postData.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
}
