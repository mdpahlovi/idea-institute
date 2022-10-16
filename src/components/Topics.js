import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Topics = () => {
    const { data } = useLoaderData();
    return (
        <section className="my-container section-gap content-gap">
            <h1 className="heading-text">
                Get Start <span className="text-primary">Quiz</span>
            </h1>
            <p className="heading-details">
                you can practise and improve your skills whenever you choose to do so. You can also learn new thinks.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.map((quiz, index) => (
                    <QuizCard key={index} quiz={quiz}></QuizCard>
                ))}
            </div>
        </section>
    );
};

export default Topics;
