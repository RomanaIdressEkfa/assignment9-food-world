import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Rechart = () => {
    const data01 = [
        { name: '1st Part', value: 500 },
        { name: '2nd Part', value: 400 },
        { name: '3rd Part', value: 300 },
        { name: '4th Part', value: 200 },
    ];
    const data02 = [
        { name: 'Jan', value: 300 },
        { name: 'Feb', value: 200 },
        { name: 'Mar', value: 100 },
        { name: 'Apr', value: 80 },
        { name: 'May', value: 40 },
        { name: 'Jun', value: 30 },
        { name: 'Jul', value: 50 },
        { name: 'Aug', value: 100 },
        { name: 'Sep', value: 200 },
        { name: 'Oct', value: 150 },
        { name: 'Nov', value: 50 },
    ];
    return (
        <div>
            <h3 className='font-bold text-2xl mb-4'>Rechart no:2</h3>
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                    />
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Rechart;