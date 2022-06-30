import React, {Fragment, useState} from "react";
import SpForm20 from "./Forms/SpForm20";
import SpForm40 from "./Forms/SpForm40";
import SpForm70 from "./Forms/SpForm70";
import SpForm90 from "./Forms/SpForm90";

export default function RightDiv(props) {
    
    const [step, setStep] = useState(props.per);
    if(step===40){
        return (<Fragment>
            <div className="spprofile-right-div" onChange={() => props.changePercentage(40)}>
                <SpForm40 changeStep={(step) => setStep(step)}/>
            </div>
        </Fragment>);
    }
    else if(step===70){
        return (<Fragment>
            <div className="spprofile-right-div" onChange={() => props.changePercentage(70)}>
                <SpForm70 changeStep={(step) => setStep(step)}/>
            </div>
        </Fragment>);
    }
    else if(step===90){
        return (<Fragment>
            <div className="spprofile-right-div" onChange={() => props.changePercentage(90)}>
                <SpForm90 changeStep={(step) => setStep(step)}/>
            </div>
        </Fragment>);
    }
    else{
        return (<Fragment>
            <div className="spprofile-right-div" onChange={() => props.changePercentage(20)}>
                <SpForm20 changeStep={(step) => setStep(step)}/>
            </div>
        </Fragment>);
    }
    // switch (step) {
    //     case 40:
           
    //     case 70:
            
    //     case 90:
          
    //     default:
           
    // }
}
