import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

export interface ServerListItemProps {
  server: {
    id: string;
  };
}

const ServerListItem: React.FC<ServerListItemProps> = ({ server }) => {
  const { id } = useParams<{ id?: string }>();
  const selected = useMemo(() => server.id === id, [server, id]);

  return (
    <li className={styles.item + ' ' + (selected ? styles.selected : '')}>
      <div className={styles.name}>Server #1</div>
      <div>0.0.0.0</div>
      <div>last seen: never</div>
    </li>
  );
};

export default ServerListItem;
