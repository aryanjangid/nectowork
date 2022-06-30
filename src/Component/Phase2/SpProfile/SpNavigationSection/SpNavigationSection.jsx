import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./SpNavigationSection.css";

export default function SpNavigationSection(props) {
  const handleNavClick=(event)=>{
    event.preventDefault();
    var nav=document.querySelector('.spnav')
    for (var i = 0; i < nav.childNodes.length; i++) {
      if(nav.childNodes[i].id===event.target.id){
        nav.childNodes[i].className="pointer activePointer"
        props.handleActiveNav(event.target.id.slice(-1))
      }
      else{
        nav.childNodes[i].className="pointer"
      }
    }
  }

  return (
    <Fragment>
      {/* <div className={"navigation-bar"}>
            <div className={"item-1"}>
                <svg width="276" height="60" viewBox="0 0 276 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_1133)">
                        <mask id="path-1-inside-1_3_1133" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2 5C2 2.79086 3.79086 1 6 1H255.679C257.114 1 258.44 1.76914 259.152 3.01544L272.866 27.0154C273.569 28.2452 273.569 29.7548 272.866 30.9846L259.152 54.9846C258.44 56.2309 257.114 57 255.679 57H6C3.79086 57 2 55.2091 2 53V5Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2 5C2 2.79086 3.79086 1 6 1H255.679C257.114 1 258.44 1.76914 259.152 3.01544L272.866 27.0154C273.569 28.2452 273.569 29.7548 272.866 30.9846L259.152 54.9846C258.44 56.2309 257.114 57 255.679 57H6C3.79086 57 2 55.2091 2 53V5Z"
                              fill="white"/>
                        <path
                            d="M272.866 27.0154L273.734 26.5193V26.5193L272.866 27.0154ZM272.866 30.9846L273.734 31.4807V31.4807L272.866 30.9846ZM259.152 54.9846L260.02 55.4807L259.152 54.9846ZM259.152 3.01544L260.02 2.51931L259.152 3.01544ZM255.679 0H6V2H255.679V0ZM258.283 3.51158L271.998 27.5116L273.734 26.5193L260.02 2.51931L258.283 3.51158ZM271.998 27.5116C272.525 28.4339 272.525 29.5661 271.998 30.4884L273.734 31.4807C274.613 29.9435 274.613 28.0565 273.734 26.5193L271.998 27.5116ZM271.998 30.4884L258.283 54.4884L260.02 55.4807L273.734 31.4807L271.998 30.4884ZM6 58H255.679V56H6V58ZM1 5V53H3V5H1ZM258.283 54.4884C257.749 55.4231 256.755 56 255.679 56V58C257.473 58 259.13 57.0386 260.02 55.4807L258.283 54.4884ZM6 0C3.23858 0 1 2.23858 1 5H3C3 3.34315 4.34315 2 6 2V0ZM6 56C4.34315 56 3 54.6569 3 53H1C1 55.7614 3.23858 58 6 58V56ZM255.679 2C256.755 2 257.749 2.57686 258.283 3.51158L260.02 2.51931C259.13 0.96143 257.473 0 255.679 0V2Z"
                            fill="#C1C9D2" mask="url(#path-1-inside-1_3_1133)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_3_1133" x="0" y="0" width="275.393" height="60"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_1133"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_1133" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <h5 className={"navbar-item-text-1"}>Profile</h5>
            </div>
            <div className={"item-2"}>
                <svg width="274" height="60" viewBox="0 0 274 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_1152)">
                        <mask id="path-1-inside-1_3_1152" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M257.152 3.01544C256.439 1.76914 255.114 1 253.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.8214 57 6.89269 57H253.679C255.114 57 256.439 56.2309 257.152 54.9846L270.866 30.9846C271.569 29.7548 271.569 28.2452 270.866 27.0154L257.152 3.01544Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M257.152 3.01544C256.439 1.76914 255.114 1 253.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.8214 57 6.89269 57H253.679C255.114 57 256.439 56.2309 257.152 54.9846L270.866 30.9846C271.569 29.7548 271.569 28.2452 270.866 27.0154L257.152 3.01544Z"
                              fill="white"/>
                        <path
                            d="M14.8659 27.0154L13.9977 27.5116L14.8659 27.0154ZM14.8659 30.9846L13.9977 30.4884L14.8659 30.9846ZM270.866 30.9846L271.734 31.4807V31.4807L270.866 30.9846ZM270.866 27.0154L271.734 26.5193V26.5193L270.866 27.0154ZM257.152 3.01544L258.02 2.51931L257.152 3.01544ZM257.152 54.9846L258.02 55.4807L257.152 54.9846ZM6.89269 2H253.679V0H6.89269V2ZM15.7342 26.5193L4.28796 6.48842L2.55148 7.4807L13.9977 27.5116L15.7342 26.5193ZM15.7342 31.4807C16.6126 29.9435 16.6126 28.0565 15.7342 26.5193L13.9977 27.5116C14.5247 28.4339 14.5247 29.5661 13.9977 30.4884L15.7342 31.4807ZM4.28796 51.5116L15.7342 31.4807L13.9977 30.4884L2.55148 50.5193L4.28796 51.5116ZM253.679 56H6.89269V58H253.679V56ZM269.998 30.4884L256.283 54.4884L258.02 55.4807L271.734 31.4807L269.998 30.4884ZM269.998 27.5116C270.525 28.4339 270.525 29.5661 269.998 30.4884L271.734 31.4807C272.613 29.9435 272.613 28.0565 271.734 26.5193L269.998 27.5116ZM256.283 3.51158L269.998 27.5116L271.734 26.5193L258.02 2.51931L256.283 3.51158ZM2.55148 50.5193C0.646743 53.8526 3.05357 58 6.89269 58V56C4.58922 56 3.14512 53.5116 4.28796 51.5116L2.55148 50.5193ZM253.679 2C254.755 2 255.749 2.57686 256.283 3.51158L258.02 2.51931C257.13 0.961431 255.473 0 253.679 0V2ZM253.679 58C255.473 58 257.13 57.0386 258.02 55.4807L256.283 54.4884C255.749 55.4231 254.755 56 253.679 56V58ZM6.89269 0C3.05358 0 0.646742 4.14741 2.55148 7.4807L4.28796 6.48842C3.14512 4.48845 4.58922 2 6.89269 2V0Z"
                            fill="#C1C9D2" mask="url(#path-1-inside-1_3_1152)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_3_1152" x="0.88678" y="0" width="272.506" height="60"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_1152"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_1152" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <h5 className={"navbar-item-text-2"}>Requirement Posted</h5>
            </div>
            <div className={"item-3"}>
                <svg width="274" height="60" viewBox="0 0 274 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_1152)">
                        <mask id="path-1-inside-1_3_1152" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M257.152 3.01544C256.439 1.76914 255.114 1 253.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.8214 57 6.89269 57H253.679C255.114 57 256.439 56.2309 257.152 54.9846L270.866 30.9846C271.569 29.7548 271.569 28.2452 270.866 27.0154L257.152 3.01544Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M257.152 3.01544C256.439 1.76914 255.114 1 253.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.8214 57 6.89269 57H253.679C255.114 57 256.439 56.2309 257.152 54.9846L270.866 30.9846C271.569 29.7548 271.569 28.2452 270.866 27.0154L257.152 3.01544Z"
                              fill="white"/>
                        <path
                            d="M14.8659 27.0154L13.9977 27.5116L14.8659 27.0154ZM14.8659 30.9846L13.9977 30.4884L14.8659 30.9846ZM270.866 30.9846L271.734 31.4807V31.4807L270.866 30.9846ZM270.866 27.0154L271.734 26.5193V26.5193L270.866 27.0154ZM257.152 3.01544L258.02 2.51931L257.152 3.01544ZM257.152 54.9846L258.02 55.4807L257.152 54.9846ZM6.89269 2H253.679V0H6.89269V2ZM15.7342 26.5193L4.28796 6.48842L2.55148 7.4807L13.9977 27.5116L15.7342 26.5193ZM15.7342 31.4807C16.6126 29.9435 16.6126 28.0565 15.7342 26.5193L13.9977 27.5116C14.5247 28.4339 14.5247 29.5661 13.9977 30.4884L15.7342 31.4807ZM4.28796 51.5116L15.7342 31.4807L13.9977 30.4884L2.55148 50.5193L4.28796 51.5116ZM253.679 56H6.89269V58H253.679V56ZM269.998 30.4884L256.283 54.4884L258.02 55.4807L271.734 31.4807L269.998 30.4884ZM269.998 27.5116C270.525 28.4339 270.525 29.5661 269.998 30.4884L271.734 31.4807C272.613 29.9435 272.613 28.0565 271.734 26.5193L269.998 27.5116ZM256.283 3.51158L269.998 27.5116L271.734 26.5193L258.02 2.51931L256.283 3.51158ZM2.55148 50.5193C0.646743 53.8526 3.05357 58 6.89269 58V56C4.58922 56 3.14512 53.5116 4.28796 51.5116L2.55148 50.5193ZM253.679 2C254.755 2 255.749 2.57686 256.283 3.51158L258.02 2.51931C257.13 0.961431 255.473 0 253.679 0V2ZM253.679 58C255.473 58 257.13 57.0386 258.02 55.4807L256.283 54.4884C255.749 55.4231 254.755 56 253.679 56V58ZM6.89269 0C3.05358 0 0.646742 4.14741 2.55148 7.4807L4.28796 6.48842C3.14512 4.48845 4.58922 2 6.89269 2V0Z"
                            fill="#C1C9D2" mask="url(#path-1-inside-1_3_1152)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_3_1152" x="0.88678" y="0" width="272.506" height="60"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_1152"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_1152" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <h5 className={"navbar-item-text-3"}>Messages / Meetings</h5>
            </div>
            <div className={"item-4"}>
                <svg width="258" height="60" viewBox="0 0 258 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_1343)">
                        <mask id="path-1-inside-1_3_1343" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.41972 6.98456C1.89593 4.31793 3.8214 1 6.89269 1H252C254.209 1 256 2.79086 256 5V53C256 55.2091 254.209 57 252 57H6.89269C3.8214 57 1.89593 53.6821 3.41972 51.0154L14.8659 30.9846C15.5686 29.7548 15.5686 28.2452 14.8659 27.0154L3.41972 6.98456Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M3.41972 6.98456C1.89593 4.31793 3.8214 1 6.89269 1H252C254.209 1 256 2.79086 256 5V53C256 55.2091 254.209 57 252 57H6.89269C3.8214 57 1.89593 53.6821 3.41972 51.0154L14.8659 30.9846C15.5686 29.7548 15.5686 28.2452 14.8659 27.0154L3.41972 6.98456Z"
                              fill="white"/>
                        <path
                            d="M14.8659 30.9846L13.9977 30.4884L14.8659 30.9846ZM14.8659 27.0154L13.9977 27.5116L14.8659 27.0154ZM3.41972 51.0154L2.55148 50.5193L3.41972 51.0154ZM6.89269 2H252V0H6.89269V2ZM255 5V53H257V5H255ZM252 56H6.89269V58H252V56ZM4.28796 51.5116L15.7342 31.4807L13.9977 30.4884L2.55148 50.5193L4.28796 51.5116ZM15.7342 31.4807C16.6126 29.9435 16.6126 28.0565 15.7342 26.5193L13.9977 27.5116C14.5247 28.4339 14.5247 29.5661 13.9977 30.4884L15.7342 31.4807ZM15.7342 26.5193L4.28796 6.48842L2.55148 7.4807L13.9977 27.5116L15.7342 26.5193ZM6.89269 56C4.58922 56 3.14512 53.5116 4.28796 51.5116L2.55148 50.5193C0.646743 53.8526 3.05357 58 6.89269 58V56ZM255 53C255 54.6569 253.657 56 252 56V58C254.761 58 257 55.7614 257 53H255ZM252 2C253.657 2 255 3.34315 255 5H257C257 2.23858 254.761 0 252 0V2ZM6.89269 0C3.05358 0 0.646742 4.14741 2.55148 7.4807L4.28796 6.48842C3.14512 4.48845 4.58922 2 6.89269 2V0Z"
                            fill="#C1C9D2" mask="url(#path-1-inside-1_3_1343)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_3_1343" x="0.88678" y="0" width="257.113" height="60"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_1343"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_1343" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <h5 className={"navbar-item-text-4"}>Contract</h5>
            </div>
        </div> */}

        {/* 
      <div class="pointer1">
        <div class="text-content1">
          <p>Profile</p>
        </div>
      </div>
      <div class="pointer2">
        <div class="text-content2">
          <p>Requirement Posted</p>
        </div>
      </div>
      <div class="pointer3">
        <div class="text-content3">
          <p>Messages/Meetings</p>
        </div>
      </div>
      <div class="pointer4">
        <div class="text-content4"> */}


<div className="spnav">
      <div class="pointer activePointer" id="navItem1" onClick={event=>handleNavClick(event)}>
        <div class="text-content text-content1">
          <p>Profile</p>
        </div>
      </div>
      <div class="pointer" id="navItem2" onClick={event=>handleNavClick(event)}>
        <div class="text-content text-content2">
        <p>Requirement Posted</p>
        </div>
      </div>
      <div class="pointer" id="navItem3" onClick={event=>handleNavClick(event)}>
        <div class="text-content text-content3">
          <p>Messages/Meetings</p>
        </div>
      </div>
      <div class="pointer" id="navItem4" onClick={event=>handleNavClick(event)}>
        <div class="text-content text-content4">
          <p>Contract</p>
        </div>
      </div>
      </div>
    </Fragment>
  );
}
