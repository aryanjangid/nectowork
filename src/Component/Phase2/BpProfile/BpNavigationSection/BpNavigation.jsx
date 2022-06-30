import React, { Fragment } from "react";
import "./BpNavigation.css";

export default function SpNavigationSection(props) {
  return (
    <Fragment>
      <div className="spnav">
        <div
          class="pointer"
        >
          <div class="text-content text-content1">
            <p>Profile</p>
          </div>
        </div>
        <div
          class="pointer"
          id="navItem2"
        >
          <div class="text-content text-content2">
            <p>Requirement Posted</p>
          </div>
        </div>
        <div
          class="pointer"
        >
          <div class="text-content text-content3">
            <p>Messages/Meetings</p>
          </div>
        </div>
        <div
          class="pointer"
        >
          <div class="text-content text-content4">
            <p>Contract</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
