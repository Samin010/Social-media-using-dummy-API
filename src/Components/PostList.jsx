import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, loading } = useContext(PostListContext);
  

  return (
    <div className="post-list">
      {loading && <LoadingSpinner />}
      {!loading && postList.length === 0 && <WelcomeMessage />}
      {!loading && postList.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default PostList;
