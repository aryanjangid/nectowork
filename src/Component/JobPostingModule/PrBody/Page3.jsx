// import React, { useState }from 'react'
// import Navbar from '../../Navbar/Navbar'

// const Page3 = () => {

//     const [form, setForm] = useState({
//         geography:"",
//         industry:"",
//         accounts:"",
//         drive:"",
//         driveaccounts:"",
//     })

//     const updateForm = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const {values, handleChange} = this.props;

//     return (
//         <div>

//             <Navbar />

//             <section className="main-section">
//             <h1 className="heading">Please complete your requirement</h1>
//             <h6 className="completed-message">Posting is 30% completed</h6>
//             <div className="div-container">

//             <div className="left-div">
//                 <div className="left-div">
//                     <div className="left-div-subheading">
//                     <p className="left-div-subheading-p">Solution</p>
//                     <p className="left-div-subheading-p">Engagement Type</p>
//                     <p className="left-div-subheading-p">Target Parameters</p>
//                     <p className="left-div-subheading-p">Budget</p>
//                     </div>

//                     <div className="progress progress-30" data-label="30%">
//                     </div>
//                     <h1 className="left-div-heading">
//                     Text
//                     </h1>
//                 </div>
//             </div>

//             <div className="right-div">
//                     <h1 className="left">Chose Engagement Type</h1>

//                 <form action="" className="pr-form">

//                     <label htmlFor="geography">
//                     <input
//                         type="checkbox"
//                         name="geography"
//                         floatingLabel = "Geography"
//                         onChange = {handleChange}
//             value={form.geography}
//                     />

//                     Geographical Insights
//                     </label>
//                     <br />
//                     <label htmlFor="industry">
//                     <input
//                         type="checkbox"
//                         name="industry"
//                         onChange = {updateForm}
//             value={form.industry}
//                     />
//                                         Industry/ Accounts Insights
//                     </label>
//                     <br />
//                     <label htmlFor="accounts">

//                     <input
//                         type="checkbox"
//                         name="accounts"
//                         onChange = {updateForm}
//             value={form.accounts}
//                     />
//                     Account Introduction
//                     </label>
//                     <br />
//                     <label htmlFor="drive">

//                     <input
//                         type="checkbox"
//                         name="drive"
//                         onChange = {updateForm}
//             value={form.drive}
//                     />
//                     Drive Opportunity
//                     </label>
//                     <br />
//                     <label htmlFor="driveaccount">

//                     <input
//                         type="checkbox"
//                         name="driveaccount"
//                         onChange = {updateForm}
//             value={form.driveaccounts}
//                     />
//                     Drive Account
//                     </label>
//                     <br />

//                     <div className="buttons">
//                     <input
//                         type="submit"
//                         className="submit-buttons back"
//                         name=""
//                         value="Back"
//                         // onClick={handlePrev}
//                     />
//                     <input
//                         type="submit"
//                         className="submit-buttons submit"
//                         name=""
//                         value="Next"
//                         // onClick={handleNext}
//                     />
//                     </div>
//                 </form>
//             </div>

//             </div>

//             </section>
//         </div>
//     )
// }

// export default Page3

import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";

export class Page3 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <div>
                {/* <Navbar /> */}

                <section className="main-section">
                    <h1 className="heading">Please complete your requirement</h1>
                    <h6 className="completed-message">Posting is 30% completed</h6>
                    <div className="div-container">
                        <div className="left-div">
                            <div className="left-div">
                                <div className="left-div-subheading">
                                    <p className="left-div-subheading-p">Solution</p>
                                    <p className="left-div-subheading-p">Engagement Type</p>
                                    <p className="left-div-subheading-p">Target Parameters</p>
                                    <p className="left-div-subheading-p">Budget</p>
                                </div>

                                <div className="progress progress-30" data-label="30%"></div>
                                <h1 className="left-div-heading">Text</h1>
                            </div>
                        </div>

                        <div className="right-div">
                            <h1 className="left">Chose Engagement Type</h1>

                            <form action="" className="pr-form">
                                <label htmlFor="geography">
                                    <input
                                        type="checkbox"
                                        name="geography"
                                        floatingLabel="Geography"
                                        onChange={handleChange("geography")}
                                        defaultValue={values.geography}
                                    />
                                    Geographical Insights
                                </label>
                                <br />
                                <label htmlFor="industry">
                                    <input
                                        type="checkbox"
                                        name="industry"
                                        onChange={handleChange("industry")}
                                        defaultValue={values.industry}
                                    />
                                    Industry/ Accounts Insights
                                </label>
                                <br />
                                <label htmlFor="accounts">
                                    <input
                                        type="checkbox"
                                        name="accounts"
                                        onChange={handleChange("accounts")}
                                        defaultValue={values.accounts}
                                    />
                                    Account Introduction
                                </label>
                                <br />
                                <label htmlFor="drive">
                                    <input
                                        type="checkbox"
                                        name="drive"
                                        onChange={handleChange("drive")}
                                        defaultValue={values.drive}
                                    />
                                    Drive Opportunity
                                </label>
                                <br />
                                <label htmlFor="driveaccount">
                                    <input
                                        type="checkbox"
                                        name="driveaccount"
                                        onChange={handleChange("driveaccounts")}
                                        defaultValue={values.driveaccounts}
                                    />
                                    Drive Account
                                </label>
                                <br />

                                <div className="buttons">
                                    <input
                                        type="submit"
                                        className="submit-buttons back"
                                        name=""
                                        value="Back"
                                        onClick={this.back}
                                    />
                                    <input
                                        type="submit"
                                        className="submit-buttons submit"
                                        name=""
                                        value="Next"
                                        onClick={this.continue}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Page3;