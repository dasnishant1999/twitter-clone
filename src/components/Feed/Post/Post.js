import React, { forwardRef } from "react";

import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

import "./Post.css";

const Post = forwardRef(
  ({ displayName, userName, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <Avatar className="post__avatar" />
        <div className="post__body">
          <div className="post__header">
            <h3>{displayName}</h3>
            <h4>{userName}</h4>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          {image && <img src={image} alt="media" />}
          <div className="post__footer">
            <ChatBubbleOutlineRoundedIcon />
            <ShuffleRoundedIcon />
            <FavoriteBorderRoundedIcon />
            <PublishOutlinedIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
