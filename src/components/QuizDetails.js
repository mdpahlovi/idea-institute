import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Modal from "./Modal";
import Question from "./Question";

const QuizDetails = () => {
    const { data } = useLoaderData();
    const [id, setId] = useState("");
    const { name, questions } = data;
    return (
        <>
            <section className="mt-16 lg:mt-20 my-cotainer section-gap content-gap">
                <h1 className="text-5xl font-bold text-center">
                    Quiz Of <span className="text-primary">{name}</span>
                </h1>
                <div className="my-5 content-gap max-w-3xl mx-auto">
                    {questions.map((question, index) => (
                        <Question
                            key={index}
                            question={question}
                            questionNo={index + 1}
                            totalQuestion={questions.length}
                            setId={setId}
                        ></Question>
                    ))}
                </div>
            </section>
            <Modal questions={data.questions} id={id}></Modal>
        </>
    );
};

export default QuizDetails;
