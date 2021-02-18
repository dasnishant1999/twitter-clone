import React from "react";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget__container">
        <h2>What's happening</h2>
        <hr />
        <div className="widget__covid">
          <h4>COVID-19 in India</h4>
          <img
            src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
            alt=""
          />
        </div>
        <hr/>
        <h3>Show More</h3>
      </div>
    </div>
  );
}

export default Widgets;
