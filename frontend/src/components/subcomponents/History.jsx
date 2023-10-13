import React from "react";
import SampleBG from "../../assets/imgs/sample_backgroud.jpg";
import IconBookMark from "../../assets/icons/script_bookmark.svg";

const History = () => {
    return (
        <div className="history">
            <div className="history-img">
                <img src={SampleBG} alt="history background" className="history-background"></img>
            </div>

            <div className="history-info">
                <img src={IconBookMark} alt="icon bookmark" className="history-bookmark"></img>
                <div className="history-username">Shantaram</div>
                <div className="history-role">Act as myself</div>
                <div className="history-progress-bar"></div>
                <div className="history-progress">66% complete</div>
            </div>
        </div>
    );
};

export default History;