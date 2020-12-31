import React from "react";
import "./SwipeButtons.css";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import MoodIcon from "@material-ui/icons/Mood";
import IconButton from "@material-ui/core/IconButton";
import StarRateIcon from "@material-ui/icons/StarRate";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__star">
        <FlashOnIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__right">
        <MoodIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <StarRateIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
