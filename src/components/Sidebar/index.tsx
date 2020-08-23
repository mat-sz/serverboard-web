import React from 'react';
import styles from './styles.module.scss';

import ServerList from '../ServerList';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ServerList />
    </div>
  );
};

export default Sidebar;
