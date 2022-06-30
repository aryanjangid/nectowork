import React, { Fragment, useState } from "react";
import Form10 from "./Forms/Form10";
import Form30 from "./Forms/30";
import Form50 from "./Forms/50";
import Form90 from "./Forms/90";
import Page1 from "./Page1"
import Page6 from "./Page6"

export default function RightDiv(props) {
    const [step, setStep] = useState("1");
    switch (step) {
        case "0":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("0")}>
                        <Page1 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        case "1":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("10")}>
                        <Form10 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        case "2":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("30")}>
                        <Form30 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        case "3":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("50")}>
                        <Form50 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        case "4":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("90")}>
                        <Form90 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        case "5":
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("100")}>
                        <Page6 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
        default:
            return (
                <Fragment>
                    <div className="right-div" onChange={() => props.changePercentage("10")}>
                        <Form10 changeStep={(step) => setStep(step)} />
                    </div>
                </Fragment>
            );
    }
}