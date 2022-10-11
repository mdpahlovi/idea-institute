import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const { data } = useLoaderData();

    // Responsive
    const resLineChart = () => {
        const { innerWidth } = window;
        if (innerWidth > 640) {
            return { w: 600, h: 300 };
        } else {
            return { w: 400, h: 200 };
        }
    };
    const resPieChart = () => {
        const { innerWidth } = window;
        if (innerWidth > 640) {
            return { wh: 400, ir: 200 };
        } else {
            return { wh: 300, ir: 150 };
        }
    };

    // PieChart color & percentage Calculattion
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
        <section className="my-container section-gap content-gap items-center">
            <h1 className="heading-text">
                <span className="text-primary">LineChard</span> of Total Quiz
            </h1>
            <LineChart width={resLineChart().w} height={resLineChart().h} data={data}>
                <Line type="monotone" dataKey="total" stroke="#143852" />
                <CartesianGrid stroke="#F7931E" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <h1 className="heading-text mt-5">
                <span className="text-primary">PieChart</span> of Total Quiz
            </h1>
            <PieChart width={resPieChart().wh} height={resPieChart().wh}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={resPieChart().ir}
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
