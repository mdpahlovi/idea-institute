import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className="card card-compact bg-base-100 shadow-sm shadow-base-content">
            <figure>
                <img className="bg-secondary" src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <Link className="card-actions justify-end" to={`quiz/${id}`}>
                    <button className="btn btn-primary">Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizCard;
