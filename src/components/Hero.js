import React from "react";

const Hero = () => {
    const url =
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    return (
        <header className="hero min-h-screen pt-16 lg:pt-20" style={{ backgroundImage: `url(${url})` }}>
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content flex-col px-6 text-white">
                <h1 className="heading-text">Let's join us to improve your skill</h1>
                <p className="heading-details">
                    World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and
                    start bighting your future today and impress your audiences. We give our best for you.
                </p>
                <div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
