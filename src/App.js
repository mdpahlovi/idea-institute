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
                    element: <Home />,
                },
                {
                    path: "topics",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Topics />,
                },
                {
                    path: "/topic/:quizID",
                    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
                    element: <QuizDetails />,
                },
                {
                    path: "statistics",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
