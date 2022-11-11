import React from 'react';
import Lottie from 'react-lottie-player';

import LottieJson from '../../lottie/lovely_dog.json';

const Animation = () => {
    return <Lottie loop animationData={LottieJson} play style={{ width: "100%", height: "50%" }} />;
};

export default Animation;
