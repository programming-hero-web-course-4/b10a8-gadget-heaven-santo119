
import React, { useEffect } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    useEffect(()=>{
        document.title = "Gadget Heaven | Statistics "
    },[])
    
    const studentsMarks = [
        {
            "id": 1,
            "name": "Alice",
            "physics": 90,
            "chemistry": 88,
            "math": 85
        },
        {
            "id": 2,
            "name": "Bob",
            "physics": 75,
            "chemistry": 70,
            "math": 72
        },
        {
            "id": 3,
            "name": "Charlie",
            "physics": 95,
            "chemistry": 93,
            "math": 91
        },
        {
            "id": 4,
            "name": "David",
            "physics": 72,
            "chemistry": 65,
            "math": 68
        },
        {
            "id": 5,
            "name": "Emily",
            "physics": 92,
            "chemistry": 90,
            "math": 89
        },
        {
            "id": 6,
            "name": "Frank",
            "physics": 81,
            "chemistry": 76,
            "math": 78
        },
        {
            "id": 7,
            "name": "Grace",
            "physics": 98,
            "chemistry": 97,
            "math": 95
        },
        {
            "id": 8,
            "name": "Henry",
            "physics": 85,
            "chemistry": 83,
            "math": 82
        },
        {
            "id": 9,
            "name": "Isabella",
            "physics": 78,
            "chemistry": 73,
            "math": 75
        },
        {
            "id": 10,
            "name": "Jack",
            "physics": 91,
            "chemistry": 89,
            "math": 88
        }
    ]

    return (
        <div className='text-blue-800 ml-10 mt-6 p-4'>
            <LineChart width={800} height={400} data={studentsMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='tomato'></Line>
                <Line dataKey="physics" stroke='blue'></Line>

            </LineChart>
           
        </div>
    );
};

export default Statistics;