import React from "react"
import facebook from "../images/Icons/facebook.svg"
import twitter from "../images/Icons/twitter.svg"
import linkedin from "../images/Icons/linkedin.svg"
import github from "../images/Icons/github.svg"
import "./socialmedia.css"


const SocialMedia = ({ direction, twitter_link, facebook_link, linkedin_link, github_link }) => (

    <div>

        <a target="_blank" rel="noopener noreferrer" href={twitter_link !== "" && twitter_link !== undefined ? twitter_link : "https://twitter.com/WTMKolachi"}>
            <img src={twitter} className={"Social-Media-Button " + direction} alt={"Visit us on Twitter"} />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={facebook_link !== "" && facebook_link !== undefined ? facebook_link : "https://www.facebook.com/WTMKolachi"}>
            <img src={facebook} className={"Social-Media-Button " + direction} alt={"Visit us on facebook"} />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={github_link !== "" && github_link !== undefined ? github_link : "https://github.com/WTM-Kolachi"}>
            <img src={github} className={"Social-Media-Button " + direction} alt={"Visit us on GitHub"} />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={linkedin_link !== "" && linkedin_link !== undefined ? linkedin_link : "https://www.linkedin.com/company/wtmkolachi/"}>
            <img src={linkedin} className={"Social-Media-Button " + direction} alt={"Visit us on LinkedIn"} />
        </a>

    </div>
)

export default SocialMedia
