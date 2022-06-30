import React, {Fragment, useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CountryName from "../../../CountryName/CountryName";
import axios from "axios";

export default function BpForm80(props) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        bp_target_details_geography: "",
        bp_target_details_industry: "",
        bp_target_details_account: "",
        bp_target_details_department: "",
        bp_target_details_stakeholder: "",
        bp_target_details_engagement: "",
        id:""
    });

    let PK = localStorage.getItem("PK");
    useEffect(() => {

        if (PK) {
            axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
                .then(r => {
                    console.log(r.data["id"]);
                    setValues({...values,id:r.data["id"]})
                })
                .catch(err => console.log(`${err}`))
        } else {
            alert("Something went wrong. You need to login again!");
        }

    },[])


    const handlebp_target_details_geography = (event) => {
        setValues({...values, bp_target_details_geography: event.target.value});
    };
    const handlebp_target_details_industry = (event) => {
        setValues({...values, bp_target_details_industry: event.target.value});
    };
    const handlebp_target_details_account = (event) => {
        setValues({...values, bp_target_details_account: event.target.value});
    };
    const handlebp_target_details_department = (event) => {
        setValues({...values, bp_target_details_department: event.target.value});
    };
    const handlebp_target_details_stakeholder = (event) => {
        setValues({...values, bp_target_details_stakeholder: event.target.value});
    };
    const handlebp_target_details_engagement = (event) => {
        setValues({...values, bp_target_details_engagement: event.target.value});
    };
    const [bp_target_details_industrytag, setbp_target_details_industrytag] = useState([]);
    const [bp_target_details_accounttag, setbp_target_details_accounttag] = useState([]);
    const [bp_target_details_departmenttag, setbp_target_details_departmenttag] = useState([]);
    const [bp_target_details_stakeholdertag, setbp_target_details_stakeholdertag,] = useState([]);
    const [bp_target_details_engagementtag, setbp_target_details_engagementtag] = useState([]);
    const addbp_target_details_industrytag = (event) => {
        if (event.target.value !== "") {
            setbp_target_details_industrytag([...bp_target_details_industrytag, event.target.value,]);
            values.bp_target_details_industry = "";
        }
    };
    const addbp_target_details_accounttag = (event) => {
        if (event.target.value !== "") {
            setbp_target_details_accounttag([...bp_target_details_accounttag, event.target.value,]);
            values.bp_target_details_account = "";
        }
    };
    const addbp_target_details_departmenttag = (event) => {
        if (event.target.value !== "") {
            setbp_target_details_departmenttag([...bp_target_details_departmenttag, event.target.value,]);
            values.bp_target_details_department = "";
        }
    };
    const addbp_target_details_stakeholdertag = (event) => {
        if (event.target.value !== "") {
            setbp_target_details_stakeholdertag([...bp_target_details_stakeholdertag, event.target.value,]);
            values.bp_target_details_stakeholder = "";
        }
    };
    const addbp_target_details_engagementtag = (event) => {
        if (event.target.value !== "") {
            setbp_target_details_engagementtag([...bp_target_details_engagementtag, event.target.value,]);
            values.bp_target_details_engagement = "";
        }
    };
    const removebp_target_details_industrytag = (indexToRemove) => {
        setbp_target_details_industrytag(bp_target_details_industrytag.filter((_, index) => index !== indexToRemove));
    };
    const removebp_target_details_accounttag = (indexToRemove) => {
        setbp_target_details_accounttag(bp_target_details_accounttag.filter((_, index) => index !== indexToRemove));
    };
    const removebp_target_details_departmenttag = (indexToRemove) => {
        setbp_target_details_departmenttag(bp_target_details_departmenttag.filter((_, index) => index !== indexToRemove));
    };
    const removebp_target_details_stakeholdertag = (indexToRemove) => {
        setbp_target_details_stakeholdertag(bp_target_details_stakeholdertag.filter((_, index) => index !== indexToRemove));
    };
    const removebp_target_details_engagementtag = (indexToRemove) => {
        setbp_target_details_engagementtag(bp_target_details_engagementtag.filter((_, index) => index !== indexToRemove));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"100",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
        axios.post(`http://localhost:8000/TargetDetails`, {
            User_ID: localStorage.getItem("PK"),
            Target_Goegraphy: values.bp_target_details_geography.toString(),
            Target_Industry: bp_target_details_industrytag.toString(),
            Target_Account: bp_target_details_accounttag.toString(),
            Target_Department: bp_target_details_departmenttag.toString(),
            Target_Stakeholders: bp_target_details_stakeholdertag.toString(),
            Engagement_Type: bp_target_details_engagementtag.toString()
        })
            .then(r => {
                console.log(r.data);
                navigate("/BpAllRequirement");
            })
            .catch(err => console.log(err))
        }).catch(err=>console.log(err))
        // fetch("http://localhost:8000/BpProfile/Business", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         User_Id: localStorage.getItem("PK"),
        //         Target_Goegraphy: values.bp_target_details_geography.toString(),
        //         Target_Industry: bp_target_details_industrytag.toString(),
        //         Target_Account: bp_target_details_accounttag.toString(),
        //         Target_Department: bp_target_details_departmenttag.toString(),
        //         Target_Stakeholders: bp_target_details_stakeholdertag.toString(),
        //         Engagement_Type: bp_target_details_engagementtag.toString(),
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         navigate("/BpAllRequirement");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };
    const handlePrev = (e) => {
        e.preventDefault();
        props.changeStep(1);
    };
    return (<Fragment>
        <form className="bpprofile-form-90">
            <label
                className="bpprofile-label"
                htmlFor="bp_target_details_geography"
            >
                <p className="p-bpprofile-target-geography">Target Geography</p>
                <select
                    list="bp_target_details_geography"
                    name="bp_target_details_geography"
                    className="input-bpprofile-target-geography"
                    onChange={handlebp_target_details_geography}
                    value={values.bp_target_details_geography}
                >
                    <CountryName/>
                </select>
            </label>
            <label className="bpprofile-label" htmlFor="bp_target_details_industry">
                <p className="p-bpprofile-target-industry">Target Industry</p>
                <div className="tags-input">
                    <ul id="tags">
                        {bp_target_details_industrytag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removebp_target_details_industrytag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="bp_target_details_industry"
                        name="bp_target_details_industry"
                        className="input-bpprofile-target-industry"
                        onChange={handlebp_target_details_industry}
                        value={values.bp_target_details_industry}
                        onKeyUp={(event) => event.key === ";" ? addbp_target_details_industrytag(event) : null}
                        onClick={addbp_target_details_industrytag}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="bp_target_details_industry">
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
            <label className="bpprofile-label" htmlFor="bp_target_details_account">
                <p className="p-bpprofile-target-account">Target Account</p>
                <div className="tags-input">
                    <ul id="tags">
                        {bp_target_details_accounttag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removebp_target_details_accounttag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="bp_target_details_account"
                        name="bp_target_details_account"
                        className="input-bpprofile-target-account"
                        onChange={handlebp_target_details_account}
                        value={values.bp_target_details_account}
                        onKeyUp={(event) => event.key === ";" ? addbp_target_details_accounttag(event) : null}
                        onClick={addbp_target_details_accounttag}
                        placeholder="Type ; after typing"
                    />
                </div>
            </label>
            <label
                className="bpprofile-label"
                htmlFor="bp_target_details_department"
            >
                <p className="p-bpprofile-target-department">Target Department</p>
                <div className="tags-input">
                    <ul id="tags">
                        {bp_target_details_departmenttag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removebp_target_details_departmenttag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="bp_target_details_department"
                        name="bp_target_details_department"
                        className="input-bpprofile-target-department"
                        onChange={handlebp_target_details_department}
                        value={values.bp_target_details_department}
                        onClick={addbp_target_details_departmenttag}
                        onKeyUp={(event) => event.key === ";" ? addbp_target_details_departmenttag(event) : null}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="bp_target_details_department">
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
                className="bpprofile-label"
                htmlFor="bp_target_details_stakeholder"
            >
                <p className="p-bpprofile-target-stakeholder">Target Stakeholder</p>
                <div className="tags-input">
                    <ul id="tags">
                        {bp_target_details_stakeholdertag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removebp_target_details_stakeholdertag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="bp_target_details_stakeholder"
                        name="bp_target_details_stakeholder"
                        className="input-bpprofile-target-stakeholder"
                        onChange={handlebp_target_details_stakeholder}
                        value={values.bp_target_details_stakeholder}
                        onKeyUp={(event) => event.key === ";" ? addbp_target_details_stakeholdertag(event) : null}
                        placeholder="Type ; after typing or click in box"
                        onClick={addbp_target_details_stakeholdertag}
                    />
                    <datalist id="bp_target_details_stakeholder">
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
                className="bpprofile-label"
                htmlFor="bp_target_details_engagement"
            >
                <p className="p-bpprofile-engagement-type">Engagement Type</p>
                <div className="tags-input">
                    <ul id="tags">
                        {bp_target_details_engagementtag.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removebp_target_details_engagementtag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="bp_target_details_engagement"
                        name="bp_target_details_engagement"
                        className="input-bpprofile-engagement-type"
                        onChange={handlebp_target_details_engagement}
                        value={values.bp_target_details_engagement}
                        onKeyUp={(event) => event.key === ";" ? addbp_target_details_engagementtag(event) : null}
                        placeholder="Type ; after typing or click in box"
                        onClick={addbp_target_details_engagementtag}
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
            <div className="bottom-bpprofile-buttons">
                <label className="bpprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="bpprofile-button-next"
                        onClick={handlePrev}
                    >
                        Back
                    </button>
                </label>
                <label className="bpprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="bpprofile-button-next"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </label>
            </div>
        </form>
    </Fragment>);
}
