import React from 'react';

import styles from './styles.module.scss';
import Sidebar from '../../components/Sidebar';
import Details from '../../components/Details';

const DetailsPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Details />
    </div>
  );
};

export default DetailsPage;
