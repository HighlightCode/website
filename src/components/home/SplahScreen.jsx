import React, {useContext} from "react";
import "./SplashScreen.scss";
import DisplayLottie from "../displayLottie/DisplayLottie";
import {splashScreen} from "../../editable-stuff/config";

export default function SplashScreen() {
  return (
    <div className={"splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
    </div>
  );
}
