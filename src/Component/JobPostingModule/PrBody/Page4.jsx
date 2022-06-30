// import React, {useState} from 'react'
// import Navbar from '../../Navbar/Navbar'

// const Page4 = () => {

//   const [form, setForm] = useState({
//         geography4:"",
//         industry4:"",
//         accounts4:"",
//         departments:"",
//         stakeholders:"",
//         experience:"",
//     })

//     const updateForm = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value,
//         })
//     }

//     return (
//         <div>

//             <Navbar />

//             <section className="main-section">
//             <h1 className="heading">Please complete your requirement</h1>
//             <h6 className="completed-message">Posting is 50% completed</h6>
//             <div className="div-container">

//             <div className="left-div">
//                 <div className="left-div">
//                     <div className="left-div-subheading">
//                     <p className="left-div-subheading-p">Solution</p>
//                     <p className="left-div-subheading-p">Engagement Type</p>
//                     <p className="left-div-subheading-p">Target Parameters</p>
//                     <p className="left-div-subheading-p">Budget</p>
//                     </div>

//                     <div className="progress progress-50" data-label="50%">
//                     </div>
//                     <h1 className="left-div-heading">
//                     Text
//                     </h1>
//                 </div>
//             </div>

//             <div className="right-div">

//                 <form action="" className="pr-form">

//                     <label htmlFor="geography">
//           Target Geography
//           <br />
//           <input
//             type="text"
//             name="geography4"
//             onChange = {updateForm}
//             value={form.geography4}
//           />
//         </label>
//         <br />
//         <label htmlFor="industry">
//           Target Industry
//           <br />
//           <input
//             type="text"
//             name="industry4"
//             onChange = {updateForm}
//             value={form.industry4}
//           />
//         </label>
//         <br />
//         <label htmlFor="accounts">
//           Target Accounts
//           <br />
//           <input
//             type="text"
//             name="accounts4"
//             onChange = {updateForm}
//             value={form.accounts4}
//           />
//         </label>
//         <br />
//         <label htmlFor="departments">
//           Target Departments
//           <br />
//           <input
//             type="text"
//             name="departments"
//             onChange = {updateForm}
//             value={form.departments}
//           />
//         </label>
//         <br />
//         <label htmlFor="stakeholders">
//           Target Stakeholders
//           <br />
//           <input
//             type="text"
//             name="stakeholders"
//             onChange = {updateForm}
//             value={form.stakeholders}
//           />
//         </label>
//         <br />
//         <label htmlFor="experience">
//           Business Partner Experience (in years)
//           <br />
//           <input
//             type="text"
//             name="experience"
//             onChange = {updateForm}
//             value={form.experience}
//           />
//         </label>
//         <br />

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

// export default Page4

import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";

export class Page4 extends Component {
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
                    <h6 className="completed-message">Posting is 50% completed</h6>
                    <div className="div-container">
                        <div className="left-div">
                            <div className="left-div">
                                <div className="left-div-subheading">
                                    <p className="left-div-subheading-p">Solution</p>
                                    <p className="left-div-subheading-p">Engagement Type</p>
                                    <p className="left-div-subheading-p">Target Parameters</p>
                                    <p className="left-div-subheading-p">Budget</p>
                                </div>

                                <div className="progress progress-50" data-label="50%"></div>
                                <h1 className="left-div-heading">Text</h1>
                            </div>
                        </div>

                        <div className="right-div">
                            <form action="" className="pr-form">
                                <label htmlFor="geography">
                                    Target Geography
                                    <br />
                                    <input
                                        type="text"
                                        name="geography4"
                                        onChange={handleChange("geography4")}
                                        defaultValue={values.geography4}
                                    />
                                </label>
                                <br />
                                <label htmlFor="industry">
                                    Target Industry
                                    <br />
                                    <input
                                        type="text"
                                        name="industry4"
                                        onChange={handleChange("industry4")}
                                        defaultValue={values.industry4}
                                    />
                                </label>
                                <br />
                                <label htmlFor="accounts">
                                    Target Accounts
                                    <br />
                                    <input
                                        type="text"
                                        name="accounts4"
                                        onChange={handleChange("accounts4")}
                                        defaultValue={values.accounts4}
                                    />
                                </label>
                                <br />
                                <label htmlFor="departments">
                                    Target Departments
                                    <br />
                                    <input
                                        type="text"
                                        name="departments"
                                        onChange={handleChange("departments")}
                                        defaultValue={values.departments}
                                    />
                                </label>
                                <br />
                                <label htmlFor="stakeholders">
                                    Target Stakeholders
                                    <br />
                                    <input
                                        type="text"
                                        name="stakeholders"
                                        onChange={handleChange("driveaccounts")}
                                        defaultValue={values.stakeholders}
                                    />
                                </label>
                                <br />
                                <label htmlFor="experience">
                                    Business Partner Experience (in years)
                                    <br />
                                    <input
                                        type="text"
                                        name="experience"
                                        onChange={handleChange("experience")}
                                        defaultValue={values.experience}
                                    />
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

export default Page4;