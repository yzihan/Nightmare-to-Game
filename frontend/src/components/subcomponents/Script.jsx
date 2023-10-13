import React from "react";
import SampleBG from "../../assets/imgs/sample_backgroud.jpg";
import SampleProfile from "../../assets/imgs/sample_profile.jpg";
import IconBookMark from "../../assets/icons/script_bookmark.svg";
import IconClock from "../../assets/icons/script_clock.svg";
import IconStar from "../../assets/icons/script_star.svg";

const Script = ({nextPage}) => {
    return (
        <div className="script">
            <div className="script-img-section">
                <img src={SampleBG} alt="script background" className="script-background"></img>
                <img src={IconBookMark} alt="bookmark icon" className="script-bookmark"></img>
                <div className="script-type">
                    <img src={SampleProfile} alt="person profile" className="script-profile"></img>
                    <div className="script-username">Prisoner</div>
                </div>
            </div>
            <div className="script-name">Shantaram</div>
            <div className="script-info">
                <div className="script-time">
                    <img src={IconClock} alt="icon clock" className="script-clock"></img>
                    <div>20m</div>
                </div>
                <div className="script-rating">
                    <img src={IconStar} alt="icon star" className="script-star"></img>
                    <div>4.9/5</div>
                </div>
            </div>
            <button className="script-button" onClick={nextPage}>Try Now</button>
        </div>
    );
};

export default Script;