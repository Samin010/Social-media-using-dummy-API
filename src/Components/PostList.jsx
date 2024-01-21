import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
function PostList() {
  // const { postList } = useContext(PostListContext);
  
    const postList=useLoaderData()
 

  return (
    <div className="post-list">
      {/* {loading && <LoadingSpinner />} */}
      {postList.length === 0 && <WelcomeMessage />}
      { postList.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export const postLoader=()=>{
 return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts
       
      });
}

export default PostList;
