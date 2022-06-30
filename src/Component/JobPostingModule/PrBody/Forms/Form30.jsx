import React, { Fragment, useState } from "react";

const Form30 = (props) => {

    const [geography, setGeography] = useState("");
    const [industry, setIndustry] = useState("");
    const [accounts, setAccounts] = useState("");
    const [drive, setDrive] = useState("");
    const [driveaccount, setDriveaccount] = useState("");

    const handleNext = (e) =>
    {
        e.preventDefault();
        props.changeStep("3");
    };

    const handlePrev = (e) =>
    {
        e.preventDefault();
        props.changeStep("1");
    };

    return (
        <Fragment>
            <form action="" className="pr-form">

                <label htmlFor="geography">
                    Geographical Insights
                    <input
                        type="checkbox"
                        name="geography"
                        onChange={(event) => {
                            setGeography(event.target.value);
                        }}
                        value={geography}
                    />
                </label>
                <br />
                <label htmlFor="industry">
                    Industry/ Accounts Insights
                    <input
                        type="checkbox"
                        name="industry"
                        onChange={(event) => {
                            setIndustry(event.target.value);
                        }}
                        value={industry}
                    />
                </label>
                <br />
                <label htmlFor="accounts">
                    Account Introduction
                    <input
                        type="checkbox"
                        name="accounts"
                        onChange={(event) => {
                            setAccounts(event.target.value);
                        }}
                        value={accounts}
                    />
                </label>
                <br />
                <label htmlFor="drive">
                    Drive Opportunity
                    <input
                        type="checkbox"
                        name="drive"
                        onChange={(event) => {
                            setDrive(event.target.value);
                        }}
                        value={drive}
                    />
                </label>
                <br />
                <label htmlFor="driveaccount">
                    Drive Account
                    <input
                        type="checkbox"
                        name="driveaccount"
                        onChange={(event) => {
                            setDriveaccount(event.target.value);
                        }}
                        value={driveaccount}
                    />
                </label>
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

export default Form30