import React from "react";
import { useSelector } from "react-redux";
import NoInfo from "./NoInfo";
import "./wordInfo.scss";

export default function WordInfo() {
    const wordInfo = useSelector((state) => state.word[0]);
    function playAudio() {
        let audio = new Audio(wordInfo.phonetics[0].audio);
        audio.play();
    }
    function renderWordInfo() {
        if (!wordInfo) {
            return <NoInfo message="Education is important!" />;
        }

        if (wordInfo.title) {
            return <NoInfo message={wordInfo.message} resolution={wordInfo.resolution} />;
        }
        const { word, phonetics, meanings } = wordInfo;

        function renderSynonyms(synArr) {
            if (synArr && synArr.length > 0) {
                return (
                    <div className="synonyms">
                        <span>Synonyms</span>
                        {synArr.map((synonym) => {
                            return (
                                <div key={synonym} className="synonym">
                                    {synonym}
                                </div>
                            );
                        })}
                    </div>
                );
            }
        }
        return (
            <div className="word_info_wrap">
                <div className="word_details">
                    <div className="word">
                        <span>{word}</span>
                        <button onClick={playAudio}>
                            <i className="ri-user-voice-fill"></i>
                        </button>
                    </div>
                    <div className="part_of_speach">
                        <ul>
                            {meanings.map((meaning) => {
                                return (
                                    <li className="meaning_item" key={meaning.partOfSpeech}>
                                        <div className="part_of_speach_name">{meaning.partOfSpeech}</div>
                                        <div className="definition">
                                            <span>Definition:</span>
                                            {meaning.definitions[0].definition}
                                        </div>
                                        {renderSynonyms(meaning.synonyms)}
                                        <div className="example"></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return <div className="word_info">{renderWordInfo()}</div>;
}
