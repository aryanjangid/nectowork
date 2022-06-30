import React, { Fragment, useState } from "react";

const Form90 = (props) => {

    const [currency, setCurrency] = useState("");
    const [minamount, setMinamount] = useState("");
    const [maxamount, setMaxamount] = useState("");

    const handleNext = (e) =>
    {
        e.preventDefault();
        props.changeStep("");
    };

    const handlePrev = (e) =>
    {
        e.preventDefault();
        props.changeStep("3");
    };

    return (
        <Fragment>
            <h1 className="left">Budget</h1>
            <form action="" className="pr-form">
                <input
                    type="text"
                    name="currency"
                    placeholder="INR"
                    onChange={(event) => {
                        setCurrency(event.target.value);
                    }}
                    value={currency}
                />
                <input
                    type = "number"
                    name="minamount"
                    placeholder="Minimum Amount"
                    onChange={(event) => {
                        setMinamount(event.target.value);
                    }}
                    value={minamount}
                />
                <input
                    type = "number"
                    name="maxamount"
                    placeholder="Naximum Amount"
                    onChange={(event) => {
                        setMaxamount(event.target.value);
                    }}
                    value={maxamount}
                />

                <h5>Professionals tend to charge INR 10,000 - INR 3,000 for projects like yours. Experts may charge higher rates.</h5>


                <br />

                <div className="buttons">
                    <input
                        type="submit"
                        className="submit-buttons back"
                        name=""
                        value="Back"
                        onClick={handlePrev}
                    />
                    <input
                        type="submit"
                        className="submit-buttons submit"
                        name=""
                        value="Next"
                        onClick={handleNext}
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default Form90