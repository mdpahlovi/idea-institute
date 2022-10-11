import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import Question from "./Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizDetails = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;

    // Show answer
    const [answer, setAnswer] = useState("");

    // Show toast
    const [optionAndAnswer, setOptionAndAnswer] = useState({});
    const { selectedOption, correctAnswer } = optionAndAnswer;
    if (selectedOption && correctAnswer) {
        if (selectedOption === correctAnswer) {
            toast.success("🦄 Wow so easy!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error("🦄 Wow so easy!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
            <section className="mt-16 lg:mt-20 my-cotainer section-gap content-gap">
                <h1 className="text-5xl font-bold text-center">
                    Quiz Of <span className="text-primary">{name}</span>
                </h1>
                <div className="my-5 content-gap max-w-3xl mx-auto">
                    {questions.map((question, index) => (
                        <Question
                            key={question.id}
                            question={question}
                            questionNo={index + 1}
                            totalQuestion={questions.length}
                            setAnswer={setAnswer}
                            setOptionAndAnswer={setOptionAndAnswer}
                        ></Question>
                    ))}
                </div>
            </section>
            <Modal answer={answer}></Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </>
    );
};

export default QuizDetails;
