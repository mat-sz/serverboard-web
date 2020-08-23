import React from 'react';
import styles from './styles.module.scss';

const ServerListItem: React.FC = () => {
  return (
    <li className={styles.item}>
      <div className={styles.name}>Server #1</div>
      <div>0.0.0.0</div>
      <div>last seen: never</div>
    </li>
  );
};

export default ServerListItem;
