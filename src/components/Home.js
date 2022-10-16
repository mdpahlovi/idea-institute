import React from "react";
import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="my-container section-gap my-0 content-gap">
                <h1 className="heading-text">
                    I will add <span className="text-primary">More Leter</span>
                </h1>
            </section>
        </>
    );
};

export default Home;
