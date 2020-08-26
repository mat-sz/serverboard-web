import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';
import { ServerModel } from '../../types/Models';

export interface ServerListItemProps {
  server: ServerModel;
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
