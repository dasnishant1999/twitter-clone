import React, { useState, useEffect } from "react";

import FlipMove from "react-flip-move";

import "./Feed.css";
import Post from "./Post/Post";
import TweetBox from "./TweetBox/TweetBox";
import db from "../../services/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
      // console.log(snapshot.docs[0].id);
    });
    return () => {};
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
