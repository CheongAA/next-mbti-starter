import React from "react";
import Lottie from "react-lottie-player";

import LottieJson from "../../lottie/dog.json";

const Animation = () => {
  return <Lottie loop animationData={LottieJson} play />;
};

export default Animation;
