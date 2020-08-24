import React from 'react';
import styles from './styles.module.scss';

import ServerListItem from '../ServerListItem';

const ServerList: React.FC = () => {
  return (
    <ul className={styles.list}>
      <ServerListItem server={{ id: 'test' }} />
    </ul>
  );
};

export default ServerList;
