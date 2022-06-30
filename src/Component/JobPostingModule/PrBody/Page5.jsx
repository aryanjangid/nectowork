// import React, {useState} from 'react'
// import Navbar from '../../Navbar/Navbar'

// const Page4 = () => {

//     const [form, setForm] = useState({
//         currency:"",
//         minamount:"",
//         maxamount:"",
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
//             <h6 className="completed-message">Posting is 90% completed</h6>
//             <div className="div-container">

//             <div className="left-div">
//                 <div className="left-div">
//                     <div className="left-div-subheading">
//                     <p className="left-div-subheading-p">Solution</p>
//                     <p className="left-div-subheading-p">Engagement Type</p>
//                     <p className="left-div-subheading-p">Target Parameters</p>
//                     <p className="left-div-subheading-p">Budget</p>
//                     </div>

//                     <div className="progress progress-90" data-label="90%">
//                     </div>
//                     <h1 className="left-div-heading">
//                     Text
//                     </h1>
//                 </div>
//             </div>

//             <div className="right-div">
//                 <h1 className="left">Budget</h1>
//                 <form action="" className="pr-form">

//                     <input
//             type="text"
//             name="currency"
//             placeholder="INR"
//             onChange = {updateForm}
//             value={form.currency}
//         />
//         <input
//             type = "number"
//             name="minamount"
//             placeholder="Minimum Amount"
//             onChange = {updateForm}
//             value={form.minamount}
//         />
//         <input
//             type = "number"
//             name="maxamount"
//             placeholder="Naximum Amount"
//             onChange = {updateForm}
//             value={form.maxamount}
//         />
//         <br />
// <div>
//         <h5>Professionals tend to charge INR 10,000 - INR 3,000 for projects like yours. Experts may charge higher rates.</h5>
// </div>
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

export class Page5 extends Component {
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
                <section className="main-section">
                    <h1 className="heading">Please complete your requirement</h1>
                    <h6 className="completed-message">Posting is 90% completed</h6>
                    <div className="div-container">
                        <div className="left-div">
                            <div className="left-div">
                                <div className="left-div-subheading">
                                    <p className="left-div-subheading-p">Solution</p>
                                    <p className="left-div-subheading-p">Engagement Type</p>
                                    <p className="left-div-subheading-p">Target Parameters</p>
                                    <p className="left-div-subheading-p">Budget</p>
                                </div>

                                <div className="progress progress-90" data-label="90%"/>
                                <h1 className="left-div-heading">Text</h1>
                            </div>
                        </div>

                        <div className="right-div">
                            <h1 className="left">Budget</h1>
                            <form action="" className="pr-form">
                                <input
                                    type="text"
                                    name="currency"
                                    placeholder="INR"
                                    onChange={handleChange("currency")}
                                    defaultValue={values.currency}
                                />
                                <input
                                    type="number"
                                    name="minamount"
                                    placeholder="Minimum Amount"
                                    onChange={handleChange("minamount")}
                                    defaultValue={values.minamount}
                                />
                                <input
                                    type="number"
                                    name="maxamount"
                                    placeholder="Naximum Amount"
                                    onChange={handleChange("maxamount")}
                                    defaultValue={values.maxamount}
                                />
                                <br />
                                <div>
                                    <h5>
                                        Professionals tend to charge INR 10,000 - INR 3,000 for
                                        projects like yours. Experts may charge higher rates.
                                    </h5>
                                </div>
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

export default Page5;