import React from "react";
import posts from "../postsData";
import Post from "../components/post/post";

export default function PostPage() {
  return (
    <div className="post-page">
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            tagline={post.tagline}
            votesCount={post.votesCount}
          ></Post>
        );
      })}
    </div>
  );
}
