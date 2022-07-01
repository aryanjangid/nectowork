import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import HomePage from "./Component/Phase1/HomePage/HomePage";
import About from "./Component/Phase1/About/about";
import Contact from "./Component/Phase1/Contact/Contact";
import FaQs from "./Component/Phase1/FAQs/FAQs";
import TermsAndCondition from "./Component/Phase1/TermsAndCondition/TermsAndCondition";
import UserAggreement from "./Component/Phase1/UserAggreement/UserAggreement";
import PrivacyPolicy from "./Component/Phase1/PrivacyPolicy/PrivacyPolicy";
import SignInSignUp from "./Component/Phase1/SignInSignUp/SignInSignUp";
import SpProfile from "./Component/Phase1/SpProfile/SpProfile";
import BpProfile from "./Component/Phase1/BpProfile/BpProfile";
import { ForgotPasswordPage } from "./Component/Phase1/PopUps/SignIn/ForgotPasswordPage";
//Phase 2

import SpProfileCompany from "./Component/Phase2/SpProfile/SpProfileParts/SpProfileCompany";
import SpProfileSolution from "./Component/Phase2/SpProfile/SpProfileParts/SpProfileSolution";
import SpProfileMyProfile from "./Component/Phase2/SpProfile/SpProfileParts/SpProfileMyProfile";
import SpRequirementPostedRequirement from "./Component/Phase2/SpProfile/SpRequirementPostedParts/SpRequirementPostedRequirement";
import SpRequirementPostedShortlisted from "./Component/Phase2/SpProfile/SpRequirementPostedParts/SpRequirementPostedShortlisted";
import SpRequirementPostedSaved from "./Component/Phase2/SpProfile/SpRequirementPostedParts/SpRequirementPostedSaved";
import SpRequirementPostedHired from "./Component/Phase2/SpProfile/SpRequirementPostedParts/SpRequirementPostedHired";
import SpRequirementPostedContact from "./Component/Phase2/SpProfile/SpRequirementPostedParts/SpRequirementPostedContact";
import BpMainProfile from "./Component/Phase2/BpProfile/BpMainProfile";
import BpAllRequirement from "./Component/Phase2/BpProfile/BpAllRequirement";
import BpAllRequirementApplied from "./Component/Phase2/BpProfile/BpAllRequirementApplied";
import BpAllRequirementSaved from "./Component/Phase2/BpProfile/BpAllRequirementSaved";
import BpAllRequirementHired from "./Component/Phase2/BpProfile/BpAllRequirementHired";
import BpAllRequirementContracted from "./Component/Phase2/BpProfile/BpAllRequirementContracted";
import SpViewOfBP from "./Component/Phase2/DifferentViews/SpViewOfBP";
import BpViewOfSp from "./Component/Phase2/DifferentViews/BpviewOfSp";
import PR from "./Component/JobPostingModule/PR";
import Sp from "./Component/Phase2/SpProfile/Sp";
import SpForm20 from "./Component/Phase1/SpProfile/RightDiv/Forms/SpForm20";
import SpForm40 from "./Component/Phase1/SpProfile/RightDiv/Forms/SpForm40";
import SpForm70 from "./Component/Phase1/SpProfile/RightDiv/Forms/SpForm70";
import SpForm90 from "./Component/Phase1/SpProfile/RightDiv/Forms/SpForm90";
import Bpprofile from "./Component/Phase1/Profiles/BPprofile"
function App() {
    return (<div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path={"/"} element={<HomePage />} />
                <Route exact path={"/about"} element={<About />} />
                <Route exact path={"/contact"} element={<Contact />} />
                <Route exact path={"/faqs"} element={<FaQs />} />
                <Route exact path={"/TermsAndCondition"} element={<TermsAndCondition />} />
                <Route exact path={"/UserAggreement"} element={<UserAggreement />} />
                <Route exact path={"/PrivacyPolicy"} element={<PrivacyPolicy />} />
                <Route exact path={"/signin-signup"} element={<SignInSignUp />} />
                <Route exact path={"/spprofile"} element={<SpProfile />} />
                <Route exact path={"/bpprofile"} element={<BpProfile />} />
                <Route exact path={"/spForm20"} element={<SpForm20 />} />
                <Route exact path={"/spForm40"} element={<SpForm40 />} />
                <Route exact path={"/spForm70"} element={<SpForm70 />} />
                <Route exact path={"/spForm90"} element={<SpForm90 />} />
                <Route exact path={"/forgot"} element={<ForgotPasswordPage />} />
                {/* phase-2 */}
                <Route exact path="/bptospprofile" element={<Bpprofile/>}/>
                <Route exact path="/Sp" element={<Sp/>}/>
                <Route exact path={"/SpProfileCompany"} element={<SpProfileCompany/>}/>
                <Route exact path={"/SpProfileSolution"} element={<SpProfileSolution/>}/>
                <Route exact path={"/SpProfileMyProfile"} element={<SpProfileMyProfile/>}/>
                <Route exact path={"/SpRequirementPostedRequirement"} element={<SpRequirementPostedRequirement/>}/>
                <Route exact path={"/SpRequirementPostedShortlisted"} element={<SpRequirementPostedShortlisted/>}/>
                <Route exact path={"/SpRequirementPostedSaved"} element={<SpRequirementPostedSaved/>}/>
                <Route exact path={"/SpRequirementPostedHired"} element={<SpRequirementPostedHired/>}/>
                <Route exact path={"/SpRequirementPostedContact"} element={<SpRequirementPostedContact/>}/>
                <Route exact path={"/BpMainProfile"} element={<BpMainProfile/>}/>
                <Route exact path={"/BpAllRequirement"} element={<BpAllRequirement/>}/>
                <Route exact path={"/BpAllRequirementApplied"} element={<BpAllRequirementApplied/>}/>
                <Route exact path={"/BpAllRequirementSaved"} element={<BpAllRequirementSaved/>}/>
                <Route exact path={"/BpAllRequirementHired"} element={<BpAllRequirementHired/>}/>
                <Route exact path={"/BpAllRequirementContracted"} element={<BpAllRequirementContracted/>}/>
                <Route exact path={"/SpViewOfBP"} element={<SpViewOfBP/>}/>
                <Route exact path={"/BpViewOfSp"} element={<BpViewOfSp/>}/>
                <Route exact path={"/jobpost"} element={<PR/>}/>
            </Routes>
        </Router>
    </div>);
}

export default App;
