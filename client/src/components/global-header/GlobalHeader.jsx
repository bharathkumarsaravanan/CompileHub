import React from "react";
import "./GlobalHeader.css";

export const GlobalHeader = ({userName}) => {
    return (
        <div className="global-header">
            <h1>Welcome, {userName}!</h1>
        </div>
    );
}