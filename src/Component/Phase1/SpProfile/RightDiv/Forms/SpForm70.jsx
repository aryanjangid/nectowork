import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";

export default function SpForm70(props) {
    const [values, setValues] = useState({
        Solution_Name: "",
        Solution_Type: "",
        Solution_Description: "",
        Solution_Impact: "",
        Solution_deck: "",
        Solution_Video_Link: "",
        Customer_Testimont_Link: "",
        Screenshots: [],
        id:""
    });
    const [image_url, setImage_Url] = useState("");
    const handleSolution_Name = (event) => {
        setValues({...values, Solution_Name: event.target.value});
    };
    const handleSolution_Type = (event) => {
        setValues({...values, Solution_Type: event.target.value});
    };
    const handleSolution_Description = (event) => {
        setValues({...values, Solution_Description: event.target.value});
    };
    const handleSolution_Impact = (event) => {
        setValues({...values, Solution_Impact: event.target.value});
    };
    const handleSolution_deck = (event) => {
        setValues({...values, Solution_deck: event.target.value});
    };
    const handleSolution_Video_Link = (event) => {
        setValues({...values, Solution_Video_Link: event.target.value});
    };
    const handleCustomer_Testimont_Link = (event) => {
        setValues({...values, Customer_Testimont_Link: event.target.value});
    };
    const handleScreenshots = (event) => {
        setValues({...values, Screenshots: event.target.files});
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

        const data = new FormData();
        data.append("file", values.Upload_image);
        data.append("upload_preset", "nectowork");
        data.append("cloud_name", "dw1nc0h3g");
        axios.post(`https://api.cloudinary.com/v1_1/dw1nc0h3g/image/upload`, {
            data
        }).then(r => {
            console.log(r.data);
            setImage_Url(r.data.url);
        })
            .catch(err => console.log(`Sp Form 20 cloudinary error:- ${err}`))
        return () => {
            console.log("Profile Photo changed");
        };
    }, [values.Upload_image]);
    // useEffect(() => {
    //     const data = new FormData();
    //     data.append("file", values.Upload_image);
    //     data.append("upload_preset", "nectowork");
    //     data.append("cloud_name", "dw1nc0h3g");
    //     fetch("https://api.cloudinary.com/v1_1/dw1nc0h3g/image/upload", {
    //         method: "post", body: data,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setImage_Url(data.url);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     return () => {
    //         console.log("Profile Photo changed");
    //     };
    // }, [values.Screenshots]);
    const handleNext = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"70",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
        axios.post(`http://localhost:8000/SpProfile/SolutionDetails`,{
            Solution_Name: values.Solution_Name,
            Solution_Type: values.Solution_Type,
            Solution_Description: values.Solution_Description,
            Solution_Impact: values.Solution_Impact,
            Solution_deck: values.Solution_deck,
            Solution_Video_Link: values.Solution_Video_Link,
            Customer_Testimont_Link: values.Customer_Testimont_Link,
            Screenshot: image_url,
            User_ID: localStorage.getItem("PK")
        }).then(r => {
            console.log(r.data);
        }).catch(err => console.log(err))
        // fetch("http://localhost:8000/SpProfile/SolutionDetails", {
        //     method: "post", headers: {
        //         "Content-Type": "application/json",
        //     }, body: JSON.stringify({
        //         Solution_Name: values.Solution_Name,
        //         Solution_Type: values.Solution_Type,
        //         Solution_Description: values.Solution_Description,
        //         Solution_Impact: values.Solution_Impact,
        //         Solution_deck: values.Solution_deck,
        //         Solution_Video_Link: values.Solution_Video_Link,
        //         Customer_Testimont_Link: values.Customer_Testimont_Link,
        //         Screenshot: image_url,
        //         User_Id: localStorage.getItem("PK"),
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        props.changeStep(90);
    }).catch(err=>console.log(err))
    };
    const handlePrev = (e) => {
        e.preventDefault();
        props.changeStep(40);
    };
    return (<Fragment>
        <form action="" className="spprofile-form-70">
            <label className="spprofile-label" htmlFor="Solution_Name">
                <p className="p-spprofile-solution-name">Solution Name</p>
                <input
                    className="input-spprofile-solution-name"
                    type="text"
                    name="Solution_Name"
                    onChange={handleSolution_Name}
                    value={values.Solution_Name}
                />
            </label>
            <label className="spprofile-label" htmlFor="Solution_Type">
                <p className="p-spprofile-solution-type">Solution Type</p>
                <input
                    className="input-spprofile-solution-type"
                    type="text"
                    name="Solution_Type"
                    onChange={handleSolution_Type}
                    value={values.Solution_Type}
                />
            </label>
            <label htmlFor="Solution_Description">
                <p className="p-spprofile-solution-description">
                    Solution Description
                </p>
                <textarea
                    name="Solution_Description"
                    className="input-spprofile-solution-description"
                    rows="5"
                    cols="30"
                    onChange={handleSolution_Description}
                    value={values.Solution_Description}
                />
            </label>
            <label htmlFor="Solution_Impact">
                <p className="p-spprofile-solution-impact">Solution Impact</p>
                <textarea
                    className="input-spprofile-solution-impact"
                    name="Solution_Impact"
                    rows="5"
                    cols="30"
                    onChange={handleSolution_Impact}
                    value={values.Solution_Impact}
                />
            </label>
            <label className="spprofile-label" htmlFor="Solution_deck">
                <p className="p-spprofile-solution-deck">Solution Deck</p>
                <input
                    className="input-spprofile-solution-deck"
                    type="text"
                    name="Solution_deck"
                    onChange={handleSolution_deck}
                    value={values.Solution_deck}
                />
            </label>
            <label className="spprofile-label" htmlFor="Solution_Video_Link">
                <p className="p-spprofile-video-link">Solution Video Link</p>
                <input
                    className="input-spprofile-video-link"
                    type="text"
                    name="Solution_Video_Link"
                    onChange={handleSolution_Video_Link}
                    value={values.Solution_Video_Link}
                />
            </label>
            <label className="spprofile-label" htmlFor="Customer_Testimont_Link">
                <p className="p-spprofile-testimonial">Customer Testimont Link</p>
                <input
                    className="input-spprofile-testimonial"
                    type="text"
                    name="Customer_Testimont_Link"
                    onChange={handleCustomer_Testimont_Link}
                    value={values.Customer_Testimont_Link}
                />
            </label>
            <label className="spprofile-label" htmlFor="Customer_Testimont_Link">
                <p className="p-spprofile-testimonial">Screenshots</p>
                <input
                    className="input-spprofile-testimonial"
                    type="file"
                    name="Screenshots"
                    onChange={handleScreenshots}
                    value={values.Screenshots}
                />
            </label>
            {values.Screenshots == null ? (<label className="spprofile-label" htmlFor="Customer_Testimont_Link">
                <p className="p-spprofile-testimonial">Screenshots</p>
                <input
                    className="input-spprofile-testimonial"
                    type="file"
                    name="Screenshots"
                    onChange={handleScreenshots}
                    value={values.Screenshots}
                />
            </label>) : null}
            <br/>
            <div className="spprofile-flex">
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-prev"
                        onClick={handlePrev}
                    >
                        Back
                    </button>
                </label>
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-next"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </label>
            </div>
        </form>
    </Fragment>);
}
