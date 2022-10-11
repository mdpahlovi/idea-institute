import React from "react";

const Blog = () => {
    const exOfUseRef = " <div ref={myRef} />";
    return (
        <section className="mt-16 lg:mt-20 my-container section-gap content-gap">
            <h1 className="text-5xl font-bold text-center">
                Our Letest <span className="text-primary">Blogs</span>
            </h1>
            <p className="max-w-lg mx-auto text-center">
                you can read our blog and improve your skills whenever you choose to do so. You can also learn new
                thinks.
            </p>
            <article className="max-w-2xl mx-auto content-gap">
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold flex justify-between">
                        What is the purpose of react router ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span className="font-bold">Ans: </span>
                            React Router is a standard library for routing in React. It enables the navigation among
                            views of various components in a React Application, allows changing the browser URL, and
                            keeps the UI in sync with the URL.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold flex justify-between">
                        How does context api works ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span className="font-bold">Ans: </span>
                            The React Context API is a way for a React app to effectively produce global variables that
                            can be passed around. This is the alternative to "prop drilling" or moving props from
                            grandparent to child to parent, and so on. Context is also touted as an easier, lighter
                            approach to state management using Redux.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold flex justify-between">
                        What is useref in react ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span className="font-bold">Ans: </span>
                            useRef is like a “box” that can hold a mutable value in its .current property. You might be
                            familiar with refs primarily as a way to access the DOM. If you pass a ref object to React
                            with
                            {exOfUseRef} , React will set its .current property to the corresponding DOM node whenever
                            that node changes.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blog;
