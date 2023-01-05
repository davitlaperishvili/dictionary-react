import React from "react";
import { useSelector } from "react-redux";
import "./wordInfo.scss";

export default function WordInfo() {
    const wordInfo = useSelector((state) => state.word[0]);
    console.log(wordInfo);
    const { word, phonetics, meanings } = wordInfo;

    return (
        <div className="word_info">
            <div className="word">{word}</div>
        </div>
    );
}
