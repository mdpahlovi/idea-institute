import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home />,
                },
                {
                    path: "topics",
                    element: <Topics />,
                },
                {
                    path: "statistics",
                    element: <Statistics />,
                },
                {
                    path: "blog",
                    element: <Blog />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default App;
