import React from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <section className={styles.header}>
      <h1 className={styles.logo}>Serverboard</h1>
    </section>
  );
};

export default Header;
