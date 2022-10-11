import React from "react";
import { BiShow } from "react-icons/bi";

const Question = ({ question, questionNo, totalQuestion, setAnswer, setOptionAndAnswer }) => {
    const { correctAnswer, options } = question;

    // String TO HTML
    function srtingToHtml() {
        return { __html: question.question };
    }

    return (
        <div className="bg-base-100 px-5 py-5 border rounded-xl flex flex-col items-start w-full">
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
                {options.map((answer, index) => (
                    <div
                        key={index}
                        className="flex items-center py-4 px-5 space-x-2 border-2 bg-base-content/5 border-base-content/10 rounded-xl"
                    >
                        <input
                            onClick={() =>
                                setOptionAndAnswer({ selectedOption: options[index], correctAnswer: correctAnswer })
                            }
                            type="radio"
                            className="w-6 h-6 radio"
                        />
                        <p>{answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
