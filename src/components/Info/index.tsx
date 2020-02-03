import React from 'react';
import styles from './styles.module.scss';

import InfoItem from '../InfoItem';

const Info: React.FC = () => {

    return (
        <div className={styles.info}>
            <InfoItem title="Last seen" value="never" />
            <InfoItem title="Services" value="0/10" />
        </div>
    );
};

export default Info;