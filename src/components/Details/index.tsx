import React from 'react';
import {
    BarChart, Bar, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import styles from './styles.module.scss';

import DetailsSection from '../DetailsSection';
import Info from '../Info';

const dates = [
    '2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07',
    '2020-01-08', '2020-01-09', '2020-01-10', '2020-01-11', '2020-01-12', '2020-01-13', '2020-01-14',
    '2020-01-15', '2020-01-16', '2020-01-17', '2020-01-18', '2020-01-19', '2020-01-20', '2020-01-21',
    '2020-01-22', '2020-01-23', '2020-01-24', '2020-01-25', '2020-01-26', '2020-01-27', '2020-01-28',
];

const data = dates.map((date) => {
    const uptime = Math.floor(Math.random() * 100);
    return { name: date, uptime: uptime, downtime: 100 - uptime };
});

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