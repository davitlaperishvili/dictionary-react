import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWordAction } from "../../redux/actions";
import RequestInfo from "../../server/RequestInfo";
import "./addWord.scss";

export default function AddWord(props) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [formValue, setFormValue] = useState({
        word: "",
    });
    const [formError, setFormError] = useState(false);
    const placeholder = error ? "Please enter correct word" : "Please enter word";
    const isFormValueEmpty = (obj) => {
        for (const property in obj) {
            if (obj[property] === "") {
                return true;
            }
        }
        return false;
    };
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            if (!isFormValueEmpty(formValue)) {
                const wordInfo = await RequestInfo(formValue.word);
                if (wordInfo.title && wordInfo.title === "No Definitions Found") {
                    setFormError(true);
                } else {
                    dispatch(changeWordAction(wordInfo[0]));
                }
                setFormValue({
                    word: "",
                });
            } else {
                setFormError(true);
            }
        } catch (e) {
            console.log("Error in onFormSubmit function ===>>>", e);
        }
    }
    function setErrorHtml() {
        if (formError) {
            return <div className="Error"> Enter correct word, please </div>;
        }
    }
    function handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = { ...formValue, [name]: value };
        setFormValue(inputItem);
    }

    return (
        <div className="add_word">
            {setErrorHtml()}
            <div className="form_wrap">
                <form action="" onSubmit={onFormSubmit}>
                    <div className="form_items">
                        <div className="form_item">
                            <input type="text" className={error} name="word" value={formValue.word} onChange={handleInputChange} placeholder={placeholder} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
