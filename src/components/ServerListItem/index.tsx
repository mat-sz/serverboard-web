import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { ServerModel } from '../../types/Models';

export interface ServerListItemProps {
  server: ServerModel;
}

const ServerListItem: React.FC<ServerListItemProps> = ({ server }) => {
  const { id } = useParams<{ id?: string }>();
  const selected = useMemo(() => server.id === id, [server, id]);

  return (
    <Link
      to={'/' + server.id}
      className={styles.item + ' ' + (selected ? styles.selected : '')}
    >
      <div className={styles.name}>{server.name}</div>
      <div>{server.ip}</div>
      <div>last seen: never</div>
    </Link>
  );
};

export default ServerListItem;
