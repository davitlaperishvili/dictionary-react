import React from "react";
import { useSelector } from "react-redux";
import NoInfo from "./NoInfo";
import "./wordInfo.scss";

export default function WordInfo() {
    const wordInfo = useSelector((state) => state.word[0]);
    function renderWordInfo() {
        if (!wordInfo) {
            return <NoInfo message="Education is important!" />;
        }

        if (wordInfo.title) {
            return <NoInfo message={wordInfo.message} resolution={wordInfo.resolution} />;
        }
        const { word, phonetics, meanings } = wordInfo;

        return (
            <div className="word_info_wrap">
                <div className="word">{word}</div>
            </div>
        );
    }

    return <div className="word_info">{renderWordInfo()}</div>;
}
