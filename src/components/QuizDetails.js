import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
    const { data } = useLoaderData();
    const { questions } = data;
    return (
        <div className="my-5 flex flex-col gap-5 max-w-3xl mx-auto pt-16 lg:pt-20">
            {questions.map((question, index) => (
                <div className="bg-base-100 px-5 py-5 shadow-sm shadow-base-content rounded-xl flex flex-col items-start w-full">
                    <h4 className="mt-1 text-xl text-base-content/60">
                        Question {index + 1} of {questions.length}
                    </h4>
                    <div className="my-4 text-2xl">{question.question}</div>
                    <div className="w-full flex flex-col gap-4">
                        {question.options.map((answer, index) => (
                            <div
                                key={index}
                                className="flex items-center py-4 px-5 space-x-2 border-2 bg-base-content/5 border-base-content/10 rounded-xl"
                            >
                                <input type="radio" className="w-6 h-6" />
                                <p>{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuizDetails;
