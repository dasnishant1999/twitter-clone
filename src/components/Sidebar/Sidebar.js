import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Button } from "@material-ui/core";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active text="Home" Icon={HomeRoundedIcon} />
      <SidebarOption text="Explore" Icon={SearchRoundedIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneRoundedIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineRoundedIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityRoundedIcon} />
      <SidebarOption text="More" Icon={MoreHorizRoundedIcon} />
      <Button className="sidebar__tweet-button" variant="outlined" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
