import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import myImage from "./avatar_sample.png";
import "./MyAvatar.css";

function MyAvatar(props) {
  //   const { classes } = props;
  return (
    <div>
      {/* <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" className={classes.avatar} /> */}
      <Avatar alt="Adelle Charles" src={myImage} className="avatar" />
    </div>
  );
}

MyAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MyAvatar;
