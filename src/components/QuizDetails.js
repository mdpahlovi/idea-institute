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

    // Toast Theme Toggle
    const themeToggle = () => {
        let dataTheme = document.documentElement.attributes[0];
        if (dataTheme.value === "light") {
            return "light";
        } else {
            return "dark";
        }
    };

    // Show toast
    const [optionAndAnswer, setOptionAndAnswer] = useState({});
    const { selectedOption, correctAnswer } = optionAndAnswer;
    if (selectedOption && correctAnswer) {
        if (selectedOption === correctAnswer) {
            toast.success("😲 WOW ! Your answer is right", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: themeToggle(),
            });
        } else {
            toast.error("😢 OPS ! your answer in wrong", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: themeToggle(),
            });
        }
    }

    return (
        <>
            <section className="my-container section-gap content-gap">
                <h1 className="heading-text">
                    Quiz Of <span className="text-primary">{name}</span>
                </h1>
                <div className="my-5 max-w-3xl mx-auto content-gap">
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
                autoClose={3000}
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
