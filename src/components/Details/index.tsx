import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styles from './styles.module.scss';

import DetailsSection from '../DetailsSection';
import Info from '../Info';

const data = [
    {
        name: '2020-01-01', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-02', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-03', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-04', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-05', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-06', uptime: 99, downtime: 1,
    },
    {
        name: '2020-01-07', uptime: 95, downtime: 5,
    },
    {
        name: '2020-01-08', uptime: 90, downtime: 10,
    },
    {
        name: '2020-01-09', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-10', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-11', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-12', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-13', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-14', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-15', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-16', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-17', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-18', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-19', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-20', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-21', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-22', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-23', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-24', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-25', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-26', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-27', uptime: 100, downtime: 0,
    },
    {
        name: '2020-01-28', uptime: 100, downtime: 0,
    },
];

const Details: React.FC = () => {
    return (
        <div className={styles.details}>
            <h2>Server #1</h2>
            <DetailsSection title="Info">
                <Info />
            </DetailsSection>
            <DetailsSection title="Uptime">
                <div style={{ width: "100%", height: "150px" }}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#fff" />
                            <Tooltip />
                            <Bar dataKey="uptime" stackId="a" fill="#5f5" />
                            <Bar dataKey="downtime" stackId="a" fill="#f55" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </DetailsSection>
        </div>
    );
};

export default Details;