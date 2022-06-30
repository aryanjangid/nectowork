// import React, {useState} from 'react'
// import Navbar from '../../Navbar/Navbar'

// const Page2 = (props) => {

//   const [form, setForm] = useState({
//         name4:"",
//         type:"",
//         description:"",
//         impact:"",
//         deck:"",
//         video:"",
//         testimonial:"",
//     })

//     const updateForm = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const handleNext = (e) => {
//     e.preventDefault();
//     props.changeStep("3");
//   };
//   const handlePrev = (e) => {
//     e.preventDefault();
//     props.changeStep("1");
//   };

//     return (
//         <div>

//             <Navbar />

//             <section className="main-section">
//             <h1 className="heading">Please complete your requirement</h1>
//             <h6 className="completed-message">Posting is 10% completed</h6>
//             <div className="div-container">

//             <div className="left-div">
//                 <div className="left-div">
//                     <div className="left-div-subheading">
//                     <p className="left-div-subheading-p">Solution</p>
//                     <p className="left-div-subheading-p">Engagement Type</p>
//                     <p className="left-div-subheading-p">Target Parameters</p>
//                     <p className="left-div-subheading-p">Budget</p>
//                     </div>

//                     <div className="progress progress-10" data-label="10%">
//                     </div>
//                     <h1 className="left-div-heading">
//                     Text
//                     </h1>
//                 </div>
//             </div>

//             <div className="right-div">

//                 <form action="" className="pr-form">
//                 <div style={{textAlign : "left"}}>

//                     <input type="radio" value="newRequirement" name="draft" /> Chose from existing solutions
//         <br />
//         <input type="radio" value="reuseDraft" name="draft" /> Create new solution
//         <br />
// </div>
// <br />
//         <label htmlFor="sp_solution_details_name">
//           Solution Name
//           <br />
//           <input
//             type="text"
//             name="name4"
//             onChange = {updateForm}
//             value={form.name4}
//           />
//         </label>
//         <br />
//         <label htmlFor="sp_solution_details_type">
//           Solution Type
//           <br />
//           <input
//             type="text"
//             name="type"
//             onChange = {updateForm}
//             value={form.type}
//           />
//         </label>
//         <br />
//         <div className="textarea">
//           <label htmlFor="sp_solution_details_description">
//             Solution Description
//             <br />
//             <textarea
//               rows="6"
//               cols="10"
//               name="description"
//               onChange = {updateForm}
//               value={form.description}
//             />
//           </label>
//           <br />
//           <br />
//         </div>
//         <div className="textarea">
//           <label htmlFor="sp_solution_details_impact">
//             Solution Impact
//             <br />
//             <textarea
//               rows="6"
//               cols="10"
//               name="impact"
//               onChange = {updateForm}
//               value={form.impact}
//             />
//           </label>
//           <br />
//         </div>
//         <label htmlFor="sp_solution_details_deck">
//           Solution Deck
//           <br />
//           <input
//             type="text"
//             name="deck"
//             onChange = {updateForm}
//             value={form.deck}
//           />
//         </label>
//         <br />
//         <label htmlFor="sp_solution_details_video">
//           Solution Video Link
//           <br />
//           <input
//             type="url"
//             name="video"
//             onChange = {updateForm}
//             value={form.video}
//           />
//         </label>
//         <br />
//         <label htmlFor="sp_solution_details_testimonial">
//           Customer Testimont Link/ Screenshot
//           <br />
//           <input
//             type="url"
//             name="testimonial"
//             onChange = {updateForm}
//             value={form.testimonial}
//           />
//         </label>
//         <br />

//                     <div className="buttons">
//                     <input
//                         type="submit"
//                         className="submit-buttons back"
//                         name=""
//                         value="Back"
//                         onClick={handlePrev}
//                     />
//                     <input
//                         type="submit"
//                         className="submit-buttons submit"
//                         name=""
//                         value="Next"
//                         onClick={handleNext}
//                     />
//                     </div>
//                 </form>
//             </div>

//             </div>

//             </section>
//         </div>
//     )
// }

// export default Page2

import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";

export class Page2 extends Component {
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
                    <h6 className="completed-message">Posting is 10% completed</h6>
                    <div className="div-container">
                        <div className="left-div">
                            <div className="left-div">
                                <div className="left-div-subheading">
                                    <p className="left-div-subheading-p">Solution</p>
                                    <p className="left-div-subheading-p">Engagement Type</p>
                                    <p className="left-div-subheading-p">Target Parameters</p>
                                    <p className="left-div-subheading-p">Budget</p>
                                </div>

                                <div className="progress progress-10" data-label="10%"></div>
                                <h1 className="left-div-heading">Text</h1>
                            </div>
                        </div>

                        <div className="right-div">
                            <form action="" className="pr-form">
                                <div style={{ textAlign: "left" }}>
                                    <input type="radio" value="newRequirement" name="draft" />{" "}
                                    Chose from existing solutions
                                    <br />
                                    <input type="radio" value="reuseDraft" name="draft" /> Create
                                    new solution
                                    <br />
                                </div>
                                <br />
                                <label htmlFor="sp_solution_details_name">
                                    Solution Name
                                    <br />
                                    <input
                                        type="text"
                                        name="name4"
                                        onChange={handleChange("name4")}
                                        defaultValue={values.name4}
                                    />
                                </label>
                                <br />
                                <label htmlFor="sp_solution_details_type">
                                    Solution Type
                                    <br />
                                    <input
                                        type="text"
                                        name="type"
                                        onChange={handleChange("type")}
                                        defaultValue={values.type}
                                    />
                                </label>
                                <br />
                                <div className="textarea">
                                    <label htmlFor="sp_solution_details_description">
                                        Solution Description
                                        <br />
                                        <textarea
                                            rows="6"
                                            cols="10"
                                            name="description"
                                            onChange={handleChange("description")}
                                            defaultValue={values.description}
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
                                            rows="6"
                                            cols="10"
                                            name="impact"
                                            onChange={handleChange("impact")}
                                            defaultValue={values.impact}
                                        />
                                    </label>
                                    <br />
                                </div>
                                <label htmlFor="sp_solution_details_deck">
                                    Solution Deck
                                    <br />
                                    <input
                                        type="text"
                                        name="deck"
                                        onChange={handleChange("deck")}
                                        defaultValue={values.deck}
                                    />
                                </label>
                                <br />
                                <label htmlFor="sp_solution_details_video">
                                    Solution Video Link
                                    <br />
                                    <input
                                        type="url"
                                        name="video"
                                        onChange={handleChange("video")}
                                        defaultValue={values.video}
                                    />
                                </label>
                                <br />
                                <label htmlFor="sp_solution_details_testimonial">
                                    Customer Testimont Link/ Screenshot
                                    <br />
                                    <input
                                        type="url"
                                        name="testimonial"
                                        onChange={handleChange("testimonial")}
                                        defaultValue={values.testimonial}
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

export default Page2;