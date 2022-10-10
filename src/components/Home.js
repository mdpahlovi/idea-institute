import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import QuizCard from "./QuizCard";

const Home = () => {
    const { data } = useLoaderData();

    return (
        <>
            <Hero />
            <section className="my-container section-gap content-gap">
                <h1 className="text-5xl font-bold text-center">
                    Get Start <span className="text-primary">Quiz</span>
                </h1>
                <p className="max-w-lg mx-auto text-center">
                    you can practise and improve your skills whenever you choose to do so. You can also learn new
                    thinks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {data.map((quiz, index) => (
                        <QuizCard key={index} quiz={quiz}></QuizCard>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
