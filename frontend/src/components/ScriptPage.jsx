import React from "react";
import Script from "./subcomponents/Script";
import "./css/script.css";
import History from "./subcomponents/History";

const ScriptPage = ({nextPage, prePage}) => {
    return (
        <div className="scriptpage">
            <div className="sp-top">
                <h2>Discover Simulations - Script Selection</h2>
                <div className="scripts">
                    <Script nextPage={nextPage}></Script>
                    <Script nextPage={nextPage}></Script>
                    <Script nextPage={nextPage}></Script>
                    
                </div>
            </div>

            <div className="sp-bottom">
                <h2>My History</h2>
                <div className="histories">
                    <History></History>
                    <History></History>
                </div>
            </div>

            {/* <button className="script-next-button" onClick={nextPage}>Next</button> */}
        </div>
    );
};

export default ScriptPage;