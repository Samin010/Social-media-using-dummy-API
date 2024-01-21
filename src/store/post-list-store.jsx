import { createContext, useReducer ,useEffect,useState} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    console.log("inside reducer",action.payload)
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [loading, setLoading] = useState(false);
  const addPost = (post) => {
    // console.log("inside add post",post)
    dispatchPostList({
      type: "ADD_POST",
      payload:post
      
    });
  };
  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "post 1",
    body: "Hi i am post 1",
    reactions: 2,
    userId: "post-1",
    tags: ["Mumbai", "Delhi", "Ladakh"],
  },
  {
    id: "2",
    title: "post 2",
    body: "Hi i am post 2",
    reactions: 2,
    userId: "post-3",
    tags: ["Mumbai", "Delhi", "Ladakh"],
  },
  {
    id: "3",
    title: "post 3",
    body: "Hi i am post 3",
    reactions: 2,
    userId: "post-3",
    tags: ["Mumbai", "Delhi", "Ladakh"],
  },
];

export default PostListProvider;
