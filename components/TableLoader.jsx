import React from "react";
import { useLottie } from "lottie-react";
import TableLoader from "../assets/TableLoader.json"

const LottieTable = () => {
    const options = {
        animationData: TableLoader,
        loop: true
    };

    const { View } = useLottie(options);
    return <>{View}</>

};

export default LottieTable;


