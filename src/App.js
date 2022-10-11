import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import QuizDetails from "./components/QuizDetails";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    loader: async () => {
                        return fetch("https://openapi.programming-hero.com/api/quiz");
                    },
                    element: <Home />,
                },
                {
                    path: "topics",
                    element: <Topics />,
                },
                {
                    path: "quiz/:quizID",
                    loader: async ({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`);
                    },
                    element: <QuizDetails />,
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
                {
                    path: "*",
                    element: <ErrorPage />,
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
