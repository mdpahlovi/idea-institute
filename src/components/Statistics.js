import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const { data } = useLoaderData();

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <section className="mt-16 lg:mt-20 my-container section-gap content-gap items-center">
            <h1 className="text-5xl font-bold text-center">
                <span className="text-primary">LineChard</span> of Total Quiz
            </h1>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="total" stroke="#143852" />
                <CartesianGrid stroke="#F7931E" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <h1 className="text-5xl font-bold text-center mt-5">
                <span className="text-primary">PieChart</span> of Total Quiz
            </h1>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    dataKey="total"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </section>
    );
};

export default Statistics;
