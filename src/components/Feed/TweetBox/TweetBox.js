import React, { useState } from "react";

import { Avatar, Button } from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

import "./TweetBox.css";
import db from "../../../services/firebase";

function TweetBox() {
  const [tweetMessage, settweetMessage] = useState("");
  const [tweetImage, settweetImage] = useState("");

  const sendTweet = (e) => {
    if (tweetMessage == "" && tweetImage == "") {
      return;
    }
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Uzumaki Naruto",
      userName: "@nine_tailed_fox",
      text: tweetMessage,
      image: tweetImage,
    });
    settweetMessage("");
    settweetImage("");
  };

  return (
    <div className="tweetBox">
      <Avatar className="tweetBox__avatar"></Avatar>
      <form>
        {/* <div className="tweetBox__input"> */}
        <input
          value={tweetMessage}
          onChange={(e) => settweetMessage(e.target.value)}
          type="text"
          placeholder="What's happening?"
        />
        <input
          value={tweetImage}
          onChange={(e) => settweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
          placeholder="Enter image URL(optional)"
        />
        {/* </div> */}
        <div className="tweetBox__bottomBar">
          <div className="tweetBox__bottomBar__icons">
            <ImageOutlinedIcon />
            <GifIcon />
            <PollIcon />
            <SentimentSatisfiedOutlinedIcon />
            <CalendarTodayOutlinedIcon />
          </div>
          <Button
            onClick={sendTweet}
            className="tweetBox__tweet-button "
            variant="outlined"
            fullWidth
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
