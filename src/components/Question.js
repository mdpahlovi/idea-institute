import React from "react";
import { BiShow } from "react-icons/bi";

const Question = ({ question, questionNo, totalQuestion, setAnswer, setOption }) => {
    const { correctAnswer, options } = question;

    // String TO HTML
    function srtingToHtml() {
        return { __html: question.question };
    }

    return (
        <div className="bg-base-100 px-5 py-5 my-border rounded-xl flex flex-col items-start w-full">
            <h4 className="mt-1 text-xl text-base-content/60 w-full flex justify-between items-start">
                Question {questionNo} of {totalQuestion}
                <label
                    htmlFor="my-modal"
                    onClick={() => setAnswer(correctAnswer)}
                    className="modal-button text-3xl text-base-content"
                >
                    <BiShow />
                </label>
            </h4>
            <div dangerouslySetInnerHTML={srtingToHtml()} className="my-4 text-2xl"></div>
            <div className="w-full flex flex-col gap-4">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={(e) => {
                            setOption(e.target.innerText);
                            setAnswer(correctAnswer);
                        }}
                        className="flex items-center py-4 px-5 space-x-2 border-2 bg-base-content/5 border-base-content/10 rounded-xl"
                    >
                        <input type="radio" className="radio mr-2" />
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
