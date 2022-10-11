import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    return (
        <section className="mt-16 lg:mt-20 my-cotainer section-gap content-gap">
            <h1 className="text-5xl font-bold text-center">
                Quiz Of <span className="text-primary">{name}</span>
            </h1>
            <div className="my-5 content-gap max-w-3xl mx-auto">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="bg-base-100 px-5 py-5 shadow-sm shadow-base-content rounded-xl flex flex-col items-start w-full"
                    >
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
        </section>
    );
};

export default QuizDetails;
