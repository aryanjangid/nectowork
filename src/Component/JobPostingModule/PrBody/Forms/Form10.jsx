import React, { Fragment, useState } from "react";

const Form10 = (props) => {

    const [sp_solution_details_name, setsp_solution_details_name] = useState("");
    const [sp_solution_details_type, setsp_solution_details_type] = useState("");
    const [sp_solution_details_description, setsp_solution_details_description] =
        useState("");
    const [sp_solution_details_impact, setsp_solution_details_impact] =
        useState("");
    const [sp_solution_details_deck, setsp_solution_details_deck] = useState("");
    const [sp_solution_details_video, setsp_solution_details_video] =
        useState("");
    const [sp_solution_details_testimonial, setsp_solution_details_testimonial] =
        useState("");

    const handleNext = (e) =>
    {
        e.preventDefault();
        props.changeStep("2");
    };

    const handlePrev = (e) =>
    {
        e.preventDefault();
        props.changeStep("0");
    };

    return (
        <Fragment>
            <form action="" className="pr-form">

                <input type="radio" value="newRequirement" name="draft" /> Chose from existing solutions
                <br />
                <input type="radio" value="reuseDraft" name="draft" /> Create new solution
                <br />

                <label htmlFor="sp_solution_details_name">
                    Solution Name
                    <br />
                    <input
                        type="text"
                        name="sp_solution_details_name"
                        onChange={(event) => {
                            setsp_solution_details_name(event.target.value);
                        }}
                        value={sp_solution_details_name}
                    />
                </label>
                <br />
                <label htmlFor="sp_solution_details_type">
                    Solution Type
                    <br />
                    <input
                        type="text"
                        name="sp_solution_details_type"
                        onChange={(event) => {
                            setsp_solution_details_type(event.target.value);
                        }}
                        value={sp_solution_details_type}
                    />
                </label>
                <br />
                <div className="textarea">
                    <label htmlFor="sp_solution_details_description">
                        Solution Description
                        <br />
                        <textarea
                            name="sp_solution_details_description"
                            rows="6"
                            cols="10"
                            onChange={(event) => {
                                setsp_solution_details_description(event.target.value);
                            }}
                            value={sp_solution_details_description}
                        />
                    </label>
                    <br />
                    <br />
                </div>
                <div className="textarea">
                    <label htmlFor="sp_solution_details_impact">
                        Solution Impact
                        <br />
                        <textarea
                            name="sp_solution_details_impact"
                            rows="6"
                            cols="10"
                            onChange={(event) => {
                                setsp_solution_details_impact(event.target.value);
                            }}
                            value={sp_solution_details_impact}
                        />
                    </label>
                    <br />
                </div>
                <label htmlFor="sp_solution_details_deck">
                    Solution Deck
                    <br />
                    <input
                        type="text"
                        name="sp_solution_details_deck"
                        onChange={(event) => {
                            setsp_solution_details_deck(event.target.value);
                        }}
                        value={sp_solution_details_deck}
                    />
                </label>
                <br />
                <label htmlFor="sp_solution_details_video">
                    Solution Video Link
                    <br />
                    <input
                        type="url"
                        name="sp_solution_details_video"
                        onChange={(event) => {
                            setsp_solution_details_video(event.target.value);
                        }}
                        value={sp_solution_details_video}
                    />
                </label>
                <br />
                <label htmlFor="sp_solution_details_testimonial">
                    Customer Testimont Link/ Screenshot
                    <br />
                    <input
                        type="url"
                        name="sp_solution_details_testimonial"
                        onChange={(event) => {
                            setsp_solution_details_testimonial(event.target.value);
                        }}
                        value={sp_solution_details_testimonial}
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

export default Form10