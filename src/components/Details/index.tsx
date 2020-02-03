import React from 'react';
import styles from './styles.module.scss';

import DetailsSection from '../DetailsSection';
import Info from '../Info';

const Details: React.FC = () => {

    return (
        <div className={styles.details}>
            <h2>Server #1</h2>
            <DetailsSection title="Info">
                <Info />
            </DetailsSection>
            <DetailsSection title="Uptime">
                <div>
                graph
                </div>
            </DetailsSection>
        </div>
    );
};

export default Details;