import React from "react";
import { addPosts, fetchPosts } from "./api";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./Posts.css";

const PostLists = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });


  const queryClient = useQueryClient();

 
  const {mutate, isError: isPostError, isPending, error: postError, reset} = useMutation({
    mutationFn: addPosts,
    onMutate: () => {
      return {id: 1}
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        // predicate: (query) =>
        //     query.queryKey[0] === "posts" && query.queryKey[1].page >=2

      })
    },
    // onError: (error, variables, context) => {

    // },
    // onSettled: (data, error, variables, context) =>{

    // }
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const postTitle = formData.get("title");
    mutate({title: postTitle, body:postTitle});
    e.target.reset();
  }

  return (
    <div className="container">

      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="title"/>
        <button>Post</button>
      </form>


      {isLoading && <p>Loading..</p>}
      {isError && <p>{error.message}</p>}
      {isPostError && <p>{"Unable to load"}</p>}

      {postData?.map((post) => (
        <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
