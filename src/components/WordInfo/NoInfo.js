import React from "react";

export default function NoInfo({ message, resolution }) {
    return (
        <div className="word_info_wrap">
            <div className="no_info_wrap">
                <div className="no_info_message">{message}</div>
                {resolution ? <div className="no_info_message">{resolution}</div> : ""}
            </div>
        </div>
    );
}
