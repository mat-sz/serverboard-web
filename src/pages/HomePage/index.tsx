import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';
import ServerListItem from '../../components/ServerListItem';
import { StateType } from '../../reducers';

const HomePage: React.FC = () => {
  const servers = useSelector((store: StateType) => store.servers);

  return (
    <div className={styles.list}>
      {servers.map(server => (
        <ServerListItem server={server} key={server.id} />
      ))}
    </div>
  );
};

export default HomePage;
