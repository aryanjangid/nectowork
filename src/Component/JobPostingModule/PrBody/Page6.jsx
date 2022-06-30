// // import React from "react";
// // import Navbar from "../../Navbar/Navbar";
// // const Page6 = () => {
// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="main">
// //         <div>
// //           <h1>Review Your Requirement And Finish Posting</h1>
// //         </div>
// //         <br />
// //         <div>
// //           <h2>Solution</h2>
// //           <label>
// //             Solution Name
// //             <br />
// //             <input type="text" placeholder="Chatbot" />
// //           </label>
// //           <label>
// //             Solution Type
// //             <br />
// //             <input type="text" placeholder="Digital Solution" />
// //           </label>
// //           <label>
// //             Solution Description
// //             <br />
// //             <textarea
// //               type="text"
// //               rows="6"
// //               cols="10"
// //               placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
// //             />
// //           </label>
// //           <label>
// //             Solution Impact
// //             <br />
// //             <textarea
// //               type="text"
// //               rows="6"
// //               cols="10"
// //               placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// //             />
// //           </label>
// //         </div>
// //         <div>
// //           <h2>Engagement Type</h2>
// //           <label>
// //             <input type="text" placeholder="Geographical Insights" />
// //           </label>
// //         </div>
// //         <div>
// //           <h2>Target Parameters</h2>
// //           <label>
// //             Target Geography
// //             <br />
// //             <input type="text" placeholder="India" />
// //           </label>
// //           <label>
// //             Target Industry
// //             <br />
// //             <input type="text" placeholder="Automobile" />
// //           </label>
// //           <label>
// //             Target Accounts
// //             <br />
// //             <input type="text" placeholder="TATA" />
// //           </label>
// //           <label>
// //             Target Department
// //             <br />
// //             <input type="text" placeholder="MArketing Team" />
// //           </label>
// //           <label>
// //             Target Stakeholder
// //             <br />
// //             <input type="text" placeholder="MD" />
// //           </label>
// //           <label>
// //             Business Partner Experience (in years)
// //             <br />
// //             <input type="text" placeholder="10+" />
// //           </label>
// //         </div>
// //         <div>
// //           <h2>Budget</h2>
// //           <label>
// //             <input type="text" placeholder="Curreny" />
// //           </label>
// //           <label>
// //             <input type="number" placeholder="Minimum Amount" />
// //           </label>
// //           <label>
// //             <input type="number" placeholder="Maximum Amount" />
// //           </label>
// //         </div>
// //         <div className="buttons">
// //           <input
// //             type="submit"
// //             className="submit-buttons back"
// //             name=""
// //             value="Save"
// //             onClick=""
// //           />
// //           <input
// //             type="submit"
// //             className="submit-buttons submit"
// //             name=""
// //             value="Post"
// //             onClick=""
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Page6;

// import React, { Component } from "react";
// import { List, ListItem, ListItemText } from "@material-ui/core/";
//
// export class Page6 extends Component {
//     continue = (e) => {
//         e.preventDefault();
//         // PROCESS FORM //
//         this.props.nextStep();
//     };
//
//     back = (e) => {
//         e.preventDefault();
//         this.props.prevStep();
//     };
//
//     render() {
//         const {
//             values: {
//                 name4,
//                 type,
//                 description,
//                 impact,
//                 geography,
//                 geography4,
//                 industry4,
//                 accounts4,
//                 departments,
//                 stakeholders,
//                 experience,
//                 currency,
//                 minamount,
//                 maxamount,
//             },
//         } = this.props;
//
//         return (
//             <div>
//                 <div className="main">
//                     <div>
//                         <h1>Review Your Requirement And Finish Posting</h1>
//                     </div>
//                     <br />
//                     <div>
//                         <h2>Solution</h2>
//                         <List>
//                             <ListItem>
//                                 <ListItemText primary="Solution Name" secondary={name4} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Solution Type" secondary={type} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Solution Description"
//                                     secondary={description}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Solution Imapct" secondary={impact} />
//                             </ListItem>
//                         </List>
//                     </div>
//                     <br />
//
//                     <div>
//                         <h2>Engagement Type</h2>
//                         <List>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Geographical Insights"
//                                     secondary={geography}
//                                 />
//                             </ListItem>
//                         </List>
//                     </div>
//                     <br />
//
//                     <div>
//                         <h2>Target Parameters</h2>
//                         <List>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Target Geography"
//                                     secondary={geography4}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Target Industry" secondary={industry4} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Target Accounts" secondary={accounts4} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Target Department"
//                                     secondary={departments}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Target Stakeholders"
//                                     secondary={stakeholders}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Business Partner Experience (in years)"
//                                     secondary={experience}
//                                 />
//                             </ListItem>
//                         </List>
//                     </div>
//                     <br />
//
//                     <div>
//                         <h2>Budget</h2>
//                         <List>
//                             <ListItem>
//                                 <ListItemText primary="Currency" secondary={currency} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Minimum Amount" secondary={minamount} />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText primary="Maximum Amount" secondary={maxamount} />
//                             </ListItem>
//                         </List>
//                     </div>
//                     <br />
//
//                     <div className="buttons">
//                         <input
//                             type="submit"
//                             className="submit-buttons back"
//                             name=""
//                             value="Back"
//                             onClick={this.back}
//                         />
//                         <input
//                             type="submit"
//                             className="submit-buttons back"
//                             name=""
//                             value="Save"
//                             onClick=""
//                         />
//                         <input
//                             type="submit"
//                             className="submit-buttons submit"
//                             name=""
//                             value="Post"
//                             onClick=""
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Page6;