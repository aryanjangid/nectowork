import React, {Fragment, useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CountryName from "../../../CountryName/CountryName";
import axios from "axios";

export default function SpForm90(props) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        sp_target_details_geography: "",
        sp_target_details_industry: "",
        sp_target_details_account: "",
        sp_target_details_department: "",
        sp_target_details_stakeholder: "",
        sp_target_details_engagement: "",
        id:""
    });

    const handlesp_target_details_geography = (event) => {
        setValues({...values, sp_target_details_geography: event.target.value});
    };
    const handlesp_target_details_industry = (event) => {
        setValues({...values, sp_target_details_industry: event.target.value});
    };
    const handlesp_target_details_account = (event) => {
        setValues({...values, sp_target_details_account: event.target.value});
    };
    const handlesp_target_details_department = (event) => {
        setValues({...values, sp_target_details_department: event.target.value});
    };
    const handlesp_target_details_stakeholder = (event) => {
        setValues({...values, sp_target_details_stakeholder: event.target.value});
    };
    const handlesp_target_details_engagement = (event) => {
        setValues({...values, sp_target_details_engagement: event.target.value});
    };

    let PK = localStorage.getItem("PK");
    useEffect(() => {
        if (PK) {
            axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
                .then(r => {
                    console.log(r.data["id"]);
                    setValues({...values,id:r.data["id"]})
                })
                .catch(err => console.log(`Sp Form 20 Error:- ${err}`))
        } else {
            alert("Something went wrong. You need to login again!");
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post(`http://localhost:8000/TargetDetails`, {
        //     User_ID: localStorage.getItem("PK"),
        //     Engagement_Type: sp_target_details_engagementtag.toString(),
        //     Target_Account: sp_target_details_accounttag.toString(),
        //     Target_Department: sp_target_details_departmenttag.toString(),
        //     Target_Goegraphy: values.sp_target_details_geography.toString(),
        //     Target_Industry: sp_target_details_industrytag.toString(),
        //     Target_Stakeholders: sp_target_details_stakeholdertag.toString()
        // }).then(r => {
        //     console.log(r.data);
        //     navigate("/SpRequirementPostedRequirement")
        // }).catch(err => console.log(err))
        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"100",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
        fetch("http://localhost:8000/TargetDetails", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                User_ID: localStorage.getItem("PK"),
                Engagement_Type: sp_target_details_engagementtag.toString(),
                Target_Account: sp_target_details_accounttag.toString(),
                Target_Department: sp_target_details_departmenttag.toString(),
                Target_Goegraphy: values.sp_target_details_geography.toString(),
                Target_Industry: sp_target_details_industrytag.toString(),
                Target_Stakeholders: sp_target_details_stakeholdertag.toString(),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate("/Sp");
            })
            .catch((err) => {
                console.log(err);
            });
        }).catch(err=>console.log(err))
    };
    const handlePrev = (e) => {
        e.preventDefault();
        props.changeStep(3);
    };
    const [sp_target_details_industrytag, setSp_target_details_industrytag] = useState([]);
    const [sp_target_details_accounttag, setSp_target_details_accounttag] = useState([]);
    const [sp_target_details_departmenttag, setSp_target_details_departmenttag] = useState([]);
    const [sp_target_details_stakeholdertag, setSp_target_details_stakeholdertag,] = useState([]);
    const [sp_target_details_engagementtag, setSp_target_details_engagementtag] = useState([]);
    const addsp_target_details_industrytag = (event) => {
        if (event.target.value !== "") {
            setSp_target_details_industrytag([...sp_target_details_industrytag, event.target.value.replace(";", ""),]);
            values.sp_target_details_industry = "";
        }
    };
    const addsp_target_details_accounttag = (event) => {
        if (event.target.value !== "") {
            setSp_target_details_accounttag([...sp_target_details_accounttag, event.target.value.replace(";", ""),]);
            values.sp_target_details_account = "";
        }
    };
    const addsp_target_details_departmenttag = (event) => {
        if (event.target.value !== "") {
            setSp_target_details_departmenttag([...sp_target_details_departmenttag, event.target.value.replace(";", ""),]);
            values.sp_target_details_department = "";
        }
    };
    const addsp_target_details_stakeholdertag = (event) => {
        if (event.target.value !== "") {
            setSp_target_details_stakeholdertag([...sp_target_details_stakeholdertag, event.target.value.replace(";", ""),]);
            values.sp_target_details_stakeholder = "";
        }
    };
    const addsp_target_details_engagementtag = (event) => {
        if (event.target.value !== "") {
            setSp_target_details_engagementtag([...sp_target_details_engagementtag, event.target.value.replace(";", ""),]);
            values.sp_target_details_engagement = "";
        }
    };
    const removesp_target_details_industrytag = (indexToRemove) => {
        setSp_target_details_industrytag(sp_target_details_industrytag.filter((_, index) => index !== indexToRemove));
    };
    const removesp_target_details_accounttag = (indexToRemove) => {
        setSp_target_details_accounttag(sp_target_details_accounttag.filter((_, index) => index !== indexToRemove));
    };
    const removesp_target_details_departmenttag = (indexToRemove) => {
        setSp_target_details_departmenttag(sp_target_details_departmenttag.filter((_, index) => index !== indexToRemove));
    };
    const removesp_target_details_stakeholdertag = (indexToRemove) => {
        setSp_target_details_stakeholdertag(sp_target_details_stakeholdertag.filter((_, index) => index !== indexToRemove));
    };
    const removesp_target_details_engagementtag = (indexToRemove) => {
        setSp_target_details_engagementtag(sp_target_details_engagementtag.filter((_, index) => index !== indexToRemove));
    };
    return (<Fragment>
        <form className="spprofile-form-90">
            <label
                className="spprofile-label"
                htmlFor="sp_target_details_geography"
            >
                <p className="p-spprofile-target-geography">Target Geography</p>
                <select
                    id="Country"
                    name="sp_target_details_geography"
                    className="input-spprofile-target-geography"
                    onChange={handlesp_target_details_geography}
                    value={values.sp_target_details_geography}
                >
                    <CountryName/>
                </select>
            </label>
            <label className="spprofile-label" htmlFor="sp_target_details_industry">
                <p className="p-spprofile-target-industry">Target Industry</p>
                <div className="tags-input">
                    <ul id="tags">
                        {sp_target_details_industrytag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removesp_target_details_industrytag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="sp_target_details_industry"
                        name="sp_target_details_industry"
                        className="input-spprofile-target-industry"
                        onChange={handlesp_target_details_industry}
                        value={values.sp_target_details_industry}
                        onKeyUp={(event) => event.key === ";" ? addsp_target_details_industrytag(event) : null}
                        onClick={addsp_target_details_industrytag}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="sp_target_details_industry">
                        <option value="Auto Components" label="Auto Components">
                            Auto Components
                        </option>
                        <option value="Automobiles" label="Automobiles">
                            Automobiles
                        </option>
                        <option value="Aviation" label="Aviation">
                            Aviation
                        </option>
                        <option
                            value="Banking, Financial Services, Insurance"
                            label="Banking, Financial Services, Insurance"
                        >
                            Banking, Financial Services, Insurance
                        </option>
                        <option value="Chemicals" label="Chemicals">
                            Chemicals
                        </option>
                        <option value="Consumer Durables" label="Consumer Durables">
                            Consumer Durables
                        </option>
                        <option
                            value="Defence Manufacturing"
                            label="Defence Manufacturing"
                        >
                            Defence Manufacturing
                        </option>
                        <option value="E-Commerce" label="E-Commerce">
                            E-Commerce
                        </option>
                        <option
                            value="Education And Training"
                            label="Education And Training"
                        >
                            Education And Training
                        </option>
                        <option
                            value="Electronics System Design & Manufacturing Screen reader support enabled."
                            label="Electronics System Design & Manufacturing Screen reader support enabled."
                        >
                            Electronics System Design & Manufacturing Screen reader support
                            enabled.
                        </option>
                        <option
                            value="Engineering And Capital Goods"
                            label="Engineering And Capital Goods"
                        >
                            Engineering And Capital Goods
                        </option>
                        <option value="FMCG" label="FMCG">
                            FMCG
                        </option>
                        <option value="Gems And Jewellery" label="Gems And Jewellery">
                            Gems And Jewellery
                        </option>
                        <option value="Healthcare" label="Healthcare">
                            Healthcare
                        </option>
                        <option value="IT & ITES" label="IT & ITES">
                            IT & ITES
                        </option>
                        <option value="Manufacturing" label="Manufacturing">
                            Manufacturing
                        </option>
                        <option
                            value="Media And Entertainment"
                            label="Media And Entertainment"
                        >
                            Media And Entertainment
                        </option>
                        <option value="Medical Devices" label="Medical Devices">
                            Medical Devices
                        </option>
                        <option value="Oil And Gas" label="Oil And Gas">
                            Oil And Gas
                        </option>
                        <option value="Pharmaceuticals" label="Pharmaceuticals">
                            Pharmaceuticals
                        </option>
                        <option value="Power" label="Power">
                            Power
                        </option>
                        <option value="Railways" label="Railways">
                            Railways
                        </option>
                        <option value="Real Estate" label="Real Estate">
                            Real Estate
                        </option>
                        <option value="Renewable Energy" label="Renewable Energy">
                            Renewable Energy
                        </option>
                        <option
                            value="Roads and Infrastructure"
                            label="Roads and Infrastructure"
                        >
                            Roads and Infrastructure
                        </option>
                        <option value="Telecommunications" label="Telecommunications">
                            Telecommunications
                        </option>
                        <option
                            value="Tourism And Hospitality"
                            label="Tourism And Hospitality"
                        >
                            Tourism And Hospitality
                        </option>
                        <option value="Other" label="Other">
                            Other
                        </option>
                    </datalist>
                </div>
            </label>
            <label className="spprofile-label" htmlFor="sp_target_details_account">
                <p className="p-spprofile-target-account">Target Account</p>
                <div className="tags-input">
                    <ul id="tags">
                        {sp_target_details_accounttag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removesp_target_details_accounttag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="sp_target_details_account"
                        name="sp_target_details_account"
                        className="input-spprofile-target-account"
                        onChange={handlesp_target_details_account}
                        value={values.sp_target_details_account}
                        onKeyUp={(event) => event.key === ";" ? addsp_target_details_accounttag(event) : null}
                        placeholder="Type ; after typing"
                    />
                </div>
            </label>
            <label
                className="spprofile-label"
                htmlFor="sp_target_details_department"
            >
                <p className="p-spprofile-target-department">Target Department</p>
                <div className="tags-input">
                    <ul id="tags">
                        {sp_target_details_departmenttag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removesp_target_details_departmenttag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="sp_target_details_department"
                        name="sp_target_details_department"
                        className="input-spprofile-target-department"
                        onChange={handlesp_target_details_department}
                        onClick={addsp_target_details_departmenttag}
                        value={values.sp_target_details_department}
                        onKeyUp={(event) => event.key === ";" ? addsp_target_details_departmenttag(event) : null}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="sp_target_details_department">
                        <option value="Sales" label="Sales">
                            Sales
                        </option>
                        <option value="Marketing" label="Marketing">
                            Marketing
                        </option>
                        <option value="Legal" label="Legal">
                            Legal
                        </option>
                        <option
                            value="Finance and Accounting"
                            label="Finance and Accounting"
                        >
                            Finance and Accounting
                        </option>
                        <option value="Procurement" label="Procurement">
                            Procurement
                        </option>
                        <option value="Management" label="Management">
                            Management
                        </option>
                        <option value="IT" label="IT">
                            IT
                        </option>
                        <option value="Administration" label="Administration">
                            Administration
                        </option>
                        <option value="Human Resource" label="Human Resource">
                            Human Resource
                        </option>
                        <option value="Operations" label="Operations">
                            Operations
                        </option>
                        <option value="Product" label="Product">
                            Product
                        </option>
                        <option value="Other" label="Other">
                            Other
                        </option>
                    </datalist>
                </div>
            </label>
            <label
                className="spprofile-label"
                htmlFor="sp_target_details_stakeholder"
            >
                <p className="p-spprofile-target-stakeholder">Target Stakeholder</p>
                <div className="tags-input">
                    <ul id="tags">
                        {sp_target_details_stakeholdertag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removesp_target_details_stakeholdertag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="sp_target_details_stakeholder"
                        name="sp_target_details_stakeholder"
                        className="input-spprofile-target-stakeholder"
                        onChange={handlesp_target_details_stakeholder}
                        onClick={addsp_target_details_stakeholdertag}
                        value={values.sp_target_details_stakeholder}
                        onKeyUp={(event) => event.key === ";" ? addsp_target_details_stakeholdertag(event) : null}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="sp_target_details_stakeholder">
                        <option
                            value="Top Executives (Eg. CXOs, President and MD etc.)"
                            label="Top Executives (Eg. CXOs, President and MD etc.)"
                        >
                            Top Executives (Eg. CXOs, President and MD etc.)
                        </option>
                        <option
                            value="Senior Executive - (Eg. Head, VPs and Directors etc.)"
                            label="Senior Executive - (Eg. Head, VPs and Directors etc.)"
                        >
                            Senior Executive - (Eg. Head, VPs and Directors etc.)
                        </option>
                        <option
                            value="Mid Executives - (Eg. General Manager, Manager etc.)"
                            label="Mid Executives - (Eg. General Manager, Manager etc.)"
                        >
                            Mid Executives - (Eg. General Manager, Manager etc.)
                        </option>
                    </datalist>
                </div>
            </label>
            <label
                className="spprofile-label"
                htmlFor="sp_target_details_engagement"
            >
                <p className="p-spprofile-engagement-type">Engagement Type</p>
                <div className="tags-input">
                    <ul id="tags">
                        {sp_target_details_engagementtag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removesp_target_details_engagementtag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="sp_target_details_engagement"
                        name="sp_target_details_engagement"
                        className="input-spprofile-engagement-type"
                        onChange={handlesp_target_details_engagement}
                        onClick={addsp_target_details_engagementtag}
                        value={values.sp_target_details_engagement}
                        onKeyUp={(event) => event.key === ";" ? addsp_target_details_engagementtag(event) : null}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="sp_target_details_engagement">
                        <option
                            value="Advisory Service (Product, Positioning, Insight etc) from Business Partner"
                            label="Advisory Service (Product, Positioning, Insight etc) from Business Partner"
                        >
                            Advisory Service (Product, Positioning, Insight etc) from
                            Business Partner
                        </option>
                        <option value="Introduction Meeting" label="Introduction Meeting">
                            Introduction Meeting
                        </option>
                        <option value="Drive Opportunity" label="Drive Opportunity">
                            Drive Opportunity
                        </option>
                        <option value="Drive Account" label="Drive Account">
                            Drive Account
                        </option>
                    </datalist>
                </div>
            </label>
            <br/>
            <div
                className="bottom-spprofile-buttons"
                style={{margin: "20px 0 0"}}
            >
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-next"
                        onClick={handlePrev}
                    >
                        Back
                    </button>
                </label>
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-next"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </label>
            </div>
        </form>
    </Fragment>);
}
