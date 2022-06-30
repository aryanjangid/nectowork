// import React, { useState } from 'react'
// import Page1 from './Page1'
// import Page2 from './Page2'
// import Page3 from './Page3'
// import Page4 from './Page4'
// import Page5 from './Page5'
// import Page6 from './Page6'
// export default function PRForm(props) {
//     // // Next Step
//     // nextStep = () => {
//     //     const step = this.state;
//     //     this.setState({
//     //         step: step + 1
//     //     });
//     // }
//     // // Previous Step
//     // previousStep = () => {
//     //     const step = this.state;
//     //     this.setState({
//     //         step: step - 1
//     //     });
//     // }
//     const [step, setStep] = useState("1");
//         switch (step) {
//             case 1:
//                 return(
//                     <Page1
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             case 2:
//                 return(
//                     <Page2
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             case 3:
//                 return(
//                     <Page3
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             case 4:
//                 return(
//                     <Page4
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             case 5:
//                 return(
//                     <Page5
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             case 6:
//                 return(
//                     <Page6
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//             default:
//                 return(
//                     <Page1
//                         changeStep={(step) => setStep(step)}
//                     />
//                 )
//         }
//     }

import React, {Component} from "react";

// Pages
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

export class PRForm extends Component {
    state = {
        step: 1, create: "", reuse: "",
        existing: "",
        name4: "",
        type: "",
        description: "",
        impact: "",
        deck: "",
        video: "",
        testimonial: "",
        geography: "",
        industry: "",
        accounts: "",
        drive: "",
        driveaccounts: "",
        geography4: "",
        industry4: "",
        accounts4: "",
        departments: "",
        stakeholders: "",
        experience: "",
        currency: "",
        minamount: "",
        maxamount: "",
    };

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        fetch("http://localhost:8000/PostRequirement/", {
            method: "post", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        this.setState({
            step: step + 1,
        });
    };

    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value});
    };

    render() {
        const {step} = this.state;
        const {
            create,
            reuse,
            existing,
            name4,
            type,
            description,
            impact,
            deck,
            video,
            testimonial,
            geography,
            industry,
            accounts,
            drive,
            driveaccounts,
            geography4,
            industry4,
            accounts4,
            departments,
            stakeholders,
            experience,
            currency,
            minamount,
            maxamount,
        } = this.state;

        const values = {
            create,
            reuse,
            existing,
            name4,
            type,
            description,
            impact,
            deck,
            video,
            testimonial,
            geography,
            industry,
            accounts,
            drive,
            driveaccounts,
            geography4,
            industry4,
            accounts4,
            departments,
            stakeholders,
            experience,
            currency,
            minamount,
            maxamount,
        };

        switch (step) {
            case 1:
                return (<Page1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />);

            case 2:
                return (<Page2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />);

            case 3:
                return (<Page3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />);

            case 4:
                return (<Page4
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />);

            case 5:
                return (<Page5
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />);

            case 6:
                return (<Page6
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />);

            default:
                return (<Page1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />);
        }
    }
}

export default PRForm;