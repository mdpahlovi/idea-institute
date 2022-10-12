import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const Statistics = () => {
    const { data } = useLoaderData();

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <section className="my-container">
            <div className="section-gap">
                <h1 className="heading-text max-w-xl mb-6">
                    <span className="text-primary">LineChard</span> of Total Quiz
                </h1>
                <div className="max-w-3xl mx-auto" style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="total" stroke="#F7931E" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="section-gap m-0">
                <h1 className="heading-text mt-5">
                    <span className="text-primary">PieChart</span> of Total Quiz
                </h1>
                <div style={{ width: "100%", height: 350 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="total" data={data} label>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
