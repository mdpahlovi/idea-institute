import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import Question from "./Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizDetails = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;

    const [answer, setAnswer] = useState("");
    const [option, setOption] = useState("");

    // Toast Theme Toggle
    const themeToggle = () => {
        let dataTheme = document.documentElement.attributes[0];
        if (dataTheme.value === "light") {
            return "light";
        } else {
            return "dark";
        }
    };

    // Define Toast
    const correctNotify = () => {
        toast.success("😲 WOW ! Your answer is right", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: themeToggle(),
        });
    };
    const wrongNotify = () => {
        toast.error("😢 OPS ! Your answer is wrong", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: themeToggle(),
        });
    };

    // Call Toast
    if (option && answer) {
        option === answer ? correctNotify() : wrongNotify();
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
                            setOption={setOption}
                        ></Question>
                    ))}
                </div>
            </section>
            <Modal answer={answer}></Modal>
            <ToastContainer />
        </>
    );
};

export default QuizDetails;
