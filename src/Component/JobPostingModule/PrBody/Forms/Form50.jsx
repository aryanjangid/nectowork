import React, { Fragment, useState } from "react";

const Form50 = (props) => {

    const [geography, setGeography] = useState("");
    const [industry, setIndustry] = useState("");
    const [accounts, setAccounts] = useState("");
    const [departments, setDepartments] = useState("");
    const [stakeholders, setStakeholders] = useState("");
    const [experience, setExperience] = useState("");


    const handleNext = (e) =>
    {
        e.preventDefault();
        props.changeStep("4");
    };

    const handlePrev = (e) =>
    {
        e.preventDefault();
        props.changeStep("2");
    };

    return (
        <Fragment>
            <form action="" className="pr-form">
                <label htmlFor="geography">
                    Target Geography
                    <br />
                    <input
                        type="text"
                        name="geography"
                        onChange={(event) => {
                            setGeography(event.target.value);
                        }}
                        value={geography}
                    />
                </label>
                <br />
                <label htmlFor="industry">
                    Target Industry
                    <br />
                    <input
                        type="text"
                        name="industry"
                        onChange={(event) => {
                            setIndustry(event.target.value);
                        }}
                        value={industry}
                    />
                </label>
                <br />
                <label htmlFor="accounts">
                    Target Accounts
                    <br />
                    <input
                        type="text"
                        name="accounts"
                        onChange={(event) => {
                            setAccounts(event.target.value);
                        }}
                        value={accounts}
                    />
                </label>
                <br />
                <label htmlFor="departments">
                    Target Departments
                    <br />
                    <input
                        type="text"
                        name="departments"
                        onChange={(event) => {
                            setDepartments(event.target.value);
                        }}
                        value={departments}
                    />
                </label>
                <br />
                <label htmlFor="stakeholders">
                    Target Stakeholders
                    <br />
                    <input
                        type="text"
                        name="stakeholders"
                        onChange={(event) => {
                            setStakeholders(event.target.value);
                        }}
                        value={stakeholders}
                    />
                </label>
                <br />
                <label htmlFor="experience">
                    Business Partner Experience (in years)
                    <br />
                    <input
                        type="text"
                        name="experience"
                        onChange={(event) => {
                            setExperience(event.target.value);
                        }}
                        value={experience}
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

export default Form50