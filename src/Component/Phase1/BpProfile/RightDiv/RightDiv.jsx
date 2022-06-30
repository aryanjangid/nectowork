import React, { Fragment, useState } from "react";
import BpForm20 from "./Forms/BpForm20";
import BpForm80 from "./Forms/BpForm80";

export default function RightDiv(props) {
    const [step, setStep] = useState(props.per);

    if(step===90){
        return (
            <Fragment>
                <div
                    className="bpprofile-right-div"
                    onChange={() => props.changePercentage(90)}
                >
                    <BpForm80 changeStep={(step) => setStep(step)} />
                </div>
            </Fragment>
        );
    }
    else{
        return (
            <Fragment>
                <div
                    className="bpprofile-right-div"
                    onChange={() => props.changePercentage(50)}
                >
                    <BpForm20 changeStep={(step) => setStep(step)} />
                </div>
            </Fragment>
        );
    }
}
