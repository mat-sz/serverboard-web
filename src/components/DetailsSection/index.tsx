import React from 'react';
import styles from './styles.module.scss';

const DetailsSection: React.FC<{
    title: string,
    children: React.ReactNode,
}> = ({ title, children }) => {

    return (
        <section className={styles.section}>
            <h3>{ title }</h3>
            { children }
        </section>
    );
};

export default DetailsSection;