import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <section className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>Serverboard</h1>
      </Link>
    </section>
  );
};

export default Header;
