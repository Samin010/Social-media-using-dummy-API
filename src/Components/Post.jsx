import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const {deletePost}=useContext(PostList)
  return (
    
      <div className="card post-card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <FaDeleteLeft 
            onClick={()=>deletePost(post.id)}
            />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success reactions" role="alert">
        This post has been reacted by {post.reactions} people
      </div>
    </div>
  
  );
}

export default Post;
