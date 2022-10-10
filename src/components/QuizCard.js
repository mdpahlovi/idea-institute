import React from "react";

const QuizCard = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className="card card-compact bg-base-100 shadow-md">
            <figure>
                <img className="bg-[#131517]" src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Start Quiz{id}</button>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
