// import React, {useState} from 'react'
// import Navbar from '../../Navbar/Navbar'
// const Page1 = () => {
//     const [form, setForm] = useState({
//         create:"",
//         reuse:"",
//         existing:"",
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
//             <div className="main">
//                 <div className="div1">
//                     <h1>Getting Started</h1>
//                 </div>
//                 <br />
//                 <div className="div1">
//                     <form>
//                         <div className="pr-form display-block">
//                     <input type="radio" value="newRequirement" name="create" onChange = {updateForm}
//             value={form.create} /> Create a new requirement
//                     <br />
//                     <input type="radio" value="reuseDraft" name="reuse" onChange = {updateForm}
//             value={form.reuse} /> Reuse a draft
//                     <br />
//                     <input type="radio" value="existingRequirement" name="existing" onChange = {updateForm}
//             value={form.existing} /> Using an existing requirement
//                         </div>
//                     <div className="buttons">
//                     <br />
//           <input
//             type="submit"
//             className="submit-buttons back"
//             name=""
//             value="Back"
//             // onClick={handlePrev}
//           />
//           <input
//             type="submit"
//             className="submit-buttons submit"
//             name=""
//             value="Next"
//             // onClick={handleNext}
//           />
//             </div>
//                     </form>
//                 </div>
// <br />
//                 <div className="div1">
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Page1
import React, {Component} from "react";
export class Page1 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const {values, handleChange} = this.props;
        return (<div>
            <div className="main">
                <div className="div1">
                    <h1>Getting Started</h1>
                </div>
                <br/>
                <div className="div1">
                    <form>
                        <div className="pr-form display-block">
                            <input
                                type="radio"
                                name="job-post-get-started"
                                onChange={handleChange("create")}
                                defaultValue={values.create}
                            />
                            Create a new requirement
                            <br/>
                            <input
                                type="radio"
                                name="job-post-get-started"
                                onChange={handleChange("reuse")}
                                defaultValue={values.reuse}
                            />
                            Reuse a draft
                            <br/>
                            <input
                                type="radio"
                                name="job-post-get-started"
                                onChange={handleChange("existing")}
                                defaultValue={values.existing}
                            />
                            Using an existing requirement
                        </div>
                        <div className="buttons">
                            <br/>

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
                <br/>
            </div>
        </div>);
    }
}

export default Page1;